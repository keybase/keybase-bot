#!/usr/bin/env node
const Bot = require('../../index.js')

const bot = new Bot()

async function main() {
  try {
    const username = process.env.KB_USERNAME
    const paperkey = process.env.KB_PAPERKEY
    await bot.init(username, paperkey, {
      autoLogSendOnCrash: true,
    })
    const info = bot.myInfo()
    console.log(`Bot initialized with username ${info.username}.`)

    console.log(`Listening for all messages...`)
    await bot.chat.watchAllChannelsForNewMessages(
      async msg => {
        try {
          console.log(msg)

          await bot.chat.send(msg.channel, {
            body: `hello!`,
          })
        } catch (err) {
          console.error(err)
        }
      },
      e => console.error(e)
    )
  } catch (error) {
    console.log('?')
    console.error(error)
  }
}

main()
