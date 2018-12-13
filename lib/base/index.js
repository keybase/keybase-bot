// @flow
import {keybaseExec, rmdirRecursive, randomTempDir, keybaseServiceStartup, killGrep} from '../utils'
import {withStore, actionInit, actionPreinit} from '../store'
import type {Store} from '../store/types'
import type {BotInfo} from '../types'
import type {Init, Deinit} from './types'

/**
 * @ignore
 * getBotInfoFromStatusCall returns { username, devicename } from keybase status -j
 */
const getBotInfoFromStatusCall = async (store: Store): Promise<BotInfo> => {
  const {homeDir} = store.getState()
  const status = await keybaseExec(homeDir, ['status', '--json'], {
    json: true,
  })
  if (status && status.Username && status.Device && status.Device.name) {
    return {username: status.Username, devicename: status.Device.name, homeDir}
  } else {
    throw new Error('failed to get username + device name')
  }
}

/**
 * @ignore
 * guardInitialized takes the current store and the api function to guard
 * It ensures that the following conditions remain true
 *  1. The bot was initialized before calling the given api function
 *  2. The bot has username and devicename if it has been initialized
 *  2. The current username and devicename have not changed values
 *
 * If any condition is false, an error is thrown
 * Otherwise, return the function (to be executed later)
 *
 */
export const guardInitialized = async (store: Store): Promise<void> => {
  const currentDPair = await getBotInfoFromStatusCall(store)
  const {initialized, username, devicename} = store.getState()
  if (
    !initialized ||
    !currentDPair ||
    !username ||
    !devicename ||
    currentDPair.username !== username ||
    currentDPair.devicename !== devicename
  ) {
    throw new Error('Uh-oh, username has changed or we never initialized correctly.')
  }
}

/**
 * @namespace bot
 */

const _init = (store: Store) => {
  /**
   *
   * `bot.init()` must be run to initialize the bot before using other methods. It
   * checks to make sure you're properly logged into Keybase and gets basic
   * info about your session. Afterwards, feel free to check bot.myInfo() to
   * see or check who you're logged in as.
   *
   * @memberof bot
   *
   */
  const init: Init = async (username, paperkey, options) => {
    if (!username || typeof username !== 'string')
      throw new Error(`Please provide a username to initialize the bot. Got: ${JSON.stringify(username)}`)
    // Don't want to accidentally print the paperkey to STDERR
    if (!paperkey || typeof paperkey !== 'string')
      throw new Error(`Please provide a paperkey to initialize the bot.`)

    const update = {
      homeDir: randomTempDir(),
    }
    store.dispatch(actionPreinit(update))

    const {homeDir} = store.getState()
    await keybaseServiceStartup(homeDir)
    await keybaseExec(homeDir, ['oneshot', '--username', username], {
      stdinBuffer: paperkey,
    })

    const currentDPair = await getBotInfoFromStatusCall(store)
    if (currentDPair && currentDPair.username && currentDPair.devicename) {
      const update = {
        username: currentDPair.username,
        devicename: currentDPair.devicename,
        flags: {
          verbose: options ? Boolean(options.verbose) : false,
        },
      }
      store.dispatch(actionInit(update))
      // TODO: @jacob - refactor logging to depend on verbose flag in state
      // this._log(`intialized ${currentDPair.username} (device=${currentDPair.devicename})`)
    }
  }
  return init
}

const _deinit = (store: Store) => {
  /**
   *
   * Deinitializes a bot by logging it out of its current Keybase session.
   * Should be run after your bot finishes, to clear up temp directory and
   * shut down the keybase service.
   *
   * @memberof bot
   *
   */
  const deinit: Deinit = async () => {
    const {homeDir} = store.getState()
    await keybaseExec(homeDir, ['logout'])
    await keybaseExec(homeDir, ['ctl', 'stop', '--shutdown'])
    await killGrep(homeDir)
    await rmdirRecursive(homeDir)
  }
  return deinit
}

const _myInfo = (store: Store) => {
  /**
   * @memberof bot
   */
  const myInfo = (): ?BotInfo => {
    const {username, devicename, homeDir} = store.getState()
    if (username && devicename && homeDir) return {username, devicename, homeDir}
    return null
  }
  return myInfo
}

export default (store: Store) => ({
  init: withStore(store)(_init),
  deinit: withStore(store)(_deinit),
  myInfo: withStore(store)(_myInfo),
})
