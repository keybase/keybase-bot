// @flow
import BaseBot from './base-bot'
import ChatBot from './chat/bot'
import TeamBot from './team/bot'
import type {InitOptions} from './types'

/**
 * A Keybase bot.
 *
 * @class Bot
 */
class Bot extends BaseBot {
  chat: ChatBot
  team: TeamBot

  constructor() {
    super()
    this.chat = new ChatBot()
    this.team = new TeamBot()
  }

  async init(options: InitOptions) {
    await super.init(options)
    await this.chat.init({...options, alreadyLoggedIn: true})
    await this.team.init({...options, alreadyLoggedIn: true})
  }
}

export default Bot
