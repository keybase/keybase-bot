// @flow
import {keybaseExec, rmdirRecursive, timeout} from '../../lib/utils'
import path from 'path'
import {promisify} from 'util'
import fs from 'fs'

async function stopServiceManually(homeDir: string) {
  await keybaseExec(homeDir, ['logout'])
  await keybaseExec(homeDir, ['ctl', 'stop', '--shutdown'])

  // Wait until the pid file disappears as a workaround for the lack of process tracking
  const fileToWatchFor = path.join(homeDir, '.config', 'keybase', 'keybase.pid')
  let i = 0
  while (true) {
    await timeout(10)
    try {
      await promisify(fs.stat)(fileToWatchFor)
      if (++i >= 1000) {
        throw new Error('Process ID file still exists after 10 seconds')
      }
    } catch (e) {
      // We're actually expecting the error
      break
    }
  }

  await rmdirRecursive(homeDir)
}

export default stopServiceManually
