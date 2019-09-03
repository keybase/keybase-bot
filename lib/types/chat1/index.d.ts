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
    public: boolean;
    membersType: string;
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
    deviceID: string;
    deviceName?: string;
};
export declare type MsgFlipContent = {
    text: string;
    gameID: string;
    flipConvID: string;
    userMentions: KnownUserMention[];
    teamMentions: KnownTeamMention[];
};
export declare type MsgContent = {
    typeName: string;
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
    convID: string;
    channel: ChatChannel;
    sender: MsgSender;
    sentAt: number;
    sentAtMs: number;
    content: MsgContent;
    prev: MessagePreviousPointer[];
    unread: boolean;
    revokedDevice?: boolean;
    offline?: boolean;
    kbfsEncrypted?: boolean;
    isEphemeral?: boolean;
    isEphemeralExpired?: boolean;
    eTime?: gregor1.Time;
    reactions?: ReactionMap;
    hasPairwiseMacs?: boolean;
    atMentionUsernames?: string[];
    channelMention?: string;
    channelNameMentions?: UIChannelNameMention[];
};
export declare type Message = {
    msg?: MsgSummary;
    error?: string;
};
export declare type Thread = {
    messages: Message[];
    pagination?: Pagination;
    offline?: boolean;
    identifyFailures?: keybase1.TLFIdentifyFailure[];
    rateLimits?: RateLimitRes[];
};
/**
 * A chat conversation. This is essentially a chat channel plus some additional metadata.
 */
