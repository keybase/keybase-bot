import Bot from '../lib'
import config from './tests.config.js'

describe('Keybase bot initialization', () => {
  it('can init with a username and paperkey', async () => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    expect(alice.myInfo().username).toBe(config.bots.alice1.username)
    await alice.deinit()
  })

  it('throws an error if not given a username', async () => {
    const alice = new Bot()
    await expect(alice.init(undefined, config.bots.alice1.paperkey)).rejects.toThrowError()
  })

  it('throws an error if not given a paperkey', async () => {
    const alice = new Bot()
    await expect(alice.init(config.bots.alice1.username, undefined)).rejects.toThrowError()
  })

  // it('can init if a service with a logged in user is currently running', async () => {
  //   const alice = new Bot()
  //   await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
  //   expect(alice.myInfo().username).toBe(config.bots.alice1.username)
  //   await alice.deinit()
  // })
})
