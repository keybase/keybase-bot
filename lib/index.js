// @flow
import Service, {type InitOptions} from './service'
import ChatClient from './chat-client'
import BotInfo from './utils/keybaseStatus'

/**
 * A Keybase bot.
 * @class
 */
class Bot {
  chat: ChatClient
  _service: Service

  constructor() {
    this._service = new Service()
    this.chat = new ChatClient()
  }

  /**
   * Initialize your bot by starting an instance of the Keybase service and logging in using oneshot mode.
   * @param username - The username of your bot's Keybase account.
   * @param paperkey - The paperkey of your bot's Keybase account.
   * @memberof Bot
   */
  async init(username: string, paperkey: string, options?: InitOptions): Promise<void> {
    await this._service.init(username, paperkey, options)
    await this.chat._init(this.myInfo().homeDir, options)
  }

  myInfo(): BotInfo {
    return this._service.myInfo()
  }

  /**
   * Deinitializes the bot by logging out, stopping the keybase service, and removing any leftover login files made by the bot. This should be run before your bot ends.
   * @memberof Bot
   */
  async deinit(): Promise<void> {
    // Stop the clients first, so that they aren't trying to
    // talk to a deinit'ed service
    await this.chat._deinit()
    await this._service.deinit()
  }
}

export default Bot
