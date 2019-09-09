/// <reference types="node" />
import * as gregor1 from '../gregor1';
import * as keybase1 from '../keybase1';
import * as stellar1 from '../stellar1';
export declare type RateLimitRes = {
    tank: string;
    capacity: number;
    reset: number;
    gas: number;
};
/**
 * A Keybase chat channel. This can be a channel in a team, or just an informal channel between two users.
 *    name: the name of the team or comma-separated list of participants
 */
export declare type ChatChannel = {
    name: string;
    public?: boolean;
    membersType?: string;
    topicType?: string;
    topicName?: string;
};
/**
 * A chat message. The content goes in the `body` property!
 */
export declare type ChatMessage = {
    body: string;
};
export declare type MsgSender = {
    uid: string;
    username?: string;
    deviceId: string;
    deviceName?: string;
};
export declare type MsgFlipContent = {
    text: string;
    gameId: string;
    flipConvId: string;
    userMentions: KnownUserMention[] | null;
    teamMentions: KnownTeamMention[] | null;
};
export declare type MsgContent = {
    type: string;
    text?: MessageText;
    attachment?: MessageAttachment;
    edit?: MessageEdit;
    reaction?: MessageReaction;
    delete?: MessageDelete;
    metadata?: MessageConversationMetadata;
    headline?: MessageHeadline;
    attachmentUploaded?: MessageAttachmentUploaded;
    system?: MessageSystem;
    sendPayment?: MessageSendPayment;
    requestPayment?: MessageRequestPayment;
    unfurl?: MessageUnfurl;
    flip?: MsgFlipContent;
};
export declare type MsgSummary = {
    id: MessageID;
    conversationId: string;
    channel: ChatChannel;
    sender: MsgSender;
    sentAt: never;
    sentAtMs: never;
    content: MsgContent;
    prev: MessagePreviousPointer[] | null;
    unread: boolean;
    revokedDevice?: boolean;
    offline?: boolean;
    kbfsEncrypted?: boolean;
    isEphemeral?: boolean;
    isEphemeralExpired?: boolean;
    eTime?: gregor1.Time;
    reactions?: ReactionMap;
    hasPairwiseMacs?: boolean;
    atMentionUsernames?: string[] | null;
    channelMention?: string;
    channelNameMentions?: UIChannelNameMention[] | null;
};
export declare type Message = {
    msg?: MsgSummary;
    error?: string;
};
export declare type Thread = {
    messages: Message[] | null;
    pagination?: Pagination;
    offline?: boolean;
    identifyFailures?: keybase1.TLFIdentifyFailure[] | null;
    ratelimits?: RateLimitRes[] | null;
};
/**
 * A chat conversation. This is essentially a chat channel plus some additional metadata.
 */
