// @flow

/*
 * Keybase Chat JSON API V1 options
 * Source: https://github.com/keybase/client/blob/master/go/client/chat_api_handler.go
 * https://github.com/keybase/client/blob/master/go/client/chat_svc_handler.go
 * https://github.com/keybase/client/blob/master/go/protocol/chat1/local.go
 */

type TopicType = 'chat' | 'dev'
type MembersType = 'team' | 'impteamnative' | 'kbfs' | 'impteamupgrade'
type ChannelMention = 'none' | 'all' | 'here'
type ChannelNameMention = {|
  name: string,
  convID: string,
|}

// Note: there doesn't seem to be a way to document the properties of Flow types. See https://github.com/documentationjs/documentation/issues/742

/**
 * A Keybase chat channel. This can be a channel in a team, or just an informal channel between two users.
 * name: the name of the team or comma-separated list of participants
 */
export type ChatChannel = {|
  name: string,
  public: boolean,
  membersType: MembersType,
  topicType?: TopicType,
  topicName?: string,
|}

/**
 * A chat message. The content goes in the `body` property!
 */
export type ChatMessage = {|
  body: string,
|}

/**
 * A chat conversation. This is essentially a chat channel plus some additional metadata.
 */
export type ChatConversation = {|
  id: string,
  channel: ChatChannel,
  unread: boolean,
  activeAt: number,
  activeAtMs: number,
  memberStatus: string,
|}

export type Pagination = {|
  num: number,
  next?: string,
  previous?: string,
  last?: boolean,
|}

export type TextContent = {|
  type: 'text',
  text: {|
    body: string, // TODO: type this
    payments: any[],
  |},
|}

export type AssetMetadataImage = {|
  width: number,
  height: number,
|}

export type AssetMetadataVideo = {|
  width: number,
  height: number,
  durationMs: number,
|}

export type AssetMetadataAudio = {|
  durationMs: number,
|}

export type AssetMetadata = {|
  assetType: number,
  image?: AssetMetadataImage,
  video?: AssetMetadataVideo,
  audio?: AssetMetadataAudio,
|}

export type Asset = {|
  filename: string,
  region: string,
  endpoint: string,
  bucket: string,
  path: string,
  size: number,
  mimeType: string,
  encHash: string,
  key: string,
  verifyKey: string,
  title: string,
  nonce: string,
  metadata: AssetMetadata,
|}

export type AttachmentContent = {|
  type: 'attachment',
  attachment: {|
    object: Asset,
    preview?: Asset,
    previews: Asset[],
    metadata: any[],
    uploaded: boolean,
  |},
|}

export type ReactionContent = {|
  type: 'reaction',
  reaction: {|
    m: string,
    b: string,
  |},
|}

export type EditContent = {|
  type: 'edit',
  edit: {|
    messageId: number,
    body: string,
  |},
|}

export type DeleteContent = {|
  type: 'delete',
  delete: {|
    messageIDs: number[],
  |},
|}

/*
  TODO contents:
  Delete
  Metadata
  Headline
  Attachmentuploaded
  Join
  Leave
  System
  Deletehistory
  Sendpayment
  Requestpayment
  Unfurl

  type ContentType =
  | 'none'
  | 'text'
  | 'attachment'
  | 'edit'
  | 'delete'
  | 'metadata'
  | 'tlfname'
  | 'headline'
  | 'attachmentUploaded'
  | 'join'
  | 'leave'
  | 'system'
  | 'deleteHistory'
  | 'reaction'
  | 'sendPayment'
  | 'requestPayment'
  | 'unfurl'
*/

export type MessageContent = TextContent | AttachmentContent | ReactionContent | EditContent | DeleteContent

export type MessageSender = {|
  deviceId: string,
  deviceName?: string,
  uid: string,
  username?: string,
|}

export type MessageSummary = {|
  id: number,
  channel: ChatChannel,
  sender: MessageSender,
  sentAt: number,
  sentAtMs: number,
  content: MessageContent,
  prev: any,
  unread: boolean,
  revokedDevice?: boolean,
  offline?: boolean,
  KBFSEncrypted?: boolean,
  isEphemeral?: boolean,
  isEphemeralExpired?: boolean,
  ETime?: number,
  reactions?: any[],
  hasPairwiseMacs?: boolean,
  atMentionUsernames?: string[],
  channelMention?: ChannelMention,
  channelNameMentions?: ChannelNameMention[],
|}

export type MessageNotification = {|
  source: string,
  msg: MessageSummary,
  error: string,
  pagination: Pagination,
|}

export type ReadResult = {|
  messages: MessageSummary[],
  pagination: Pagination,
|}

export type SendResult = {|
  id: number,
|}

export type ListenOptions = {|
  hideExploding: boolean,
|}

export type ChatOptionsSearch = {|
  maxHits: number,
  sentBy: string,
  sentAfter?: string,
  sendBefore?: string,
  beforeContext?: number,
  afterContext?: number,
|}

/**
 * Options for the `list` method of the chat module.
 */
export type ChatListOptions = {|
  failOffline?: boolean,
  showErrors?: boolean,
  topicType?: TopicType,
  unreadOnly?: boolean,
|}

/**
 * Options for the `listChannels` method of the chat module.
 */
export type ChatListChannelsOptions = {|
  topicType?: TopicType,
  membersType?: MembersType,
|}

/**
 * Options for the `read` method of the chat module.
 */
export type ChatReadOptions = {|
  conversationId?: string,
  failOffline?: boolean,
  pagination?: Pagination,
  peek?: boolean,
  unreadOnly?: boolean,
|}

/**
 * Options for the `send` method of the chat module.
 */
export type ChatSendOptions = {|
  conversationId?: string,
  nonblock?: boolean,
  membersType: MembersType,
  confirmLumenSend?: boolean,
|}

/**
 * Options for the `attach` method of the chat module.
 */
export type ChatAttachOptions = {|
  conversationId?: string,
  title?: string,
  preview?: string,
|}

/**
 * Options for the `download` method of the chat module.
 */
export type ChatDownloadOptions = {|
  conversationId?: string,
  preview?: string,
  noStream?: boolean,
|}

/**
 * Options for the `delete` method of the chat module.
 */
export type ChatDeleteOptions = {|
  conversationId?: string,
|}

/**
 * Options for the `react` method of the chat module.
 */
export type ChatReactOptions = {|
  conversationId?: string,
|}

export type ChatEditOptions = {|
  channel: ChatChannel,
  conversationId?: string,
  messageId: number,
  message: ChatMessage,
|}

export type ChatOptionsReaction = {|
  channel: ChatChannel,
  conversationId?: string,
  messageId: number,
  message: ChatMessage,
|}

export type ChatOptionsSetStatus = {|
  channel: ChatChannel,
  conversationId?: string,
  status: string,
|}

export type ChatOptionsMark = {|
  channel: ChatChannel,
  conversationId?: string,
  messageId: number,
|}

export type ChatOptionsSearchInbox = ChatOptionsSearch & {|
  query: string,
  forceReindex?: boolean,
|}

export type ChatOptionsSearchRegexp = ChatOptionsSearchInbox & {|
  channel: ChatChannel,
  conversationId?: string,
  query: string,
  isRegex: boolean,
  maxMessages: number,
|}
