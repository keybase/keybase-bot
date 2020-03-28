#!/usr/bin/env node
const Bot = require('../../lib/index.js')

const bot = new Bot()

async function main() {
  try {
    const username = process.env.KB_USERNAME
    const paperkey = process.env.KB_PAPERKEY
    await bot.init(username, paperkey)
    const info = bot.myInfo()
    console.log(`Echo bot initialized with username ${info.username}.`)

    await bot.chat.clearCommands()
    await bot.chat.advertiseCommands({
      advertisements: [
        {
          type: 'public',
          commands: [
            {
              name: 'echo',
              description: 'Sends out your message to the current channel.',
              usage: '[your text]',
            },
          ],
        },
      ],
    })

    const onMessage = async message => {
      if (message.content.type !== 'text') {
        return
      }

      if (!message.content.text.body.startsWith('!echo ')) {
        return
      }

      bot.chat.send(message.conversationId, {
        body: message.content.text.body.substr(6),
      })
    }

    const onError = e => console.error(e)
    console.log(`Listening for messages...`)
    await bot.chat.watchAllChannelsForNewMessages(onMessage, onError)
  } catch (error) {
    console.error(error)
  }
}

async function shutDown() {
  await bot.deinit()
  process.exit()
}

process.on('SIGINT', shutDown)
process.on('SIGTERM', shutDown)

main()
