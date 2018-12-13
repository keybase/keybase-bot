#!/usr/bin/env node
/* eslint-env jest */

/*
 * This bot loads 2 users from tests.config.js and fires up a bot for each one, simultaneusly,
 * and they cumulatively count to 10; first `alice1` sends 1 to `bob1`, and then each one
 * keeps adding 1 to the previous message.
 */

const Bot = require('../index.js')
const config = require('./tests.config.js')
const alice = new Bot()
const bob = new Bot()

const STOP_AT = 10
let HIGHEST_REACHED = 0

const onMessageForBot = (botName, bot) => {
  const onMessage = async message => {
    try {
      if (message.content.type === 'text') {
        const body = message.content.text.body
        const num = parseInt(body)
        HIGHEST_REACHED = Math.max(num, HIGHEST_REACHED)
        if (num === STOP_AT) {
          // no-op
        }
        // make sure it really was a number
        else if (num >= 0 && num < STOP_AT) {
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
  await alice.init(config.alice1.username, config.alice1.paperkey)
  await bob.init(config.bob1.username, config.bob1.paperkey)
  alice.chat.watchAllChannelsForNewMessages(onMessageForBot('alice', alice))
  bob.chat.watchAllChannelsForNewMessages(onMessageForBot('bob', bob))
  const channel = {
    name: `${config.alice1.username},${config.bob1.username}`,
    public: false,
    topic_type: 'chat',
  }
  const message = {body: '1'}
  await bob.chat.send(channel, message)
}

async function shutDown(code) {
  await alice.deinit()
  await bob.deinit()
}

function waitAMoment(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), ms)
  })
}

async function watchForCompletion() {
  while (true) {
    await waitAMoment(100)
    if (HIGHEST_REACHED === STOP_AT) {
      return true
    }
  }
}

async function runTest() {
  // support running by hand or from jest
  if (typeof test !== 'undefined') {
    it(`can count to ${STOP_AT} with alice and bob`, async () => {
      jest.setTimeout(30000)
      let done = false
      try {
        done = await watchForCompletion()
      } catch (e) {
      } finally {
        expect(done).toBe(true)
        shutDown(done ? 0 : 1)
      }
    })
  } else {
    const done = await watchForCompletion()
    console.log(`Success: ${done}`)
    shutDown(done ? 0 : 1)
  }
}

main().catch(e => {
  console.log('main error', e)
})

runTest()
