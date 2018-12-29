// @flow
import {spawn} from 'child_process'
import readline from 'readline'
import ClientBase from '../client-base'
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
  MessageSummary,
} from './types'

export type OnError = (error: Error) => void

class ChatBot extends ClientBase {
  /**
   * Lists your chats, with info on which ones have unread messages.
   */
  async list(options?: ChatListOptions): Promise<ChatConversation[]> {
    await this._guardInitialized()
    const res = await this._runApiCommand({apiName: 'chat', method: 'list', options})
    if (!res) {
      throw new Error('Keybase chat send returned nothing.')
    }
    return res.conversations || []
  }

  /**
   * Reads the messages in a channel. You can read with or without marking as read.
   *
   */
  async read(channel: ChatChannel, options?: ChatReadOptions): Promise<MessageSummary[]> {
    await this._guardInitialized()
    const optionsWithDefaults = {
      ...options,
      channel,
      peek: options && options.peek ? options.peek : false,
      unreadOnly: options && options.unreadOnly !== undefined ? options.unreadOnly : false,
    }
    const res = await this._runApiCommand({apiName: 'chat', method: 'read', options: optionsWithDefaults})
    if (!res) {
      throw new Error('Keybase chat send returned nothing.')
    }
    // TODO: include pagination?
    const cleanedRes = res.messages.map(message => message.msg)
    return cleanedRes
  }

  /**
   * Sends a message to a certain channel.
   *
   */
  async send(channel: ChatChannel, message: ChatMessage, options?: ChatSendOptions): Promise<void> {
    await this._guardInitialized()
    const args = {
      ...options,
      channel,
      message,
    }
    const res = await this._runApiCommand({
      apiName: 'chat',
      method: 'send',
      options: args,
    })
    if (!res) {
      throw new Error('Keybase chat send returned nothing')
    }
  }

  /**
   * Deletes a message in a channel. Messages have messageId's associated with
   * them, which you can learn in `bot.chat.read`. Known bug: the GUI has a cache,
   * and deleting from the CLI may not become apparent immediately.
   */
  async delete(channel: ChatChannel, messageId: number, options?: ChatDeleteOptions) {
    await this._guardInitialized()
    const args = {
      ...options,
      channel,
      messageId,
    }
    const res = await this._runApiCommand({apiName: 'chat', method: 'delete', options: args})
    if (!res) {
      throw new Error('Keybase chat send returned nothing.')
    }
  }

  /**
   * Listens for new chat messages on a specified channel. The `onMessage` function is called for every message your bot receives.
   * This is pretty similar to `watchAllChannelsForNewMessages`, except it specifically checks one channel.
   */
  async watchChannelForNewMessages(channel: ChatChannel, onMessage: OnMessage, onError?: OnError) {
    await this._guardInitialized()
    this._chatListen(onMessage, onError, channel)
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
   *   bot.chat.send({
   *    channel: channel,
   *      message: {
   *        body: 'thanks!!!',
   *      },
   *   })
   * }
   * bot.chat.watchAllChannelsForNewMessages(onMessage)
   *
   */
  async watchAllChannelsForNewMessages(onMessage: OnMessage, onError?: OnError) {
    await this._guardInitialized()
    this._chatListen(onMessage, onError)
  }

  _chatListen(onMessage: OnMessage, onError?: OnError, channel?: ChatChannel) {
    const child = spawn('keybase', ['--home', this.homeDir, 'chat', 'api-listen'])
    this.spawnedProcesses.push(child)

    const lineReaderStdout = readline.createInterface({input: child.stdout})
    const onLine = (line: string) => {
      try {
        const messageObject: MessageNotification = JSON.parse(line)
        if (messageObject.hasOwnProperty('error')) {
          throw new Error(messageObject.error)
        } else if (
          // fire onMessage if you aren't the sender and if the message is in the right channel, if a channel is specified
          ((channel && channel.name === messageObject.msg.channel.name) || !channel) &&
          this.username &&
          messageObject.msg.sender.username !== this.username.toLowerCase()
        ) {
          onMessage(messageObject.msg)
        }
      } catch (error) {
        if (onError) {
          onError(error)
        }
      }
    }
    lineReaderStdout.on('line', onLine)
  }
}

export default ChatBot
