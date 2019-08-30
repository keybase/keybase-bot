/// <reference types="node" />
export declare type AuthResult = {
    uid: UID;
    username: string;
    sid: SessionID;
    isAdmin: boolean;
};
export declare type TimeOrOffset = {
    time: Time;
    offset: DurationMsec;
};
export declare type Metadata = {
    uid: UID;
    msgID: MsgID;
    ctime: Time;
    deviceID: DeviceID;
    inBandMsgType: number;
};
export declare type InBandMessage = {
    stateUpdate?: StateUpdateMessage;
    stateSync?: StateSyncMessage;
};
export declare type State = {
    items: ItemAndMetadata[];
};
export declare type StateUpdateMessage = {
    md: Metadata;
    creation?: Item;
    dismissal?: Dismissal;
};
export declare type StateSyncMessage = {
    md: Metadata;
};
export declare type MsgRange = {
    endTime: TimeOrOffset;
    category: Category;
    skipMsgIDs: MsgID[];
};
export declare type Dismissal = {
    msgIDs: MsgID[];
    ranges: MsgRange[];
};
export declare type Item = {
    category: Category;
    dtime: TimeOrOffset;
    remindTimes: TimeOrOffset[];
    body: Body;
};
export declare type ItemAndMetadata = {
    md?: Metadata;
    item?: Item;
};
export declare type Reminder = {
    item: ItemAndMetadata;
    seqno: number;
    remindTime: Time;
};
export declare type ReminderID = {
    uid: UID;
    msgID: MsgID;
    seqno: number;
};
export declare type OutOfBandMessage = {
    uid: UID;
    system: System;
    body: Body;
};
export declare type ReminderSet = {
    reminders: Reminder[];
    moreRemindersReady: boolean;
};
export declare type Message = {
    oobm?: OutOfBandMessage;
    ibm?: InBandMessage;
};
export declare type DurationMsec = number;
export declare type DurationSec = number;
export declare type Category = string;
export declare type System = string;
export declare type UID = Buffer;
export declare type MsgID = Buffer;
export declare type DeviceID = Buffer;
export declare type Body = Buffer;
export declare type Time = number;
export declare type SessionID = string;
export declare type SessionToken = string;
export declare type SyncResult = {
    msgs: InBandMessage[];
    hash: Buffer;
};
/**
 * DescribeConnectedUsers will take a list of users, and return the list of users
 *     which are connected to any Gregor in the cluster, and what devices (and device type)
 *     those users are connected with.
 */
export declare type ConnectedDevice = {
    deviceID: DeviceID;
    deviceType: string;
    devicePlatform: string;
    userAgent: string;
};
export declare type ConnectedUser = {
    uid: UID;
    devices: ConnectedDevice[];
};
