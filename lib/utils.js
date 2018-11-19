// @flow
import snakeCase from 'lodash/snakeCase'
import type {ChatChannel} from './types.js'

export const chatChannelToKey = (channel: ChatChannel): string => {
  // TODO: come back to this
  return JSON.stringify([channel.name, channel.public, channel.topicType])
}

// Recursively convert from camelCase to snake_case for any options object for keybase chat api
export const formatOptions = (options: any): any =>
  Object.keys(options).reduce((newOptions, key) => {
    if (typeof options[key] === 'object') {
      return {
        ...newOptions,
        [snakeCase(key)]: formatOptions(options[key]),
      }
    }
    return {
      ...newOptions,
      [snakeCase(key)]: options[key],
    }
  }, {})
