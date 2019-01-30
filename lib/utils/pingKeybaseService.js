// @flow
import keybaseExec from '../utils/keybaseExec'

/**
 * Checks whether the keybase service is running by calling `keybase status --json`.
 * @ignore
 * @param workingDir - the directory containing the binary, according to top level Bot
 * @param homeDir - The home directory of the service you want to fetch the status from.
 * @example
 * pingKeybaseService('/my/dir').then(status => console.log("service running", status))
 */
async function pingKeybaseService(workingDir: string, homeDir?: string): Promise<boolean> {
  // TODO: use a faster technique when core releases one
  try {
    await keybaseExec(workingDir, homeDir, ['--no-auto-fork', 'status', '--json'], {json: true})
    return true
  } catch (err) {
    return false
  }
}

export default pingKeybaseService
