// @flow
import {timeout} from '../../lib/utils'

// convenient promise function that returns when the non-promise function returns a truthy
// value, or throws an error if it times out. This is so we don't have to have so many timeout(3000) type things in our tests
async function pollFor(fnToReturnTruthy: Function, maxMilliseconds?: number) {
  const endTime = Date.now() + (maxMilliseconds || 30000)
  while (Date.now() < endTime) {
    if (fnToReturnTruthy()) {
      return true
    }
    await timeout(5)
  }
  throw new Error('timeout in pollFor')
}

export default pollFor
