// @flow
import BaseBot from '../base'
import {formatOptions, keybaseExec} from '../utils'
import {CHAT_API_VERSION} from '../constants'
import type {
  ChatConversation,
  ChatChannel,
  ChatMessage,
  OnMessage,
  ChatListOptions,
  ChatReadOptions,
  ChatSendOptions,
  ChatDeleteOptions,
} from './types'

export type ApiCommandArg = {|method: string, options: Object, homeDir: string|}

class ChatBot extends BaseBot {
  async list(options: ChatListOptions): Promise<ChatConversation[]> {
    const res = await runApiCommand({method: 'list', options, homeDir: this.homeDir})
    return res ? res.conversations || [] : []
  }

  async read(channel: ChatChannel, options: ChatReadOptions) {
    const optionsWithDefaults = {
      ...options,
      channel,
      peek: options.peek !== undefined ? options.peek : false,
      unreadOnly: options.unreadOnly !== undefined ? options.unreadOnly : false,
    }
    await runApiCommand({method: 'read', options: optionsWithDefaults, homeDir: this.homeDir})
  }

  async send(channel: ChatChannel, message: ChatMessage, options: ChatSendOptions) {
    const args = {
      ...options,
      channel,
      message,
    }
    const res = await runApiCommand({method: 'send', options: args, homeDir: this.homeDir})
    if (!res) {
      throw new Error('keybase chat send returned nothing')
    }
    if (res.hasOwnProperty('error')) {
      throw new Error(res.error.message)
    }
    return res
  }

  async delete(channel: ChatChannel, messageId: number, options: ChatDeleteOptions) {
    const args = {
      ...options,
      channel,
      messageId,
    }
    await runApiCommand({method: 'delete', options: args, homeDir: this.homeDir})
  }

  async watchChannelForNewMessages(channel: ChatChannel, onMessage: OnMessage) {
    keybaseExec(this.homeDir, ['chat', 'api-listen'], {
      onStdOut: line => {
        try {
          const messageObject = JSON.parse(line)
          if (channel.name === messageObject.msg.channel.name) {
            if (this.username && messageObject.msg.sender.username !== this.username.toLowerCase()) {
              onMessage(messageObject.msg)
            }
          }
        } catch (error) {
          console.error(error)
        }
      },
    })
  }

  async watchAllChannelsForNewMessages(onMessage: OnMessage) {
    keybaseExec(this.homeDir, ['chat', 'api-listen'], {
      onStdOut: (line: string) => {
        try {
          const messageObject = JSON.parse(line)
          if (this.username && messageObject.msg.sender.username !== this.username.toLowerCase()) {
            onMessage(messageObject.msg)
          }
        } catch (error) {
          console.error(error)
        }
      },
    })
  }
}

export default ChatBot

// const list = (state: BotState) => async (options: ChatListOptions): Promise<ChatConversation[]> => {
//   const {homeDir} = state
//   const res = await runApiCommand({method: 'list', options, homeDir})
//   return res ? res.conversations || [] : []
// }

// const read = (state: BotState) => async () => {
//   const {homeDir} = state
//   const optionsWithDefaults = {
//     ...options,
//     channel,
//     peek: options.peek !== undefined ? options.peek : false,
//     unreadOnly: options.unreadOnly !== undefined ? options.unreadOnly : false,
//   }
//   await runApiCommand({method: 'read', options: optionsWithDefaults, homeDir})
// }

// const send = (state: BotState) => async (
//   channel: ChatChannel,
//   message: ChatMessage,
//   options: ChatSendOptions
// ) => {
//   const args = {
//     ...options,
//     channel,
//     message,
//   }
//   const {homeDir} = state
//   const res = await runApiCommand({method: 'send', options: args, homeDir})
//   if (!res) {
//     throw new Error('keybase chat send returned nothing')
//   }
//   if (res.hasOwnProperty('error')) {
//     throw new Error(res.error.message)
//   }
//   return res
// }

// // `delete` is a JavaScript reserved word and cannot be used as a function signature.
// const deleteMessage = (state: BotState) => async (
//   channel: ChatChannel,
//   messageId: number,
//   options: ChatDeleteOptions
// ) => {
//   const args = {
//     ...options,
//     channel,
//     messageId,
//   }
//   const {homeDir} = state
//   await runApiCommand({method: 'delete', options: args, homeDir})
// }

// const watchChannelForNewMessages = (state: BotState) => (channel: ChatChannel, onMessage: OnMessage) => {
//   const {homeDir, username} = state
//   keybaseExec(homeDir, ['chat', 'api-listen'], {
//     onStdOut: line => {
//       try {
//         const messageObject = JSON.parse(line)
//         if (channel.name === messageObject.msg.channel.name) {
//           if (username && messageObject.msg.sender.username !== username.toLowerCase()) {
//             onMessage(messageObject.msg)
//           }
//         }
//       } catch (error) {
//         console.error(error)
//       }
//     },
//   })
// }

// /**
//  * Test
//  * @param {BotState} state
//  */
// const watchAllChannelsForNewMessages = (state: BotState) => (onMessage: OnMessage) => {
//   keybaseExec(state.homeDir, ['chat', 'api-listen'], {
//     onStdOut: (line: string) => {
//       try {
//         const messageObject = JSON.parse(line)
//         if (state.username && messageObject.msg.sender.username !== state.username.toLowerCase()) {
//           onMessage(messageObject.msg)
//         }
//       } catch (error) {
//         console.error(error)
//       }
//     },
//   })
// }

