import Bot from '../lib'
import config from './tests.config.js'
import {keybaseServiceStartup, keybaseExec, randomTempDir} from '../lib/utils'

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

  it('can init if a service with a logged in user is currently running', async () => {
    const homeDir = randomTempDir()
    const servicePID = await keybaseServiceStartup(homeDir)
    // Ideally, this should use `login` instead of `oneshot` but `login` doesn't provide a programmatic way to input a password.
    await keybaseExec(homeDir, ['oneshot', '--username', config.bots.alice1.username], {
      stdinBuffer: config.bots.alice1.paperkey,
    })

    const alice = new Bot()
    await alice.initFromRunningService(homeDir)

    expect(alice.myInfo().username).toBe(config.bots.alice1.username)
    await alice.deinit()
    process.kill(servicePID)
  })

  it('throws an error if an invalid home directory is given as the location of a currently running service', async () => {
    const homeDir = '/blah/fake-dir-that-does-not-exist'
    const alice = new Bot()
    await expect(alice.initFromRunningService(homeDir)).rejects.toThrowError()
  })

  it('throws an error if it is already initialized', async () => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    await expect(alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)).rejects.toThrowError()
    await alice.deinit()

    const homeDir = randomTempDir()
    const servicePID = await keybaseServiceStartup(homeDir)
    await keybaseExec(homeDir, ['oneshot', '--username', config.bots.bob1.username], {
      stdinBuffer: config.bots.bob1.paperkey,
    })
    await alice.initFromRunningService(homeDir)
    await expect(alice.initFromRunningService(homeDir)).rejects.toThrowError()
    await alice.deinit()
    process.kill(servicePID)
  })
})
