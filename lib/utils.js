// @flow
import fs from 'fs'
import os from 'os'
import path from 'path'
import crypto from 'crypto'
import snakeCase from 'lodash.snakecase'
import {spawn} from 'child_process'
import readline from 'readline'
import type {ChatChannel, ChatMessage} from './chat/types'

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
export function keybaseServiceStartup(keybaseHomeDir: string): Promise<void> {
  const child = spawn('keybase', ['--home', keybaseHomeDir, 'service'])
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
  keybaseHomeDir: string,
  args: string[],
  options: ExecOptions = {stdinBuffer: undefined, onStdOut: undefined}
): Promise<any> => {
  const runArgs: string[] = ['--home', keybaseHomeDir, ...args]
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

const an = type => (['object', 'array'].includes(type) ? 'an' : 'a')
const missing = (name, fn = '') => `Missing Argument: ${fn} ${name} missing or undefined`
const type = (name, type, fn = '') => `Incorrect Argument Type: ${fn} ${name} must be ${an(type)} ${type}`
const key = (name, field, fn = '') => `Missing Field: ${fn} ${name} missing field ${field}`
const value = (name, condition, fn = '') => `Incorrect Argument Value: ${fn} ${name} must be ${condition}`

// Reusable validators for common arguments/types
export const validateChatChannel = (channel: ChatChannel, fn: string, name: string = 'channel') => {
  if (!channel) {
    throw new Error(missing(name, fn))
  }
  if (typeof channel !== 'object') {
    throw new Error(type(name, 'object', fn))
  }

  if (!channel.hasOwnProperty('name')) {
    throw new Error(key(name, 'name', fn))
  }

  if (!channel.name) {
    throw new Error(missing(`${name}.name`, fn))
  }
}

export const validateChatMessage = (message: ChatMessage, fn: string, name: string = 'message') => {
  if (!message) {
    throw new Error(missing(name, fn))
  }
  if (typeof message !== 'object') {
    throw new Error(type(name, 'object', fn))
  }

  if (!message.hasOwnProperty('body')) {
    throw new Error(key(name, 'body', fn))
  }

  if (!message.body) {
    throw new Error(missing(`${name}.body`, fn))
  }
}

export const validateMessageId = (messageId: number, fn: string, name: string = 'messageId') => {
  if (!messageId) {
    throw new Error(missing(name, fn))
  }

  if (typeof messageId !== 'number') {
    throw new Error(type(name, 'number', fn))
  }

  if (messageId < 0) {
    throw new Error(value(name, 'a positive number', fn))
  }
}

export const validateOnMessage = (onMessage: Function, fn: string, name: string = 'onMessage') => {
  if (!onMessage) {
    throw new Error(missing(name, fn))
  }

  if (typeof onMessage !== 'function') {
    throw new Error(type(name, 'function', fn))
  }
}

export const validateString = (credential: string, fn: string, name: string) => {
  if (!credential) {
    throw new Error(missing(name, fn))
  }

  if (typeof credential !== 'string') {
    throw new Error(type(name, 'string', fn))
  }
}
