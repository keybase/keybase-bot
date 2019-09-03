import ClientBase from '../client-base';
import * as chat1 from '../types/chat1';
/** A function to call when a message is received. */
export declare type OnMessage = (message: chat1.MsgSummary) => void | Promise<void>;
/** A function to call when an error occurs. */
export declare type OnError = (error: Error) => void | Promise<void>;
/**
 * Options for the `list` method of the chat module.
 */
export interface ChatListOptions {
    failOffline?: boolean;
    showErrors?: boolean;
    topicType?: chat1.TopicType;
    unreadOnly?: boolean;
}
/**
 * Options for the `listChannels` method of the chat module.
 */
export interface ChatListChannelsOptions {
    topicType?: chat1.TopicType;
    membersType?: chat1.ConversationMembersType;
}
/**
 * Options for the `read` method of the chat module.
 */
export interface ChatReadOptions {
    conversationId?: string;
    failOffline?: boolean;
    pagination?: chat1.Pagination;
    peek?: boolean;
    unreadOnly?: boolean;
}
/**
 * Options for the `send` method of the chat module.
 */
export interface ChatSendOptions {
    conversationId?: string;
    nonblock?: boolean;
    membersType?: chat1.ConversationMembersType;
    confirmLumenSend?: boolean;
}
/**
 * Options for the `attach` method of the chat module.
 */
export interface ChatAttachOptions {
    conversationId?: string;
    title?: string;
    preview?: string;
}
/**
 * Options for the `download` method of the chat module.
 */
export interface ChatDownloadOptions {
    conversationId?: string;
    preview?: string;
    noStream?: boolean;
}
/**
 * Options for the `react` method of the chat module.
 */
export interface ChatReactOptions {
    conversationId?: string;
}
/**
 * Options for the `delete` method of the chat module.
 */
export interface ChatDeleteOptions {
    conversationId?: string;
}
/**
 * Options for the methods in the chat module that listen for new messages.
 * Local messages are ones sent by your device. Including them in the output is
 * useful for applications such as logging conversations, monitoring own flips
 * and building tools that seamlessly integrate with a running client used by
 * the user.
 */
export interface ListenOptions {
    hideExploding: boolean;
    showLocal: boolean;
}
export interface Advertisement {
    alias?: string;
    advertisements: chat1.AdvertiseCommandAPIParam[];
}
export interface AdvertisementsLookup {
    channel: chat1.ChatChannel;
    conversationID?: string;
}
export interface ReadResult {
    messages: chat1.MsgSummary[];
    pagination: chat1.Pagination;
}
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
    list(options?: ChatListOptions): Promise<chat1.ConvSummary[]>;
    /**
     * Lists conversation channels in a team
     * @memberof Chat
     * @param name - Name of the team
     * @param options - An object of options that can be passed to the method.
     * @returns - An array of chat conversations. If there are no conversations, the array is empty.
     * @example
     * bot.chat.listChannels('team_name').then(chatConversations => console.log(chatConversations))
     */
    listChannels(name: string, options?: ChatListChannelsOptions): Promise<chat1.ConvSummary[]>;
    /**
     * Reads the messages in a channel. You can read with or without marking as read.
     * @memberof Chat
     * @param channel - The chat channel to read messages in.
     * @param options - An object of options that can be passed to the method.
     * @returns - A summary of data about a message, including who send it, when, the content of the message, etc. If there are no messages in your channel, then an error is thrown.
     * @example
     * alice.chat.read(channel).then(messages => console.log(messages))
     */
    read(channel: chat1.ChatChannel, options?: ChatReadOptions): Promise<ReadResult>;
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
    joinChannel(channel: chat1.ChatChannel): Promise<void>;
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
    leaveChannel(channel: chat1.ChatChannel): Promise<void>;
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
    send(channel: chat1.ChatChannel, message: chat1.ChatMessage, options?: ChatSendOptions): Promise<chat1.SendRes>;
    /**
     * Creates a new blank conversation.
     * @memberof Chat
     * @param channel - The chat channel to create.
     * @example
     * bot.chat.createChannel(channel).then(() => console.log('conversation created'))
     */
    createChannel(channel: chat1.ChatChannel): Promise<void>;
    /**
     * Send a file to a channel.
     * @memberof Chat
     * @param channel - The chat channel to send the message in.
     * @param filename - The absolute path of the file to send.
     * @param options - An object of options that can be passed to the method.
     * @example
     * bot.chat.attach(channel, '/Users/nathan/my_picture.png').then(() => console.log('Sent a picture!'))
     */
    attach(channel: chat1.ChatChannel, filename: string, options?: ChatAttachOptions): Promise<chat1.SendRes>;
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
    download(channel: chat1.ChatChannel, messageId: number, output: string, options?: ChatDownloadOptions): Promise<void>;
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
    react(channel: chat1.ChatChannel, messageId: number, reaction: string, options?: ChatReactOptions): Promise<chat1.SendRes>;
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
    delete(channel: chat1.ChatChannel, messageId: number, options?: ChatDeleteOptions): Promise<void>;
    /**
     * Gets current unfurling settings
     * @example
     * bot.chat.getUnfurlSettings().then((mode) => console.log(mode))
     */
    getUnfurlSettings(): Promise<chat1.UnfurlSettings>;
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
    setUnfurlSettings(mode: chat1.UnfurlSettings): Promise<void>;
    /**
     * Loads a flip's details
     * @param conversationID - conversation ID received in API listen.
     * @param flipConversationID - flipConvID from the message summary.
     * @param messageID - ID of the message in the conversation.
     * @param gameID - gameID from the flip message contents.
     * @example
     * // check demos/es7/poker-hands.js
     */
    loadFlip(conversationID: string, flipConversationID: string, messageID: number, gameID: string): Promise<chat1.UICoinFlipStatus>;
    /**
     * Publishes a commands advertisement which is shown in the "!" chat autocomplete.
     * @param advertisement - details of the advertisement
     * @example
     * await bot.chat.advertiseCommands({
     *   advertisements: [
     *     {
     *       type: 'public',
     *       commands: [
     *         {
     *           name: '!echo',
     *           description: 'Sends out your message to the current channel.',
     *           usage: '[your text]',
     *         },
     *       ]
     *     }
     *   ],
     * })
     */
    advertiseCommands(advertisement: Advertisement): Promise<void>;
    /**
     * Clears all published commands advertisements.
     * @param advertisement - advertisement parameters
     * @example
     * await bot.chat.clearCommands()
     */
    clearCommands(): Promise<void>;
    /**
     * Lists all commands advertised in a channel.
     * @param lookup - either conversation id or channel
     * @example
     * const commandsList = await bot.chat.listCommands({
     *   channel: channel,
     * })
     * console.log(commandsList)
     * // prints out something like:
     * // {
     * //   commands: [
     * //     {
     * //       name: '!helloworld',
     * //       description: 'sample description',
     * //       usage: '[command arguments]',
     * //       username: 'userwhopublished',
     * //     }
     * //   ]
     * // }
     */
    listCommands(lookup: AdvertisementsLookup): Promise<{
        commands: chat1.UserBotCommandOutput[];
    }>;
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
    watchChannelForNewMessages(channel: chat1.ChatChannel, onMessage: OnMessage, onError?: OnError, options?: ListenOptions): Promise<void>;
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
