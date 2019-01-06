// @flow
import {spawn} from 'child_process'
import readline from 'readline'
import ClientBase from '../client-base'
import {formatAPIObjectOutput} from '../utils'
import type {
  ChatConversation,
  ChatChannel,
  ChatMessage,
  MessageSummary,
  ChatListOptions,
  ChatReadOptions,
  ChatSendOptions,
  ChatDeleteOptions,
  MessageNotification,
} from './types'

/** A function to call when a message is received. */
export type OnMessage = (message: MessageSummary) => void | Promise<void>
/** A function to call when an error occurs. */
export type OnError = (error: Error) => void | Promise<void>

/** The chat module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase chat api`. */
class Chat extends ClientBase {
  /**
   * Lists your chats, with info on which ones have unread messages.
   * @memberof Chat
   * @param options - An object of options that can be passed to the method.
   * @returns - An array of chat conversations. If there are no conversations, the array is empty.
   * @example
   * bot.chat.list({unreadOnly: true}).then(chatConversations => console.log(chatConversations))
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
   * @memberof Chat
   * @param channel - The chat channel to read messages in.
   * @param options - An object of options that can be passed to the method.
   * @returns - A summary of data about a message, including who send it, when, the content of the message, etc. If there are no messages in your channel, then an error is thrown.
   * @example
   * alice.chat.read(channel).then(messages => console.log(messages))
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
    // Removes a single object with property `msg`
    // TODO: include pagination?
    const cleanedRes = res.messages.map(message => message.msg)
    return cleanedRes
  }

  /**
   * Send a message to a certain channel.
   * @memberof Chat
   * @param channel - The chat channel to send the message in.
   * @param message - The chat message to send.
   * @param options - An object of options that can be passed to the method.
   * @example
   * const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topic_type: 'chat'}
   * const message = {body: 'Hello kbot!'}
   * bot.chat.send(channel, message).then(() => console.log('message sent!'))
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
   * @memberof Chat
   * @param channel - The chat channel to send the message in.
   * @param messageId - The chat message to send.
   * @param options - An object of options that can be passed to the method.
   * @example
   * bot.chat.delete(channel, 314).then(() => console.log('message deleted!'))
   */
  async delete(channel: ChatChannel, messageId: number, options?: ChatDeleteOptions): Promise<void> {
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
   * Listens for new chat messages on a specified channel. The `onMessage` function is called for every message your bot receives. This is pretty similar to `watchAllChannelsForNewMessages`, except it specifically checks one channel. Note that it receives messages your own bot posts, but from other devices. You can filter out your own messages by looking at a message's sender object.
   * @memberof Chat
   * @param channel - The chat channel to watch.
   * @param onMessage - A callback that is triggered on every message your bot receives.
   * @param onError - A callback that is triggered on any error that occurs while the method is executing.
   * @example
   * // Reply to all messages between you and `kbot` with 'thanks!'
   * const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topic_type: 'chat'}
   * const onMessage = message => {
   *   const channel = message.channel
   *   bot.chat.send({
   *    channel: channel,
   *      message: {
   *        body: 'thanks!!!',
   *      },
   *   })
   * }
   * bot.chat.watchChannelForNewMessages(channel, onMessage)
   */
  async watchChannelForNewMessages(
    channel: ChatChannel,
    onMessage: OnMessage,
    onError?: OnError
  ): Promise<void> {
    await this._guardInitialized()
    this._chatListen(onMessage, onError, channel)
  }

  /**
   * This function will put your bot into full-read mode, where it reads
   * everything it can and every new message it finds it will pass to you, so
   * you can do what you want with it. For example, if you want to write a
   * Keybase bot that talks shit at anyone who dares approach it, this is the
   * function to use. Note that it receives messages your own bot posts, but from other devices.
   * You can filter out your own messages by looking at a message's sender object.
   * @memberof Chat
   * @param onMessage - A callback that is triggered on every message your bot receives.
   * @param onError - A callback that is triggered on any error that occurs while the method is executing.
   * @example
   * // Reply to incoming traffic on all channels with 'thanks!'
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
  async watchAllChannelsForNewMessages(onMessage: OnMessage, onError?: OnError): Promise<void> {
    await this._guardInitialized()
    this._chatListen(onMessage, onError)
  }

  /**
   * Spawns the chat listen process and handles the calling of onMessage, onError, and filtering for a specific channel.
   * @memberof Chat
   * @ignore
   * @param onMessage - A callback that is triggered on every message your bot receives.
   * @param onError - A callback that is triggered on any error that occurs while the method is executing.
   * @param channel - The chat channel to watch.
   * @example
   * this._chatListen(onMessage, onError)
   */
  _chatListen(onMessage: OnMessage, onError?: OnError, channel?: ChatChannel): void {
    const args = ['chat', 'api-listen']
    if (this.homeDir) {
      args.unshift('--home', this.homeDir)
    }
    const child = spawn('keybase', args)
    this.spawnedProcesses.push(child)

    const lineReaderStdout = readline.createInterface({input: child.stdout})
    const onLine = (line: string) => {
      try {
        const messageObject: MessageNotification = formatAPIObjectOutput(JSON.parse(line))
        if (messageObject.hasOwnProperty('error')) {
          throw new Error(messageObject.error)
        } else if (
          // fire onMessage if it was from a different sender or at least a different device
          // from this sender. Bots can filter out their own messages from other devices.
          (!channel || channel.name === messageObject.msg.channel.name) &&
          this.username &&
          this.devicename &&
          (messageObject.msg.sender.username !== this.username.toLowerCase() ||
            messageObject.msg.sender.deviceName !== this.devicename)
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

export default Chat
