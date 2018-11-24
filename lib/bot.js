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
    return this._safelyRunApiCommand({method: 'send', options})
  }

  /**
   * Reads the messages in a channel. You can read with or without marking as read.
   *
   * @memberof Bot
   */
  chatRead(options: ChatOptionsRead): Promise<any> {
    const optionsWithDefaults: ChatOptionsRead = {
      ...options,
      peek: options.peek !== undefined ? options.peek : false,
      unreadOnly: options.unreadOnly !== undefined ? options.unreadOnly : false,
    }
    return this._safelyRunApiCommand({method: 'read', options: optionsWithDefaults})
  }

  /**
   * Deletes a message in a channel. Messages have messageId's associated with
   * them, which you can learn in `bot.chatRead`. Known bug: the GUI has a cache,
   * and deleting from the CLI may not become apparent immediately.
   *
   * @memberof Bot
   */
  chatDelete(options: ChatOptionsDelete): Promise<any> {
    return this._safelyRunApiCommand({method: 'delete', options})
  }

  /**
   * Listens for new chat messages on a specified channel. The `onMessage` function is called for every message your bot receives.
   * This is pretty similar to `watchAllChannelsForNewMessages`, except it specifically checks one channel.
   *
   * @memberof Bot
   */
  watchChannelForNewMessages(channel: ChatChannel, onMessage: (message: ChatReadMessage) => void) {
    keybaseExec(['chat', 'api-listen'], {
      onStdOut: line => {
        try {
          const messageObject = JSON.parse(line)
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
   * This function will put your bot into insane mode, where it reads
   * everything it can and every new message it finds it will pass to you, so
   * you can do what you want with it. For example, if you want to write a
   * Keybase bot that talks shit at anyone who dares approach it, this is the
   * function to use.*
   *
   * Specifically, it will call the `onMessage` function you provide for every
   * message your bot receives.*
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
      onStdOut: line => {
        try {
          const messageObject = JSON.parse(line)
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
