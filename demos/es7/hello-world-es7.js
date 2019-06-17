#!/usr/bin/env node
const Bot = require('../../lib/index.js')

async function main() {
  const bot = new Bot()
  try {
    const username = process.env.KB_USERNAME
    const paperkey = process.env.KB_PAPERKEY
    await bot.init(username, paperkey, {verbose: false})
    console.log(`Your bot is initialized. It is logged in as ${bot.myInfo().username}`)
    const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topicType: 'chat'}
    const message = {
      body: `Hello kbot! This is ${bot.myInfo().username} saying hello from my device ${
        bot.myInfo().devicename
      }`,
    }
    await bot.chat.send(channel, message)
    console.log('Message sent!')
  } catch (error) {
    console.error(error)
  } finally {
    await bot.deinit()
  }
}

main()
