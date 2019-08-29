/*
 * undefined
 *
 * Auto-generated to TypeScript types by avdl-compiler v1.4.1 (https://github.com/keybase/node-avdl-compiler)
 * Input files:
 * - ../client/protocol/avdl/gregor1/auth.avdl
 * - ../client/protocol/avdl/gregor1/auth_internal.avdl
 * - ../client/protocol/avdl/gregor1/auth_update.avdl
 * - ../client/protocol/avdl/gregor1/common.avdl
 * - ../client/protocol/avdl/gregor1/incoming.avdl
 * - ../client/protocol/avdl/gregor1/outgoing.avdl
 * - ../client/protocol/avdl/gregor1/remind.avdl
 */

export type AuthResult = {
  uid: UID
  username: string
  sid: SessionID
  isAdmin: boolean
}

export type TimeOrOffset = {
  time: Time
  offset: DurationMsec
}

export type Metadata = {
  uid: UID
  msgID: MsgID
  ctime: Time
  deviceID: DeviceID
  inBandMsgType: number
}

export type InBandMessage = {
  stateUpdate?: StateUpdateMessage
  stateSync?: StateSyncMessage
}

export type State = {
  items: ItemAndMetadata[]
}

export type StateUpdateMessage = {
  md: Metadata
  creation?: Item
  dismissal?: Dismissal
}

export type StateSyncMessage = {
  md: Metadata
}

export type MsgRange = {
  endTime: TimeOrOffset
  category: Category
  skipMsgIDs: MsgID[]
}

export type Dismissal = {
  msgIDs: MsgID[]
  ranges: MsgRange[]
}

export type Item = {
  category: Category
  dtime: TimeOrOffset
  remindTimes: TimeOrOffset[]
  body: Body
}

export type ItemAndMetadata = {
  md?: Metadata
  item?: Item
}

export type Reminder = {
  item: ItemAndMetadata
  seqno: number
  remindTime: Time
}

export type ReminderID = {
  uid: UID
  msgID: MsgID
  seqno: number
}

export type OutOfBandMessage = {
  uid: UID
  system: System
  body: Body
}

export type ReminderSet = {
  reminders: Reminder[]
  moreRemindersReady: boolean
}

export type Message = {
  oobm?: OutOfBandMessage
  ibm?: InBandMessage
}

export type DurationMsec = number

export type DurationSec = number

export type Category = string

export type System = string

export type UID = Buffer

export type MsgID = Buffer

export type DeviceID = Buffer

export type Body = Buffer

export type Time = number

export type SessionID = string

export type SessionToken = string

export type SyncResult = {
  msgs: InBandMessage[]
  hash: Buffer
}

/**
 * DescribeConnectedUsers will take a list of users, and return the list of users
 *     which are connected to any Gregor in the cluster, and what devices (and device type)
 *     those users are connected with.
 */
export type ConnectedDevice = {
  deviceID: DeviceID
  deviceType: string
  devicePlatform: string
  userAgent: string
}

export type ConnectedUser = {
  uid: UID
  devices: ConnectedDevice[]
}
