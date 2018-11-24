// @flow
import {keybaseExec} from './utils'
import {withStore, actionInit} from './store'
import type {Store} from './store/types'
import type {Init, MyInfo, InitOptions, DeviceUsernamePair, UsernameAndDevice} from './types.js'

/*
 * _getCurrentUsernameAndDevicename returns { username, devicename } from keybase status -j
 */
const _getCurrentUsernameAndDevicename = async (): Promise<UsernameAndDevice> => {
  const status = await keybaseExec(['status', '--json'], {parseOutputAsJSON: true})
  if (status && status.Username && status.Device && status.Device.name) {
    return {username: status.Username, devicename: status.Device.name}
  } else {
    throw new Error('failed to get username + device name')
  }
}

/*
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
  const currentDPair = await _getCurrentUsernameAndDevicename()
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
 * A Keybase bot.
 *
 * @namespace Bot
 */

export const init = (store: Store) => {
  /**
   * @name init
   * @memberof Bot
   *
   * `bot.init()` must be run to initialize the bot before using other methods. It
   * checks to make sure you're properly logged into Keybase and gets basic
   * info about your session. Afterwards, feel free to check bot.myInfo() to
   * see or check who you're logged in as.
   *
   */
  const _init: Init = async (options: InitOptions): Promise<void> => {
    try {
      if (options.username && options.paperkey) {
        await keybaseExec(['oneshot', '--username', options.username], {stdinBuffer: options.paperkey})
      }
      const currentDPair = await _getCurrentUsernameAndDevicename()
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
  return _init
}

/**
 * @name deinit
 * @memberof Bot
 *
 * Deinitializes a bot by logging it out of its current Keybase session.
 * Should be run after your bot finishes.
 *
 */
export const deinit = async (): Promise<void> => {
  await keybaseExec(['logout'])
}

export const myInfo = ({getState}: Store) => {
  /**
   * @name myInfo
   * @memberof Bot
   *
   * Returns your username and devicename.
   */
  const _myInfo: MyInfo = (): ?DeviceUsernamePair => {
    const {username, devicename} = getState()
    return username && devicename ? {username, devicename} : null
  }
  return _myInfo
}

export default (store: Store) => ({
  init: withStore(store)(init),
  deinit: withStore(store)(store => deinit),
  myInfo: withStore(store)(myInfo),
})
