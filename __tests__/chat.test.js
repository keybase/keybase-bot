import crypto from 'crypto'
import fs from 'fs'
import Bot from '../lib'
import config from './tests.config.js'
import {timeout} from '../lib/utils'
import {promisify} from 'util'

test('Chat methods with an uninitialized bot', () => {
  const alice1 = new Bot()
  const channel = {name: `${config.bots.alice1.username},${config.bots.bob1.username}`}
  const message = {body: 'Testing!'}

  expect(alice1.chat.list()).rejects.toThrowError()
  expect(alice1.chat.read()).rejects.toThrowError()
  expect(alice1.chat.send(channel, message)).rejects.toThrowError()
  expect(alice1.chat.delete(channel, 314)).rejects.toThrowError()
})

describe('Chat Methods', () => {
  const alice1 = new Bot()
  const alice2 = new Bot()
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
    await alice1.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    await alice2.init(config.bots.alice2.username, config.bots.alice2.paperkey)
    await bob.init(config.bots.bob1.username, config.bots.bob1.paperkey)
  })
  afterAll(async () => {
    await alice1.deinit()
    await alice2.deinit()
    await bob.deinit()
  })

  describe('Chat list', () => {
    it('Returns all chat conversations in an array', async () => {
      const conversations = await alice1.chat.list()

      expect(Array.isArray(conversations)).toBe(true)
      for (const conversation of conversations) {
        expect(conversation).toEqual(conversationMatcher)
      }
    })

    it('Shows only unread messages if given the option', async () => {
      const conversations = await alice1.chat.list({unreadOnly: true})
      for (const conversation of conversations) {
        expect(conversation).toHaveProperty('unread', true)
      }
    })

    it('Shows only messages of a specific topic type if given the option', async () => {
      const conversations = await alice1.chat.list({topicType: 'DEV'})
      for (const conversation of conversations) {
        expect(conversation).toHaveProperty('topicType', 'DEV')
      }
    })
  })

  describe('Chat read', () => {
    it('Retrieves all messages in a conversation', async () => {
      const result = await alice1.chat.read(channel)
      expect(Array.isArray(result.messages)).toBe(true)
      for (const message of result.messages) {
        expect(message).toEqual(messageMatcher)
      }
    })

    it('Shows only unread messages if given the option', async () => {
      await bob.chat.send(channel, message)
      const result = await alice1.chat.read(channel, {unreadOnly: true})
      expect(Array.isArray(result.messages)).toBe(true)
      for (const message of result.messages) {
        expect(message).toHaveProperty('unread', true)
      }
    })

    it("Doesn't mark messages read on peek", async () => {
      // No peeking: message should be unread on first read, and read on subsequent reads
      await bob.chat.send(channel, message)
      let result = await alice1.chat.read(channel)
      expect(result.messages[0]).toHaveProperty('unread', true)
      result = await alice1.chat.read(channel)
      expect(result.messages[0]).toHaveProperty('unread', false)

      // Now let's peek. Messages should remain unread on subsequent reads.
      await bob.chat.send(channel, message)
      result = await alice1.chat.read(channel, {peek: true})
      expect(result.messages[0]).toHaveProperty('unread', true)
      result = await alice1.chat.read(channel)
      expect(result.messages[0]).toHaveProperty('unread', true)
    })

    it('Allows a user to properly paginate over the messages', async () => {
      // Mark all messages as read
      await alice1.chat.read(channel)

      // Prepare some new messages
      for (let i = 0; i < 10; i++) {
        await bob.chat.send(channel, message)
      }

      // Run the pagination with peek and unreadOnly enabled, expecting 10 msgs
      let totalCount = 0
      let lastPagination
      while (true) {
        const result = await alice1.chat.read(channel, {
          peek: true,
          unreadOnly: true,
          pagination: {
            num: 3,
            next: lastPagination ? lastPagination.next : undefined,
          },
        })
        totalCount += result.messages.length

        if (result.pagination.last) {
          break
        }
        lastPagination = result.pagination
      }
      expect(totalCount).toEqual(10)
    })

    it('Throws an error if given an invalid channel', async () => {
      expect(alice1.chat.read(invalidChannel)).rejects.toThrowError()
    })
  })

  describe('Chat send', () => {
    it('Sends a message to a certain channel and returns an empty promise', async () => {
      await alice1.chat.send(channel, message)

      const result = await alice1.chat.read(channel, {peek: true})
      expect(result.messages[0].sender.username).toEqual(alice1.myInfo().username)
      expect(result.messages[0].content.text.body).toEqual(message.body)
    })

    it('Throws an error if given an invalid channel', async () => {
      expect(alice1.chat.send(invalidChannel, message)).rejects.toThrowError()
    })

    it('Throws an error if given an invalid message', async () => {
      expect(alice1.chat.send(channel, invalidMessage)).rejects.toThrowError()
    })
  })

  describe('Chat newconv, join and leave', () => {
    it('Successfully performs the complete flow', async () => {
      const teamChannel = {
        name: config.teams.acme.teamname,
        public: false,
        topic_type: 'chat',
        members_type: 'team',
        topic_name: 'subchannel',
      }

      await alice1.chat.newConv(teamChannel)
      await bob.chat.join(teamChannel)

      const read1 = await alice1.chat.read(teamChannel, {
        pagination: {
          num: 1,
        },
      })
      expect(read1.messages[0].content.type).toEqual('join')
      expect(read1.messages[0].sender.username).toEqual(config.bots.bob1.username)

      await bob.chat.leave(teamChannel)
      const read2 = await alice1.chat.read(teamChannel, {
        pagination: {
          num: 1,
        },
      })
      expect(read2.messages[0].content.type).toEqual('leave')
      expect(read2.messages[0].sender.username).toEqual(config.bots.bob1.username)
    })
  })

  describe('Chat react', () => {
    it('Allows a user to react to a valid message', async () => {
      await alice1.chat.send(channel, message)
      let result = await alice1.chat.read(channel, {peek: true})
      const messageToReactTo = result.messages[0]

      await bob.chat.react(channel, messageToReactTo.id, ':poop:')
      result = await alice1.chat.read(channel, {peek: true})
      const reaction = result.messages[0]
      expect(reaction.id).toBe(messageToReactTo.id + 1)
      expect(reaction.content.type).toBe('reaction')
      expect(result.messages[1].reactions.reactions.poop).toHaveProperty(config.bots.bob1.username)
    })

    // it('Throws an error if given an invalid emoji', async () => {
    //   await alice1.chat.send(channel, message)
    //   const result = await alice1.chat.read(channel, {peek: true})
    //   const messageToReactTo = result.messages[0]

    //   expect(bob.chat.react(channel, messageToReactTo.id, 'blah')).rejects.toThrowError()
    // })
    // it("Throws an error if it cannot react to a message (e.g., it's not a reactable message type")
  })

  describe('Chat attach', () => {
    const attachmentLocation = '/tmp/kb-attachment.txt'
    beforeAll(async () => {
      await promisify(fs.writeFile)(attachmentLocation, 'This is a test file!')
    })
    afterAll(async () => {
      await promisify(fs.unlink)(attachmentLocation)
    })
    it('Attaches and sends a file on the filesystem', async () => {
      await alice1.chat.attach(channel, attachmentLocation)
      const result = await alice1.chat.read(channel)
      expect(result.messages[0].sender.username).toEqual(alice1.myInfo().username)
      expect(result.messages[0].content.type).toBe('attachment')
      expect(result.messages[0].content).toHaveProperty('attachment')
    })
    it('Throws an error if given an invalid channel', async () => {
      expect(alice1.chat.attach(invalidChannel, attachmentLocation)).rejects.toThrowError()
    })
    it('Throws an error if the file does not exist', async () => {
      expect(alice1.chat.attach(channel, '/fake-attachment.png')).rejects.toThrowError()
    })
  })

  describe('Chat download', () => {
    const downloadLocation = '/tmp/kb-downloaded-file'
    it('Downloads a file and saves it on the filesystem', async () => {
      // Send a file
      const attachmentLocation = '/tmp/kb-attachment.txt'
      const attachmentContent = 'Test attachment file'
      await promisify(fs.writeFile)(attachmentLocation, attachmentContent)
      await alice1.chat.attach(channel, attachmentLocation)

      // Read the file
      const result = await alice1.chat.read(channel)
      await alice1.chat.download(channel, result.messages[0].id, downloadLocation)
      const downloadContents = await promisify(fs.readFile)(downloadLocation)
      expect(downloadContents.toString()).toBe(attachmentContent)

      // Delete the created files
      await promisify(fs.unlink)(attachmentLocation)
      await promisify(fs.unlink)(downloadLocation)
    })
    it('Throws an errow if given an invalid channel', async () => {
      const result = await alice1.chat.read(channel)
      const attachments = result.messages.filter(message => message.content.type === 'attachment')
      expect(alice1.chat.download(invalidChannel, attachments[0].id, downloadLocation)).rejects.toThrowError()
    })
    it('Throws an error if given a non-attachment message', async () => {
      await alice1.chat.send(channel, message)
      const result = await alice1.chat.read(channel)
      expect(alice1.chat.download(channel, result.messages[0].id, '/tmp/attachment')).rejects.toThrowError()
    })
  })

  describe('Chat delete', () => {
    it('Deletes a message to a certain channel and returns an empty promise', async () => {
      await alice1.chat.send(channel, message)

      // Send a message
      const result = await alice1.chat.read(channel, {
        peek: true,
      })
      expect(result.messages[0].sender.username).toEqual(alice1.myInfo().username)
      expect(result.messages[0].content.text.body).toEqual(message.body)

      const {id} = result.messages[0]
      await alice1.chat.delete(channel, id)

      // Send a message
      const newResult = await alice1.chat.read(channel, {
        peek: true,
      })
      expect(newResult.messages[0].id).toEqual(id + 1)
      expect(newResult.messages[0].content.delete.messageIDs).toContain(id)
      expect(newResult.messages[0].content.delete.messageIDs).toHaveLength(1)
      expect(newResult.messages[1].id).toEqual(id - 1)
    })

    it('Throws an error if given an invalid channel', async () => {
      await alice1.chat.send(channel, message)
      const result = await alice1.chat.read(channel, {
        peek: true,
      })
      const {id} = result.messages[0]
      expect(alice1.chat.delete(invalidChannel, id)).rejects.toThrowError()
    })

    it('Throws an error if given an invalid id', async () => {
      expect(alice1.chat.send(channel, -1)).rejects.toThrowError()
    })

    /*

    TODO: currently in DM's both parties are considered admins of the chat and technically have the power
    to delete messages from either side, a feature which isn't currently exposed in the GUI. we will likely
    turn this off in the form of access control on the server, and then this test will pass.

    it('Throws an error if it cannot delete the message (e.g., someone else wrote it)', async () => {
      await bob.chat.send(channel, message)
      const result = await alice1.chat.read(channel, {
        peek: true,
      })
      const {id} = result.messages[0]
      expect(alice1.chat.delete(channel, id)).rejects.toThrowError()
    })
    */
  })

  describe('watchChannelForNewMessages', () => {
    it('Can have bots say hello to each other in a team', async () => {
      let ALICE_IS_SATISFIED = false
      let BOB_IS_SATISFIED = false

      alice1.chat.watchChannelForNewMessages(teamChannel, message => {
        if (message.content.type === 'text' && message.content.text.body === 'hello alice1') {
          ALICE_IS_SATISFIED = true
        }
      })
      bob.chat.watchChannelForNewMessages(teamChannel, message => {
        if (message.content.type === 'text' && message.content.text.body === 'hello bob') {
          BOB_IS_SATISFIED = true
        }
      })
      await alice1.chat.send(teamChannel, {body: 'hello bob'})
      await bob.chat.send(teamChannel, {body: 'hello alice1'})

      await timeout(3000)
      expect(ALICE_IS_SATISFIED).toBe(true)
      expect(BOB_IS_SATISFIED).toBe(true)
    })

    it("Doesn't pick up its own messages from the same device", async () => {
      const messageText = 'Ever thus to deadbeats, Lebowski'
      let noticedMessages = 0
      alice1.chat.watchChannelForNewMessages(teamChannel, message => {
        if (message.content.type === 'text' && message.content.text.body === messageText) {
          noticedMessages++
        }
      })
      await alice1.chat.send(teamChannel, {body: messageText})
      await timeout(3000)
      expect(noticedMessages).toBe(0)
    })
  })

  describe('watchAllChannelsForNewMessages', async () => {
    const testTwoBotsCounting = async (bot1, bot2) => {
      const stopAt = 10
      const convoCode = crypto.randomBytes(8).toString('hex')
      const directChannel = {name: `${bot1.myInfo().username},${bot2.myInfo().username}`}
      let totalMessagesSeen = 0
      let highestReached = 0
      const onMessageForBot = bot => {
        const onMessage = async message => {
          if (message.content.type === 'text') {
            const body = message.content.text.body
            if (body.indexOf(convoCode) !== -1) {
              totalMessagesSeen++
              const num = parseInt(body.replace(convoCode, '').trim())
              highestReached = Math.max(num, highestReached)
              if (num < stopAt) {
                const reply = {body: `${convoCode} ${num + 1}`}
                await bot.chat.send(message.channel, reply)
              }
            }
          }
        }
        return onMessage
      }
      bot1.chat.watchAllChannelsForNewMessages(onMessageForBot(bot1))
      bot2.chat.watchAllChannelsForNewMessages(onMessageForBot(bot2))
      const message = {body: `${convoCode} 1`}
      await bot1.chat.send(directChannel, message)

      while (true) {
        await timeout(100)
        if (highestReached === stopAt) {
          break
        }
      }
      expect(totalMessagesSeen).toBe(stopAt)
    }

    it('can have 2 users count together', async () => testTwoBotsCounting(alice1, bob))
    it('can have 1 user count across 2 devices', async () => testTwoBotsCounting(alice1, alice2))
  })
})
