#!/usr/bin/env node

/*
 * This bot loads 2 users from tests.config.js and fires up a bot for each one, simultaneusly,
 * and they cumulatively count to 10; first `alice1` sends 1 to `bob1`, and then each one
 * keeps adding 1 to the previous message.
 */

import crypto from 'crypto'
import Bot from '../lib'
import config from './tests.config.js'
const alice = new Bot()
const bob = new Bot()
const STOP_AT = 10
const CONVO_CODE = crypto.randomBytes(8).toString('hex')
let HIGHEST_REACHED = 0

const onMessageForBot = (botName, bot) => {
  const onMessage = async message => {
    if (message.content.type === 'text') {
      const body = message.content.text.body
      if (body.indexOf(CONVO_CODE) !== -1) {
        const num = parseInt(body.replace(CONVO_CODE, '').trim())
        HIGHEST_REACHED = Math.max(num, HIGHEST_REACHED)
        if (num < STOP_AT) {
          const reply = {body: `${CONVO_CODE} ${num + 1}`}
          await bot.chat.send(message.channel, reply)
        }
      }
    }
  }
  return onMessage
}

async function startup() {
  await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
  await bob.init(config.bots.bob1.username, config.bots.bob1.paperkey)
  alice.chat.watchAllChannelsForNewMessages(onMessageForBot('alice', alice))
  bob.chat.watchAllChannelsForNewMessages(onMessageForBot('bob', bob))
  const channel = {
    name: `${config.bots.alice1.username},${config.bots.bob1.username}`,
    public: false,
    topic_type: 'chat',
  }
  const message = {body: `${CONVO_CODE} 1`}
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

startup().catch(e => {
  console.log('main error', e)
})

runTest()
