// @flow

import {guardInitialized} from '../base'
import {
  formatOptions,
  keybaseExec,
  validateChatChannel,
  validateChatMessage,
  validateMessageId,
  validateOnMessage,
} from '../utils'
import {CHAT_API_VERSION} from '../constants'
import {withStore, withGuards} from '../store'
import type {Store} from '../store/types'
import type {ApiCommandArg} from '../types'
import type {
  List,
  Read,
  Send,
  Delete,
  WatchChannelForNewMessage,
  WatchAllChannelsForNewMessages,
} from './types'

const runApiCommand = async (arg: ApiCommandArg): Promise<any> => {
  const options = formatOptions(arg.options)
  const input = {
    method: arg.method,
    params: {
      version: CHAT_API_VERSION,
      options,
    },
  }
  const inputString = JSON.stringify(input)
  const size = inputString.length
  const output = await keybaseExec(arg.keybaseHomeDir, ['chat', 'api'], {
    stdinBuffer: Buffer.alloc(size, inputString, 'utf8'),
    json: true,
  })
  const res = output.result
  return res
}

/**
 * Keybase chat api functions
 *
 * @namespace chat
 * @memberof bot
 */

const _list = (store: Store) => {
  /**
   * Lists your chats, with info on which ones have unread messages.
   *
   * @memberof bot.chat
   *
   */
  const list: List = async options => {
    const {keybaseHomeDir} = store.getState()
    const res = await runApiCommand({method: 'list', options, keybaseHomeDir})
    return res ? res.conversations || [] : []
  }
  return list
}

const _read = (store: Store) => {
  /**
   * Reads the messages in a channel. You can read with or without marking as read.
   *
   * @memberof bot.chat
   */
  const read: Read = async (channel, options) => {
    validateChatChannel(channel, 'bot.chat.read')
    const {keybaseHomeDir} = store.getState()
    const optionsWithDefaults = {
      ...options,
      channel,
      peek: options.peek !== undefined ? options.peek : false,
      unreadOnly: options.unreadOnly !== undefined ? options.unreadOnly : false,
    }
    await runApiCommand({method: 'read', options: optionsWithDefaults, keybaseHomeDir})
  }
  return read
}

const _send = (store: Store) => {
  /**
   * Sends a message to a certain channel.
   *
   * @memberof bot.chat
   */
  const send: Send = async (channel, message, options) => {
    validateChatChannel(channel, 'bot.chat.send')
    validateChatMessage(message, 'bot.chat.send')
    const args = {
      ...options,
      channel,
      message,
    }
    const {keybaseHomeDir} = store.getState()
    const res = await runApiCommand({method: 'send', options: args, keybaseHomeDir})
    if (!res) {
      throw new Error('keybase chat send returned nothing')
    }
    if (res.hasOwnProperty('error')) {
      throw new Error(res.error.message)
    }
    return res
  }
  return send
}

const _deleteMessage = (store: Store) => {
  /**
   * Deletes a message in a channel. Messages have messageId's associated with
   * them, which you can learn in `bot.chatRead`. Known bug: the GUI has a cache,
   * and deleting from the CLI may not become apparent immediately.
   *
   * @alias delete
   * @memberof bot.chat
   */

  // delete is a javascript reserved word and cannot be used as a function signature
  const deleteMessage: Delete = async (channel, messageId, options) => {
    validateChatChannel(channel, 'bot.chat.delete')
    validateMessageId(messageId, 'bot.chat.delete')
    const args = {
      ...options,
      channel,
      messageId,
    }
    const {keybaseHomeDir} = store.getState()
    await runApiCommand({method: 'delete', options: args, keybaseHomeDir})
  }
  return deleteMessage
}

const _watchChannelForNewMessages = (store: Store) => {
  /**
   * Listens for new chat messages on a specified channel. The `onMessage` function is called for every message your bot receives.
   * This is pretty similar to `watchAllChannelsForNewMessages`, except it specifically checks one channel.
   *
   * @memberof bot.chat
   */
  const watchChannelForNewMessages: WatchChannelForNewMessage = (channel, onMessage) => {
    validateChatChannel(channel, 'bot.chat.watchChannelForNewMessages')
    validateOnMessage(onMessage, 'bot.chat.watchChannelForNewMessages')
    const {keybaseHomeDir, username} = store.getState()
    keybaseExec(keybaseHomeDir, ['chat', 'api-listen'], {
      onStdOut: line => {
        try {
          const messageObject = JSON.parse(line)
          if (channel.name === messageObject.msg.channel.name) {
            if (username && messageObject.msg.sender.username !== username.toLowerCase()) {
              onMessage(messageObject.msg)
            }
          }
        } catch (error) {
          console.error(error)
        }
      },
    })
  }
  return watchChannelForNewMessages
}

const _watchAllChannelsForNewMessages = (store: Store) => {
  /**
   *
   * This function will put your bot into full-read mode, where it reads
   * everything it can and every new message it finds it will pass to you, so
   * you can do what you want with it. For example, if you want to write a
   * Keybase bot that talks shit at anyone who dares approach it, this is the
   * function to use.*
   *
   * Specifically, it will call the `onMessage` function you provide for every
   * message your bot receives.*
   *
   * @memberof bot.chat
   * @example
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
  const watchAllChannelsForNewMessages: WatchAllChannelsForNewMessages = onMessage => {
    validateOnMessage(onMessage, 'bot.chat.watchAllChannelsForNewMessages')
    const {keybaseHomeDir, username} = store.getState()
    keybaseExec(keybaseHomeDir, ['chat', 'api-listen'], {
      onStdOut: (line: string) => {
        try {
          const messageObject = JSON.parse(line)
          if (username && messageObject.msg.sender.username !== username.toLowerCase()) {
            onMessage(messageObject.msg)
          }
        } catch (error) {
          console.error(error)
        }
      },
    })
  }
  return watchAllChannelsForNewMessages
}
// Provide API functions with access to the bot's store using withStore
// Also provide guard functions to check before executing the API function
export default (store: Store) => ({
  list: withStore(store, withGuards([guardInitialized]))(_list),
  read: withStore(store, withGuards([guardInitialized]))(_read),
  send: withStore(store, withGuards([guardInitialized]))(_send),
  delete: withStore(store, withGuards([guardInitialized]))(_deleteMessage),
  deleteMessage: withStore(store, withGuards([guardInitialized]))(_deleteMessage),
  watchChannelForNewMessages: withStore(store)(_watchChannelForNewMessages),
  watchAllChannelsForNewMessages: withStore(store)(_watchAllChannelsForNewMessages),
})
