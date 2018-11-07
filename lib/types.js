// @flow

/*
 * Keybase Chat JSON API V1 options
 * Source: https://github.com/keybase/client/blob/master/go/client/chat_api_handler.go
 */

export type ChatChannel = {|
  name: string,
  public: boolean,
  members_type: string,
  topic_type?: string,
  topic_name?: string,
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

type ChatOptionsSearch = {|
  max_hits: number,
  sent_by: string,
  sent_after?: string,
  sent_before?: string,
  before_contex?: number,
  after_context?: number,
|}

/*
 * List
 * {"method": "list", "params": {"options": { ...ChatOptionsList }}}
 */
export type ChatOptionsList = {|
  unread_only?: boolean,
  topic_type?: string,
  show_errors?: boolean,
  fail_offline?: boolean,
|}

/*
 * Send
 * {"method": "send", "params": {"options": { ...ChatOptionsList }}}
 */
export type ChatOptionsSend = {|
  channel: ChatChannel,
  conversation_id: string,
  message: ChatMessage,
  nonblock: boolean,
  member_type: string,
|}

/*
 * Read
 * {"method": "read", "params": {"options": { ...ChatOptionsRead }}}
 */
export type ChatOptionsRead = {|
  channel: ChatChannel,
  conversation_id: string,
  pagination?: Pagination,
  unread_only: boolean,
  fail_offline: boolean,
|}

/*
 * Read
 * {"method": "edit", "params": {"options": { ...ChatOptionsEdit }}}
 */
export type ChatOptionsEdit = {|
  channel: ChatChannel,
  conversation_id: string,
  message_id: number,
  message: ChatMessage,
|}

/*
 * Reaction
 * {"method": "reaction", "params": {"options": { ...ChatOptionsReadtion }}}
 */
export type ChatOptionsReaction = {|
  channel: ChatChannel,
  conversation_id: string,
  message_id: number,
  message: ChatMessage,
|}

/*
 * Delete
 * {"method": "delete", "params": {"options": { ...ChatOptionDelete }}}
 */
export type ChatOptionsDelete = {|
  channel: ChatChannel,
  conversation_id: string,
  message_id: number,
|}

/*
 * Attachment
 * {"method": "attachment", "params": {"options": { ...ChatOptionAttachment }}}
 */
export type ChatOptionsAttachment = {|
  channel: ChatChannel,
  conversation_id: string,
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
  conversation_id: string,
  message_id: number,
  output: string,
  preview?: string,
  no_stream?: boolean,
|}

/*
 * SetStatus
 * {"method": "setStatus", "params": {"options": { ...ChatOptionSetStatus }}}
 */
export type ChatOptionsSetStatus = {|
  channel: ChatChannel,
  conversation_id: string,
  status: string,
|}

/*
 * Mark
 * {"method": "mark", "params": {"options": { ...ChatOptionMark }}}
 */
export type ChatOptionsMark = {|
  channel: ChatChannel,
  conversation_id: string,
  message_id: number,
|}

/*
 * SearchInbox
 * {"method": "searchInbox", "params": {"options": { ...ChatOptionsSearchInbox }}}
 */
export type ChatOptionsSearchInbox = ChatOptionsSearch & {|
  query: string,
  force_reindex?: boolean,
|}

/*
 * SearchRegexp
 * {"method": "searchregexp", "params": {"options": { ...ChatOptionsSearchRegexp }}}
 */
export type ChatOptionsSearchRegexp = ChatOptionsSearchInbox & {|
  channel: ChatChannel,
  conversation_id: string,
  query: string,
  is_regex: boolean,
  max_messages: number,
|}

export type ChatReadMessage = any
export type DeviceUsernamePair = {|username: string, devicename: string|}
export type NativeStatus = void | {Device?: {name: string}, Username?: string}
export type CbDeviceUsernamePair = (err: ?Error, res: ?DeviceUsernamePair) => void
export type MessagesHandler = (arg: {messages: Array<ChatReadMessage>, channel: ChatChannel}) => void
