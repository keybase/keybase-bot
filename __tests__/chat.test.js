import Bot from '../lib'
import config from './tests.config.js'

describe('Chat list', () => {
  it('Returns all chat conversations in an array', async () => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    const list = await alice.chat.list()

    const conversationMatcher = expect.objectContaining({
      id: expect.any(String),
      // channel: expect.any(),
      unread: expect.any(Boolean),
      activeAt: expect.any(Number),
      activeAtMs: expect.any(Number),
      memberStatus: expect.any(String),
    })

    expect(Array.isArray(list)).toBe(true)
    expect(list)
      .toEqual(expect.arrayContaining([conversationMatcher]))
      .or.toHaveLength(0)
    await alice.deinit()
  })

  // it('Returns an empty array if there are no chat conversations', async () => {})

  // it('Throws an error if the bot is not initialized', async () => {})

  // it('Shows only unread messages if given the option', async () => {})
})

// describe('Chat read', () => {})

describe('Chat send', () => {
  it('Sends a message to a certain channel', async () => {
    const alice = new Bot()
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
  })
})
