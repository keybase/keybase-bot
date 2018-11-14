// @flow
import {spawn} from 'child_process'

type ExecOptions = {|
  stdinBuffer?: Buffer,
  onStdOut?: () => void,
|}

export default function keybaseExec(args: string[], options: ExecOptions = {}): Promise<?string> {
  const child = spawn('keybase', args)
  const outBuffers: Buffer[] = []
  let out: ?string = null

  if (options && typeof options === 'object' && options.stdinBuffer) {
    child.stdin.write(options.stdinBuffer)
    child.stdin.end()
  }

  child.stdout.on(
    'data',
    options.onStdOut
      ? options.onStdOut
      : chunk => {
          outBuffers.push(chunk)
        }
  )

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
