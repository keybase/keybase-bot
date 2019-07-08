import Bot from '../lib'
import config from './tests.config'
import {startServiceManually, stopServiceManually} from './test-utils'
import {randomTempDir} from '../lib/utils'
import os from 'os'
import {InitOptions} from '../lib/utils/options'

describe('Keybase bot initialization', (): void => {
  it('can init with a username and paperkey', async (): Promise<void> => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    expect(alice.myInfo().username).toBe(config.bots.alice1.username)
    // also check a double-init causes error
    await expect(alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)).rejects.toThrowError()
    await alice.deinit()
  })

  it('throws an error if not given a username', async (): Promise<void> => {
    const alice = new Bot()
    await expect(alice.init('', config.bots.alice1.paperkey)).rejects.toThrowError()
  })

  it('throws an error if not given a paperkey', async (): Promise<void> => {
    const alice = new Bot()
    await expect(alice.init(config.bots.alice1.username, '')).rejects.toThrowError()
  })

  it('throws an error if given an invalid paperkey', async (): Promise<void> => {
    const alice = new Bot()
    await expect(alice.init(config.bots.alice1.username, 'not a real paperkey')).rejects.toThrowError()
  })

  it('can init if a service with a logged in user is currently running', async (): Promise<void> => {
    const homeDir = randomTempDir()
    await startServiceManually(homeDir, config.bots.alice1.username, config.bots.alice1.paperkey)
    const alice = new Bot()
    await alice.initFromRunningService(homeDir)
    expect(alice.myInfo().username).toBe(config.bots.alice1.username)
    await alice.deinit()
    await stopServiceManually(homeDir)
  })

  it('throws an error if an invalid home directory is given as the location of a currently running service', async (): Promise<void> => {
    const homeDir = '/blah/fake-dir-that-does-not-exist'
    const alice = new Bot()
    await expect(alice.initFromRunningService(homeDir)).rejects.toThrowError()
  })

  it('throws an error if it is already initialized', async (): Promise<void> => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    await expect(alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)).rejects.toThrowError()
    await alice.deinit()
    const homeDir = randomTempDir()
    await startServiceManually(homeDir, config.bots.bob1.username, config.bots.bob1.paperkey)
    await expect(alice.initFromRunningService(homeDir)).rejects.toThrowError()
    await alice.deinit()
    await stopServiceManually(homeDir)
  })

  it('can init with botLite/disableTyping enabled by default', async (): Promise<void> => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    expect(alice.myInfo().botLite).toBe(true)
    expect(alice.myInfo().disableTyping).toBe(true)
    await alice.deinit()
  })

  it('can respect disabling botLite and disableTyping', async (): Promise<void> => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey, {
      botLite: false,
      disableTyping: false,
    })
    expect(alice.myInfo().botLite).toBe(false)
    expect(alice.myInfo().disableTyping).toBe(false)
    await alice.deinit()
  })

  it('can config without botLite or disableTyping', async (): Promise<void> => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey, {verbose: true})
    expect(alice.myInfo().botLite).toBe(true)
    expect(alice.myInfo().disableTyping).toBe(true)
    await alice.deinit()
  })

  it('can config with admin debug mode', async (): Promise<void> => {
    const tmpDir = os.tmpdir()
    const alice = new Bot()
    const initOptions: InitOptions = {
      adminDebugDirectory: tmpDir,
    }
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey, initOptions)
    await alice.deinit()
  })
})
