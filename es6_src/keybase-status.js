// @flow
import {exec} from 'child_process'

// ----------------------------------------------------------------------------
// calls back with a JSON object describing the user's
// status with Keybase. For example, status.Username and status.Device.name
// may be of interest
// ----------------------------------------------------------------------------

function getKeybaseNativeStatusJson (cb : (?Error, any) => void) : void {

  let err : ?Error = null
  let status : any = null

  exec("keybase status -j", (err, stdout) => {
    if (err === null) {
      try {
        status = JSON.parse(stdout)
      }
      catch (e) {
        err = e
      }
    }
    cb(err, status);
  })
}

// ----------------------------------------------------------------------------
// calls back with just {username, devicename}, if fully logged in and
// unlocked.
// ----------------------------------------------------------------------------

//type UserDeviceMaybe =
type UsernameAndDevicenameCallback = (err : ?Error, udm : ?{username: string, devicename: string}) => void

function getKeybaseUsernameAndDevicename (cb : UsernameAndDevicenameCallback) {

  getKeybaseNativeStatusJson((err,status) => {
    if (status && status.Username && status.Device && status.Device.name) {
      return cb(null, {username:status.Username, devicename: status.Device.name})
    }
    else {
      let err = new Error("failed to get username + device name")
      return cb(err, null)
    }
  });
}

export {getKeybaseNativeStatusJson, getKeybaseUsernameAndDevicename}
export type {UsernameAndDevicenameCallback}