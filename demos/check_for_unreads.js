#!/usr/bin/env node
const {Bot} = require('../index.js')

async function main() {
  const bot = new Bot()

  try {
    await bot.init({username: process.env.KB_USERNAME, paperkey: process.env.KB_PAPERKEY, verbose: false})
    const res = await bot.chatList({
      showErrors: true,
      unreadOnly: true,
    })
    if (res) {
      const unreadCount = res.conversations.filter(c => c.unread).length
      console.log(`You have ${unreadCount} unread conversations out of ${res.conversations.length} total`)
    } else {
      console.log('You have no messages. Go chat with someone!')
    }
  } catch (error) {
    console.error(error)
  } finally {
    await bot.deinit()
  }
}

main()
