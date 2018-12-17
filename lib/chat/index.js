// @flow
import {spawn} from 'child_process'
import readline from 'readline'
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
  MessageNotification,
} from './types'

export type ApiCommandArg = {|method: string, options: Object, homeDir?: string|}

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

class ChatBot extends BaseBot {
  /**
   * Lists your chats, with info on which ones have unread messages.
   */
  async list(options: ChatListOptions): Promise<ChatConversation[]> {
    await this._guardInitialized()
    const res = await runApiCommand({method: 'list', options, homeDir: this.homeDir})
    return res ? res.conversations || [] : []
  }

  /**
   * Reads the messages in a channel. You can read with or without marking as read.
   *
   */
  async read(channel: ChatChannel, options: ChatReadOptions) {
    await this._guardInitialized()
    const optionsWithDefaults = {
      ...options,
      channel,
      peek: options.peek !== undefined ? options.peek : false,
      unreadOnly: options.unreadOnly !== undefined ? options.unreadOnly : false,
    }
    await runApiCommand({method: 'read', options: optionsWithDefaults, homeDir: this.homeDir})
  }

  /**
   * Sends a message to a certain channel.
   *
   */
  async send(channel: ChatChannel, message: ChatMessage, options: ChatSendOptions) {
    await this._guardInitialized()
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

  /**
   * Deletes a message in a channel. Messages have messageId's associated with
   * them, which you can learn in `bot.chat.read`. Known bug: the GUI has a cache,
   * and deleting from the CLI may not become apparent immediately.
   */
  async delete(channel: ChatChannel, messageId: number, options: ChatDeleteOptions) {
    await this._guardInitialized()
    const args = {
      ...options,
      channel,
      messageId,
    }
    await runApiCommand({method: 'delete', options: args, homeDir: this.homeDir})
  }

  /**
   * Listens for new chat messages on a specified channel. The `onMessage` function is called for every message your bot receives.
   * This is pretty similar to `watchAllChannelsForNewMessages`, except it specifically checks one channel.
   */
  async watchChannelForNewMessages(channel: ChatChannel, onMessage: OnMessage) {
    await this._guardInitialized()
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
    }).catch(e => {
      // for now we're dropping errors because this process
      // closes with status when deinit happens, and we don't want to throw an error
      // TODO: have something in bot's state that says it's ok to die, and if that isn't set,
      // throw the error. This way we can distinguish between a failure to start the program
      // and it dying on purpose
    })
  }

  /**
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
   * const onMessage = message => {
   *   const channel = message.channel
   *   bot.chat.send(
   *     {
   *       channel: channel,
   *       message: {
   *         body: 'thanks!!!',
   *       },
   *     },
   *     (err, res) => {
   *       if (err) {
   *         console.error(err)
   *       }
   *     }
   *   )
   * }
   * bot.chat.watchAllChannelsForNewMessages(onMessage)
   *
   */
  async watchAllChannelsForNewMessages(onMessage: OnMessage) {
    await this._guardInitialized()
    const child = spawn('keybase', ['--home', this.homeDir, 'chat', 'api-listen'])
    this.spawnedProcesses.push(child)

    const lineReaderStdout = readline.createInterface({input: child.stdout})
    const onLine = (line: string) => {
      try {
        const messageObject: MessageNotification = JSON.parse(line)
        if (this.username && messageObject.msg.sender.username !== this.username.toLowerCase()) {
          onMessage(messageObject.msg)
        }
      } catch (error) {
        console.error(error)
      }
    }
    lineReaderStdout.on('line', onLine)
  }
}

export default ChatBot
