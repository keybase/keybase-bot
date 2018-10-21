// @flow
import {spawn} from 'child_process'
import type {CbAny} from './types'

type Params = {|
  args: string[],
  stdinBuffer?: Buffer,
|}

export default function keybaseExec(params: Params, cb: ?CbAny): void {
  const child = spawn('keybase', params.args)
  const outBuffers: Buffer[] = []
  let out: ?string = null
  let err: ?Error = null

  if (params.stdinBuffer) {
    child.stdin.write(params.stdinBuffer)
    child.stdin.end()
  }

  child.stdout.on('data', chunk => {
    outBuffers.push(chunk)
  })

  child.on('close', code => {
    if (code) {
      err = new Error(`exited with code ${code}`)
    } else {
      const stdout = Buffer.concat(outBuffers).toString('utf8')

      try {
        out = stdout === '' ? stdout : JSON.parse(stdout)
      } catch (e) {
        err = e
      }
    }
  })

  if (cb) {
    cb(err, out)
  }
}