export declare type ConvSummary = {
    id: string;
    channel: ChatChannel;
    unread: boolean;
    activeAt: never;
    activeAtMs: never;
    memberStatus: string;
    resetUsers?: string[] | null;
    finalizeInfo?: ConversationFinalizeInfo;
    supersedes?: string[] | null;
    supersededBy?: string[] | null;
    error?: string;
};
export declare type ChatList = {
    conversations: ConvSummary[] | null;
    offline: boolean;
    identifyFailures?: keybase1.TLFIdentifyFailure[] | null;
    pagination?: Pagination;
    ratelimits?: RateLimitRes[] | null;
};
export declare type SendRes = {
    message: string;
    id?: MessageID;
    outboxId?: OutboxID;
    identifyFailures?: keybase1.TLFIdentifyFailure[] | null;
    ratelimits?: RateLimitRes[] | null;
};
export declare type SearchInboxResOutput = {
    results?: ChatSearchInboxResults;
    identifyFailures?: keybase1.TLFIdentifyFailure[] | null;
    ratelimits?: RateLimitRes[] | null;
};
export declare type RegexpRes = {
    hits: ChatSearchHit[] | null;
    identifyFailures?: keybase1.TLFIdentifyFailure[] | null;
    ratelimits?: RateLimitRes[] | null;
};
export declare type NewConvRes = {
    id: string;
    identifyFailures?: keybase1.TLFIdentifyFailure[] | null;
    ratelimits?: RateLimitRes[] | null;
};
export declare type ListCommandsRes = {
    commands: UserBotCommandOutput[] | null;
    ratelimits?: RateLimitRes[] | null;
};
export declare type EmptyRes = {
    ratelimits?: RateLimitRes[] | null;
};
export declare type MsgNotification = {
    type: string;
    source: string;
    msg?: MsgSummary;
    error?: string;
    pagination?: UIPagination;
};
export declare type AdvertiseCommandAPIParam = {
    type: string;
    commands: UserBotCommandInput[] | null;
    teamName?: string;
};
export declare type UIPagination = {
    next: string;
    previous: string;
    num: number;
    last: boolean;
};
export declare type UnverifiedInboxUIItemMetadata = {
    channelName: string;
    headline: string;
    headlineDecorated: string;
    snippet: string;
    snippetDecoration: string;
    writerNames: string[] | null;
    resetParticipants: string[] | null;
};
export declare type UnverifiedInboxUIItem = {
    convId: string;
    topicType: TopicType;
    isPublic: boolean;
    name: string;
    visibility: keybase1.TLFVisibility;
    status: ConversationStatus;
    membersType: ConversationMembersType;
    memberStatus: ConversationMemberStatus;
    teamType: TeamType;
    notifications?: ConversationNotificationInfo;
    time: gregor1.Time;
    version: ConversationVers;
    localVersion: LocalConversationVers;
    convRetention?: RetentionPolicy;
    teamRetention?: RetentionPolicy;
    maxMsgId: MessageID;
    maxVisibleMsgId: MessageID;
    readMsgId: MessageID;
    localMetadata?: UnverifiedInboxUIItemMetadata;
    draft?: string;
    finalizeInfo?: ConversationFinalizeInfo;
    supersedes: ConversationMetadata[] | null;
    supersededBy: ConversationMetadata[] | null;
    commands: ConversationCommandGroups;
};
export declare type UnverifiedInboxUIItems = {
    items: UnverifiedInboxUIItem[] | null;
    pagination?: UIPagination;
    offline: boolean;
};
export declare enum UIParticipantType {
    NONE = "none",
    USER = "user",
    PHONENO = "phoneno",
    EMAIL = "email"
}
export declare type UIParticipant = {
    type: UIParticipantType;
    assertion: string;
    fullName?: string;
    contactName?: string;
};
export declare type UIPinnedMessage = {
    message: UIMessage;
    pinnerUsername: string;
};
export declare type InboxUIItem = {
    convId: string;
    topicType: TopicType;
    isPublic: boolean;
    isEmpty: boolean;
    name: string;
    snippet: string;
    snippetDecoration: string;
    channel: string;
    headline: string;
    headlineDecorated: string;
    draft?: string;
    visibility: keybase1.TLFVisibility;
    participants: UIParticipant[] | null;
    resetParticipants: string[] | null;
    status: ConversationStatus;
    membersType: ConversationMembersType;
    memberStatus: ConversationMemberStatus;
    teamType: TeamType;
    time: gregor1.Time;
    notifications?: ConversationNotificationInfo;
    creatorInfo?: ConversationCreatorInfoLocal;
    version: ConversationVers;
    localVersion: LocalConversationVers;
    maxMsgId: MessageID;
    maxVisibleMsgId: MessageID;
    readMsgId: MessageID;
    convRetention?: RetentionPolicy;
    teamRetention?: RetentionPolicy;
    convSettings?: ConversationSettingsLocal;
    finalizeInfo?: ConversationFinalizeInfo;
    supersedes: ConversationMetadata[] | null;
    supersededBy: ConversationMetadata[] | null;
    commands: ConversationCommandGroups;
    botCommands: ConversationCommandGroups;
    pinnedMsg?: UIPinnedMessage;
};
export declare type InboxUIItemError = {
    typ: ConversationErrorType;
    message: string;
    unverifiedTlfName: string;
    rekeyInfo?: ConversationErrorRekey;
    remoteConv: UnverifiedInboxUIItem;
};
export declare type InboxUIItems = {
    items: InboxUIItem[] | null;
    pagination?: UIPagination;
    offline: boolean;
};
export declare type UIChannelNameMention = {
    name: string;
    convId: string;
};
export declare type UIAssetUrlInfo = {
    previewUrl: string;
    fullUrl: string;
    fullUrlCached: boolean;
    mimeType: string;
    videoDuration?: string;
    inlineVideoPlayable: boolean;
};
export declare type UIPaymentInfo = {
    accountId?: stellar1.AccountID;
    amountDescription: string;
    worth: string;
    worthAtSendTime: string;
    delta: stellar1.BalanceDelta;
    note: string;
    paymentId: stellar1.PaymentID;
    status: stellar1.PaymentStatus;
    statusDescription: string;
    statusDetail: string;
    showCancel: boolean;
    fromUsername: string;
    toUsername: string;
    sourceAmount: string;
    sourceAsset: stellar1.Asset;
    issuerDescription: string;
};
export declare type UIRequestInfo = {
    amount: string;
    amountDescription: string;
    asset?: stellar1.Asset;
    currency?: stellar1.OutsideCurrencyCode;
    worthAtRequestTime: string;
    status: stellar1.RequestStatus;
};
export declare type UIMessageUnfurlInfo = {
    unfurlMessageId: MessageID;
    url: string;
    unfurl: UnfurlDisplay;
    isCollapsed: boolean;
};
export declare type UIMessageValid = {
    messageId: MessageID;
    ctime: gregor1.Time;
    outboxId?: string;
    messageBody: MessageBody;
    decoratedTextBody?: string;
    bodySummary: string;
    senderUsername: string;
    senderDeviceName: string;
    senderDeviceType: string;
    senderUid: gregor1.UID;
    senderDeviceId: gregor1.DeviceID;
    superseded: boolean;
    assetUrlInfo?: UIAssetUrlInfo;
    senderDeviceRevokedAt?: gregor1.Time;
    atMentions: string[] | null;
    channelMention: ChannelMention;
    channelNameMentions: UIChannelNameMention[] | null;
    isEphemeral: boolean;
    isEphemeralExpired: boolean;
    explodedBy?: string;
    etime: gregor1.Time;
    reactions: ReactionMap;
    hasPairwiseMacs: boolean;
    paymentInfos: UIPaymentInfo[] | null;
    requestInfo?: UIRequestInfo;
    unfurls: UIMessageUnfurlInfo[] | null;
    isCollapsed: boolean;
    flipGameId?: string;
    isDeleteable: boolean;
    isEditable: boolean;
    replyTo?: UIMessage;
    botUid?: gregor1.UID;
};
export declare type UIMessageOutbox = {
    state: OutboxState;
    outboxId: string;
    messageType: MessageType;
    body: string;
    decoratedTextBody?: string;
    ctime: gregor1.Time;
    ordinal: number;
    isEphemeral: boolean;
    flipGameId?: string;
    replyTo?: UIMessage;
    filename: string;
    title: string;
    preview?: MakePreviewRes;
};
export declare enum MessageUnboxedState {
    VALID = "valid",
    ERROR = "error",
    OUTBOX = "outbox",
    PLACEHOLDER = "placeholder"
}
export declare type UIMessage = {
    state: MessageUnboxedState.VALID;
    VALID: UIMessageValid | null;
} | {
    state: MessageUnboxedState.ERROR;
    ERROR: MessageUnboxedError | null;
} | {
    state: MessageUnboxedState.OUTBOX;
    OUTBOX: UIMessageOutbox | null;
} | {
    state: MessageUnboxedState.PLACEHOLDER;
    PLACEHOLDER: MessageUnboxedPlaceholder | null;
} | {
    state: Exclude<MessageUnboxedState, MessageUnboxedState.VALID | MessageUnboxedState.ERROR | MessageUnboxedState.OUTBOX | MessageUnboxedState.PLACEHOLDER>;
};
export declare type UIMessages = {
    messages: UIMessage[] | null;
    pagination?: UIPagination;
};
export declare type UITeamMention = {
    inTeam: boolean;
    open: boolean;
    description?: string;
    numMembers?: number;
    publicAdmins: string[] | null;
    convId?: string;
};
export declare enum UITextDecorationTyp {
    PAYMENT = "payment",
    ATMENTION = "atmention",
    CHANNELNAMEMENTION = "channelnamemention",
    MAYBEMENTION = "maybemention",
    LINK = "link",
    MAILTO = "mailto",
    KBFSPATH = "kbfspath"
}
export declare enum UIMaybeMentionStatus {
    UNKNOWN = "unknown",
    USER = "user",
    TEAM = "team",
    NOTHING = "nothing"
}
export declare type UILinkDecoration = {
    display: string;
    url: string;
};
export declare type UIMaybeMentionInfo = {
    status: UIMaybeMentionStatus.UNKNOWN;
} | {
    status: UIMaybeMentionStatus.USER;
} | {
    status: UIMaybeMentionStatus.TEAM;
    TEAM: UITeamMention | null;
} | {
    status: UIMaybeMentionStatus.NOTHING;
} | {
    status: Exclude<UIMaybeMentionStatus, UIMaybeMentionStatus.UNKNOWN | UIMaybeMentionStatus.USER | UIMaybeMentionStatus.TEAM | UIMaybeMentionStatus.NOTHING>;
};
export declare type UITextDecoration = {
    typ: UITextDecorationTyp.PAYMENT;
    PAYMENT: TextPayment | null;
} | {
    typ: UITextDecorationTyp.ATMENTION;
    ATMENTION: string | null;
} | {
    typ: UITextDecorationTyp.CHANNELNAMEMENTION;
    CHANNELNAMEMENTION: UIChannelNameMention | null;
} | {
    typ: UITextDecorationTyp.MAYBEMENTION;
    MAYBEMENTION: MaybeMention | null;
} | {
    typ: UITextDecorationTyp.LINK;
    LINK: UILinkDecoration | null;
} | {
    typ: UITextDecorationTyp.MAILTO;
    MAILTO: UILinkDecoration | null;
} | {
    typ: UITextDecorationTyp.KBFSPATH;
    KBFSPATH: KBFSPath | null;
} | {
    typ: Exclude<UITextDecorationTyp, UITextDecorationTyp.PAYMENT | UITextDecorationTyp.ATMENTION | UITextDecorationTyp.CHANNELNAMEMENTION | UITextDecorationTyp.MAYBEMENTION | UITextDecorationTyp.LINK | UITextDecorationTyp.MAILTO | UITextDecorationTyp.KBFSPATH>;
};
export declare enum UIChatThreadStatusTyp {
    NONE = "none",
    SERVER = "server",
    VALIDATING = "validating",
    VALIDATED = "validated"
}
export declare type UIChatThreadStatus = {
    typ: UIChatThreadStatusTyp.NONE;
} | {
    typ: UIChatThreadStatusTyp.SERVER;
} | {
    typ: UIChatThreadStatusTyp.VALIDATING;
    VALIDATING: number | null;
} | {
    typ: UIChatThreadStatusTyp.VALIDATED;
} | {
    typ: Exclude<UIChatThreadStatusTyp, UIChatThreadStatusTyp.NONE | UIChatThreadStatusTyp.SERVER | UIChatThreadStatusTyp.VALIDATING | UIChatThreadStatusTyp.VALIDATED>;
};
export declare type UIChatSearchConvHit = {
    convId: string;
    teamType: TeamType;
    name: string;
    mtime: gregor1.Time;
};
export declare type UIChatSearchConvHits = {
    hits: UIChatSearchConvHit[] | null;
    unreadMatches: boolean;
};
export declare type UIChatPayment = {
    username: string;
    fullName: string;
    xlmAmount: string;
    error?: string;
    displayAmount?: string;
};
export declare type UIChatPaymentSummary = {
    xlmTotal: string;
    displayTotal: string;
    payments: UIChatPayment[] | null;
};
export declare type GiphySearchResult = {
    targetUrl: string;
    previewUrl: string;
    previewWidth: number;
    previewHeight: number;
    previewIsVideo: boolean;
};
export declare type GiphySearchResults = {
    results: GiphySearchResult[] | null;
    galleryUrl: string;
};
export declare enum UICoinFlipPhase {
    COMMITMENT = "commitment",
    REVEALS = "reveals",
    COMPLETE = "complete",
    ERROR = "error"
}
export declare type UICoinFlipErrorParticipant = {
    user: string;
    device: string;
};
export declare type UICoinFlipAbsenteeError = {
    absentees: UICoinFlipErrorParticipant[] | null;
};
export declare enum UICoinFlipErrorTyp {
    GENERIC = "generic",
    ABSENTEE = "absentee",
    TIMEOUT = "timeout",
    ABORTED = "aborted",
    DUPREG = "dupreg",
    DUPCOMMITCOMPLETE = "dupcommitcomplete",
    DUPREVEAL = "dupreveal",
    COMMITMISMATCH = "commitmismatch"
}
export declare type UICoinFlipError = {
    typ: UICoinFlipErrorTyp.GENERIC;
    GENERIC: string | null;
} | {
    typ: UICoinFlipErrorTyp.ABSENTEE;
    ABSENTEE: UICoinFlipAbsenteeError | null;
} | {
    typ: UICoinFlipErrorTyp.TIMEOUT;
} | {
    typ: UICoinFlipErrorTyp.ABORTED;
} | {
    typ: UICoinFlipErrorTyp.DUPREG;
    DUPREG: UICoinFlipErrorParticipant | null;
} | {
    typ: UICoinFlipErrorTyp.DUPCOMMITCOMPLETE;
    DUPCOMMITCOMPLETE: UICoinFlipErrorParticipant | null;
} | {
    typ: UICoinFlipErrorTyp.DUPREVEAL;
    DUPREVEAL: UICoinFlipErrorParticipant | null;
} | {
    typ: UICoinFlipErrorTyp.COMMITMISMATCH;
    COMMITMISMATCH: UICoinFlipErrorParticipant | null;
} | {
    typ: Exclude<UICoinFlipErrorTyp, UICoinFlipErrorTyp.GENERIC | UICoinFlipErrorTyp.ABSENTEE | UICoinFlipErrorTyp.TIMEOUT | UICoinFlipErrorTyp.ABORTED | UICoinFlipErrorTyp.DUPREG | UICoinFlipErrorTyp.DUPCOMMITCOMPLETE | UICoinFlipErrorTyp.DUPREVEAL | UICoinFlipErrorTyp.COMMITMISMATCH>;
};
export declare enum UICoinFlipResultTyp {
    NUMBER = "number",
    SHUFFLE = "shuffle",
    DECK = "deck",
    HANDS = "hands",
    COIN = "coin"
}
export declare type UICoinFlipHand = {
    target: string;
    hand: number[] | null;
};
export declare type UICoinFlipResult = {
    typ: UICoinFlipResultTyp.NUMBER;
    NUMBER: string | null;
} | {
    typ: UICoinFlipResultTyp.SHUFFLE;
    SHUFFLE: string[] | null;
} | {
    typ: UICoinFlipResultTyp.DECK;
    DECK: number[] | null;
} | {
    typ: UICoinFlipResultTyp.HANDS;
    HANDS: UICoinFlipHand[] | null;
} | {
    typ: UICoinFlipResultTyp.COIN;
    COIN: boolean | null;
} | {
    typ: Exclude<UICoinFlipResultTyp, UICoinFlipResultTyp.NUMBER | UICoinFlipResultTyp.SHUFFLE | UICoinFlipResultTyp.DECK | UICoinFlipResultTyp.HANDS | UICoinFlipResultTyp.COIN>;
};
export declare type UICoinFlipParticipant = {
    uid: string;
    deviceId: string;
    username: string;
    deviceName: string;
    commitment: string;
    reveal?: string;
};
export declare type UICoinFlipStatus = {
    gameId: string;
    phase: UICoinFlipPhase;
    progressText: string;
    resultText: string;
    commitmentVisualization: string;
    revealVisualization: string;
    participants: UICoinFlipParticipant[] | null;
    errorInfo?: UICoinFlipError;
    resultInfo?: UICoinFlipResult;
};
export declare type UICommandMarkdown = {
    body: string;
    title?: string;
};
export declare type LocationWatchID = never;
export declare enum UICommandStatusDisplayTyp {
    STATUS = "status",
    WARNING = "warning",
    ERROR = "error"
}
export declare enum UICommandStatusActionTyp {
    APPSETTINGS = "appsettings"
}
export declare enum UIBotCommandsUpdateStatus {
    UPTODATE = "uptodate",
    UPDATING = "updating",
    FAILED = "failed",
    BLANK = "blank"
}
export declare type ConversationCommand = {
    description: string;
    name: string;
    usage: string;
    hasHelpText: boolean;
    username?: string;
};
export declare enum ConversationCommandGroupsTyp {
    BUILTIN = "builtin",
    CUSTOM = "custom",
    NONE = "none"
}
export declare enum ConversationBuiltinCommandTyp {
    NONE = "none",
    ADHOC = "adhoc",
    SMALLTEAM = "smallteam",
    BIGTEAM = "bigteam",
    BIGTEAMGENERAL = "bigteamgeneral"
}
export declare type ConversationCommandGroupsCustom = {
    commands: ConversationCommand[] | null;
};
export declare type ConversationCommandGroups = {
    typ: ConversationCommandGroupsTyp.BUILTIN;
    BUILTIN: ConversationBuiltinCommandTyp | null;
} | {
    typ: ConversationCommandGroupsTyp.CUSTOM;
    CUSTOM: ConversationCommandGroupsCustom | null;
} | {
    typ: ConversationCommandGroupsTyp.NONE;
} | {
    typ: Exclude<ConversationCommandGroupsTyp, ConversationCommandGroupsTyp.BUILTIN | ConversationCommandGroupsTyp.CUSTOM | ConversationCommandGroupsTyp.NONE>;
};
export declare type ThreadID = Buffer;
export declare type MessageID = number;
export declare type TLFConvOrdinal = number;
export declare type TopicID = Buffer;
export declare type ConversationID = Buffer;
export declare type TLFID = Buffer;
export declare type Hash = Buffer;
export declare type InboxVers = never;
export declare type LocalConversationVers = never;
export declare type ConversationVers = never;
export declare type OutboxID = Buffer;
export declare type TopicNameState = Buffer;
export declare type FlipGameID = Buffer;
export declare type InboxVersInfo = {
    uid: gregor1.UID;
    vers: InboxVers;
};
export declare enum ConversationExistence {
    ACTIVE = "active",
    ARCHIVED = "archived",
    DELETED = "deleted",
    ABANDONED = "abandoned"
}
export declare enum ConversationMembersType {
    KBFS = "kbfs",
    TEAM = "team",
    IMPTEAMNATIVE = "impteamnative",
    IMPTEAMUPGRADE = "impteamupgrade"
}
export declare enum SyncInboxResType {
    CURRENT = "current",
    INCREMENTAL = "incremental",
    CLEAR = "clear"
}
export declare enum MessageType {
    NONE = "none",
    TEXT = "text",
    ATTACHMENT = "attachment",
    EDIT = "edit",
    DELETE = "delete",
    METADATA = "metadata",
    TLFNAME = "tlfname",
    HEADLINE = "headline",
    ATTACHMENTUPLOADED = "attachmentuploaded",
    JOIN = "join",
    LEAVE = "leave",
    SYSTEM = "system",
    DELETEHISTORY = "deletehistory",
    REACTION = "reaction",
    SENDPAYMENT = "sendpayment",
    REQUESTPAYMENT = "requestpayment",
    UNFURL = "unfurl",
    FLIP = "flip",
    PIN = "pin"
}
export declare enum TopicType {
    NONE = "none",
    CHAT = "chat",
    DEV = "dev",
    KBFSFILEEDIT = "kbfsfileedit"
}
export declare enum TeamType {
    NONE = "none",
    SIMPLE = "simple",
    COMPLEX = "complex"
}
export declare enum NotificationKind {
    GENERIC = "generic",
    ATMENTION = "atmention"
}
export declare enum GlobalAppNotificationSetting {
    NEWMESSAGES = "newmessages",
    PLAINTEXTMOBILE = "plaintextmobile",
    PLAINTEXTDESKTOP = "plaintextdesktop",
    DEFAULTSOUNDMOBILE = "defaultsoundmobile",
    DISABLETYPING = "disabletyping"
}
export declare type GlobalAppNotificationSettings = {
    settings: {
        [key: string]: boolean;
    };
};
export declare enum ConversationStatus {
    UNFILED = "unfiled",
    FAVORITE = "favorite",
    IGNORED = "ignored",
    BLOCKED = "blocked",
    MUTED = "muted",
    REPORTED = "reported"
}
export declare type ConversationMember = {
    uid: gregor1.UID;
    convId: ConversationID;
    topicType: TopicType;
};
export declare type ConversationIDMessageIDPair = {
    convId: ConversationID;
    msgId: MessageID;
};
export declare type ConversationIDMessageIDPairs = {
    pairs: ConversationIDMessageIDPair[] | null;
};
export declare type ChannelNameMention = {
    convId: ConversationID;
    topicName: string;
};
export declare type KBFSPath = {
    startIndex: number;
    rawPath: string;
    standardPath: string;
    pathInfo: keybase1.KBFSPathInfo;
};
export declare enum ConversationMemberStatus {
    ACTIVE = "active",
    REMOVED = "removed",
    LEFT = "left",
    PREVIEW = "preview",
    RESET = "reset",
    NEVER_JOINED = "never_joined"
}
export declare type Pagination = {
    next?: Buffer;
    previous?: Buffer;
    num: number;
    last?: boolean;
    forceFirstPage?: boolean;
};
export declare type RateLimit = {
    name: string;
    callsRemaining: number;
    windowReset: number;
    maxCalls: number;
};
export declare type GetInboxQuery = {
    convId?: ConversationID;
    topicType?: TopicType;
    tlfId?: TLFID;
    tlfVisibility?: keybase1.TLFVisibility;
    before?: gregor1.Time;
    after?: gregor1.Time;
    oneChatTypePerTlf?: boolean;
    topicName?: string;
    status: ConversationStatus[] | null;
    memberStatus: ConversationMemberStatus[] | null;
    existences: ConversationExistence[] | null;
    membersTypes: ConversationMembersType[] | null;
    convIDs: ConversationID[] | null;
    unreadOnly: boolean;
    readOnly: boolean;
    computeActiveList: boolean;
    summarizeMaxMsgs: boolean;
    skipBgLoads: boolean;
};
export declare type ConversationIDTriple = {
    tlfid: TLFID;
    topicType: TopicType;
    topicId: TopicID;
};
export declare type ConversationFinalizeInfo = {
    resetUser: string;
    resetDate: string;
    resetFull: string;
    resetTimestamp: gregor1.Time;
};
export declare type ConversationResolveInfo = {
    newTlfName: string;
};
export declare type Expunge = {
    upto: MessageID;
    basis: MessageID;
};
export declare type ConversationMetadata = {
    idTriple: ConversationIDTriple;
    conversationId: ConversationID;
    visibility: keybase1.TLFVisibility;
    status: ConversationStatus;
    membersType: ConversationMembersType;
    teamType: TeamType;
    existence: ConversationExistence;
    version: ConversationVers;
    localVersion: LocalConversationVers;
    finalizeInfo?: ConversationFinalizeInfo;
    supersedes: ConversationMetadata[] | null;
    supersededBy: ConversationMetadata[] | null;
    activeList: gregor1.UID[] | null;
    allList: gregor1.UID[] | null;
    resetList: gregor1.UID[] | null;
};
export declare type ConversationNotificationInfo = {
    channelWide: boolean;
    settings: {
        [key: string]: {
            [key: string]: boolean;
        };
    };
};
export declare type ConversationReaderInfo = {
    mtime: gregor1.Time;
    readMsgid: MessageID;
    maxMsgid: MessageID;
    status: ConversationMemberStatus;
};
export declare type ConversationCreatorInfo = {
    ctime: gregor1.Time;
    uid: gregor1.UID;
};
export declare type ConversationCreatorInfoLocal = {
    ctime: gregor1.Time;
    username: string;
};
export declare type ConversationMinWriterRoleInfo = {
    uid: gregor1.UID;
    role: keybase1.TeamRole;
};
export declare type ConversationSettings = {
    mwr?: ConversationMinWriterRoleInfo;
};
export declare type Conversation = {
    metadata: ConversationMetadata;
    readerInfo?: ConversationReaderInfo;
    notifications?: ConversationNotificationInfo;
    maxMsgs: MessageBoxed[] | null;
    maxMsgSummaries: MessageSummary[] | null;
    creatorInfo?: ConversationCreatorInfo;
    pinnedMsg?: MessageID;
    expunge: Expunge;
    convRetention?: RetentionPolicy;
    teamRetention?: RetentionPolicy;
    cs?: ConversationSettings;
};
export declare type MessageSummary = {
    msgId: MessageID;
    messageType: MessageType;
    tlfName: string;
    tlfPublic: boolean;
    ctime: gregor1.Time;
};
export declare type Reaction = {
    ctime: gregor1.Time;
    reactionMsgId: MessageID;
};
export declare type ReactionMap = {
    reactions: {
        [key: string]: {
            [key: string]: Reaction;
        };
    };
};
export declare type MessageServerHeader = {
    messageId: MessageID;
    supersededBy: MessageID;
    r: MessageID[] | null;
    u: MessageID[] | null;
    replies: MessageID[] | null;
    ctime: gregor1.Time;
    n: gregor1.Time;
    rt?: gregor1.Time;
};
export declare type MessagePreviousPointer = {
    id: MessageID;
    hash: Hash;
};
export declare type OutboxInfo = {
    prev: MessageID;
    composeTime: gregor1.Time;
};
export declare type MsgEphemeralMetadata = {
    l: gregor1.DurationSec;
    g: keybase1.EkGeneration;
    u?: string;
};
export declare type EphemeralPurgeInfo = {
    c: ConversationID;
    a: boolean;
    n: gregor1.Time;
    e: MessageID;
};
export declare type MessageClientHeader = {
    conv: ConversationIDTriple;
    tlfName: string;
    tlfPublic: boolean;
    messageType: MessageType;
    supersedes: MessageID;
    kbfsCryptKeysUsed?: boolean;
    deletes: MessageID[] | null;
    prev: MessagePreviousPointer[] | null;
    deleteHistory?: MessageDeleteHistory;
    sender: gregor1.UID;
    senderDevice: gregor1.DeviceID;
    merkleRoot?: MerkleRoot;
    outboxId?: OutboxID;
    outboxInfo?: OutboxInfo;
    em?: MsgEphemeralMetadata;
    pm: {
        [key: string]: Buffer;
    };
    b?: gregor1.UID;
};
export declare type MessageClientHeaderVerified = {
    conv: ConversationIDTriple;
    tlfName: string;
    tlfPublic: boolean;
    messageType: MessageType;
    prev: MessagePreviousPointer[] | null;
    sender: gregor1.UID;
    senderDevice: gregor1.DeviceID;
    kbfsCryptKeysUsed?: boolean;
    merkleRoot?: MerkleRoot;
    outboxId?: OutboxID;
    outboxInfo?: OutboxInfo;
    em?: MsgEphemeralMetadata;
    rt: gregor1.Time;
    pm: boolean;
    b?: gregor1.UID;
};
export declare type EncryptedData = {
    v: number;
    e: Buffer;
    n: Buffer;
};
export declare type SignEncryptedData = {
    v: number;
    e: Buffer;
    n: Buffer;
};
export declare type SealedData = {
    v: number;
    e: Buffer;
    n: Buffer;
};
export declare type SignatureInfo = {
    v: number;
    s: Buffer;
    k: Buffer;
};
export declare type MerkleRoot = {
    seqno: never;
    hash: Buffer;
};
export declare enum InboxResType {
    VERSIONHIT = "versionhit",
    FULL = "full"
}
export declare type InboxViewFull = {
    vers: InboxVers;
    conversations: Conversation[] | null;
    pagination?: Pagination;
};
export declare type InboxView = {
    rtype: InboxResType.VERSIONHIT;
} | {
    rtype: InboxResType.FULL;
    FULL: InboxViewFull | null;
} | {
    rtype: Exclude<InboxResType, InboxResType.VERSIONHIT | InboxResType.FULL>;
};
export declare enum RetentionPolicyType {
    NONE = "none",
    RETAIN = "retain",
    EXPIRE = "expire",
    INHERIT = "inherit",
    EPHEMERAL = "ephemeral"
}
export declare type RetentionPolicy = {
    typ: RetentionPolicyType.RETAIN;
    RETAIN: RpRetain | null;
} | {
    typ: RetentionPolicyType.EXPIRE;
    EXPIRE: RpExpire | null;
} | {
    typ: RetentionPolicyType.INHERIT;
    INHERIT: RpInherit | null;
} | {
    typ: RetentionPolicyType.EPHEMERAL;
    EPHEMERAL: RpEphemeral | null;
} | {
    typ: Exclude<RetentionPolicyType, RetentionPolicyType.RETAIN | RetentionPolicyType.EXPIRE | RetentionPolicyType.INHERIT | RetentionPolicyType.EPHEMERAL>;
};
export declare type RpRetain = {};
export declare type RpExpire = {
    age: gregor1.DurationSec;
};
export declare type RpInherit = {};
export declare type RpEphemeral = {
    age: gregor1.DurationSec;
};
export declare enum GetThreadReason {
    GENERAL = "general",
    PUSH = "push",
    FOREGROUND = "foreground",
    BACKGROUNDCONVLOAD = "backgroundconvload",
    FIXRETRY = "fixretry",
    PREPARE = "prepare",
    SEARCHER = "searcher",
    INDEXED_SEARCH = "indexed_search",
    KBFSFILEACTIVITY = "kbfsfileactivity",
    COINFLIP = "coinflip",
    BOTCOMMANDS = "botcommands"
}
export declare enum ReIndexingMode {
    NONE = "none",
    PRESEARCH_SYNC = "presearch_sync",
    POSTSEARCH_SYNC = "postsearch_sync"
}
export declare type SearchOpts = {
    isRegex: boolean;
    sentBy: string;
    sentTo: string;
    matchMentions: boolean;
    sentBefore: gregor1.Time;
    sentAfter: gregor1.Time;
    maxHits: number;
    maxMessages: number;
    beforeContext: number;
    afterContext: number;
    initialPagination?: Pagination;
    reindexMode: ReIndexingMode;
    maxConvsSearched: number;
    maxConvsHit: number;
    convId?: ConversationID;
    maxNameConvs: number;
};
export declare type EmptyStruct = {};
export declare type ChatSearchMatch = {
    startIndex: number;
    endIndex: number;
    match: string;
};
export declare type ChatSearchHit = {
    beforeMessages: UIMessage[] | null;
    hitMessage: UIMessage;
    afterMessages: UIMessage[] | null;
    matches: ChatSearchMatch[] | null;
};
export declare type ChatSearchInboxHit = {
    convId: ConversationID;
    teamType: TeamType;
    convName: string;
    query: string;
    time: gregor1.Time;
    hits: ChatSearchHit[] | null;
};
export declare type ChatSearchInboxResults = {
    hits: ChatSearchInboxHit[] | null;
    percentIndexed: number;
};
export declare type ChatSearchInboxDone = {
    numHits: number;
    numConvs: number;
    percentIndexed: number;
    delegated: boolean;
};
export declare type ChatSearchIndexStatus = {
    percentIndexed: number;
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
export declare enum AssetMetadataType {
    NONE = "none",
    IMAGE = "image",
    VIDEO = "video",
    AUDIO = "audio"
}
export declare type AssetMetadata = {
    assetType: AssetMetadataType.IMAGE;
    IMAGE: AssetMetadataImage | null;
} | {
    assetType: AssetMetadataType.VIDEO;
    VIDEO: AssetMetadataVideo | null;
} | {
    assetType: AssetMetadataType.AUDIO;
    AUDIO: AssetMetadataAudio | null;
} | {
    assetType: Exclude<AssetMetadataType, AssetMetadataType.IMAGE | AssetMetadataType.VIDEO | AssetMetadataType.AUDIO>;
};
export declare enum AssetTag {
    PRIMARY = "primary"
}
export declare type Asset = {
    filename: string;
    region: string;
    endpoint: string;
    bucket: string;
    path: string;
    size: never;
    mimeType: string;
    encHash: Hash;
    key: Buffer;
    verifyKey: Buffer;
    title: string;
    nonce: Buffer;
    metadata: AssetMetadata;
    tag: AssetTag;
};
export declare enum BotCommandsAdvertisementTyp {
    PUBLIC = "public",
    TLFID_MEMBERS = "tlfid_members",
    TLFID_CONVS = "tlfid_convs"
}
export declare type TeamMember = {
    uid: gregor1.UID;
    role: keybase1.TeamRole;
    status: keybase1.TeamMemberStatus;
};
export declare type GenericPayload = {
    action: string;
    inboxVers: InboxVers;
    convId: ConversationID;
    topicType: TopicType;
    unreadUpdate?: UnreadUpdate;
};
export declare type NewConversationPayload = {
    action: string;
    convId: ConversationID;
    inboxVers: InboxVers;
    topicType: TopicType;
    unreadUpdate?: UnreadUpdate;
};
export declare type NewMessagePayload = {
    action: string;
    convId: ConversationID;
    message: MessageBoxed;
    inboxVers: InboxVers;
    topicType: TopicType;
    unreadUpdate?: UnreadUpdate;
    maxMsgs: MessageSummary[] | null;
};
export declare type ReadMessagePayload = {
    action: string;
    convId: ConversationID;
    msgId: MessageID;
    inboxVers: InboxVers;
    topicType: TopicType;
    unreadUpdate?: UnreadUpdate;
};
export declare type SetStatusPayload = {
    action: string;
    convId: ConversationID;
    status: ConversationStatus;
    inboxVers: InboxVers;
    topicType: TopicType;
    unreadUpdate?: UnreadUpdate;
};
export declare type TeamTypePayload = {
    action: string;
    convId: ConversationID;
    teamType: TeamType;
    inboxVers: InboxVers;
    topicType: TopicType;
    unreadUpdate?: UnreadUpdate;
};
export declare type SetAppNotificationSettingsPayload = {
    action: string;
    convId: ConversationID;
    inboxVers: InboxVers;
    settings: ConversationNotificationInfo;
    topicType: TopicType;
    unreadUpdate?: UnreadUpdate;
};
export declare type ExpungePayload = {
    action: string;
    convId: ConversationID;
    inboxVers: InboxVers;
    expunge: Expunge;
    maxMsgs: MessageSummary[] | null;
    topicType: TopicType;
    unreadUpdate?: UnreadUpdate;
};
export declare type UnreadUpdate = {
    convId: ConversationID;
    unreadMessages: number;
    unreadNotifyingMessages: {
        [key: string]: number;
    };
    diff: boolean;
};
export declare type TLFFinalizeUpdate = {
    finalizeInfo: ConversationFinalizeInfo;
    convIDs: ConversationID[] | null;
    inboxVers: InboxVers;
};
export declare type TLFResolveUpdate = {
    convId: ConversationID;
    inboxVers: InboxVers;
};
export declare type RemoteUserTypingUpdate = {
    uid: gregor1.UID;
    deviceId: gregor1.DeviceID;
    convId: ConversationID;
    typing: boolean;
};
export declare type UpdateConversationMembership = {
    inboxVers: InboxVers;
    joined: ConversationMember[] | null;
    removed: ConversationMember[] | null;
    reset: ConversationMember[] | null;
    previewed: ConversationID[] | null;
    unreadUpdate?: UnreadUpdate;
    unreadUpdates: UnreadUpdate[] | null;
};
export declare type ConversationUpdate = {
    convId: ConversationID;
    existence: ConversationExistence;
};
export declare type UpdateConversations = {
    inboxVers: InboxVers;
    convUpdates: ConversationUpdate[] | null;
};
export declare type TeamChannelUpdate = {
    teamId: TLFID;
};
export declare type SetConvRetentionUpdate = {
    inboxVers: InboxVers;
    convId: ConversationID;
    policy: RetentionPolicy;
};
export declare type SetTeamRetentionUpdate = {
    inboxVers: InboxVers;
    teamId: keybase1.TeamID;
    policy: RetentionPolicy;
};
export declare type SetConvSettingsUpdate = {
    inboxVers: InboxVers;
    convId: ConversationID;
    convSettings?: ConversationSettings;
};
export declare type KBFSImpteamUpgradeUpdate = {
    convId: ConversationID;
    inboxVers: InboxVers;
    topicType: TopicType;
};
export declare type SubteamRenameUpdate = {
    convIDs: ConversationID[] | null;
    inboxVers: InboxVers;
};
export declare type VersionKind = string;
export declare enum TextPaymentResultTyp {
    SENT = "sent",
    ERROR = "error"
}
export declare type TextPaymentResult = {
    resultTyp: TextPaymentResultTyp.ERROR;
    ERROR: string | null;
} | {
    resultTyp: TextPaymentResultTyp.SENT;
    SENT: stellar1.PaymentID | null;
} | {
    resultTyp: Exclude<TextPaymentResultTyp, TextPaymentResultTyp.ERROR | TextPaymentResultTyp.SENT>;
};
export declare type TextPayment = {
    username: string;
    paymentText: string;
    result: TextPaymentResult;
};
export declare type KnownUserMention = {
    text: string;
    uid: gregor1.UID;
};
export declare type KnownTeamMention = {
    name: string;
    channel: string;
};
export declare type MaybeMention = {
    name: string;
    channel: string;
};
export declare type Coordinate = {
    lat: number;
    lon: number;
    accuracy: number;
};
export declare type LiveLocation = {
    endTime: gregor1.Time;
};
export declare type MessageText = {
    body: string;
    payments: TextPayment[] | null;
    replyTo?: MessageID;
    replyToUid?: gregor1.UID;
    userMentions: KnownUserMention[] | null;
    teamMentions: KnownTeamMention[] | null;
    liveLocation?: LiveLocation;
};
export declare type MessageConversationMetadata = {
    conversationTitle: string;
};
export declare type MessageEdit = {
    messageId: MessageID;
    body: string;
    userMentions: KnownUserMention[] | null;
    teamMentions: KnownTeamMention[] | null;
};
export declare type MessageDelete = {
    messageIDs: MessageID[] | null;
};
export declare type MessageHeadline = {
    headline: string;
};
export declare type MessageFlip = {
    text: string;
    gameId: FlipGameID;
    flipConvId: ConversationID;
    userMentions: KnownUserMention[] | null;
    teamMentions: KnownTeamMention[] | null;
};
export declare type MessagePin = {
    msgId: MessageID;
};
export declare enum MessageSystemType {
    ADDEDTOTEAM = "addedtoteam",
    INVITEADDEDTOTEAM = "inviteaddedtoteam",
    COMPLEXTEAM = "complexteam",
    CREATETEAM = "createteam",
    GITPUSH = "gitpush",
    CHANGEAVATAR = "changeavatar",
    CHANGERETENTION = "changeretention",
    BULKADDTOCONV = "bulkaddtoconv"
}
export declare type MessageSystemAddedToTeam = {
    team: string;
    adder: string;
    addee: string;
    owners: string[] | null;
    admins: string[] | null;
    writers: string[] | null;
    readers: string[] | null;
    bots: string[] | null;
    restrictedBots: string[] | null;
};
export declare type MessageSystemInviteAddedToTeam = {
    team: string;
    inviter: string;
    invitee: string;
    adder: string;
    inviteType: keybase1.TeamInviteCategory;
};
export declare type MessageSystemComplexTeam = {
    team: string;
};
export declare type MessageSystemCreateTeam = {
    team: string;
    creator: string;
};
export declare type MessageSystemGitPush = {
    team: string;
    pusher: string;
    repoName: string;
    repoId: keybase1.RepoID;
    refs: keybase1.GitRefMetadata[] | null;
    pushType: keybase1.GitPushType;
    previousRepoName: string;
};
export declare type MessageSystemChangeAvatar = {
    team: string;
    user: string;
};
export declare type MessageSystemChangeRetention = {
    isTeam: boolean;
    isInherit: boolean;
    membersType: ConversationMembersType;
    policy: RetentionPolicy;
    user: string;
};
export declare type MessageSystemBulkAddToConv = {
    usernames: string[] | null;
};
export declare type MessageSystem = {
    systemType: MessageSystemType.ADDEDTOTEAM;
    ADDEDTOTEAM: MessageSystemAddedToTeam | null;
} | {
    systemType: MessageSystemType.INVITEADDEDTOTEAM;
    INVITEADDEDTOTEAM: MessageSystemInviteAddedToTeam | null;
} | {
    systemType: MessageSystemType.COMPLEXTEAM;
    COMPLEXTEAM: MessageSystemComplexTeam | null;
} | {
    systemType: MessageSystemType.CREATETEAM;
    CREATETEAM: MessageSystemCreateTeam | null;
} | {
    systemType: MessageSystemType.GITPUSH;
    GITPUSH: MessageSystemGitPush | null;
} | {
    systemType: MessageSystemType.CHANGEAVATAR;
    CHANGEAVATAR: MessageSystemChangeAvatar | null;
} | {
    systemType: MessageSystemType.CHANGERETENTION;
    CHANGERETENTION: MessageSystemChangeRetention | null;
} | {
    systemType: MessageSystemType.BULKADDTOCONV;
    BULKADDTOCONV: MessageSystemBulkAddToConv | null;
} | {
    systemType: Exclude<MessageSystemType, MessageSystemType.ADDEDTOTEAM | MessageSystemType.INVITEADDEDTOTEAM | MessageSystemType.COMPLEXTEAM | MessageSystemType.CREATETEAM | MessageSystemType.GITPUSH | MessageSystemType.CHANGEAVATAR | MessageSystemType.CHANGERETENTION | MessageSystemType.BULKADDTOCONV>;
};
export declare type MessageDeleteHistory = {
    upto: MessageID;
};
export declare type MessageAttachment = {
    object: Asset;
    preview?: Asset;
    previews: Asset[] | null;
    metadata: Buffer;
    uploaded: boolean;
};
export declare type MessageAttachmentUploaded = {
    messageId: MessageID;
    object: Asset;
    previews: Asset[] | null;
    metadata: Buffer;
};
export declare type MessageJoin = {
    joiners: string[] | null;
    leavers: string[] | null;
};
export declare type MessageLeave = {};
export declare type MessageReaction = {
    m: MessageID;
    b: string;
};
export declare type MessageSendPayment = {
    paymentId: stellar1.PaymentID;
};
export declare type MessageRequestPayment = {
    requestId: stellar1.KeybaseRequestID;
    note: string;
};
export declare type MessageUnfurl = {
    unfurl: UnfurlResult;
    messageId: MessageID;
};
export declare type MessageBody = {
    messageType: MessageType.TEXT;
    TEXT: MessageText | null;
} | {
    messageType: MessageType.ATTACHMENT;
    ATTACHMENT: MessageAttachment | null;
} | {
    messageType: MessageType.EDIT;
    EDIT: MessageEdit | null;
} | {
    messageType: MessageType.DELETE;
    DELETE: MessageDelete | null;
} | {
    messageType: MessageType.METADATA;
    METADATA: MessageConversationMetadata | null;
} | {
    messageType: MessageType.HEADLINE;
    HEADLINE: MessageHeadline | null;
} | {
    messageType: MessageType.ATTACHMENTUPLOADED;
    ATTACHMENTUPLOADED: MessageAttachmentUploaded | null;
} | {
    messageType: MessageType.JOIN;
    JOIN: MessageJoin | null;
} | {
    messageType: MessageType.LEAVE;
    LEAVE: MessageLeave | null;
} | {
    messageType: MessageType.SYSTEM;
    SYSTEM: MessageSystem | null;
} | {
    messageType: MessageType.DELETEHISTORY;
    DELETEHISTORY: MessageDeleteHistory | null;
} | {
    messageType: MessageType.REACTION;
    REACTION: MessageReaction | null;
} | {
    messageType: MessageType.SENDPAYMENT;
    SENDPAYMENT: MessageSendPayment | null;
} | {
    messageType: MessageType.REQUESTPAYMENT;
    REQUESTPAYMENT: MessageRequestPayment | null;
} | {
    messageType: MessageType.UNFURL;
    UNFURL: MessageUnfurl | null;
} | {
    messageType: MessageType.FLIP;
    FLIP: MessageFlip | null;
} | {
    messageType: MessageType.PIN;
    PIN: MessagePin | null;
} | {
    messageType: Exclude<MessageType, MessageType.TEXT | MessageType.ATTACHMENT | MessageType.EDIT | MessageType.DELETE | MessageType.METADATA | MessageType.HEADLINE | MessageType.ATTACHMENTUPLOADED | MessageType.JOIN | MessageType.LEAVE | MessageType.SYSTEM | MessageType.DELETEHISTORY | MessageType.REACTION | MessageType.SENDPAYMENT | MessageType.REQUESTPAYMENT | MessageType.UNFURL | MessageType.FLIP | MessageType.PIN>;
};
export declare type SenderPrepareOptions = {
    skipTopicNameState: boolean;
    replyTo?: MessageID;
};
export declare type SenderSendOptions = {
    joinMentionsAs?: ConversationMemberStatus;
};
export declare enum OutboxStateType {
    SENDING = "sending",
    ERROR = "error"
}
export declare enum OutboxErrorType {
    MISC = "misc",
    OFFLINE = "offline",
    IDENTIFY = "identify",
    TOOLONG = "toolong",
    DUPLICATE = "duplicate",
    EXPIRED = "expired",
    TOOMANYATTEMPTS = "toomanyattempts",
    ALREADY_DELETED = "already_deleted",
    UPLOADFAILED = "uploadfailed"
}
export declare type OutboxStateError = {
    message: string;
    typ: OutboxErrorType;
};
export declare type OutboxState = {
    state: OutboxStateType.SENDING;
    SENDING: number | null;
} | {
    state: OutboxStateType.ERROR;
    ERROR: OutboxStateError | null;
} | {
    state: Exclude<OutboxStateType, OutboxStateType.SENDING | OutboxStateType.ERROR>;
};
export declare type OutboxRecord = {
    state: OutboxState;
    outboxId: OutboxID;
    convId: ConversationID;
    ctime: gregor1.Time;
    msg: MessagePlaintext;
    identifyBehavior: keybase1.TLFIdentifyBehavior;
    prepareOpts?: SenderPrepareOptions;
    sendOpts?: SenderSendOptions;
    ordinal: number;
    preview?: MakePreviewRes;
    replyTo?: MessageUnboxed;
};
export declare enum HeaderPlaintextVersion {
    V1 = "v1",
    V2 = "v2",
    V3 = "v3",
    V4 = "v4",
    V5 = "v5",
    V6 = "v6",
    V7 = "v7",
    V8 = "v8",
    V9 = "v9",
    V10 = "v10"
}
export declare type HeaderPlaintextMetaInfo = {
    crit: boolean;
};
export declare type HeaderPlaintextUnsupported = {
    mi: HeaderPlaintextMetaInfo;
};
export declare type HeaderPlaintextV1 = {
    conv: ConversationIDTriple;
    tlfName: string;
    tlfPublic: boolean;
    messageType: MessageType;
    prev: MessagePreviousPointer[] | null;
    sender: gregor1.UID;
    senderDevice: gregor1.DeviceID;
    kbfsCryptKeysUsed?: boolean;
    bodyHash: Hash;
    outboxInfo?: OutboxInfo;
    outboxId?: OutboxID;
    headerSignature?: SignatureInfo;
    merkleRoot?: MerkleRoot;
    em?: MsgEphemeralMetadata;
    b?: gregor1.UID;
};
export declare type HeaderPlaintext = {
    version: HeaderPlaintextVersion.V1;
    V1: HeaderPlaintextV1 | null;
} | {
    version: HeaderPlaintextVersion.V2;
    V2: HeaderPlaintextUnsupported | null;
} | {
    version: HeaderPlaintextVersion.V3;
    V3: HeaderPlaintextUnsupported | null;
} | {
    version: HeaderPlaintextVersion.V4;
    V4: HeaderPlaintextUnsupported | null;
} | {
    version: HeaderPlaintextVersion.V5;
    V5: HeaderPlaintextUnsupported | null;
} | {
    version: HeaderPlaintextVersion.V6;
    V6: HeaderPlaintextUnsupported | null;
} | {
    version: HeaderPlaintextVersion.V7;
    V7: HeaderPlaintextUnsupported | null;
} | {
    version: HeaderPlaintextVersion.V8;
    V8: HeaderPlaintextUnsupported | null;
} | {
    version: HeaderPlaintextVersion.V9;
    V9: HeaderPlaintextUnsupported | null;
} | {
    version: HeaderPlaintextVersion.V10;
    V10: HeaderPlaintextUnsupported | null;
} | {
    version: Exclude<HeaderPlaintextVersion, HeaderPlaintextVersion.V1 | HeaderPlaintextVersion.V2 | HeaderPlaintextVersion.V3 | HeaderPlaintextVersion.V4 | HeaderPlaintextVersion.V5 | HeaderPlaintextVersion.V6 | HeaderPlaintextVersion.V7 | HeaderPlaintextVersion.V8 | HeaderPlaintextVersion.V9 | HeaderPlaintextVersion.V10>;
};
export declare enum BodyPlaintextVersion {
    V1 = "v1",
    V2 = "v2",
    V3 = "v3",
    V4 = "v4",
    V5 = "v5",
    V6 = "v6",
    V7 = "v7",
    V8 = "v8",
    V9 = "v9",
    V10 = "v10"
}
export declare type BodyPlaintextMetaInfo = {
    crit: boolean;
};
export declare type BodyPlaintextUnsupported = {
    mi: BodyPlaintextMetaInfo;
};
export declare type BodyPlaintextV1 = {
    messageBody: MessageBody;
};
export declare type BodyPlaintextV2 = {
    messageBody: MessageBody;
    mi: BodyPlaintextMetaInfo;
};
export declare type BodyPlaintext = {
    version: BodyPlaintextVersion.V1;
    V1: BodyPlaintextV1 | null;
} | {
    version: BodyPlaintextVersion.V2;
    V2: BodyPlaintextV2 | null;
} | {
    version: BodyPlaintextVersion.V3;
    V3: BodyPlaintextUnsupported | null;
} | {
    version: BodyPlaintextVersion.V4;
    V4: BodyPlaintextUnsupported | null;
} | {
    version: BodyPlaintextVersion.V5;
    V5: BodyPlaintextUnsupported | null;
} | {
    version: BodyPlaintextVersion.V6;
    V6: BodyPlaintextUnsupported | null;
} | {
    version: BodyPlaintextVersion.V7;
    V7: BodyPlaintextUnsupported | null;
} | {
    version: BodyPlaintextVersion.V8;
    V8: BodyPlaintextUnsupported | null;
} | {
    version: BodyPlaintextVersion.V9;
    V9: BodyPlaintextUnsupported | null;
} | {
    version: BodyPlaintextVersion.V10;
    V10: BodyPlaintextUnsupported | null;
} | {
    version: Exclude<BodyPlaintextVersion, BodyPlaintextVersion.V1 | BodyPlaintextVersion.V2 | BodyPlaintextVersion.V3 | BodyPlaintextVersion.V4 | BodyPlaintextVersion.V5 | BodyPlaintextVersion.V6 | BodyPlaintextVersion.V7 | BodyPlaintextVersion.V8 | BodyPlaintextVersion.V9 | BodyPlaintextVersion.V10>;
};
export declare type MessagePlaintext = {
    clientHeader: MessageClientHeader;
    messageBody: MessageBody;
    supersedesOutboxId?: OutboxID;
};
export declare type MessageUnboxedValid = {
    clientHeader: MessageClientHeaderVerified;
    serverHeader: MessageServerHeader;
    messageBody: MessageBody;
    senderUsername: string;
    senderDeviceName: string;
    senderDeviceType: string;
    bodyHash: Hash;
    headerHash: Hash;
    headerSignature?: SignatureInfo;
    verificationKey?: Buffer;
    senderDeviceRevokedAt?: gregor1.Time;
    atMentionUsernames: string[] | null;
    atMentions: gregor1.UID[] | null;
    channelMention: ChannelMention;
    maybeMentions: MaybeMention[] | null;
    channelNameMentions: ChannelNameMention[] | null;
    reactions: ReactionMap;
    unfurls: {
        [key: string]: UnfurlResult;
    };
    replyTo?: MessageUnboxed;
};
export declare enum MessageUnboxedErrorType {
    MISC = "misc",
    BADVERSION_CRITICAL = "badversion_critical",
    BADVERSION = "badversion",
    IDENTIFY = "identify",
    EPHEMERAL = "ephemeral",
    PAIRWISE_MISSING = "pairwise_missing"
}
export declare type MessageUnboxedError = {
    errType: MessageUnboxedErrorType;
    errMsg: string;
    internalErrMsg: string;
    versionKind: VersionKind;
    versionNumber: number;
    isCritical: boolean;
    senderUsername: string;
    senderDeviceName: string;
    senderDeviceType: string;
    messageId: MessageID;
    messageType: MessageType;
    ctime: gregor1.Time;
    isEphemeral: boolean;
    isEphemeralExpired: boolean;
    etime: gregor1.Time;
};
export declare type MessageUnboxedPlaceholder = {
    messageId: MessageID;
    hidden: boolean;
};
export declare type MessageUnboxed = {
    state: MessageUnboxedState.VALID;
    VALID: MessageUnboxedValid | null;
} | {
    state: MessageUnboxedState.ERROR;
    ERROR: MessageUnboxedError | null;
} | {
    state: MessageUnboxedState.OUTBOX;
    OUTBOX: OutboxRecord | null;
} | {
    state: MessageUnboxedState.PLACEHOLDER;
    PLACEHOLDER: MessageUnboxedPlaceholder | null;
} | {
    state: Exclude<MessageUnboxedState, MessageUnboxedState.VALID | MessageUnboxedState.ERROR | MessageUnboxedState.OUTBOX | MessageUnboxedState.PLACEHOLDER>;
};
export declare type UnreadFirstNumLimit = {
    numRead: number;
    atLeast: number;
    atMost: number;
};
export declare type ConversationLocalParticipant = {
    username: string;
    fullname?: string;
    contactName?: string;
};
export declare type ConversationPinnedMessage = {
    message: MessageUnboxed;
    pinnerUsername: string;
};
export declare type ConversationInfoLocal = {
    id: ConversationID;
    triple: ConversationIDTriple;
    tlfName: string;
    topicName: string;
    headline: string;
    snippetMsg?: MessageUnboxed;
    pinnedMsg?: ConversationPinnedMessage;
    draft?: string;
    visibility: keybase1.TLFVisibility;
    status: ConversationStatus;
    membersType: ConversationMembersType;
    memberStatus: ConversationMemberStatus;
    teamType: TeamType;
    existence: ConversationExistence;
    version: ConversationVers;
    localVersion: LocalConversationVers;
    participants: ConversationLocalParticipant[] | null;
    finalizeInfo?: ConversationFinalizeInfo;
    resetNames: string[] | null;
};
export declare enum ConversationErrorType {
    PERMANENT = "permanent",
    MISSINGINFO = "missinginfo",
    SELFREKEYNEEDED = "selfrekeyneeded",
    OTHERREKEYNEEDED = "otherrekeyneeded",
    IDENTIFY = "identify",
    TRANSIENT = "transient",
    NONE = "none"
}
export declare type ConversationErrorLocal = {
    typ: ConversationErrorType;
    message: string;
    remoteConv: Conversation;
    unverifiedTlfName: string;
    rekeyInfo?: ConversationErrorRekey;
};
export declare type ConversationErrorRekey = {
    tlfName: string;
    tlfPublic: boolean;
    rekeyers: string[] | null;
    writerNames: string[] | null;
    readerNames: string[] | null;
};
export declare type ConversationMinWriterRoleInfoLocal = {
    changedBy: string;
    cannotWrite: boolean;
    role: keybase1.TeamRole;
};
export declare type ConversationSettingsLocal = {
    minWriterRoleInfo?: ConversationMinWriterRoleInfoLocal;
};
export declare type ConversationLocal = {
    error?: ConversationErrorLocal;
    info: ConversationInfoLocal;
    readerInfo: ConversationReaderInfo;
    creatorInfo?: ConversationCreatorInfoLocal;
    notifications?: ConversationNotificationInfo;
    supersedes: ConversationMetadata[] | null;
    supersededBy: ConversationMetadata[] | null;
    maxMessages: MessageSummary[] | null;
    isEmpty: boolean;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
    expunge: Expunge;
    convRetention?: RetentionPolicy;
    teamRetention?: RetentionPolicy;
    convSettings?: ConversationSettingsLocal;
    commands: ConversationCommandGroups;
    botCommands: ConversationCommandGroups;
};
export declare type NonblockFetchRes = {
    offline: boolean;
    rateLimits: RateLimit[] | null;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
};
export declare type ThreadView = {
    messages: MessageUnboxed[] | null;
    pagination?: Pagination;
};
export declare enum MessageIDControlMode {
    OLDERMESSAGES = "oldermessages",
    NEWERMESSAGES = "newermessages",
    CENTERED = "centered",
    UNREADLINE = "unreadline"
}
export declare type MessageIDControl = {
    pivot?: MessageID;
    mode: MessageIDControlMode;
    num: number;
};
export declare type GetThreadQuery = {
    markAsRead: boolean;
    messageTypes: MessageType[] | null;
    disableResolveSupersedes: boolean;
    enableDeletePlaceholders: boolean;
    disablePostProcessThread: boolean;
    before?: gregor1.Time;
    after?: gregor1.Time;
    messageIdControl?: MessageIDControl;
};
export declare type GetThreadLocalRes = {
    thread: ThreadView;
    offline: boolean;
    rateLimits: RateLimit[] | null;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
};
export declare enum GetThreadNonblockCbMode {
    FULL = "full",
    INCREMENTAL = "incremental"
}
export declare enum GetThreadNonblockPgMode {
    DEFAULT = "default",
    SERVER = "server"
}
export declare type UnreadlineRes = {
    offline: boolean;
    rateLimits: RateLimit[] | null;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
    unreadlineId?: MessageID;
};
export declare type NameQuery = {
    name: string;
    tlfId?: TLFID;
    membersType: ConversationMembersType;
};
export declare type GetInboxLocalQuery = {
    name?: NameQuery;
    topicName?: string;
    convIDs: ConversationID[] | null;
    topicType?: TopicType;
    tlfVisibility?: keybase1.TLFVisibility;
    before?: gregor1.Time;
    after?: gregor1.Time;
    oneChatTypePerTlf?: boolean;
    status: ConversationStatus[] | null;
    memberStatus: ConversationMemberStatus[] | null;
    unreadOnly: boolean;
    readOnly: boolean;
    computeActiveList: boolean;
};
export declare type GetInboxAndUnboxLocalRes = {
    conversations: ConversationLocal[] | null;
    pagination?: Pagination;
    offline: boolean;
    rateLimits: RateLimit[] | null;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
};
export declare type GetInboxAndUnboxUILocalRes = {
    conversations: InboxUIItem[] | null;
    pagination?: Pagination;
    offline: boolean;
    rateLimits: RateLimit[] | null;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
};
export declare type PostLocalRes = {
    rateLimits: RateLimit[] | null;
    messageId: MessageID;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
};
export declare type PostLocalNonblockRes = {
    rateLimits: RateLimit[] | null;
    outboxId: OutboxID;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
};
export declare type EditTarget = {
    messageId?: MessageID;
    outboxId?: OutboxID;
};
export declare type SetConversationStatusLocalRes = {
    rateLimits: RateLimit[] | null;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
};
export declare type NewConversationLocalRes = {
    conv: ConversationLocal;
    uiConv: InboxUIItem;
    rateLimits: RateLimit[] | null;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
};
export declare type GetInboxSummaryForCLILocalQuery = {
    topicType: TopicType;
    after: string;
    before: string;
    visibility: keybase1.TLFVisibility;
    status: ConversationStatus[] | null;
    unreadFirst: boolean;
    unreadFirstLimit: UnreadFirstNumLimit;
    activitySortedLimit: number;
};
export declare type GetInboxSummaryForCLILocalRes = {
    conversations: ConversationLocal[] | null;
    offline: boolean;
    rateLimits: RateLimit[] | null;
};
export declare type GetConversationForCLILocalQuery = {
    markAsRead: boolean;
    messageTypes: MessageType[] | null;
    since?: string;
    limit: UnreadFirstNumLimit;
    conv: ConversationLocal;
};
export declare type GetConversationForCLILocalRes = {
    conversation: ConversationLocal;
    messages: MessageUnboxed[] | null;
    offline: boolean;
    rateLimits: RateLimit[] | null;
};
export declare type GetMessagesLocalRes = {
    messages: MessageUnboxed[] | null;
    offline: boolean;
    rateLimits: RateLimit[] | null;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
};
export declare type PostFileAttachmentArg = {
    conversationId: ConversationID;
    tlfName: string;
    visibility: keybase1.TLFVisibility;
    filename: string;
    title: string;
    metadata: Buffer;
    identifyBehavior: keybase1.TLFIdentifyBehavior;
    callerPreview?: MakePreviewRes;
    outboxId?: OutboxID;
    ephemeralLifetime?: gregor1.DurationSec;
};
export declare type GetNextAttachmentMessageLocalRes = {
    message?: UIMessage;
    offline: boolean;
    rateLimits: RateLimit[] | null;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
};
export declare type DownloadAttachmentLocalRes = {
    rateLimits: RateLimit[] | null;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
};
export declare type DownloadFileAttachmentLocalRes = {
    filename: string;
    rateLimits: RateLimit[] | null;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
};
export declare enum PreviewLocationTyp {
    URL = "url",
    FILE = "file",
    BYTES = "bytes"
}
export declare type PreviewLocation = {
    ltyp: PreviewLocationTyp.URL;
    URL: string | null;
} | {
    ltyp: PreviewLocationTyp.FILE;
    FILE: string | null;
} | {
    ltyp: PreviewLocationTyp.BYTES;
    BYTES: Buffer | null;
} | {
    ltyp: Exclude<PreviewLocationTyp, PreviewLocationTyp.URL | PreviewLocationTyp.FILE | PreviewLocationTyp.BYTES>;
};
export declare type MakePreviewRes = {
    mimeType: string;
    previewMimeType?: string;
    location?: PreviewLocation;
    metadata?: AssetMetadata;
    baseMetadata?: AssetMetadata;
};
export declare type MarkAsReadLocalRes = {
    offline: boolean;
    rateLimits: RateLimit[] | null;
};
export declare type FindConversationsLocalRes = {
    conversations: ConversationLocal[] | null;
    uiConversations: InboxUIItem[] | null;
    offline: boolean;
    rateLimits: RateLimit[] | null;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
};
export declare type JoinLeaveConversationLocalRes = {
    offline: boolean;
    rateLimits: RateLimit[] | null;
};
export declare type PreviewConversationLocalRes = {
    conv: InboxUIItem;
    offline: boolean;
    rateLimits: RateLimit[] | null;
};
export declare type DeleteConversationLocalRes = {
    offline: boolean;
    rateLimits: RateLimit[] | null;
};
export declare type GetTLFConversationsLocalRes = {
    convs: InboxUIItem[] | null;
    offline: boolean;
    rateLimits: RateLimit[] | null;
};
export declare type SetAppNotificationSettingsLocalRes = {
    offline: boolean;
    rateLimits: RateLimit[] | null;
};
export declare type AppNotificationSettingLocal = {
    deviceType: keybase1.DeviceType;
    kind: NotificationKind;
    enabled: boolean;
};
export declare type SearchRegexpRes = {
    offline: boolean;
    hits: ChatSearchHit[] | null;
    rateLimits: RateLimit[] | null;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
};
export declare type SearchInboxRes = {
    offline: boolean;
    res?: ChatSearchInboxResults;
    rateLimits: RateLimit[] | null;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
};
export declare type ProfileSearchConvStats = {
    err: string;
    convName: string;
    minConvId: MessageID;
    maxConvId: MessageID;
    numMissing: number;
    numMessages: number;
    indexSizeDisk: number;
    indexSizeMem: never;
    durationMsec: gregor1.DurationMsec;
    percentIndexed: number;
};
export declare type BuiltinCommandGroup = {
    typ: ConversationBuiltinCommandTyp;
    commands: ConversationCommand[] | null;
};
export declare type StaticConfig = {
    deletableByDeleteHistory: MessageType[] | null;
    builtinCommands: BuiltinCommandGroup[] | null;
};
export declare enum UnfurlPromptAction {
    ALWAYS = "always",
    NEVER = "never",
    ACCEPT = "accept",
    NOTNOW = "notnow",
    ONETIME = "onetime"
}
export declare type UnfurlPromptResult = {
    actionType: UnfurlPromptAction.ALWAYS;
} | {
    actionType: UnfurlPromptAction.NEVER;
} | {
    actionType: UnfurlPromptAction.NOTNOW;
} | {
    actionType: UnfurlPromptAction.ACCEPT;
    ACCEPT: string | null;
} | {
    actionType: UnfurlPromptAction.ONETIME;
    ONETIME: string | null;
} | {
    actionType: Exclude<UnfurlPromptAction, UnfurlPromptAction.ALWAYS | UnfurlPromptAction.NEVER | UnfurlPromptAction.NOTNOW | UnfurlPromptAction.ACCEPT | UnfurlPromptAction.ONETIME>;
};
export declare enum GalleryItemTyp {
    MEDIA = "media",
    LINK = "link",
    DOC = "doc"
}
export declare type LoadGalleryRes = {
    messages: UIMessage[] | null;
    last: boolean;
    rateLimits: RateLimit[] | null;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
};
export declare type LoadFlipRes = {
    status: UICoinFlipStatus;
    rateLimits: RateLimit[] | null;
    identifyFailures: keybase1.TLFIdentifyFailure[] | null;
};
export declare type UserBotExtendedDescription = {
    title: string;
    desktopBody: string;
    mobileBody: string;
};
export declare type UserBotCommandOutput = {
    name: string;
    description: string;
    usage: string;
    extendedDescription?: UserBotExtendedDescription;
    username: string;
};
export declare type UserBotCommandInput = {
    name: string;
    description: string;
    usage: string;
    extendedDescription?: UserBotExtendedDescription;
};
export declare type AdvertiseCommandsParam = {
    typ: BotCommandsAdvertisementTyp;
    commands: UserBotCommandInput[] | null;
    teamName?: string;
};
export declare type AdvertiseBotCommandsLocalRes = {
    rateLimits: RateLimit[] | null;
};
export declare type ListBotCommandsLocalRes = {
    commands: UserBotCommandOutput[] | null;
    rateLimits: RateLimit[] | null;
};
export declare type ClearBotCommandsLocalRes = {
    rateLimits: RateLimit[] | null;
};
export declare type PinMessageRes = {
    rateLimits: RateLimit[] | null;
};
export declare enum ChatActivitySource {
    LOCAL = "local",
    REMOTE = "remote"
}
export declare enum ChatActivityType {
    RESERVED = "reserved",
    INCOMING_MESSAGE = "incoming_message",
    READ_MESSAGE = "read_message",
    NEW_CONVERSATION = "new_conversation",
    SET_STATUS = "set_status",
    FAILED_MESSAGE = "failed_message",
    MEMBERS_UPDATE = "members_update",
    SET_APP_NOTIFICATION_SETTINGS = "set_app_notification_settings",
    TEAMTYPE = "teamtype",
    EXPUNGE = "expunge",
    EPHEMERAL_PURGE = "ephemeral_purge",
    REACTION_UPDATE = "reaction_update",
    MESSAGES_UPDATED = "messages_updated"
}
export declare type IncomingMessage = {
    message: UIMessage;
    modifiedMessage?: UIMessage;
    convId: ConversationID;
    displayDesktopNotification: boolean;
    desktopNotificationSnippet: string;
    conv?: InboxUIItem;
    pagination?: UIPagination;
};
export declare type ReadMessageInfo = {
    convId: ConversationID;
    msgId: MessageID;
    conv?: InboxUIItem;
};
export declare type NewConversationInfo = {
    convId: ConversationID;
    conv?: InboxUIItem;
};
export declare type SetStatusInfo = {
    convId: ConversationID;
    status: ConversationStatus;
    conv?: InboxUIItem;
};
export declare type SetAppNotificationSettingsInfo = {
    convId: ConversationID;
    settings: ConversationNotificationInfo;
};
export declare type FailedMessageInfo = {
    outboxRecords: OutboxRecord[] | null;
    isEphemeralPurge: boolean;
};
export declare type MemberInfo = {
    member: string;
    status: ConversationMemberStatus;
};
export declare type MembersUpdateInfo = {
    convId: ConversationID;
    members: MemberInfo[] | null;
};
export declare type TeamTypeInfo = {
    convId: ConversationID;
    teamType: TeamType;
    conv?: InboxUIItem;
};
export declare type ExpungeInfo = {
    convId: ConversationID;
    expunge: Expunge;
};
export declare type EphemeralPurgeNotifInfo = {
    convId: ConversationID;
    msgs: UIMessage[] | null;
};
export declare type ReactionUpdate = {
    reactions: ReactionMap;
    targetMsgId: MessageID;
};
export declare type ReactionUpdateNotif = {
    convId: ConversationID;
    userReacjis: keybase1.UserReacjis;
    reactionUpdates: ReactionUpdate[] | null;
};
export declare type MessagesUpdated = {
    convId: ConversationID;
    updates: UIMessage[] | null;
};
export declare type ChatActivity = {
    activityType: ChatActivityType.INCOMING_MESSAGE;
    INCOMING_MESSAGE: IncomingMessage | null;
} | {
    activityType: ChatActivityType.READ_MESSAGE;
    READ_MESSAGE: ReadMessageInfo | null;
} | {
    activityType: ChatActivityType.NEW_CONVERSATION;
    NEW_CONVERSATION: NewConversationInfo | null;
} | {
    activityType: ChatActivityType.SET_STATUS;
    SET_STATUS: SetStatusInfo | null;
} | {
    activityType: ChatActivityType.FAILED_MESSAGE;
    FAILED_MESSAGE: FailedMessageInfo | null;
} | {
    activityType: ChatActivityType.MEMBERS_UPDATE;
    MEMBERS_UPDATE: MembersUpdateInfo | null;
} | {
    activityType: ChatActivityType.SET_APP_NOTIFICATION_SETTINGS;
    SET_APP_NOTIFICATION_SETTINGS: SetAppNotificationSettingsInfo | null;
} | {
    activityType: ChatActivityType.TEAMTYPE;
    TEAMTYPE: TeamTypeInfo | null;
} | {
    activityType: ChatActivityType.EXPUNGE;
    EXPUNGE: ExpungeInfo | null;
} | {
    activityType: ChatActivityType.EPHEMERAL_PURGE;
    EPHEMERAL_PURGE: EphemeralPurgeNotifInfo | null;
} | {
    activityType: ChatActivityType.REACTION_UPDATE;
    REACTION_UPDATE: ReactionUpdateNotif | null;
} | {
    activityType: ChatActivityType.MESSAGES_UPDATED;
    MESSAGES_UPDATED: MessagesUpdated | null;
} | {
    activityType: Exclude<ChatActivityType, ChatActivityType.INCOMING_MESSAGE | ChatActivityType.READ_MESSAGE | ChatActivityType.NEW_CONVERSATION | ChatActivityType.SET_STATUS | ChatActivityType.FAILED_MESSAGE | ChatActivityType.MEMBERS_UPDATE | ChatActivityType.SET_APP_NOTIFICATION_SETTINGS | ChatActivityType.TEAMTYPE | ChatActivityType.EXPUNGE | ChatActivityType.EPHEMERAL_PURGE | ChatActivityType.REACTION_UPDATE | ChatActivityType.MESSAGES_UPDATED>;
};
export declare type TyperInfo = {
    uid: keybase1.UID;
    username: string;
    deviceId: keybase1.DeviceID;
    deviceName: string;
    deviceType: string;
};
export declare type ConvTypingUpdate = {
    convId: ConversationID;
    typers: TyperInfo[] | null;
};
export declare enum StaleUpdateType {
    CLEAR = "clear",
    NEWACTIVITY = "newactivity",
    CONVUPDATE = "convupdate"
}
export declare type ConversationStaleUpdate = {
    convId: ConversationID;
    updateType: StaleUpdateType;
};
export declare type ChatSyncIncrementalConv = {
    conv: UnverifiedInboxUIItem;
    shouldUnbox: boolean;
};
export declare type ChatSyncIncrementalInfo = {
    items: ChatSyncIncrementalConv[] | null;
    removals: string[] | null;
};
export declare type ChatSyncResult = {
    syncType: SyncInboxResType.CURRENT;
} | {
    syncType: SyncInboxResType.CLEAR;
} | {
    syncType: SyncInboxResType.INCREMENTAL;
    INCREMENTAL: ChatSyncIncrementalInfo | null;
} | {
    syncType: Exclude<SyncInboxResType, SyncInboxResType.CURRENT | SyncInboxResType.CLEAR | SyncInboxResType.INCREMENTAL>;
};
export declare type MessageBoxed = {
    version: MessageBoxedVersion;
    serverHeader?: MessageServerHeader;
    clientHeader: MessageClientHeader;
    headerCiphertext: SealedData;
    bodyCiphertext: EncryptedData;
    verifyKey: Buffer;
    keyGeneration: number;
};
export declare enum MessageBoxedVersion {
    VNONE = "vnone",
    V1 = "v1",
    V2 = "v2",
    V3 = "v3",
    V4 = "v4"
}
export declare type ThreadViewBoxed = {
    messages: MessageBoxed[] | null;
    pagination?: Pagination;
};
export declare type GetInboxRemoteRes = {
    inbox: InboxView;
    rateLimit?: RateLimit;
};
export declare type GetInboxByTLFIDRemoteRes = {
    convs: Conversation[] | null;
    rateLimit?: RateLimit;
};
export declare type GetThreadRemoteRes = {
    thread: ThreadViewBoxed;
    membersType: ConversationMembersType;
    visibility: keybase1.TLFVisibility;
    rateLimit?: RateLimit;
};
export declare type GetConversationMetadataRemoteRes = {
    conv: Conversation;
    rateLimit?: RateLimit;
};
export declare type PostRemoteRes = {
    msgHeader: MessageServerHeader;
    rateLimit?: RateLimit;
};
export declare type NewConversationRemoteRes = {
    convId: ConversationID;
    createdComplexTeam: boolean;
    rateLimit?: RateLimit;
};
export declare type GetMessagesRemoteRes = {
    msgs: MessageBoxed[] | null;
    rateLimit?: RateLimit;
};
export declare type MarkAsReadRes = {
    rateLimit?: RateLimit;
};
export declare type SetConversationStatusRes = {
    rateLimit?: RateLimit;
};
export declare type GetPublicConversationsRes = {
    conversations: Conversation[] | null;
    rateLimit?: RateLimit;
};
export declare type GetUnreadlineRemoteRes = {
    unreadlineId?: MessageID;
    rateLimit?: RateLimit;
};
export declare enum ChannelMention {
    NONE = "none",
    ALL = "all",
    HERE = "here"
}
export declare type UnreadUpdateFull = {
    ignore: boolean;
    inboxVers: InboxVers;
    inboxSyncStatus: SyncInboxResType;
    updates: UnreadUpdate[] | null;
};
export declare type S3Params = {
    bucket: string;
    objectKey: string;
    accessKey: string;
    acl: string;
    regionName: string;
    regionEndpoint: string;
    regionBucketEndpoint: string;
};
export declare type SyncIncrementalRes = {
    vers: InboxVers;
    convs: Conversation[] | null;
};
export declare type ServerCacheVers = {
    inboxVers: number;
    bodiesVers: number;
};
export declare type SyncInboxRes = {
    typ: SyncInboxResType.CURRENT;
} | {
    typ: SyncInboxResType.INCREMENTAL;
    INCREMENTAL: SyncIncrementalRes | null;
} | {
    typ: SyncInboxResType.CLEAR;
} | {
    typ: Exclude<SyncInboxResType, SyncInboxResType.CURRENT | SyncInboxResType.INCREMENTAL | SyncInboxResType.CLEAR>;
};
export declare type SyncChatRes = {
    cacheVers: ServerCacheVers;
    inboxRes: SyncInboxRes;
};
export declare enum SyncAllProtVers {
    V0 = "v0",
    V1 = "v1"
}
export declare enum SyncAllNotificationType {
    STATE = "state",
    INCREMENTAL = "incremental"
}
export declare type SyncAllNotificationRes = {
    typ: SyncAllNotificationType.STATE;
    STATE: gregor1.State | null;
} | {
    typ: SyncAllNotificationType.INCREMENTAL;
    INCREMENTAL: gregor1.SyncResult | null;
} | {
    typ: Exclude<SyncAllNotificationType, SyncAllNotificationType.STATE | SyncAllNotificationType.INCREMENTAL>;
};
export declare type SyncAllResult = {
    auth: gregor1.AuthResult;
    chat: SyncChatRes;
    notification: SyncAllNotificationRes;
    badge: UnreadUpdateFull;
};
export declare type JoinLeaveConversationRemoteRes = {
    rateLimit?: RateLimit;
};
export declare type DeleteConversationRemoteRes = {
    rateLimit?: RateLimit;
};
export declare type GetMessageBeforeRes = {
    msgId: MessageID;
    rateLimit?: RateLimit;
};
export declare type GetTLFConversationsRes = {
    conversations: Conversation[] | null;
    rateLimit?: RateLimit;
};
export declare type SetAppNotificationSettingsRes = {
    rateLimit?: RateLimit;
};
export declare type SetRetentionRes = {
    rateLimit?: RateLimit;
};
export declare type SetConvMinWriterRoleRes = {
    rateLimit?: RateLimit;
};
export declare type SweepRes = {
    foundTask: boolean;
    deletedMessages: boolean;
    expunge: Expunge;
};
export declare type ServerNowRes = {
    rateLimit?: RateLimit;
    now: gregor1.Time;
};
export declare enum ExternalAPIKeyTyp {
    GOOGLEMAPS = "googlemaps",
    GIPHY = "giphy"
}
export declare type ExternalAPIKey = {
    typ: ExternalAPIKeyTyp.GOOGLEMAPS;
    GOOGLEMAPS: string | null;
} | {
    typ: ExternalAPIKeyTyp.GIPHY;
    GIPHY: string | null;
} | {
    typ: Exclude<ExternalAPIKeyTyp, ExternalAPIKeyTyp.GOOGLEMAPS | ExternalAPIKeyTyp.GIPHY>;
};
export declare type CommandConvVers = never;
export declare type RemoteBotCommandsAdvertisementPublic = {
    convId: ConversationID;
};
export declare type RemoteBotCommandsAdvertisementTLFID = {
    convId: ConversationID;
    tlfId: TLFID;
};
export declare type RemoteBotCommandsAdvertisement = {
    typ: BotCommandsAdvertisementTyp.PUBLIC;
    PUBLIC: RemoteBotCommandsAdvertisementPublic | null;
} | {
    typ: BotCommandsAdvertisementTyp.TLFID_MEMBERS;
    TLFID_MEMBERS: RemoteBotCommandsAdvertisementTLFID | null;
} | {
    typ: BotCommandsAdvertisementTyp.TLFID_CONVS;
    TLFID_CONVS: RemoteBotCommandsAdvertisementTLFID | null;
} | {
    typ: Exclude<BotCommandsAdvertisementTyp, BotCommandsAdvertisementTyp.PUBLIC | BotCommandsAdvertisementTyp.TLFID_MEMBERS | BotCommandsAdvertisementTyp.TLFID_CONVS>;
};
export declare type BotCommandConv = {
    uid: gregor1.UID;
    convId: ConversationID;
    vers: CommandConvVers;
    mtime: gregor1.Time;
};
export declare type BotInfo = {
    commandConvs: BotCommandConv[] | null;
};
export declare type AdvertiseBotCommandsRes = {
    rateLimit?: RateLimit;
};
export declare type ClearBotCommandsRes = {
    rateLimit?: RateLimit;
};
export declare enum BotInfoResponseTyp {
    UPTODATE = "uptodate",
    INFO = "info"
}
export declare type BotInfoResponse = {
    typ: BotInfoResponseTyp.UPTODATE;
} | {
    typ: BotInfoResponseTyp.INFO;
    INFO: BotInfo | null;
} | {
    typ: Exclude<BotInfoResponseTyp, BotInfoResponseTyp.UPTODATE | BotInfoResponseTyp.INFO>;
};
export declare type GetBotInfoRes = {
    response: BotInfoResponse;
    rateLimit?: RateLimit;
};
export declare type BotInfoHash = Buffer;
export declare enum UnfurlType {
    GENERIC = "generic",
    YOUTUBE = "youtube",
    GIPHY = "giphy",
    MAPS = "maps"
}
export declare type UnfurlVideo = {
    url: string;
    mimeType: string;
    height: number;
    width: number;
};
export declare type UnfurlGenericRaw = {
    title: string;
    url: string;
    siteName: string;
    faviconUrl?: string;
    imageUrl?: string;
    video?: UnfurlVideo;
    publishTime?: number;
    description?: string;
};
export declare type UnfurlYoutubeRaw = {};
export declare type UnfurlGiphyRaw = {
    imageUrl?: string;
    video?: UnfurlVideo;
    faviconUrl?: string;
};
export declare type UnfurlMapsRaw = {
    title: string;
    url: string;
    siteName: string;
    imageUrl: string;
    historyImageUrl?: string;
    description: string;
};
export declare type UnfurlRaw = {
    unfurlType: UnfurlType.GENERIC;
    GENERIC: UnfurlGenericRaw | null;
} | {
    unfurlType: UnfurlType.YOUTUBE;
    YOUTUBE: UnfurlYoutubeRaw | null;
} | {
    unfurlType: UnfurlType.GIPHY;
    GIPHY: UnfurlGiphyRaw | null;
} | {
    unfurlType: UnfurlType.MAPS;
    MAPS: UnfurlMapsRaw | null;
} | {
    unfurlType: Exclude<UnfurlType, UnfurlType.GENERIC | UnfurlType.YOUTUBE | UnfurlType.GIPHY | UnfurlType.MAPS>;
};
export declare type UnfurlGeneric = {
    title: string;
    url: string;
    siteName: string;
    favicon?: Asset;
    image?: Asset;
    publishTime?: number;
    description?: string;
};
export declare type UnfurlYoutube = {};
export declare type UnfurlGiphy = {
    favicon?: Asset;
    image?: Asset;
    video?: Asset;
};
export declare type Unfurl = {
    unfurlType: UnfurlType.GENERIC;
    GENERIC: UnfurlGeneric | null;
} | {
    unfurlType: UnfurlType.YOUTUBE;
    YOUTUBE: UnfurlYoutube | null;
} | {
    unfurlType: UnfurlType.GIPHY;
    GIPHY: UnfurlGiphy | null;
} | {
    unfurlType: Exclude<UnfurlType, UnfurlType.GENERIC | UnfurlType.YOUTUBE | UnfurlType.GIPHY>;
};
export declare type UnfurlResult = {
    unfurl: Unfurl;
    url: string;
};
export declare type UnfurlImageDisplay = {
    url: string;
    height: number;
    width: number;
    isVideo: boolean;
};
export declare type UnfurlGenericDisplay = {
    title: string;
    url: string;
    siteName: string;
    favicon?: UnfurlImageDisplay;
    media?: UnfurlImageDisplay;
    publishTime?: number;
    description?: string;
};
export declare type UnfurlYoutubeDisplay = {};
export declare type UnfurlGiphyDisplay = {
    favicon?: UnfurlImageDisplay;
    image?: UnfurlImageDisplay;
    video?: UnfurlImageDisplay;
};
export declare type UnfurlDisplay = {
    unfurlType: UnfurlType.GENERIC;
    GENERIC: UnfurlGenericDisplay | null;
} | {
    unfurlType: UnfurlType.YOUTUBE;
    YOUTUBE: UnfurlYoutubeDisplay | null;
} | {
    unfurlType: UnfurlType.GIPHY;
    GIPHY: UnfurlGiphyDisplay | null;
} | {
    unfurlType: Exclude<UnfurlType, UnfurlType.GENERIC | UnfurlType.YOUTUBE | UnfurlType.GIPHY>;
};
export declare enum UnfurlMode {
    ALWAYS = "always",
    NEVER = "never",
    WHITELISTED = "whitelisted"
}
export declare type UnfurlSettings = {
    mode: UnfurlMode;
    whitelist: {
        [key: string]: boolean;
    };
};
export declare type UnfurlSettingsDisplay = {
    mode: UnfurlMode;
    whitelist: string[] | null;
};
