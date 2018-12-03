// @flow
import {guardInitialized} from '../base'
import {formatOptions, keybaseExec} from '../utils'
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
  ChatListOptionals,
  ChatSendOptionals,
  ChatReadOptionals,
  ChatDeleteOptionals,
  ChatConversation,
  ChatChannel,
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
  const output = await keybaseExec(['chat', 'api'], {
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

/**
 * Lists your chats, with info on which ones have unread messages.
 *
 * @memberof bot.chat
 *
 */
export const list: List = async options => {
  const res = await runApiCommand({method: 'list', options})
  return res ? res.conversations || [] : []
}

/**
 * Reads the messages in a channel. You can read with or without marking as read.
 *
 * @memberof bot.chat
 */
export const read: Read = async (channel, options) => {
  const optionsWithDefaults = {
    ...options,
    channel,
    peek: options.peek !== undefined ? options.peek : false,
    unreadOnly: options.unreadOnly !== undefined ? options.unreadOnly : false,
  }
  await runApiCommand({method: 'read', options: optionsWithDefaults})
}

/**
 * Sends a message to a certain channel.
 *
 * @memberof bot.chat
 */
export const send: Send = async (channel, message, options) => {
  const args = {
    ...options,
    channel,
    message,
  }
  const res = await runApiCommand({method: 'send', options: args})
  if (!res) {
    throw new Error('keybase chat send returned nothing')
  }
  if (res.hasOwnProperty('error')) {
    throw new Error(res.error.message)
  }
  return res
}

/**
 * Deletes a message in a channel. Messages have messageId's associated with
 * them, which you can learn in `bot.chatRead`. Known bug: the GUI has a cache,
 * and deleting from the CLI may not become apparent immediately.
 *
 * @alias delete
 * @memberof bot.chat
 */

// delete is a javascript reserved word and cannot be used as a function signature
export const deleteMessage: Delete = async (channel, messageId, options) => {
  const args = {
    ...options,
    channel,
    messageId,
  }
  await runApiCommand({method: 'delete', options: args})
}

/**
 * Listens for new chat messages on a specified channel. The `onMessage` function is called for every message your bot receives.
 * This is pretty similar to `watchAllChannelsForNewMessages`, except it specifically checks one channel.
 *
 * @memberof bot.chat
 */
export const watchChannelForNewMessages: WatchChannelForNewMessage = (channel, onMessage) => {
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
 *
 * This function will put your bot into insane mode, where it reads
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
export const watchAllChannelsForNewMessages: WatchAllChannelsForNewMessages = onMessage => {
  keybaseExec(['chat', 'api-listen'], {
    onStdOut: (line: string) => {
      console.log(line)
      try {
        const messageObject = JSON.parse(line)
        onMessage(messageObject.msg)
      } catch (error) {
        console.error(error)
      }
    },
  })
}

// Provide API functions with access to the bot's store using withStore
// Also provide guard functions to check before executing the API function
export default (store: Store) => ({
  list: withStore(store, withGuards([guardInitialized]))(store => list),
  read: withStore(store, withGuards([guardInitialized]))(store => read),
  send: withStore(store, withGuards([guardInitialized]))(store => send),
  delete: withStore(store, withGuards([guardInitialized]))(store => deleteMessage),
  watchChannelForNewMessages: withStore(store)(store => watchChannelForNewMessages),
  watchAllChannelsForNewMessages: withStore(store)(store => watchAllChannelsForNewMessages),
})
