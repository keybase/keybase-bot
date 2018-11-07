// @flow
import {spawn} from 'child_process'

type Params = {|
  args: string[],
  stdinBuffer?: Buffer,
|}

export default function keybaseExec(params: Params): Promise<?string> {
  const child = spawn('keybase', params.args)
  const outBuffers: Buffer[] = []
  let out: ?string = null

  if (params.stdinBuffer) {
    child.stdin.write(params.stdinBuffer)
    child.stdin.end()
  }

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
