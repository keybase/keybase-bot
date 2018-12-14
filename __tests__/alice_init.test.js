#!/usr/bin/env node
/* eslint-env jest */
import Bot from '../lib'
import config from './tests.config.js'

const alice = new Bot()

async function main() {
  it(`alice can init()`, async () => {
    await alice.init(config.alice1.username, config.alice1.paperkey)
    expect(alice.myInfo().username).toBe(config.alice1.username)
    await alice.deinit()
  })
}

main()
