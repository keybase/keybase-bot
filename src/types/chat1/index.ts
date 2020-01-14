/*
 * chat.1
 *
 * Auto-generated to TypeScript types by avdl-compiler v1.4.6 (https://github.com/keybase/node-avdl-compiler)
 * Input files:
 * - ../client/protocol/avdl/chat1/api.avdl
 * - ../client/protocol/avdl/chat1/blocking.avdl
 * - ../client/protocol/avdl/chat1/chat_ui.avdl
 * - ../client/protocol/avdl/chat1/commands.avdl
 * - ../client/protocol/avdl/chat1/common.avdl
 * - ../client/protocol/avdl/chat1/gregor.avdl
 * - ../client/protocol/avdl/chat1/local.avdl
 * - ../client/protocol/avdl/chat1/notify.avdl
 * - ../client/protocol/avdl/chat1/remote.avdl
 * - ../client/protocol/avdl/chat1/unfurl.avdl
 */

import * as gregor1 from '../gregor1'
import * as keybase1 from '../keybase1'
import * as stellar1 from '../stellar1'

export type ConvIDStr = string

export type TLFIDStr = string

export type FlipGameIDStr = string

export type RateLimitRes = {
  tank: string
  capacity: number
  reset: number
  gas: number
}

/**
 * A Keybase chat channel. This can be a channel in a team, or just an informal channel between two users.
 *    name: the name of the team or comma-separated list of participants
 */
export type ChatChannel = {
  name: string
  public?: boolean
  membersType?: string
  topicType?: string
  topicName?: string
}

/**
 * A chat message. The content goes in the `body` property!
 */
export type ChatMessage = {
  body: string
}

export type MsgSender = {
  uid: keybase1.UID
  username?: string
  deviceId: keybase1.DeviceID
  deviceName?: string
}

export type MsgBotInfo = {
  botUid: keybase1.UID
  botUsername?: string
}

export type DeviceInfo = {
  id: keybase1.DeviceID
  description: string
  type: string
  ctime: number
}

export type UIPagination = {
  next: string
  previous: string
  num: number
  last: boolean
}

export enum UIInboxBigTeamRowTyp {
  LABEL = 'label',
  CHANNEL = 'channel',
}

export enum UIParticipantType {
  NONE = 'none',
  USER = 'user',
  PHONENO = 'phoneno',
  EMAIL = 'email',
}

export type UIAssetUrlInfo = {
  previewUrl: string
  fullUrl: string
  fullUrlCached: boolean
  mimeType: string
  videoDuration?: string
  inlineVideoPlayable: boolean
}

export type UIPaymentInfo = {
  accountId?: stellar1.AccountID
  amountDescription: string
  worth: string
  worthAtSendTime: string
  delta: stellar1.BalanceDelta
  note: string
  paymentId: stellar1.PaymentID
  status: stellar1.PaymentStatus
  statusDescription: string
  statusDetail: string
  showCancel: boolean
  fromUsername: string
  toUsername: string
  sourceAmount: string
  sourceAsset: stellar1.Asset
  issuerDescription: string
}

export type UIRequestInfo = {
  amount: string
  amountDescription: string
  asset?: stellar1.Asset
  currency?: stellar1.OutsideCurrencyCode
  worthAtRequestTime: string
  status: stellar1.RequestStatus
}

export enum MessageUnboxedState {
  VALID = 'valid',
  ERROR = 'error',
  OUTBOX = 'outbox',
  PLACEHOLDER = 'placeholder',
  JOURNEYCARD = 'journeycard',
}

export enum UITextDecorationTyp {
  PAYMENT = 'payment',
  ATMENTION = 'atmention',
  CHANNELNAMEMENTION = 'channelnamemention',
  MAYBEMENTION = 'maybemention',
  LINK = 'link',
  MAILTO = 'mailto',
  KBFSPATH = 'kbfspath',
}

export enum UIMaybeMentionStatus {
  UNKNOWN = 'unknown',
  USER = 'user',
  TEAM = 'team',
  NOTHING = 'nothing',
}

export type UILinkDecoration = {
  display: string
  url: string
  punycode: string
}

export enum UIChatThreadStatusTyp {
  NONE = 'none',
  SERVER = 'server',
  VALIDATING = 'validating',
  VALIDATED = 'validated',
}

export type UIChatThreadStatus =
  | {typ: UIChatThreadStatusTyp.NONE}
  | {typ: UIChatThreadStatusTyp.SERVER}
  | {typ: UIChatThreadStatusTyp.VALIDATING; VALIDATING: number}
  | {typ: UIChatThreadStatusTyp.VALIDATED}
  | {
      typ: Exclude<
        UIChatThreadStatusTyp,
        UIChatThreadStatusTyp.NONE | UIChatThreadStatusTyp.SERVER | UIChatThreadStatusTyp.VALIDATING | UIChatThreadStatusTyp.VALIDATED
      >
    }

export type UIChatPayment = {
  username: string
  fullName: string
  xlmAmount: string
  error?: string
  displayAmount?: string
}

export type GiphySearchResult = {
  targetUrl: string
  previewUrl: string
  previewWidth: number
  previewHeight: number
  previewIsVideo: boolean
}

export enum UICoinFlipPhase {
  COMMITMENT = 'commitment',
  REVEALS = 'reveals',
  COMPLETE = 'complete',
  ERROR = 'error',
}

export type UICoinFlipErrorParticipant = {
  user: string
  device: string
}

export enum UICoinFlipErrorTyp {
  GENERIC = 'generic',
  ABSENTEE = 'absentee',
  TIMEOUT = 'timeout',
  ABORTED = 'aborted',
  DUPREG = 'dupreg',
  DUPCOMMITCOMPLETE = 'dupcommitcomplete',
  DUPREVEAL = 'dupreveal',
  COMMITMISMATCH = 'commitmismatch',
}

export enum UICoinFlipResultTyp {
  NUMBER = 'number',
  SHUFFLE = 'shuffle',
  DECK = 'deck',
  HANDS = 'hands',
  COIN = 'coin',
}

export type UICoinFlipHand = {
  target: string
  hand: number[] | null
}

export type UICoinFlipParticipant = {
  uid: string
  deviceId: string
  username: string
  deviceName: string
  commitment: string
  reveal?: string
}

export type UICommandMarkdown = {
  body: string
  title?: string
}

export type LocationWatchID = number

export enum UIWatchPositionPerm {
  BASE = 'base',
  ALWAYS = 'always',
}

export enum UICommandStatusDisplayTyp {
  STATUS = 'status',
  WARNING = 'warning',
  ERROR = 'error',
}

export enum UICommandStatusActionTyp {
  APPSETTINGS = 'appsettings',
}

export enum UIBotCommandsUpdateStatus {
  UPTODATE = 'uptodate',
  UPDATING = 'updating',
  FAILED = 'failed',
  BLANK = 'blank',
}

export type ConversationCommand = {
  description: string
  name: string
  usage: string
  hasHelpText: boolean
  username?: string
}

export enum ConversationCommandGroupsTyp {
  BUILTIN = 'builtin',
  CUSTOM = 'custom',
  NONE = 'none',
}

export enum ConversationBuiltinCommandTyp {
  NONE = 'none',
  ADHOC = 'adhoc',
  SMALLTEAM = 'smallteam',
  BIGTEAM = 'bigteam',
  BIGTEAMGENERAL = 'bigteamgeneral',
}

export type ThreadID = Buffer

export type MessageID = number

export type TLFConvOrdinal = number

export type TopicID = Buffer

export type ConversationID = Buffer

export type TLFID = Buffer

export type Hash = Buffer

export type InboxVers = number

export type LocalConversationVers = number

export type ConversationVers = number

export type OutboxID = Buffer

export type TopicNameState = Buffer

export type FlipGameID = Buffer

export enum ConversationExistence {
  ACTIVE = 'active',
  ARCHIVED = 'archived',
  DELETED = 'deleted',
  ABANDONED = 'abandoned',
}

export enum ConversationMembersType {
  KBFS = 'kbfs',
  TEAM = 'team',
  IMPTEAMNATIVE = 'impteamnative',
  IMPTEAMUPGRADE = 'impteamupgrade',
}

export enum SyncInboxResType {
  CURRENT = 'current',
  INCREMENTAL = 'incremental',
  CLEAR = 'clear',
}

export enum MessageType {
  NONE = 'none',
  TEXT = 'text',
  ATTACHMENT = 'attachment',
  EDIT = 'edit',
  DELETE = 'delete',
  METADATA = 'metadata',
  TLFNAME = 'tlfname',
  HEADLINE = 'headline',
  ATTACHMENTUPLOADED = 'attachmentuploaded',
  JOIN = 'join',
  LEAVE = 'leave',
  SYSTEM = 'system',
  DELETEHISTORY = 'deletehistory',
  REACTION = 'reaction',
  SENDPAYMENT = 'sendpayment',
  REQUESTPAYMENT = 'requestpayment',
  UNFURL = 'unfurl',
  FLIP = 'flip',
  PIN = 'pin',
}

export enum TopicType {
  NONE = 'none',
  CHAT = 'chat',
  DEV = 'dev',
  KBFSFILEEDIT = 'kbfsfileedit',
}

