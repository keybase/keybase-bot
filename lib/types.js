// @flow

export type ApiCommandArg = {method: string, options: Object}

/**
 */
export type InitOptions = {|
  username?: string,
  paperkey?: string,
  verbose?: boolean,
  alreadyLoggedIn?: boolean,
|}

export type UsernameAndDevice = {|
  username: string,
  devicename: string,
|}

/*
 * Keybase Chat JSON API V1 options
 * Source: https://github.com/keybase/client/blob/master/go/client/chat_api_handler.go
 */

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
export type ChatOptionsList = {|
  unreadOnly?: boolean,
  topicType?: TopicType,
  showErrors?: boolean,
  failOffline?: boolean,
|}

/**
 */
export type ChatOptionsSend = {|
  channel: ChatChannel,
  conversationId?: string,
  message: ChatMessage,
  nonblock?: boolean,
  membersType: MembersType,
|}

/**
 */
export type ChatOptionsRead = {|
  channel: ChatChannel,
  conversationId?: string,
  peek: boolean,
  pagination?: Pagination,
  unreadOnly: boolean,
  failOffline: boolean,
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
export type ChatOptionsDelete = {|
  channel: ChatChannel,
  conversationId?: string,
  messageId: number,
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
export type AllChatOptions =
  | ChatOptionsList
  | ChatOptionsRead
  | ChatOptionsSend
  | ChatOptionsEdit
  | ChatOptionsDelete
  | ChatOptionsSetStatus
  | ChatOptionsMark
  | ChatOptionsReaction
  | ChatOptionsSearchRegexp
  | ChatOptionsSearchInbox
  | ChatOptionsDownload
  | ChatOptionsAttachment

/**
 */
export type ChatReadMessage = any
/**
 */
export type DeviceUsernamePair = {|username: string, devicename: string|}
/**
 */
export type NativeStatus = void | {Device?: {name: string}, Username?: string}
