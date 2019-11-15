import Service from './service'
import ChatClient from './chat-client'
import WalletClient from './wallet-client'
import TeamClient from './team-client'
import HelpersClient from './helpers-client'

import {BotInfo} from './utils/keybaseStatus'
import mkdirp from 'mkdirp'
import {keybaseBinaryName, whichKeybase, rmdirRecursive} from './utils'
import {promisify} from 'util'
import {copyFile} from 'fs'
import path from 'path'
import {InitOptions} from './utils/options'
import {AdminDebugLogger} from './utils/adminDebugLogger'
import crypto from 'crypto'
import os from 'os'

interface BotConstructorOpts {
  debugLogging?: boolean
}

const defaultOpts: BotConstructorOpts = {
  debugLogging: false,
}

/** A Keybase bot. */
class Bot {
  public chat: ChatClient
  public wallet: WalletClient
  public team: TeamClient
  public helpers: HelpersClient
  private _workingDir: string // where KB binary copied, and homeDir (if not existing svc)
  private _service: Service
  private _botId: string
  private _initStatus: 'preinit' | 'initializing' | 'initialized' | 'deinitializing' | 'deinitialized'
  private _adminDebugLogger?: AdminDebugLogger

  /**
   * Create a bot. Note you can't do much too exciting with your bot after you instantiate it; you have to initialize it first.
   * @memberof Bot
   * @example
   * const bot = new Bot()
   */
  public constructor(opts?: BotConstructorOpts) {
    let debugLogging: boolean = defaultOpts.debugLogging
    if (opts && typeof opts.debugLogging !== 'undefined') {
      debugLogging = opts.debugLogging
    }
    this._botId = crypto.randomBytes(16).toString('hex')
    this._workingDir = path.join(os.tmpdir(), `keybase_bot_${this._botId}`)
    this._service = new Service(this._workingDir, this._adminDebugLogger, debugLogging)
    this._adminDebugLogger = new AdminDebugLogger(this._botId)
    this.chat = new ChatClient(this._workingDir, this._adminDebugLogger)
    this.wallet = new WalletClient(this._workingDir, this._adminDebugLogger)
    this.team = new TeamClient(this._workingDir, this._adminDebugLogger)
    this.helpers = new HelpersClient(this._workingDir, this._adminDebugLogger)
    this._initStatus = 'preinit'
  }

  /**
   * Initialize your bot by starting an instance of the Keybase service and logging in using oneshot mode.
   * @memberof Bot
   * @param username - The username of your bot's Keybase account.
   * @param paperkey - The paperkey of your bot's Keybase account.
   * @param options - The initialization options for your bot.
   * @example
   * bot.init('username', 'paperkey')
   */
  public async init(username: string, paperkey: string, options?: InitOptions): Promise<void> {
    this._beginInitState()
    await this._prepWorkingDir(options ? options.keybaseBinaryLocation : undefined)
    await this._service.init(username, paperkey, options)
    await this._initSubBots(options)
    if (options && options.adminDebugDirectory && this._service.serviceLogFile) {
      await this._adminDebugLogger.init(options.adminDebugDirectory, this._service.serviceLogFile)
    }
    this._initStatus = 'initialized'
    this._adminDebugLogger.info('initialized')
  }

  /**
   * Initialize your bot by using an existing running service with a logged in user.
   * @memberof Bot
   * @param homeDir - The home directory of this currently running service. Leave blank to use the default homeDir for your system.
   * @param options - The initialization options for your bot.
   * @example
   * bot.initFromRunningService()
   */
  public async initFromRunningService(homeDir?: string, options?: InitOptions): Promise<void> {
    this._beginInitState()
    await this._prepWorkingDir(options ? options.keybaseBinaryLocation : undefined)
    if (options && options.adminDebugDirectory && this._service.serviceLogFile) {
      await this._adminDebugLogger.init(options.adminDebugDirectory, this._service.serviceLogFile)
    }
    await this._service.initFromRunningService(homeDir, options)
    await this._initSubBots(options)
    this._adminDebugLogger.info('initialized')
  }

  private _beginInitState(): void {
    if (this._initStatus !== 'preinit') {
      throw new Error(`tried to init, but state is already ${this._initStatus}`)
    }
    this._initStatus = 'initializing'
    this._adminDebugLogger.info('beginning initialization')
  }

  /**
   * Get info about your bot!
   * @memberof Bot
   * @returns – Useful information like the username, device, and home directory of your bot. If your bot isn't initialized, you'll get `null`.
   * @example
   * const info = bot.myInfo()
   */
  public myInfo(): BotInfo | null {
    return this._service.myInfo()
  }

  /**
   * Deinitializes the bot by logging out, stopping the keybase service, and removing any leftover login files made by the bot. This should be run before your bot ends.
   * @memberof Bot
   * @example
   * bot.deinit()
   */
  public async deinit(): Promise<void> {
    // Stop the clients first, so that they aren't trying to
    // talk to a deinit'ed service
    if (this._initStatus === 'deinitializing' || this._initStatus === 'deinitialized') {
      this._adminDebugLogger.info('Trying to deinitialize, but already called')
    } else {
      this._initStatus = 'deinitializing'
      this._adminDebugLogger.info('beginning deinit')
      await this.chat._deinit()
      await this._service.deinit()
      await rmdirRecursive(this._workingDir)
      this._adminDebugLogger.info('finished deinit')
      this._adminDebugLogger.deinit()
      this._initStatus = 'deinitialized'
    }
  }

  /**
   * If bot is initialized with an optional directory `adminDebugDirectory`, this will let you write info text into it.
   * @memberof Bot
   * @example
   * bot.adminDebugLogInfo('My bot is ready to go.')
   */

  public async adminDebugLogInfo(text: string): Promise<void> {
    if (this._adminDebugLogger) {
      this._adminDebugLogger.info(text)
    }
  }
  /**
   * If bot is initialized with an optional directory `adminDebugDirectory`, this will let you write error text into it.
   * @memberof Bot
   * @example
   * bot.adminDebugLogInfo("My bot is ready to go.")
   */

  public async adminDebugLogError(text: string): Promise<void> {
    if (this._adminDebugLogger) {
      this._adminDebugLogger.error(text)
    }
  }

  public get botId(): string {
    return this._botId
  }

  public get serviceLogLocation(): string {
    if (this._service.serviceLogFile) {
      return this._service.serviceLogFile
    } else {
      throw new Error('service does not have a log file location. initialized yet?')
    }
  }

  private async _prepWorkingDir(keybaseBinaryLocation?: string): Promise<void> {
    if (!keybaseBinaryLocation) {
      keybaseBinaryLocation = await whichKeybase()
    }
    const destination = path.join(this._workingDir, keybaseBinaryName)
    await promisify(mkdirp)(this._workingDir)
    await promisify(copyFile)(keybaseBinaryLocation, destination)
  }

  private async _initSubBots(options?: InitOptions): Promise<void> {
    const info = this.myInfo()
    if (info) {
      await this.chat._init(info.homeDir, options)
      await this.wallet._init(info.homeDir, options)
      await this.team._init(info.homeDir, options)
      await this.helpers._init(info.homeDir, options)
    } else {
      throw new Error('Issue initializing bot.')
    }
  }
}

// TODO: change this to an export default, but
// we don't want to break existing uses of the bot without a version upgrade.
// if this is changed to export default Bot, then commonJS require uses
// will have to do Bot = require('keybase-bot').default, which

export = Bot
