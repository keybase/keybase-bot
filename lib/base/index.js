// @flow
import {keybaseExec} from '../utils'
import {withStore, actionInit} from '../store'
import type {Store} from '../store/types'
import type {DeviceUsernamePair} from '../types'
import type {InitOptions} from './types'

/**
 * @ignore
 * getCurrentUsernameAndDevicename returns { username, devicename } from keybase status -j
 */
const getCurrentUsernameAndDevicename = async (): Promise<DeviceUsernamePair> => {
  const status = await keybaseExec(['status', '--json'], {json: true})
  if (status && status.Username && status.Device && status.Device.name) {
    return {username: status.Username, devicename: status.Device.name}
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
  const currentDPair = await getCurrentUsernameAndDevicename()
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

export const _init = (store: Store) => {
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
  const init = async (options: InitOptions): Promise<void> => {
    try {
      if (options.username && options.paperkey) {
        await keybaseExec(['oneshot', '--username', options.username], {stdinBuffer: options.paperkey})
      }
      const currentDPair = await getCurrentUsernameAndDevicename()
      if (currentDPair && currentDPair.username && currentDPair.devicename) {
        const update = {
          username: currentDPair.username,
          devicename: currentDPair.devicename,
          flags: {
            verbose: options.verbose || false,
          },
        }
        store.dispatch(actionInit(update))
        // TODO: @jacob - refactor logging to depend on verbose flag in state
        // this._log(`intialized ${currentDPair.username} (device=${currentDPair.devicename})`)
      }
    } catch (error) {
      console.error(error)
    }
  }
  return init
}

/**
 *
 * Deinitializes a bot by logging it out of its current Keybase session.
 * Should be run after your bot finishes.
 *
 * @memberof bot
 *
 */
export const deinit = async (): Promise<void> => {
  await keybaseExec(['logout'])
}

export const _myInfo = (store: Store) => {
  /**
   * @memberof bot
   */
  const myInfo = (): ?DeviceUsernamePair => {
    const {username, devicename} = store.getState()
    if (username && devicename) return {username, devicename}
    return null
  }
  return myInfo
}

export default (store: Store) => ({
  init: withStore(store)(_init),
  deinit: withStore(store)(store => deinit),
  myInfo: withStore(store)(_myInfo),
})
