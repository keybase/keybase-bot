// @flow

/**
 */
export type InitOptions = {|
  username: string,
  paperkey: string,
  verbose?: boolean,
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

/*
 * List
 * {"method": "list", "params": {"options": { ...ChatOptionsList }}}
 */
export type ChatOptionsList = {|
  unreadOnly?: boolean,
  topicType?: TopicType,
  showErrors?: boolean,
  failOffline?: boolean,
|}

/*
 * Send
 * {"method": "send", "params": {"options": { ...ChatOptionsList }}}
 */
export type ChatOptionsSend = {|
  channel: ChatChannel,
  conversationId: string,
  message: ChatMessage,
  nonblock: boolean,
  membersType: MembersType,
|}

/*
 * Read
 * {"method": "read", "params": {"options": { ...ChatOptionsRead }}}
 */
export type ChatOptionsRead = {|
  channel: ChatChannel,
  conversationId: string,
  peek: boolean,
  pagination?: Pagination,
  unreadOnly: boolean,
  failOffline: boolean,
|}

/*
 * Read
 * {"method": "edit", "params": {"options": { ...ChatOptionsEdit }}}
 */
export type ChatOptionsEdit = {|
  channel: ChatChannel,
  conversationId: string,
  messageId: number,
  message: ChatMessage,
|}

/*
 * Reaction
 * {"method": "reaction", "params": {"options": { ...ChatOptionsReadtion }}}
 */
export type ChatOptionsReaction = {|
  channel: ChatChannel,
  conversationId: string,
  messageId: number,
  message: ChatMessage,
|}

/*
 * Delete
 * {"method": "delete", "params": {"options": { ...ChatOptionDelete }}}
 */
export type ChatOptionsDelete = {|
  channel: ChatChannel,
  conversationId: string,
  messageId: number,
|}

/*
 * Attachment
 * {"method": "attachment", "params": {"options": { ...ChatOptionAttachment }}}
 */
export type ChatOptionsAttachment = {|
  channel: ChatChannel,
  conversationId: string,
  filename: string,
  title: string,
  preview?: string,
|}

/*
 * Download
 * {"method": "download", "params": {"options": { ...ChatOptionDownload }}}
 */
export type ChatOptionsDownload = {|
  channel: ChatChannel,
  conversationId: string,
  messageId: number,
  output: string,
  preview?: string,
  noStream?: boolean,
|}

/*
 * SetStatus
 * {"method": "setStatus", "params": {"options": { ...ChatOptionSetStatus }}}
 */
export type ChatOptionsSetStatus = {|
  channel: ChatChannel,
  conversationId: string,
  status: string,
|}

/*
 * Mark
 * {"method": "mark", "params": {"options": { ...ChatOptionMark }}}
 */
export type ChatOptionsMark = {|
  channel: ChatChannel,
  conversationId: string,
  messageId: number,
|}

/*
 * SearchInbox
 * {"method": "searchInbox", "params": {"options": { ...ChatOptionsSearchInbox }}}
 */
export type ChatOptionsSearchInbox = ChatOptionsSearch & {|
  query: string,
  forceReindex?: boolean,
|}

/*
 * SearchRegexp
 * {"method": "searchregexp", "params": {"options": { ...ChatOptionsSearchRegexp }}}
 */
export type ChatOptionsSearchRegexp = ChatOptionsSearchInbox & {|
  channel: ChatChannel,
  conversationId: string,
  query: string,
  isRegex: boolean,
  maxMessages: number,
|}

export type AllChatOptions =
  | ChatOptionsList
  | ChatOptionsRead
  | ChatOptionsEdit
  | ChatOptionsDelete
  | ChatOptionsSetStatus
  | ChatOptionsMark
  | ChatOptionsReaction
  | ChatOptionsSearchRegexp
  | ChatOptionsSearchInbox
  | ChatOptionsDownload
  | ChatOptionsAttachment

export type ChatReadMessage = any
export type DeviceUsernamePair = {|username: string, devicename: string|}
export type NativeStatus = void | {Device?: {name: string}, Username?: string}
export type CbDeviceUsernamePair = (err: ?Error, res: ?DeviceUsernamePair) => void
export type MessagesHandler = (arg: {messages: Array<ChatReadMessage>, channel: ChatChannel}) => void
