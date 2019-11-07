import Bot from '../lib'
import config from './tests.config'

describe('init/chat/deinit checking', (): void => {
  it('can init, send, deinit', async (): Promise<void> => {
    const body = `race-${Math.floor(Math.random() * 1000000000)}`
    const alice = new Bot()
    const bob = new Bot()
    const channel = {name: `${config.bots.alice1.username},${config.bots.bob1.username}`}
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    await alice.chat.send(channel, {body})
    await alice.deinit()
    await bob.init(config.bots.bob1.username, config.bots.bob1.paperkey)
    await bob.chat.read({name: config.bots.alice1.username})
    const read1 = await bob.chat.read(channel, {pagination: {num: 1}})
    expect(read1.messages[0].content.text.body).toContain(body)
    await bob.deinit()
  })
})
