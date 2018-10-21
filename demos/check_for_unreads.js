#!/usr/bin/env node
const {Bot} = require('../index.js')

const bot = new Bot()

bot.init({verbose: false}, function(err) {
  if (!err) {
    bot.chatList(null, function(err, res) {
      if (!err) {
        let unreadCount = 0
        for (const c of res.conversations) {
          unreadCount += c.unread ? 1 : 0
        }
        console.log(
          'You have ' + unreadCount + ' unread conversations out of ' + res.conversations.length + ' total.'
        )
      }
    })
  }
})
