#!/usr/bin/env node
var Bot = require('../index.js').Bot

var bot = new Bot()

bot.init({verbose: false}, function (err) {
  if (!err) {
    bot.chatList(null, function (err, res) {
      if (!err) {
        var unreadCount = 0;
        for (var c of res.conversations) {
          unreadCount += c.unread ? 1 : 0
        }
        console.log('You have ' + unreadCount + ' unread conversations out of ' + res.conversations.length + ' total.')
      }
    })
  }
})


