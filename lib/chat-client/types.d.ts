declare type TopicType = 'chat' | 'dev';
declare type MembersType = 'team' | 'impteamnative' | 'kbfs' | 'impteamupgrade';
declare type ChannelMention = 'none' | 'all' | 'here';
declare type AdvertisementType = 'public' | 'teamconvs' | 'teammembers';
export interface ChannelNameMention {
    name: string;
    convID: string;
}
/**
 * A Keybase chat channel. This can be a channel in a team, or just an informal channel between two users.
 * name: the name of the team or comma-separated list of participants
 */
export interface ChatChannel {
    name: string;
    public?: boolean;
    topicType?: TopicType;
    membersType?: MembersType;
    topicName?: string;
}
/**
 * A chat message. The content goes in the `body` property!
 */
export interface ChatMessage {
    body: string;
}
/**
 * A chat conversation. This is essentially a chat channel plus some additional metadata.
 */
export interface ChatConversation {
    id: string;
    channel: ChatChannel;
    unread: boolean;
    activeAt: number;
    activeAtMs: number;
    memberStatus: string;
}
export interface Pagination {
    num: number;
    next?: string;
    previous?: string;
    last?: boolean;
}
export interface TextPayment {
    username: string;
    paymentText: string;
    result: {
        resultTyp: number;
        sent: string;
    };
}
export interface TextContent {
    type: 'text';
    text: {
        body: string;
        payments: null | TextPayment[];
    };
}
export interface AssetMetadataImage {
    width: number;
    height: number;
}
export interface AssetMetadataVideo {
    width: number;
    height: number;
    durationMs: number;
}
export interface AssetMetadataAudio {
    durationMs: number;
}
export interface AssetMetadata {
    assetType: number;
    image?: AssetMetadataImage;
    video?: AssetMetadataVideo;
    audio?: AssetMetadataAudio;
}
export interface Asset {
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
}
export interface AttachmentContent {
    type: 'attachment';
    attachment: {
        object: Asset;
        preview?: Asset;
        previews: Asset[];
        metadata: any[];
        uploaded: boolean;
    };
}
export interface ReactionContent {
    type: 'reaction';
    reaction: {
        m: number;
        b: string;
    };
}
export interface EditContent {
    type: 'edit';
    edit: {
        messageId: number;
        body: string;
    };
}
export interface DeleteContent {
    type: 'delete';
    delete: {
        messageIDs: number[];
    };
}
export interface SendPaymentContent {
    type: 'sendpayment';
    sendPayment: {
        paymentId: string;
    };
}
export declare type MessageContent = TextContent | AttachmentContent | ReactionContent | EditContent | DeleteContent | SendPaymentContent;
export interface MessageSender {
    deviceId: string;
    deviceName?: string;
    uid: string;
    username?: string;
}
export interface ReactionTiming {
    ctime: number;
    reactionMsgId: number;
}
export interface ReactionByUsers {
    [key: string]: ReactionTiming;
}
export interface ReactionLookup {
    [key: string]: ReactionByUsers;
}
export interface MessageReactionSummary {
    reactions: ReactionLookup;
}
export interface MessageSummary {
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
    reactions?: MessageReactionSummary;
    hasPairwiseMacs?: boolean;
    atMentionUsernames?: string[];
    channelMention?: ChannelMention;
    channelNameMentions?: ChannelNameMention[];
}
export interface MessageNotification {
    source: string;
    msg: MessageSummary;
    error: string;
    pagination: Pagination;
}
export interface ReadResult {
    messages: MessageSummary[];
    pagination: Pagination;
}
export interface SendResult {
    id: number;
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
export interface ChatOptionsSearch {
    maxHits: number;
    sentBy: string;
    sentAfter?: string;
    sendBefore?: string;
    beforeContext?: number;
    afterContext?: number;
}
/**
 * Options for the `list` method of the chat module.
 */
export interface ChatListOptions {
    failOffline?: boolean;
    showErrors?: boolean;
    topicType?: TopicType;
    unreadOnly?: boolean;
}
/**
 * Options for the `listChannels` method of the chat module.
 */
export interface ChatListChannelsOptions {
    topicType?: TopicType;
    membersType?: MembersType;
}
/**
 * Options for the `read` method of the chat module.
 */
export interface ChatReadOptions {
    conversationId?: string;
    failOffline?: boolean;
    pagination?: Pagination;
    peek?: boolean;
    unreadOnly?: boolean;
}
/**
 * Options for the `send` method of the chat module.
 */
export interface ChatSendOptions {
    conversationId?: string;
    nonblock?: boolean;
    membersType?: MembersType;
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
 * Options for the `delete` method of the chat module.
 */
export interface ChatDeleteOptions {
    conversationId?: string;
}
/**
 * Options for the `react` method of the chat module.
 */
export interface ChatReactOptions {
    conversationId?: string;
}
export interface ChatEditOptions {
    channel: ChatChannel;
    conversationId?: string;
    messageId: number;
    message: ChatMessage;
}
export interface ChatOptionsReaction {
    channel: ChatChannel;
    conversationId?: string;
    messageId: number;
    message: ChatMessage;
}
export interface ChatOptionsSetStatus {
    channel: ChatChannel;
    conversationId?: string;
    status: string;
}
export interface ChatOptionsMark {
    channel: ChatChannel;
    conversationId?: string;
    messageId: number;
}
export interface ChatOptionsSearchInbox extends ChatOptionsSearch {
    query: string;
    forceReindex?: boolean;
}
export interface ChatOptionsSearchRegexp extends ChatOptionsSearchInbox {
    channel: ChatChannel;
    conversationId?: string;
    query: string;
    isRegex: boolean;
    maxMessages: number;
}
export declare type UnfurlModeKind = 'always' | 'never' | 'whitelisted';
export interface UnfurlMode {
    mode: UnfurlModeKind;
    whitelist?: string[];
}
export interface FlipParticipant {
    uid: string;
    deviceID: string;
    username: string;
    deviceName: string;
    commitment: string;
    reveal: string;
}
export interface FlipSummary {
    gameID: string;
    phase: number;
    progressText: string;
    resultText: string;
    commitmentVisualization: string;
    revealVisualization: string;
    participants: FlipParticipant[];
    resultInfo: Record<string, any>;
}
export interface CommandExtendedDescription {
    title: string;
    desktopBody: string;
    mobileBody: string;
}
export interface AdvertisedCommand {
    name: string;
    description: string;
    usage: string;
    extendedDescription?: CommandExtendedDescription;
}
export interface AdvertisementBundle {
    type: AdvertisementType;
    commands: AdvertisedCommand[];
    teamName?: string;
}
export interface Advertisement {
    alias?: string;
    advertisements: AdvertisementBundle[];
}
export interface AdvertisementsLookup {
    channel: ChatChannel;
    conversationID?: string;
}
export interface AdvertisementsListCommand extends AdvertisedCommand {
    username: String;
}
export interface AdvertisementsList {
    commands: AdvertisementsListCommand[];
}
export {};
