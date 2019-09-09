import which from 'which'
import {promisify} from 'util'
import keybaseBinaryName from './keybaseBinaryName'

const aWhich = promisify(which)

/**
 * Returns the full path to the keybase binary or throws an error
 * @ignore
 * @example
 * whichKeybase().then((path) => console.log(path))
 */
async function whichKeybase(): Promise<string> {
  const path = await aWhich(keybaseBinaryName)
  if (!path) {
    throw new Error('Could not find keybase binary')
  }
  return path
}

export default whichKeybase
