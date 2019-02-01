// @flow
import type {ChildProcess} from 'child_process'
import {formatAPIObjectInput, formatAPIObjectOutput, keybaseExec, keybaseStatus} from '../utils'
import type {InitOptions} from '../utils/options'
import {API_VERSIONS, type API_TYPES} from '../constants'
import path from 'path'

export type ApiCommandArg = {|apiName: API_TYPES, method: string, options?: Object|}

/**
 * A Client base.
 * @ignore
 */
class ClientBase {
  initialized: boolean
  username: void | string
  devicename: void | string
  homeDir: void | string
  verbose: boolean
  spawnedProcesses: ChildProcess[]
  _workingDir: string

  constructor(workingDir: string) {
    this._workingDir = workingDir
    this.initialized = false
    this.verbose = false
    this.spawnedProcesses = []
  }

  async _init(homeDir: void | string, options?: InitOptions): Promise<void> {
    const initBotInfo = await keybaseStatus(this._workingDir, homeDir)
    this.homeDir = homeDir
    this.username = initBotInfo.username
    this.devicename = initBotInfo.devicename
    this.initialized = true
  }

  async _deinit(): Promise<void> {
    for (const child of this.spawnedProcesses) {
      child.kill()
    }
  }

  async _runApiCommand(arg: ApiCommandArg): Promise<any> {
    const options = arg.options ? formatAPIObjectInput(arg.options, arg.apiName) : undefined
    const input = {
      method: arg.method,
      params: {
        version: API_VERSIONS[arg.apiName],
        options,
      },
    }
    const inputString = JSON.stringify(input)
    const size = inputString.length
    const output = await keybaseExec(this._workingDir, this.homeDir, [arg.apiName, 'api'], {
      stdinBuffer: Buffer.alloc(size, inputString, 'utf8'),
      json: true,
    })
    if (output.hasOwnProperty('error')) {
      throw new Error(output.error.message)
    }
    const res = formatAPIObjectOutput(output.result, {
      apiName: arg.apiName,
      method: arg.method,
    })
    return res
  }

  async _guardInitialized(): Promise<void> {
    if (!this.initialized) {
      throw new Error('The client is not yet initialized.')
    }
  }
  _pathToKeybaseBinary(): string {
    return path.join(this._workingDir, 'keybase')
  }
}

export default ClientBase
