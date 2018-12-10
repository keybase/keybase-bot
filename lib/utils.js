// @flow
import fs from 'fs'
import os from 'os'
import path from 'path'
import crypto from 'crypto'
import snakeCase from 'lodash.snakecase'
import {spawn} from 'child_process'
import readline from 'readline'

type ExecOptions = {|
  stdinBuffer?: Buffer | string,
  onStdOut?: (line: string) => void,
  json?: boolean,
|}

//
// this function is a bit different from keybaseExec in that
// it keeps a service running and acts on stderr, so let's not mess with the logical
// complexity in keybaseExec
//
export function keybaseServiceStartup(homeDir: string): Promise<void> {
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
        resolve()
      }
    })
  })
}

export const keybaseExec = (
  homeDir: string,
  args: string[],
  options: ExecOptions = {stdinBuffer: undefined, onStdOut: undefined}
): Promise<any> => {
  const runArgs: string[] = ['--home', homeDir, ...args]
  const child = spawn('keybase', runArgs)
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

// Recursively convert from camelCase to snake_case for any options object for keybase chat api
export const formatOptions = (options: any): any =>
  Object.keys(options).reduce((newOptions, key) => {
    if (typeof options[key] === 'object') {
      return {
        ...newOptions,
        [snakeCase(key)]: formatOptions(options[key]),
      }
    }
    return {
      ...newOptions,
      [snakeCase(key)]: options[key],
    }
  }, {})

export function randomTempDir(): string {
  const name: string = crypto.randomBytes(16).toString('hex')
  return path.join(os.tmpdir(), `keybase_bot_${name}`)
}

export function mkdir(dirName: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirName, 0o700, error => {
      if (error) reject(error)
      resolve()
    })
  })
}

export function rmdir(dirName: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // The keybase service will have made some files here; we want to clean them all out
    // Node doesn't have a recursive dir clean, but.
    console.log(`TODO: implement recurseive rmdir for tmp directory ${dirName}`)
    resolve()
  })
}
