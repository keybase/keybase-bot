// @flow
import {execToJson} from './exec-to-json'
import {CHAT_API_VERSION} from './constants.js'
import type {CbAny, CbError} from './types'

type ApiCommandArg = {method: string, options: Object}

// ----------------------------------------------------------------------------
// calls back with a JSON object describing the user's
// status with Keybase. For example, status.Username and status.Device.name
// may be of interest
// ----------------------------------------------------------------------------

function runApiCommand(arg: ApiCommandArg, cb: CbError) : void {
  let input:Object = {
    method: arg.method,
    params: {
      version: CHAT_API_VERSION,
      options: arg.options
    }
  }

  execToJson({command: 'keybase', args: ['chat', 'api'], stdinBuffer: new Buffer(JSON.stringify(input),'utf-8')}, (err, res) => {
    cb(err, res)
  })
}

export {runApiCommand}
export type {ApiCommandArg}