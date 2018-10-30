// @flow
import {getKeybaseUsernameAndDevicename} from './keybase-status.js'
import {runApiCommand} from './chat-api.js'
import {ChannelWatcher} from './channel-watcher.js'
import {chatChannelToKey} from './utils.js'
import {FullWatcher} from './full-watcher.js'
import {GasPreserver} from './gas-preserver.js'
import type {MessagesHandler, DeviceUsernamePair, ChatChannel} from './types.js'
import type {ApiCommandArg} from './chat-api.js'
import keybaseExec from './keybase-exec'

type InitOptions = {|
  username: string,
  paperkey: string,
  verbose?: boolean,
|}

/*
 * TODO: Better Flow types for JSON params to keychase chat api
 */
type ChatListOptions = {|
  number?: number,
  time?: string,
  since?: string,
  includeHidden?: boolean,
  topicType?: string,
  channel?: string,
  public?: boolean,
  private?: boolean,
|}

// --exploding-lifetime intentionally left out
type ChatSendOptions = {|
  topicType?: string,
  channel?: string,
  message?: string,
  public?: boolean,
  private?: boolean,
  setHeadline?: string,
  clearHeadline?: string,
  nonblock?: boolean,
|}

// ============================================================================

class Bot {
  _dPair: ?DeviceUsernamePair
  _initialized: boolean
  _channelWatchers: Map<string, ChannelWatcher>
  _fullWatcher: ?FullWatcher
  _gasPreserver: GasPreserver
  _verbose: boolean

  // --------------------------------------------------------------------------

  constructor() {
    this._verbose = false
    this._dPair = null
    this._initialized = false
    this._channelWatchers = new Map()
    this._fullWatcher = null
    this._gasPreserver = new GasPreserver()
  }

  // --------------------------------------------------------------------------

  init(options: InitOptions, cb: CbError): void {
    this._verbose = options.verbose || false

    keybaseExec({args: ['oneshot', '--username', options.username, '--paperkey', options.paperkey]}, () => {
      // TODO: Does not handle rejected promise from getKeybaseUsernameAndDevicename
      getKeybaseUsernameAndDevicename().then(currentDPair => {
        if (currentDPair) {
          this._dPair = currentDPair
          this._log(`intialized ${currentDPair.username} (device=${currentDPair.devicename})`)
        }
        this._initialized = true
      })
    })
      .catch(err => console.log(err))
      .then(() => {
        return getKeybaseUsernameAndDevicename().then(currentDPair => {
          if (currentDPair) {
            this._dPair = currentDPair
            this._log(`intialized ${currentDPair.username} (device=${currentDPair.devicename})`)
          }
          this._initialized = true
        })
      })
  }

  // --------------------------------------------------------------------------

  chatList(options: ChatListOptions): Promise<any> {
    return this._safelyRunApiCommand({method: 'list', options})
  }

  // --------------------------------------------------------------------------

  chatSend(options: ChatSendOptions): Promise<any> {
    const {channel, message} = options
    return this._safelyRunApiCommand({method: 'send', options: {channel, message}})
  }

  // --------------------------------------------------------------------------

  chatRead(options: {channel: ChatChannel, unreadOnly?: boolean, peek?: boolean}): Promise<any> {
    const {channel} = options
    let peek: boolean = false
    let unreadOnly: boolean = false
    if (typeof options.peek !== 'undefined') {
      peek = options.peek
    }
    if (typeof options.unreadOnly !== 'undefined') {
      unreadOnly = options.unreadOnly
    }
    return this._safelyRunApiCommand({method: 'read', options: {channel, peek, unreadOnly}})
  }

  // --------------------------------------------------------------------------

  chatDelete(options: {channel: ChatChannel, messageId: number}): Promise<any> {
    const {channel, messageId} = options
    return this._safelyRunApiCommand({method: 'delete', options: {channel, messageId}})
  }

  // --------------------------------------------------------------------------

  myInfo(): ?DeviceUsernamePair {
    return this._dPair
  }

  // --------------------------------------------------------------------------

  watchChannelForNewMessages(options: {channel: ChatChannel, onMessages: MessagesHandler}) {
    const {channel, onMessages} = options
    const key = chatChannelToKey(channel)
    if (this._channelWatchers.has(key)) {
      throw new Error(`already watching the channel ${JSON.stringify(channel)}`)
    } else {
      this._channelWatchers.set(key, new ChannelWatcher({channel, onMessages, bot: this}))
    }
  }

  // --------------------------------------------------------------------------

  watchAllChannelsForNewMessages(options: {onMessages: MessagesHandler}) {
    const {onMessages} = options
    if (this._fullWatcher) {
      throw new Error(`already watching watching; can't have 2 message watchers}`)
    } else {
      this._fullWatcher = new FullWatcher({onMessages, bot: this})
    }
  }

  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  //  - make sure inited ok
  //  - make sure user is still the same user since init
  // --------------------------------------------------------------------------

  _log(msg: string): void {
    if (this._verbose) {
      console.log(msg)
    }
  }

  _checkUserAndInit(): Promise<any> {
    return new Promise((resolve, reject) => {
      getKeybaseUsernameAndDevicename().then(currentDPair => {
        if (
          !this._initialized ||
          !currentDPair ||
          !this._dPair ||
          currentDPair.username !== this._dPair.username
        ) {
          reject(new Error(`Uh-oh, username has changed or we never initialized correctly.`))
        }
        resolve()
      })
    })
  }

  // --------------------------------------------------------------------------

  _safelyRunApiCommand(arg: ApiCommandArg): Promise<any> {
    return new Promise((resolve, reject) => {
      this._checkUserAndInit().then(() => {
        return runApiCommand(arg)
          .then(res => {
            resolve(res)
          })
          .catch(err => reject(err))
      })
    })
  }
}

export {Bot}
