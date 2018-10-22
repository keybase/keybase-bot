// @flow
import {execToJson} from './exec-to-json'
import {CHAT_API_VERSION} from './constants.js'

type ApiCommandArg = {method: string, options: Object}

// ----------------------------------------------------------------------------
// calls back with a JSON object describing the user's
// status with Keybase. For example, status.Username and status.Device.name
// may be of interest
// ----------------------------------------------------------------------------

const runApiCommand = (arg: ApiCommandArg): Promise<any> => {
  const input: Object = {
    method: arg.method,
    params: {
      version: CHAT_API_VERSION,
      options: arg.options,
    },
  }

  return new Promise((resolve, reject) => {
    const size = input.length
    execToJson({
      command: 'keybase',
      args: ['chat', 'api'],
      stdinBuffer: Buffer.alloc(size, JSON.stringify(input), 'utf8'),
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
