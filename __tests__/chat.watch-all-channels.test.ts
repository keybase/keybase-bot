import crypto from 'crypto'
import Bot from '../lib'
import config from './tests.config'
import {pollFor} from './test-utils'
import {MessageSummary} from '../lib/chat-client/types'
import {timeout} from '../lib/utils'

describe('Chat Methods', (): void => {
  const alice1 = new Bot()
  //const alice2 = new Bot()
  const bob = new Bot()

  beforeAll(
    async (): Promise<void> => {
      await alice1.init(config.bots.alice1.username, config.bots.alice1.paperkey, {adminDebugDirectory: `${__dirname}/../debug/alice1`})
      //await alice2.init(config.bots.alice2.username, config.bots.alice2.paperkey, {adminDebugDirectory: `${__dirname}/../debug/alice2`})
      await bob.init(config.bots.bob1.username, config.bots.bob1.paperkey, {adminDebugDirectory: `${__dirname}/../debug/bob`})
    }
  )
  afterAll(
    async (): Promise<void> => {
      await alice1.deinit()
      //await alice2.deinit()
      await bob.deinit()
    }
  )

  describe('watchAllChannelsForNewMessages', (): void => {
    const testTwoBotsCounting = async (bot1: Bot, bot2: Bot): Promise<void> => {
      const stopAt = 10
      const convoCode = crypto.randomBytes(8).toString('hex')
      const directChannel = {name: `${bot1.myInfo().username},${bot2.myInfo().username}`}
      let totalMessagesSeen = 0
      let highestReached = 0
      const onMessageForBot = (bot: Bot): any => {
        const onMessage = async (message: MessageSummary): Promise<void> => {
          bot.debugLog(
            `${bot.myInfo().username} here. I got a message: ${JSON.stringify(message)}. totalMessagesSeen was ${totalMessagesSeen}`
          )
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
      bot1.debugLog(`${bot1.myInfo().username} HERE! Beginning to watch for messages`)
      bot2.debugLog(`${bot2.myInfo().username} HERE! Beginning to watch for messages`)
      bot1.chat.watchAllChannelsForNewMessages(onMessageForBot(bot1))
      bot2.chat.watchAllChannelsForNewMessages(onMessageForBot(bot2))
      await timeout(1000)
      const message = {body: `${convoCode} 1`}
      bot1.debugLog('Sending a message.')
      await bot1.chat.send(directChannel, message)
      bot1.debugLog('Message sent.')
      await pollFor((): boolean => highestReached === stopAt)
      expect(totalMessagesSeen).toBe(stopAt)
    }

    it('can have 2 users count together', async (): Promise<void> => testTwoBotsCounting(alice1, bob))
    //it('can have 1 user count across 2 devices', async (): Promise<void> => testTwoBotsCounting(alice1, alice2))
  })
})
