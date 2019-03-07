import Bot from '../lib'
import config from './tests.config.js'

test('Team methods with an uninitialized bot', () => {
  const alice1 = new Bot()
  const options = {team: config.teams.alices_playground.teamname}
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
  const bob1 = new Bot()

  beforeAll(async () => {
    await alice1.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    await bob1.init(config.bots.bob1.username, config.bots.bob1.paperkey)
  })
  afterAll(async () => {
    await alice1.deinit()
    await bob1.deinit()
  })

  describe('Team list', () => {
    const teamName = config.teams.alices_playground.teamname

    it('Returns members of a team', async () => {
      const list = await alice1.team.listTeamMemberships({team: teamName})
      expect(checkMembershipLevel(config.bots.alice1.username, list)).toBeTruthy()
      expect(checkMembershipLevel(config.bots.bob1.username, list)).toBe(null)
    })

    it('Lets Alice add Bob to her team', async () => {
      await alice1.team.addMembers({
        team: teamName,
        usernames: [{username: config.bots.bob1.username, role: 'reader'}],
      })
      const list = await alice1.team.listTeamMemberships({team: teamName})
      expect(checkMembershipLevel(config.bots.bob1.username, list)).toBe('reader')
    })

    it('Lets Alice remove Bob from her team', async () => {
      await alice1.team.removeMember({
        team: teamName,
        username: config.bots.bob1.username,
      })
      const list = await alice1.team.listTeamMemberships({team: teamName})
      expect(checkMembershipLevel(config.bots.bob1.username, list)).toBe(null)
    })

    it('Throws an error if Bob tries to do things in Alice team', async () => {
      expect(bob1.team.listTeamMemberships({team: teamName})).rejects.toThrowError()
      expect(
        bob1.team.addMembers({
          team: teamName,
          usernames: [{username: config.bots.bob1.username, role: 'reader'}],
        })
      ).rejects.toThrowError()
      expect(
        bob1.team.removeMember({team: teamName, username: config.bots.bob1.username})
      ).rejects.toThrowError()
    })
  })
})
