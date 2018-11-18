// @flow
import {runApiCommand} from '../chat-api.js'
import keybaseExec from '../keybase-exec'
import type {ApiCommandArg} from '../chat-api.js'
import type {
  ChatChannel,
  ChatOptionsList,
  ChatOptionsSend,
  ChatReadMessage,
  ChatOptionsDelete,
  ChatOptionsRead,
} from '../types.js'
import BaseBot from '../base-bot'

/**
 * A Keybase bot.
 *
 * @class Bot
 */
class ChatBot extends BaseBot {
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
  send(options: ChatOptionsSend): Promise<any> {
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

  _safelyRunApiCommand(arg: ApiCommandArg): Promise<any> {
    return this._checkUserAndInit().then(() => {
      return runApiCommand(arg)
    })
  }
}

export default ChatBot
