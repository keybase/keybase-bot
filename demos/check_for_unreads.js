#!/usr/bin/env node
const Bot = require('../index.js')

async function main() {
  const bot = new Bot()
  try {
    await bot.init({username: process.env.KB_USERNAME, paperkey: process.env.KB_PAPERKEY, verbose: false})
    const res = await bot.chat.list({
      showErrors: true,
      unreadOnly: false,
    })

    console.log(
      `You have ${res.conversations.filter(c => c.unread).length} unread conversations out of ${
        res.conversations.length
      } total`
    )
  } catch (error) {
    console.error(error)
  } finally {
    await bot.deinit()
  }
}

main()