export enum TeamType {
  NONE = 'none',
  SIMPLE = 'simple',
  COMPLEX = 'complex',
}

export enum NotificationKind {
  GENERIC = 'generic',
  ATMENTION = 'atmention',
}

export enum GlobalAppNotificationSetting {
  NEWMESSAGES = 'newmessages',
  PLAINTEXTMOBILE = 'plaintextmobile',
  PLAINTEXTDESKTOP = 'plaintextdesktop',
  DEFAULTSOUNDMOBILE = 'defaultsoundmobile',
  DISABLETYPING = 'disabletyping',
}

export type GlobalAppNotificationSettings = {
  settings: {[key: string]: boolean}
}

export enum ConversationStatus {
  UNFILED = 'unfiled',
  FAVORITE = 'favorite',
  IGNORED = 'ignored',
  BLOCKED = 'blocked',
  MUTED = 'muted',
  REPORTED = 'reported',
}

export type KBFSPath = {
  startIndex: number
  rawPath: string
  standardPath: string
  pathInfo: keybase1.KBFSPathInfo
}

export enum ConversationMemberStatus {
  ACTIVE = 'active',
  REMOVED = 'removed',
  LEFT = 'left',
  PREVIEW = 'preview',
  RESET = 'reset',
  NEVER_JOINED = 'never_joined',
}

export type Pagination = {
  next?: Buffer
  previous?: Buffer
  num: number
  last?: boolean
  forceFirstPage?: boolean
}

export type RateLimit = {
  name: string
  callsRemaining: number
  windowReset: number
  maxCalls: number
}

export type ConversationFinalizeInfo = {
  resetUser: string
  resetDate: string
  resetFull: string
  resetTimestamp: gregor1.Time
}

export type ConversationResolveInfo = {
  newTlfName: string
}

export type ConversationNotificationInfo = {
  channelWide: boolean
  settings: {[key: string]: {[key: string]: boolean}}
}

export type ConversationJourneycardInfo = {
  w: boolean
}

export type ConversationCreatorInfo = {
  ctime: gregor1.Time
  uid: gregor1.UID
}

export type ConversationCreatorInfoLocal = {
  ctime: gregor1.Time
  username: string
}

export type ConversationMinWriterRoleInfo = {
  uid: gregor1.UID
  role: keybase1.TeamRole
}

export type MsgEphemeralMetadata = {
  l: gregor1.DurationSec
  g: keybase1.EkGeneration
  u?: string
}

export type EncryptedData = {
  v: number
  e: Buffer
  n: Buffer
}

export type SignEncryptedData = {
  v: number
  e: Buffer
  n: Buffer
}

export type SealedData = {
  v: number
  e: Buffer
  n: Buffer
}

export type SignatureInfo = {
  v: number
  s: Buffer
  k: Buffer
}

export type MerkleRoot = {
  seqno: number
  hash: Buffer
}

export enum InboxResType {
  VERSIONHIT = 'versionhit',
  FULL = 'full',
}

export enum RetentionPolicyType {
  NONE = 'none',
  RETAIN = 'retain',
  EXPIRE = 'expire',
  INHERIT = 'inherit',
  EPHEMERAL = 'ephemeral',
}

export type RpRetain = {}

export type RpExpire = {
  age: gregor1.DurationSec
}

export type RpInherit = {}

export type RpEphemeral = {
  age: gregor1.DurationSec
}

export enum GetThreadReason {
  GENERAL = 'general',
  PUSH = 'push',
  FOREGROUND = 'foreground',
  BACKGROUNDCONVLOAD = 'backgroundconvload',
  FIXRETRY = 'fixretry',
  PREPARE = 'prepare',
  SEARCHER = 'searcher',
  INDEXED_SEARCH = 'indexed_search',
  KBFSFILEACTIVITY = 'kbfsfileactivity',
  COINFLIP = 'coinflip',
  BOTCOMMANDS = 'botcommands',
}

export enum ReIndexingMode {
  NONE = 'none',
  PRESEARCH_SYNC = 'presearch_sync',
  POSTSEARCH_SYNC = 'postsearch_sync',
}

export type EmptyStruct = {}

export type ChatSearchMatch = {
  startIndex: number
  endIndex: number
  match: string
}

export type ChatSearchInboxDone = {
  numHits: number
  numConvs: number
  percentIndexed: number
  delegated: boolean
}

export type ChatSearchIndexStatus = {
  percentIndexed: number
}

export type AssetMetadataImage = {
  width: number
  height: number
  audioAmps: number[] | null
}

export type AssetMetadataVideo = {
  width: number
  height: number
  durationMs: number
  isAudio: boolean
}

export enum AssetMetadataType {
  NONE = 'none',
  IMAGE = 'image',
  VIDEO = 'video',
}

export enum AssetTag {
  PRIMARY = 'primary',
}

export enum BotCommandsAdvertisementTyp {
  PUBLIC = 'public',
  TLFID_MEMBERS = 'tlfid_members',
  TLFID_CONVS = 'tlfid_convs',
}

export type TeamMember = {
  uid: gregor1.UID
  role: keybase1.TeamRole
  status: keybase1.TeamMemberStatus
}

export type VersionKind = string

export enum TextPaymentResultTyp {
  SENT = 'sent',
  ERROR = 'error',
}

export type TextPaymentResult =
  | {resultTyp: TextPaymentResultTyp.ERROR; ERROR: string}
  | {resultTyp: TextPaymentResultTyp.SENT; SENT: stellar1.PaymentID}
  | {resultTyp: Exclude<TextPaymentResultTyp, TextPaymentResultTyp.ERROR | TextPaymentResultTyp.SENT>}

export type KnownUserMention = {
  text: string
  uid: gregor1.UID
}

export type KnownTeamMention = {
  name: string
  channel: string
}

export type MaybeMention = {
  name: string
  channel: string
}

export type Coordinate = {
  lat: number
  lon: number
  accuracy: number
}

export type LiveLocation = {
  endTime: gregor1.Time
}

export type MessageConversationMetadata = {
  conversationTitle: string
}

export type MessageHeadline = {
  headline: string
}

export enum MessageSystemType {
  ADDEDTOTEAM = 'addedtoteam',
  INVITEADDEDTOTEAM = 'inviteaddedtoteam',
  COMPLEXTEAM = 'complexteam',
  CREATETEAM = 'createteam',
  GITPUSH = 'gitpush',
  CHANGEAVATAR = 'changeavatar',
  CHANGERETENTION = 'changeretention',
  BULKADDTOCONV = 'bulkaddtoconv',
  SBSRESOLVE = 'sbsresolve',
}

export type MessageSystemAddedToTeam = {
  team: string
  adder: string
  addee: string
  role: keybase1.TeamRole
  bulkAdds: string[] | null
  owners: string[] | null
  admins: string[] | null
  writers: string[] | null
  readers: string[] | null
  bots: string[] | null
  restrictedBots: string[] | null
}

export type MessageSystemInviteAddedToTeam = {
  team: string
  inviter: string
  invitee: string
  adder: string
  inviteType: keybase1.TeamInviteCategory
  role: keybase1.TeamRole
}

export type MessageSystemComplexTeam = {
  team: string
}

export type MessageSystemCreateTeam = {
  team: string
  creator: string
}

export type MessageSystemGitPush = {
  team: string
  pusher: string
  repoName: string
  repoId: keybase1.RepoID
  refs: keybase1.GitRefMetadata[] | null
  pushType: keybase1.GitPushType
  previousRepoName: string
}

export type MessageSystemChangeAvatar = {
  team: string
  user: string
}

export type MessageSystemBulkAddToConv = {
  usernames: string[] | null
}

export type MessageSystemSbsResolve = {
  assertionService: string
  assertionUsername: string
  prover: string
}

export type MessageJoin = {
  joiners: string[] | null
  leavers: string[] | null
}

export type MessageLeave = {}

export type MessageSendPayment = {
  paymentId: stellar1.PaymentID
}

export type MessageRequestPayment = {
  requestId: stellar1.KeybaseRequestID
  note: string
}

export enum OutboxStateType {
  SENDING = 'sending',
  ERROR = 'error',
}

export enum OutboxErrorType {
  MISC = 'misc',
  OFFLINE = 'offline',
  IDENTIFY = 'identify',
  TOOLONG = 'toolong',
  DUPLICATE = 'duplicate',
  EXPIRED = 'expired',
  TOOMANYATTEMPTS = 'toomanyattempts',
  ALREADY_DELETED = 'already_deleted',
  UPLOADFAILED = 'uploadfailed',
  RESTRICTEDBOT = 'restrictedbot',
  MINWRITER = 'minwriter',
}

export enum HeaderPlaintextVersion {
  V1 = 'v1',
  V2 = 'v2',
  V3 = 'v3',
  V4 = 'v4',
  V5 = 'v5',
  V6 = 'v6',
  V7 = 'v7',
  V8 = 'v8',
  V9 = 'v9',
  V10 = 'v10',
}

export type HeaderPlaintextMetaInfo = {
  crit: boolean
}

export enum BodyPlaintextVersion {
  V1 = 'v1',
  V2 = 'v2',
  V3 = 'v3',
  V4 = 'v4',
  V5 = 'v5',
  V6 = 'v6',
  V7 = 'v7',
  V8 = 'v8',
  V9 = 'v9',
  V10 = 'v10',
}

