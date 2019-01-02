// @flow
import Bot from '../lib'
import config from './tests.config.js'
import {publicPaperkeyLabel} from './test-utils'

describe('bot.myInfo()', () => {
  it('returns a username, devicename, and homeDir when the bot is initialized', async () => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    const aliceInfo = alice.myInfo()
    expect(aliceInfo).not.toBeNull()
    // We don't care about the possibility that aliceInfo could be null since that will error which we want
    // $FlowFixMe
    expect(aliceInfo.username).toBe(config.bots.alice1.username)
    // $FlowFixMe
    expect(aliceInfo.devicename).toBe(publicPaperkeyLabel(config.bots.alice1.paperkey))
    expect(aliceInfo).toHaveProperty('homeDir')
    await alice.deinit()
  })

  it('returns null when the bot is not initialized', async () => {
    const alice = new Bot()
    expect(alice.myInfo()).toBeNull()
  })
})
