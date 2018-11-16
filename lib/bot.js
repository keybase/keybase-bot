// @flow
import {getKeybaseUsernameAndDevicename} from './keybase-status.js'
import {runApiCommand} from './chat-api.js'
import keybaseExec from './keybase-exec'
import type {ApiCommandArg} from './chat-api.js'
import type {
  InitOptions,
  MessagesHandler,
  DeviceUsernamePair,
  ChatChannel,
  ChatOptionsList,
  ChatOptionsSend,
  ChatReadMessage,
  ChatOptionsDelete,
  ChatOptionsRead,
} from './types.js'

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
   * `bot.init()` must be run to initialize the bot before using other methods. It
   * checks to make sure you're properly logged into Keybase and gets basic
   * info about your session. Afterwards, feel free to check bot.myInfo() to
   * see or check who you're logged in as.
   *
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
   * Deinitializes a bot by logging it out of its current Keybase session.
   * Should be run after your bot finishes.
   *
   * @memberof Bot
   */
  deinit(): Promise<?string> {
    return keybaseExec(['logout'])
  }

  /**
   * Returns your username and devicename.
   *
   * @memberof Bot
   */
  myInfo(): ?DeviceUsernamePair {
    return this._dPair
  }

  /**
   * Lists your chats, with info on which ones have unread messages.
   *
   * @memberof Bot
   */
  chatList(options: ChatOptionsList): Promise<any> {
    return this._safelyRunApiCommand({method: 'list', options})
  }

  /**
   * Sends a message to a certain channel.
   *
   * @memberof Bot
   */
  chatSend(options: ChatOptionsSend): Promise<any> {
    const {channel, message} = options
    return this._safelyRunApiCommand({method: 'send', options: {channel, message}})
  }

  /**
   * Reads the messages in a channel. You can read with or without marking as read.
   *
   * @memberof Bot
   */
  chatRead(options: ChatOptionsRead): Promise<any> {
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
   *  This function will put your bot into insane mode, where it reads
   *  everything it can (marking messages as read as it reads them), and every
   *  new message it finds it will pass to you, so you can do what you want
   *  with it. For example, if you want to write a Keybase bot that talks shit
   *  at anyone who dares approach it, this is the function to use.
   *  Specifically, it will call the onMessages function you provide,
   *  clustering messages together by channel. So, for example, if it detects
   *  3 messages from person A, and 2 messages from person B, it will call
   *  your onMessages function twice; once for each channel.
   *
   *  This function may take a few seconds to recognize new messages, as the
   *  current implementation polls. Soon we expose a realtime stream in the
   *  API.
   *
   *  @memberof Bot
   *
   *  @example
   * // reply to incoming traffic on all channels with 'thanks!'
   * var onMessages = function(m) {
   *   var channel = m.channel
   *   var messages = m.messages // we could look in this array to read them and write custom replies
   *   bot.chatSend(
   *     {
   *       channel: channel,
   *       message: {
   *         body: 'thanks!!!',
   *       },
   *     },
   *     function(err, res) {
   *       if (err) {
   *         console.log(err)
   *       }
   *     }
   *   )
   * }
   * bot.watchAllChannelsForNewMessages({onMessages: onMessages})
   *
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

  /**
   * Deletes a message in a channel. Messages have messageId's associated with
   * them, which you can learn in `bot.chatRead`. Known bug: the GUI has a cache,
   * and deleting from the CLI may not become apparent immediately.
   *
   * @memberof Bot
   */
  chatDelete(options: ChatOptionsDelete): Promise<any> {
    const {channel, message_id: messageId} = options
    return this._safelyRunApiCommand({method: 'delete', options: {channel, messageId}})
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
