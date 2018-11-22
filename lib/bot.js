// @flow
import getKeybaseUsernameAndDevicename from './keybase-status.js'
import {runApiCommand} from './chat-api.js'
import keybaseExec from './keybase-exec'
import type {ApiCommandArg} from './chat-api.js'
import type {
  InitOptions,
  DeviceUsernamePair,
  ChatChannel,
  ChatOptionsList,
  ChatOptionsSend,
  ChatReadMessage,
  ChatOptionsDelete,
  ChatOptionsRead,
} from './types.js'

/**
 * A general Keybase bot.
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
