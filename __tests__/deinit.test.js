import fs from 'fs'
import {promisify} from 'util'

import Bot from '../lib'
import config from './tests.config.js'
import {keybaseServiceStartup, keybaseExec, randomTempDir} from '../lib/utils'

async function doesFileOrDirectoryExist(fpath) {
  try {
    await promisify(fs.lstat)(fpath)
    return true
  } catch (err) {
    return false
  }
}

describe('Keybase bot deinitialization', () => {
  // it('kills all spawned processes it creates', async () => {
  //   const alice = new Bot()
  //   await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)

  //   const bobHomeDir = randomTempDir()
  //   const bob = new Bot()
  //   await keybaseServiceStartup(bobHomeDir)
  //   await keybaseExec(bobHomeDir, ['oneshot', '--username', config.bots.alice1.username], {
  //     stdinBuffer: config.bots.alice1.paperkey,
  //   })
  //   await bob.initFromRunningService(bobHomeDir)

  //   alice.expect(alice.myInfo().username).toBe(config.bots.alice1.username)
  //   await alice.deinit()
  // })

  it('removes its home directory if initialized with a paperkey', async () => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    const {homeDir} = alice.myInfo()
    expect(await doesFileOrDirectoryExist(homeDir)).toBe(true)
    await alice.deinit()
    expect(await doesFileOrDirectoryExist(homeDir)).toBe(false)
  })

  it('does not remove its home directory if initialized from a running service', async () => {
    const homeDir = randomTempDir()
    await keybaseServiceStartup(homeDir)
    await keybaseExec(homeDir, ['oneshot', '--username', config.bots.bob1.username], {
      stdinBuffer: config.bots.bob1.paperkey,
    })
    const alice = new Bot()
    await alice.initFromRunningService(homeDir)
    expect(await doesFileOrDirectoryExist(homeDir)).toBe(true)
    await alice.deinit()
    expect(await doesFileOrDirectoryExist(homeDir)).toBe(true)
  })
})
