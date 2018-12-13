// @flow
import BaseBot, {type InitOptions} from './base'
import ChatBot from './chat'

class Bot extends BaseBot {
  chat: ChatBot

  constructor() {
    super()
    this.chat = new ChatBot()
  }

  async init(username: string, paperkey: string, options?: InitOptions) {
    await super.init(username, paperkey, options)
    await this.chat.initFromCurrentCredentials(this.homeDir, options)
  }
}

export default Bot
