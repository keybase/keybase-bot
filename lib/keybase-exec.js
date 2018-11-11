// @flow
import {spawn} from 'child_process'

export default function keybaseExec(args: string[], stdinBuffer?: Buffer): Promise<?string> {
  const child = spawn('keybase', args)
  const outBuffers: Buffer[] = []
  let out: ?string = null

  if (stdinBuffer) {
    child.stdin.write(stdinBuffer)
  }
  child.stdin.end()

  child.stdout.on('data', chunk => {
    outBuffers.push(chunk)
  })

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
