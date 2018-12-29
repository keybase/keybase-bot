// @flow
import keybaseExec from '../utils/keybaseExec'

/**
 * Useful information like the username, device, and home directory of your bot.
 */
export type BotInfo = {|
  username: string,
  devicename: string,
  homeDir?: string,
|}

/**
 * Returns { username, devicename, homeDir } from `keybase status --json`.
 * @ignore
 * @param homeDir - The home directory of the service you want to fetch the status from.
 * @example
 * const status = keybaseStatus('/my/dir')
 * console.log(status.username)
 */
async function keybaseStatus(homeDir?: string): Promise<BotInfo> {
  const status = await keybaseExec(homeDir, ['status', '--json'], {json: true})
  if (status && status.Username && status.Device && status.Device.name) {
    return {username: status.Username, devicename: status.Device.name, homeDir}
  } else {
    throw new Error('Failed to get current username and device name.')
  }
}

export default keybaseStatus
