// @flow

/*
 * Keybase Chat JSON API V1 options
 * Source: https://github.com/keybase/client/blob/master/go/client/chat_api_handler.go
 */

type TopicType = 'chat' | 'DEV'
type MembersType = 'team'

/**
 */
export type ChatReadMessage = any

/**
 */
export type OnMessage = (message: ChatReadMessage) => void

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
export type ChatListOptionals = {|
  unreadOnly?: boolean,
  topicType?: TopicType,
  showErrors?: boolean,
  failOffline?: boolean,
|}

/**
 */
export type ChatSendOptionals = {|
  conversationId?: string,
  nonblock?: boolean,
  membersType: MembersType,
|}

/**
 */
export type ChatReadOptionals = {|
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
export type ChatDeleteOptionals = {|
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
export type AnyChatOption =
  | ChatListOptionals
  | ChatReadOptionals
  | ChatSendOptionals
  | ChatOptionsEdit
  | ChatDeleteOptionals
  | ChatOptionsSetStatus
  | ChatOptionsMark
  | ChatOptionsReaction
  | ChatOptionsSearchRegexp
  | ChatOptionsSearchInbox
  | ChatOptionsDownload
  | ChatOptionsAttachment

/*
 * Chat API Function Signatures
 */
export type List = (options: ChatListOptionals) => Promise<void | ChatConversation[]>

export type Read = (channel: ChatChannel, options: ChatReadOptionals) => Promise<any>

export type Send = (channel: ChatChannel, message: ChatMessage, options: ChatSendOptionals) => Promise<void>

export type Delete = (channel: ChatChannel, messageId: number, options: ChatDeleteOptionals) => Promise<void>

export type WatchChannelForNewMessage = (channel: ChatChannel, onMessage: OnMessage) => void

export type WatchAllChannelsForNewMessages = (onMessage: OnMessage) => void

export type AnyChatApi =
  | List
  | Read
  | Send
  | Delete
  | WatchAllChannelsForNewMessages
  | WatchChannelForNewMessage