export type BodyPlaintextMetaInfo = {
  crit: boolean
}

export enum MessageUnboxedErrorType {
  MISC = 'misc',
  BADVERSION_CRITICAL = 'badversion_critical',
  BADVERSION = 'badversion',
  IDENTIFY = 'identify',
  EPHEMERAL = 'ephemeral',
  PAIRWISE_MISSING = 'pairwise_missing',
}

export enum JourneycardType {
  WELCOME = 'welcome',
  POPULAR_CHANNELS = 'popular_channels',
  ADD_PEOPLE = 'add_people',
  CREATE_CHANNELS = 'create_channels',
  MSG_ATTENTION = 'msg_attention',
  UNUSED = 'unused',
  CHANNEL_INACTIVE = 'channel_inactive',
  MSG_NO_ANSWER = 'msg_no_answer',
}

export type UnreadFirstNumLimit = {
  numRead: number
  atLeast: number
  atMost: number
}

export type ConversationLocalParticipant = {
  username: string
  inConvName: boolean
  fullname?: string
  contactName?: string
}

export enum ConversationErrorType {
  PERMANENT = 'permanent',
  MISSINGINFO = 'missinginfo',
  SELFREKEYNEEDED = 'selfrekeyneeded',
  OTHERREKEYNEEDED = 'otherrekeyneeded',
  IDENTIFY = 'identify',
  TRANSIENT = 'transient',
  NONE = 'none',
}

export type ConversationErrorRekey = {
  tlfName: string
  tlfPublic: boolean
  rekeyers: string[] | null
  writerNames: string[] | null
  readerNames: string[] | null
}

export type ConversationMinWriterRoleInfoLocal = {
  changedBy: string
  cannotWrite: boolean
  role: keybase1.TeamRole
}

export enum MessageIDControlMode {
  OLDERMESSAGES = 'oldermessages',
  NEWERMESSAGES = 'newermessages',
  CENTERED = 'centered',
  UNREADLINE = 'unreadline',
}

export enum GetThreadNonblockCbMode {
  FULL = 'full',
  INCREMENTAL = 'incremental',
}

export enum GetThreadNonblockPgMode {
  DEFAULT = 'default',
  SERVER = 'server',
}

export enum InboxLayoutReselectMode {
  DEFAULT = 'default',
  FORCE = 'force',
}

export enum PreviewLocationTyp {
  URL = 'url',
  FILE = 'file',
  BYTES = 'bytes',
}

export type PreviewLocation =
  | {ltyp: PreviewLocationTyp.URL; URL: string}
  | {ltyp: PreviewLocationTyp.FILE; FILE: string}
  | {ltyp: PreviewLocationTyp.BYTES; BYTES: Buffer}
  | {ltyp: Exclude<PreviewLocationTyp, PreviewLocationTyp.URL | PreviewLocationTyp.FILE | PreviewLocationTyp.BYTES>}

export enum UnfurlPromptAction {
  ALWAYS = 'always',
  NEVER = 'never',
  ACCEPT = 'accept',
  NOTNOW = 'notnow',
  ONETIME = 'onetime',
}

export type UnfurlPromptResult =
  | {actionType: UnfurlPromptAction.ALWAYS}
  | {actionType: UnfurlPromptAction.NEVER}
  | {actionType: UnfurlPromptAction.NOTNOW}
  | {actionType: UnfurlPromptAction.ACCEPT; ACCEPT: string}
  | {actionType: UnfurlPromptAction.ONETIME; ONETIME: string}
  | {
      actionType: Exclude<
        UnfurlPromptAction,
        | UnfurlPromptAction.ALWAYS
        | UnfurlPromptAction.NEVER
        | UnfurlPromptAction.NOTNOW
        | UnfurlPromptAction.ACCEPT
        | UnfurlPromptAction.ONETIME
      >
    }

export enum GalleryItemTyp {
  MEDIA = 'media',
  LINK = 'link',
  DOC = 'doc',
}

export type UserBotExtendedDescription = {
  title: string
  desktopBody: string
  mobileBody: string
}

export enum SnippetDecoration {
  NONE = 'none',
  PENDING_MESSAGE = 'pending_message',
  FAILED_PENDING_MESSAGE = 'failed_pending_message',
  EXPLODING_MESSAGE = 'exploding_message',
  EXPLODED_MESSAGE = 'exploded_message',
  AUDIO_ATTACHMENT = 'audio_attachment',
  VIDEO_ATTACHMENT = 'video_attachment',
  PHOTO_ATTACHMENT = 'photo_attachment',
  FILE_ATTACHMENT = 'file_attachment',
  STELLAR_RECEIVED = 'stellar_received',
  STELLAR_SENT = 'stellar_sent',
  PINNED_MESSAGE = 'pinned_message',
}

export enum ChatActivitySource {
  LOCAL = 'local',
  REMOTE = 'remote',
}

export enum ChatActivityType {
  RESERVED = 'reserved',
  INCOMING_MESSAGE = 'incoming_message',
  READ_MESSAGE = 'read_message',
  NEW_CONVERSATION = 'new_conversation',
  SET_STATUS = 'set_status',
  FAILED_MESSAGE = 'failed_message',
  MEMBERS_UPDATE = 'members_update',
  SET_APP_NOTIFICATION_SETTINGS = 'set_app_notification_settings',
  TEAMTYPE = 'teamtype',
  EXPUNGE = 'expunge',
  EPHEMERAL_PURGE = 'ephemeral_purge',
  REACTION_UPDATE = 'reaction_update',
  MESSAGES_UPDATED = 'messages_updated',
}

export type TyperInfo = {
  uid: keybase1.UID
  username: string
  deviceId: keybase1.DeviceID
  deviceName: string
  deviceType: string
}

export enum StaleUpdateType {
  CLEAR = 'clear',
  NEWACTIVITY = 'newactivity',
}

export enum MessageBoxedVersion {
  VNONE = 'vnone',
  V1 = 'v1',
  V2 = 'v2',
  V3 = 'v3',
  V4 = 'v4',
}

export enum ChannelMention {
  NONE = 'none',
  ALL = 'all',
  HERE = 'here',
}

export type S3Params = {
  bucket: string
  objectKey: string
  accessKey: string
  acl: string
  regionName: string
  regionEndpoint: string
  regionBucketEndpoint: string
}

export type ServerCacheVers = {
  inboxVers: number
  bodiesVers: number
}

export enum SyncAllProtVers {
  V0 = 'v0',
  V1 = 'v1',
}

export enum SyncAllNotificationType {
  STATE = 'state',
  INCREMENTAL = 'incremental',
}

export type SyncAllNotificationRes =
  | {typ: SyncAllNotificationType.STATE; STATE: gregor1.State}
  | {typ: SyncAllNotificationType.INCREMENTAL; INCREMENTAL: gregor1.SyncResult}
  | {typ: Exclude<SyncAllNotificationType, SyncAllNotificationType.STATE | SyncAllNotificationType.INCREMENTAL>}

export enum ExternalAPIKeyTyp {
  GOOGLEMAPS = 'googlemaps',
  GIPHY = 'giphy',
}

export type ExternalAPIKey =
  | {typ: ExternalAPIKeyTyp.GOOGLEMAPS; GOOGLEMAPS: string}
  | {typ: ExternalAPIKeyTyp.GIPHY; GIPHY: string}
  | {typ: Exclude<ExternalAPIKeyTyp, ExternalAPIKeyTyp.GOOGLEMAPS | ExternalAPIKeyTyp.GIPHY>}

export type BotInfoHashVers = number

export type CommandConvVers = number

export enum BotInfoResponseTyp {
  UPTODATE = 'uptodate',
  INFO = 'info',
}

export type BotInfoHash = Buffer

export enum UnfurlType {
  GENERIC = 'generic',
  YOUTUBE = 'youtube',
  GIPHY = 'giphy',
  MAPS = 'maps',
}

export type UnfurlVideo = {
  url: string
  mimeType: string
  height: number
  width: number
}

export type UnfurlYoutubeRaw = {}

export type UnfurlYoutube = {}

export type UnfurlImageDisplay = {
  url: string
  height: number
  width: number
  isVideo: boolean
}

export type UnfurlYoutubeDisplay = {}

export enum UnfurlMode {
  ALWAYS = 'always',
  NEVER = 'never',
  WHITELISTED = 'whitelisted',
}

export type MsgFlipContent = {
  text: string
  gameId: FlipGameIDStr
  flipConvId: ConvIDStr
  userMentions: KnownUserMention[] | null
  teamMentions: KnownTeamMention[] | null
}

/**
 * A chat conversation. This is essentially a chat channel plus some additional metadata.
 */
export type ConvSummary = {
  id: ConvIDStr
  channel: ChatChannel
  isDefaultConv: boolean
  unread: boolean
  activeAt: number
  activeAtMs: number
  memberStatus: string
  resetUsers?: string[] | null
  finalizeInfo?: ConversationFinalizeInfo
  supersedes?: ConvIDStr[] | null
  supersededBy?: ConvIDStr[] | null
  error?: string
}

