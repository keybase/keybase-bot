import Bot from '../lib'
import config from './tests.config'
import {TeamRole, TeamDetails} from '../lib/types/keybase1'

test('Team methods with an uninitialized bot', (): void => {
  const alice1 = new Bot()
  const options = {team: config.teams.alicesPlayground.teamname}
  expect(alice1.team.listTeamMemberships(options)).rejects.toThrowError()
})

function pluralizeRole(r: TeamRole): 'owners' | 'admins' | 'readers' | 'writers' {
  switch (r) {
    case TeamRole.OWNER:
      return 'owners'
    case TeamRole.ADMIN:
      return 'admins'
    case TeamRole.READER:
      return 'readers'
    case TeamRole.WRITER:
      return 'writers'
    case TeamRole.NONE:
    case TeamRole.BOT:
    case TeamRole.RESTRICTEDBOT:
      throw new Error('role not expected in tests: ' + r.toString())
  }
}

function checkMembershipLevel(username: string, teamListResult: TeamDetails): TeamRole | null {
  const possibleRoles: TeamRole[] = [TeamRole.OWNER, TeamRole.ADMIN, TeamRole.WRITER, TeamRole.READER]
  for (const role of possibleRoles) {
    for (const user of teamListResult.members[pluralizeRole(role)] ?? []) {
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
      // As a cleanup operation, we need to make sure bob isn't left in a team with alice from a previous
      // failure.
      try {
        await alice1.team.removeMember({
          team: config.teams.alicesPlayground.teamname,
          username: config.bots.bob1.username,
        })
        console.log("Had to remove bob from alice's playground - left from previous test?")
      } catch (err) {
        /* no-op */
      }
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

    it('Lets Alice create a new team', async (): Promise<void> => {
      const unixTime = Date.now()
        .toString()
        .substr(0, 10)
      const randomDigits = Math.floor(Math.random() * 100).toString()
      const newTeamName = 'test' + unixTime + randomDigits
      const result = await alice1.team.create({
        team: newTeamName,
      })
      expect(typeof result.chatSent).toBe('boolean')
      expect(typeof result.creatorAdded).toBe('boolean')
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
