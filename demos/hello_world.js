#!/usr/bin/env node
const Bot = require('../index.js')

async function main() {
  const bot = new Bot()
  console.log('BOT', bot)
  try {
    await bot.init({username: process.env.KB_USERNAME, paperkey: process.env.KB_PAPERKEY, verbose: false})
    console.log(`Your bot is initialized. It is logged in as ${bot.myInfo().username}`)
    const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topic_type: 'chat'}
    const sendArg = {
      channel: channel,
      message: {
        body: `Hello kbot! This is ${bot.myInfo().username} saying hello from my device ${
          bot.myInfo().devicename
        }`,
      },
    }
    await bot.chat.send(sendArg)
    console.log('Message sent!')
  } catch (error) {
    console.error(error)
  } finally {
    await bot.deinit()
  }
}

main()