export type SendRes = {
  message: string
  id?: MessageID
  outboxId?: OutboxID
  identifyFailures?: keybase1.TLFIdentifyFailure[] | null
  ratelimits?: RateLimitRes[] | null
}

export type NewConvRes = {
  id: ConvIDStr
  identifyFailures?: keybase1.TLFIdentifyFailure[] | null
  ratelimits?: RateLimitRes[] | null
}

export type EmptyRes = {
  ratelimits?: RateLimitRes[] | null
}

export type ResetConvMemberAPI = {
  conversationId: ConvIDStr
  username: string
}

export type GetDeviceInfoRes = {
  devices: DeviceInfo[] | null
}

export type UIInboxSmallTeamRow = {
  convId: ConvIDStr
  name: string
  time: gregor1.Time
  snippet?: string
  snippetDecoration: SnippetDecoration
  draft?: string
  isMuted: boolean
  isTeam: boolean
}

export type UIInboxBigTeamChannelRow = {
  convId: ConvIDStr
  teamname: string
  channelname: string
  draft?: string
  isMuted: boolean
}

export type UIInboxBigTeamLabelRow = {
  name: string
  id: TLFIDStr
}

export type UIInboxReselectInfo = {
  oldConvId: ConvIDStr
  newConvId?: ConvIDStr
}

export type UnverifiedInboxUIItemMetadata = {
  channelName: string
  headline: string
  headlineDecorated: string
  snippet: string
  snippetDecoration: SnippetDecoration
  writerNames: string[] | null
  resetParticipants: string[] | null
}

export type UIParticipant = {
  type: UIParticipantType
  assertion: string
  inConvName: boolean
  fullName?: string
  contactName?: string
}

export type UIChannelNameMention = {
  name: string
  convId: ConvIDStr
}

export type UIMessageJourneycard = {
  ordinal: number
  cardType: JourneycardType
  highlightMsgId: MessageID
  openTeam: boolean
}

export type UITeamMention = {
  inTeam: boolean
  open: boolean
  description?: string
  numMembers?: number
  publicAdmins: string[] | null
  convId?: ConvIDStr
}

export type UIChatSearchConvHit = {
  convId: ConvIDStr
  teamType: TeamType
  name: string
  mtime: gregor1.Time
}

export type UIChatPaymentSummary = {
  xlmTotal: string
  displayTotal: string
  payments: UIChatPayment[] | null
}

export type GiphySearchResults = {
  results: GiphySearchResult[] | null
  galleryUrl: string
}

export type UICoinFlipAbsenteeError = {
  absentees: UICoinFlipErrorParticipant[] | null
}

export type UICoinFlipResult =
  | {typ: UICoinFlipResultTyp.NUMBER; NUMBER: string}
  | {typ: UICoinFlipResultTyp.SHUFFLE; SHUFFLE: string[]}
  | {typ: UICoinFlipResultTyp.DECK; DECK: number[]}
  | {typ: UICoinFlipResultTyp.HANDS; HANDS: UICoinFlipHand[]}
  | {typ: UICoinFlipResultTyp.COIN; COIN: boolean}
  | {
      typ: Exclude<
        UICoinFlipResultTyp,
        | UICoinFlipResultTyp.NUMBER
        | UICoinFlipResultTyp.SHUFFLE
        | UICoinFlipResultTyp.DECK
        | UICoinFlipResultTyp.HANDS
        | UICoinFlipResultTyp.COIN
      >
    }

export type ConversationCommandGroupsCustom = {
  commands: ConversationCommand[] | null
}

export type InboxVersInfo = {
  uid: gregor1.UID
  vers: InboxVers
}

export type ConversationMember = {
  uid: gregor1.UID
  convId: ConversationID
  topicType: TopicType
}

export type ConversationIDMessageIDPair = {
  convId: ConversationID
  msgId: MessageID
}

export type ChannelNameMention = {
  convId: ConversationID
  topicName: string
}

export type GetInboxQuery = {
  convId?: ConversationID
  topicType?: TopicType
  tlfId?: TLFID
  tlfVisibility?: keybase1.TLFVisibility
  before?: gregor1.Time
  after?: gregor1.Time
  oneChatTypePerTlf?: boolean
  topicName?: string
  status: ConversationStatus[] | null
  memberStatus: ConversationMemberStatus[] | null
  existences: ConversationExistence[] | null
  membersTypes: ConversationMembersType[] | null
  convIDs: ConversationID[] | null
  unreadOnly: boolean
  readOnly: boolean
  computeActiveList: boolean
  summarizeMaxMsgs: boolean
  skipBgLoads: boolean
  allowUnseenQuery: boolean
}

export type ConversationIDTriple = {
  tlfid: TLFID
  topicType: TopicType
  topicId: TopicID
}

export type Expunge = {
  upto: MessageID
  basis: MessageID
}

export type ConversationReaderInfo = {
  mtime: gregor1.Time
  readMsgid: MessageID
  maxMsgid: MessageID
  status: ConversationMemberStatus
  untrustedTeamRole: keybase1.TeamRole
  jc?: ConversationJourneycardInfo
}

export type ConversationSettings = {
  mwr?: ConversationMinWriterRoleInfo
}

export type MessageSummary = {
  msgId: MessageID
  messageType: MessageType
  tlfName: string
  tlfPublic: boolean
  ctime: gregor1.Time
}

export type Reaction = {
  ctime: gregor1.Time
  reactionMsgId: MessageID
}

export type MessageServerHeader = {
  messageId: MessageID
  supersededBy: MessageID
  r: MessageID[] | null
  u: MessageID[] | null
  replies: MessageID[] | null
  ctime: gregor1.Time
  n: gregor1.Time
  rt?: gregor1.Time
}

export type MessagePreviousPointer = {
  id: MessageID
  hash: Hash
}

export type OutboxInfo = {
  prev: MessageID
  composeTime: gregor1.Time
}

export type EphemeralPurgeInfo = {
  c: ConversationID
  a: boolean
  n: gregor1.Time
  e: MessageID
}

export type RetentionPolicy =
  | {typ: RetentionPolicyType.RETAIN; RETAIN: RpRetain}
  | {typ: RetentionPolicyType.EXPIRE; EXPIRE: RpExpire}
  | {typ: RetentionPolicyType.INHERIT; INHERIT: RpInherit}
  | {typ: RetentionPolicyType.EPHEMERAL; EPHEMERAL: RpEphemeral}
  | {
      typ: Exclude<
        RetentionPolicyType,
        RetentionPolicyType.RETAIN | RetentionPolicyType.EXPIRE | RetentionPolicyType.INHERIT | RetentionPolicyType.EPHEMERAL
      >
    }

export type SearchOpts = {
  isRegex: boolean
  sentBy: string
  sentTo: string
  matchMentions: boolean
  sentBefore: gregor1.Time
  sentAfter: gregor1.Time
  maxHits: number
  maxMessages: number
  beforeContext: number
  afterContext: number
  initialPagination?: Pagination
  reindexMode: ReIndexingMode
  maxConvsSearched: number
  maxConvsHit: number
  convId?: ConversationID
  maxNameConvs: number
}

export type AssetMetadata =
  | {assetType: AssetMetadataType.IMAGE; IMAGE: AssetMetadataImage}
  | {assetType: AssetMetadataType.VIDEO; VIDEO: AssetMetadataVideo}
  | {assetType: Exclude<AssetMetadataType, AssetMetadataType.IMAGE | AssetMetadataType.VIDEO>}

export type UnreadUpdate = {
  convId: ConversationID
  unreadMessages: number
  unreadNotifyingMessages: {[key: string]: number}
  diff: boolean
}

export type TLFFinalizeUpdate = {
  finalizeInfo: ConversationFinalizeInfo
  convIDs: ConversationID[] | null
  inboxVers: InboxVers
}

export type TLFResolveUpdate = {
  convId: ConversationID
  inboxVers: InboxVers
}

export type RemoteUserTypingUpdate = {
  uid: gregor1.UID
  deviceId: gregor1.DeviceID
  convId: ConversationID
  typing: boolean
  teamType: TeamType
}

export type TeamMemberRoleUpdate = {
  tlfId: TLFID
  role: keybase1.TeamRole
}

export type ConversationUpdate = {
  convId: ConversationID
  existence: ConversationExistence
}

export type TeamChannelUpdate = {
  teamId: TLFID
}

export type KBFSImpteamUpgradeUpdate = {
  convId: ConversationID
  inboxVers: InboxVers
  topicType: TopicType
}

export type SubteamRenameUpdate = {
  convIDs: ConversationID[] | null
  inboxVers: InboxVers
}

export type TextPayment = {
  username: string
  paymentText: string
  result: TextPaymentResult
}

export type MessageEdit = {
  messageId: MessageID
  body: string
  userMentions: KnownUserMention[] | null
  teamMentions: KnownTeamMention[] | null
}

export type MessageDelete = {
  messageIDs: MessageID[] | null
}

export type MessageFlip = {
  text: string
  gameId: FlipGameID
  flipConvId: ConversationID
  userMentions: KnownUserMention[] | null
  teamMentions: KnownTeamMention[] | null
}

export type MessagePin = {
  msgId: MessageID
}

export type MessageDeleteHistory = {
  upto: MessageID
}

export type MessageReaction = {
  m: MessageID
  b: string
}

