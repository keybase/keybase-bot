// @flow
import {keybaseExec, randomTempDir, rmdirRecursive, keybaseStatus, timeout} from '../utils'
import {spawn} from 'child_process'
import readline from 'readline'
import type {BotInfo} from '../utils/keybaseStatus'
import path from 'path'
import fs from 'fs'
import {promisify} from 'util'

/**
 * Options for initializing the bot.
 */
export type InitOptions = {|
  verbose?: boolean,
|}

class Service {
  initialized: false | 'paperkey' | 'runningService'
  username: void | string
  devicename: void | string
  homeDir: void | string
  verbose: boolean
  botLite: boolean
  serviceLogFile: void | string
  constructor() {
    this.initialized = false
    this.verbose = false
    this.botLite = true
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

    this.homeDir = randomTempDir()
    this.serviceLogFile = path.join(this.homeDir, 'Library', 'Logs', 'keybase.service.log')
    // Unlike with clients we don't need to store the service, since it shuts down with ctrl stop
    try {
      await this.startupService()
      await keybaseExec(this.homeDir, ['oneshot', '--username', username], {
        stdinBuffer: paperkey,
      })

      const currentInfo = await keybaseStatus(this.homeDir)
      if (currentInfo && currentInfo.username && currentInfo.devicename) {
        this.initialized = 'paperkey'
        this.username = currentInfo.username
        this.devicename = currentInfo.devicename
        this.verbose = options ? Boolean(options.verbose) : false
        this.botLite = options ? Boolean(options.botLite) : true
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

    const currentInfo = await keybaseStatus(this.homeDir)
    if (currentInfo && currentInfo.username && currentInfo.devicename) {
      this.initialized = 'runningService'
      this.username = currentInfo.username
      this.devicename = currentInfo.devicename
      this.verbose = options ? Boolean(options.verbose) : false
      this.botLite = options ? Boolean(options.botLite) : true
    }
  }

  async _killCustomService(): Promise<void> {
    // these 2 commands might be unnecessary; since the service was `spawn`ed not detached
    // they will also shutdown via SIGINT. We don't want to make service detached because it'd be nice for
    // them to auto-shutdown if the user kills the process
    try {
      await keybaseExec(this.homeDir, ['logout'])
    } catch (e) {}
    try {
      await keybaseExec(this.homeDir, ['ctl', 'stop', '--shutdown'])
    } catch (e) {}
    /* check needed to satisfy flow */
    if (this.homeDir) {
      await rmdirRecursive(this.homeDir)
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
      }
    }
    return null
  }

  /**
   *
   * @ignore
   * This is a bit different from normal keybaseExecs and is unique to the service
   * starting up
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
    const child = spawn('keybase', args, process.env)})

    // we can't watch the output file before it's created or it'll throw an error, so we have to watch
    // for it. A simple fs.stat in a loop works great.
    // Note this happens in under 10ms based on my tests, but I'm giving it up to 10 seconds.
    if (this.serviceLogFile) {
      const fileToWatchFor = this.serviceLogFile
      let i = 0
      while (true) {
        await timeout(10)
        try {
          await promisify(fs.stat)(fileToWatchFor)
          break
        } catch (e) {
          if (++i >= 1000) {
            throw new Error("Couldn't start up service fast enough")
          }
        }
      }
    }

    const input = this.serviceLogFile ? fs.createReadStream(this.serviceLogFile) : child.stderr
    const lineReader = readline.createInterface({input})

    return new Promise((resolve, reject) => {
      child.on('close', code => {
        // any code here including 0 is bad here, if it happens before resolve
        //, since this service should stay running
        reject(new Error(`keybase service exited with code ${code}:`))
      })
      lineReader.on('line', (line: string) => {
        if (line.indexOf('net.Listen on unix:keybased.sock')) {
          resolve()
        }
      })
    })
  }
}

export default Service
