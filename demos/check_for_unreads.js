#!/usr/bin/env node
const {Bot} = require('../index.js')

const bot = new Bot()

bot
  .init({
    username: process.env.KB_USERNAME,
    paperkey: process.env.KB_PAPERKEY,
    verbose: false,
  })
  .then(() => {
    bot.chatList(null).then(res => {
      const unreadCount = res.conversations.filter(c => c.unread).length
      console.log(`You have ${unreadCount} unread conversations out of ${res.conversations.length} total`)
    })
  })
