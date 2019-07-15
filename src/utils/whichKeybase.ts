import which from 'which'
import {promisify} from 'util'

const aWhich = promisify(which)

/**
 * Returns the full path to the keybase binary or throws an error
 * @ignore
 * @example
 * whichKeybase().then((path) => console.log(path))
 */
async function whichKeybase(): Promise<string> {
  const path = await aWhich('keybase')
  if (!path) {
    throw new Error('Could not find keybase binary')
  }
  return path
}

export default whichKeybase
