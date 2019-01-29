// @flow
import {exec} from 'child_process'
import {promisify} from 'util'

const aExec = promisify(exec)

/**
 * Returns the full path to the keybase binary or throws an error
 * @ignore
 * @example
 * whichKeybase().then((path) => console.log(path))
 */
async function whichKeybase(): Promise<string> {
  const {stdout} = await aExec('which keybase')
  if (!stdout || !stdout.trim().length) {
    throw new Error('Could not find keybase binary')
  }
  const res = stdout.trim()
  return res
}

export default whichKeybase
