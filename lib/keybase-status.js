// @flow
import type {PromiseExec} from './types.js'
import {execToJson} from './exec-to-json.js'

type UsernameAndDevice = {|
  username: string,
  devicename: string,
|}

// ----------------------------------------------------------------------------
// calls back with a JSON object describing the user's
// status with Keybase. For example, status.Username and status.Device.name
// may be of interest
// ----------------------------------------------------------------------------

const getKeybaseNativeStatusJson = (): PromiseExec => execToJson({command: 'keybase', args: ['status', '-j']})

// ----------------------------------------------------------------------------
// calls back with just {username, devicename}, if fully logged in and
// unlocked.
// ----------------------------------------------------------------------------

const getKeybaseUsernameAndDevicename = (): Promise<UsernameAndDevice> => {
  return new Promise((resolve, reject) => {
    getKeybaseNativeStatusJson().then(status => {
      if (status && status.Username && status.Device && status.Device.name) {
        resolve({username: status.Username, devicename: status.Device.name})
      } else {
        reject(new Error('failed to get username + device name'))
      }
    })
  })
}

export {getKeybaseNativeStatusJson, getKeybaseUsernameAndDevicename}
