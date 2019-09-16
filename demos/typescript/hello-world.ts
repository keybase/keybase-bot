#!/usr/bin/env node
import Bot from '../../lib/index.js'

async function main(): Promise<void> {
  const bot = new Bot()
  try {
    const username = process.env.KB_USERNAME
    const paperkey = process.env.KB_PAPERKEY
    const friend = process.env.KB_FRIEND
    await bot.init(username, paperkey, {verbose: false})
    console.log(`Your bot is initialized. It is logged in as ${bot.myInfo().username}`)
    const channel = {name: friend, public: false, topicType: 'chat'}
    const message = {
      body: `Hello ${friend}! This is ${bot.myInfo().username} saying hello from my device ${bot.myInfo().devicename}`,
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
