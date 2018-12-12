// @flow

export type InitAction = {|
  type: 'INIT',
  payload: {|
    username: string,
    devicename: string,
    flags: {|
      verbose: boolean,
    |},
  |},
|}

export type DeinitAction = {|
  type: 'DEINIT',
  payload: {||},
|}

export type PreinitAction = {|
  type: 'PREINIT',
  payload: {|
    homeDir: string,
  |},
|}

export type Action = InitAction | DeinitAction | PreinitAction

export type State = {|
  +initialized: boolean,
  +username: void | string,
  +devicename: void | string,
  +homeDir: string,
  +flags: {
    +verbose: boolean,
  },
|}
export type Reducer = (state: State, action: Action) => State
export type Store = {|
  +getState: () => State,
  +dispatch: (action: Action) => void,
|}
