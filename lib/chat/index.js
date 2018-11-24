// @flow
import {guardInitialized} from '../base-bot'
import {formatOptions, keybaseExec} from '../utils'
import {CHAT_API_VERSION} from '../constants'
import {withStore, withGuards} from '../store'
import type {Store} from '../store/types'
import type {
  ChatChannel,
  ChatOptionsList,
  ChatOptionsSend,
  ChatReadMessage,
  ChatOptionsDelete,
  ChatOptionsRead,
  ApiCommandArg,
  ChatConversation,
} from '../types.js'

const _runApiCommand = async (arg: ApiCommandArg): Promise<any> => {
  // await guardInitialized()
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
    parseOutputAsJSON: true,
  })
  const res = output.result
  return res
}

/**
 * Keybase chat api functions
 * @namespace Chat
 */

/**
 * @name list
 * @memberof Chat
 *
 * Lists your chats, with info on which ones have unread messages.
 */
export const list = async (options: ChatOptionsList): Promise<ChatConversation[] | void> => {
  const res = await _runApiCommand({method: 'list', options})
  return res.conversations
}

/**
 * @name read
 * @memberof Chat
 *
 * Reads the messages in a channel. You can read with or without marking as read.
 */
export const read = async (options: ChatOptionsRead): Promise<any> => {
  const optionsWithDefaults: ChatOptionsRead = {
    ...options,
    peek: options.peek !== undefined ? options.peek : false,
    unreadOnly: options.unreadOnly !== undefined ? options.unreadOnly : false,
  }
  await _runApiCommand({method: 'read', options: optionsWithDefaults})
}

/**
 * @name send
 * @memberof ChatBot
 *
 * Sends a message to a certain channel.
 */
export const send = async (options: ChatOptionsSend): Promise<void> => {
  const res = await _runApiCommand({method: 'send', options})
  if (res.hasOwnProperty('error')) {
    throw new Error(res.error.message)
  }
}

/**
 * @name delete
 * @memberof Chat
 *
 * Deletes a message in a channel. Messages have messageId's associated with
 * them, which you can learn in `bot.chatRead`. Known bug: the GUI has a cache,
 * and deleting from the CLI may not become apparent immediately.
 */

// delete is a javascript reserved word and cannot be used as a function signature
export const deleteMessage = async (options: ChatOptionsDelete): Promise<any> => {
  await _runApiCommand({method: 'delete', options})
}

/**
 * @name watchChannelForNewMessages
 * @memberof Chat
 *
 * Listens for new chat messages on a specified channel. The `onMessage` function is called for every message your bot receives.
 * This is pretty similar to `watchAllChannelsForNewMessages`, except it specifically checks one channel.
 */
export const watchChannelForNewMessages = (
  channel: ChatChannel,
  onMessage: (message: ChatReadMessage) => void
) => {
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
 * @name watchAllChannelsForNewMessages
 * @memberof Chat
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
export const watchAllChannelsForNewMessages = (onMessage: (message: ChatReadMessage) => void) => {
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
