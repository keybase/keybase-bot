import {keybaseExec, keybaseServiceStartup} from '../../lib/utils'

async function startServiceManually(homeDir: string, username: string, paperkey: string) {
  await keybaseServiceStartup(homeDir)
  // Ideally, this should use `login` instead of `oneshot` but `login` doesn't provide a programmatic way to input a password.
  await keybaseExec(homeDir, ['oneshot', '--username', username], {
    stdinBuffer: paperkey,
  })
}

export default startServiceManually
