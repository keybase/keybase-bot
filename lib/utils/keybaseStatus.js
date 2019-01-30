// @flow
import keybaseExec from '../utils/keybaseExec'

/**
 * Useful information like the username, device, and home directory of your bot.
 */
export type BotInfo = {|
  loggedIn: boolean,
  username?: string,
  devicename?: string,
  homeDir?: string,
|}

/**
 * Returns { username, devicename, homeDir } from `keybase status --json`.
 * @ignore
 * @param workingDir - the directory containing the binary, according to top level Bot
 * @param homeDir - The home directory of the service you want to fetch the status from.
 * @param ping - If true, it just checks if the service is running and returns an empty object.
 * @example
 * const status = keybaseStatus('/my/dir')
 * console.log(status.username)
 */
async function keybaseStatus(workingDir: string, homeDir?: string, ping?: boolean): Promise<BotInfo> {
  const status = await keybaseExec(workingDir, homeDir, ['status', '--json'], {json: true})
  if (ping && status) {
    return {
      loggedIn: false,
    }
  }
  if (status && status.Username && status.Device && status.Device.name) {
    return {
      loggedIn: true,
      username: status.Username,
      devicename: status.Device.name,
      homeDir,
    }
  } else {
    throw new Error('Failed to get current username and device name.')
  }
}

export default keybaseStatus