export type SenderPrepareOptions = {
  skipTopicNameState: boolean
  replyTo?: MessageID
}

export type SenderSendOptions = {
  joinMentionsAs?: ConversationMemberStatus
}

export type OutboxStateError = {
  message: string
  typ: OutboxErrorType
}

export type HeaderPlaintextUnsupported = {
  mi: HeaderPlaintextMetaInfo
}

export type BodyPlaintextUnsupported = {
  mi: BodyPlaintextMetaInfo
}

export type MessageUnboxedError = {
  errType: MessageUnboxedErrorType
  errMsg: string
  internalErrMsg: string
  versionKind: VersionKind
  versionNumber: number
  isCritical: boolean
  senderUsername: string
  senderDeviceName: string
  senderDeviceType: string
  messageId: MessageID
  messageType: MessageType
  ctime: gregor1.Time
  isEphemeral: boolean
  explodedBy?: string
  etime: gregor1.Time
  botUsername: string
}

export type MessageUnboxedPlaceholder = {
  messageId: MessageID
  hidden: boolean
}

export type MessageUnboxedJourneycard = {
  prevId: MessageID
  ordinal: number
  cardType: JourneycardType
  highlightMsgId: MessageID
  openTeam: boolean
}

export type ConversationSettingsLocal = {
  minWriterRoleInfo?: ConversationMinWriterRoleInfoLocal
}

export type NonblockFetchRes = {
  offline: boolean
  rateLimits: RateLimit[] | null
  identifyFailures: keybase1.TLFIdentifyFailure[] | null
}

export type MessageIDControl = {
  pivot?: MessageID
  mode: MessageIDControlMode
  num: number
}

export type UnreadlineRes = {
  offline: boolean
  rateLimits: RateLimit[] | null
  identifyFailures: keybase1.TLFIdentifyFailure[] | null
  unreadlineId?: MessageID
}

export type NameQuery = {
  name: string
  tlfId?: TLFID
  membersType: ConversationMembersType
}

export type PostLocalRes = {
  rateLimits: RateLimit[] | null
  messageId: MessageID
  identifyFailures: keybase1.TLFIdentifyFailure[] | null
}

export type PostLocalNonblockRes = {
  rateLimits: RateLimit[] | null
  outboxId: OutboxID
  identifyFailures: keybase1.TLFIdentifyFailure[] | null
}

export type EditTarget = {
  messageId?: MessageID
  outboxId?: OutboxID
}

export type SetConversationStatusLocalRes = {
  rateLimits: RateLimit[] | null
  identifyFailures: keybase1.TLFIdentifyFailure[] | null
}

export type GetInboxSummaryForCLILocalQuery = {
  topicType: TopicType
  after: string
  before: string
  visibility: keybase1.TLFVisibility
  status: ConversationStatus[] | null
  convIDs: ConversationID[] | null
  unreadFirst: boolean
  unreadFirstLimit: UnreadFirstNumLimit
  activitySortedLimit: number
}

export type DownloadAttachmentLocalRes = {
  rateLimits: RateLimit[] | null
  identifyFailures: keybase1.TLFIdentifyFailure[] | null
}

export type DownloadFileAttachmentLocalRes = {
  filePath: string
  rateLimits: RateLimit[] | null
  identifyFailures: keybase1.TLFIdentifyFailure[] | null
}

export type MarkAsReadLocalRes = {
  offline: boolean
  rateLimits: RateLimit[] | null
}

export type JoinLeaveConversationLocalRes = {
  offline: boolean
  rateLimits: RateLimit[] | null
}

export type DeleteConversationLocalRes = {
  offline: boolean
  rateLimits: RateLimit[] | null
}

export type SetAppNotificationSettingsLocalRes = {
  offline: boolean
  rateLimits: RateLimit[] | null
}

export type AppNotificationSettingLocal = {
  deviceType: keybase1.DeviceType
  kind: NotificationKind
  enabled: boolean
}

export type ResetConvMember = {
  username: string
  uid: gregor1.UID
  conv: ConversationID
}

export type ProfileSearchConvStats = {
  err: string
  convName: string
  minConvId: MessageID
  maxConvId: MessageID
  numMissing: number
  numMessages: number
  indexSizeDisk: number
  indexSizeMem: number
  durationMsec: gregor1.DurationMsec
  percentIndexed: number
}

export type BuiltinCommandGroup = {
  typ: ConversationBuiltinCommandTyp
  commands: ConversationCommand[] | null
}

export type UserBotCommandOutput = {
  name: string
  description: string
  usage: string
  extendedDescription?: UserBotExtendedDescription
  username: string
}

export type UserBotCommandInput = {
  name: string
  description: string
  usage: string
  extendedDescription?: UserBotExtendedDescription
}

export type AdvertiseBotCommandsLocalRes = {
  rateLimits: RateLimit[] | null
}

export type ClearBotCommandsLocalRes = {
  rateLimits: RateLimit[] | null
}

export type PinMessageRes = {
  rateLimits: RateLimit[] | null
}

export type AddBotConvSearchHit = {
  name: string
  convId: ConversationID
  isTeam: boolean
  parts: string[] | null
}

export type LocalMtimeUpdate = {
  convId: ConversationID
  mtime: gregor1.Time
}

export type SetAppNotificationSettingsInfo = {
  convId: ConversationID
  settings: ConversationNotificationInfo
}

export type MemberInfo = {
  member: string
  status: ConversationMemberStatus
}

export type ConvTypingUpdate = {
  convId: ConversationID
  typers: TyperInfo[] | null
}

export type ConversationStaleUpdate = {
  convId: ConversationID
  updateType: StaleUpdateType
}

export type NewConversationRemoteRes = {
  convId: ConversationID
  createdComplexTeam: boolean
  rateLimit?: RateLimit
}

export type MarkAsReadRes = {
  rateLimit?: RateLimit
}

export type SetConversationStatusRes = {
  rateLimit?: RateLimit
}

export type GetUnreadlineRemoteRes = {
  unreadlineId?: MessageID
  rateLimit?: RateLimit
}

export type JoinLeaveConversationRemoteRes = {
  rateLimit?: RateLimit
}

export type DeleteConversationRemoteRes = {
  rateLimit?: RateLimit
}

export type GetMessageBeforeRes = {
  msgId: MessageID
  rateLimit?: RateLimit
}

export type SetAppNotificationSettingsRes = {
  rateLimit?: RateLimit
}

export type SetRetentionRes = {
  rateLimit?: RateLimit
}

export type SetConvMinWriterRoleRes = {
  rateLimit?: RateLimit
}

export type ServerNowRes = {
  rateLimit?: RateLimit
  now: gregor1.Time
}

export type RemoteBotCommandsAdvertisementPublic = {
  convId: ConversationID
}

export type RemoteBotCommandsAdvertisementTLFID = {
  convId: ConversationID
  tlfId: TLFID
}

export type BotCommandConv = {
  uid: gregor1.UID
  untrustedTeamRole: keybase1.TeamRole
  convId: ConversationID
  vers: CommandConvVers
  mtime: gregor1.Time
}

export type AdvertiseBotCommandsRes = {
  rateLimit?: RateLimit
}

export type ClearBotCommandsRes = {
  rateLimit?: RateLimit
}

export type UnfurlGenericRaw = {
  title: string
  url: string
  siteName: string
  faviconUrl?: string
  imageUrl?: string
  video?: UnfurlVideo
  publishTime?: number
  description?: string
}

export type UnfurlGiphyRaw = {
  imageUrl?: string
  video?: UnfurlVideo
  faviconUrl?: string
}

export type UnfurlMapsRaw = {
  title: string
  url: string
  siteName: string
  imageUrl: string
  historyImageUrl?: string
  description: string
  coord: Coordinate
  time: gregor1.Time
  liveLocationEndTime?: gregor1.Time
  liveLocationDone: boolean
}

export type UnfurlGenericMapInfo = {
  coord: Coordinate
  time: gregor1.Time
  liveLocationEndTime?: gregor1.Time
  isLiveLocationDone: boolean
}

export type UnfurlGiphyDisplay = {
  favicon?: UnfurlImageDisplay
  image?: UnfurlImageDisplay
  video?: UnfurlImageDisplay
}

export type UnfurlSettings = {
  mode: UnfurlMode
  whitelist: {[key: string]: boolean}
}

export type UnfurlSettingsDisplay = {
  mode: UnfurlMode
  whitelist: string[] | null
}

export type ChatList = {
  conversations: ConvSummary[] | null
  offline: boolean
  identifyFailures?: keybase1.TLFIdentifyFailure[] | null
  ratelimits?: RateLimitRes[] | null
}

export type ListCommandsRes = {
  commands: UserBotCommandOutput[] | null
  ratelimits?: RateLimitRes[] | null
}

export type ConvNotification = {
  type: string
  conv?: ConvSummary
  error?: string
}

export type AdvertiseCommandAPIParam = {
  type: string
  commands: UserBotCommandInput[] | null
  teamName?: string
}

export type GetResetConvMembersRes = {
  members: ResetConvMemberAPI[] | null
  rateLimits: RateLimitRes[] | null
}

