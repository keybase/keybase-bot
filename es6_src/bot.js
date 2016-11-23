// @flow
import {getKeybaseUsernameAndDevicename} from "./keybase-status.js"
import {runApiCommand} from "./chat-api.js"
import type {CbError, CbAny} from "./types.js"
import type {DeviceUsernamePair,ChatChannel,ChatMessage} from "./types.js"
import type {ApiCommandArg} from "./chat-api.js"

// ============================================================================

export class Bot {
  dPair: ?DeviceUsernamePair;
  initialized: boolean;

  // --------------------------------------------------------------------------

  constructor() {
    this.dPair = null
    this.initialized = false
  }

  // --------------------------------------------------------------------------

  init(cb: CbError): void {
    getKeybaseUsernameAndDevicename((err, currentDPair) => {
      if (currentDPair) {
        this.dPair = currentDPair
        console.log(`intialized ${currentDPair.username} (device=${currentDPair.devicename})`)
      }
      this.initialized = true
      cb(err)
    })
  }

  // --------------------------------------------------------------------------

  chatList(cb: CbAny): void {
    this._safelyRunApiCommand({method: "list", options:{}}, (err, res) => {
      return cb(err, res)
    });
  }

  // --------------------------------------------------------------------------

  chatSend(arg: {channel: ChatChannel, message: ChatMessage}, cb: CbAny): void {
    let {channel, message} = arg
    this._safelyRunApiCommand({method: "send", options:{channel, message}}, (err, res) => {
      return cb(err, res)
    });
  }

  // --------------------------------------------------------------------------
  //  - make sure inited ok
  //  - make sure user is still the same user since init
  // --------------------------------------------------------------------------

  _checkUserAndInit(cb: CbError): void {
    console.log('+ checking user and init')
    getKeybaseUsernameAndDevicename((err, currentDPair) => {
      if (!err && (! this.initialized || ! currentDPair || ! this.dPair || currentDPair.username != this.dPair.username)) {
        err = new Error(`Uh-oh, username has changed or we never initialized correctly.`)
      }
      let ok:string = (err === null).toString()
      console.log(`- checking user and init (ok=${ok})`)
      return cb(err)
    })
  }

  // --------------------------------------------------------------------------

  _safelyRunApiCommand(arg: ApiCommandArg, cb: CbError) : void {
    this._checkUserAndInit((err) => {
      if (!err) {
        runApiCommand(arg, (err, res) => {
          return cb(err, res)
        })
      }
      else {
        return cb(err)
      }
    })
  }

}