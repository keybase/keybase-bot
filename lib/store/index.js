// @flow
import {actionInit, actionDeinit, actionPreinit} from './actions'
import {reducer} from './reducer'
import {withStore, withGuards} from './utils'
import {randomTempDir} from '../utils'
import type {State, Action, Reducer, Store} from './types'

export {actionInit, actionDeinit, reducer, withStore, withGuards, actionPreinit}

/*
 * Store
 */
export const initialState = {
  initialized: false,
  username: undefined,
  devicename: undefined,
  homeDir: randomTempDir(),
  flags: {
    verbose: false,
  },
}

/*
 * This is basic functional state management (redux-like) without any overhead
 * for middleware or listeners
 *
 * state -> dispatch(action) -> reducer -> new state
 */
export const createStore = (reducer: Reducer, init: State = initialState): Store => {
  let state = init
  const getState = (): State => ({...state})
  const dispatch = (action: Action) => {
    state = reducer(state, action)
  }
  return {
    getState,
    dispatch,
  }
}