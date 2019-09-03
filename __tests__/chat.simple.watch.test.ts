import Bot from '../lib'
import config from './tests.config'
import {pollFor} from './test-utils'
import {ChatChannel, MsgSummary} from '../lib/types/chat1'

//
// Coyne: I created this test specifically as a standalone because we have been hacing an issue
// where a freshly initialized bot isn't outputting on calls to watchAllChannelsForNewMessages()
// this should pass when that is fixed. It's also in chat.test.ts, but that's full of tests. We
// can delete this file once all tests are passing.

describe('Chat Methods', (): void => {
  const alice = new Bot()
  const bob = new Bot()

  beforeAll(
    async (): Promise<void> => {
      await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey, {adminDebugDirectory: `${__dirname}/../debug/alice`})
      await bob.init(config.bots.bob1.username, config.bots.bob1.paperkey, {adminDebugDirectory: `${__dirname}/../debug/bob`})
    }
  )
  afterAll(
    async (): Promise<void> => {
      await alice.deinit()
      await bob.deinit()
    }
  )

  it('works', async (): Promise<void> => {
    let done = false
    const directChannel: ChatChannel = {
      name: `${bob.myInfo().username},${alice.myInfo().username}`,
      public: false,
      membersType: 'impteamnative',
    }
    bob.chat.watchAllChannelsForNewMessages((message: MsgSummary): void => {
      bob.adminDebugLogInfo(`I Got a message ${JSON.stringify(message)}`)
      done = true
    })
    alice.chat.watchAllChannelsForNewMessages((message: MsgSummary): void => {
      alice.adminDebugLogInfo(`I Got a message ${JSON.stringify(message)}`)
    })
    alice.chat.send(directChannel, {body: `HI THERE ALICE, THIS IS BOB AND THE TIME IS ${new Date().toISOString()}`})
    await pollFor((): boolean => done)

    expect(done).toBe(true)
  })
})
