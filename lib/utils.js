// @flow
import snakeCase from 'lodash/snakeCase'
import type {AllChatOptions, ChatChannel} from './types.js'

export const chatChannelToKey = (channel: ChatChannel): string => {
  // TODO: come back to this
  return JSON.stringify([channel.name, channel.public, channel.topicType])
}

export const formatOptions = (options: AllChatOptions): object => snakeCase(options)
