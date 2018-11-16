// @flow
import {getKeybaseUsernameAndDevicename} from './keybase-status.js'
import {runApiCommand} from './chat-api.js'
import keybaseExec from './keybase-exec'
import type {ApiCommandArg} from './chat-api.js'
import type {
  DeviceUsernamePair,
  ChatChannel,
  ChatOptionsList,
  ChatOptionsSend,
  ChatReadMessage,
} from './types.js'

type InitOptions = {|
  username: string,
  paperkey: string,
  verbose?: boolean,
|}

/**
 * A Keybase bot.
 *
 * @class Bot
 */
class Bot {
  _dPair: ?DeviceUsernamePair
  _initialized: boolean
  _verbose: boolean

  constructor() {
    this._verbose = false
    this._dPair = null
    this._initialized = false
  }

  /**
   * Initializes a bot by logging in with the given credentials. This must be run before your bot can be used.
   *
   * @param {InitOptions} options – An object expecting `username` and `paperkey` (which are pretty self-explanatory), as well as `verbose`, which says whether the bot should log much of what it's doing.
   * @returns {Promise<?string>}
   * @memberof Bot
   */
  init(options: InitOptions): Promise<?string> {
    this._verbose = options.verbose || false

    return keybaseExec(['oneshot', '--username', options.username], {stdinBuffer: options.paperkey}).then(
      () => {
        return getKeybaseUsernameAndDevicename().then(currentDPair => {
          if (currentDPair) {
            this._dPair = currentDPair
            this._log(`intialized ${currentDPair.username} (device=${currentDPair.devicename})`)
          }
          this._initialized = true
        })
      }
    )
  }

  /**
   * Deinitializes a bot by logging it out of its current Keybase session. Should be run after your bot finishes.
   *
   * @returns {Promise<void>}
   * @memberof Bot
   */
  deinit(): Promise<?string> {
    return keybaseExec(['logout'])
  }

  chatList(options: ChatOptionsList): Promise<any> {
    return this._safelyRunApiCommand({method: 'list', options})
  }

  chatSend(options: ChatOptionsSend): Promise<any> {
    const {channel, message} = options
    return this._safelyRunApiCommand({method: 'send', options: {channel, message}})
  }

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

  chatDelete(options: {channel: ChatChannel, messageId: number}): Promise<any> {
    const {channel, messageId} = options
    return this._safelyRunApiCommand({method: 'delete', options: {channel, messageId}})
  }

  myInfo(): ?DeviceUsernamePair {
    return this._dPair
  }

  /**
   * Listens for new chat messages on a specified channel. The `onMessage` function is called for every message your bot receives.
   * @param onMessage
   * @memberof Bot
   */
  watchChannelForNewMessages(channel: ChatChannel, onMessage: (message: ChatReadMessage) => void) {
    keybaseExec(['chat', 'api-listen'], {
      onStdOut: chunk => {
        try {
          const streamString = chunk.toString('utf8')
          const messageObject = JSON.parse(streamString)
          if (channel.name === messageObject.msg.channel.name) {
            onMessage(messageObject.msg)
          }
        } catch (error) {
          console.error(error)
        }
      },
    })
  }

  /**
   * Listens for new chat messages on all channels. The `onMessage` function is called for every message your bot receives.
   * @param onMessage
   * @memberof Bot
   */
  watchAllChannelsForNewMessages(onMessage: (message: ChatReadMessage) => void) {
    keybaseExec(['chat', 'api-listen'], {
      onStdOut: chunk => {
        try {
          const streamString = chunk.toString('utf8')
          const messageObject = JSON.parse(streamString)
          onMessage(messageObject.msg)
        } catch (error) {
          console.error(error)
        }
      },
    })
  }

  // --------------------------------------------------------------------------
  //  - make sure inited ok
  //  - make sure user is still the same user since init
  // --------------------------------------------------------------------------

  _log(msg: string): void {
    if (this._verbose) {
      console.log(msg)
    }
  }

  _checkUserAndInit(): Promise<void> {
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

  _safelyRunApiCommand(arg: ApiCommandArg): Promise<any> {
    return this._checkUserAndInit().then(() => {
      return runApiCommand(arg)
    })
  }
}

export {Bot}
