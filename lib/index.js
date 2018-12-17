// @flow
import BaseBot, {type InitOptions} from './base'
import ChatBot from './chat'
import {keybaseExec, rmdirRecursive} from './utils'

/**
 * The Keybase bot.
 * @extends {BaseBot}
 */
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