export declare type ConvSummary = {
    id: string;
    channel: ChatChannel;
    unread: boolean;
    activeAt: number;
    activeAtMs: number;
    memberStatus: string;
    resetUsers?: string[];
    finalizeInfo?: ConversationFinalizeInfo;
    supersedes?: string[];
    supersededBy?: string[];
    error?: string;
};
export declare type ChatList = {
    conversations: ConvSummary[];
    offline: boolean;
    identifyFailures?: keybase1.TLFIdentifyFailure[];
    pagination?: Pagination;
    rateLimits?: RateLimitRes[];
};
export declare type SendRes = {
    message: string;
    messageID?: MessageID;
    outboxID?: OutboxID;
    identifyFailures?: keybase1.TLFIdentifyFailure[];
    rateLimits?: RateLimitRes[];
};
export declare type SearchInboxResOutput = {
    results?: ChatSearchInboxResults;
    identifyFailures?: keybase1.TLFIdentifyFailure[];
    rateLimits?: RateLimitRes[];
};
export declare type RegexpRes = {
    hits: ChatSearchHit[];
    identifyFailures?: keybase1.TLFIdentifyFailure[];
    rateLimits?: RateLimitRes[];
};
export declare type NewConvRes = {
    id: string;
    identifyFailures?: keybase1.TLFIdentifyFailure[];
    rateLimits?: RateLimitRes[];
};
export declare type ListCommandsRes = {
    commands: UserBotCommandOutput[];
    rateLimits?: RateLimitRes[];
};
export declare type EmptyRes = {
    rateLimits?: RateLimitRes[];
};
export declare type MsgNotification = {
    type: string;
    source: string;
    msg?: MsgSummary;
    error?: string;
    pagination?: UIPagination;
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
    writerNames: string[];
    resetParticipants: string[];
};
export declare type UnverifiedInboxUIItem = {
    convID: string;
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
    maxMsgID: MessageID;
    maxVisibleMsgID: MessageID;
    readMsgID: MessageID;
    localMetadata?: UnverifiedInboxUIItemMetadata;
    draft?: string;
    finalizeInfo?: ConversationFinalizeInfo;
    supersedes: ConversationMetadata[];
    supersededBy: ConversationMetadata[];
    commands: ConversationCommandGroups;
};
export declare type UnverifiedInboxUIItems = {
    items: UnverifiedInboxUIItem[];
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
export declare type InboxUIItem = {
    convID: string;
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
    participants: UIParticipant[];
    resetParticipants: string[];
    status: ConversationStatus;
    membersType: ConversationMembersType;
    memberStatus: ConversationMemberStatus;
    teamType: TeamType;
    time: gregor1.Time;
    notifications?: ConversationNotificationInfo;
    creatorInfo?: ConversationCreatorInfoLocal;
    version: ConversationVers;
    localVersion: LocalConversationVers;
    maxMsgID: MessageID;
    maxVisibleMsgID: MessageID;
    readMsgID: MessageID;
    convRetention?: RetentionPolicy;
    teamRetention?: RetentionPolicy;
    convSettings?: ConversationSettingsLocal;
    finalizeInfo?: ConversationFinalizeInfo;
    supersedes: ConversationMetadata[];
    supersededBy: ConversationMetadata[];
    commands: ConversationCommandGroups;
    botCommands: ConversationCommandGroups;
};
export declare type InboxUIItemError = {
    typ: ConversationErrorType;
    message: string;
    unverifiedTLFName: string;
    rekeyInfo?: ConversationErrorRekey;
    remoteConv: UnverifiedInboxUIItem;
};
export declare type InboxUIItems = {
    items: InboxUIItem[];
    pagination?: UIPagination;
    offline: boolean;
};
export declare type UIChannelNameMention = {
    name: string;
    convID: string;
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
    accountID?: stellar1.AccountID;
    amountDescription: string;
    worth: string;
    worthAtSendTime: string;
    delta: stellar1.BalanceDelta;
    note: string;
    paymentID: stellar1.PaymentID;
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
    unfurlMessageID: MessageID;
    url: string;
    unfurl: UnfurlDisplay;
    isCollapsed: boolean;
};
export declare type UIMessageValid = {
    messageID: MessageID;
    ctime: gregor1.Time;
    outboxID?: string;
    messageBody: MessageBody;
    decoratedTextBody?: string;
    bodySummary: string;
    senderUsername: string;
    senderDeviceName: string;
    senderDeviceType: string;
    senderUID: gregor1.UID;
    senderDeviceID: gregor1.DeviceID;
    superseded: boolean;
    assetUrlInfo?: UIAssetUrlInfo;
    senderDeviceRevokedAt?: gregor1.Time;
    atMentions: string[];
    channelMention: ChannelMention;
    channelNameMentions: UIChannelNameMention[];
    isEphemeral: boolean;
    isEphemeralExpired: boolean;
    explodedBy?: string;
    etime: gregor1.Time;
    reactions: ReactionMap;
    hasPairwiseMacs: boolean;
    paymentInfos: UIPaymentInfo[];
    requestInfo?: UIRequestInfo;
    unfurls: UIMessageUnfurlInfo[];
    isCollapsed: boolean;
    flipGameID?: string;
    isDeleteable: boolean;
    isEditable: boolean;
    replyTo?: UIMessage;
    botUID?: gregor1.UID;
};
export declare type UIMessageOutbox = {
    state: OutboxState;
    outboxID: string;
    messageType: MessageType;
    body: string;
    decoratedTextBody?: string;
    ctime: gregor1.Time;
    ordinal: number;
    isEphemeral: boolean;
    flipGameID?: string;
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
};
export declare type UIMessages = {
    messages: UIMessage[];
    pagination?: UIPagination;
};
export declare type UITeamMention = {
    inTeam: boolean;
    open: boolean;
    description?: string;
    numMembers?: number;
    publicAdmins: string[];
    convID?: string;
};
export declare enum UITextDecorationTyp {
    PAYMENT = "payment",
    ATMENTION = "atmention",
    CHANNELNAMEMENTION = "channelnamemention",
    MAYBEMENTION = "maybemention",
    LINK = "link",
    MAILTO = "mailto"
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
};
export declare type UIChatSearchConvHit = {
    convID: string;
    teamType: TeamType;
    name: string;
    mtime: gregor1.Time;
};
export declare type UIChatSearchConvHits = {
    hits: UIChatSearchConvHit[];
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
    payments: UIChatPayment[];
};
export declare type GiphySearchResult = {
    targetUrl: string;
    previewUrl: string;
    previewWidth: number;
    previewHeight: number;
    previewIsVideo: boolean;
};
export declare type GiphySearchResults = {
    results: GiphySearchResult[];
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
    absentees: UICoinFlipErrorParticipant[];
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
    hand: number[];
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
};
export declare type UICoinFlipParticipant = {
    uid: string;
    deviceID: string;
    username: string;
    deviceName: string;
    commitment: string;
    reveal?: string;
};
export declare type UICoinFlipStatus = {
    gameID: string;
    phase: UICoinFlipPhase;
    progressText: string;
    resultText: string;
    commitmentVisualization: string;
    revealVisualization: string;
    participants: UICoinFlipParticipant[];
    errorInfo?: UICoinFlipError;
    resultInfo?: UICoinFlipResult;
};
export declare type UICommandMarkdown = {
    body: string;
    title?: string;
};
export declare type LocationWatchID = number;
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
    commands: ConversationCommand[];
};
export declare type ConversationCommandGroups = {
    typ: ConversationCommandGroupsTyp.BUILTIN;
    BUILTIN: ConversationBuiltinCommandTyp | null;
} | {
    typ: ConversationCommandGroupsTyp.CUSTOM;
    CUSTOM: ConversationCommandGroupsCustom | null;
} | {
    typ: ConversationCommandGroupsTyp.NONE;
};
export declare type ThreadID = Buffer;
export declare type MessageID = number;
export declare type TLFConvOrdinal = number;
export declare type TopicID = Buffer;
export declare type ConversationID = Buffer;
export declare type TLFID = Buffer;
export declare type Hash = Buffer;
export declare type InboxVers = number;
export declare type LocalConversationVers = number;
export declare type ConversationVers = number;
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
    convID: ConversationID;
    topicType: TopicType;
};
export declare type ConversationIDMessageIDPair = {
    convID: ConversationID;
    msgID: MessageID;
};
export declare type ConversationIDMessageIDPairs = {
    pairs: ConversationIDMessageIDPair[];
};
export declare type ChannelNameMention = {
    convID: ConversationID;
    topicName: string;
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
    next: Buffer;
    previous: Buffer;
    num: number;
    last: boolean;
    forceFirstPage: boolean;
};
export declare type RateLimit = {
    name: string;
    callsRemaining: number;
    windowReset: number;
    maxCalls: number;
};
export declare type GetInboxQuery = {
    convID?: ConversationID;
    topicType?: TopicType;
    tlfID?: TLFID;
    tlfVisibility?: keybase1.TLFVisibility;
    before?: gregor1.Time;
    after?: gregor1.Time;
    oneChatTypePerTLF?: boolean;
    topicName?: string;
    status: ConversationStatus[];
    memberStatus: ConversationMemberStatus[];
    existences: ConversationExistence[];
    membersTypes: ConversationMembersType[];
    convIDs: ConversationID[];
    unreadOnly: boolean;
    readOnly: boolean;
    computeActiveList: boolean;
    summarizeMaxMsgs: boolean;
    skipBgLoads: boolean;
};
export declare type ConversationIDTriple = {
    tlfid: TLFID;
    topicType: TopicType;
    topicID: TopicID;
};
export declare type ConversationFinalizeInfo = {
    resetUser: string;
    resetDate: string;
    resetFull: string;
    resetTimestamp: gregor1.Time;
};
export declare type ConversationResolveInfo = {
    newTLFName: string;
};
export declare type Expunge = {
    upto: MessageID;
    basis: MessageID;
};
export declare type ConversationMetadata = {
    idTriple: ConversationIDTriple;
    conversationID: ConversationID;
    visibility: keybase1.TLFVisibility;
    status: ConversationStatus;
    membersType: ConversationMembersType;
    teamType: TeamType;
    existence: ConversationExistence;
    version: ConversationVers;
    localVersion: LocalConversationVers;
    finalizeInfo?: ConversationFinalizeInfo;
    supersedes: ConversationMetadata[];
    supersededBy: ConversationMetadata[];
    activeList: gregor1.UID[];
    allList: gregor1.UID[];
    resetList: gregor1.UID[];
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
    minWriterRoleInfo?: ConversationMinWriterRoleInfo;
};
export declare type Conversation = {
    metadata: ConversationMetadata;
    readerInfo?: ConversationReaderInfo;
    notifications?: ConversationNotificationInfo;
    maxMsgs: MessageBoxed[];
    maxMsgSummaries: MessageSummary[];
    creatorInfo?: ConversationCreatorInfo;
    pinnedMsg?: MessageID;
    expunge: Expunge;
    convRetention?: RetentionPolicy;
    teamRetention?: RetentionPolicy;
    convSettings?: ConversationSettings;
};
export declare type MessageSummary = {
    msgID: MessageID;
    messageType: MessageType;
    tlfName: string;
    tlfPublic: boolean;
    ctime: gregor1.Time;
};
export declare type Reaction = {
    ctime: gregor1.Time;
    reactionMsgID: MessageID;
};
export declare type ReactionMap = {
    reactions: {
        [key: string]: {
            [key: string]: Reaction;
        };
    };
};
export declare type MessageServerHeader = {
    messageID: MessageID;
    supersededBy: MessageID;
    reactionIDs: MessageID[];
    unfurlIDs: MessageID[];
    replies: MessageID[];
    ctime: gregor1.Time;
    now: gregor1.Time;
    rtime?: gregor1.Time;
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
    lifetime: gregor1.DurationSec;
    generation: keybase1.EkGeneration;
    explodedBy?: string;
};
export declare type EphemeralPurgeInfo = {
    convID: ConversationID;
    isActive: boolean;
    nextPurgeTime: gregor1.Time;
    minUnexplodedID: MessageID;
};
export declare type MessageClientHeader = {
    conv: ConversationIDTriple;
    tlfName: string;
    tlfPublic: boolean;
    messageType: MessageType;
    supersedes: MessageID;
    kbfsCryptKeysUsed?: boolean;
    deletes: MessageID[];
    prev: MessagePreviousPointer[];
    deleteHistory?: MessageDeleteHistory;
    sender: gregor1.UID;
    senderDevice: gregor1.DeviceID;
    merkleRoot?: MerkleRoot;
    outboxID?: OutboxID;
    outboxInfo?: OutboxInfo;
    ephemeralMetadata?: MsgEphemeralMetadata;
    pairwiseMacs: {
        [key: string]: Buffer;
    };
    botUID?: gregor1.UID;
};
export declare type MessageClientHeaderVerified = {
    conv: ConversationIDTriple;
    tlfName: string;
    tlfPublic: boolean;
    messageType: MessageType;
    prev: MessagePreviousPointer[];
    sender: gregor1.UID;
    senderDevice: gregor1.DeviceID;
    kbfsCryptKeysUsed?: boolean;
    merkleRoot?: MerkleRoot;
    outboxID?: OutboxID;
    outboxInfo?: OutboxInfo;
    ephemeralMetadata?: MsgEphemeralMetadata;
    rtime: gregor1.Time;
    hasPairwiseMacs: boolean;
    botUID?: gregor1.UID;
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
    seqno: number;
    hash: Buffer;
};
export declare enum InboxResType {
    VERSIONHIT = "versionhit",
    FULL = "full"
}
export declare type InboxViewFull = {
    vers: InboxVers;
    conversations: Conversation[];
    pagination?: Pagination;
};
export declare type InboxView = {
    rtype: InboxResType.VERSIONHIT;
} | {
    rtype: InboxResType.FULL;
    FULL: InboxViewFull | null;
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
    convID?: ConversationID;
    maxNameConvs: number;
};
export declare type EmptyStruct = {};
export declare type ChatSearchMatch = {
    startIndex: number;
    endIndex: number;
    match: string;
};
export declare type ChatSearchHit = {
    beforeMessages: UIMessage[];
    hitMessage: UIMessage;
    afterMessages: UIMessage[];
    matches: ChatSearchMatch[];
};
export declare type ChatSearchInboxHit = {
    convID: ConversationID;
    teamType: TeamType;
    convName: string;
    query: string;
    time: gregor1.Time;
    hits: ChatSearchHit[];
};
export declare type ChatSearchInboxResults = {
    hits: ChatSearchInboxHit[];
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
    size: number;
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
    Action: string;
    inboxVers: InboxVers;
    convID: ConversationID;
    topicType: TopicType;
    unreadUpdate?: UnreadUpdate;
};
export declare type NewConversationPayload = {
    Action: string;
    convID: ConversationID;
    inboxVers: InboxVers;
    topicType: TopicType;
    unreadUpdate?: UnreadUpdate;
};
export declare type NewMessagePayload = {
    Action: string;
    convID: ConversationID;
    message: MessageBoxed;
    inboxVers: InboxVers;
    topicType: TopicType;
    unreadUpdate?: UnreadUpdate;
    maxMsgs: MessageSummary[];
};
export declare type ReadMessagePayload = {
    Action: string;
    convID: ConversationID;
    msgID: MessageID;
    inboxVers: InboxVers;
    topicType: TopicType;
    unreadUpdate?: UnreadUpdate;
};
export declare type SetStatusPayload = {
    Action: string;
    convID: ConversationID;
    status: ConversationStatus;
    inboxVers: InboxVers;
    topicType: TopicType;
    unreadUpdate?: UnreadUpdate;
};
export declare type TeamTypePayload = {
    Action: string;
    convID: ConversationID;
    teamType: TeamType;
    inboxVers: InboxVers;
    topicType: TopicType;
    unreadUpdate?: UnreadUpdate;
};
export declare type SetAppNotificationSettingsPayload = {
    Action: string;
    convID: ConversationID;
    inboxVers: InboxVers;
    settings: ConversationNotificationInfo;
    topicType: TopicType;
    unreadUpdate?: UnreadUpdate;
};
export declare type ExpungePayload = {
    Action: string;
    convID: ConversationID;
    inboxVers: InboxVers;
    expunge: Expunge;
    maxMsgs: MessageSummary[];
    topicType: TopicType;
    unreadUpdate?: UnreadUpdate;
};
export declare type UnreadUpdate = {
    convID: ConversationID;
    unreadMessages: number;
    unreadNotifyingMessages: {
        [key: string]: number;
    };
    compatUnreadMessages: number;
    diff: boolean;
};
export declare type TLFFinalizeUpdate = {
    finalizeInfo: ConversationFinalizeInfo;
    convIDs: ConversationID[];
    inboxVers: InboxVers;
};
export declare type TLFResolveUpdate = {
    convID: ConversationID;
    inboxVers: InboxVers;
};
export declare type RemoteUserTypingUpdate = {
    uid: gregor1.UID;
    deviceID: gregor1.DeviceID;
    convID: ConversationID;
    typing: boolean;
};
export declare type UpdateConversationMembership = {
    inboxVers: InboxVers;
    joined: ConversationMember[];
    removed: ConversationMember[];
    reset: ConversationMember[];
    previewed: ConversationID[];
    unreadUpdate?: UnreadUpdate;
    unreadUpdates: UnreadUpdate[];
};
export declare type ConversationUpdate = {
    convID: ConversationID;
    existence: ConversationExistence;
};
export declare type UpdateConversations = {
    inboxVers: InboxVers;
    convUpdates: ConversationUpdate[];
};
export declare type TeamChannelUpdate = {
    teamID: TLFID;
};
export declare type SetConvRetentionUpdate = {
    inboxVers: InboxVers;
    convID: ConversationID;
    policy: RetentionPolicy;
};
export declare type SetTeamRetentionUpdate = {
    inboxVers: InboxVers;
    teamID: keybase1.TeamID;
    policy: RetentionPolicy;
};
export declare type SetConvSettingsUpdate = {
    inboxVers: InboxVers;
    convID: ConversationID;
    convSettings?: ConversationSettings;
};
export declare type KBFSImpteamUpgradeUpdate = {
    convID: ConversationID;
    inboxVers: InboxVers;
    topicType: TopicType;
};
export declare type SubteamRenameUpdate = {
    convIDs: ConversationID[];
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
    payments: TextPayment[];
    replyTo?: MessageID;
    replyToUID?: gregor1.UID;
    userMentions: KnownUserMention[];
    teamMentions: KnownTeamMention[];
    liveLocation?: LiveLocation;
};
export declare type MessageConversationMetadata = {
    conversationTitle: string;
};
export declare type MessageEdit = {
    messageID: MessageID;
    body: string;
    userMentions: KnownUserMention[];
    teamMentions: KnownTeamMention[];
};
export declare type MessageDelete = {
    messageIDs: MessageID[];
};
export declare type MessageHeadline = {
    headline: string;
};
export declare type MessageFlip = {
    text: string;
    gameID: FlipGameID;
    flipConvID: ConversationID;
    userMentions: KnownUserMention[];
    teamMentions: KnownTeamMention[];
};
export declare type MessagePin = {
    msgID: MessageID;
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
    owners: string[];
    admins: string[];
    writers: string[];
    readers: string[];
    bots: string[];
    restrictedBots: string[];
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
    repoID: keybase1.RepoID;
    refs: keybase1.GitRefMetadata[];
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
    usernames: string[];
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
};
export declare type MessageDeleteHistory = {
    upto: MessageID;
};
export declare type MessageAttachment = {
    object: Asset;
    preview?: Asset;
    previews: Asset[];
    metadata: Buffer;
    uploaded: boolean;
};
export declare type MessageAttachmentUploaded = {
    messageID: MessageID;
    object: Asset;
    previews: Asset[];
    metadata: Buffer;
};
export declare type MessageJoin = {
    joiners: string[];
    leavers: string[];
};
export declare type MessageLeave = {};
export declare type MessageReaction = {
    messageID: MessageID;
    body: string;
};
export declare type MessageSendPayment = {
    paymentID: stellar1.PaymentID;
};
export declare type MessageRequestPayment = {
    requestID: stellar1.KeybaseRequestID;
    note: string;
};
export declare type MessageUnfurl = {
    unfurl: UnfurlResult;
    messageID: MessageID;
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
};
export declare type OutboxRecord = {
    state: OutboxState;
    outboxID: OutboxID;
    convID: ConversationID;
    ctime: gregor1.Time;
    Msg: MessagePlaintext;
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
    prev: MessagePreviousPointer[];
    sender: gregor1.UID;
    senderDevice: gregor1.DeviceID;
    kbfsCryptKeysUsed?: boolean;
    bodyHash: Hash;
    outboxInfo?: OutboxInfo;
    outboxID?: OutboxID;
    headerSignature?: SignatureInfo;
    merkleRoot?: MerkleRoot;
    ephemeralMetadata?: MsgEphemeralMetadata;
    botUID?: gregor1.UID;
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
export declare type BodyPlaintext = {
    version: BodyPlaintextVersion.V1;
    V1: BodyPlaintextV1 | null;
} | {
    version: BodyPlaintextVersion.V2;
    V2: BodyPlaintextUnsupported | null;
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
};
export declare type MessagePlaintext = {
    clientHeader: MessageClientHeader;
    messageBody: MessageBody;
    supersedesOutboxID?: OutboxID;
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
    atMentionUsernames: string[];
    atMentions: gregor1.UID[];
    channelMention: ChannelMention;
    maybeMentions: MaybeMention[];
    channelNameMentions: ChannelNameMention[];
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
    messageID: MessageID;
    messageType: MessageType;
    ctime: gregor1.Time;
    isEphemeral: boolean;
    isEphemeralExpired: boolean;
    etime: gregor1.Time;
};
export declare type MessageUnboxedPlaceholder = {
    messageID: MessageID;
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
};
export declare type UnreadFirstNumLimit = {
    NumRead: number;
    AtLeast: number;
    AtMost: number;
};
export declare type ConversationLocalParticipant = {
    username: string;
    fullname?: string;
    contactName?: string;
};
export declare type ConversationInfoLocal = {
    id: ConversationID;
    triple: ConversationIDTriple;
    tlfName: string;
    topicName: string;
    headline: string;
    snippetMsg?: MessageUnboxed;
    pinnedMsg?: MessageUnboxed;
    draft?: string;
    visibility: keybase1.TLFVisibility;
    status: ConversationStatus;
    membersType: ConversationMembersType;
    memberStatus: ConversationMemberStatus;
    teamType: TeamType;
    existence: ConversationExistence;
    version: ConversationVers;
    localVersion: LocalConversationVers;
    participants: ConversationLocalParticipant[];
    finalizeInfo?: ConversationFinalizeInfo;
    resetNames: string[];
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
    unverifiedTLFName: string;
    rekeyInfo?: ConversationErrorRekey;
};
export declare type ConversationErrorRekey = {
    tlfName: string;
    tlfPublic: boolean;
    rekeyers: string[];
    writerNames: string[];
    readerNames: string[];
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
    supersedes: ConversationMetadata[];
    supersededBy: ConversationMetadata[];
    maxMessages: MessageSummary[];
    isEmpty: boolean;
    identifyFailures: keybase1.TLFIdentifyFailure[];
    expunge: Expunge;
    convRetention?: RetentionPolicy;
    teamRetention?: RetentionPolicy;
    convSettings?: ConversationSettingsLocal;
    commands: ConversationCommandGroups;
    botCommands: ConversationCommandGroups;
};
export declare type NonblockFetchRes = {
    offline: boolean;
    rateLimits: RateLimit[];
    identifyFailures: keybase1.TLFIdentifyFailure[];
};
export declare type ThreadView = {
    messages: MessageUnboxed[];
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
    messageTypes: MessageType[];
    disableResolveSupersedes: boolean;
    enableDeletePlaceholders: boolean;
    disablePostProcessThread: boolean;
    before?: gregor1.Time;
    after?: gregor1.Time;
    messageIDControl?: MessageIDControl;
};
export declare type GetThreadLocalRes = {
    thread: ThreadView;
    offline: boolean;
    rateLimits: RateLimit[];
    identifyFailures: keybase1.TLFIdentifyFailure[];
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
    rateLimits: RateLimit[];
    identifyFailures: keybase1.TLFIdentifyFailure[];
    unreadlineID?: MessageID;
};
export declare type NameQuery = {
    name: string;
    tlfID?: TLFID;
    membersType: ConversationMembersType;
};
export declare type GetInboxLocalQuery = {
    name?: NameQuery;
    topicName?: string;
    convIDs: ConversationID[];
    topicType?: TopicType;
    tlfVisibility?: keybase1.TLFVisibility;
    before?: gregor1.Time;
    after?: gregor1.Time;
    oneChatTypePerTLF?: boolean;
    status: ConversationStatus[];
    memberStatus: ConversationMemberStatus[];
    unreadOnly: boolean;
    readOnly: boolean;
    computeActiveList: boolean;
};
export declare type GetInboxAndUnboxLocalRes = {
    conversations: ConversationLocal[];
    pagination?: Pagination;
    offline: boolean;
    rateLimits: RateLimit[];
    identifyFailures: keybase1.TLFIdentifyFailure[];
};
export declare type GetInboxAndUnboxUILocalRes = {
    conversations: InboxUIItem[];
    pagination?: Pagination;
    offline: boolean;
    rateLimits: RateLimit[];
    identifyFailures: keybase1.TLFIdentifyFailure[];
};
export declare type PostLocalRes = {
    rateLimits: RateLimit[];
    messageID: MessageID;
    identifyFailures: keybase1.TLFIdentifyFailure[];
};
export declare type PostLocalNonblockRes = {
    rateLimits: RateLimit[];
    outboxID: OutboxID;
    identifyFailures: keybase1.TLFIdentifyFailure[];
};
export declare type EditTarget = {
    messageID?: MessageID;
    outboxID?: OutboxID;
};
export declare type SetConversationStatusLocalRes = {
    rateLimits: RateLimit[];
    identifyFailures: keybase1.TLFIdentifyFailure[];
};
export declare type NewConversationLocalRes = {
    conv: ConversationLocal;
    uiConv: InboxUIItem;
    rateLimits: RateLimit[];
    identifyFailures: keybase1.TLFIdentifyFailure[];
};
export declare type GetInboxSummaryForCLILocalQuery = {
    topicType: TopicType;
    after: string;
    before: string;
    visibility: keybase1.TLFVisibility;
    status: ConversationStatus[];
    unreadFirst: boolean;
    unreadFirstLimit: UnreadFirstNumLimit;
    activitySortedLimit: number;
};
export declare type GetInboxSummaryForCLILocalRes = {
    conversations: ConversationLocal[];
    offline: boolean;
    rateLimits: RateLimit[];
};
export declare type GetConversationForCLILocalQuery = {
    markAsRead: boolean;
    MessageTypes: MessageType[];
    Since?: string;
    limit: UnreadFirstNumLimit;
    conv: ConversationLocal;
};
export declare type GetConversationForCLILocalRes = {
    conversation: ConversationLocal;
    messages: MessageUnboxed[];
    offline: boolean;
    rateLimits: RateLimit[];
};
export declare type GetMessagesLocalRes = {
    messages: MessageUnboxed[];
    offline: boolean;
    rateLimits: RateLimit[];
    identifyFailures: keybase1.TLFIdentifyFailure[];
};
export declare type PostFileAttachmentArg = {
    conversationID: ConversationID;
    tlfName: string;
    visibility: keybase1.TLFVisibility;
    filename: string;
    title: string;
    metadata: Buffer;
    identifyBehavior: keybase1.TLFIdentifyBehavior;
    callerPreview?: MakePreviewRes;
    outboxID?: OutboxID;
    ephemeralLifetime?: gregor1.DurationSec;
};
export declare type GetNextAttachmentMessageLocalRes = {
    message?: UIMessage;
    offline: boolean;
    rateLimits: RateLimit[];
    identifyFailures: keybase1.TLFIdentifyFailure[];
};
export declare type DownloadAttachmentLocalRes = {
    rateLimits: RateLimit[];
    identifyFailures: keybase1.TLFIdentifyFailure[];
};
export declare type DownloadFileAttachmentLocalRes = {
    filename: string;
    rateLimits: RateLimit[];
    identifyFailures: keybase1.TLFIdentifyFailure[];
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
    rateLimits: RateLimit[];
};
export declare type FindConversationsLocalRes = {
    conversations: ConversationLocal[];
    uiConversations: InboxUIItem[];
    offline: boolean;
    rateLimits: RateLimit[];
    identifyFailures: keybase1.TLFIdentifyFailure[];
};
export declare type JoinLeaveConversationLocalRes = {
    offline: boolean;
    rateLimits: RateLimit[];
};
export declare type PreviewConversationLocalRes = {
    conv: InboxUIItem;
    offline: boolean;
    rateLimits: RateLimit[];
};
export declare type DeleteConversationLocalRes = {
    offline: boolean;
    rateLimits: RateLimit[];
};
export declare type GetTLFConversationsLocalRes = {
    convs: InboxUIItem[];
    offline: boolean;
    rateLimits: RateLimit[];
};
export declare type SetAppNotificationSettingsLocalRes = {
    offline: boolean;
    rateLimits: RateLimit[];
};
export declare type AppNotificationSettingLocal = {
    deviceType: keybase1.DeviceType;
    kind: NotificationKind;
    enabled: boolean;
};
export declare type SearchRegexpRes = {
    offline: boolean;
    hits: ChatSearchHit[];
    rateLimits: RateLimit[];
    identifyFailures: keybase1.TLFIdentifyFailure[];
};
export declare type SearchInboxRes = {
    offline: boolean;
    res?: ChatSearchInboxResults;
    rateLimits: RateLimit[];
    identifyFailures: keybase1.TLFIdentifyFailure[];
};
export declare type ProfileSearchConvStats = {
    err: string;
    convName: string;
    minConvID: MessageID;
    maxConvID: MessageID;
    numMissing: number;
    numMessages: number;
    indexSizeDisk: number;
    indexSizeMem: number;
    durationMsec: gregor1.DurationMsec;
    percentIndexed: number;
};
export declare type BuiltinCommandGroup = {
    typ: ConversationBuiltinCommandTyp;
    commands: ConversationCommand[];
};
export declare type StaticConfig = {
    deletableByDeleteHistory: MessageType[];
    builtinCommands: BuiltinCommandGroup[];
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
};
export declare enum GalleryItemTyp {
    MEDIA = "media",
    LINK = "link",
    DOC = "doc"
}
export declare type LoadGalleryRes = {
    messages: UIMessage[];
    last: boolean;
    rateLimits: RateLimit[];
    identifyFailures: keybase1.TLFIdentifyFailure[];
};
export declare type LoadFlipRes = {
    status: UICoinFlipStatus;
    rateLimits: RateLimit[];
    identifyFailures: keybase1.TLFIdentifyFailure[];
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
    commands: UserBotCommandInput[];
    teamName?: string;
};
export declare type AdvertiseBotCommandsLocalRes = {
    rateLimits: RateLimit[];
};
export declare type ListBotCommandsLocalRes = {
    commands: UserBotCommandOutput[];
    rateLimits: RateLimit[];
};
export declare type ClearBotCommandsLocalRes = {
    rateLimits: RateLimit[];
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
    convID: ConversationID;
    displayDesktopNotification: boolean;
    desktopNotificationSnippet: string;
    conv?: InboxUIItem;
    pagination?: UIPagination;
};
export declare type ReadMessageInfo = {
    convID: ConversationID;
    msgID: MessageID;
    conv?: InboxUIItem;
};
export declare type NewConversationInfo = {
    convID: ConversationID;
    conv?: InboxUIItem;
};
export declare type SetStatusInfo = {
    convID: ConversationID;
    status: ConversationStatus;
    conv?: InboxUIItem;
};
export declare type SetAppNotificationSettingsInfo = {
    convID: ConversationID;
    settings: ConversationNotificationInfo;
};
export declare type FailedMessageInfo = {
    outboxRecords: OutboxRecord[];
    isEphemeralPurge: boolean;
};
export declare type MemberInfo = {
    member: string;
    status: ConversationMemberStatus;
};
export declare type MembersUpdateInfo = {
    convID: ConversationID;
    members: MemberInfo[];
};
export declare type TeamTypeInfo = {
    convID: ConversationID;
    teamType: TeamType;
    conv?: InboxUIItem;
};
export declare type ExpungeInfo = {
    convID: ConversationID;
    expunge: Expunge;
};
export declare type EphemeralPurgeNotifInfo = {
    convID: ConversationID;
    msgs: UIMessage[];
};
export declare type ReactionUpdate = {
    reactions: ReactionMap;
    targetMsgID: MessageID;
};
export declare type ReactionUpdateNotif = {
    convID: ConversationID;
    userReacjis: keybase1.UserReacjis;
    reactionUpdates: ReactionUpdate[];
};
export declare type MessagesUpdated = {
    convID: ConversationID;
    updates: UIMessage[];
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
};
export declare type TyperInfo = {
    uid: keybase1.UID;
    username: string;
    deviceID: keybase1.DeviceID;
    deviceName: string;
    deviceType: string;
};
export declare type ConvTypingUpdate = {
    convID: ConversationID;
    typers: TyperInfo[];
};
export declare enum StaleUpdateType {
    CLEAR = "clear",
    NEWACTIVITY = "newactivity",
    CONVUPDATE = "convupdate"
}
export declare type ConversationStaleUpdate = {
    convID: ConversationID;
    updateType: StaleUpdateType;
};
export declare type ChatSyncIncrementalConv = {
    conv: UnverifiedInboxUIItem;
    shouldUnbox: boolean;
};
export declare type ChatSyncIncrementalInfo = {
    items: ChatSyncIncrementalConv[];
    removals: string[];
};
export declare type ChatSyncResult = {
    syncType: SyncInboxResType.CURRENT;
} | {
    syncType: SyncInboxResType.CLEAR;
} | {
    syncType: SyncInboxResType.INCREMENTAL;
    INCREMENTAL: ChatSyncIncrementalInfo | null;
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
    messages: MessageBoxed[];
    pagination?: Pagination;
};
export declare type GetInboxRemoteRes = {
    inbox: InboxView;
    rateLimit?: RateLimit;
};
export declare type GetInboxByTLFIDRemoteRes = {
    convs: Conversation[];
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
    convID: ConversationID;
    createdComplexTeam: boolean;
    rateLimit?: RateLimit;
};
export declare type GetMessagesRemoteRes = {
    msgs: MessageBoxed[];
    rateLimit?: RateLimit;
};
export declare type MarkAsReadRes = {
    rateLimit?: RateLimit;
};
export declare type SetConversationStatusRes = {
    rateLimit?: RateLimit;
};
export declare type GetPublicConversationsRes = {
    conversations: Conversation[];
    rateLimit?: RateLimit;
};
export declare type GetUnreadlineRemoteRes = {
    unreadlineID?: MessageID;
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
    updates: UnreadUpdate[];
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
    convs: Conversation[];
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
    msgID: MessageID;
    rateLimit?: RateLimit;
};
export declare type GetTLFConversationsRes = {
    conversations: Conversation[];
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
};
export declare type CommandConvVers = number;
export declare type RemoteBotCommandsAdvertisementPublic = {
    convID: ConversationID;
};
export declare type RemoteBotCommandsAdvertisementTLFID = {
    convID: ConversationID;
    tlfID: TLFID;
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
};
export declare type BotCommandConv = {
    uid: gregor1.UID;
    convID: ConversationID;
    vers: CommandConvVers;
    mtime: gregor1.Time;
};
export declare type BotInfo = {
    commandConvs: BotCommandConv[];
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
    whitelist: string[];
};