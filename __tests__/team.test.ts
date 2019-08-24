import Bot from '../lib'
import config from './tests.config'
import {ListTeamMembershipsResult, TeamRole, TeamRolePlural} from '../lib/team-client/types'

test('Team methods with an uninitialized bot', (): void => {
  const alice1 = new Bot()
  const options = {team: config.teams.alicesPlayground.teamname}
  expect(alice1.team.listTeamMemberships(options)).rejects.toThrowError()
})

function pluralizeRole(r: TeamRole): TeamRolePlural {
  switch (r) {
    case 'owner':
      return 'owners'
    case 'admin':
      return 'admins'
    case 'reader':
      return 'readers'
    default:
      return 'writers'
  }
}

function checkMembershipLevel(username: string, teamListResult: ListTeamMembershipsResult): TeamRole | null {
  const possibleRoles: TeamRole[] = ['owner', 'admin', 'writer', 'reader']
  for (const role of possibleRoles) {
    for (const user of teamListResult.members[pluralizeRole(role)]) {
      if (user.username === username) {
        return role
      }
    }
  }
  return null
}

describe('Team Methods', (): void => {
  const alice1 = new Bot()
  const bob1 = new Bot()

  beforeAll(
    async (): Promise<void> => {
      await alice1.init(config.bots.alice1.username, config.bots.alice1.paperkey)
      await bob1.init(config.bots.bob1.username, config.bots.bob1.paperkey)
    }
  )
  afterAll(
    async (): Promise<void> => {
      await alice1.deinit()
      await bob1.deinit()
    }
  )

  describe('Team list', (): void => {
    const teamName = config.teams.alicesPlayground.teamname

    it('Returns members of a team', async (): Promise<void> => {
      const list = await alice1.team.listTeamMemberships({team: teamName})
      expect(checkMembershipLevel(config.bots.alice1.username, list)).toBeTruthy()
      expect(checkMembershipLevel(config.bots.bob1.username, list)).toBe(null)
    })

    it('Lets Alice add Bob to her team', async (): Promise<void> => {
      await alice1.team.addMembers({
        team: teamName,
        usernames: [{username: config.bots.bob1.username, role: 'reader'}],
      })
      const list = await alice1.team.listTeamMemberships({team: teamName})
      expect(checkMembershipLevel(config.bots.bob1.username, list)).toBe('reader')
    })

    it('Throws an error if Alice tries to add Bob twice', async (): Promise<void> => {
      expect(
        alice1.team.addMembers({
          team: teamName,
          usernames: [{username: config.bots.bob1.username, role: 'reader'}],
        })
      ).rejects.toThrowError()
    })

    it('Throws an error if Alice creates a team that already exists', async (): Promise<void> => {
      expect(
        alice1.team.create({
          team: teamName,
        })
      ).rejects.toThrowError()
    })

    it('Lets Alice remove Bob from her team', async (): Promise<void> => {
      await alice1.team.removeMember({
        team: teamName,
        username: config.bots.bob1.username,
      })
      const list = await alice1.team.listTeamMemberships({team: teamName})
      expect(checkMembershipLevel(config.bots.bob1.username, list)).toBe(null)
    })

    it('Throws an error if Bob tries to do things in Alice team', async (): Promise<void> => {
      expect(bob1.team.listTeamMemberships({team: teamName})).rejects.toThrowError()
      expect(
        bob1.team.addMembers({
          team: teamName,
          usernames: [{username: config.bots.bob1.username, role: 'reader'}],
        })
      ).rejects.toThrowError()
      expect(bob1.team.removeMember({team: teamName, username: config.bots.bob1.username})).rejects.toThrowError()
    })
  })
})
