// @flow
import type {Store} from './store/types'
import type {AnyBaseApi} from './base/types'
import type {AnyChatApi} from './chat/types'

/**
 */
export type DeviceUsernamePair = {|username: string, devicename: string|}
export type ApiCommandArg = {|method: string, options: Object, tempDir: string|}

/*
 * Any Api Method
 */
export type AnyApi = AnyBaseApi | AnyChatApi

/*
 * Any Api Method Wrapped using withStore
 */
export type AnyApiWithStore = Store => AnyApi
