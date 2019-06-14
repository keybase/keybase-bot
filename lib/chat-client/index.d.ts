import ClientBase from '../client-base';
import { ChatConversation, ChatChannel, ChatMessage, MessageSummary, ListenOptions, ReadResult, SendResult, ChatListOptions, ChatListChannelsOptions, ChatReadOptions, ChatSendOptions, ChatAttachOptions, ChatDownloadOptions, ChatDeleteOptions, ChatReactOptions, UnfurlMode, FlipSummary } from './types';
/** A function to call when a message is received. */
export declare type OnMessage = (message: MessageSummary) => void | Promise<void>;
/** A function to call when an error occurs. */
export declare type OnError = (error: Error) => void | Promise<void>;
/** The chat module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase chat api`. */
declare class Chat extends ClientBase {
    /**
     * Lists your chats, with info on which ones have unread messages.
     * @memberof Chat
     * @param options - An object of options that can be passed to the method.
     * @returns - An array of chat conversations. If there are no conversations, the array is empty.
     * @example
     * bot.chat.list({unreadOnly: true}).then(chatConversations => console.log(chatConversations))
     */
    list(options?: ChatListOptions): Promise<ChatConversation[]>;
    /**
     * Lists conversation channels in a team
     * @memberof Chat
     * @param name - Name of the team
     * @param options - An object of options that can be passed to the method.
     * @returns - An array of chat conversations. If there are no conversations, the array is empty.
     * @example
     * bot.chat.listChannels('team_name').then(chatConversations => console.log(chatConversations))
     */
    listChannels(name: string, options?: ChatListChannelsOptions): Promise<ChatConversation[]>;
    /**
     * Reads the messages in a channel. You can read with or without marking as read.
     * @memberof Chat
     * @param channel - The chat channel to read messages in.
     * @param options - An object of options that can be passed to the method.
     * @returns - A summary of data about a message, including who send it, when, the content of the message, etc. If there are no messages in your channel, then an error is thrown.
     * @example
     * alice.chat.read(channel).then(messages => console.log(messages))
     */
    read(channel: ChatChannel, options?: ChatReadOptions): Promise<ReadResult>;
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
    joinChannel(channel: ChatChannel): Promise<void>;
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
    leaveChannel(channel: ChatChannel): Promise<void>;
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
    send(channel: ChatChannel, message: ChatMessage, options?: ChatSendOptions): Promise<SendResult>;
    /**
     * Creates a new blank conversation.
     * @memberof Chat
     * @param channel - The chat channel to create.
     * @example
     * bot.chat.createChannel(channel).then(() => console.log('conversation created'))
     */
    createChannel(channel: ChatChannel): Promise<void>;
    /**
     * Send a file to a channel.
     * @memberof Chat
     * @param channel - The chat channel to send the message in.
     * @param filename - The absolute path of the file to send.
     * @param options - An object of options that can be passed to the method.
     * @example
     * bot.chat.attach(channel, '/Users/nathan/my_picture.png').then(() => console.log('Sent a picture!'))
     */
    attach(channel: ChatChannel, filename: string, options?: ChatAttachOptions): Promise<SendResult>;
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
    download(channel: ChatChannel, messageId: number, output: string, options?: ChatDownloadOptions): Promise<void>;
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
    react(channel: ChatChannel, messageId: number, reaction: string, options?: ChatReactOptions): Promise<SendResult>;
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
    delete(channel: ChatChannel, messageId: number, options?: ChatDeleteOptions): Promise<void>;
    /**
     * Gets current unfurling settings
     * @example
     * bot.chat.getUnfurlSettings().then((mode) => console.log(mode))
     */
    getUnfurlSettings(): Promise<UnfurlMode>;
    /**
     * Sets the unfurling mode
     * In Keybase, unfurling means generating previews for links that you're sending
     * in chat messages. If the mode is set to always or the domain in the URL is
     * present on the whitelist, the Keybase service will automatically send a preview
     * to the message recipient in a background chat channel.
     * @param mode - the new unfurl mode
     * @example
     * bot.chat.setUnfurlMode({
     *   "mode": "always",
     * }).then((mode) => console.log('mode updated!'))
     */
    setUnfurlSettings(mode: UnfurlMode): Promise<void>;
    /**
     * Loads a flip's details
     * @param conversationID - conversation ID received in API listen.
     * @param flipConversationID - flipConvID from the message summary.
     * @param messageID - ID of the message in the conversation.
     * @param gameID - gameID from the flip message contents.
     * @example
     * // check demos/es7/poker-hands.js
     */
    loadFlip(conversationID: string, flipConversationID: string, messageID: number, gameID: string): Promise<FlipSummary>;
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
    watchChannelForNewMessages(channel: ChatChannel, onMessage: OnMessage, onError?: OnError, options?: ListenOptions): Promise<void>;
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
    watchAllChannelsForNewMessages(onMessage: OnMessage, onError?: OnError, options?: ListenOptions): Promise<void>;
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
    private _chatListen;
}
export default Chat;
