import Bot from '../lib'
import config from './tests.config.js'
import {startServiceManually, stopServiceManually} from './test-utils'
import {randomTempDir} from '../lib/utils'

describe('Keybase bot initialization', () => {
  it('can init with a username and paperkey', async () => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    expect(alice.myInfo().username).toBe(config.bots.alice1.username)
    await alice.deinit()
  })

  it('throws an error if not given a username', async () => {
    const alice = new Bot()
    await expect(alice.init('', config.bots.alice1.paperkey)).rejects.toThrowError()
  })

  it('throws an error if not given a paperkey', async () => {
    const alice = new Bot()
    await expect(alice.init(config.bots.alice1.username, '')).rejects.toThrowError()
  })

  it('throws an error if given an invalid paperkey', async () => {
    const alice = new Bot()
    await expect(alice.init(config.bots.alice1.username, 'not a real paperkey')).rejects.toThrowError()
  })

  it('can init if a service with a logged in user is currently running', async () => {
    const homeDir = randomTempDir()
    await startServiceManually(homeDir, config.bots.alice1.username, config.bots.alice1.paperkey)
    const alice = new Bot()
    await alice.initFromRunningService(homeDir)
    expect(alice.myInfo().username).toBe(config.bots.alice1.username)
    await alice.deinit()
    await stopServiceManually(homeDir)
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
    await startServiceManually(homeDir, config.bots.bob1.username, config.bots.bob1.paperkey)
    await alice.initFromRunningService(homeDir)
    await expect(alice.initFromRunningService(homeDir)).rejects.toThrowError()
    await alice.deinit()
    await stopServiceManually(homeDir)
  })

  it('can init with botLite enabled by default', async () => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    expect(alice.myInfo().botLite).toBe(true)
    await alice.deinit()
  })

  it('can respect disabling botLite', async () => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey, {botLite: false})
    expect(alice.myInfo().botLite).toBe(false)
    await alice.deinit()
  })

  it('can config without botLite', async () => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey, {verbose: true})
    expect(alice.myInfo().botLite).toBe(true)
    await alice.deinit()
  })
})
