// @flow
import os from 'os'
import path from 'path'
import crypto from 'crypto'

function randomTempDir(): string {
  const name: string = crypto.randomBytes(16).toString('hex')
  return path.join(os.tmpdir(), `keybase_bot_${name}`)
}

export default randomTempDir
