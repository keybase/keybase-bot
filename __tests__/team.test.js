import Bot from '../lib'
import config from './tests.config.js'

test('Team methods with an uninitialized bot', () => {
  const alice1 = new Bot()
  const options = {team: 'acme'}
  expect(alice1.team.listTeamMemberships(options)).rejects.toThrowError()
})

function checkMembershipLevel(username, teamListResult) {
  for (const priv of ['owner', 'admin', 'writer', 'reader']) {
    for (const user of teamListResult.members[priv + 's']) {
      if (user.username === username) {
        return priv
      }
    }
  }
  return null
}

describe('Team Methods', () => {
  const alice1 = new Bot()

  beforeAll(async () => {
    await alice1.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    // await alice2.init(config.bots.alice2.username, config.bots.alice2.paperkey)
    // await bob.init(config.bots.bob1.username, config.bots.bob1.paperkey)
  })
  afterAll(async () => {
    await alice1.deinit()
    // await alice2.deinit()
    // await bob.deinit()
  })

  describe('Team list', () => {
    it('Returns members of a team', async () => {
      const list = await alice1.team.listTeamMemberships({team: config.teams.alices_playground.teamname})
      expect(checkMembershipLevel(config.bots.alice1.username, list)).toBe('admin')
      expect(checkMembershipLevel('chris', list)).toBe('owner')
    })
  })
})
