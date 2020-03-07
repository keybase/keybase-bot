import Bot from '../lib'
import config from './tests.config'

describe('Chat Methods', (): void => {
  const alice = new Bot()

  beforeAll(
    async (): Promise<void> => {
      await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    }
  )
  afterAll(
    async (): Promise<void> => {
      await alice.deinit()
    }
  )

  it('works', async (): Promise<void> => {
    // check that sessions work
    const meRes = await alice.helpers.rawApiCall({endpoint: 'me'})
    expect(meRes.me.basics.username).toBe(alice.myInfo()?.username)

    // check a GET request
    const searchRes = await alice.helpers.rawApiCall({
      endpoint: 'user/user_search',
      arg: {
        q: 'chris',
        // eslint-disable-next-line @typescript-eslint/camelcase
        num_wanted: 1,
      },
    })
    expect(searchRes.list[0].keybase.username).toBe('chris')
  })
})
