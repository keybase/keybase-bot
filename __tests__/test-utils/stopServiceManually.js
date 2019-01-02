// @flow
import {keybaseExec, rmdirRecursive} from '../../lib/utils'

async function stopServiceManually(homeDir: string) {
  await keybaseExec(homeDir, ['logout'])
  await keybaseExec(homeDir, ['ctl', 'stop', '--shutdown'])
  await rmdirRecursive(homeDir)
}

export default stopServiceManually
