#!/usr/bin/env node
const Bot = require('../../lib/index.js')

async function main() {
  const bot = new Bot()

  try {
    const username = process.env.KB_USERNAME
    const paperkey = process.env.KB_PAPERKEY
    await bot.init(username, paperkey)
    const conversations = await bot.chat.list({
      showErrors: true,
    })
    if (conversations.length) {
      const unreadCount = conversations.filter(c => c.unread).length
      console.log(`You have ${unreadCount} unread conversations out of ${conversations.length} total`)
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
