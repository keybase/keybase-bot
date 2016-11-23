// @flow
import {exec} from 'child_process'
import type {CbAny} from './types'

// takes a string to run on the command line that is expecting
// JSON in stdout. calls back with an error if output doesn't
// parse as JSON or there's an error in execution

function execToJson(params: {command: string}, cb: CbAny) : void {

  let out:any = null

  exec(params.command, (err, stdout) => {
    if (err === null) {
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

