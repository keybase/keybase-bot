// @flow
import {Bot} from './bot.js'
import type {MessagesHandler, ChatChannel, ChatReadMessage} from './types.js'

class ChannelWatcher {
  // --------------------------------------------------------------------------

  _bot: Bot
  _channel: ChatChannel
  _onMessages: MessagesHandler
  _highestId: number
  _loopCount: number

  // --------------------------------------------------------------------------

  constructor(arg: {channel: ChatChannel, bot: Bot, onMessages: MessagesHandler}): void {
    this._bot = arg.bot
    this._onMessages = arg.onMessages
    this._channel = arg.channel
    this._highestId = -1
    this._loopCount = 0
    this._watchLoop()
  }

  // --------------------------------------------------------------------------

  _didISendMessage(m: any): boolean {
    const myInfo = this._bot.myInfo()
    return myInfo ? myInfo.username === m.msg.sender.username : false
  }

  // --------------------------------------------------------------------------

  _checkForNewMessages(): Promise<any> {
    let newMessages: Array<ChatReadMessage> = []
    return this._bot
      .chatRead({channel: this._channel, unreadOnly: true})
      .then(res => {
        if (res && res.ratelimits) {
          this._bot._gasPreserver.passGas(res.ratelimits)
        }
        if (res && res.messages) {
          newMessages = res.messages
          this._highestId = res.messages.reduce((a, m) => Math.max(a, m.msg.id), this._highestId)
        }
        console.log(`loopCount: ${this._loopCount} newMessages: ${newMessages.length}`)
        if (newMessages.length) {
          return this._onMessages({messages: newMessages, channel: this._channel})
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  // --------------------------------------------------------------------------

  _watchLoop(): void {
    console.log(`${this._loopCount} '${this._channel.name} entering watchLoop`)
    this._checkForNewMessages().then(() => {
      const delay = this._bot._gasPreserver.recommendedWait()
      console.log(`${this._loopCount} '${this._channel.name} finishing watchLoop ${delay}`)
      setTimeout(() => {
        this._loopCount++
        this._watchLoop()
      }, delay)
    })
  }
}

export {ChannelWatcher}
