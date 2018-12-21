// @flow
import {spawn} from 'child_process'
import readline from 'readline'

//
// this function is a bit different from keybaseExec in that
// it keeps a service running and acts on stderr, so let's not mess with the logical
// complexity in keybaseExec
//
function keybaseServiceStartup(homeDir: string): Promise<number> {
  const child = spawn('keybase', ['--home', homeDir, 'service'])
  const lineReader = readline.createInterface({input: child.stderr})
  return new Promise((resolve, reject) => {
    child.on('close', code => {
      // any code here including 0 is bad here, if it happens before resolve
      //, since this service should stay running
      reject(new Error(`keybase service exited with code ${code}:`))
    })
    lineReader.on('line', (line: string) => {
      if (line.indexOf('net.Listen on unix:keybased.sock')) {
        resolve(child.pid)
      }
    })
  })
}

export default keybaseServiceStartup
