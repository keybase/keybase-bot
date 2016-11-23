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
  //
  // TODO: once confirmed working, we should switch this
  // to streaming stdin correctly instead of `exec`
  //
  let input:Object = {
    method: arg.method,
    params: {
      version: CHAT_API_VERSION,
      options: arg.options
    }
  }

  // TODO: as stated above, not the appropriate technique; will come bcak to
  let input_str = '"'+ JSON.stringify(input).replace(/(["'$`\\])/g,'\\$1') + '"';

  execToJson({command: `echo ${input_str} | keybase chat api`}, (err, res) => {
    cb(err, res)
  })
}

export {runApiCommand}
export type {ApiCommandArg}