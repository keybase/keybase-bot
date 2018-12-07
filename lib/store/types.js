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

export type Action = InitAction | DeinitAction

export type State = {|
  +initialized: boolean,
  +username: void | string,
  +devicename: void | string,
  +tempDir: string,
  +flags: {
    +verbose: boolean,
  },
|}
export type Reducer = (state: State, action: Action) => State
export type Store = {|
  +getState: () => State,
  +dispatch: (action: Action) => void,
|}
