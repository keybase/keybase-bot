import Bot from '../lib'
import config from './tests.config.js'

test('Chat methods with an uninitialized bot', () => {
  const alice = new Bot()
  expect(alice.chat.list()).rejects.toThrowError()
})

describe('Chat Methods', () => {
  const alice = new Bot()
  beforeAll(async () => {
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
  })
  afterAll(async () => {
    await alice.deinit()
  })

  describe('Chat list', () => {
    it('Returns all chat conversations in an array', async () => {
      const conversations = await alice.chat.list()

      const conversationMatcher = expect.objectContaining({
        id: expect.any(String),
        // channel: expect.any(),
        unread: expect.any(Boolean),
        activeAt: expect.any(Number),
        activeAtMs: expect.any(Number),
        memberStatus: expect.any(String),
      })

      expect(Array.isArray(conversations)).toBe(true)
      for (const conversation of conversations) {
        expect(conversation).toEqual(conversationMatcher)
      }
    })

    // it('Returns an empty array if there are no chat conversations', async () => {})

    it('Shows only unread messages if given the option', async () => {
      const conversations = await alice.chat.list({unreadOnly: true})
      for (const conversation of conversations) {
        expect(conversation).toHaveProperty('unread', true)
      }
    })

    it('Shows only messages of a specific topic type if given the option', async () => {
      const conversations = await alice.chat.list({topicType: 'DEV'})
      for (const conversation of conversations) {
        expect(conversation).toHaveProperty('topicType', 'DEV')
      }
    })

    it('Throws an error if given an invalid option', async () => {
      expect(await alice.chat.list({fakeOption: 'blah'})).rejects.toThrowError()
    })
  })

  describe('Chat read', () => {
    it('Retrieves all messages in a conversation', async () => {
      const channel = {name: `${config.bots.alice1.username},${config.bots.bob1.username}`}
      const messages = await alice.chat.read(channel)

      expect(Array.isArray(messages)).toBe(true)
    })

    // it('Shows only unread messages if given the option')
    // it('Doesn't mark options read on peek)
    // it('Throws an error if given an invalid channel')
    // it('Throws an error if given an invalid option')
    // it('Throws an error if the bot is uninitialized')
  })

  describe('Chat send', () => {
    it('Sends a message to a certain channel and returns an empty promise', async () => {
      const channel = {name: `${config.bots.alice1.username},${config.bots.bob1.username}`}
      const message = {body: 'Testing chat.send()!'}
      await alice.chat.send(channel, message)

      const messages = await alice.chat.read(channel, {
        peek: true,
      })
      expect(messages[0].sender.username).toEqual(alice.myInfo().username)
      expect(messages[0].content.text.body).toEqual(message.body)
    })

    // it('Throws an error if given an invalid channel')
    // it('Throws an error if given an invalid message')
    // it('Throws an error if given an invalid option')
    // it('Throws an error if the bot is uninitialized')  // it('Throws an error if given an invalid option')
    // it('Throws an error if the bot is uninitialized')
    // it('Throws an error if it cannot send the message (e.g., the channel does not exist)')
  })

  describe('Chat delete', () => {
    it('Deletes a message to a certain channel and returns an empty promise', async () => {
      const channel = {name: `${config.bots.alice1.username},${config.bots.bob1.username}`}
      const message = {body: 'Testing chat.send()!'}
      await alice.chat.send(channel, message)

      // Send a message
      const messages = await alice.chat.read(channel, {
        peek: true,
      })
      expect(messages[0].sender.username).toEqual(alice.myInfo().username)
      expect(messages[0].content.text.body).toEqual(message.body)

      const {id} = messages[0]
      await alice.chat.delete(channel, id)

      // Send a message
      const newMessages = await alice.chat.read(channel, {
        peek: true,
      })
      expect(newMessages[0].id).toEqual(id + 1)
      expect(newMessages[0].content.delete.messageIDs).toContain(id)
      expect(newMessages[0].content.delete.messageIDs).toHaveLength(1)
      expect(newMessages[1].id).toEqual(id - 1)
    })

    // it('Throws an error if given an invalid channel')
    // it('Throws an error if given an invalid id')
    // it('Throws an error if given an invalid option')
    // it('Throws an error if the bot is uninitialized')
    // it('Throws an error if it cannot delete the message (e.g., someone else wrote it)')
  })
})
