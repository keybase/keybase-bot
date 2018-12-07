// @flow
import snakeCase from 'lodash.snakecase'
import {spawn} from 'child_process'
import readline from 'readline'

type ExecOptions = {|
  stdinBuffer?: Buffer | string,
  onStdOut?: (line: string) => void,
  json?: boolean,
|}

export const keybaseExec = (
  args: string[],
  options: ExecOptions = {stdinBuffer: undefined, onStdOut: undefined}
): Promise<any> => {
  const child = spawn('keybase', args)
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
