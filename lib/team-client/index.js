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
   * @param additions - an array of the users to add, with privs
   * @returns -
   * @example
   * bot.team.addMembers({"team": "phoenix", "emails": [{"email": "alice@keybase.io", "role": "writer"}, {"email": "cleo@keybase.io", "role": "admin"}], "usernames": [{"username": "frank", "role": "reader"}, {"username": "keybaseio@twitter", "role": "writer"}]}).then(res => console.log(res))
   */
  async addMembers(additions: AddMembersParam): Promise<AddMembersResult> {
    await this._guardInitialized()
    const options = additions
    const res = await this._runApiCommand({apiName: 'team', method: 'add-members', options})
    if (!res) {
      throw new Error('addMembers')
    }
    return res
  }

  /**
   * Remove someone from a team
   * @memberof Team
   * @param removal - object with the `team` name and `username`
   * @returns -
   * @example
   * bot.team.removeMember({"team": "phoenix", "username": "frank"}).then(res => console.log(res))
   */
  async removeMember(removal: RemoveMemberParam): Promise<RemoveMemberResult> {
    await this._guardInitialized()
    const options = removal
    const res = await this._runApiCommand({apiName: 'team', method: 'remove-member', options})
    return res
  }

  /**
   * List a team's members
   * @memberof Team
   * @param team - an object with the `team` name in it
   * @returns -
   * @example
   * bot.team.listTeamMemberships({"team": "phoenix"}).then(res => console.log(res))
   */
  async listTeamMemberships(team: ListTeamMembershipsParam): Promise<ListTeamMembershipsResult> {
    await this._guardInitialized()
    const options = team
    const res = await this._runApiCommand({apiName: 'team', method: 'list-team-memberships', options})
    if (!res) {
      throw new Error('listTeamMemberships')
    }
    return res
  }
}

export default Team
