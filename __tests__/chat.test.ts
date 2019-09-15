import crypto from 'crypto'
import fs from 'fs'
import Bot from '../lib'
import config from './tests.config'
import {timeout} from '../lib/utils'
import {pollFor} from './test-utils'
import {promisify} from 'util'
import {TopicType, ChatChannel, MsgSummary, BotCommandsAdvertisementTyp} from '../lib/types/chat1'
import {OnMessage, ReadResult} from '../lib/chat-client'

test('Chat methods with an uninitialized bot', (): void => {
  const alice1 = new Bot()
  const channel = {name: `${config.bots.alice1.username},${config.bots.bob1.username}`}
  const message = {body: 'Testing!'}

  // @ts-ignore because it intentionally has bad arguments
  expect(alice1.chat.list()).rejects.toThrowError()

  // @ts-ignore because it intentionally has bad arguments
  expect(alice1.chat.read()).rejects.toThrowError()

  // @ts-ignore because it intentionally has bad arguments
  expect(alice1.chat.send(channel, message)).rejects.toThrowError()

  // @ts-ignore because it intentionally has bad arguments
  expect(alice1.chat.delete(channel, 314)).rejects.toThrowError()
})

describe('Chat Methods', (): void => {
  const alice1 = new Bot()
  const alice2 = new Bot()
  const bob = new Bot()
  const channel: ChatChannel = {name: `${config.bots.alice1.username},${config.bots.bob1.username}`}
  const teamChannel: ChatChannel = {
    name: config.teams.acme.teamname,
    public: false,
    topicType: 'chat',
    membersType: 'team',
    topicName: 'general',
  }

  const message = {body: 'Test message!'}
  const invalidChannel = {name: 'kbot,'}
  const invalidMessage = {bdy: 'blah'}

  const channelMatcher = expect.objectContaining({
    name: expect.any(String),
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

  beforeAll(
    async (): Promise<void> => {
      await alice1.init(config.bots.alice1.username, config.bots.alice1.paperkey)
      await alice2.init(config.bots.alice2.username, config.bots.alice2.paperkey)
      await bob.init(config.bots.bob1.username, config.bots.bob1.paperkey)
    }
  )
  afterAll(
    async (): Promise<void> => {
      await alice1.deinit()
      await alice2.deinit()
      await bob.deinit()
    }
  )

  describe('Chat list', (): void => {
    it('Returns all chat conversations in an array', async (): Promise<void> => {
      const conversations = await alice1.chat.list()

      expect(Array.isArray(conversations)).toBe(true)
      for (const conversation of conversations) {
        expect(conversation).toEqual(conversationMatcher)
      }
    })

    it('Shows only unread messages if given the option', async (): Promise<void> => {
      const conversations = await alice1.chat.list({unreadOnly: true})
      for (const conversation of conversations) {
        expect(conversation).toHaveProperty('unread', true)
      }
    })

    it('Shows only messages of a specific topic type if given the option', async (): Promise<void> => {
      const conversations = await alice1.chat.list({topicType: TopicType.DEV})
      for (const conversation of conversations) {
        expect(conversation.channel).toHaveProperty('topicType', 'dev')
      }
    })
  })

  describe('Chat read', (): void => {
    it('Retrieves all messages in a conversation', async (): Promise<void> => {
      const result = await alice1.chat.read(channel)
      expect(Array.isArray(result.messages)).toBe(true)
      for (const message of result.messages) {
        expect(message).toEqual(messageMatcher)
      }
    })

    it('Shows only unread messages if given the option', async (): Promise<void> => {
      await bob.chat.send(channel, message)
      const result = await alice1.chat.read(channel, {unreadOnly: true})
      expect(Array.isArray(result.messages)).toBe(true)
      for (const message of result.messages) {
        expect(message).toHaveProperty('unread', true)
      }
    })

    it("Doesn't mark messages read on peek", async (): Promise<void> => {
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

    it('Allows a user to properly paginate over the messages', async (): Promise<void> => {
      // Mark all messages as read
      await alice1.chat.read(channel)

      // Prepare some new messages
      const expectedCount = 10
      for (let i = 0; i < expectedCount; i++) {
        await bob.chat.send(channel, message)
      }

      // Run the pagination with peek and unreadOnly enabled, expecting 10 msgs
      let totalCount = 0
      let lastPagination
      while (true) {
        const result: ReadResult = await alice1.chat.read(channel, {
          peek: true,
          unreadOnly: true,
          pagination: {
            num: 1,
            next: lastPagination ? lastPagination.next : undefined,
          },
        })
        totalCount += result.messages.length

        if (totalCount >= expectedCount) {
          break
        }
        lastPagination = result.pagination
      }
      expect(totalCount).toEqual(10)
    })

    it('Throws an error if given an invalid channel', async (): Promise<void> => {
      expect(alice1.chat.read(invalidChannel)).rejects.toThrowError()
    })
  })

  describe('Chat send', (): void => {
    it('Sends a message to a certain channel and returns an empty promise', async (): Promise<void> => {
      await alice1.chat.send(channel, message)

      const result = await alice1.chat.read(channel, {peek: true})
      expect(result.messages[0].sender.username).toEqual(alice1.myInfo().username)
      if (result.messages[0].content.type === 'text') {
        expect(result.messages[0].content.text.body).toEqual(message.body)
      } else {
        expect(false).toBe(true)
      }
    })

    it('Throws an error if given an invalid channel', async (): Promise<void> => {
      expect(alice1.chat.send(invalidChannel, message)).rejects.toThrowError()
    })

    it('Throws an error if given an invalid message', async (): Promise<void> => {
      // @ts-ignore intentionally bad formatted message
      expect(alice1.chat.send(channel, invalidMessage)).rejects.toThrowError()
    })
  })

  describe('Gets messages in correct channels', (): void => {
    it(`Can act read/post in different channels concurrently`, async (): Promise<void> => {
      const channels: ChatChannel[] = [
        {
          name: config.teams.acme.teamname,
          topicName: 'general',
          membersType: 'team',
        },
        {
          name: config.teams.acme.teamname,
          topicName: 'singularitarians',
          membersType: 'team',
        },
        {name: `${config.bots.alice1.username},${config.bots.bob1.username}`},
      ]
      const okChecks: boolean[] = []
      for (const channel of channels) {
        if (channel.topicName && channel.topicName !== 'general') {
          try {
            await alice1.chat.createChannel(channel)
          } catch (err) {
            /* may already be made */
          }
          await bob.chat.joinChannel(channel)
        }
      }
      await timeout(1000)
      // concurrently watch and send to all of them
      for (const i in channels) {
        const channel = channels[i]
        bob.chat.watchChannelForNewMessages(channel, (message): void => {
          if (message.content.type !== 'text') {
            throw new Error('Expected text type')
          }
          if (message.content.text.body === `c${i} test`) {
            if (okChecks[i]) {
              throw new Error('Uh oh, duplicate! ' + JSON.stringify(message))
            }
            okChecks[i] = true
          } else {
            throw new Error('Got bad message: ' + JSON.stringify(message))
          }
        })
        alice1.chat.send(channel, {body: `c${i} test`})
      }
      const allChecksOk = (): boolean => {
        for (const i in channels) {
          if (!okChecks[i]) {
            return false
          }
        }
        return true
      }
      await pollFor(allChecksOk)
      expect(allChecksOk()).toBe(true)
    })
    it(`Can read and post even if own username missing from a DM channel name`, async (): Promise<void> => {
      const channelAlice = {name: config.bots.bob1.username}
      const channelBob = {name: config.bots.alice1.username}
      const body = 'Dearest Bob, how are you?'
      let incoming: MsgSummary = null
      const watcher: OnMessage = (message: MsgSummary): void => {
        incoming = message
      }
      bob.chat.watchChannelForNewMessages(channelBob, watcher)
      await timeout(500)
      await alice1.chat.send(channelAlice, {body})
      await timeout(500)
      if (incoming.content.type !== 'text') {
        throw new Error('got a bad message')
      } else {
        expect(incoming.content.text.body).toBe(body)
      }
    })
    it(`Can read and post with usernames in any order`, async (): Promise<void> => {
      const channel1 = {name: `${config.bots.alice1.username},${config.bots.bob1.username}`}
      const channel2 = {name: `${config.bots.bob1.username},${config.bots.alice1.username}`}
      const channel3 = {name: `${channel2.name},${config.bots.charlie1.username}`}
      const body = 'Total protonic reversal. That would be bad.'
      let receipts = 0
      const bobOnMessage = (message: MsgSummary): void => {
        if (message.content.type === 'text' && message.content.text.body === body) {
          receipts++
        }
      }
      bob.chat.watchChannelForNewMessages(channel1, bobOnMessage)
      bob.chat.watchChannelForNewMessages(channel2, bobOnMessage)
      await timeout(500)
      await alice1.chat.send(channel1, {body})
      await timeout(500)
      expect(receipts).toBe(2)
      await alice1.chat.send(channel2, {body})
      await timeout(500)
      expect(receipts).toBe(4)
      // channel 3 should not be included by bob since it's not watched
      await alice1.chat.send(channel3, {body})
      await timeout(500)
      expect(receipts).toBe(4)
    })
  })

  describe('Chat createChannel, joinChannel, watchChannel, and leaveChannel', (): void => {
    it('Successfully performs the complete flow', async (): Promise<void> => {
      const teamChannel: ChatChannel = {
        name: config.teams.acme.teamname,
        public: false,
        topicType: 'chat',
        membersType: 'team',
        topicName: `subchannel-${~~(Math.random() * 1000000000)}`,
      }
      const generalChannel: ChatChannel = {
        name: config.teams.acme.teamname,
        public: false,
        topicType: 'chat',
        membersType: 'team',
        topicName: 'general',
      }
      const message = {body: `We're on a road to nowhere!`}

      await alice1.chat.createChannel(teamChannel)
      await bob.chat.joinChannel(teamChannel)

      const read1 = await alice1.chat.read(teamChannel, {
        pagination: {
          num: 3,
        },
      })
      expect(read1.messages[0].content.type).toEqual('join')
      expect(read1.messages[0].sender.username).toEqual(config.bots.bob1.username)

      let bobMessageCount = 0
      const bobOnMessage = async (): Promise<void> => {
        bobMessageCount++
      }
      bob.chat.watchChannelForNewMessages(teamChannel, bobOnMessage)
      bob.chat.watchChannelForNewMessages(generalChannel, bobOnMessage)
      await timeout(500)
      await alice1.chat.send(generalChannel, message)
      await timeout(500)
      expect(bobMessageCount).toBe(1) /* only one of the watchers should've picked this up */
      await alice1.chat.send(teamChannel, message)
      await timeout(500)
      expect(bobMessageCount).toBe(2)

      await bob.chat.leaveChannel(teamChannel)
      const read2 = await alice1.chat.read(teamChannel, {
        pagination: {
          num: 1,
        },
      })
      expect(read2.messages[0].content.type).toEqual('leave')
      expect(read2.messages[0].sender.username).toEqual(config.bots.bob1.username)
      await timeout(500)
      await alice1.chat.send(teamChannel, message)
      await timeout(500)
      expect(bobMessageCount).toBe(2) /* confirm bob is no longer listening */
    })
  })

  describe('Chat react', (): void => {
    it('Allows a user to react to a valid message', async (): Promise<void> => {
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

  describe('Chat attach', (): void => {
    const attachmentLocation = '/tmp/kb-attachment.txt'
    beforeAll(
      async (): Promise<void> => {
        await promisify(fs.writeFile)(attachmentLocation, 'This is a test file!')
      }
    )
    afterAll(
      async (): Promise<void> => {
        await promisify(fs.unlink)(attachmentLocation)
      }
    )
    it('Attaches and sends a file on the filesystem', async (): Promise<void> => {
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

  describe('Chat download', (): void => {
    const downloadLocation = '/tmp/kb-downloaded-file'
    it('Downloads a file and saves it on the filesystem', async (): Promise<void> => {
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
    it('Throws an errow if given an invalid channel', async (): Promise<void> => {
      const result = await alice1.chat.read(channel)
      const attachments = result.messages.filter(message => message.content.type === 'attachment')
      expect(alice1.chat.download(invalidChannel, attachments[0].id, downloadLocation)).rejects.toThrowError()
    })
    it('Throws an error if given a non-attachment message', async (): Promise<void> => {
      await alice1.chat.send(channel, message)
      const result = await alice1.chat.read(channel)
      expect(alice1.chat.download(channel, result.messages[0].id, '/tmp/attachment')).rejects.toThrowError()
    })
  })

  describe('Chat delete', (): void => {
    it('Deletes a message to a certain channel and returns an empty promise', async (): Promise<void> => {
      await alice1.chat.send(channel, message)

      // Send a message
      const result = await alice1.chat.read(channel, {
        peek: true,
      })
      expect(result.messages[0].sender.username).toEqual(alice1.myInfo().username)
      if (result.messages[0].content.type !== 'text') {
        throw new Error('Expected text type but got something else')
      } else {
        expect(result.messages[0].content.text.body).toEqual(message.body)
      }

      const {id} = result.messages[0]
      await alice1.chat.delete(channel, id)

      // Send a message
      const newResult = await alice1.chat.read(channel, {
        peek: true,
      })
      expect(newResult.messages[0].id).toEqual(id + 1)
      if (newResult.messages[0].content.type !== 'delete') {
        throw new Error('expected delete message type')
      } else {
        expect(newResult.messages[0].content.delete.messageIDs).toContain(id)
        expect(newResult.messages[0].content.delete.messageIDs).toHaveLength(1)
      }
      expect(newResult.messages[1].id).toEqual(id - 1)
    })

    it('Throws an error if given an invalid channel', async (): Promise<void> => {
      await alice1.chat.send(channel, message)
      const result = await alice1.chat.read(channel, {
        peek: true,
      })
      const {id} = result.messages[0]
      expect(alice1.chat.delete(invalidChannel, id)).rejects.toThrowError()
    })

    it('Throws an error if given an invalid id', async (): Promise<void> => {
      expect(alice1.chat.delete(channel, -1)).rejects.toThrowError()
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

  describe('Command advertisements', (): void => {
    it('Should be able to clear, publish and then lookup', async (): Promise<void> => {
      await alice1.chat.clearCommands()
      await alice1.chat.advertiseCommands({
        advertisements: [
          {
            type: BotCommandsAdvertisementTyp.PUBLIC,
            commands: [
              {
                name: '!helloworld',
                description: 'sample description',
                usage: 'test',
              },
            ],
          },
        ],
      })

      const listBeforeClear = await bob.chat.listCommands({
        channel: channel,
      })
      expect(listBeforeClear.commands).toContainEqual({
        name: '!helloworld',
        description: 'sample description',
        usage: 'test',
        username: alice1.myInfo().username,
      })

      await alice1.chat.clearCommands()
      const listAfterClear = await bob.chat.listCommands({
        channel: channel,
      })
      expect(listAfterClear.commands.length).toBe(0)
    })
  })

  describe('watchChannelForNewMessages', (): void => {
    it('Can have bots say hello to each other in a team', async (): Promise<void> => {
      let ALICE_IS_SATISFIED = false
      let BOB_IS_SATISFIED = false

      alice1.chat.watchChannelForNewMessages(teamChannel, (message): void => {
        if (message.content.type === 'text' && message.content.text.body === 'hello alice1') {
          ALICE_IS_SATISFIED = true
        }
      })
      bob.chat.watchChannelForNewMessages(teamChannel, (message): void => {
        if (message.content.type === 'text' && message.content.text.body === 'hello bob') {
          BOB_IS_SATISFIED = true
        }
      })
      await alice1.chat.send(teamChannel, {body: 'hello bob'})
      await bob.chat.send(teamChannel, {body: 'hello alice1'})

      await pollFor((): boolean => ALICE_IS_SATISFIED && BOB_IS_SATISFIED)
      expect(ALICE_IS_SATISFIED).toBe(true)
      expect(BOB_IS_SATISFIED).toBe(true)
    })

    it("Doesn't pick up its own messages from the same device", async (): Promise<void> => {
      const messageText = 'Ever thus to deadbeats, Lebowski'
      let noticedMessages = 0
      alice1.chat.watchChannelForNewMessages(teamChannel, (message): void => {
        if (message.content.type === 'text' && message.content.text.body === messageText) {
          noticedMessages++
        }
      })
      await alice1.chat.send(teamChannel, {body: messageText})
      await timeout(3000)
      expect(noticedMessages).toBe(0)
    })
  })

  describe('watchAllChannelsForNewMessages', (): void => {
    const testTwoBotsCounting = async (bot1: Bot, bot2: Bot): Promise<void> => {
      const stopAt = 10
      const convoCode = crypto.randomBytes(8).toString('hex')
      const directChannel = {name: `${bot1.myInfo().username},${bot2.myInfo().username}`}
      let totalMessagesSeen = 0
      let highestReached = 0
      const onMessageForBot = (bot: Bot): OnMessage => {
        const onMessage = async (message: MsgSummary): Promise<void> => {
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
      await pollFor((): boolean => highestReached === stopAt)
      expect(totalMessagesSeen).toBe(stopAt)
    }

    it('can have 2 users count together', async (): Promise<void> => testTwoBotsCounting(alice1, bob))
    it('can have 1 user count across 2 devices', async (): Promise<void> => testTwoBotsCounting(alice1, alice2))
  })
})
