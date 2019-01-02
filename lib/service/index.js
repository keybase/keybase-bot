// @flow
import {keybaseExec, randomTempDir, rmdirRecursive, keybaseStatus} from '../utils'
import {spawn} from 'child_process'
import readline from 'readline'
import type {BotInfo} from '../utils/keybaseStatus'

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

  constructor() {
    this.initialized = false
    this.verbose = false
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

    // Unlike with clients we don't need to store the service, since it shuts down with ctrl stop
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
    }
    if (this.username !== username) {
      throw new Error('Failed to initialize service.')
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
    }
  }

  async deinit(): Promise<void> {
    if (!this.initialized) {
      throw new Error('Cannot deinitialize an uninitialized bot.')
    }

    // If we init the bot using paperkey credentials, then we want to stop the service and remove our generated directory.
    if (this.initialized === 'paperkey') {
      // these 2 commands might be unnecessary; since the service was `spawn`ed not detached
      // they will also shutdown via SIGINT. We don't want to make service detached because it'd be nice for
      // them to auto-shutdown if the user kills the process
      try {
        await keybaseExec(this.homeDir, ['logout'])
        await keybaseExec(this.homeDir, ['ctl', 'stop', '--shutdown'])
      } catch (e) {}
      if (this.homeDir) {
        await rmdirRecursive(this.homeDir)
      }
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
    const child = spawn('keybase', args)
    const lineReader = readline.createInterface({input: child.stderr})
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
