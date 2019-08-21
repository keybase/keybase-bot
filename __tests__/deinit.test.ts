import fs from 'fs'
import {exec} from 'child_process'
import {promisify} from 'util'

import Bot from '../lib'
import config from './tests.config'
import {startServiceManually, stopServiceManually} from './test-utils'
import {randomTempDir, timeout} from '../lib/utils'
import {MessageSummary} from '../lib/chat-client/types'
import {InitOptions} from '../lib/utils/options'

async function doesFileOrDirectoryExist(fpath: string): Promise<boolean> {
  try {
    await promisify(fs.lstat)(fpath)
    return true
  } catch (err) {
    return false
  }
}

async function countProcessesMentioning(substr: string): Promise<number> {
  expect(substr).toMatch(/^[0-9a-z_\- /]+$/i)
  const aexec = promisify(exec)
  try {
    const execRes = await aexec(`ps ax | grep -v 'grep' | grep "${substr}"`)
    return execRes.stdout.split('\n').length - 1
  } catch (e) {
    if (e.code === 1) {
      return 0
    } else {
      throw new Error('Error looking for processes')
    }
  }
}

describe('Keybase bot deinitialization', (): void => {
  it('kills all spawned processes it creates', async (): Promise<any> => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    const aliceHomeDir = alice.myInfo().homeDir || ''

    // make sure our bot can return a home directory
    expect(aliceHomeDir.indexOf('keybase_bot_')).toBeGreaterThanOrEqual(0)
    // make sure that homeDir exists
    expect(await doesFileOrDirectoryExist(aliceHomeDir)).toBe(true)
    // make sure we see a running server processes
    expect(await countProcessesMentioning(aliceHomeDir)).toBe(1)

    const bobHomeDir = randomTempDir()
    const bob = new Bot()
    await startServiceManually(bobHomeDir, config.bots.bob1.username, config.bots.bob1.paperkey)
    await bob.initFromRunningService(bobHomeDir)

    expect(bobHomeDir.indexOf('keybase_bot_')).toBeGreaterThanOrEqual(0)
    expect(await doesFileOrDirectoryExist(bobHomeDir)).toBe(true)
    expect(await countProcessesMentioning(bobHomeDir)).toBe(1)

    // get a couple listen processes going
    alice.chat.watchAllChannelsForNewMessages((msg: MessageSummary): void => console.log(msg))
    alice.chat.watchAllChannelsForNewMessages((msg: MessageSummary): void => console.log(msg))
    bob.chat.watchAllChannelsForNewMessages((msg: MessageSummary): void => console.log(msg))
    bob.chat.watchAllChannelsForNewMessages((msg: MessageSummary): void => console.log(msg))
    bob.chat.watchAllChannelsForNewMessages((msg: MessageSummary): void => console.log(msg))

    // Give just a couple seconds for the processes to get going
    await timeout(3000)
    expect(await countProcessesMentioning(aliceHomeDir)).toBe(3)
    expect(await countProcessesMentioning(bobHomeDir)).toBe(4)

    await alice.deinit()
    await bob.deinit()

    // Also give a couple seconds for the processes to fully deinit
    await timeout(3000)

    // All processes should be shut down for alice
    expect(await countProcessesMentioning(aliceHomeDir)).toBe(0)
    // The service should still be running for bob, as that was started before he was initialized
    expect(await countProcessesMentioning(bobHomeDir)).toBe(1)
    await stopServiceManually(bobHomeDir)
    await expect(await countProcessesMentioning(bobHomeDir)).toBe(0)
  })

  it('handles shutting down detached services', async (): Promise<void> => {
    const initOptions: InitOptions = {useDetachedService: true}
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey, initOptions)
    const aliceHomeDir = alice.myInfo().homeDir || ''
    expect(aliceHomeDir.indexOf('keybase_bot_')).toBeGreaterThanOrEqual(0)
    expect(await doesFileOrDirectoryExist(aliceHomeDir)).toBe(true)
    expect(await countProcessesMentioning(aliceHomeDir)).toBe(1)
    await alice.deinit()
    await timeout(3000)
    expect(await countProcessesMentioning(aliceHomeDir)).toBe(0)
  })

  it('removes its home directory if initialized with a paperkey', async (): Promise<void> => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    const homeDir = alice.myInfo().homeDir || '--nonsense-dir-'
    expect(await doesFileOrDirectoryExist(homeDir)).toBe(true)
    await alice.deinit()
    expect(await doesFileOrDirectoryExist(homeDir)).toBe(false)
  })

  it('handles double deinits gracefully', async (): Promise<void> => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    const homeDir = alice.myInfo().homeDir || '--nonsense-dir-'
    await alice.deinit()
    await alice.deinit()
    expect(await doesFileOrDirectoryExist(homeDir)).toBe(false)
  })

  it('does not remove its home directory if initialized from a running service', async (): Promise<void> => {
    const homeDir = randomTempDir()
    await startServiceManually(homeDir, config.bots.alice1.username, config.bots.alice1.paperkey)
    const alice = new Bot()
    await alice.initFromRunningService(homeDir)

    expect(await doesFileOrDirectoryExist(homeDir)).toBe(true)
    await alice.deinit()
    expect(await doesFileOrDirectoryExist(homeDir)).toBe(true)
    await stopServiceManually(homeDir)
  })
})
