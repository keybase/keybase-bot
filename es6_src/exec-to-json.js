// @flow
import {spawn} from 'child_process'
import {createReadStream} from 'fs'
import type {CbAny} from './types'

// takes a string to run on the command line that is expecting
// JSON in stdout. calls back with an error if output doesn't
// parse as JSON or there's an error in execution
//
// if passed a Buffer in stdinBuffer, pipes that into the program

function execToJson(params: {command: string, args?: Array<string>, stdinBuffer?: Buffer}, cb: CbAny) : void {

  let out:any = null
  let err:?Error = null
  let outBuffers:Array<Buffer> = []
  let child = spawn(params.command, params.args || [])

  if (params.stdinBuffer) {
    child.stdin.write(params.stdinBuffer)
    child.stdin.end()
  }

  child.stdout.on('data', (chunk) => {
    outBuffers.push(chunk);
  });

  child.on('close', (code) => {
    if (code) {
      err = new Error(`exited with code ${code}`)
    }
    else {
      let stdout:string = Buffer.concat(outBuffers).toString('utf-8')
      try {
        out = JSON.parse(stdout)
      }
      catch (e) {
        err = e
      }
    }
    cb(err, out);
  })

}

export {execToJson}

