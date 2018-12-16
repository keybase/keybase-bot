#!/usr/bin/env node

import fs from 'fs'
import {promisify} from 'util'
import Bot from '../lib'
import config from './tests.config.js'
const alice = new Bot()
const exec = require('child_process').exec

jest.setTimeout(30000)

async function doesFileOrDirectoryExist(fpath) {
  try {
    await promisify(fs.lstat)(fpath)
    return true
  } catch (err) {
    return false
  }
}

async function countProcessesMentioning(substr) {
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

function timeout(time: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

it(`alice can init and deinit()`, async () => {
  await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
  const homeDir = alice.myInfo().homeDir

  // make sure our bot can return a home directory
  expect(homeDir.indexOf('keybase_bot_')).toBeGreaterThanOrEqual(0)

  // make sure that homeDir exists
  expect(await doesFileOrDirectoryExist(homeDir)).toBe(true)

  // make sure we see a running server processes
  expect(await countProcessesMentioning(homeDir)).toBe(1)

  // get a couple listen processes going
  alice.chat.watchAllChannelsForNewMessages(msg => console.log(msg))
  alice.chat.watchAllChannelsForNewMessages(msg => console.error(msg))

  await timeout(3000)

  // now we should see 1 server and 2 clients
  expect(await countProcessesMentioning(homeDir)).toBe(3)

  // deinit
  await alice.deinit()

  // make sure homeDir has now been deleted
  expect(await doesFileOrDirectoryExist(homeDir)).toBe(false)

  // all processes should be shut down
  expect(await countProcessesMentioning(homeDir)).toBe(0)
})
