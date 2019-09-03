/*
 * chat.1
 *
 * Auto-generated to TypeScript types by avdl-compiler v1.4.1 (https://github.com/keybase/node-avdl-compiler)
 * Input files:
 * - ../client/protocol/avdl/chat1/api.avdl
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
  public: boolean
  membersType: string
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
  uid: string
  username?: string
  deviceID: string
  deviceName?: string
}

export type MsgFlipContent = {
  text: string
  gameID: string
  flipConvID: string
  userMentions: KnownUserMention[]
  teamMentions: KnownTeamMention[]
}

export type MsgContent = {
  typeName: string
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

export type MsgSummary = {
  id: MessageID
  convID: string
  channel: ChatChannel
  sender: MsgSender
  sentAt: number
  sentAtMs: number
  content: MsgContent
  prev: MessagePreviousPointer[]
  unread: boolean
  revokedDevice?: boolean
  offline?: boolean
  kbfsEncrypted?: boolean
  isEphemeral?: boolean
  isEphemeralExpired?: boolean
  eTime?: gregor1.Time
  reactions?: ReactionMap
  hasPairwiseMacs?: boolean
  atMentionUsernames?: string[]
  channelMention?: string
  channelNameMentions?: UIChannelNameMention[]
}

export type Message = {
  msg?: MsgSummary
  error?: string
}

export type Thread = {
  messages: Message[]
  pagination?: Pagination
  offline?: boolean
  identifyFailures?: keybase1.TLFIdentifyFailure[]
  rateLimits?: RateLimitRes[]
}

/**
 * A chat conversation. This is essentially a chat channel plus some additional metadata.
 */
export type ConvSummary = {
  id: string
  channel: ChatChannel
  unread: boolean
  activeAt: number
  activeAtMs: number
  memberStatus: string
  resetUsers?: string[]
  finalizeInfo?: ConversationFinalizeInfo
  supersedes?: string[]
  supersededBy?: string[]
  error?: string
}

export type ChatList = {
  conversations: ConvSummary[]
  offline: boolean
  identifyFailures?: keybase1.TLFIdentifyFailure[]
  pagination?: Pagination
  rateLimits?: RateLimitRes[]
}

export type SendRes = {
  message: string
  messageID?: MessageID
  outboxID?: OutboxID
  identifyFailures?: keybase1.TLFIdentifyFailure[]
  rateLimits?: RateLimitRes[]
}

export type SearchInboxResOutput = {
  results?: ChatSearchInboxResults
  identifyFailures?: keybase1.TLFIdentifyFailure[]
  rateLimits?: RateLimitRes[]
}

export type RegexpRes = {
  hits: ChatSearchHit[]
  identifyFailures?: keybase1.TLFIdentifyFailure[]
  rateLimits?: RateLimitRes[]
}

export type NewConvRes = {
  id: string
  identifyFailures?: keybase1.TLFIdentifyFailure[]
  rateLimits?: RateLimitRes[]
}

export type ListCommandsRes = {
  commands: UserBotCommandOutput[]
  rateLimits?: RateLimitRes[]
}

export type EmptyRes = {
  rateLimits?: RateLimitRes[]
}

export type MsgNotification = {
  type: string
  source: string
  msg?: MsgSummary
  error?: string
  pagination?: UIPagination
}

export type UIPagination = {
  next: string
  previous: string
  num: number
  last: boolean
}

export type UnverifiedInboxUIItemMetadata = {
  channelName: string
  headline: string
  headlineDecorated: string
  snippet: string
  snippetDecoration: string
  writerNames: string[]
  resetParticipants: string[]
}

export type UnverifiedInboxUIItem = {
  convID: string
  topicType: TopicType
  isPublic: boolean
  name: string
  visibility: keybase1.TLFVisibility
  status: ConversationStatus
  membersType: ConversationMembersType
  memberStatus: ConversationMemberStatus
  teamType: TeamType
  notifications?: ConversationNotificationInfo
  time: gregor1.Time
  version: ConversationVers
  localVersion: LocalConversationVers
  convRetention?: RetentionPolicy
  teamRetention?: RetentionPolicy
  maxMsgID: MessageID
  maxVisibleMsgID: MessageID
  readMsgID: MessageID
  localMetadata?: UnverifiedInboxUIItemMetadata
  draft?: string
  finalizeInfo?: ConversationFinalizeInfo
  supersedes: ConversationMetadata[]
  supersededBy: ConversationMetadata[]
  commands: ConversationCommandGroups
}

export type UnverifiedInboxUIItems = {
  items: UnverifiedInboxUIItem[]
  pagination?: UIPagination
  offline: boolean
}

export enum UIParticipantType {
  NONE = 'none',
  USER = 'user',
  PHONENO = 'phoneno',
  EMAIL = 'email',
}

export type UIParticipant = {
  type: UIParticipantType
  assertion: string
  fullName?: string
  contactName?: string
}

export type InboxUIItem = {
  convID: string
  topicType: TopicType
  isPublic: boolean
  isEmpty: boolean
  name: string
  snippet: string
  snippetDecoration: string
  channel: string
  headline: string
  headlineDecorated: string
  draft?: string
  visibility: keybase1.TLFVisibility
  participants: UIParticipant[]
  resetParticipants: string[]
  status: ConversationStatus
  membersType: ConversationMembersType
  memberStatus: ConversationMemberStatus
  teamType: TeamType
  time: gregor1.Time
  notifications?: ConversationNotificationInfo
  creatorInfo?: ConversationCreatorInfoLocal
  version: ConversationVers
  localVersion: LocalConversationVers
  maxMsgID: MessageID
  maxVisibleMsgID: MessageID
  readMsgID: MessageID
  convRetention?: RetentionPolicy
  teamRetention?: RetentionPolicy
  convSettings?: ConversationSettingsLocal
  finalizeInfo?: ConversationFinalizeInfo
  supersedes: ConversationMetadata[]
  supersededBy: ConversationMetadata[]
  commands: ConversationCommandGroups
  botCommands: ConversationCommandGroups
}

export type InboxUIItemError = {
  typ: ConversationErrorType
  message: string
  unverifiedTLFName: string
  rekeyInfo?: ConversationErrorRekey
  remoteConv: UnverifiedInboxUIItem
}

export type InboxUIItems = {
  items: InboxUIItem[]
  pagination?: UIPagination
  offline: boolean
}

