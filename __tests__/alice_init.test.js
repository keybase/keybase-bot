#!/usr/bin/env node
/* eslint-env jest */

const Bot = require('../index.js')
const config = require('./tests.config.js')
const alice = new Bot()

async function runTest() {
  it(`alice can init()`, async () => {
    jest.setTimeout(10000)
    await alice.init(config.alice1.username, config.alice1.paperkey)
    expect(alice.myInfo().username).toBe(config.alice1.username)
    await alice.deinit()
  })
}

runTest()
