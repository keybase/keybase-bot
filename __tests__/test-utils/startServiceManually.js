// @flow
import {spawn} from 'child_process'
import readline from 'readline'
import {keybaseExec} from '../../lib/utils'

function keybaseServiceStartup(homeDir: string): Promise<void> {
  const child = spawn('keybase', ['--home', homeDir, 'service'])
  const lineReader = readline.createInterface({input: child.stderr})
  return new Promise((resolve, reject) => {
    child.on('close', code => {
      // any code here including 0 is bad here, if it happens before resolve
      //, since this service should stay running
      reject(new Error(`keybase service exited with code ${code}:`))
    })
    lineReader.on('line', (line: string) => {
      if (line.indexOf('net.Listen on unix:') !== -1) {
        resolve()
      }
    })
  })
}

async function startServiceManually(homeDir: string, username: string, paperkey: string) {
  await keybaseServiceStartup(homeDir)
  // Ideally, this should use `login` instead of `oneshot` but `login` doesn't provide a programmatic way to input a password.
  await keybaseExec(homeDir, ['oneshot', '--username', username], {
    stdinBuffer: paperkey,
  })
}

export default startServiceManually
