// @flow
import type {State, Action, Reducer, Store} from './types'

/*
 * This is basic functional state management (redux-like) without anyo overhead
 * for middleware or listeners
 *
 * state -> dispatch(action) -> reducer -> new state
 */

export const createStore = (reducer: Reducer, initialState: State): Store => {
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

/*
 * Actions
 */

type Props = {|
  username: string,
  devicename: string,
  flags: {|
    verbose: boolean,
  |},
|}

export const actionInit = (props: Props): Action => ({
  type: 'INIT',
  payload: props,
})

export const actionDeinit = (): Action => ({
  type: 'DEINIT',
  payload: {},
})

/*
 * Store
 */
export const initialState = {
  initialized: false,
  username: undefined,
  devicename: undefined,
  flags: {
    verbose: false,
  },
}

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
        flags: initialState.flags,
      }
    }
    default: {
      return state
    }
  }
}

/*
 * withStore is a helper function that can be used to provide a single API method
 * with an insolatd store.
 *
 * This is used in the following situations:
 *  1. Multiple bots are initialized and each one creates its own store
 *  2. Tests where an example store is created, passed in to an API method, and
 *     then discarded
 *
 * Usage:
 *                      A          B
 *  wrappedApiFunc = (store) => (options) => { ... }
 *  apiFunc = withStore(store)(wrappedApiFun)
 *
 * A is the wrapped function that is given the store
 * B is the regular api function that gets closure over store
 *
 * This is very useful when initializing new bots and passing in different stores for each Bot
 * as well as testing individual API methods by providing an preconfigured store.
 */
type WrappedFn = (store: Store) => Function
export const withStore = (store: Store) => (fn: WrappedFn) => fn(store)