export type UIInboxBigTeamRow =
  | {state: UIInboxBigTeamRowTyp.LABEL; LABEL: UIInboxBigTeamLabelRow}
  | {state: UIInboxBigTeamRowTyp.CHANNEL; CHANNEL: UIInboxBigTeamChannelRow}
  | {state: Exclude<UIInboxBigTeamRowTyp, UIInboxBigTeamRowTyp.LABEL | UIInboxBigTeamRowTyp.CHANNEL>}

export type UIMaybeMentionInfo =
  | {status: UIMaybeMentionStatus.UNKNOWN}
  | {status: UIMaybeMentionStatus.USER}
  | {status: UIMaybeMentionStatus.TEAM; TEAM: UITeamMention}
  | {status: UIMaybeMentionStatus.NOTHING}
  | {
      status: Exclude<
        UIMaybeMentionStatus,
        UIMaybeMentionStatus.UNKNOWN | UIMaybeMentionStatus.USER | UIMaybeMentionStatus.TEAM | UIMaybeMentionStatus.NOTHING
      >
    }

export type UITextDecoration =
  | {typ: UITextDecorationTyp.PAYMENT; PAYMENT: TextPayment}
  | {typ: UITextDecorationTyp.ATMENTION; ATMENTION: string}
  | {typ: UITextDecorationTyp.CHANNELNAMEMENTION; CHANNELNAMEMENTION: UIChannelNameMention}
  | {typ: UITextDecorationTyp.MAYBEMENTION; MAYBEMENTION: MaybeMention}
  | {typ: UITextDecorationTyp.LINK; LINK: UILinkDecoration}
  | {typ: UITextDecorationTyp.MAILTO; MAILTO: UILinkDecoration}
  | {typ: UITextDecorationTyp.KBFSPATH; KBFSPATH: KBFSPath}
  | {
      typ: Exclude<
        UITextDecorationTyp,
        | UITextDecorationTyp.PAYMENT
        | UITextDecorationTyp.ATMENTION
        | UITextDecorationTyp.CHANNELNAMEMENTION
        | UITextDecorationTyp.MAYBEMENTION
        | UITextDecorationTyp.LINK
        | UITextDecorationTyp.MAILTO
        | UITextDecorationTyp.KBFSPATH
      >
    }

export type UIChatSearchConvHits = {
  hits: UIChatSearchConvHit[] | null
  unreadMatches: boolean
}

export type UICoinFlipError =
  | {typ: UICoinFlipErrorTyp.GENERIC; GENERIC: string}
  | {typ: UICoinFlipErrorTyp.ABSENTEE; ABSENTEE: UICoinFlipAbsenteeError}
  | {typ: UICoinFlipErrorTyp.TIMEOUT}
  | {typ: UICoinFlipErrorTyp.ABORTED}
  | {typ: UICoinFlipErrorTyp.DUPREG; DUPREG: UICoinFlipErrorParticipant}
  | {typ: UICoinFlipErrorTyp.DUPCOMMITCOMPLETE; DUPCOMMITCOMPLETE: UICoinFlipErrorParticipant}
  | {typ: UICoinFlipErrorTyp.DUPREVEAL; DUPREVEAL: UICoinFlipErrorParticipant}
  | {typ: UICoinFlipErrorTyp.COMMITMISMATCH; COMMITMISMATCH: UICoinFlipErrorParticipant}
  | {
      typ: Exclude<
        UICoinFlipErrorTyp,
        | UICoinFlipErrorTyp.GENERIC
        | UICoinFlipErrorTyp.ABSENTEE
        | UICoinFlipErrorTyp.TIMEOUT
        | UICoinFlipErrorTyp.ABORTED
        | UICoinFlipErrorTyp.DUPREG
        | UICoinFlipErrorTyp.DUPCOMMITCOMPLETE
        | UICoinFlipErrorTyp.DUPREVEAL
        | UICoinFlipErrorTyp.COMMITMISMATCH
      >
    }

export type ConversationCommandGroups =
  | {typ: ConversationCommandGroupsTyp.BUILTIN; BUILTIN: ConversationBuiltinCommandTyp}
  | {typ: ConversationCommandGroupsTyp.CUSTOM; CUSTOM: ConversationCommandGroupsCustom}
  | {typ: ConversationCommandGroupsTyp.NONE}
  | {
      typ: Exclude<
        ConversationCommandGroupsTyp,
        ConversationCommandGroupsTyp.BUILTIN | ConversationCommandGroupsTyp.CUSTOM | ConversationCommandGroupsTyp.NONE
      >
    }

export type ConversationIDMessageIDPairs = {
  pairs: ConversationIDMessageIDPair[] | null
}

export type ReactionMap = {
  reactions: {[key: string]: {[key: string]: Reaction}}
}

export type MessageClientHeader = {
  conv: ConversationIDTriple
  tlfName: string
  tlfPublic: boolean
  messageType: MessageType
  supersedes: MessageID
  kbfsCryptKeysUsed?: boolean
  deletes: MessageID[] | null
  prev: MessagePreviousPointer[] | null
  deleteHistory?: MessageDeleteHistory
  sender: gregor1.UID
  senderDevice: gregor1.DeviceID
  merkleRoot?: MerkleRoot
  outboxId?: OutboxID
  outboxInfo?: OutboxInfo
  em?: MsgEphemeralMetadata
  pm: {[key: string]: Buffer}
  b?: gregor1.UID
}

export type MessageClientHeaderVerified = {
  conv: ConversationIDTriple
  tlfName: string
  tlfPublic: boolean
  messageType: MessageType
  prev: MessagePreviousPointer[] | null
  sender: gregor1.UID
  senderDevice: gregor1.DeviceID
  kbfsCryptKeysUsed?: boolean
  merkleRoot?: MerkleRoot
  outboxId?: OutboxID
  outboxInfo?: OutboxInfo
  em?: MsgEphemeralMetadata
  rt: gregor1.Time
  pm: boolean
  b?: gregor1.UID
}

export type Asset = {
  filename: string
  region: string
  endpoint: string
  bucket: string
  path: string
  size: number
  mimeType: string
  encHash: Hash
  key: Buffer
  verifyKey: Buffer
  title: string
  nonce: Buffer
  metadata: AssetMetadata
  tag: AssetTag
}

export type GenericPayload = {
  action: string
  inboxVers: InboxVers
  convId: ConversationID
  topicType: TopicType
  unreadUpdate?: UnreadUpdate
}

export type NewConversationPayload = {
  action: string
  convId: ConversationID
  inboxVers: InboxVers
  topicType: TopicType
  unreadUpdate?: UnreadUpdate
}

export type ReadMessagePayload = {
  action: string
  convId: ConversationID
  msgId: MessageID
  inboxVers: InboxVers
  topicType: TopicType
  unreadUpdate?: UnreadUpdate
}

export type SetStatusPayload = {
  action: string
  convId: ConversationID
  status: ConversationStatus
  inboxVers: InboxVers
  topicType: TopicType
  unreadUpdate?: UnreadUpdate
}

export type TeamTypePayload = {
  action: string
  convId: ConversationID
  teamType: TeamType
  inboxVers: InboxVers
  topicType: TopicType
  unreadUpdate?: UnreadUpdate
}

export type SetAppNotificationSettingsPayload = {
  action: string
  convId: ConversationID
  inboxVers: InboxVers
  settings: ConversationNotificationInfo
  topicType: TopicType
  unreadUpdate?: UnreadUpdate
}

export type ExpungePayload = {
  action: string
  convId: ConversationID
  inboxVers: InboxVers
  expunge: Expunge
  maxMsgs: MessageSummary[] | null
  topicType: TopicType
  unreadUpdate?: UnreadUpdate
}

export type UpdateConversationMembership = {
  inboxVers: InboxVers
  teamMemberRoleUpdate?: TeamMemberRoleUpdate
  joined: ConversationMember[] | null
  removed: ConversationMember[] | null
  reset: ConversationMember[] | null
  previewed: ConversationID[] | null
  unreadUpdate?: UnreadUpdate
  unreadUpdates: UnreadUpdate[] | null
}

export type UpdateConversations = {
  inboxVers: InboxVers
  convUpdates: ConversationUpdate[] | null
}

export type SetConvRetentionUpdate = {
  inboxVers: InboxVers
  convId: ConversationID
  policy: RetentionPolicy
}

export type SetTeamRetentionUpdate = {
  inboxVers: InboxVers
  teamId: keybase1.TeamID
  policy: RetentionPolicy
}

export type SetConvSettingsUpdate = {
  inboxVers: InboxVers
  convId: ConversationID
  convSettings?: ConversationSettings
}

export type MessageText = {
  body: string
  payments: TextPayment[] | null
  replyTo?: MessageID
  replyToUid?: gregor1.UID
  userMentions: KnownUserMention[] | null
  teamMentions: KnownTeamMention[] | null
  liveLocation?: LiveLocation
}

export type MessageSystemChangeRetention = {
  isTeam: boolean
  isInherit: boolean
  membersType: ConversationMembersType
  policy: RetentionPolicy
  user: string
}

export type OutboxState =
  | {state: OutboxStateType.SENDING; SENDING: number}
  | {state: OutboxStateType.ERROR; ERROR: OutboxStateError}
  | {state: Exclude<OutboxStateType, OutboxStateType.SENDING | OutboxStateType.ERROR>}

