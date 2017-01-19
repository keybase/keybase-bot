// @flow
import {getKeybaseUsernameAndDevicename} from './keybase-status.js'
import {runApiCommand} from './chat-api.js'
import {ChannelWatcher} from './channel-watcher.js'
import {chatChannelToKey} from './utils.js'
import {FullWatcher} from './full-watcher.js'
import {GasPreserver} from './gas-preserver.js'
import type {CbError, CbAny} from './types.js'
import type {DeviceUsernamePair, ChatChannel, ChatSendMessage} from './types.js'
import type {MessagesHandler} from './types.js'
import type {ApiCommandArg} from './chat-api.js'


// ============================================================================

class Bot {
  _dPair: ?DeviceUsernamePair;
  _initialized: boolean;
  _channelWatchers: Map<string, ChannelWatcher>;
  _fullWatcher: ?FullWatcher;
  _gasPreserver: GasPreserver;

  // --------------------------------------------------------------------------

  constructor () {
    this._dPair = null
    this._initialized = false
    this._channelWatchers = new Map()
    this._fullWatcher = null
    this._gasPreserver = new GasPreserver()
  }

  // --------------------------------------------------------------------------

  init (cb: CbError): void {
    getKeybaseUsernameAndDevicename((err, currentDPair) => {
      if (currentDPair) {
        this._dPair = currentDPair
        console.log(`intialized ${currentDPair.username} (device=${currentDPair.devicename})`)
      }
      this._initialized = true
      let successStr = err ? 'WITH ERROR' : 'successfully'
      console.log `
        ======
        Initialized ${successStr}! This chat module is a work in progress. Please do not use.
        ======
      `

      cb(err)
    })
  }

  // --------------------------------------------------------------------------

  chatList (cb: CbAny): void {
    this._safelyRunApiCommand({method: 'list', options: {}}, (err, res) => {
      return cb(err, res)
    })
  }

  // --------------------------------------------------------------------------

  chatSend (options: {channel: ChatChannel, message: ChatSendMessage}, cb: CbAny): void {
    let {channel, message} = options
    this._safelyRunApiCommand({method: 'send', options: {channel, message}}, (err, res) => {
      return cb(err, res)
    })
  }

  // --------------------------------------------------------------------------

  chatRead (options: {channel: ChatChannel, unreadOnly?: boolean, peek?: boolean}, cb: CbAny): void {
    let {channel} = options
    let peek: boolean = false
    let unread_only: boolean = false
    if (typeof options.peek !== 'undefined') {
      peek = options.peek
    }
    if (typeof options.unreadOnly !== 'undefined') {
      unread_only = options.unreadOnly
    }
    this._safelyRunApiCommand({method: 'read', options: {channel, peek, unread_only}}, (err, res) => {
      return cb(err, res)
    })
  }

  // --------------------------------------------------------------------------

  chatDelete (options: {channel: ChatChannel, messageId: number}, cb: CbAny): void {
    let {channel} = options
    let message_id = options.messageId
    this._safelyRunApiCommand({method: 'delete', options: {channel, message_id}}, (err, res) => {
      return cb(err, res)
    })
  }


  // --------------------------------------------------------------------------

  myInfo (): ?DeviceUsernamePair {
    return this._dPair
  }

  // --------------------------------------------------------------------------

  watchChannelForNewMessagesStartingNow (options: {channel: ChatChannel, onMessages: MessagesHandler}) {
    // TODO: once I have real new message info from patrick drop this "starting now" idea.
    let {channel, onMessages} = options
    let key = chatChannelToKey(channel)
    if (this._channelWatchers.has(key)) {
      throw new Error(`already watching the channel ${JSON.stringify(channel)}`)
    } else {
      this._channelWatchers.set(key, new ChannelWatcher({channel, onMessages, bot: this}))
    }
  }

  // --------------------------------------------------------------------------

  watchForNewMessages (options: {onMessages: MessagesHandler}) {
    // TODO: once I have real new message info from patrick drop this "starting now" idea.
    let {onMessages} = options
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

  _checkUserAndInit (cb: CbError): void {
    // console.log('+ checking user and init')
    getKeybaseUsernameAndDevicename((err, currentDPair) => {
      if (!err && (!this._initialized || !currentDPair || !this._dPair || currentDPair.username !== this._dPair.username)) {
        err = new Error(`Uh-oh, username has changed or we never initialized correctly.`)
      }
      // let ok:string = (err === null).toString()
      // console.log(`- checking user and init (ok=${ok})`)
      return cb(err)
    })
  }

  // --------------------------------------------------------------------------

  _safelyRunApiCommand (arg: ApiCommandArg, cb: CbError) : void {
    this._checkUserAndInit((err) => {
      if (!err) {
        runApiCommand(arg, (err, res) => {
          return cb(err, res)
        })
      } else {
        return cb(err, null)
      }
    })
  }

}


export {Bot}
