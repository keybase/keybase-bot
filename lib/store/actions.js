// @flow
import type {Action} from './store-types'
// import type {UsernameAndDevice} from '../types'

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
