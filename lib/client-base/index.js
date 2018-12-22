// @flow
import type {ChildProcess} from 'child_process'
import {formatOptions, keybaseExec, keybaseStatus} from '../utils'
import {API_VERSIONS} from '../constants'

export type Initialized = false | 'paperkey' | 'currentService'

export type InitOptions = {|
  verbose?: boolean,
|}

export type ApiCommandArg = {|apiName: string, method: string, options: Object|}

/**
 * A Client base.
 * @class
 * @ignore
 */
class ClientBase {
  initialized: Initialized
  username: void | string
  devicename: void | string
  homeDir: string
  verbose: boolean
  spawnedProcesses: ChildProcess[]

  constructor() {
    this.initialized = false
    this.verbose = false
    this.spawnedProcesses = []
  }

  /**
   * @ignore
   * Initializes the client to talk to a service.
   */
  async _init(homeDir: string, options?: InitOptions): Promise<void> {
    const initBotInfo = await keybaseStatus(homeDir)
    this.homeDir = homeDir
    this.username = initBotInfo.username
    this.devicename = initBotInfo.devicename
  }

  /**
   * Deinitializes the client by killing any spawned processes
   * @memberof ClientBase
   * @ignore
   */
  async _deinit(): Promise<void> {
    for (const child of this.spawnedProcesses) {
      child.kill()
    }
  }

  /**
   * @ignore
   * Runs an API command of the form <stdbuffer> | keybase <apiName> api
   * chat is the first implemented one
   */
  async _runApiCommand(arg: ApiCommandArg): Promise<any> {
    const options = formatOptions(arg.options)
    const input = {
      method: arg.method,
      params: {
        version: API_VERSIONS[arg.apiName],
        options,
      },
    }
    const inputString = JSON.stringify(input)
    const size = inputString.length
    const output = await keybaseExec(this.homeDir, [arg.apiName, 'api'], {
      stdinBuffer: Buffer.alloc(size, inputString, 'utf8'),
      json: true,
    })
    const res = output.result
    return res
  }

  /**
   * @ignore
   * Confirms the service has not changed user or device out from underneath
   * the client. This would happen due to user error, for example.
   */
  async _guardInitialized(): Promise<void> {
    const status = await keybaseStatus(this.homeDir)
    if (!this.username || status.username !== this.username || status.devicename !== this.devicename) {
      throw new Error('The bot service has changed since this bot was spawned.')
    }
  }
}

export default ClientBase
