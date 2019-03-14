// @flow
import {keybaseExec, keybaseStatus, pingKeybaseService, timeout} from '../utils'
import {spawn} from 'child_process'
import type {BotInfo} from '../utils/keybaseStatus'
import type {InitOptions} from '../utils/options'
import path from 'path'

class Service {
  initialized: false | 'paperkey' | 'runningService'
  running: boolean
  username: void | string
  devicename: void | string
  homeDir: void | string
  verbose: boolean
  botLite: boolean
  disableTyping: boolean
  serviceLogFile: void | string
  workingDir: string
  constructor(workingDir: string) {
    this.workingDir = workingDir
    this.initialized = false
    this.verbose = false
    this.botLite = true
    this.disableTyping = true
  }

  async init(username: string, paperkey: string, options?: InitOptions): Promise<void> {
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

    this.homeDir = this.workingDir
    this.serviceLogFile = path.join(this.homeDir, 'Library', 'Logs', 'keybase.service.log')
    this.botLite = options ? Boolean(typeof options.botLite !== 'boolean' || options.botLite) : true
    this.disableTyping = options
      ? Boolean(typeof options.disableTyping !== 'boolean' || options.disableTyping)
      : true
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
        'disable-typing',
        this.disableTyping.toString(),
      ])

      const currentInfo = await keybaseStatus(this.workingDir, this.homeDir)

      if (currentInfo && currentInfo.username && currentInfo.devicename) {
        this.initialized = 'paperkey'
        this.username = currentInfo.username
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

  async initFromRunningService(homeDir?: string, options?: InitOptions) {
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

  async _killCustomService(): Promise<void> {
    // these 2 commands might be unnecessary; since the service was `spawn`ed not detached
    // they will also shutdown via SIGINT. We don't want to make service detached because it'd be nice for
    // them to auto-shutdown if the user kills the process
    try {
      await keybaseExec(this.workingDir, this.homeDir, ['logout'])
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

  async deinit(): Promise<void> {
    if (!this.initialized) {
      throw new Error('Cannot deinitialize an uninitialized bot.')
    }
    // If we init the bot using paperkey credentials, then we want to stop the service and remove our generated directory.
    if (this.initialized === 'paperkey') {
      await this._killCustomService()
    }
    this.initialized = false
  }

  myInfo(): ?BotInfo {
    if (this.username && this.devicename) {
      return {
        username: this.username,
        devicename: this.devicename,
        homeDir: this.homeDir ? this.homeDir : undefined,
        botLite: this.botLite,
        disableTyping: this.disableTyping,
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
  async startupService(): Promise<void> {
    const args = ['service']
    if (this.homeDir) {
      args.unshift('--home', this.homeDir)
    }
    if (this.serviceLogFile) {
      args.unshift('-d', '--log-file', this.serviceLogFile)
    }
    if (this.botLite) {
      args.unshift('--enable-bot-lite-mode')
    }

    const child = spawn(path.join(this.workingDir, 'keybase'), args, {env: process.env})

    // keep track of the subprocess' state
    this.running = true
    child.on('exit', code => {
      this.running = false
    })

    return new Promise(async (resolve, reject) => {
      child.on('close', code => {
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
    })
  }
}

export default Service
