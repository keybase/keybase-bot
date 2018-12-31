import crypto from 'crypto'

import Bot from '../lib'
import config from './tests.config.js'

function waitAMoment(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), ms)
  })
}

test('Chat methods with an uninitialized bot', () => {
  const alice = new Bot()
  const channel = {name: `${config.bots.alice1.username},${config.bots.bob1.username}`}
  const message = {body: 'Testing!'}

  expect(alice.chat.list()).rejects.toThrowError()
  expect(alice.chat.read()).rejects.toThrowError()
  expect(alice.chat.send(channel, message)).rejects.toThrowError()
  expect(alice.chat.delete(channel, 314)).rejects.toThrowError()
})

describe('Chat Methods', () => {
  const alice = new Bot()
  const bob = new Bot()
  const channel = {name: `${config.bots.alice1.username},${config.bots.bob1.username}`}
  const teamChannel = {
    name: config.teams.acme.teamname,
    public: false,
    topic_type: 'chat',
    members_type: 'team',
    topic_name: 'general',
  }

  const message = {body: 'Test message!'}
  const invalidChannel = {name: 'kbot,'}
  const invalidMessage = {bdy: 'blah'}

  const channelMatcher = expect.objectContaining({
    name: expect.any(String),
    public: expect.any(Boolean),
    membersType: expect.any(String),
  })
  const conversationMatcher = expect.objectContaining({
    id: expect.any(String),
    channel: channelMatcher,
    unread: expect.any(Boolean),
    activeAt: expect.any(Number),
    activeAtMs: expect.any(Number),
    memberStatus: expect.any(String),
  })
  const messageMatcher = expect.objectContaining({
    id: expect.any(Number),
    channel: channelMatcher,
    sender: expect.objectContaining({
      deviceId: expect.any(String),
      uid: expect.any(String),
    }),
    sentAt: expect.any(Number),
    sentAtMs: expect.any(Number),
    content: expect.objectContaining({
      type: expect.any(String),
    }),
    unread: expect.any(Boolean),
  })

  beforeAll(async () => {
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    await bob.init(config.bots.bob1.username, config.bots.bob1.paperkey)
  })
  afterAll(async () => {
    await alice.deinit()
    await bob.deinit()
  })

  describe('Chat list', () => {
    it('Returns all chat conversations in an array', async () => {
      const conversations = await alice.chat.list()

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

    // it('Throws an error if given an invalid option', async () => {
    //   expect(await alice.chat.list({fakeOption: 'blah'})).rejects.toThrowError()
    // })
  })

  describe('Chat read', () => {
    it('Retrieves all messages in a conversation', async () => {
      const messages = await alice.chat.read(channel)
      expect(Array.isArray(messages)).toBe(true)
      for (const message of messages) {
        expect(message).toEqual(messageMatcher)
      }
    })

    it('Shows only unread messages if given the option', async () => {
      const messages = await alice.chat.read(channel, {unreadOnly: true})
      expect(Array.isArray(messages)).toBe(true)
      for (const message of messages) {
        expect(message).toHaveProperty('unread', true)
      }
    })

    it("Doesn't mark messages read on peek", async () => {
      // No peeking: message should be unread on first read, and read on subsequent reads
      await bob.chat.send(channel, message)
      let messages = await alice.chat.read(channel)
      expect(messages[0]).toHaveProperty('unread', true)
      messages = await alice.chat.read(channel)
      expect(messages[0]).toHaveProperty('unread', false)

      // Now let's peek. Messages should remain unread on subsequent reads.
      await bob.chat.send(channel, message)
      messages = await alice.chat.read(channel, {peek: true})
      expect(messages[0]).toHaveProperty('unread', true)
      messages = await alice.chat.read(channel)
      expect(messages[0]).toHaveProperty('unread', true)
    })

    it('Throws an error if given an invalid channel', async () => {
      expect(alice.chat.read(invalidChannel)).rejects.toThrowError()
    })

    // it('Throws an error if given an invalid option')
  })

  describe('Chat send', () => {
    it('Sends a message to a certain channel and returns an empty promise', async () => {
      await alice.chat.send(channel, message)

      const messages = await alice.chat.read(channel, {
        peek: true,
      })
      expect(messages[0].sender.username).toEqual(alice.myInfo().username)
      expect(messages[0].content.text.body).toEqual(message.body)
    })

    it('Throws an error if given an invalid channel', async () => {
      expect(alice.chat.send(invalidChannel, message)).rejects.toThrowError()
    })

    it('Throws an error if given an invalid message', async () => {
      expect(alice.chat.send(channel, invalidMessage)).rejects.toThrowError()
    })

    // it('Throws an error if given an invalid option')
  })

  describe('Chat delete', () => {
    it('Deletes a message to a certain channel and returns an empty promise', async () => {
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

    it('Throws an error if given an invalid channel', async () => {
      await alice.chat.send(channel, message)
      const messages = await alice.chat.read(channel, {
        peek: true,
      })
      const {id} = messages[0]
      expect(alice.chat.delete(invalidChannel, id)).rejects.toThrowError()
    })

    it('Throws an error if given an invalid id', async () => {
      expect(alice.chat.send(channel, -1)).rejects.toThrowError()
    })

    // it('Throws an error if it cannot delete the message (e.g., someone else wrote it)', async () => {
    //   await bob.chat.send(channel, message)
    //   const messages = await alice.chat.read(channel, {
    //     peek: true,
    //   })
    //   const {id} = messages[0]
    //   expect(alice.chat.delete(channel, id)).rejects.toThrowError()
    // })
  })

  describe('watchChannelForNewMessages', () => {
    it('Can have bots say hello to each other in a team', async () => {
      let ALICE_IS_SATISFIED = false
      let BOB_IS_SATISFIED = false

      alice.chat.watchChannelForNewMessages(teamChannel, message => {
        if (message.content.type === 'text' && message.content.text.body === 'hello alice') {
          ALICE_IS_SATISFIED = true
        }
      })
      bob.chat.watchChannelForNewMessages(teamChannel, message => {
        if (message.content.type === 'text' && message.content.text.body === 'hello bob') {
          BOB_IS_SATISFIED = true
        }
      })
      await alice.chat.send(teamChannel, {body: 'hello bob'})
      await bob.chat.send(teamChannel, {body: 'hello alice'})

      await waitAMoment(3000)
      expect(ALICE_IS_SATISFIED).toBe(true)
      expect(BOB_IS_SATISFIED).toBe(true)
    })
  })

  describe('watchAllChannelsForNewMessages', () => {
    it('Can have bots count up to 10 to each other', async () => {
      const STOP_AT = 10
      const CONVO_CODE = crypto.randomBytes(8).toString('hex')
      let HIGHEST_REACHED = 0

      const onMessageForBot = (botName, bot) => {
        const onMessage = async message => {
          if (message.content.type === 'text') {
            const body = message.content.text.body
            if (body.indexOf(CONVO_CODE) !== -1) {
              const num = parseInt(body.replace(CONVO_CODE, '').trim())
              HIGHEST_REACHED = Math.max(num, HIGHEST_REACHED)
              if (num < STOP_AT) {
                const reply = {body: `${CONVO_CODE} ${num + 1}`}
                await bot.chat.send(message.channel, reply)
              }
            }
          }
        }
        return onMessage
      }

      alice.chat.watchAllChannelsForNewMessages(onMessageForBot('alice', alice))
      bob.chat.watchAllChannelsForNewMessages(onMessageForBot('bob', bob))
      const message = {body: `${CONVO_CODE} 1`}
      await bob.chat.send(channel, message)

      // Wait 10 seconds, ample time for our bots to count to 10
      await waitAMoment(10000)
      expect(HIGHEST_REACHED).toBe(STOP_AT)
    })
  })
})
