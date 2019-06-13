declare type TopicType = 'chat' | 'dev';
declare type MembersType = 'team' | 'impteamnative' | 'kbfs' | 'impteamupgrade';
declare type ChannelMention = 'none' | 'all' | 'here';
declare type ChannelNameMention = {
    name: string;
    convID: string;
};
/**
 * A Keybase chat channel. This can be a channel in a team, or just an informal channel between two users.
 * name: the name of the team or comma-separated list of participants
 */
export declare type ChatChannel = {
    name: string;
    public: boolean;
    membersType: MembersType;
    topicType?: TopicType;
    topicName?: string;
};
/**
 * A chat message. The content goes in the `body` property!
 */
export declare type ChatMessage = {
    body: string;
};
/**
 * A chat conversation. This is essentially a chat channel plus some additional metadata.
 */
export declare type ChatConversation = {
    id: string;
    channel: ChatChannel;
    unread: boolean;
    activeAt: number;
    activeAtMs: number;
    memberStatus: string;
};
export declare type Pagination = {
    num: number;
    next?: string;
    previous?: string;
    last?: boolean;
};
export declare type TextContent = {
    type: 'text';
    text: {
        body: string;
        payments: any[];
    };
};
export declare type AssetMetadataImage = {
    width: number;
    height: number;
};
export declare type AssetMetadataVideo = {
    width: number;
    height: number;
    durationMs: number;
};
export declare type AssetMetadataAudio = {
    durationMs: number;
};
export declare type AssetMetadata = {
    assetType: number;
    image?: AssetMetadataImage;
    video?: AssetMetadataVideo;
    audio?: AssetMetadataAudio;
};
export declare type Asset = {
    filename: string;
    region: string;
    endpoint: string;
    bucket: string;
    path: string;
    size: number;
    mimeType: string;
    encHash: string;
    key: string;
    verifyKey: string;
    title: string;
    nonce: string;
    metadata: AssetMetadata;
};
export declare type AttachmentContent = {
    type: 'attachment';
    attachment: {
        object: Asset;
        preview?: Asset;
        previews: Asset[];
        metadata: any[];
        uploaded: boolean;
    };
};
export declare type ReactionContent = {
    type: 'reaction';
    reaction: {
        m: string;
        b: string;
    };
};
export declare type EditContent = {
    type: 'edit';
    edit: {
        messageId: number;
        body: string;
    };
};
export declare type DeleteContent = {
    type: 'delete';
    delete: {
        messageIDs: number[];
    };
};
export declare type MessageContent = TextContent | AttachmentContent | ReactionContent | EditContent | DeleteContent;
export declare type MessageSender = {
    deviceId: string;
    deviceName?: string;
    uid: string;
    username?: string;
};
export declare type MessageSummary = {
    id: number;
    channel: ChatChannel;
    sender: MessageSender;
    sentAt: number;
    sentAtMs: number;
    content: MessageContent;
    prev: any;
    unread: boolean;
    revokedDevice?: boolean;
    offline?: boolean;
    KBFSEncrypted?: boolean;
    isEphemeral?: boolean;
    isEphemeralExpired?: boolean;
    ETime?: number;
    reactions?: any[];
    hasPairwiseMacs?: boolean;
    atMentionUsernames?: string[];
    channelMention?: ChannelMention;
    channelNameMentions?: ChannelNameMention[];
};
export declare type MessageNotification = {
    source: string;
    msg: MessageSummary;
    error: string;
    pagination: Pagination;
};
export declare type ReadResult = {
    messages: MessageNotification[];
    pagination: Pagination;
};
export declare type SendResult = {
    id: number;
};
/**
 * Options for the methods in the chat module that listen for new messages.
 * Local messages are ones sent by your device. Including them in the output is
 * useful for applications such as logging conversations, monitoring own flips
 * and building tools that seamlessly integrate with a running client used by
 * the user.
 */
export declare type ListenOptions = {
    hideExploding: boolean;
    showLocal: boolean;
};
export declare type ChatOptionsSearch = {
    maxHits: number;
    sentBy: string;
    sentAfter?: string;
    sendBefore?: string;
    beforeContext?: number;
    afterContext?: number;
};
/**
 * Options for the `list` method of the chat module.
 */
export declare type ChatListOptions = {
    failOffline?: boolean;
    showErrors?: boolean;
    topicType?: TopicType;
    unreadOnly?: boolean;
};
/**
 * Options for the `listChannels` method of the chat module.
 */
export declare type ChatListChannelsOptions = {
    topicType?: TopicType;
    membersType?: MembersType;
};
/**
 * Options for the `read` method of the chat module.
 */
export declare type ChatReadOptions = {
    conversationId?: string;
    failOffline?: boolean;
    pagination?: Pagination;
    peek?: boolean;
    unreadOnly?: boolean;
};
/**
 * Options for the `send` method of the chat module.
 */
export declare type ChatSendOptions = {
    conversationId?: string;
    nonblock?: boolean;
    membersType: MembersType;
    confirmLumenSend?: boolean;
};
/**
 * Options for the `attach` method of the chat module.
 */
export declare type ChatAttachOptions = {
    conversationId?: string;
    title?: string;
    preview?: string;
};
/**
 * Options for the `download` method of the chat module.
 */
export declare type ChatDownloadOptions = {
    conversationId?: string;
    preview?: string;
    noStream?: boolean;
};
/**
 * Options for the `delete` method of the chat module.
 */
export declare type ChatDeleteOptions = {
    conversationId?: string;
};
/**
 * Options for the `react` method of the chat module.
 */
export declare type ChatReactOptions = {
    conversationId?: string;
};
export declare type ChatEditOptions = {
    channel: ChatChannel;
    conversationId?: string;
    messageId: number;
    message: ChatMessage;
};
export declare type ChatOptionsReaction = {
    channel: ChatChannel;
    conversationId?: string;
    messageId: number;
    message: ChatMessage;
};
export declare type ChatOptionsSetStatus = {
    channel: ChatChannel;
    conversationId?: string;
    status: string;
};
export declare type ChatOptionsMark = {
    channel: ChatChannel;
    conversationId?: string;
    messageId: number;
};
export declare type ChatOptionsSearchInbox = ChatOptionsSearch & {
    query: string;
    forceReindex?: boolean;
};
export declare type ChatOptionsSearchRegexp = ChatOptionsSearchInbox & {
    channel: ChatChannel;
    conversationId?: string;
    query: string;
    isRegex: boolean;
    maxMessages: number;
};
export declare type UnfurlModeKind = 'always' | 'never' | 'whitelisted';
export declare type UnfurlMode = {
    mode: UnfurlModeKind;
    whitelist?: string[];
};
export declare type FlipParticipant = {
    uid: string;
    deviceID: string;
    username: string;
    deviceName: string;
    commitment: string;
    reveal: string;
};
export declare type FlipSummary = {
    gameID: string;
    phase: number;
    progressText: string;
    resultText: string;
    commitmentVisualization: string;
    revealVisualization: string;
    participants: FlipParticipant[];
    resultInfo: Object;
};
export {};
