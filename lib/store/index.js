// @flow
import type {AnyApi, AnyApiWithStore} from '../types.js'
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
 * withStore is a helper function that can be used to provide a single API function
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
 *  guards = [checkInitialized, checkUsernameUnchanged]
 *  apiFunc = withStore(store, guards?)(wrappedApiFun)
 *
 * A is the wrapped function that is provided `store`
 * B is the regular api function that gets closure over `store`
 *
 * This is very useful when initializing new bots and passing in different stores for each Bot
 * as well as testing individual API methods by providing an preconfigured store.
 */
export const withStore = (store: Store, allGuards?: AwaitAllGuards) => {
  return (wrapped: AnyApiWithStore) => {
    const apiFunc = wrapped(store)
    // Intentionally allow error to bubble up and be handled by caller
    const withGuard = async (...args: any) => {
      if (allGuards) {
        await allGuards(store)
      }
      const res = await apiFunc(...args)
      return res
    }

    // If withStore was called using withGuards, then prevent apiFunc from
    // being called until all guard functions resolve
    //
    // Otherwise return the API function directly
    if (allGuards) {
      return withGuard
    }
    return apiFunc
  }
}

/*
 * withGuards takes an array of functions that return Promises. Each function will reject/throw if some condition in the Store does not hold.
 * Example:
 *    withGuards([checkInitialized, checkUsernameUnchanged])
 *
 */
type Guard = (store: Store) => Promise<void>
type AwaitAllGuards = (store: Store) => Promise<void>
type WithGuards = (Array<Guard>) => AwaitAllGuards
export const withGuards: WithGuards = guards => async (store: Store) => {
  for (let guard of guards) {
    await guard(store)
  }
}
