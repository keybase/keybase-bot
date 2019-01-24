// @flow
import keybaseExec from '../utils/keybaseExec'

/**
 * Useful information like the username, device, home directory of your bot and
 * configuration options.
 */
export type BotInfo = {|
  username: string,
  devicename: string,
  homeDir?: string,
  botLite?: boolean,
  disableTyping?: boolean,
|}

/**
 * Returns { username, devicename, homeDir } from `keybase status --json`.
 * @ignore
 * @param workingDir - the directory containing the binary, according to top level Bot
 * @param homeDir - The home directory of the service you want to fetch the status from.
 * @example
 * keybaseStatus('/my/dir').then(status => console.log(status.username))
 */
async function keybaseStatus(workingDir: string, homeDir?: string): Promise<BotInfo> {
  const status = await keybaseExec(workingDir, homeDir, ['status', '--json'], {json: true})
  if (status && status.Username && status.Device && status.Device.name) {
    return {
      username: status.Username,
      devicename: status.Device.name,
      homeDir,
    }
  } else {
    throw new Error('Failed to get current username and device name.')
  }
}

export default keybaseStatus
