// @flow
import BaseBot, {type InitOptions} from './base'
import ChatBot from './chat'
import {keybaseExec, rmdirRecursive} from './utils'

class Bot extends BaseBot {
  chat: ChatBot

  constructor() {
    super()
    this.chat = new ChatBot()
  }

  async init(username: string, paperkey: string, options?: InitOptions) {
    await super.init(username, paperkey, options)
    await this._initSubBots(options)
  }

  async initFromRunningService(homeDir?: string, options?: InitOptions) {
    await super.initFromRunningService(homeDir, options)
    await this._initSubBots(options)
  }

  /**
   * Deinitializes the bot by logging out, stopping the keybase service, and removing any leftover login files made by the bot. This should be run before your bot ends.
   * @memberof BaseBot
   */
  async deinit(): Promise<void> {
    if (!this.initialized) {
      throw new Error('Cannot deinitialize an uninitialized bot.')
    }

    // Kill any processes spawned by the subbots
    await this.chat.deinit()

    // If we init the bot using paperkey credentials, then we want to stop the service and remove our generated directory.
    if (this.initialized === 'paperkey') {
      // Stop the service
      await keybaseExec(this.homeDir, ['logout'])
      await keybaseExec(this.homeDir, ['ctl', 'stop', '--shutdown'])

      // Delete the generated homeDir
      await rmdirRecursive(this.homeDir)
    }

    this.initialized = false
  }

  /**
   * @ignore
   */
  async _initSubBots(options?: InitOptions) {
    await this.chat.initFromRunningService(this.homeDir, options)
  }
}

export default Bot
