// @flow
import BaseBot from './base-bot'
import ChatBot from './chat/bot'
import type {InitOptions} from './types'

/**
 * A Keybase bot.
 *
 * @class Bot
 */
class Bot extends BaseBot {
  chat: ChatBot

  constructor() {
    super()
    this.chat = new ChatBot()
  }

  async init(options: InitOptions) {
    await super.init(options)
    await this.chat.init({...options, alreadyLoggedIn: true})
  }
}

export {Bot}
