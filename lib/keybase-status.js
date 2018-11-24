// @flow
import keybaseExec from './keybase-exec.js'
import type {UsernameAndDevice} from './types.js'

const getKeybaseUsernameAndDevicename = async (): Promise<UsernameAndDevice> => {
  const status = await keybaseExec(['status', '--json'], {json: true})
  if (status && status.Username && status.Device && status.Device.name) {
    return {username: status.Username, devicename: status.Device.name}
  } else {
    throw new Error('failed to get username + device name')
  }
}

export default getKeybaseUsernameAndDevicename
