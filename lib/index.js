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
    await this.chat._initWithExistingService(this.homeDir, options)
  }

  /**
   * Deinitializes the bot by logging out, stopping the keybase service, and removing any leftover login files made by the bot. This should be run before your bot ends.
   * @memberof BaseBot
   */
  async deinit(): Promise<void> {
    // Stop the service
    await keybaseExec(this.homeDir, ['logout'])
    await keybaseExec(this.homeDir, ['ctl', 'stop', '--shutdown'])

    // Kill any processes spawned by the subbots
    await super.deinit()
    await this.chat.deinit()

    // Delete the generated homeDir
    await rmdirRecursive(this.homeDir)
  }
}

export default Bot
