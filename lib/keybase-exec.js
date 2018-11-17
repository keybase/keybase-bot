// @flow
import {spawn} from 'child_process'
import readline from 'readline'

type ExecOptions = {|
  stdinBuffer?: Buffer | string,
  onStdOut?: (line: string) => void,
|}

export default function keybaseExec(
  args: string[],
  options: ExecOptions = {stdinBuffer: undefined, onStdOut: undefined}
): Promise<?string> {
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
          out = stdout === '' ? stdout : JSON.parse(stdout)
        } catch (e) {
          reject(e)
        }
      }

      resolve(out)
    })
  })
}
