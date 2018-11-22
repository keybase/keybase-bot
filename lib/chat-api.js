// @flow
import keybaseExec from './keybase-exec'
import {formatOptions} from './utils'
import {CHAT_API_VERSION} from './constants'
import {type AllChatOptions} from './types'

type ApiCommandArg = {method: string, options: AllChatOptions}

// ----------------------------------------------------------------------------
// calls back with a JSON object describing the user's
// status with Keybase. For example, status.Username and status.Device.name
// may be of interest
// ----------------------------------------------------------------------------

const runApiCommand = async (arg: ApiCommandArg): Promise<any> => {
  const options = formatOptions(arg.options)
  const input: Object = {
    method: arg.method,
    params: {
      version: CHAT_API_VERSION,
      options,
    },
  }

  const inputString = JSON.stringify(input)
  const size = inputString.length
  const output = await keybaseExec(['chat', 'api'], {
    stdinBuffer: Buffer.alloc(size, inputString, 'utf8'),
    parseOutputAsJSON: true,
  })
  const res = output.result
  return res
}

export {runApiCommand}
export type {ApiCommandArg}
