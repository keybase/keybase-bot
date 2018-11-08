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
    bot
      .chatList({
        show_errors: true,
        unread_only: true,
      })
      .then(res => {
        const unreadCount = res.conversations.filter(c => c.unread).length
        console.log(`You have ${unreadCount} unread conversations out of ${res.conversations.length} total`)
      })
      .catch(err => console.log(err))
  })
  .catch(err => console.log('Failed to initialize', err))
