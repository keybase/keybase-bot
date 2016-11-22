// @flow
import {getKeybaseUsernameAndDevicename} from "./keybase-status.js"

// ============================================================================

export class Bot {
  username: ?string
  initialized: boolean

  // --------------------------------------------------------------------------

  constructor() {
    this.username = null
    this.initialized = false
  }
  // --------------------------------------------------------------------------

  init(cb : (?Error) => void): void {
    getKeybaseUsernameAndDevicename((err, res) => {
      if (res) {
        this.username = res.username
        console.log(`intialized ${this.username} (device=${res.devicename})`)
      }
      this.initialized = true
      cb(err)
    })
  }
}