import Bot from '..'
import config from './tests.config.js'

describe('Chat list', () => {
  it('Returns all chat conversations in an array', async () => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
  })

  it('Returns an empty array if there are no chat conversations', async () => {})

  it('Throws an error if the bot is not initialized', async () => {})
})

describe('Chat read', () => {})