// const chat = (state: BotState): ChatModule => ({
//   list: list(state),
//   read: read(state),
//   /** Send method. */
//   send: send(state),
//   delete: deleteMessage(state),
//   watchChannelForNewMessages: watchChannelForNewMessages(state),
//   watchAllChannelsForNewMessages: watchAllChannelsForNewMessages(state),
// })

// export default chat

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
  const output = await keybaseExec(arg.homeDir, ['chat', 'api'], {
    stdinBuffer: Buffer.alloc(size, inputString, 'utf8'),
    json: true,
  })
  const res = output.result
  return res
}

// /**
//  * Keybase chat api functions
//  *
//  * @namespace chat
//  * @memberof bot
//  */

// const _read = (store: Store) => {
//   /**
//    * Reads the messages in a channel. You can read with or without marking as read.
//    *
//    * @memberof bot.chat
//    */
//   const read: Read = async (channel, options) => {
//     const {homeDir} = store.getState()
//     const optionsWithDefaults = {
//       ...options,
//       channel,
//       peek: options.peek !== undefined ? options.peek : false,
//       unreadOnly: options.unreadOnly !== undefined ? options.unreadOnly : false,
//     }
//     await runApiCommand({method: 'read', options: optionsWithDefaults, homeDir})
//   }
//   return read
// }

// const _send = (store: Store) => {
//   /**
//    * Sends a message to a certain channel.
//    *
//    * @memberof bot.chat
//    */
//   const send: Send = async (channel, message, options) => {
//     const args = {
//       ...options,
//       channel,
//       message,
//     }
//     const {homeDir} = store.getState()
//     const res = await runApiCommand({method: 'send', options: args, homeDir})
//     if (!res) {
//       throw new Error('keybase chat send returned nothing')
//     }
//     if (res.hasOwnProperty('error')) {
//       throw new Error(res.error.message)
//     }
//     return res
//   }
//   return send
// }

// const _deleteMessage = (store: Store) => {
//   /**
//    * Deletes a message in a channel. Messages have messageId's associated with
//    * them, which you can learn in `bot.chatRead`. Known bug: the GUI has a cache,
//    * and deleting from the CLI may not become apparent immediately.
//    *
//    * @alias delete
//    * @memberof bot.chat
//    */

//   // delete is a javascript reserved word and cannot be used as a function signature
//   const deleteMessage: Delete = async (channel, messageId, options) => {
//     const args = {
//       ...options,
//       channel,
//       messageId,
//     }
//     const {homeDir} = store.getState()
//     await runApiCommand({method: 'delete', options: args, homeDir})
//   }
//   return deleteMessage
// }

// const _watchChannelForNewMessages = (store: Store) => {
//   /**
//    * Listens for new chat messages on a specified channel. The `onMessage` function is called for every message your bot receives.
//    * This is pretty similar to `watchAllChannelsForNewMessages`, except it specifically checks one channel.
//    *
//    * @memberof bot.chat
//    */
//   const watchChannelForNewMessages: WatchChannelForNewMessage = (channel, onMessage) => {
//     const {homeDir, username} = store.getState()
//     keybaseExec(homeDir, ['chat', 'api-listen'], {
//       onStdOut: line => {
//         try {
//           const messageObject = JSON.parse(line)
//           if (channel.name === messageObject.msg.channel.name) {
//             if (username && messageObject.msg.sender.username !== username.toLowerCase()) {
//               onMessage(messageObject.msg)
//             }
//           }
//         } catch (error) {
//           console.error(error)
//         }
//       },
//     })
//   }
//   return watchChannelForNewMessages
// }

// const _watchAllChannelsForNewMessages = (store: Store) => {
//   /**
//    *
//    * This function will put your bot into full-read mode, where it reads
//    * everything it can and every new message it finds it will pass to you, so
//    * you can do what you want with it. For example, if you want to write a
//    * Keybase bot that talks shit at anyone who dares approach it, this is the
//    * function to use.*
//    *
//    * Specifically, it will call the `onMessage` function you provide for every
//    * message your bot receives.*
//    *
//    * @memberof bot.chat
//    * @example
//    * // reply to incoming traffic on all channels with 'thanks!'
//    * var onMessages = function(m) {
//    *   var channel = m.channel
//    *   var messages = m.messages // we could look in this array to read them and write custom replies
//    *   bot.chatSend(
//    *     {
//    *       channel: channel,
//    *       message: {
//    *         body: 'thanks!!!',
//    *       },
//    *     },
//    *     function(err, res) {
//    *       if (err) {
//    *         console.log(err)
//    *       }
//    *     }
//    *   )
//    * }
//    * bot.watchAllChannelsForNewMessages({onMessages: onMessages})
//    *
//    */
//   const watchAllChannelsForNewMessages: WatchAllChannelsForNewMessages = onMessage => {
//     const {homeDir, username} = store.getState()
//     keybaseExec(homeDir, ['chat', 'api-listen'], {
//       onStdOut: (line: string) => {
//         try {
//           const messageObject = JSON.parse(line)
//           if (username && messageObject.msg.sender.username !== username.toLowerCase()) {
//             onMessage(messageObject.msg)
//           }
//         } catch (error) {
//           console.error(error)
//         }
//       },
//     })
//   }
//   return watchAllChannelsForNewMessages
// }
// // Provide API functions with access to the bot's store using withStore
// // Also provide guard functions to check before executing the API function
// export default ChatBot
