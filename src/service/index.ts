import {keybaseExec, keybaseStatus, pingKeybaseService, timeout} from '../utils'
import {spawn} from 'child_process'
import {BotInfo} from '../utils/keybaseStatus'
import {InitOptions} from '../utils/options'
import keybaseBinaryName from '../utils/keybaseBinaryName'
import path from 'path'
import {AdminDebugLogger} from '../utils/adminDebugLogger'

class Service {
  public initialized: false | 'paperkey' | 'runningService'
  public running: boolean
  public username: void | string
  public devicename: void | string
  public homeDir: void | string
  public verbose: boolean
  public botLite: boolean
  public disableTyping: boolean
  public serviceLogFile: void | string
  public workingDir: string
  public autoLogSendOnCrash: boolean
  private _paperkey: void | string
  private _useDetachedService: boolean
  private _debugLogging: boolean
  protected _adminDebugLogger: AdminDebugLogger

  public constructor(workingDir: string, adminDebugLogger: AdminDebugLogger, debugLogging: boolean) {
    this._adminDebugLogger = adminDebugLogger
    this.workingDir = workingDir
    this.initialized = false
    this.verbose = false
    this.botLite = true
    this.disableTyping = true
    this.autoLogSendOnCrash = false
    this._useDetachedService = false
    this._debugLogging = debugLogging
  }

  public async init(username: string, paperkey: string, options?: InitOptions): Promise<void> {
    if (!username || typeof username !== 'string') {
      throw new Error(`Please provide a username to initialize the bot. Got: ${JSON.stringify(username)}`)
    }
    if (!paperkey || typeof paperkey !== 'string') {
      // Don't want to accidentally print the paperkey to STDERR.
      throw new Error(`Please provide a paperkey to initialize the bot.`)
    }
    if (this.initialized) {
      throw new Error('Cannot initialize an already initialized bot.')
    }
    if (options && options.useDetachedService) {
      this._useDetachedService = true
    }

    this.homeDir = this.workingDir
    if (this._debugLogging) {
      this.serviceLogFile = path.join(this.homeDir, 'logs', 'keybase.service.log')
    }
    this.botLite = options ? Boolean(typeof options.botLite !== 'boolean' || options.botLite) : true
    this.disableTyping = options ? Boolean(typeof options.disableTyping !== 'boolean' || options.disableTyping) : true
    this.autoLogSendOnCrash = options ? Boolean(typeof options.autoLogSendOnCrash === 'boolean' && options.autoLogSendOnCrash) : false
    // Unlike with clients we don't need to store the service, since it shuts down with ctrl stop
    try {
      await this.startupService()
      await keybaseExec(this.workingDir, this.homeDir, ['oneshot', '--username', username], {
        stdinBuffer: paperkey,
      })

      // Set the typing notification settings for the bot
      await keybaseExec(this.workingDir, this.homeDir, [
        'chat',
        'notification-settings',
        `--disable-typing=${this.disableTyping.toString()}`,
      ])

      const currentInfo = await keybaseStatus(this.workingDir, this.homeDir)

      if (currentInfo && currentInfo.username && currentInfo.devicename) {
        this.initialized = 'paperkey'
        this.username = currentInfo.username
        this._paperkey = paperkey
        this.devicename = currentInfo.devicename
        this.verbose = options ? Boolean(options.verbose) : false
      }
      if (this.username !== username) {
        throw new Error('Failed to initialize service.')
      }
    } catch (err) {
      await this._killCustomService()
      throw err
    }
  }

  public async initFromRunningService(homeDir?: string, options?: InitOptions): Promise<void> {
    if (this.initialized) {
      throw new Error('Cannot initialize an already initialized bot.')
    }
    this.homeDir = homeDir

    const currentInfo = await keybaseStatus(this.workingDir, this.homeDir)
    if (currentInfo && currentInfo.username && currentInfo.devicename) {
      this.initialized = 'runningService'
      this.username = currentInfo.username
      this.devicename = currentInfo.devicename
      this.verbose = options ? Boolean(options.verbose) : false
    }
  }

