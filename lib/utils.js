// @flow
import snakeCase from 'lodash.snakecase'
import type {ChatChannel} from './types.js'
import {spawn} from 'child_process'
import readline from 'readline'

type ExecOptions = {|
  stdinBuffer?: Buffer | string,
  onStdOut?: (line: string) => void,
  parseOutputAsJSON?: boolean,
|}

export function keybaseExec(
  args: string[],
  options: ExecOptions = {stdinBuffer: undefined, onStdOut: undefined}
): Promise<any> {
  const child = spawn('keybase', args)
  const outBuffers: Buffer[] = []
  let out: ?string = null

  if (options.stdinBuffer) {
    child.stdin.write(options.stdinBuffer)
  }
  child.stdin.end()

  const lineReader = readline.createInterface({input: child.stdout})
  if (options.onStdOut) {
    lineReader.on('line', options.onStdOut)
  } else {
    child.stdout.on('data', chunk => {
      outBuffers.push(chunk)
    })
  }

  return new Promise((resolve, reject) => {
    child.on('close', code => {
      if (code) {
        reject(new Error(`exited with code ${code}`))
      } else {
        const stdout = Buffer.concat(outBuffers).toString('utf8')

        try {
          out = options.parseOutputAsJSON ? JSON.parse(stdout) : stdout
        } catch (e) {
          reject(e)
        }
      }

      resolve(out)
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
