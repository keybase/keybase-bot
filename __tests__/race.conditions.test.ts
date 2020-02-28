import Bot from '../lib'
import config from './tests.config'

describe('init/chat/deinit checking', (): void => {
  const loop = 10
  it(`can init, send ${loop}, deinit`, async (): Promise<void> => {
    const code = Date.now()
    const alice = new Bot()
    const bob = new Bot()
    const channel = {name: `${config.bots.alice1.username},${config.bots.bob1.username}`}
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    for (let i = 1; i <= loop; i++) {
      await alice.chat.send(channel, {body: `race-${i}-${code}`})
    }
    await alice.deinit()
    await bob.init(config.bots.bob1.username, config.bots.bob1.paperkey)
    await bob.chat.read({name: config.bots.alice1.username})
    const read1 = await bob.chat.read(channel, {pagination: {num: 1}})
    expect(read1.messages[0].content?.text?.body).toContain(`race-${loop}-${code}`)
    await bob.deinit()
  })
})
