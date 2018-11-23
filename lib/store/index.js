// @flow
import type {State, Action, Reducer} from './store-types'

export const createStore = (reducer: Reducer, initialState: State) => {
  let state = initialState
  const getState = (): State => ({...state})
  const dispatch = (action: Action) => {
    state = reducer(state, action)
  }
  return {
    getState,
    dispatch,
  }
}

const initialState = {
  initialized: false,
  username: undefined,
  devicename: undefined,
  flags: {
    verbose: false,
  },
}

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      return {
        ...state,
        initialized: true,
        flags: action.payload.flags,
      }
    }
    case 'DEINIT': {
      return {
        ...state,
        initialized: false,
        flags: initialState.flags,
      }
    }
    default: {
      return state
    }
  }
}

const store = createStore(reducer, initialState)
const {getState, dispatch} = store
export {getState, dispatch}
export default store
