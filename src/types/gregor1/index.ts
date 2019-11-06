/*
 * gregor.1
 *
 * Auto-generated to TypeScript types by avdl-compiler v1.4.6 (https://github.com/keybase/node-avdl-compiler)
 * Input files:
 * - ../client/protocol/avdl/gregor1/auth.avdl
 * - ../client/protocol/avdl/gregor1/auth_internal.avdl
 * - ../client/protocol/avdl/gregor1/auth_update.avdl
 * - ../client/protocol/avdl/gregor1/common.avdl
 * - ../client/protocol/avdl/gregor1/incoming.avdl
 * - ../client/protocol/avdl/gregor1/outgoing.avdl
 * - ../client/protocol/avdl/gregor1/remind.avdl
 */

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
  msgId: MsgID
  ctime: Time
  deviceId: DeviceID
  inBandMsgType: number
}

export type ReminderID = {
  uid: UID
  msgId: MsgID
  seqno: number
}

export type OutOfBandMessage = {
  uid: UID
  system: System
  body: Body
}

/**
 * DescribeConnectedUsers will take a list of users, and return the list of users
 *     which are connected to any Gregor in the cluster, and what devices (and device type)
 *     those users are connected with.
 */
export type ConnectedDevice = {
  deviceId: DeviceID
  deviceType: string
  devicePlatform: string
  userAgent: string
}

export type StateSyncMessage = {
  md: Metadata
}

export type MsgRange = {
  endTime: TimeOrOffset
  category: Category
  skipMsgIDs: MsgID[] | null
}

export type Item = {
  category: Category
  dtime: TimeOrOffset
  remindTimes: TimeOrOffset[] | null
  body: Body
}

export type ConnectedUser = {
  uid: UID
  devices: ConnectedDevice[] | null
}

export type Dismissal = {
  msgIDs: MsgID[] | null
  ranges: MsgRange[] | null
}

export type ItemAndMetadata = {
  md?: Metadata
  item?: Item
}

export type State = {
  items: ItemAndMetadata[] | null
}

export type StateUpdateMessage = {
  md: Metadata
  creation?: Item
  dismissal?: Dismissal
}

export type Reminder = {
  item: ItemAndMetadata
  seqno: number
  remindTime: Time
}

export type InBandMessage = {
  stateUpdate?: StateUpdateMessage
  stateSync?: StateSyncMessage
}

export type ReminderSet = {
  reminders: Reminder[] | null
  moreRemindersReady: boolean
}

export type Message = {
  oobm?: OutOfBandMessage
  ibm?: InBandMessage
}

export type SyncResult = {
  msgs: InBandMessage[] | null
  hash: Buffer
}
