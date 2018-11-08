// @flow
import {Bot} from './bot.js'
import type {MessagesHandler, ChatReadMessage} from './types.js'

class FullWatcher {
  // --------------------------------------------------------------------------

  _bot: Bot
  _onMessages: MessagesHandler
  _loopCount: number

  // --------------------------------------------------------------------------

  constructor(arg: {bot: Bot, onMessages: MessagesHandler}): void {
    this._bot = arg.bot
    this._onMessages = arg.onMessages
    this._loopCount = 0
    this._watchLoop()
  }

  // --------------------------------------------------------------------------

  _checkForNewMessagesInOneConversation(conversation: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this._bot.chatRead({channel: conversation.channel, unreadOnly: true}).then(res => {
        if (res && res.ratelimits) {
          this._bot._gasPreserver.passGas(res.ratelimits)
          resolve()
        }
        if (res && res.messages) {
          const newMessages = res.messages
          console.log(`found: ${newMessages.length} newMessages: ${conversation.channel}`)
          if (res.messages.length) {
            this._onMessages({messages: newMessages, channel: conversation.channel})
            resolve()
          }
        }
      })
    })
  }

  // --------------------------------------------------------------------------

  _checkForNewMessagesInConversations(arg: {conversations: any, index?: number}): Promise<any> {
    const {conversations} = arg
    let {index} = arg
    if (!index) {
      index = 0
    }
    if (index === conversations.length) {
      return Promise.resolve(null)
    }
    console.log(`CHECKING ${index}, ${conversations[index].channel} for new messages`)
    return this._checkForNewMessagesInOneConversation(conversations[index]).then(() => {
      if (index + 1 === conversations.length) {
      }
      return this._checkForNewMessagesInConversations({conversations, index: index + 1})
    })
  }

  // --------------------------------------------------------------------------

  _checkForNewMessagesInAllConversations(): Promise<any> {
    return this._bot
      .chatList({})
      .then(res => {
        if (res && res.ratelimits) {
          this._bot._gasPreserver.passGas(res.ratelimits)
        }
        if (res && res.conversations) {
          const conversations = res.conversations.filter(c => {
            return c.unread
          })
          console.log(`Of ${res.conversations.length} there are ${conversations.length} that are unread.`)
          return this._checkForNewMessagesInConversations({conversations})
        }
      })
      .catch(err => {
        console.log('Got error getting chat list:', err)
      })
  }

  // --------------------------------------------------------------------------

  _watchLoop(): void {
    this._checkForNewMessagesInAllConversations.then(() => {
      const delay = this._bot._gasPreserver.recommendedWait()
      setTimeout(() => {
        this._loopCount++
        this._watchLoop()
      }, delay)
    })
  }

  // --------------------------------------------------------------------------
}

export {FullWatcher}
