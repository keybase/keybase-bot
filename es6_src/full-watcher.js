// @flow
import {Bot} from './bot.js'
import type {MessagesHandler} from './types.js'
import type {CbError} from './types.js'

class FullWatcher {

  // --------------------------------------------------------------------------

  _bot: Bot;
  _onMessages: MessagesHandler;
  _loopCount: number;

  // --------------------------------------------------------------------------

  constructor (arg: {bot: Bot, onMessages: MessagesHandler}) : void {
    this._bot = arg.bot
    this._onMessages = arg.onMessages
    this._loopCount = 0
    this._watchLoop()
  }

  // --------------------------------------------------------------------------

  _checkForNewMessagesInOneConversation (conversation: any, cb: CbError) : void {
    this._bot.chatRead({channel: conversation.channel, unreadOnly: true}, (err, res) => {
      if (res && res.ratelimits) {
        this._bot._gasPreserver.passGas(res.ratelimits)
      }
      if (res && res.messages) {
        let newMessages = res.messages
        console.log(`found: ${newMessages.length} newMessages: ${conversation.channel}`)
        if (res.messages.length) {
          this._onMessages({messages: newMessages, channel: conversation.channel})
        }
      }
      cb(err)
    })
  }

  // --------------------------------------------------------------------------

  _checkForNewMessagesInConversations (arg: {conversations: any, index?: number}, cb: CbError) : void {
    let {conversations, index} = arg
    if (!index) {
      index = 0
    }
    console.log(`CHECKING ${index}, ${conversations[index].channel} for new messages`)
    this._checkForNewMessagesInOneConversation(conversations[index], (err, res) => {
      if (index + 1 === conversations.length) {
        return cb(err)
      } else {
        this._checkForNewMessagesInConversations({conversations, index: index + 1}, cb)
      }
    })
  }

  // --------------------------------------------------------------------------

  _checkForNewMessagesInAllConversations (cb: CbError) : void {
    this._bot.chatList((err, res) => {
      if (err) {
        console.log(err)
      } else {
        if (res && res.ratelimits) {
          this._bot._gasPreserver.passGas(res.ratelimits)
        }
        if (res && res.conversations) {
          let conversations = res.conversations.filter((c) => {
            return c.unread
          })
          console.log(`Of ${res.conversations.length} there are ${conversations.length} that are unread.`)
          this._checkForNewMessagesInConversations({conversations}, (err) => {
            cb(err)
            return
          })
        }
      }
    })
  }


  // --------------------------------------------------------------------------

  _watchLoop () : void {
    this._checkForNewMessagesInAllConversations(() => {
      let delay = this._bot._gasPreserver.recommendedWait()
      setTimeout(() => {
        this._loopCount++
        this._watchLoop()
      }, delay)
    })
  }

  // --------------------------------------------------------------------------

}

export {FullWatcher}
