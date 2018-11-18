// @flow
import {keybaseExec} from './utils'
import type {InitOptions, DeviceUsernamePair, UsernameAndDevice} from './types.js'

/**
 * A Keybase bot.
 *
 * @class Bot
 */
class BaseBot {
  _dPair: ?DeviceUsernamePair
  _initialized: boolean
  _verbose: boolean

  constructor() {
    // $FlowFixMe: no flow support for new.target
    if (new.target === BaseBot) {
      throw new TypeError('Cannot construct BaseBot instances directly')
    }
    this._initialized = false
    this._verbose = false
  }

  /**
   * `bot.init()` must be run to initialize the bot before using other methods. It
   * checks to make sure you're properly logged into Keybase and gets basic
   * info about your session. Afterwards, feel free to check bot.myInfo() to
   * see or check who you're logged in as.
   *
   * @memberof BaseBot
   */
  async init(options: InitOptions): Promise<void> {
    this._verbose = options.verbose || false

    try {
      if (!options.alreadyLoggedIn && options.username && options.paperkey) {
        await keybaseExec(['oneshot', '--username', options.username], {stdinBuffer: options.paperkey})
      }
      const currentDPair = await this._getCurrentUsernameAndDevicename()
      if (currentDPair) {
        this._dPair = currentDPair
        this._log(`intialized ${currentDPair.username} (device=${currentDPair.devicename})`)
      }
      this._initialized = true
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * Deinitializes a bot by logging it out of its current Keybase session.
   * Should be run after your bot finishes.
   *
   * @memberof Bot
   */
  async deinit(): Promise<void> {
    await keybaseExec(['logout'])
  }

  /**
   * Returns your username and devicename.
   *
   * @memberof Bot
   */
  myInfo(): ?DeviceUsernamePair {
    return this._dPair
  }

  _log(msg: string): void {
    if (this._verbose) {
      console.log(msg)
    }
  }

  async _getCurrentUsernameAndDevicename(): Promise<UsernameAndDevice> {
    const status = await keybaseExec(['status', '--json'], {parseOutputAsJSON: true})
    if (status && status.Username && status.Device && status.Device.name) {
      return {username: status.Username, devicename: status.Device.name}
    } else {
      throw new Error('failed to get username + device name')
    }
  }

  async _checkUserAndInit(): Promise<void> {
    const currentDPair = await this._getCurrentUsernameAndDevicename()
    if (
      !this._initialized ||
      !currentDPair ||
      !this._dPair ||
      currentDPair.username !== this._dPair.username
    ) {
      throw new Error('Uh-oh, username has changed or we never initialized correctly.')
    }
  }
}

export default BaseBot
