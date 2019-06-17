#!/usr/bin/env node
const Bot = require('../lib/index.js')

function main() {
  const bot = new Bot()
  const username = process.env.KB_USERNAME
  const paperkey = process.env.KB_PAPERKEY
  bot
    .init(username, paperkey)
    .then(() => {
      bot.chat.list({showErrors: true}).then(conversations => {
        if (conversations.length) {
          const unreadCount = conversations.filter(c => c.unread).length
          console.log(`You have ${unreadCount} unread conversations out of ${conversations.length} total`)
        } else {
          console.log('You have no messages. Go chat with someone!')
        }
        bot.deinit()
      })
    })
    .catch(error => {
      console.error(error)
      bot.deinit()
    })
}

main()
