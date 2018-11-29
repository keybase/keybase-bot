// @flow
import type {Reducer} from './types'

export const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      return {
        ...state,
        initialized: true,
        username: action.payload.username,
        devicename: action.payload.devicename,
        flags: action.payload.flags,
      }
    }
    case 'DEINIT': {
      return {
        ...state,
        initialized: false,
        username: undefined,
        devicename: undefined,
        flags: {
          verbose: false,
        },
      }
    }
    default: {
      return state
    }
  }
}
