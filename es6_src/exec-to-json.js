// @flow
import {spawn} from 'child_process'
import type {CbAny} from './types'

// takes a string to run on the command line that is expecting
// JSON in stdout. calls back with an error if output doesn't
// parse as JSON or there's an error in execution
//
// if passed a Buffer in stdinBuffer, pipes that into the program

function execToJson (params: {command: string, args?: Array<string>, stdinBuffer?: Buffer}, cb: CbAny) : void {
  const stdinBuffer = params.stdinBuffer
  let out:any = null
  let startTime:number = Date.now()
  let err:?Error = null
  let outBuffers:Array<Buffer> = []
  let child = spawn(params.command, params.args || [])

  if (stdinBuffer) {
    //console.log(stdinBuffer.toString('utf8'))
    child.stdin.write(stdinBuffer)
    child.stdin.end()
  }

  child.stdout.on('data', (chunk) => {
    outBuffers.push(chunk)
  })

  child.on('close', (code) => {
    if (code) {
      err = new Error(`exited with code ${code}`)
    } else {
      let stdout:string = Buffer.concat(outBuffers).toString('utf8')
      try {
        out = JSON.parse(stdout)
      } catch (e) {
        err = e
      }
    }

    // if (stdinBuffer) {
    //   console.log(`...(${Date.now() - startTime}ms)` + stdinBuffer.toString('utf8'))
    // }

    cb(err, out)
  })
}

export {execToJson}
