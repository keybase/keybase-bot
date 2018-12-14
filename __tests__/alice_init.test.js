import Bot from '../lib'
import config from './tests.config.js'

describe('Keybase Bot', () => {
  it('Can init and deinit', async () => {
    const alice = new Bot()
    await alice.init(config.alice1.username, config.alice1.paperkey)
    expect(alice.myInfo().username).toBe(config.alice1.username)
    expect(alice.myInfo().devicename).toBe(
      config.alice1.paperkey
        .split(' ')
        .slice(0, 2)
        .join(' ')
    )
    await alice.deinit()
  })

  it('Can init and deinit with a custom home directory', async () => {})

  it('Can init and deinit with an existing Keybase service', async () => {})
})