export type UIChannelNameMention = {
  name: string
  convID: string
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
  accountID?: stellar1.AccountID
  amountDescription: string
  worth: string
  worthAtSendTime: string
  delta: stellar1.BalanceDelta
  note: string
  paymentID: stellar1.PaymentID
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

export type UIMessageUnfurlInfo = {
  unfurlMessageID: MessageID
  url: string
  unfurl: UnfurlDisplay
  isCollapsed: boolean
}

export type UIMessageValid = {
  messageID: MessageID
  ctime: gregor1.Time
  outboxID?: string
  messageBody: MessageBody
  decoratedTextBody?: string
  bodySummary: string
  senderUsername: string
  senderDeviceName: string
  senderDeviceType: string
  senderUID: gregor1.UID
  senderDeviceID: gregor1.DeviceID
  superseded: boolean
  assetUrlInfo?: UIAssetUrlInfo
  senderDeviceRevokedAt?: gregor1.Time
  atMentions: string[]
  channelMention: ChannelMention
  channelNameMentions: UIChannelNameMention[]
  isEphemeral: boolean
  isEphemeralExpired: boolean
  explodedBy?: string
  etime: gregor1.Time
  reactions: ReactionMap
  hasPairwiseMacs: boolean
  paymentInfos: UIPaymentInfo[]
  requestInfo?: UIRequestInfo
  unfurls: UIMessageUnfurlInfo[]
  isCollapsed: boolean
  flipGameID?: string
  isDeleteable: boolean
  isEditable: boolean
  replyTo?: UIMessage
  botUID?: gregor1.UID
}

export type UIMessageOutbox = {
  state: OutboxState
  outboxID: string
  messageType: MessageType
  body: string
  decoratedTextBody?: string
  ctime: gregor1.Time
  ordinal: number
  isEphemeral: boolean
  flipGameID?: string
  replyTo?: UIMessage
  filename: string
  title: string
  preview?: MakePreviewRes
}

export enum MessageUnboxedState {
  VALID = 'valid',
  ERROR = 'error',
  OUTBOX = 'outbox',
  PLACEHOLDER = 'placeholder',
}

export type UIMessage =
  | {state: MessageUnboxedState.VALID; VALID: UIMessageValid | null}
  | {state: MessageUnboxedState.ERROR; ERROR: MessageUnboxedError | null}
  | {state: MessageUnboxedState.OUTBOX; OUTBOX: UIMessageOutbox | null}
  | {state: MessageUnboxedState.PLACEHOLDER; PLACEHOLDER: MessageUnboxedPlaceholder | null}

export type UIMessages = {
  messages: UIMessage[]
  pagination?: UIPagination
}

export type UITeamMention = {
  inTeam: boolean
  open: boolean
  description?: string
  numMembers?: number
  publicAdmins: string[]
  convID?: string
}

export enum UITextDecorationTyp {
  PAYMENT = 'payment',
  ATMENTION = 'atmention',
  CHANNELNAMEMENTION = 'channelnamemention',
  MAYBEMENTION = 'maybemention',
  LINK = 'link',
  MAILTO = 'mailto',
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
}

export type UIMaybeMentionInfo =
  | {status: UIMaybeMentionStatus.UNKNOWN}
  | {status: UIMaybeMentionStatus.USER}
  | {status: UIMaybeMentionStatus.TEAM; TEAM: UITeamMention | null}
  | {status: UIMaybeMentionStatus.NOTHING}

export type UITextDecoration =
  | {typ: UITextDecorationTyp.PAYMENT; PAYMENT: TextPayment | null}
  | {typ: UITextDecorationTyp.ATMENTION; ATMENTION: string | null}
  | {typ: UITextDecorationTyp.CHANNELNAMEMENTION; CHANNELNAMEMENTION: UIChannelNameMention | null}
  | {typ: UITextDecorationTyp.MAYBEMENTION; MAYBEMENTION: MaybeMention | null}
  | {typ: UITextDecorationTyp.LINK; LINK: UILinkDecoration | null}
  | {typ: UITextDecorationTyp.MAILTO; MAILTO: UILinkDecoration | null}

export enum UIChatThreadStatusTyp {
  NONE = 'none',
  SERVER = 'server',
  VALIDATING = 'validating',
  VALIDATED = 'validated',
}

export type UIChatThreadStatus =
  | {typ: UIChatThreadStatusTyp.NONE}
  | {typ: UIChatThreadStatusTyp.SERVER}
  | {typ: UIChatThreadStatusTyp.VALIDATING; VALIDATING: number | null}
  | {typ: UIChatThreadStatusTyp.VALIDATED}

export type UIChatSearchConvHit = {
  convID: string
  teamType: TeamType
  name: string
  mtime: gregor1.Time
}

export type UIChatSearchConvHits = {
  hits: UIChatSearchConvHit[]
  unreadMatches: boolean
}

export type UIChatPayment = {
  username: string
  fullName: string
  xlmAmount: string
  error?: string
  displayAmount?: string
}

export type UIChatPaymentSummary = {
  xlmTotal: string
  displayTotal: string
  payments: UIChatPayment[]
}

export type GiphySearchResult = {
  targetUrl: string
  previewUrl: string
  previewWidth: number
  previewHeight: number
  previewIsVideo: boolean
}

export type GiphySearchResults = {
  results: GiphySearchResult[]
  galleryUrl: string
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

export type UICoinFlipAbsenteeError = {
  absentees: UICoinFlipErrorParticipant[]
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

export type UICoinFlipError =
  | {typ: UICoinFlipErrorTyp.GENERIC; GENERIC: string | null}
  | {typ: UICoinFlipErrorTyp.ABSENTEE; ABSENTEE: UICoinFlipAbsenteeError | null}
  | {typ: UICoinFlipErrorTyp.TIMEOUT}
  | {typ: UICoinFlipErrorTyp.ABORTED}
  | {typ: UICoinFlipErrorTyp.DUPREG; DUPREG: UICoinFlipErrorParticipant | null}
  | {typ: UICoinFlipErrorTyp.DUPCOMMITCOMPLETE; DUPCOMMITCOMPLETE: UICoinFlipErrorParticipant | null}
  | {typ: UICoinFlipErrorTyp.DUPREVEAL; DUPREVEAL: UICoinFlipErrorParticipant | null}
  | {typ: UICoinFlipErrorTyp.COMMITMISMATCH; COMMITMISMATCH: UICoinFlipErrorParticipant | null}

export enum UICoinFlipResultTyp {
  NUMBER = 'number',
  SHUFFLE = 'shuffle',
  DECK = 'deck',
  HANDS = 'hands',
  COIN = 'coin',
}

export type UICoinFlipHand = {
  target: string
  hand: number[]
}

export type UICoinFlipResult =
  | {typ: UICoinFlipResultTyp.NUMBER; NUMBER: string | null}
  | {typ: UICoinFlipResultTyp.SHUFFLE; SHUFFLE: string[] | null}
  | {typ: UICoinFlipResultTyp.DECK; DECK: number[] | null}
  | {typ: UICoinFlipResultTyp.HANDS; HANDS: UICoinFlipHand[] | null}
  | {typ: UICoinFlipResultTyp.COIN; COIN: boolean | null}

export type UICoinFlipParticipant = {
  uid: string
  deviceID: string
  username: string
  deviceName: string
  commitment: string
  reveal?: string
}

export type UICoinFlipStatus = {
  gameID: string
  phase: UICoinFlipPhase
  progressText: string
  resultText: string
  commitmentVisualization: string
  revealVisualization: string
  participants: UICoinFlipParticipant[]
  errorInfo?: UICoinFlipError
  resultInfo?: UICoinFlipResult
}

export type UICommandMarkdown = {
  body: string
  title?: string
}

export type LocationWatchID = number

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

export type ConversationCommandGroupsCustom = {
  commands: ConversationCommand[]
}

export type ConversationCommandGroups =
  | {typ: ConversationCommandGroupsTyp.BUILTIN; BUILTIN: ConversationBuiltinCommandTyp | null}
  | {typ: ConversationCommandGroupsTyp.CUSTOM; CUSTOM: ConversationCommandGroupsCustom | null}
  | {typ: ConversationCommandGroupsTyp.NONE}

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

export type InboxVersInfo = {
  uid: gregor1.UID
  vers: InboxVers
}

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

export type ConversationMember = {
  uid: gregor1.UID
  convID: ConversationID
  topicType: TopicType
}

export type ConversationIDMessageIDPair = {
  convID: ConversationID
  msgID: MessageID
}

export type ConversationIDMessageIDPairs = {
  pairs: ConversationIDMessageIDPair[]
}

export type ChannelNameMention = {
  convID: ConversationID
  topicName: string
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
  next: Buffer
  previous: Buffer
  num: number
  last: boolean
  forceFirstPage: boolean
}

export type RateLimit = {
  name: string
  callsRemaining: number
  windowReset: number
  maxCalls: number
}

export type GetInboxQuery = {
  convID?: ConversationID
  topicType?: TopicType
  tlfID?: TLFID
  tlfVisibility?: keybase1.TLFVisibility
  before?: gregor1.Time
  after?: gregor1.Time
  oneChatTypePerTLF?: boolean
  topicName?: string
  status: ConversationStatus[]
  memberStatus: ConversationMemberStatus[]
  existences: ConversationExistence[]
  membersTypes: ConversationMembersType[]
  convIDs: ConversationID[]
  unreadOnly: boolean
  readOnly: boolean
  computeActiveList: boolean
  summarizeMaxMsgs: boolean
  skipBgLoads: boolean
}

export type ConversationIDTriple = {
  tlfid: TLFID
  topicType: TopicType
  topicID: TopicID
}

export type ConversationFinalizeInfo = {
  resetUser: string
  resetDate: string
  resetFull: string
  resetTimestamp: gregor1.Time
}

export type ConversationResolveInfo = {
  newTLFName: string
}

export type Expunge = {
  upto: MessageID
  basis: MessageID
}

export type ConversationMetadata = {
  idTriple: ConversationIDTriple
  conversationID: ConversationID
  visibility: keybase1.TLFVisibility
  status: ConversationStatus
  membersType: ConversationMembersType
  teamType: TeamType
  existence: ConversationExistence
  version: ConversationVers
  localVersion: LocalConversationVers
  finalizeInfo?: ConversationFinalizeInfo
  supersedes: ConversationMetadata[]
  supersededBy: ConversationMetadata[]
  activeList: gregor1.UID[]
  allList: gregor1.UID[]
  resetList: gregor1.UID[]
}

export type ConversationNotificationInfo = {
  channelWide: boolean
  settings: {[key: string]: {[key: string]: boolean}}
}

export type ConversationReaderInfo = {
  mtime: gregor1.Time
  readMsgid: MessageID
  maxMsgid: MessageID
  status: ConversationMemberStatus
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

export type ConversationSettings = {
  minWriterRoleInfo?: ConversationMinWriterRoleInfo
}

export type Conversation = {
  metadata: ConversationMetadata
  readerInfo?: ConversationReaderInfo
  notifications?: ConversationNotificationInfo
  maxMsgs: MessageBoxed[]
  maxMsgSummaries: MessageSummary[]
  creatorInfo?: ConversationCreatorInfo
  pinnedMsg?: MessageID
  expunge: Expunge
  convRetention?: RetentionPolicy
  teamRetention?: RetentionPolicy
  convSettings?: ConversationSettings
}

export type MessageSummary = {
  msgID: MessageID
  messageType: MessageType
  tlfName: string
  tlfPublic: boolean
  ctime: gregor1.Time
}

export type Reaction = {
  ctime: gregor1.Time
  reactionMsgID: MessageID
}

export type ReactionMap = {
  reactions: {[key: string]: {[key: string]: Reaction}}
}

export type MessageServerHeader = {
  messageID: MessageID
  supersededBy: MessageID
  reactionIDs: MessageID[]
  unfurlIDs: MessageID[]
  replies: MessageID[]
  ctime: gregor1.Time
  now: gregor1.Time
  rtime?: gregor1.Time
}

export type MessagePreviousPointer = {
  id: MessageID
  hash: Hash
}

export type OutboxInfo = {
  prev: MessageID
  composeTime: gregor1.Time
}

export type MsgEphemeralMetadata = {
  lifetime: gregor1.DurationSec
  generation: keybase1.EkGeneration
  explodedBy?: string
}

export type EphemeralPurgeInfo = {
  convID: ConversationID
  isActive: boolean
  nextPurgeTime: gregor1.Time
  minUnexplodedID: MessageID
}

export type MessageClientHeader = {
  conv: ConversationIDTriple
  tlfName: string
  tlfPublic: boolean
  messageType: MessageType
  supersedes: MessageID
  kbfsCryptKeysUsed?: boolean
  deletes: MessageID[]
  prev: MessagePreviousPointer[]
  deleteHistory?: MessageDeleteHistory
  sender: gregor1.UID
  senderDevice: gregor1.DeviceID
  merkleRoot?: MerkleRoot
  outboxID?: OutboxID
  outboxInfo?: OutboxInfo
  ephemeralMetadata?: MsgEphemeralMetadata
  pairwiseMacs: {[key: string]: Buffer}
  botUID?: gregor1.UID
}

export type MessageClientHeaderVerified = {
  conv: ConversationIDTriple
  tlfName: string
  tlfPublic: boolean
  messageType: MessageType
  prev: MessagePreviousPointer[]
  sender: gregor1.UID
  senderDevice: gregor1.DeviceID
  kbfsCryptKeysUsed?: boolean
  merkleRoot?: MerkleRoot
  outboxID?: OutboxID
  outboxInfo?: OutboxInfo
  ephemeralMetadata?: MsgEphemeralMetadata
  rtime: gregor1.Time
  hasPairwiseMacs: boolean
  botUID?: gregor1.UID
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

export type InboxViewFull = {
  vers: InboxVers
  conversations: Conversation[]
  pagination?: Pagination
}

export type InboxView = {rtype: InboxResType.VERSIONHIT} | {rtype: InboxResType.FULL; FULL: InboxViewFull | null}

export enum RetentionPolicyType {
  NONE = 'none',
  RETAIN = 'retain',
  EXPIRE = 'expire',
  INHERIT = 'inherit',
  EPHEMERAL = 'ephemeral',
}

export type RetentionPolicy =
  | {typ: RetentionPolicyType.RETAIN; RETAIN: RpRetain | null}
  | {typ: RetentionPolicyType.EXPIRE; EXPIRE: RpExpire | null}
  | {typ: RetentionPolicyType.INHERIT; INHERIT: RpInherit | null}
  | {typ: RetentionPolicyType.EPHEMERAL; EPHEMERAL: RpEphemeral | null}

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
  convID?: ConversationID
  maxNameConvs: number
}

export type EmptyStruct = {}

export type ChatSearchMatch = {
  startIndex: number
  endIndex: number
  match: string
}

export type ChatSearchHit = {
  beforeMessages: UIMessage[]
  hitMessage: UIMessage
  afterMessages: UIMessage[]
  matches: ChatSearchMatch[]
}

export type ChatSearchInboxHit = {
  convID: ConversationID
  teamType: TeamType
  convName: string
  query: string
  time: gregor1.Time
  hits: ChatSearchHit[]
}

export type ChatSearchInboxResults = {
  hits: ChatSearchInboxHit[]
  percentIndexed: number
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
}

export type AssetMetadataVideo = {
  width: number
  height: number
  durationMs: number
}

export type AssetMetadataAudio = {
  durationMs: number
}

export enum AssetMetadataType {
  NONE = 'none',
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
}

export type AssetMetadata =
  | {assetType: AssetMetadataType.IMAGE; IMAGE: AssetMetadataImage | null}
  | {assetType: AssetMetadataType.VIDEO; VIDEO: AssetMetadataVideo | null}
  | {assetType: AssetMetadataType.AUDIO; AUDIO: AssetMetadataAudio | null}

export enum AssetTag {
  PRIMARY = 'primary',
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

export type GenericPayload = {
  Action: string
  inboxVers: InboxVers
  convID: ConversationID
  topicType: TopicType
  unreadUpdate?: UnreadUpdate
}

export type NewConversationPayload = {
  Action: string
  convID: ConversationID
  inboxVers: InboxVers
  topicType: TopicType
  unreadUpdate?: UnreadUpdate
}

export type NewMessagePayload = {
  Action: string
  convID: ConversationID
  message: MessageBoxed
  inboxVers: InboxVers
  topicType: TopicType
  unreadUpdate?: UnreadUpdate
  maxMsgs: MessageSummary[]
}

export type ReadMessagePayload = {
  Action: string
  convID: ConversationID
  msgID: MessageID
  inboxVers: InboxVers
  topicType: TopicType
  unreadUpdate?: UnreadUpdate
}

export type SetStatusPayload = {
  Action: string
  convID: ConversationID
  status: ConversationStatus
  inboxVers: InboxVers
  topicType: TopicType
  unreadUpdate?: UnreadUpdate
}

export type TeamTypePayload = {
  Action: string
  convID: ConversationID
  teamType: TeamType
  inboxVers: InboxVers
  topicType: TopicType
  unreadUpdate?: UnreadUpdate
}

export type SetAppNotificationSettingsPayload = {
  Action: string
  convID: ConversationID
  inboxVers: InboxVers
  settings: ConversationNotificationInfo
  topicType: TopicType
  unreadUpdate?: UnreadUpdate
}

export type ExpungePayload = {
  Action: string
  convID: ConversationID
  inboxVers: InboxVers
  expunge: Expunge
  maxMsgs: MessageSummary[]
  topicType: TopicType
  unreadUpdate?: UnreadUpdate
}

export type UnreadUpdate = {
  convID: ConversationID
  unreadMessages: number
  unreadNotifyingMessages: {[key: string]: number}
  compatUnreadMessages: number
  diff: boolean
}

export type TLFFinalizeUpdate = {
  finalizeInfo: ConversationFinalizeInfo
  convIDs: ConversationID[]
  inboxVers: InboxVers
}

export type TLFResolveUpdate = {
  convID: ConversationID
  inboxVers: InboxVers
}

export type RemoteUserTypingUpdate = {
  uid: gregor1.UID
  deviceID: gregor1.DeviceID
  convID: ConversationID
  typing: boolean
}

export type UpdateConversationMembership = {
  inboxVers: InboxVers
  joined: ConversationMember[]
  removed: ConversationMember[]
  reset: ConversationMember[]
  previewed: ConversationID[]
  unreadUpdate?: UnreadUpdate
  unreadUpdates: UnreadUpdate[]
}

export type ConversationUpdate = {
  convID: ConversationID
  existence: ConversationExistence
}

export type UpdateConversations = {
  inboxVers: InboxVers
  convUpdates: ConversationUpdate[]
}

export type TeamChannelUpdate = {
  teamID: TLFID
}

export type SetConvRetentionUpdate = {
  inboxVers: InboxVers
  convID: ConversationID
  policy: RetentionPolicy
}

export type SetTeamRetentionUpdate = {
  inboxVers: InboxVers
  teamID: keybase1.TeamID
  policy: RetentionPolicy
}

export type SetConvSettingsUpdate = {
  inboxVers: InboxVers
  convID: ConversationID
  convSettings?: ConversationSettings
}

export type KBFSImpteamUpgradeUpdate = {
  convID: ConversationID
  inboxVers: InboxVers
  topicType: TopicType
}

export type SubteamRenameUpdate = {
  convIDs: ConversationID[]
  inboxVers: InboxVers
}

export type VersionKind = string

export enum TextPaymentResultTyp {
  SENT = 'sent',
  ERROR = 'error',
}

export type TextPaymentResult =
  | {resultTyp: TextPaymentResultTyp.ERROR; ERROR: string | null}
  | {resultTyp: TextPaymentResultTyp.SENT; SENT: stellar1.PaymentID | null}

export type TextPayment = {
  username: string
  paymentText: string
  result: TextPaymentResult
}

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

export type MessageText = {
  body: string
  payments: TextPayment[]
  replyTo?: MessageID
  replyToUID?: gregor1.UID
  userMentions: KnownUserMention[]
  teamMentions: KnownTeamMention[]
  liveLocation?: LiveLocation
}

export type MessageConversationMetadata = {
  conversationTitle: string
}

export type MessageEdit = {
  messageID: MessageID
  body: string
  userMentions: KnownUserMention[]
  teamMentions: KnownTeamMention[]
}

export type MessageDelete = {
  messageIDs: MessageID[]
}

export type MessageHeadline = {
  headline: string
}

export type MessageFlip = {
  text: string
  gameID: FlipGameID
  flipConvID: ConversationID
  userMentions: KnownUserMention[]
  teamMentions: KnownTeamMention[]
}

export type MessagePin = {
  msgID: MessageID
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
}

export type MessageSystemAddedToTeam = {
  team: string
  adder: string
  addee: string
  owners: string[]
  admins: string[]
  writers: string[]
  readers: string[]
  bots: string[]
  restrictedBots: string[]
}

export type MessageSystemInviteAddedToTeam = {
  team: string
  inviter: string
  invitee: string
  adder: string
  inviteType: keybase1.TeamInviteCategory
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
  repoID: keybase1.RepoID
  refs: keybase1.GitRefMetadata[]
  pushType: keybase1.GitPushType
  previousRepoName: string
}

export type MessageSystemChangeAvatar = {
  team: string
  user: string
}

export type MessageSystemChangeRetention = {
  isTeam: boolean
  isInherit: boolean
  membersType: ConversationMembersType
  policy: RetentionPolicy
  user: string
}

export type MessageSystemBulkAddToConv = {
  usernames: string[]
}

export type MessageSystem =
  | {systemType: MessageSystemType.ADDEDTOTEAM; ADDEDTOTEAM: MessageSystemAddedToTeam | null}
  | {systemType: MessageSystemType.INVITEADDEDTOTEAM; INVITEADDEDTOTEAM: MessageSystemInviteAddedToTeam | null}
  | {systemType: MessageSystemType.COMPLEXTEAM; COMPLEXTEAM: MessageSystemComplexTeam | null}
  | {systemType: MessageSystemType.CREATETEAM; CREATETEAM: MessageSystemCreateTeam | null}
  | {systemType: MessageSystemType.GITPUSH; GITPUSH: MessageSystemGitPush | null}
  | {systemType: MessageSystemType.CHANGEAVATAR; CHANGEAVATAR: MessageSystemChangeAvatar | null}
  | {systemType: MessageSystemType.CHANGERETENTION; CHANGERETENTION: MessageSystemChangeRetention | null}
  | {systemType: MessageSystemType.BULKADDTOCONV; BULKADDTOCONV: MessageSystemBulkAddToConv | null}

export type MessageDeleteHistory = {
  upto: MessageID
}

export type MessageAttachment = {
  object: Asset
  preview?: Asset
  previews: Asset[]
  metadata: Buffer
  uploaded: boolean
}

export type MessageAttachmentUploaded = {
  messageID: MessageID
  object: Asset
  previews: Asset[]
  metadata: Buffer
}

export type MessageJoin = {
  joiners: string[]
  leavers: string[]
}

export type MessageLeave = {}

export type MessageReaction = {
  messageID: MessageID
  body: string
}

export type MessageSendPayment = {
  paymentID: stellar1.PaymentID
}

export type MessageRequestPayment = {
  requestID: stellar1.KeybaseRequestID
  note: string
}

export type MessageUnfurl = {
  unfurl: UnfurlResult
  messageID: MessageID
}

export type MessageBody =
  | {messageType: MessageType.TEXT; TEXT: MessageText | null}
  | {messageType: MessageType.ATTACHMENT; ATTACHMENT: MessageAttachment | null}
  | {messageType: MessageType.EDIT; EDIT: MessageEdit | null}
  | {messageType: MessageType.DELETE; DELETE: MessageDelete | null}
  | {messageType: MessageType.METADATA; METADATA: MessageConversationMetadata | null}
  | {messageType: MessageType.HEADLINE; HEADLINE: MessageHeadline | null}
  | {messageType: MessageType.ATTACHMENTUPLOADED; ATTACHMENTUPLOADED: MessageAttachmentUploaded | null}
  | {messageType: MessageType.JOIN; JOIN: MessageJoin | null}
  | {messageType: MessageType.LEAVE; LEAVE: MessageLeave | null}
  | {messageType: MessageType.SYSTEM; SYSTEM: MessageSystem | null}
  | {messageType: MessageType.DELETEHISTORY; DELETEHISTORY: MessageDeleteHistory | null}
  | {messageType: MessageType.REACTION; REACTION: MessageReaction | null}
  | {messageType: MessageType.SENDPAYMENT; SENDPAYMENT: MessageSendPayment | null}
  | {messageType: MessageType.REQUESTPAYMENT; REQUESTPAYMENT: MessageRequestPayment | null}
  | {messageType: MessageType.UNFURL; UNFURL: MessageUnfurl | null}
  | {messageType: MessageType.FLIP; FLIP: MessageFlip | null}
  | {messageType: MessageType.PIN; PIN: MessagePin | null}

export type SenderPrepareOptions = {
  skipTopicNameState: boolean
  replyTo?: MessageID
}

export type SenderSendOptions = {
  joinMentionsAs?: ConversationMemberStatus
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
}

export type OutboxStateError = {
  message: string
  typ: OutboxErrorType
}

export type OutboxState =
  | {state: OutboxStateType.SENDING; SENDING: number | null}
  | {state: OutboxStateType.ERROR; ERROR: OutboxStateError | null}

export type OutboxRecord = {
  state: OutboxState
  outboxID: OutboxID
  convID: ConversationID
  ctime: gregor1.Time
  Msg: MessagePlaintext
  identifyBehavior: keybase1.TLFIdentifyBehavior
  prepareOpts?: SenderPrepareOptions
  sendOpts?: SenderSendOptions
  ordinal: number
  preview?: MakePreviewRes
  replyTo?: MessageUnboxed
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

export type HeaderPlaintextUnsupported = {
  mi: HeaderPlaintextMetaInfo
}

export type HeaderPlaintextV1 = {
  conv: ConversationIDTriple
  tlfName: string
  tlfPublic: boolean
  messageType: MessageType
  prev: MessagePreviousPointer[]
  sender: gregor1.UID
  senderDevice: gregor1.DeviceID
  kbfsCryptKeysUsed?: boolean
  bodyHash: Hash
  outboxInfo?: OutboxInfo
  outboxID?: OutboxID
  headerSignature?: SignatureInfo
  merkleRoot?: MerkleRoot
  ephemeralMetadata?: MsgEphemeralMetadata
  botUID?: gregor1.UID
}

export type HeaderPlaintext =
  | {version: HeaderPlaintextVersion.V1; V1: HeaderPlaintextV1 | null}
  | {version: HeaderPlaintextVersion.V2; V2: HeaderPlaintextUnsupported | null}
  | {version: HeaderPlaintextVersion.V3; V3: HeaderPlaintextUnsupported | null}
  | {version: HeaderPlaintextVersion.V4; V4: HeaderPlaintextUnsupported | null}
  | {version: HeaderPlaintextVersion.V5; V5: HeaderPlaintextUnsupported | null}
  | {version: HeaderPlaintextVersion.V6; V6: HeaderPlaintextUnsupported | null}
  | {version: HeaderPlaintextVersion.V7; V7: HeaderPlaintextUnsupported | null}
  | {version: HeaderPlaintextVersion.V8; V8: HeaderPlaintextUnsupported | null}
  | {version: HeaderPlaintextVersion.V9; V9: HeaderPlaintextUnsupported | null}
  | {version: HeaderPlaintextVersion.V10; V10: HeaderPlaintextUnsupported | null}

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

export type BodyPlaintextUnsupported = {
  mi: BodyPlaintextMetaInfo
}

export type BodyPlaintextV1 = {
  messageBody: MessageBody
}

export type BodyPlaintext =
  | {version: BodyPlaintextVersion.V1; V1: BodyPlaintextV1 | null}
  | {version: BodyPlaintextVersion.V2; V2: BodyPlaintextUnsupported | null}
  | {version: BodyPlaintextVersion.V3; V3: BodyPlaintextUnsupported | null}
  | {version: BodyPlaintextVersion.V4; V4: BodyPlaintextUnsupported | null}
  | {version: BodyPlaintextVersion.V5; V5: BodyPlaintextUnsupported | null}
  | {version: BodyPlaintextVersion.V6; V6: BodyPlaintextUnsupported | null}
  | {version: BodyPlaintextVersion.V7; V7: BodyPlaintextUnsupported | null}
  | {version: BodyPlaintextVersion.V8; V8: BodyPlaintextUnsupported | null}
  | {version: BodyPlaintextVersion.V9; V9: BodyPlaintextUnsupported | null}
  | {version: BodyPlaintextVersion.V10; V10: BodyPlaintextUnsupported | null}

export type MessagePlaintext = {
  clientHeader: MessageClientHeader
  messageBody: MessageBody
  supersedesOutboxID?: OutboxID
}

export type MessageUnboxedValid = {
  clientHeader: MessageClientHeaderVerified
  serverHeader: MessageServerHeader
  messageBody: MessageBody
  senderUsername: string
  senderDeviceName: string
  senderDeviceType: string
  bodyHash: Hash
  headerHash: Hash
  headerSignature?: SignatureInfo
  verificationKey?: Buffer
  senderDeviceRevokedAt?: gregor1.Time
  atMentionUsernames: string[]
  atMentions: gregor1.UID[]
  channelMention: ChannelMention
  maybeMentions: MaybeMention[]
  channelNameMentions: ChannelNameMention[]
  reactions: ReactionMap
  unfurls: {[key: string]: UnfurlResult}
  replyTo?: MessageUnboxed
}

export enum MessageUnboxedErrorType {
  MISC = 'misc',
  BADVERSION_CRITICAL = 'badversion_critical',
  BADVERSION = 'badversion',
  IDENTIFY = 'identify',
  EPHEMERAL = 'ephemeral',
  PAIRWISE_MISSING = 'pairwise_missing',
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
  messageID: MessageID
  messageType: MessageType
  ctime: gregor1.Time
  isEphemeral: boolean
  isEphemeralExpired: boolean
  etime: gregor1.Time
}

export type MessageUnboxedPlaceholder = {
  messageID: MessageID
  hidden: boolean
}

export type MessageUnboxed =
  | {state: MessageUnboxedState.VALID; VALID: MessageUnboxedValid | null}
  | {state: MessageUnboxedState.ERROR; ERROR: MessageUnboxedError | null}
  | {state: MessageUnboxedState.OUTBOX; OUTBOX: OutboxRecord | null}
  | {state: MessageUnboxedState.PLACEHOLDER; PLACEHOLDER: MessageUnboxedPlaceholder | null}

export type UnreadFirstNumLimit = {
  NumRead: number
  AtLeast: number
  AtMost: number
}

export type ConversationLocalParticipant = {
  username: string
  fullname?: string
  contactName?: string
}

export type ConversationInfoLocal = {
  id: ConversationID
  triple: ConversationIDTriple
  tlfName: string
  topicName: string
  headline: string
  snippetMsg?: MessageUnboxed
  pinnedMsg?: MessageUnboxed
  draft?: string
  visibility: keybase1.TLFVisibility
  status: ConversationStatus
  membersType: ConversationMembersType
  memberStatus: ConversationMemberStatus
  teamType: TeamType
  existence: ConversationExistence
  version: ConversationVers
  localVersion: LocalConversationVers
  participants: ConversationLocalParticipant[]
  finalizeInfo?: ConversationFinalizeInfo
  resetNames: string[]
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

export type ConversationErrorLocal = {
  typ: ConversationErrorType
  message: string
  remoteConv: Conversation
  unverifiedTLFName: string
  rekeyInfo?: ConversationErrorRekey
}

export type ConversationErrorRekey = {
  tlfName: string
  tlfPublic: boolean
  rekeyers: string[]
  writerNames: string[]
  readerNames: string[]
}

export type ConversationMinWriterRoleInfoLocal = {
  changedBy: string
  cannotWrite: boolean
  role: keybase1.TeamRole
}

export type ConversationSettingsLocal = {
  minWriterRoleInfo?: ConversationMinWriterRoleInfoLocal
}

export type ConversationLocal = {
  error?: ConversationErrorLocal
  info: ConversationInfoLocal
  readerInfo: ConversationReaderInfo
  creatorInfo?: ConversationCreatorInfoLocal
  notifications?: ConversationNotificationInfo
  supersedes: ConversationMetadata[]
  supersededBy: ConversationMetadata[]
  maxMessages: MessageSummary[]
  isEmpty: boolean
  identifyFailures: keybase1.TLFIdentifyFailure[]
  expunge: Expunge
  convRetention?: RetentionPolicy
  teamRetention?: RetentionPolicy
  convSettings?: ConversationSettingsLocal
  commands: ConversationCommandGroups
  botCommands: ConversationCommandGroups
}

export type NonblockFetchRes = {
  offline: boolean
  rateLimits: RateLimit[]
  identifyFailures: keybase1.TLFIdentifyFailure[]
}

export type ThreadView = {
  messages: MessageUnboxed[]
  pagination?: Pagination
}

export enum MessageIDControlMode {
  OLDERMESSAGES = 'oldermessages',
  NEWERMESSAGES = 'newermessages',
  CENTERED = 'centered',
  UNREADLINE = 'unreadline',
}

export type MessageIDControl = {
  pivot?: MessageID
  mode: MessageIDControlMode
  num: number
}

export type GetThreadQuery = {
  markAsRead: boolean
  messageTypes: MessageType[]
  disableResolveSupersedes: boolean
  enableDeletePlaceholders: boolean
  disablePostProcessThread: boolean
  before?: gregor1.Time
  after?: gregor1.Time
  messageIDControl?: MessageIDControl
}

export type GetThreadLocalRes = {
  thread: ThreadView
  offline: boolean
  rateLimits: RateLimit[]
  identifyFailures: keybase1.TLFIdentifyFailure[]
}

export enum GetThreadNonblockCbMode {
  FULL = 'full',
  INCREMENTAL = 'incremental',
}

export enum GetThreadNonblockPgMode {
  DEFAULT = 'default',
  SERVER = 'server',
}

export type UnreadlineRes = {
  offline: boolean
  rateLimits: RateLimit[]
  identifyFailures: keybase1.TLFIdentifyFailure[]
  unreadlineID?: MessageID
}

export type NameQuery = {
  name: string
  tlfID?: TLFID
  membersType: ConversationMembersType
}

export type GetInboxLocalQuery = {
  name?: NameQuery
  topicName?: string
  convIDs: ConversationID[]
  topicType?: TopicType
  tlfVisibility?: keybase1.TLFVisibility
  before?: gregor1.Time
  after?: gregor1.Time
  oneChatTypePerTLF?: boolean
  status: ConversationStatus[]
  memberStatus: ConversationMemberStatus[]
  unreadOnly: boolean
  readOnly: boolean
  computeActiveList: boolean
}

export type GetInboxAndUnboxLocalRes = {
  conversations: ConversationLocal[]
  pagination?: Pagination
  offline: boolean
  rateLimits: RateLimit[]
  identifyFailures: keybase1.TLFIdentifyFailure[]
}

export type GetInboxAndUnboxUILocalRes = {
  conversations: InboxUIItem[]
  pagination?: Pagination
  offline: boolean
  rateLimits: RateLimit[]
  identifyFailures: keybase1.TLFIdentifyFailure[]
}

export type PostLocalRes = {
  rateLimits: RateLimit[]
  messageID: MessageID
  identifyFailures: keybase1.TLFIdentifyFailure[]
}

export type PostLocalNonblockRes = {
  rateLimits: RateLimit[]
  outboxID: OutboxID
  identifyFailures: keybase1.TLFIdentifyFailure[]
}

export type EditTarget = {
  messageID?: MessageID
  outboxID?: OutboxID
}

export type SetConversationStatusLocalRes = {
  rateLimits: RateLimit[]
  identifyFailures: keybase1.TLFIdentifyFailure[]
}

export type NewConversationLocalRes = {
  conv: ConversationLocal
  uiConv: InboxUIItem
  rateLimits: RateLimit[]
  identifyFailures: keybase1.TLFIdentifyFailure[]
}

export type GetInboxSummaryForCLILocalQuery = {
  topicType: TopicType
  after: string
  before: string
  visibility: keybase1.TLFVisibility
  status: ConversationStatus[]
  unreadFirst: boolean
  unreadFirstLimit: UnreadFirstNumLimit
  activitySortedLimit: number
}

export type GetInboxSummaryForCLILocalRes = {
  conversations: ConversationLocal[]
  offline: boolean
  rateLimits: RateLimit[]
}

export type GetConversationForCLILocalQuery = {
  markAsRead: boolean
  MessageTypes: MessageType[]
  Since?: string
  limit: UnreadFirstNumLimit
  conv: ConversationLocal
}

export type GetConversationForCLILocalRes = {
  conversation: ConversationLocal
  messages: MessageUnboxed[]
  offline: boolean
  rateLimits: RateLimit[]
}

export type GetMessagesLocalRes = {
  messages: MessageUnboxed[]
  offline: boolean
  rateLimits: RateLimit[]
  identifyFailures: keybase1.TLFIdentifyFailure[]
}

export type PostFileAttachmentArg = {
  conversationID: ConversationID
  tlfName: string
  visibility: keybase1.TLFVisibility
  filename: string
  title: string
  metadata: Buffer
  identifyBehavior: keybase1.TLFIdentifyBehavior
  callerPreview?: MakePreviewRes
  outboxID?: OutboxID
  ephemeralLifetime?: gregor1.DurationSec
}

export type GetNextAttachmentMessageLocalRes = {
  message?: UIMessage
  offline: boolean
  rateLimits: RateLimit[]
  identifyFailures: keybase1.TLFIdentifyFailure[]
}

export type DownloadAttachmentLocalRes = {
  rateLimits: RateLimit[]
  identifyFailures: keybase1.TLFIdentifyFailure[]
}

export type DownloadFileAttachmentLocalRes = {
  filename: string
  rateLimits: RateLimit[]
  identifyFailures: keybase1.TLFIdentifyFailure[]
}

export enum PreviewLocationTyp {
  URL = 'url',
  FILE = 'file',
  BYTES = 'bytes',
}

export type PreviewLocation =
  | {ltyp: PreviewLocationTyp.URL; URL: string | null}
  | {ltyp: PreviewLocationTyp.FILE; FILE: string | null}
  | {ltyp: PreviewLocationTyp.BYTES; BYTES: Buffer | null}

export type MakePreviewRes = {
  mimeType: string
  previewMimeType?: string
  location?: PreviewLocation
  metadata?: AssetMetadata
  baseMetadata?: AssetMetadata
}

export type MarkAsReadLocalRes = {
  offline: boolean
  rateLimits: RateLimit[]
}

export type FindConversationsLocalRes = {
  conversations: ConversationLocal[]
  uiConversations: InboxUIItem[]
  offline: boolean
  rateLimits: RateLimit[]
  identifyFailures: keybase1.TLFIdentifyFailure[]
}

export type JoinLeaveConversationLocalRes = {
  offline: boolean
  rateLimits: RateLimit[]
}

export type PreviewConversationLocalRes = {
  conv: InboxUIItem
  offline: boolean
  rateLimits: RateLimit[]
}

export type DeleteConversationLocalRes = {
  offline: boolean
  rateLimits: RateLimit[]
}

export type GetTLFConversationsLocalRes = {
  convs: InboxUIItem[]
  offline: boolean
  rateLimits: RateLimit[]
}

export type SetAppNotificationSettingsLocalRes = {
  offline: boolean
  rateLimits: RateLimit[]
}

export type AppNotificationSettingLocal = {
  deviceType: keybase1.DeviceType
  kind: NotificationKind
  enabled: boolean
}

export type SearchRegexpRes = {
  offline: boolean
  hits: ChatSearchHit[]
  rateLimits: RateLimit[]
  identifyFailures: keybase1.TLFIdentifyFailure[]
}

export type SearchInboxRes = {
  offline: boolean
  res?: ChatSearchInboxResults
  rateLimits: RateLimit[]
  identifyFailures: keybase1.TLFIdentifyFailure[]
}

export type ProfileSearchConvStats = {
  err: string
  convName: string
  minConvID: MessageID
  maxConvID: MessageID
  numMissing: number
  numMessages: number
  indexSizeDisk: number
  indexSizeMem: number
  durationMsec: gregor1.DurationMsec
  percentIndexed: number
}

export type BuiltinCommandGroup = {
  typ: ConversationBuiltinCommandTyp
  commands: ConversationCommand[]
}

export type StaticConfig = {
  deletableByDeleteHistory: MessageType[]
  builtinCommands: BuiltinCommandGroup[]
}

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
  | {actionType: UnfurlPromptAction.ACCEPT; ACCEPT: string | null}
  | {actionType: UnfurlPromptAction.ONETIME; ONETIME: string | null}

export enum GalleryItemTyp {
  MEDIA = 'media',
  LINK = 'link',
  DOC = 'doc',
}

export type LoadGalleryRes = {
  messages: UIMessage[]
  last: boolean
  rateLimits: RateLimit[]
  identifyFailures: keybase1.TLFIdentifyFailure[]
}

export type LoadFlipRes = {
  status: UICoinFlipStatus
  rateLimits: RateLimit[]
  identifyFailures: keybase1.TLFIdentifyFailure[]
}

export type UserBotExtendedDescription = {
  title: string
  desktopBody: string
  mobileBody: string
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

export type AdvertiseCommandsParam = {
  typ: BotCommandsAdvertisementTyp
  commands: UserBotCommandInput[]
  teamName?: string
}

export type AdvertiseBotCommandsLocalRes = {
  rateLimits: RateLimit[]
}

export type ListBotCommandsLocalRes = {
  commands: UserBotCommandOutput[]
  rateLimits: RateLimit[]
}

export type ClearBotCommandsLocalRes = {
  rateLimits: RateLimit[]
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

export type IncomingMessage = {
  message: UIMessage
  modifiedMessage?: UIMessage
  convID: ConversationID
  displayDesktopNotification: boolean
  desktopNotificationSnippet: string
  conv?: InboxUIItem
  pagination?: UIPagination
}

export type ReadMessageInfo = {
  convID: ConversationID
  msgID: MessageID
  conv?: InboxUIItem
}

export type NewConversationInfo = {
  convID: ConversationID
  conv?: InboxUIItem
}

export type SetStatusInfo = {
  convID: ConversationID
  status: ConversationStatus
  conv?: InboxUIItem
}

export type SetAppNotificationSettingsInfo = {
  convID: ConversationID
  settings: ConversationNotificationInfo
}

export type FailedMessageInfo = {
  outboxRecords: OutboxRecord[]
  isEphemeralPurge: boolean
}

export type MemberInfo = {
  member: string
  status: ConversationMemberStatus
}

export type MembersUpdateInfo = {
  convID: ConversationID
  members: MemberInfo[]
}

export type TeamTypeInfo = {
  convID: ConversationID
  teamType: TeamType
  conv?: InboxUIItem
}

export type ExpungeInfo = {
  convID: ConversationID
  expunge: Expunge
}

export type EphemeralPurgeNotifInfo = {
  convID: ConversationID
  msgs: UIMessage[]
}

export type ReactionUpdate = {
  reactions: ReactionMap
  targetMsgID: MessageID
}

export type ReactionUpdateNotif = {
  convID: ConversationID
  userReacjis: keybase1.UserReacjis
  reactionUpdates: ReactionUpdate[]
}

export type MessagesUpdated = {
  convID: ConversationID
  updates: UIMessage[]
}

export type ChatActivity =
  | {activityType: ChatActivityType.INCOMING_MESSAGE; INCOMING_MESSAGE: IncomingMessage | null}
  | {activityType: ChatActivityType.READ_MESSAGE; READ_MESSAGE: ReadMessageInfo | null}
  | {activityType: ChatActivityType.NEW_CONVERSATION; NEW_CONVERSATION: NewConversationInfo | null}
  | {activityType: ChatActivityType.SET_STATUS; SET_STATUS: SetStatusInfo | null}
  | {activityType: ChatActivityType.FAILED_MESSAGE; FAILED_MESSAGE: FailedMessageInfo | null}
  | {activityType: ChatActivityType.MEMBERS_UPDATE; MEMBERS_UPDATE: MembersUpdateInfo | null}
  | {activityType: ChatActivityType.SET_APP_NOTIFICATION_SETTINGS; SET_APP_NOTIFICATION_SETTINGS: SetAppNotificationSettingsInfo | null}
  | {activityType: ChatActivityType.TEAMTYPE; TEAMTYPE: TeamTypeInfo | null}
  | {activityType: ChatActivityType.EXPUNGE; EXPUNGE: ExpungeInfo | null}
  | {activityType: ChatActivityType.EPHEMERAL_PURGE; EPHEMERAL_PURGE: EphemeralPurgeNotifInfo | null}
  | {activityType: ChatActivityType.REACTION_UPDATE; REACTION_UPDATE: ReactionUpdateNotif | null}
  | {activityType: ChatActivityType.MESSAGES_UPDATED; MESSAGES_UPDATED: MessagesUpdated | null}

export type TyperInfo = {
  uid: keybase1.UID
  username: string
  deviceID: keybase1.DeviceID
  deviceName: string
  deviceType: string
}

export type ConvTypingUpdate = {
  convID: ConversationID
  typers: TyperInfo[]
}

export enum StaleUpdateType {
  CLEAR = 'clear',
  NEWACTIVITY = 'newactivity',
  CONVUPDATE = 'convupdate',
}

export type ConversationStaleUpdate = {
  convID: ConversationID
  updateType: StaleUpdateType
}

export type ChatSyncIncrementalConv = {
  conv: UnverifiedInboxUIItem
  shouldUnbox: boolean
}

export type ChatSyncIncrementalInfo = {
  items: ChatSyncIncrementalConv[]
  removals: string[]
}

export type ChatSyncResult =
  | {syncType: SyncInboxResType.CURRENT}
  | {syncType: SyncInboxResType.CLEAR}
  | {syncType: SyncInboxResType.INCREMENTAL; INCREMENTAL: ChatSyncIncrementalInfo | null}

export type MessageBoxed = {
  version: MessageBoxedVersion
  serverHeader?: MessageServerHeader
  clientHeader: MessageClientHeader
  headerCiphertext: SealedData
  bodyCiphertext: EncryptedData
  verifyKey: Buffer
  keyGeneration: number
}

export enum MessageBoxedVersion {
  VNONE = 'vnone',
  V1 = 'v1',
  V2 = 'v2',
  V3 = 'v3',
  V4 = 'v4',
}

export type ThreadViewBoxed = {
  messages: MessageBoxed[]
  pagination?: Pagination
}

export type GetInboxRemoteRes = {
  inbox: InboxView
  rateLimit?: RateLimit
}

export type GetInboxByTLFIDRemoteRes = {
  convs: Conversation[]
  rateLimit?: RateLimit
}

export type GetThreadRemoteRes = {
  thread: ThreadViewBoxed
  membersType: ConversationMembersType
  visibility: keybase1.TLFVisibility
  rateLimit?: RateLimit
}

export type GetConversationMetadataRemoteRes = {
  conv: Conversation
  rateLimit?: RateLimit
}

export type PostRemoteRes = {
  msgHeader: MessageServerHeader
  rateLimit?: RateLimit
}

export type NewConversationRemoteRes = {
  convID: ConversationID
  createdComplexTeam: boolean
  rateLimit?: RateLimit
}

export type GetMessagesRemoteRes = {
  msgs: MessageBoxed[]
  rateLimit?: RateLimit
}

export type MarkAsReadRes = {
  rateLimit?: RateLimit
}

export type SetConversationStatusRes = {
  rateLimit?: RateLimit
}

export type GetPublicConversationsRes = {
  conversations: Conversation[]
  rateLimit?: RateLimit
}

export type GetUnreadlineRemoteRes = {
  unreadlineID?: MessageID
  rateLimit?: RateLimit
}

export enum ChannelMention {
  NONE = 'none',
  ALL = 'all',
  HERE = 'here',
}

export type UnreadUpdateFull = {
  ignore: boolean
  inboxVers: InboxVers
  inboxSyncStatus: SyncInboxResType
  updates: UnreadUpdate[]
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

export type SyncIncrementalRes = {
  vers: InboxVers
  convs: Conversation[]
}

export type ServerCacheVers = {
  inboxVers: number
  bodiesVers: number
}

export type SyncInboxRes =
  | {typ: SyncInboxResType.CURRENT}
  | {typ: SyncInboxResType.INCREMENTAL; INCREMENTAL: SyncIncrementalRes | null}
  | {typ: SyncInboxResType.CLEAR}

export type SyncChatRes = {
  cacheVers: ServerCacheVers
  inboxRes: SyncInboxRes
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
  | {typ: SyncAllNotificationType.STATE; STATE: gregor1.State | null}
  | {typ: SyncAllNotificationType.INCREMENTAL; INCREMENTAL: gregor1.SyncResult | null}

export type SyncAllResult = {
  auth: gregor1.AuthResult
  chat: SyncChatRes
  notification: SyncAllNotificationRes
  badge: UnreadUpdateFull
}

export type JoinLeaveConversationRemoteRes = {
  rateLimit?: RateLimit
}

export type DeleteConversationRemoteRes = {
  rateLimit?: RateLimit
}

export type GetMessageBeforeRes = {
  msgID: MessageID
  rateLimit?: RateLimit
}

export type GetTLFConversationsRes = {
  conversations: Conversation[]
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

export type SweepRes = {
  foundTask: boolean
  deletedMessages: boolean
  expunge: Expunge
}

export type ServerNowRes = {
  rateLimit?: RateLimit
  now: gregor1.Time
}

export enum ExternalAPIKeyTyp {
  GOOGLEMAPS = 'googlemaps',
  GIPHY = 'giphy',
}

export type ExternalAPIKey =
  | {typ: ExternalAPIKeyTyp.GOOGLEMAPS; GOOGLEMAPS: string | null}
  | {typ: ExternalAPIKeyTyp.GIPHY; GIPHY: string | null}

export type CommandConvVers = number

export type RemoteBotCommandsAdvertisementPublic = {
  convID: ConversationID
}

export type RemoteBotCommandsAdvertisementTLFID = {
  convID: ConversationID
  tlfID: TLFID
}

export type RemoteBotCommandsAdvertisement =
  | {typ: BotCommandsAdvertisementTyp.PUBLIC; PUBLIC: RemoteBotCommandsAdvertisementPublic | null}
  | {typ: BotCommandsAdvertisementTyp.TLFID_MEMBERS; TLFID_MEMBERS: RemoteBotCommandsAdvertisementTLFID | null}
  | {typ: BotCommandsAdvertisementTyp.TLFID_CONVS; TLFID_CONVS: RemoteBotCommandsAdvertisementTLFID | null}

export type BotCommandConv = {
  uid: gregor1.UID
  convID: ConversationID
  vers: CommandConvVers
  mtime: gregor1.Time
}

export type BotInfo = {
  commandConvs: BotCommandConv[]
}

export type AdvertiseBotCommandsRes = {
  rateLimit?: RateLimit
}

export type ClearBotCommandsRes = {
  rateLimit?: RateLimit
}

export enum BotInfoResponseTyp {
  UPTODATE = 'uptodate',
  INFO = 'info',
}

export type BotInfoResponse = {typ: BotInfoResponseTyp.UPTODATE} | {typ: BotInfoResponseTyp.INFO; INFO: BotInfo | null}

export type GetBotInfoRes = {
  response: BotInfoResponse
  rateLimit?: RateLimit
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

export type UnfurlYoutubeRaw = {}

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
}

export type UnfurlRaw =
  | {unfurlType: UnfurlType.GENERIC; GENERIC: UnfurlGenericRaw | null}
  | {unfurlType: UnfurlType.YOUTUBE; YOUTUBE: UnfurlYoutubeRaw | null}
  | {unfurlType: UnfurlType.GIPHY; GIPHY: UnfurlGiphyRaw | null}
  | {unfurlType: UnfurlType.MAPS; MAPS: UnfurlMapsRaw | null}

export type UnfurlGeneric = {
  title: string
  url: string
  siteName: string
  favicon?: Asset
  image?: Asset
  publishTime?: number
  description?: string
}

export type UnfurlYoutube = {}

export type UnfurlGiphy = {
  favicon?: Asset
  image?: Asset
  video?: Asset
}

export type Unfurl =
  | {unfurlType: UnfurlType.GENERIC; GENERIC: UnfurlGeneric | null}
  | {unfurlType: UnfurlType.YOUTUBE; YOUTUBE: UnfurlYoutube | null}
  | {unfurlType: UnfurlType.GIPHY; GIPHY: UnfurlGiphy | null}

export type UnfurlResult = {
  unfurl: Unfurl
  url: string
}

export type UnfurlImageDisplay = {
  url: string
  height: number
  width: number
  isVideo: boolean
}

export type UnfurlGenericDisplay = {
  title: string
  url: string
  siteName: string
  favicon?: UnfurlImageDisplay
  media?: UnfurlImageDisplay
  publishTime?: number
  description?: string
}

export type UnfurlYoutubeDisplay = {}

export type UnfurlGiphyDisplay = {
  favicon?: UnfurlImageDisplay
  image?: UnfurlImageDisplay
  video?: UnfurlImageDisplay
}

export type UnfurlDisplay =
  | {unfurlType: UnfurlType.GENERIC; GENERIC: UnfurlGenericDisplay | null}
  | {unfurlType: UnfurlType.YOUTUBE; YOUTUBE: UnfurlYoutubeDisplay | null}
  | {unfurlType: UnfurlType.GIPHY; GIPHY: UnfurlGiphyDisplay | null}

export enum UnfurlMode {
  ALWAYS = 'always',
  NEVER = 'never',
  WHITELISTED = 'whitelisted',
}

export type UnfurlSettings = {
  mode: UnfurlMode
  whitelist: {[key: string]: boolean}
}

export type UnfurlSettingsDisplay = {
  mode: UnfurlMode
  whitelist: string[]
}
