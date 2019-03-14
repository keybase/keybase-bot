// @flow
import {timeout} from '../../lib/utils'

// convenient promise function that returns when the non-promise function returns a truthy
// value, or a timeout is up. so we don't have to have so many timeout(3000) type things in our tests
async function pollFor(fnToReturnTruthy: Function, maxMilliseconds?: number) {
  const startTime = Date.now()
  while (!fnToReturnTruthy() && Date.now() < startTime + (maxMilliseconds || 30000)) {
    await timeout(5)
  }
}

export default pollFor
