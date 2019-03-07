// @flow
import Service from './service'
import ChatClient from './chat-client'
import WalletClient from './wallet-client'
import TeamClient from './team-client'
import type {BotInfo} from './utils/keybaseStatus'
import mkdirp from 'mkdirp'
import {randomTempDir, whichKeybase, rmdirRecursive} from './utils'
import {promisify} from 'util'
import {copyFile} from 'fs'
import path from 'path'
import type {InitOptions} from './utils/options'

/** A Keybase bot. */
class Bot {
  chat: ChatClient
  wallet: WalletClient
  team: TeamClient
  _workingDir: string // where KB binary copied, and homeDir (if not existing svc)
  _service: Service

  /**
   * Create a bot. Note you can't do much too exciting with your bot after you instantiate it; you have to initialize it first.
   * @memberof Bot
   * @example
   * const bot = new Bot()
   */
  constructor() {
    this._workingDir = randomTempDir()
    this._service = new Service(this._workingDir)
    this.chat = new ChatClient(this._workingDir)
    this.wallet = new WalletClient(this._workingDir)
    this.team = new TeamClient(this._workingDir)
  }

  /**
   * Initialize your bot by starting an instance of the Keybase service and logging in using oneshot mode.
   * @memberof Bot
   * @param username - The username of your bot's Keybase account.
   * @param paperkey - The paperkey of your bot's Keybase account.
   * @param options - The initialization options for your bot.
   * @example
   * bot.init('username', 'paperkey')
   */
  async init(username: string, paperkey: string, options?: InitOptions): Promise<void> {
    await this._prepWorkingDir()
    await this._service.init(username, paperkey, options)
    await this._initSubBots(options)
  }

  /**
   * Initialize your bot by using an existing running service with a logged in user.
   * @memberof Bot
   * @param homeDir - The home directory of this currently running service. Leave blank to use the default homeDir for your system.
   * @param options - The initialization options for your bot.
   * @example
   * bot.initFromRunningService()
   */
  async initFromRunningService(homeDir?: string, options?: InitOptions): Promise<void> {
    await this._prepWorkingDir()
    await this._service.initFromRunningService(homeDir, options)
    await this._initSubBots(options)
  }

  /**
   * Get info about your bot!
   * @memberof Bot
   * @returns – Useful information like the username, device, and home directory of your bot. If your bot isn't initialized, you'll get `null`.
   * @example
   * const info = bot.myInfo()
   */
  myInfo(): ?BotInfo {
    return this._service.myInfo()
  }

  /**
   * Deinitializes the bot by logging out, stopping the keybase service, and removing any leftover login files made by the bot. This should be run before your bot ends.
   * @memberof Bot
   * @example
   * bot.deinit()
   */
  async deinit(): Promise<void> {
    // Stop the clients first, so that they aren't trying to
    // talk to a deinit'ed service

    await this.chat._deinit()
    await this._service.deinit()
    await rmdirRecursive(this._workingDir)
  }

  async _prepWorkingDir(): Promise<void> {
    const keybaseBinaryLocation = await whichKeybase()
    const destination = path.join(this._workingDir, 'keybase')
    await promisify(mkdirp)(this._workingDir)
    await promisify(copyFile)(keybaseBinaryLocation, destination)
  }

  async _initSubBots(options?: InitOptions) {
    const info = this.myInfo()
    if (info) {
      await this.chat._init(info.homeDir, options)
      await this.wallet._init(info.homeDir, options)
      await this.team._init(info.homeDir, options)
    } else {
      throw new Error('Issue initializing bot.')
    }
  }
}

export default Bot
