#!/usr/bin/env node

/*
 * This bot loads 2 users from tests.config.js and fires up a bot for each one, simultaneusly,
 * and they cumulatively count to 10; first `alice1` sends 1 to `bob1`, and then each one
 * keeps adding 1 to the previous message.
 */

import Bot from '../lib/entry.js'
import config from './tests.config.js'
const alice = new Bot()
const bob = new Bot()

let ALICE_IS_SATISFIED = false
let BOB_IS_SATISFIED = false

async function startup() {
  await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
  await bob.init(config.bots.bob1.username, config.bots.bob1.paperkey)
  const channel = {
    name: config.teams.acme.teamname,
    public: false,
    topic_type: 'chat',
    members_type: 'team',
    topic_name: 'general',
  }
  alice.chat.watchChannelForNewMessages(channel, message => {
    if (message.content.type === 'text' && message.content.text.body === 'hello alice') {
      ALICE_IS_SATISFIED = true
    }
  })
  bob.chat.watchChannelForNewMessages(channel, message => {
    if (message.content.type === 'text' && message.content.text.body === 'hello bob') {
      BOB_IS_SATISFIED = true
    }
  })
  await alice.chat.send(channel, {body: 'hello bob'})
  await bob.chat.send(channel, {body: 'hello alice'})
}

async function shutDown() {
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
    if (ALICE_IS_SATISFIED && BOB_IS_SATISFIED) {
      await shutDown()
      return true
    }
  }
}

startup()

it(`alice and bob can talk in a team channel`, async () => {
  jest.setTimeout(15000)
  await watchForCompletion()
  return true
})
