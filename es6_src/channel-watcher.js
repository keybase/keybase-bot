// @flow
import {Bot} from './bot.js'
import type {MessagesHandler} from './types.js'
import type {CbError} from './types.js'
import type {ChatChannel, ChatReadMessage} from './types.js'

class ChannelWatcher {

  // --------------------------------------------------------------------------

  _bot: Bot
  _channel: ChatChannel
  _onMessages: MessagesHandler
  _highestId: number
  _loopCount: number
  _treatOldMessagesAsNew: boolean

  // --------------------------------------------------------------------------

  constructor (arg: {channel: ChatChannel, bot: Bot, onMessages: MessagesHandler, treatOldMessagesAsNew?: boolean}) : void {
    this._bot = arg.bot
    this._onMessages = arg.onMessages
    this._channel = arg.channel
    this._highestId = -1
    this._loopCount = 0
    this._treatOldMessagesAsNew = !!arg.treatOldMessagesAsNew
    this._watchLoop()
  }

  // --------------------------------------------------------------------------

  _didISendMessage (m: any): boolean {
    let myInfo = this._bot.myInfo()
    return myInfo ? (myInfo.username === m.msg.sender.username) : false
  }

  // --------------------------------------------------------------------------

  _checkForNewMessages (cb: CbError) : void {
    let newMessages: Array<ChatReadMessage> = []
    this._bot.chatRead({channel: this._channel, unreadOnly: true}, (err, res) => {
      if (err) {
        console.log(err)
      }
      if (res && res.ratelimits) {
        this._bot._gasPreserver.passGas(res.ratelimits)
      }
      if (res && res.messages) {
        newMessages = res.messages
        this._highestId = res.messages.reduce((a, m) => Math.max(a, m.msg.id), this._highestId)
      }
      console.log(`loopCount: ${this._loopCount} newMessages: ${newMessages.length}`)
      if (newMessages.length) {
        this._onMessages({messages: newMessages, channel: this._channel})
      }
      return cb(err)
    })
  }

  // --------------------------------------------------------------------------

  _watchLoop () : void {
    console.log(`${this._loopCount} '${this._channel.name} entering watchLoop`)
    this._checkForNewMessages(() => {
      let delay = this._bot._gasPreserver.recommendedWait()
      console.log(`${this._loopCount} '${this._channel.name} finishing watchLoop ${delay}`)
      setTimeout(() => {
        this._loopCount++
        this._watchLoop()
      }, delay)
    })
  }

}

export {ChannelWatcher}
