// @flow
import type {ChildProcess} from 'child_process'
import {keybaseExec, randomTempDir, keybaseServiceStartup} from '../utils'

export type Initialized = false | 'paperkey' | 'existingService'

export type InitOptions = {|
  verbose?: boolean,
|}

export type BotInfo = {|username: string, devicename: string, homeDir: string|}

class BaseBot {
  initialized: Initialized
  username: void | string
  devicename: void | string
  homeDir: string
  verbose: boolean
  spawnedProcesses: ChildProcess[]

  constructor() {
    this.initialized = false
    this.verbose = false
    this.spawnedProcesses = []
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

    // We don't need to store the service in spawnedProcesses since we stop that with `ctrl stop`
    await keybaseServiceStartup(this.homeDir)
    await keybaseExec(this.homeDir, ['oneshot', '--username', username], {
      stdinBuffer: paperkey,
    })

    const currentDPair = await this._getBotInfoFromStatusCall()
    if (currentDPair && currentDPair.username && currentDPair.devicename) {
      this.initialized = 'paperkey'
      this.username = currentDPair.username
      this.devicename = currentDPair.devicename
      this.verbose = options ? Boolean(options.verbose) : false
      // TODO: @jacob - refactor logging
      // this._log(`intialized ${currentDPair.username} (device=${currentDPair.devicename})`)
    }
  }

  /**
   * Initialize a Keybase bot off of a currently running service.
   * @memberof BaseBot
   */
  async initFromRunningService(homeDir: string, options?: InitOptions) {
    this.homeDir = homeDir
    const currentDPair = await this._getBotInfoFromStatusCall()
    if (currentDPair && currentDPair.username && currentDPair.devicename) {
      this.initialized = 'existingService'
      this.username = currentDPair.username
      this.devicename = currentDPair.devicename
      this.verbose = options ? Boolean(options.verbose) : false
      // TODO: @jacob - refactor logging
      // this._log(`intialized ${currentDPair.username} (device=${currentDPair.devicename})`)
    }
  }

  /**
   * Deinitializes the bot by logging out, stopping the keybase service, and removing any leftover login files made by the bot. This should be run before your bot ends.
   * @memberof BaseBot
   */
  async deinit(): Promise<void> {
    for (const child of this.spawnedProcesses) {
      child.kill()
    }
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
   * @ignore
   * _guardInitialized takes the current store and the api function to guard
   * It ensures that the following conditions remain true
   *  1. The bot was initialized before calling the given api function
   *  2. The bot has username and devicename if it has been initialized
   *  2. The current username and devicename have not changed values
   *
   * If any condition is false, an error is thrown
   * Otherwise, return the function (to be executed later)
   *
   */
  async _guardInitialized() {
    const currentDPair = await this._getBotInfoFromStatusCall()
    if (
      !this.initialized ||
      !currentDPair ||
      !this.username ||
      !this.devicename ||
      currentDPair.username !== this.username ||
      currentDPair.devicename !== this.devicename
    ) {
      throw new Error('Uh-oh, username has changed or we never initialized correctly.')
    }
  }

  /**
   * @ignore
   * Returns { username, devicename } from `keybase status -j`.
   */
  async _getBotInfoFromStatusCall() {
    const status = await keybaseExec(this.homeDir, ['status', '--json'], {json: true})
    if (status && status.Username && status.Device && status.Device.name) {
      return {username: status.Username, devicename: status.Device.name, homeDir: this.homeDir}
    } else {
      throw new Error('Failed to get current username and device name.')
    }
  }
}

export default BaseBot
