// @flow
import type {Action} from './types'

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

type PreinitProps = {|
  homeDir: string,
|}

export const actionInit = (props: Props): Action => ({
  type: 'INIT',
  payload: props,
})

export const actionPreinit = (props: PreinitProps): Action => ({
  type: 'PREINIT',
  payload: props,
})

export const actionDeinit = (): Action => ({
  type: 'DEINIT',
  payload: {},
})
