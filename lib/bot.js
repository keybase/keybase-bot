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
class Bot {
  chat: any

  // Create a new store for each bot initialized
  constructor() {
    this.store = createStore(reducer, initialState)
    const base = Base(this.store)
    this.init = base.init
    this.deinit = base.deinit
    this.myInfo = base.myInfo
    this.chat = Chat(this.store)
    // this.team = Team(this.store)
  }
}

export default Bot
