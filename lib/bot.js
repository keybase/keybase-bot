// @flow
import Base from './base-bot'
import Chat from './chat'
import {createStore, reducer, initialState} from './store'
import type {Store} from './store/types'

/**
 * A general Keybase bot.
 *
 * @class Bot
 */
class Bot {
  store: Store
  init: any
  deinit: any
  myInfo: any
  chat: any

  // Create a new store for each bot initialized
  constructor() {
    this.store = createStore(reducer, initialState)
    const base = Base(this.store)
    const chat = Chat(this.store)
    this.init = base.init
    this.deinit = base.deinit
    this.myInfo = base.myInfo
    this.chat = chat
  }
}

export default Bot
