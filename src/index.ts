import Service from './service'
import ChatClient from './chat-client'
import WalletClient from './wallet-client'
import TeamClient from './team-client'
import {BotInfo} from './utils/keybaseStatus'
import mkdirp from 'mkdirp'
import {whichKeybase, rmdirRecursive, timeout} from './utils'
import {promisify} from 'util'
import {copyFile} from 'fs'
import path from 'path'
import {InitOptions} from './utils/options'
import crypto from 'crypto'
import os from 'os'
import fs from 'fs'

/** A Keybase bot. */
class Bot {
  public chat: ChatClient
  public wallet: WalletClient
  public team: TeamClient
  private _workingDir: string // where KB binary copied, and homeDir (if not existing svc)
  private _service: Service
  private _adminDebugDirectory?: string
  private _botId: string
  private _initStatus: 'preinit' | 'initializing' | 'initialized' | 'deinitializing' | 'deinitialized'

  /**
   * Create a bot. Note you can't do much too exciting with your bot after you instantiate it; you have to initialize it first.
   * @memberof Bot
   * @example
   * const bot = new Bot()
   */
  public constructor() {
    this._botId = crypto.randomBytes(16).toString('hex')
    this._workingDir = path.join(os.tmpdir(), `keybase_bot_${this._botId}`)
    this._service = new Service(this, this._workingDir)
    this.chat = new ChatClient(this, this._workingDir)
    this.wallet = new WalletClient(this, this._workingDir)
    this.team = new TeamClient(this, this._workingDir)
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
    this.debugLog('beginning initialization')
    if (this._initStatus !== 'preinit') {
      throw new Error(`tried to init, but state is already ${this._initStatus}`)
    }
    this._initStatus = 'initializing'
    await this._prepWorkingDir()
    await this._maybePrepDebugDir(options)
    await this._service.init(username, paperkey, options)
    await this._initSubBots(options)
    this._maybeLogCopyLoop(options)
    this._initStatus = 'initialized'
    this.debugLog('initialized')
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
    this.debugLog('beginning initialization from running service')
    await this._prepWorkingDir()
    await this._maybePrepDebugDir(options)
    await this._service.initFromRunningService(homeDir, options)
    await this._initSubBots(options)
    await this._maybeLogCopyLoop(options)
    this.debugLog('initialized')
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
    //if (this._initStatus === 'deinitializing' || this._initStatus === 'deinitialized') {
    //  this.debugLog('Trying to deinitialize, but already called', 'I')
    //} else {
    //  this._initStatus = 'deinitializing'
    //  this.debugLog('beginning deinit')
    //  await this.chat._deinit()
    //  await this._service.deinit()
    //  await rmdirRecursive(this._workingDir)
    //  this.debugLog('finished deinit')
    //  this._initStatus = 'deinitialized'
    //}
  }

  /**
   * If bot is initialized with an optional directory `adminDebugDirectory`, this will write that string into a file in there
   * This function is also called automatically when in adminDebug mode, and will record plaintexts of messages into that directory,
   * so use wisely.
   * @memberof Bot
   * @example
   * bot.log("My bot is ready to go.")
   */
  public async debugLog(text: string, infoOrErr?: 'I' | 'E'): Promise<void> {
    if (this.adminDebugDirectory) {
      const code = infoOrErr ? infoOrErr : 'I'
      const line = `${new Date().toISOString()} [${code}] ${text}\n`
      await promisify(fs.appendFile)(this.adminDebugFilename, line, 'utf-8')
    }
  }

  public get botId(): string {
    return this._botId
  }

  public get adminDebugFilename(): string | null {
    if (this.adminDebugDirectory) {
      return path.join(this.adminDebugDirectory, `keybase_bot_${this._botId}.log`)
    } else {
      return null
    }
  }

  public get adminDebugDirectory(): string | null {
    return this._adminDebugDirectory || null
  }
  public get serviceLogLocation(): string {
    if (this._service.serviceLogFile) {
      return this._service.serviceLogFile
    } else {
      throw new Error('service does not have a log file location. initialized yet?')
    }
  }

  private async _prepWorkingDir(): Promise<void> {
    const keybaseBinaryLocation = await whichKeybase()
    const destination = path.join(this._workingDir, 'keybase')
    await promisify(mkdirp)(this._workingDir)
    await promisify(copyFile)(keybaseBinaryLocation, destination)
  }

  private async _maybePrepDebugDir(options?: InitOptions): Promise<void> {
    if (options && options.adminDebugDirectory) {
      this._adminDebugDirectory = options.adminDebugDirectory
      await promisify(mkdirp)(this._adminDebugDirectory)
    }
  }

  private async _maybeLogCopyLoop(options?: InitOptions): Promise<void> {
    // should do something with streams here, but for now when running in admindebug mode,
    // I'll just copy the logs over, taking a break after each copy.
    if (options && options.adminDebugDirectory) {
      while (this._initStatus !== 'deinitialized') {
        try {
          const destination = path.join(options.adminDebugDirectory, path.basename(this.serviceLogLocation))
          await promisify(copyFile)(this.serviceLogLocation, destination)
        } catch (e) {
          this.debugLog(`Couldn't copy service log. ${e.toString()}`, 'E')
        }
        await timeout(1000)
      }
    }
  }

  private async _initSubBots(options?: InitOptions): Promise<void> {
    const info = this.myInfo()
    if (info) {
      await this.chat._init(info.homeDir, options)
      await this.wallet._init(info.homeDir, options)
      await this.team._init(info.homeDir, options)
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
