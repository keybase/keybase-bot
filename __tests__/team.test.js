import crypto from 'crypto'
import fs from 'fs'
import Bot from '../lib'
import config from './tests.config.js'
import {timeout} from '../lib/utils'
import {promisify} from 'util'

test('Team methods with an uninitialized bot', () => {
  const alice1 = new Bot()
  const options = {team: 'acme'}
  expect(alice1.team.listTeamMemberships(options)).rejects.toThrowError()
})

describe('Team Methods', () => {
  const alice1 = new Bot()
  const alice2 = new Bot()
  const bob = new Bot()

  beforeAll(async () => {
    await alice1.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    //await alice2.init(config.bots.alice2.username, config.bots.alice2.paperkey)
    //await bob.init(config.bots.bob1.username, config.bots.bob1.paperkey)
  })
  afterAll(async () => {
    await alice1.deinit()
    //await alice2.deinit()
    //await bob.deinit()
  })

  describe('Team list', () => {
    it('Returns members of a team', async () => {
      const members = await alice1.team.listTeamMemberships({team: config.teams.alices_playground.teamname})
      console.log(members)
      expect(members).toBe(1)
    })
  })
})
