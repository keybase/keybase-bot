// @flow

//
// writing classic async JS with flow typing looks pretty ugly and is hard to read when defining the
// types inline. So I figured I'd consolidate some common ones here that follow the cb(err,res) model.
//
// For example, instead of these hard-to-read beasts:
//
//     function a (cb : (err: ?Error, res: ?string) => void) : void {
//     function b (cb : (err: ?Error) => void) : void {
//     function c (arg: string, err : ?Error, res : ?{username: string, devicename: string}) => void) : void {
//
// we can write these:
//
//     function a (cb: CbString) : void {
//     function b (cb: CbError)  : void {
//     function c (cb: CbDeviceUsernamePair) : void {


type DeviceUsernamePair = {username: string, devicename: string}
type ChatChannel = {name: string, public: boolean, topic_type: string}
type ChatSendMessage = {body: string}
type ChatReadMessage = any

type CbError = (err: ?Error) => void
type CbAny = (err: ?Error, res : any) => void
type CbDeviceUsernamePair = (err : ?Error, res : ?DeviceUsernamePair) => void

type MessagesHandler = (arg: {messages: Array<ChatReadMessage>, channel: ChatChannel}) => void

export type {DeviceUsernamePair, ChatChannel, ChatSendMessage, ChatReadMessage}
export type {MessagesHandler}
export type {CbAny, CbError, CbDeviceUsernamePair}
