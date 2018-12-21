// @flow
import Service, {type InitOptions} from './service'
import ChatClient from './chat-client'
import BotInfo from './utils/keybaseStatus'

class Bot {
  chat: ChatClient
  _service: Service

  constructor() {
    this._service = new Service()
    this.chat = new ChatClient()
  }

  async init(username: string, paperkey: string, options?: InitOptions): Promise<void> {
    await this._service.init(username, paperkey, options)
    await this.chat._init(this.myInfo().homeDir, options)
  }

  myInfo(): BotInfo {
    return this._service.myInfo()
  }

  /**
   * Deinitializes the bot by logging out, stopping the keybase service, and removing any leftover login files made by the bot. This should be run before your bot ends.
   * @memberof BaseBot
   */
  async deinit(): Promise<void> {
    // Stop the service
    await this._service.deinit()
    await this.chat.deinit()
  }
}

export default Bot
