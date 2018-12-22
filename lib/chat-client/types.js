// @flow

/*
 * Keybase Chat JSON API V1 options
 * Source: https://github.com/keybase/client/blob/master/go/client/chat_api_handler.go
 * https://github.com/keybase/client/blob/master/go/client/chat_svc_handler.go
 * https://github.com/keybase/client/blob/master/go/protocol/chat1/local.go
 */

type TopicType = 'chat' | 'DEV'
type MembersType = 'team'
type ChannelMention = 'none' | 'all' | 'here'
type ChannelNameMention = {|
  name: string,
  convID: string,
|}

// Note: there doesn't seem to be a way to document the properties of Flow types. See https://github.com/documentationjs/documentation/issues/742

/**
 * A Keybase chat channel. This can be a channel in a team, or just an informal channel between two users.
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
  last?: string,
|}

export type TextContent = {|
  type: 'text',
  text: {|
    body: string, // TODO: type this
    payments: any[],
  |},
|}

export type AttachmentContent = {|
  type: 'attachment',
  attachment: {|
    object: any,
    preview: any,
    previews: any[],
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
    messageID: number,
    body: string,
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

export type MessageContent = TextContent | AttachmentContent | ReactionContent | EditContent

export type MessageSender = {|
  username: string,
  deviceName: string,
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
  unreadOnly?: boolean,
  topicType?: TopicType,
  showErrors?: boolean,
  failOffline?: boolean,
|}

/**
 * Options for the `read` method of the chat module.
 */
export type ChatReadOptions = {|
  conversationId?: string,
  peek?: boolean,
  pagination?: Pagination,
  unreadOnly?: boolean,
  failOffline?: boolean,
|}

/**
 * Options for the `send` method of the chat module.
 */
export type ChatSendOptions = {|
  conversationId?: string,
  nonblock?: boolean,
  membersType: MembersType,
|}

/**
 * Options for the `delete` method of the chat module.
 */
export type ChatDeleteOptions = {|
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

export type ChatOptionsAttachment = {|
  channel: ChatChannel,
  conversationId?: string,
  filename: string,
  title: string,
  preview?: string,
|}

export type ChatOptionsDownload = {|
  channel: ChatChannel,
  conversationId?: string,
  messageId: number,
  output: string,
  preview?: string,
  noStream?: boolean,
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
