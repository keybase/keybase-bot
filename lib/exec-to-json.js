// @flow
import {spawn} from 'child_process'
import type {PromiseExec} from './types'

// takes a string to run on the command line that is expecting
// JSON in stdout. calls back with an error if output doesn't
// parse as JSON or there's an error in execution
//
// if passed a Buffer in stdinBuffer, pipes that into the program

type Params = {|
  command: string,
  args?: Array<string>,
  stdinBuffer?: Buffer,
|}

const execToJson = (params: Params): PromiseExec => {
  const stdinBuffer = params.stdinBuffer
  let out: any = null
  const outBuffers: Array<Buffer> = []
  const child = spawn(params.command, params.args || [])

  if (stdinBuffer) {
    child.stdin.write(stdinBuffer)
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
        const stdout: string = Buffer.concat(outBuffers).toString('utf8')
        try {
          out = JSON.parse(stdout)
        } catch (e) {
          reject(e)
        }
      }
      resolve(out)
    })
  })
}

export {execToJson}
