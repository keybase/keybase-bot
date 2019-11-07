import fs from 'fs'
import {exec} from 'child_process'
import {promisify} from 'util'

export {default as publicPaperkeyLabel} from './publicPaperkeyLabel'
export {default as startServiceManually} from './startServiceManually'
export {default as stopServiceManually} from './stopServiceManually'
export {default as pollFor} from './pollFor'

//
// Coyne: I really don't think we need separate files for every small test util function,
// so I'm going to start putting these in here.
//

export async function doesFileOrDirectoryExist(fpath: string): Promise<boolean> {
  try {
    await promisify(fs.lstat)(fpath)
    return true
  } catch (err) {
    return false
  }
}

export async function countProcessesMentioning(substr: string): Promise<number> {
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
