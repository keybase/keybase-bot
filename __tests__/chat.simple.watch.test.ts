import Bot from '../lib'
import config from './tests.config'
import {pollFor} from './test-utils'
import {MessageSummary, ChatReadOptions} from '../lib/chat-client/types'
import {timeout} from '../lib/utils'

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
    const directChannel = {name: `${bob.myInfo().username},${alice.myInfo().username}`}
    bob.chat.watchAllChannelsForNewMessages((message: MessageSummary): void => {
      bob.debugLog(`I Got a message ${JSON.stringify(message)}`)
      done = true
    })
    alice.chat.watchAllChannelsForNewMessages((message: MessageSummary): void => {
      alice.debugLog(`I Got a message ${JSON.stringify(message)}`)
    })
    alice.chat.send(directChannel, {body: `HI THERE ALICE, THIS IS BOB AND THE TIME IS ${new Date().toISOString()}`})
    await pollFor((): boolean => done)

    expect(done).toBe(true)
  })
})
