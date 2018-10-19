// @flow
import {execToJson} from './exec-to-json'
import {CHAT_API_VERSION} from './constants.js'
import type {CbError, CbAny} from './types'

type ApiCommandArg = {method: string, options: Object}

// ----------------------------------------------------------------------------
// calls back with a JSON object describing the user's
// status with Keybase. For example, status.Username and status.Device.name
// may be of interest
// ----------------------------------------------------------------------------

function runApiCommand (arg: ApiCommandArg, cb: CbAny) : void {
  let input:Object = {
    method: arg.method,
    params: {
      version: CHAT_API_VERSION,
      options: arg.options,
    },
  }

  execToJson({command: 'keybase', args: ['chat', 'api'], stdinBuffer: new Buffer(JSON.stringify(input), 'utf8')}, (err: ?Error, o: any) => {
    let res: any = null
    if (!err) {
      if (o && o.result) {
        res = o.result
      } else if (o && o.error) {
        const oError = o.error
        err = new Error(oError.message || oError.toString())
      } else {
        err = new Error(`Unknown error parsing result - no "result" field`)
      }
    }

    cb(err, res)
  })
}

export {runApiCommand}
export type {ApiCommandArg}