export type HeaderPlaintextV1 = {
  conv: ConversationIDTriple
  tlfName: string
  tlfPublic: boolean
  messageType: MessageType
  prev: MessagePreviousPointer[] | null
  sender: gregor1.UID
  senderDevice: gregor1.DeviceID
  kbfsCryptKeysUsed?: boolean
  bodyHash: Hash
  outboxInfo?: OutboxInfo
  outboxId?: OutboxID
  headerSignature?: SignatureInfo
  merkleRoot?: MerkleRoot
  em?: MsgEphemeralMetadata
  b?: gregor1.UID
}

export type GetThreadQuery = {
  markAsRead: boolean
  messageTypes: MessageType[] | null
  disableResolveSupersedes: boolean
  enableDeletePlaceholders: boolean
  disablePostProcessThread: boolean
  before?: gregor1.Time
  after?: gregor1.Time
  messageIdControl?: MessageIDControl
}

export type GetInboxLocalQuery = {
  name?: NameQuery
  topicName?: string
  convIDs: ConversationID[] | null
  topicType?: TopicType
  tlfVisibility?: keybase1.TLFVisibility
  before?: gregor1.Time
  after?: gregor1.Time
  oneChatTypePerTlf?: boolean
  status: ConversationStatus[] | null
  memberStatus: ConversationMemberStatus[] | null
  unreadOnly: boolean
  readOnly: boolean
  computeActiveList: boolean
}

export type MakePreviewRes = {
  mimeType: string
  previewMimeType?: string
  location?: PreviewLocation
  metadata?: AssetMetadata
  baseMetadata?: AssetMetadata
}

export type GetAllResetConvMembersRes = {
  members: ResetConvMember[] | null
  rateLimits: RateLimit[] | null
}

export type StaticConfig = {
  deletableByDeleteHistory: MessageType[] | null
  builtinCommands: BuiltinCommandGroup[] | null
}

export type AdvertiseCommandsParam = {
  typ: BotCommandsAdvertisementTyp
  commands: UserBotCommandInput[] | null
  teamName?: string
}

export type ListBotCommandsLocalRes = {
  commands: UserBotCommandOutput[] | null
  rateLimits: RateLimit[] | null
}

export type MembersUpdateInfo = {
  convId: ConversationID
  members: MemberInfo[] | null
}

export type ExpungeInfo = {
  convId: ConversationID
  expunge: Expunge
}

export type PostRemoteRes = {
  msgHeader: MessageServerHeader
  rateLimit?: RateLimit
}

export type UnreadUpdateFull = {
  ignore: boolean
  inboxVers: InboxVers
  inboxSyncStatus: SyncInboxResType
  updates: UnreadUpdate[] | null
}

export type SweepRes = {
  foundTask: boolean
  deletedMessages: boolean
  expunge: Expunge
}

export type RemoteBotCommandsAdvertisement =
  | {typ: BotCommandsAdvertisementTyp.PUBLIC; PUBLIC: RemoteBotCommandsAdvertisementPublic}
  | {typ: BotCommandsAdvertisementTyp.TLFID_MEMBERS; TLFID_MEMBERS: RemoteBotCommandsAdvertisementTLFID}
  | {typ: BotCommandsAdvertisementTyp.TLFID_CONVS; TLFID_CONVS: RemoteBotCommandsAdvertisementTLFID}
  | {
      typ: Exclude<
        BotCommandsAdvertisementTyp,
        BotCommandsAdvertisementTyp.PUBLIC | BotCommandsAdvertisementTyp.TLFID_MEMBERS | BotCommandsAdvertisementTyp.TLFID_CONVS
      >
    }

export type BotInfo = {
  serverHashVers: BotInfoHashVers
  clientHashVers: BotInfoHashVers
  commandConvs: BotCommandConv[] | null
}

export type UnfurlRaw =
  | {unfurlType: UnfurlType.GENERIC; GENERIC: UnfurlGenericRaw}
  | {unfurlType: UnfurlType.YOUTUBE; YOUTUBE: UnfurlYoutubeRaw}
  | {unfurlType: UnfurlType.GIPHY; GIPHY: UnfurlGiphyRaw}
  | {unfurlType: UnfurlType.MAPS; MAPS: UnfurlMapsRaw}
  | {unfurlType: Exclude<UnfurlType, UnfurlType.GENERIC | UnfurlType.YOUTUBE | UnfurlType.GIPHY | UnfurlType.MAPS>}

export type UnfurlGenericDisplay = {
  title: string
  url: string
  siteName: string
  favicon?: UnfurlImageDisplay
  media?: UnfurlImageDisplay
  publishTime?: number
  description?: string
  mapInfo?: UnfurlGenericMapInfo
}

export type UIInboxLayout = {
  totalSmallTeams: number
  smallTeams: UIInboxSmallTeamRow[] | null
  bigTeams: UIInboxBigTeamRow[] | null
  reselectInfo?: UIInboxReselectInfo
  widgetList: UIInboxSmallTeamRow[] | null
}

export type UICoinFlipStatus = {
  gameId: FlipGameIDStr
  phase: UICoinFlipPhase
  progressText: string
  resultText: string
  commitmentVisualization: string
  revealVisualization: string
  participants: UICoinFlipParticipant[] | null
  errorInfo?: UICoinFlipError
  resultInfo?: UICoinFlipResult
}

export type MessageSystem =
  | {systemType: MessageSystemType.ADDEDTOTEAM; ADDEDTOTEAM: MessageSystemAddedToTeam}
  | {systemType: MessageSystemType.INVITEADDEDTOTEAM; INVITEADDEDTOTEAM: MessageSystemInviteAddedToTeam}
  | {systemType: MessageSystemType.COMPLEXTEAM; COMPLEXTEAM: MessageSystemComplexTeam}
  | {systemType: MessageSystemType.CREATETEAM; CREATETEAM: MessageSystemCreateTeam}
  | {systemType: MessageSystemType.GITPUSH; GITPUSH: MessageSystemGitPush}
  | {systemType: MessageSystemType.CHANGEAVATAR; CHANGEAVATAR: MessageSystemChangeAvatar}
  | {systemType: MessageSystemType.CHANGERETENTION; CHANGERETENTION: MessageSystemChangeRetention}
  | {systemType: MessageSystemType.BULKADDTOCONV; BULKADDTOCONV: MessageSystemBulkAddToConv}
  | {systemType: MessageSystemType.SBSRESOLVE; SBSRESOLVE: MessageSystemSbsResolve}
  | {
      systemType: Exclude<
        MessageSystemType,
        | MessageSystemType.ADDEDTOTEAM
        | MessageSystemType.INVITEADDEDTOTEAM
        | MessageSystemType.COMPLEXTEAM
        | MessageSystemType.CREATETEAM
        | MessageSystemType.GITPUSH
        | MessageSystemType.CHANGEAVATAR
        | MessageSystemType.CHANGERETENTION
        | MessageSystemType.BULKADDTOCONV
        | MessageSystemType.SBSRESOLVE
      >
    }

export type MessageAttachment = {
  object: Asset
  preview?: Asset
  previews: Asset[] | null
  metadata: Buffer
  uploaded: boolean
}

export type MessageAttachmentUploaded = {
  messageId: MessageID
  object: Asset
  previews: Asset[] | null
  metadata: Buffer
}

export type HeaderPlaintext =
  | {version: HeaderPlaintextVersion.V1; V1: HeaderPlaintextV1}
  | {version: HeaderPlaintextVersion.V2; V2: HeaderPlaintextUnsupported}
  | {version: HeaderPlaintextVersion.V3; V3: HeaderPlaintextUnsupported}
  | {version: HeaderPlaintextVersion.V4; V4: HeaderPlaintextUnsupported}
  | {version: HeaderPlaintextVersion.V5; V5: HeaderPlaintextUnsupported}
  | {version: HeaderPlaintextVersion.V6; V6: HeaderPlaintextUnsupported}
  | {version: HeaderPlaintextVersion.V7; V7: HeaderPlaintextUnsupported}
  | {version: HeaderPlaintextVersion.V8; V8: HeaderPlaintextUnsupported}
  | {version: HeaderPlaintextVersion.V9; V9: HeaderPlaintextUnsupported}
  | {version: HeaderPlaintextVersion.V10; V10: HeaderPlaintextUnsupported}
  | {
      version: Exclude<
        HeaderPlaintextVersion,
        | HeaderPlaintextVersion.V1
        | HeaderPlaintextVersion.V2
        | HeaderPlaintextVersion.V3
        | HeaderPlaintextVersion.V4
        | HeaderPlaintextVersion.V5
        | HeaderPlaintextVersion.V6
        | HeaderPlaintextVersion.V7
        | HeaderPlaintextVersion.V8
        | HeaderPlaintextVersion.V9
        | HeaderPlaintextVersion.V10
      >
    }

export type PostFileAttachmentArg = {
  conversationId: ConversationID
  tlfName: string
  visibility: keybase1.TLFVisibility
  filename: string
  title: string
  metadata: Buffer
  identifyBehavior: keybase1.TLFIdentifyBehavior
  callerPreview?: MakePreviewRes
  outboxId?: OutboxID
  ephemeralLifetime?: gregor1.DurationSec
}

