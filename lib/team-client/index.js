// @flow
import ClientBase from '../client-base'
import type {
  AddMembersParam,
  RemoveMemberParam,
  ListTeamMembershipsParam,
  AddMembersResult,
  RemoveMemberResult,
  ListTeamMembershipsResult,
} from './types'

/** The wallet module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase wallet api`. */
class Team extends ClientBase {
  /**
   * Add a bunch of people with different privileges to a team
   * @memberof Team
   * @returns -
   * @example
   * bot.team.addMembers({"team": "phoenix", "emails": [{"email": "alice@keybase.io", "role": "writer"}, {"email": "cleo@keybase.io", "role": "admin"}], "usernames": [{"username": "frank", "role": "reader"}, {"username": "keybaseio@twitter", "role": "writer"}]).then(res => console.log(res))
   */
  async addMembers(additions: AddMembersParam): Promise<AddMembersResult> {
    await this._guardInitialized()
    const options = additions
    const res = await this._runApiCommand({apiName: 'team', method: 'addMembers', options})
    if (!res) {
      throw new Error('addMembers')
    } else {
      console.log('TODO: handle output type for removals', res)
    }
    return res
  }

  /**
   * Remove someone from a team
   * @memberof Team
   * @returns -
   * @example
   * bot.team.removeMember({"team": "phoenix", "username": "frank"}).then(res => console.log(res))
   */
  async removeMember(removal: RemoveMemberParam): Promise<RemoveMemberResult> {
    await this._guardInitialized()
    const options = removal
    const res = await this._runApiCommand({apiName: 'team', method: 'removeMember', options})
    if (!res) {
      throw new Error('removeMembers')
    } else {
      console.log('TODO: handle output type for additions', res)
    }
    return res
  }

  /**
   * List a team's members
   * @memberof Team
   * @returns -
   * @example
   * bot.team.listTeamMemberships({"team": "phoenix"}).then(res => console.log(res))
   */
  async listTeamMemberships(team: ListTeamMembershipsParam): Promise<ListTeamMembershipsResult> {
    await this._guardInitialized()
    const options = team
    const res = await this._runApiCommand({apiName: 'team', method: 'listTeamMemberships', options})
    if (!res) {
      throw new Error('listTeamMemberships')
    } else {
      console.log('TODO: handle output type for team listing', res)
    }
    return res
  }
}

export default Team
