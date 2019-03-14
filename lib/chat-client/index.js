// @flow
import {spawn} from 'child_process'
import readline from 'readline'
import ClientBase from '../client-base'
import {formatAPIObjectOutput, formatAPIObjectInput} from '../utils'
import type {
  ChatConversation,
  ChatChannel,
  ChatMessage,
  MessageSummary,
  ListenOptions,
  ReadResult,
  SendResult,
  ChatListOptions,
  ChatListChannelsOptions,
  ChatReadOptions,
  ChatSendOptions,
  ChatAttachOptions,
  ChatDownloadOptions,
  ChatDeleteOptions,
  ChatReactOptions,
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
      throw new Error('Keybase chat list returned nothing.')
    }
    return res.conversations || []
  }

  /**
   * Lists conversation channels in a team
   * @memberof Chat
   * @param name - Name of the team
   * @param options - An object of options that can be passed to the method.
   * @returns - An array of chat conversations. If there are no conversations, the array is empty.
   * @example
   * bot.chat.listChannels('team_name').then(chatConversations => console.log(chatConversations))
   */
  async listChannels(name: string, options?: ChatListChannelsOptions): Promise<ChatConversation[]> {
    await this._guardInitialized()
    const optionsWithDefaults = {
      ...options,
      name,
      membersType: options && options.membersType ? options.membersType : 'team',
    }
    const res = await this._runApiCommand({
      apiName: 'chat',
      method: 'listconvsonname',
      options: optionsWithDefaults,
    })
    if (!res) {
      throw new Error('Keybase chat list convs on name returned nothing.')
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
  async read(channel: ChatChannel, options?: ChatReadOptions): Promise<ReadResult> {
    await this._guardInitialized()
    const optionsWithDefaults = {
      ...options,
      channel,
      peek: options && options.peek ? options.peek : false,
      unreadOnly: options && options.unreadOnly !== undefined ? options.unreadOnly : false,
    }
    const res = await this._runApiCommand({apiName: 'chat', method: 'read', options: optionsWithDefaults})
    if (!res) {
      throw new Error('Keybase chat read returned nothing.')
    }
    // Pagination gets passed as-is, while the messages get cleaned up
    return {
      pagination: res.pagination,
      messages: res.messages.map(message => message.msg),
    }
  }

  /**
   * Joins a team conversation.
   * @param channel - The team chat channel to join.
   * @example
   * bot.chat.listConvsOnName('team_name').then(async teamConversations => {
   *  for (const conversation of teamConversations) {
   *    if (conversation.memberStatus !== 'active') {
   *      await bot.chat.join(conversation.channel)
   *      console.log('Joined team channel', conversation.channel)
   *    }
   *  }
   * })
   */
  async joinChannel(channel: ChatChannel): Promise<void> {
    await this._guardInitialized()
    const res = await this._runApiCommand({
      apiName: 'chat',
      method: 'join',
      options: {
        channel,
      },
    })
    if (!res) {
      throw new Error('Keybase chat join returned nothing')
    }
  }

  /**
   * Leaves a team conversation.
   * @param channel - The team chat channel to leave.
   * @example
   * bot.chat.listConvsOnName('team_name').then(async teamConversations => {
   *  for (const conversation of teamConversations) {
   *    if (conversation.memberStatus === 'active') {
   *      await bot.chat.leave(conversation.channel)
   *      console.log('Left team channel', conversation.channel)
   *    }
   *  }
   * })
   */
  async leaveChannel(channel: ChatChannel): Promise<void> {
    await this._guardInitialized()
    const res = await this._runApiCommand({
      apiName: 'chat',
      method: 'leave',
      options: {
        channel,
      },
    })
    if (!res) {
      throw new Error('Keybase chat leave returned nothing')
    }
  }

  /**
   * Send a message to a certain channel.
   * @memberof Chat
   * @param channel - The chat channel to send the message in.
   * @param message - The chat message to send.
   * @param options - An object of options that can be passed to the method.
   * @example
   * const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topicType: 'chat'}
   * const message = {body: 'Hello kbot!'}
   * bot.chat.send(channel, message).then(() => console.log('message sent!'))
   */
  async send(channel: ChatChannel, message: ChatMessage, options?: ChatSendOptions): Promise<SendResult> {
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

    return {id: res.id}
  }

  /**
   * Creates a new blank conversation.
   * @memberof Chat
   * @param channel - The chat channel to create.
   * @example
   * bot.chat.createChannel(channel).then(() => console.log('conversation created'))
   */
  async createChannel(channel: ChatChannel): Promise<void> {
    await this._guardInitialized()
    const args = {
      channel,
    }
    const res = await this._runApiCommand({
      apiName: 'chat',
      method: 'newconv',
      options: args,
    })
    if (!res) {
      throw new Error('Keybase chat newconv returned nothing')
    }
  }

  /**
   * Send a file to a channel.
   * @memberof Chat
   * @param channel - The chat channel to send the message in.
   * @param filename - The absolute path of the file to send.
   * @param options - An object of options that can be passed to the method.
   * @example
   * bot.chat.attach(channel, '/Users/nathan/my_picture.png').then(() => console.log('Sent a picture!'))
   */
  async attach(channel: ChatChannel, filename: string, options: ChatAttachOptions): Promise<SendResult> {
    await this._guardInitialized()
    const args = {...options, channel, filename}
    const res = await this._runApiCommand({apiName: 'chat', method: 'attach', options: args})
    if (!res) {
      throw new Error('Keybase chat attach returned nothing')
    }

    return {id: res.id}
  }

  /**
   * Download a file send via Keybase chat.
   * @memberof Chat
   * @param channel - The chat channel that the desired attacment to download is in.
   * @param messageId - The message id of the attached file.
   * @param output - The absolute path of where the file should be downloaded to.
   * @param options - An object of options that can be passed to the method
   * @example
   * bot.chat.download(channel, 325, '/Users/nathan/Downloads/file.png')
   */
  async download(channel: ChatChannel, messageId: number, output: string, options: ChatDownloadOptions) {
    await this._guardInitialized()
    const args = {...options, channel, messageId, output}
    const res = await this._runApiCommand({apiName: 'chat', method: 'download', options: args})
    if (!res) {
      throw new Error('Keybase chat download returned nothing')
    }
  }

  /**
   * Reacts to a given message in a channel. Messages have messageId's associated with
   * them, which you can learn in `bot.chat.read`.
   * @memberof Chat
   * @param channel - The chat channel to send the message in.
   * @param messageId - The id of the message to react to.
   * @param reaction - The reaction emoji, in colon form.
   * @param options - An object of options that can be passed to the method.
   * @example
   * bot.chat.react(channel, 314, ':+1:').then(() => console.log('Thumbs up!'))
   */
  async react(
    channel: ChatChannel,
    messageId: number,
    reaction: string,
    options?: ChatReactOptions
  ): Promise<SendResult> {
    await this._guardInitialized()
    const args = {
      ...options,
      channel,
      messageId,
      message: {body: reaction},
    }
    const res = await this._runApiCommand({apiName: 'chat', method: 'reaction', options: args})
    if (!res) {
      throw new Error('Keybase chat react returned nothing.')
    }

    return {id: res.id}
  }

  /**
   * Deletes a message in a channel. Messages have messageId's associated with
   * them, which you can learn in `bot.chat.read`. Known bug: the GUI has a cache,
   * and deleting from the CLI may not become apparent immediately.
   * @memberof Chat
   * @param channel - The chat channel to send the message in.
   * @param messageId - The id of the message to delete.
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
      throw new Error('Keybase chat delete returned nothing.')
    }
  }

  /**
   * Listens for new chat messages on a specified channel. The `onMessage` function is called for every message your bot receives. This is pretty similar to `watchAllChannelsForNewMessages`, except it specifically checks one channel. Note that it receives messages your own bot posts, but from other devices. You can filter out your own messages by looking at a message's sender object.
   * Hides exploding messages by default.
   * @memberof Chat
   * @param channel - The chat channel to watch.
   * @param onMessage - A callback that is triggered on every message your bot receives.
   * @param onError - A callback that is triggered on any error that occurs while the method is executing.
   * @param options - Options for the listen method.
   * @example
   * // Reply to all messages between you and `kbot` with 'thanks!'
   * const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topicType: 'chat'}
   * const onMessage = message => {
   *   const channel = message.channel
   *   bot.chat.send(channel, {body: 'thanks!!!'})
   * }
   * bot.chat.watchChannelForNewMessages(channel, onMessage)
   */
  async watchChannelForNewMessages(
    channel: ChatChannel,
    onMessage: OnMessage,
    onError?: OnError,
    options?: ListenOptions
  ): Promise<void> {
    await this._guardInitialized()
    this._chatListen(onMessage, onError, channel, options)
  }

  /**
   * This function will put your bot into full-read mode, where it reads
   * everything it can and every new message it finds it will pass to you, so
   * you can do what you want with it. For example, if you want to write a
   * Keybase bot that talks shit at anyone who dares approach it, this is the
   * function to use. Note that it receives messages your own bot posts, but from other devices.
   * You can filter out your own messages by looking at a message's sender object.
   * Hides exploding messages by default.
   * @memberof Chat
   * @param onMessage - A callback that is triggered on every message your bot receives.
   * @param onError - A callback that is triggered on any error that occurs while the method is executing.
   * @param options - Options for the listen method.
   * @example
   * // Reply to incoming traffic on all channels with 'thanks!'
   * const onMessage = message => {
   *   const channel = message.channel
   *   bot.chat.send(channel, {body: 'thanks!!!'})
   * }
   * bot.chat.watchAllChannelsForNewMessages(onMessage)
   *
   */
  async watchAllChannelsForNewMessages(
    onMessage: OnMessage,
    onError?: OnError,
    options?: ListenOptions
  ): Promise<void> {
    await this._guardInitialized()
    this._chatListen(onMessage, onError, undefined, options)
  }

  /**
   * Spawns the chat listen process and handles the calling of onMessage, onError, and filtering for a specific channel.
   * @memberof Chat
   * @ignore
   * @param onMessage - A callback that is triggered on every message your bot receives.
   * @param onError - A callback that is triggered on any error that occurs while the method is executing.
   * @param channel - The chat channel to watch.
   * @param options - Options for the listen method.
   * @example
   * this._chatListen(onMessage, onError)
   */
  _chatListen(onMessage: OnMessage, onError?: OnError, channel?: ChatChannel, options?: ListenOptions): void {
    const args = ['chat', 'api-listen']
    if (this.homeDir) {
      args.unshift('--home', this.homeDir)
    }
    if (!options || (options && options.hideExploding !== false)) {
      args.push('--hide-exploding')
    }
    if (channel) {
      args.push('--filter-channel', JSON.stringify(formatAPIObjectInput(channel, 'chat')))
    }
    const child = spawn(this._pathToKeybaseBinary(), args)
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
