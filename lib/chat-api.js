// @flow
import {execToJson} from './exec-to-json'
import {formatOptions} from './utils'
import {CHAT_API_VERSION} from './constants'
import {type AllChatOptions} from './types'

type ApiCommandArg = {method: string, options: AllChatOptions}

// ----------------------------------------------------------------------------
// calls back with a JSON object describing the user's
// status with Keybase. For example, status.Username and status.Device.name
// may be of interest
// ----------------------------------------------------------------------------

const runApiCommand = (arg: ApiCommandArg): Promise<any> => {
  const options = formatOptions(arg.options)
  const input: Object = {
    method: arg.method,
    params: {
      version: CHAT_API_VERSION,
      options,
    },
  }

  return new Promise((resolve, reject) => {
    const inputString = JSON.stringify(input)
    const size = inputString.length
    execToJson({
      command: 'keybase',
      args: ['chat', 'api'],
      stdinBuffer: Buffer.alloc(size, inputString, 'utf8'),
    })
      .then((o: any) => {
        let res: any = null
        if (o && o.result) {
          res = o.result
        } else if (o && o.error) {
          const oError = o.error
          reject(new Error(oError.message || oError.toString()))
        } else {
          reject(new Error(`Unknown error parsing result - no "result" field`))
        }
        resolve(res)
      })
      .catch((err?: Error) => {
        reject(err)
      })
  })
}

export {runApiCommand}
export type {ApiCommandArg}
