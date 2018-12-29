// @flow
import Service, {type InitOptions} from './service'
import ChatClient from './chat-client'
import type {BotInfo} from './service'

/** A Keybase bot. */
class Bot {
  chat: ChatClient
  _service: Service

  /**
   * Create a bot. Note you can't do much too exciting with your bot after you instantiate it; you have to initialize it first.
   * @memberof Bot
   */
  constructor() {
    this._service = new Service()
    this.chat = new ChatClient()
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
  }

  async _initSubBots(options?: InitOptions) {
    const info = this.myInfo()
    if (info) {
      await this.chat._init(info.homeDir, options)
    } else {
      throw new Error('Issue initializing bot.')
    }
  }
}

export default Bot
