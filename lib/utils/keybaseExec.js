// @flow
import {spawn} from 'child_process'
import readline from 'readline'
import path from 'path'

export type ExecOptions = {|
  stdinBuffer?: Buffer | string,
  onStdOut?: (line: string) => void,
  json?: boolean,
|}

const keybaseExec = (
  workingDir: string,
  homeDir?: string,
  args: string[],
  options: ExecOptions = {stdinBuffer: undefined, onStdOut: undefined}
): Promise<any> => {
  const runArgs: string[] = [...args]
  if (homeDir) {
    runArgs.unshift('--home', homeDir)
  }
  const keybasePath = path.join(workingDir, 'keybase')
  const child = spawn(keybasePath, runArgs)
  const stdOutBuffer: Buffer[] = []
  const stdErrBuffer: Buffer[] = []

  if (options.stdinBuffer) {
    child.stdin.write(options.stdinBuffer)
  }
  child.stdin.end()

  const lineReaderStdout = readline.createInterface({input: child.stdout})

  // Use readline interface to parse each line (\n separated) when provided
  // with onStdOut callback
  if (options.onStdOut) {
    lineReaderStdout.on('line', options.onStdOut)
  } else {
    child.stdout.on('data', chunk => {
      stdOutBuffer.push(chunk)
    })
  }
  // Capture STDERR and use as error message if needed
  child.stderr.on('data', chunk => {
    stdErrBuffer.push(chunk)
  })

  return new Promise((resolve, reject) => {
    child.on('close', code => {
      let finalStdOut: ?string = null
      // Pass back
      if (code) {
        const errorMessage = Buffer.concat(stdErrBuffer).toString('utf8')
        reject(new Error(errorMessage))
      } else {
        const stdout = Buffer.concat(stdOutBuffer).toString('utf8')

        try {
          finalStdOut = options.json ? JSON.parse(stdout) : stdout
        } catch (e) {
          reject(e)
        }
      }
      resolve(finalStdOut)
    })
  })
}

export default keybaseExec
