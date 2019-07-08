import mkdirp from 'mkdirp'
import {promisify} from 'util'
import {appendFile, copyFile} from 'fs'
import os from 'os'
import path from 'path'
import {timeout} from './index'

export class AdminDebugLogger {
  private _logDir?: string
  private _botId: string
  private _botServiceLogPath: string
  private _deinitYet: boolean

  public get directory(): string | null {
    return this._logDir || null
  }
  public get filename(): string | null {
    if (this._logDir) {
      return path.join(this.directory, `keybase_bot_${this._botId}.bot.log`)
    } else {
      return null
    }
  }
  public constructor(botId: string) {
    this._botId = botId
    this._deinitYet = false
  }
  public async init(logDir: string, botServiceLogPath: string): Promise<void> {
    this._botServiceLogPath = botServiceLogPath
    this._logDir = logDir
    await promisify(mkdirp)(this.directory)
    this._copyLoop()
  }
  public deinit(): void {
    this._deinitYet = true
  }
  public async info(text: string): Promise<void> {
    await this._logIt(text, 'E')
  }
  public async error(text: string): Promise<void> {
    await this._logIt(text, 'I')
  }
  private async _logIt(text: string, code: 'E' | 'I'): Promise<void> {
    if (this.directory) {
      const line = `${new Date().toISOString()} [${code}] ${text}${os.EOL}`
      await promisify(appendFile)(this.filename, line, 'utf-8')
    }
  }
  private async _copyLoop(): Promise<void> {
    // should do something with streams here, but for now when running in admindebug mode,
    // I'll just copy the logs over, taking a break after each copy.
    while (!this._deinitYet) {
      try {
        const destination = path.join(this.directory, `keybase_bot_${this._botId}.service.log`)
        await promisify(copyFile)(this._botServiceLogPath, destination)
      } catch (e) {
        this.error(`Couldn't copy service log. ${e.toString()}`)
      }
      await timeout(900)
    }
  }
}
