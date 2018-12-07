#!/usr/bin/env node

/*
 * This bot loads 2 users from tests.config.js and fires up a bot for each one, simultaneusly,
 * and they cumulatively count to 10; first `alice1` sends 1 to `bob1`, and then each one
 * keeps adding 1 to the previous message. Script exits when 10 is reached.
 */

const Bot = require('../index.js')
const config = require('./tests.config.js')
const alice = new Bot()
const bob = new Bot()

const STOPAT = 10

const onMessageForBot = (botName, bot) => {
  const onMessage = async message => {
    try {
      if (message.content.type === 'text') {
        const body = message.content.text.body
        console.log(`${botName} (${bot.myInfo().username}) got message ${body}`)
        const num = parseInt(body)
        if (num === STOPAT) {
          shutDown(0)
        }
        // make sure it really was a number
        else if (num >= 0 && num <= STOPAT) {
          const reply = {body: (num + 1).toString()}
          await bot.chat.send(message.channel, reply)
        } else {
          throw new Error('Got non-integer message')
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
  return onMessage
}

async function main() {
  try {
    await alice.init(config.alice1.username, config.alice1.paperkey)
    await bob.init(config.bob1.username, config.bob1.paperkey)
    console.log(`Both logged in: ${alice.myInfo().username}, ${bob.myInfo().username}`)
    alice.chat.watchAllChannelsForNewMessages(onMessageForBot('alice', alice))
    bob.chat.watchAllChannelsForNewMessages(onMessageForBot('bob', bob))
    const channel = {
      name: `${config.alice1.username},${config.bob1.username}`,
      public: false,
      topic_type: 'chat',
    }
    const message = {body: '1'}
    await bob.chat.send(channel, message)
  } catch (error) {
    console.error(error.message)
    shutDown(1)
  }
}

async function shutDown(code) {
  await alice.deinit()
  await bob.deinit()
  process.exit(code)
}

main()
