// @flow
import type {DeviceUsernamePair} from '../types'

/**
 */
export type InitOptions = {|
  verbose?: boolean,
|}

/*
 * Base API functions
 */

export type Init = (username: string, papaerkey: string, options?: InitOptions) => Promise<void>

export type Deinit = () => Promise<void>

export type MyInfo = () => ?DeviceUsernamePair

/*
 * Any Base API function
 */
export type AnyBaseApi = Init | Deinit | MyInfo