export type ReactionUpdate = {
  reactions: ReactionMap
  targetMsgId: MessageID
}

export type MessageBoxed = {
  version: MessageBoxedVersion
  serverHeader?: MessageServerHeader
  clientHeader: MessageClientHeader
  headerCiphertext: SealedData
  bodyCiphertext: EncryptedData
  verifyKey: Buffer
  keyGeneration: number
}

export type BotInfoResponse =
  | {typ: BotInfoResponseTyp.UPTODATE}
  | {typ: BotInfoResponseTyp.INFO; INFO: BotInfo}
  | {typ: Exclude<BotInfoResponseTyp, BotInfoResponseTyp.UPTODATE | BotInfoResponseTyp.INFO>}

export type UnfurlGeneric = {
  title: string
  url: string
  siteName: string
  favicon?: Asset
  image?: Asset
  publishTime?: number
  description?: string
  mapInfo?: UnfurlGenericMapInfo
}

export type UnfurlGiphy = {
  favicon?: Asset
  image?: Asset
  video?: Asset
}

export type UnfurlDisplay =
  | {unfurlType: UnfurlType.GENERIC; GENERIC: UnfurlGenericDisplay}
  | {unfurlType: UnfurlType.YOUTUBE; YOUTUBE: UnfurlYoutubeDisplay}
  | {unfurlType: UnfurlType.GIPHY; GIPHY: UnfurlGiphyDisplay}
  | {unfurlType: Exclude<UnfurlType, UnfurlType.GENERIC | UnfurlType.YOUTUBE | UnfurlType.GIPHY>}

export type UIMessageUnfurlInfo = {
  unfurlMessageId: MessageID
  url: string
  unfurl: UnfurlDisplay
  isCollapsed: boolean
}

export type NewMessagePayload = {
  action: string
  convId: ConversationID
  message: MessageBoxed
  inboxVers: InboxVers
  topicType: TopicType
  unreadUpdate?: UnreadUpdate
  untrustedTeamRole: keybase1.TeamRole
  maxMsgs: MessageSummary[] | null
}

export type LoadFlipRes = {
  status: UICoinFlipStatus
  rateLimits: RateLimit[] | null
  identifyFailures: keybase1.TLFIdentifyFailure[] | null
}

export type ReactionUpdateNotif = {
  convId: ConversationID
  userReacjis: keybase1.UserReacjis
  reactionUpdates: ReactionUpdate[] | null
}

export type ThreadViewBoxed = {
  messages: MessageBoxed[] | null
  pagination?: Pagination
}

export type GetMessagesRemoteRes = {
  msgs: MessageBoxed[] | null
  rateLimit?: RateLimit
}

export type GetBotInfoRes = {
  response: BotInfoResponse
  rateLimit?: RateLimit
}

export type Unfurl =
  | {unfurlType: UnfurlType.GENERIC; GENERIC: UnfurlGeneric}
  | {unfurlType: UnfurlType.YOUTUBE; YOUTUBE: UnfurlYoutube}
  | {unfurlType: UnfurlType.GIPHY; GIPHY: UnfurlGiphy}
  | {unfurlType: Exclude<UnfurlType, UnfurlType.GENERIC | UnfurlType.YOUTUBE | UnfurlType.GIPHY>}

export type GetThreadRemoteRes = {
  thread: ThreadViewBoxed
  membersType: ConversationMembersType
  visibility: keybase1.TLFVisibility
  rateLimit?: RateLimit
}

export type UnfurlResult = {
  unfurl: Unfurl
  url: string
}

export type MessageUnfurl = {
  unfurl: UnfurlResult
  messageId: MessageID
}

export type MsgContent = {
  type: string
  text?: MessageText
  attachment?: MessageAttachment
  edit?: MessageEdit
  reaction?: MessageReaction
  delete?: MessageDelete
  metadata?: MessageConversationMetadata
  headline?: MessageHeadline
  attachmentUploaded?: MessageAttachmentUploaded
  system?: MessageSystem
  sendPayment?: MessageSendPayment
  requestPayment?: MessageRequestPayment
  unfurl?: MessageUnfurl
  flip?: MsgFlipContent
}

export type MessageBody =
  | {messageType: MessageType.TEXT; TEXT: MessageText}
  | {messageType: MessageType.ATTACHMENT; ATTACHMENT: MessageAttachment}
  | {messageType: MessageType.EDIT; EDIT: MessageEdit}
  | {messageType: MessageType.DELETE; DELETE: MessageDelete}
  | {messageType: MessageType.METADATA; METADATA: MessageConversationMetadata}
  | {messageType: MessageType.HEADLINE; HEADLINE: MessageHeadline}
  | {messageType: MessageType.ATTACHMENTUPLOADED; ATTACHMENTUPLOADED: MessageAttachmentUploaded}
  | {messageType: MessageType.JOIN; JOIN: MessageJoin}
  | {messageType: MessageType.LEAVE; LEAVE: MessageLeave}
  | {messageType: MessageType.SYSTEM; SYSTEM: MessageSystem}
  | {messageType: MessageType.DELETEHISTORY; DELETEHISTORY: MessageDeleteHistory}
  | {messageType: MessageType.REACTION; REACTION: MessageReaction}
  | {messageType: MessageType.SENDPAYMENT; SENDPAYMENT: MessageSendPayment}
  | {messageType: MessageType.REQUESTPAYMENT; REQUESTPAYMENT: MessageRequestPayment}
  | {messageType: MessageType.UNFURL; UNFURL: MessageUnfurl}
  | {messageType: MessageType.FLIP; FLIP: MessageFlip}
  | {messageType: MessageType.PIN; PIN: MessagePin}
  | {
      messageType: Exclude<
        MessageType,
        | MessageType.TEXT
        | MessageType.ATTACHMENT
        | MessageType.EDIT
        | MessageType.DELETE
        | MessageType.METADATA
        | MessageType.HEADLINE
        | MessageType.ATTACHMENTUPLOADED
        | MessageType.JOIN
        | MessageType.LEAVE
        | MessageType.SYSTEM
        | MessageType.DELETEHISTORY
        | MessageType.REACTION
        | MessageType.SENDPAYMENT
        | MessageType.REQUESTPAYMENT
        | MessageType.UNFURL
        | MessageType.FLIP
        | MessageType.PIN
      >
    }

export type MsgSummary = {
  id: MessageID
  conversationId: ConvIDStr
  channel: ChatChannel
  sender: MsgSender
  sentAt: number
  sentAtMs: number
  content: MsgContent
  prev: MessagePreviousPointer[] | null
  unread: boolean
  revokedDevice?: boolean
  offline?: boolean
  kbfsEncrypted?: boolean
  isEphemeral?: boolean
  isEphemeralExpired?: boolean
  eTime?: gregor1.Time
  reactions?: ReactionMap
  hasPairwiseMacs?: boolean
  atMentionUsernames?: string[] | null
  channelMention?: string
  channelNameMentions?: UIChannelNameMention[] | null
  botInfo?: MsgBotInfo
}

export type BodyPlaintextV1 = {
  messageBody: MessageBody
}

export type BodyPlaintextV2 = {
  messageBody: MessageBody
  mi: BodyPlaintextMetaInfo
}

export type MessagePlaintext = {
  clientHeader: MessageClientHeader
  messageBody: MessageBody
  supersedesOutboxId?: OutboxID
}

export type Message = {
  msg?: MsgSummary
  error?: string
}

export type MsgNotification = {
  type: string
  source: string
  msg?: MsgSummary
  error?: string
  pagination?: UIPagination
}

export type BodyPlaintext =
  | {version: BodyPlaintextVersion.V1; V1: BodyPlaintextV1}
  | {version: BodyPlaintextVersion.V2; V2: BodyPlaintextV2}
  | {version: BodyPlaintextVersion.V3; V3: BodyPlaintextUnsupported}
  | {version: BodyPlaintextVersion.V4; V4: BodyPlaintextUnsupported}
  | {version: BodyPlaintextVersion.V5; V5: BodyPlaintextUnsupported}
  | {version: BodyPlaintextVersion.V6; V6: BodyPlaintextUnsupported}
  | {version: BodyPlaintextVersion.V7; V7: BodyPlaintextUnsupported}
  | {version: BodyPlaintextVersion.V8; V8: BodyPlaintextUnsupported}
  | {version: BodyPlaintextVersion.V9; V9: BodyPlaintextUnsupported}
  | {version: BodyPlaintextVersion.V10; V10: BodyPlaintextUnsupported}
  | {
      version: Exclude<
        BodyPlaintextVersion,
        | BodyPlaintextVersion.V1
        | BodyPlaintextVersion.V2
        | BodyPlaintextVersion.V3
        | BodyPlaintextVersion.V4
        | BodyPlaintextVersion.V5
        | BodyPlaintextVersion.V6
        | BodyPlaintextVersion.V7
        | BodyPlaintextVersion.V8
        | BodyPlaintextVersion.V9
        | BodyPlaintextVersion.V10
      >
    }

export type Thread = {
  messages: Message[] | null
  pagination?: Pagination
  offline?: boolean
  identifyFailures?: keybase1.TLFIdentifyFailure[] | null
  ratelimits?: RateLimitRes[] | null
}
