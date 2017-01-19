// @flow
import tweakables from './tweakables.js'

class GasPreserver {

  // --------------------------------------------------------------------------

  _lastPassedGas: Array<any>;
  _currentWait: number;

  // --------------------------------------------------------------------------

  constructor () : void {
    this._lastPassedGas = []
    this._currentWait = tweakables.MIN_CHANNEL_WATCH_LOOP
  }

  // --------------------------------------------------------------------------

  passGas (rateLimits: Array<any>) : void {
    this._lastPassedGas.push(rateLimits[0]) // let's just take the first for now
    this._filterOldGas()
  }

  // --------------------------------------------------------------------------

  recommendedWait () : number {
    let speed = this._getCurrentSpeed()
    let gas = this._getRemainingGas()
    let gas_left_with_buffer = Math.max(0, gas - tweakables.TARGET_GAS_REMAINING)
    let timeLeft = this._getTimeTillReset()
    // this._currentWait = 1000 * (speed * timeLeft / gas) * tweakables.SAFETY_BUFFER
    if (speed * timeLeft > gas_left_with_buffer) {
      this._currentWait *= tweakables.GAS_ADJ_MULT
    } else {
      this._currentWait /= tweakables.GAS_ADJ_MULT
    }
    this._currentWait = Math.max(tweakables.MIN_CHANNEL_WATCH_LOOP, this._currentWait)
    this._currentWait = Math.min(tweakables.MAX_CHANNEL_WATCH_LOOP, this._currentWait)
    console.log(`...speed=${speed}, gas=${gas}, timeLeft=${timeLeft}, currentWait=${this._currentWait}, history=${this._lastPassedGas.length}`)
    return this._currentWait
  }

  // --------------------------------------------------------------------------

  _filterOldGas () : void {
    let ind = 0
    // throw away any data before a reset
    for (ind = this._lastPassedGas.length - 2; ind >= 0; ind--) {
      let latest = this._lastPassedGas[this._lastPassedGas.length - 1]
      let curr = this._lastPassedGas[ind]
      if (curr.gas < latest.gas || curr.reset < latest.reset) {
        break
      }
    }
    if (ind >= 0) {
      console.log('BEFORE GAS CLEANUP', this._lastPassedGas)
      this._lastPassedGas.splice(0, (ind + 1))
      console.log('AFTER GAS CLEANUP', this._lastPassedGas)
    }
    // now throw away anything over a certain age
    if (this._lastPassedGas.length > 2) {
      let keepers = this._lastPassedGas.slice(-2)
      let candidates = this._lastPassedGas.slice(0, -2)
      candidates = candidates.filter((c) => c.reset < keepers[1].reset + tweakables.GAS_MONITOR_WINDOW / 1000)
      this._lastPassedGas = candidates.concat(keepers)
      //console.log(this._lastPassedGas)
    }
    return
  }

  // --------------------------------------------------------------------------

  _getCurrentSpeed () : number {
    if (this._lastPassedGas.length < 2) {
      return 1
    } else {
      const g = this._lastPassedGas
      const glast = g[g.length - 1]
      const speed = (g[0].gas - glast.gas) / (1 + g[0].reset - glast.reset)
      return speed
    }
  }

  // --------------------------------------------------------------------------

  _getRemainingGas () : number {
    if (this._lastPassedGas.length < 1) {
      return tweakables.DEFAULT_GAS
    } else {
      return this._lastPassedGas[this._lastPassedGas.length - 1].gas
    }
  }

  // --------------------------------------------------------------------------

  _getTimeTillReset () : number {
    if (this._lastPassedGas.length < 1) {
      return tweakables.DEFAULT_TIME_LEFT
    } else {
      return this._lastPassedGas[this._lastPassedGas.length - 1].reset
    }
  }

  // --------------------------------------------------------------------------

}

export {GasPreserver}
