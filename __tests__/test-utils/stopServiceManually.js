// @flow
import {keybaseExec, rmdirRecursive, timeout, whichKeybase} from '../../lib/utils'
import path from 'path'
import {promisify} from 'util'
import fs from 'fs'

async function stopServiceManually(homeDir: string) {
  const workingDir = path.parse(await whichKeybase()).dir
  await keybaseExec(workingDir, homeDir, ['logout'])
  await keybaseExec(workingDir, homeDir, ['ctl', 'stop', '--shutdown'])

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
      if (e.code !== 'ENOENT') {
        throw e
      }

      // We're expecting ENOENT here
      break
    }
  }

  await rmdirRecursive(homeDir)
}

export default stopServiceManually
