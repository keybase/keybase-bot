import keybaseExec from '../utils/keybaseExec'

export type BotInfo = {|username: string, devicename: string, homeDir: string|}

/**
 * @ignore
 * Returns { username, devicename, homeDir } from `keybase status --json`.
 */

async function keybaseStatus(homeDir?: string): Promise<void> {
  const status = await keybaseExec(homeDir, ['status', '--json'], {json: true})
  if (status && status.Username && status.Device && status.Device.name) {
    return {username: status.Username, devicename: status.Device.name, homeDir}
  } else {
    throw new Error('Failed to get current username and device name.')
  }
}

export default keybaseStatus
