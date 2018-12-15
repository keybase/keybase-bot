// @flow

/*
 * Keybase Chat JSON API V1 options
 * Source: https://github.com/keybase/client/blob/master/go/client/chat_api_handler.go
 */

type MessageType =
  | 'none'
  | 'text'
  | 'attachment'
  | 'edit'
  | 'delete'
  | 'metadata'
  | 'tlfname'
  | 'headline'
  | 'attachmentuploaded'
  | 'join'
  | 'leave'
  | 'system'
  | 'deletehistory'
  | 'reaction'
  | 'sendpayment'
  | 'requestpayment'
  | 'unfurl'

type TopicType = 'chat' | 'DEV'
type MembersType = 'team'

export type ChatChannel = {|
  name: string,
  public: boolean,
  membersType: MembersType,
  topicType?: TopicType,
  topicName?: string,
|}

export type ChatMessage = {|
  body: string,
|}

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

export type MessageSender = {|
  uid: string,
  username: string,
  deviceId: string,
  deviceName: string,
|}

/**
 */
export type ChatReadMessage = {|
  id: number,
  channel: ChatChannel,
  sender: MessageSender,
  sent_at: number,
  sent_at_ms: number,
  content: {type: MessageType, text: {body: string, payments: any}},
  prev: any,
  unread: boolean,
  channel_mention: string,
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
 */
export type ChatListOptions = {|
  unreadOnly?: boolean,
  topicType?: TopicType,
  showErrors?: boolean,
  failOffline?: boolean,
|}

/**
 */
export type ChatSendOptions = {|
  conversationId?: string,
  nonblock?: boolean,
  membersType: MembersType,
|}

/**
 */
export type ChatReadOptions = {|
  conversationId?: string,
  peek?: boolean,
  pagination?: Pagination,
  unreadOnly?: boolean,
  failOffline?: boolean,
|}

/**
 */
export type ChatOptionsEdit = {|
  channel: ChatChannel,
  conversationId?: string,
  messageId: number,
  message: ChatMessage,
|}

/**
 */
export type ChatOptionsReaction = {|
  channel: ChatChannel,
  conversationId?: string,
  messageId: number,
  message: ChatMessage,
|}

/**
 */
export type ChatDeleteOptions = {|
  conversationId?: string,
|}

/**
 */
export type ChatOptionsAttachment = {|
  channel: ChatChannel,
  conversationId?: string,
  filename: string,
  title: string,
  preview?: string,
|}

/**
 */
export type ChatOptionsDownload = {|
  channel: ChatChannel,
  conversationId?: string,
  messageId: number,
  output: string,
  preview?: string,
  noStream?: boolean,
|}

/**
 */
export type ChatOptionsSetStatus = {|
  channel: ChatChannel,
  conversationId?: string,
  status: string,
|}

/**
 */
export type ChatOptionsMark = {|
  channel: ChatChannel,
  conversationId?: string,
  messageId: number,
|}

/**
 */
export type ChatOptionsSearchInbox = ChatOptionsSearch & {|
  query: string,
  forceReindex?: boolean,
|}

/**
 */
export type ChatOptionsSearchRegexp = ChatOptionsSearchInbox & {|
  channel: ChatChannel,
  conversationId?: string,
  query: string,
  isRegex: boolean,
  maxMessages: number,
|}

/**
 */
export type OnMessage = (message: ChatReadMessage) => void
