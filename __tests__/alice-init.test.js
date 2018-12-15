#!/usr/bin/env node
import Bot from '../lib'
import config from './tests.config.js'

const alice = new Bot()

async function main() {
  it(`alice can init()`, async () => {
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    expect(alice.myInfo().username).toBe(config.bots.alice1.username)
    await alice.deinit()
  })
}

main()
