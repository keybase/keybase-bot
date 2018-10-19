// @flow
import type {ChatChannel} from './types.js'

function chatChannelToKey (channel: ChatChannel): string {
  // TODO: come back to this
  return JSON.stringify([channel.name, channel.public, channel.topic_type])
}

export {chatChannelToKey}
