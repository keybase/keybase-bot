// @flow
import Base from './base-bot'
import Chat from './chat'
import {createStore, reducer, initialState} from './store'
import type {Store} from './store/types'

class Bot {
  store: Store
  init: any
  deinit: any
  myInfo: any
  chat: any

  // Create a new store for each bot initialized
  constructor() {
    const _store = createStore(reducer, initialState)
    const base = Base(_store)
    const chat = Chat(_store)
    this.init = base.init
    this.deinit = base.deinit
    this.myInfo = base.myInfo
    this.chat = chat
  }
}

export default Bot