  private async _killCustomService(): Promise<void> {
    // probably not necessary unless service was `spawn`ed detached (an InitOption)
    // We don't nromally want to make service detached because a user might forget deinit()
    // leaving it open, when killing their script
    try {
      await keybaseExec(this.workingDir, this.homeDir, ['logout', '--force'])
    } catch (e) {}
    try {
      await keybaseExec(this.workingDir, this.homeDir, ['ctl', 'stop', '--shutdown'])
    } catch (e) {}
    // wait until the process quits by watching the running property
    let i = 0
    while (true) {
      await timeout(100)

      if (!this.running) {
        break
      }

      if (++i >= 100) {
        throw new Error(`The service didn't finish shutting down in time (${this.workingDir})`)
      }
    }
  }

  public async deinit(): Promise<void> {
    if (!this.initialized) {
      throw new Error('Cannot deinitialize an uninitialized bot.')
    }
    // If we init the bot using paperkey credentials, then we want to stop the service and remove our generated directory.
    if (this.initialized === 'paperkey') {
      await this._killCustomService()
    }
    this.initialized = false
  }

  public myInfo(): BotInfo | null {
    if (this.username && this.devicename) {
      return {
        username: this.username,
        devicename: this.devicename,
        homeDir: this.homeDir ? this.homeDir : undefined,
        botLite: this.botLite,
        disableTyping: this.disableTyping,
        debugLogging: this._debugLogging,
      }
    }
    return null
  }

  /**
   *
   * @ignore
   * This is a bit different from normal keybaseExecs and is unique to the service
   * starting up
   * @example
   * service.startupService()
   */
  public async startupService(): Promise<void> {
    const args = ['service']
    if (this.homeDir) {
      args.unshift('--home', this.homeDir)
    }
    if (this.serviceLogFile) {
      args.unshift('--log-file', this.serviceLogFile)
    }
    if (this.botLite) {
      args.unshift('--enable-bot-lite-mode')
    }
    const child = spawn(path.join(this.workingDir, keybaseBinaryName), args, {env: process.env, detached: this._useDetachedService})

    // keep track of the subprocess' state
    this.running = true
    child.on(
      'exit',
      async (code): Promise<void> => {
        this.running = false
        if (code !== 0 && this.autoLogSendOnCrash) {
          await this.logSend()
        }
      }
    )

    return new Promise(
      async (resolve, reject): Promise<void> => {
        child.on('close', (code): void => {
          // any code here including 0 is bad here, if it happens before resolve
          //, since this service should stay running
          reject(new Error(`keybase service exited with code ${code} (${this.workingDir})`))
        })

        // Wait for the service to start up - give it 10s.
        let i = 0
        while (!(await pingKeybaseService(this.workingDir, this.homeDir))) {
          await timeout(100)
          if (++i >= 100) {
            throw new Error("Couldn't start up service fast enough")
          }
        }
        resolve()
      }
    )
  }

  public async logSend(): Promise<void> {
    const initiallyRunning = this.running
    if (!initiallyRunning) {
      try {
        await this.startupService()
        if (this.initialized === 'paperkey' && this.username && this._paperkey) {
          await keybaseExec(this.workingDir, this.homeDir, ['oneshot', '--username', this.username], {
            stdinBuffer: this._paperkey,
          })
        }
      } catch (e) {}
    }

    const feedback = `keybase-bot auto log send
username: ${this.username || 'none'}
initialized: ${this.initialized || 'false'}`

    const args = ['log', 'send', '--no-confirm', '--feedback', feedback]
    if (this.serviceLogFile) {
      args.unshift('--log-file', this.serviceLogFile)
    }
    await keybaseExec(this.workingDir, this.homeDir, args)

    if (!initiallyRunning) {
      await this._killCustomService()
    }
  }
}

export default Service
