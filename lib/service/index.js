// @flow
import {keybaseExec, randomTempDir, rmdirRecursive, keybaseStatus} from '../utils'
import {spawn} from 'child_process'
import readline from 'readline'
import BotInfo from '../utils/keybaseStatus'
export type InitOptions = {|
  verbose?: boolean,
|}

class BaseBot {
  initializedYet: boolean
  username: void | string
  devicename: void | string
  homeDir: string
  verbose: boolean

  constructor() {
    this.initializedYet = false
    this.verbose = false
  }

  /**
   * Initializes your bot.
   * @memberof BaseBot
   */
  async init(username: string, paperkey: string, options?: InitOptions): Promise<void> {
    if (!username || typeof username !== 'string') {
      throw new Error(`Please provide a username to initialize the bot. Got: ${JSON.stringify(username)}`)
    }
    if (!paperkey || typeof paperkey !== 'string') {
      // Don't want to accidentally print the paperkey to STDERR.
      throw new Error(`Please provide a paperkey to initialize the bot.`)
    }
    this.homeDir = randomTempDir()

    // Unlike with clients we don't need to store the service, since it shuts down with ctrl stop
    await this.startupService()
    await keybaseExec(this.homeDir, ['oneshot', '--username', username], {
      stdinBuffer: paperkey,
    })

    const currentInfo = await keybaseStatus(this.homeDir)
    if (currentInfo && currentInfo.username && currentInfo.devicename) {
      this.initializedYet = true
      this.username = currentInfo.username
      this.devicename = currentInfo.devicename
      this.verbose = options ? Boolean(options.verbose) : false
    }
    if (this.username !== username) {
      throw new Error('Failed to initialize service.')
    }
  }

  /**
   * Deinitializes the bot by removing its own directory and shutting down.
   * @memberof BaseBot
   */
  async deinit(): Promise<void> {
    await keybaseExec(this.homeDir, ['logout'])
    await keybaseExec(this.homeDir, ['ctl', 'stop', '--shutdown'])
    await rmdirRecursive(this.homeDir)
  }

  /**
   * Returns the username and device name of the current bot, or `null` if the bot has not been initialized.
   * @memberof BaseBot
   */
  myInfo(): ?BotInfo {
    if (this.username && this.devicename && this.homeDir) {
      return {username: this.username, devicename: this.devicename, homeDir: this.homeDir}
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
    const child = spawn('keybase', ['--home', this.homeDir, 'service'])
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

export default BaseBot
