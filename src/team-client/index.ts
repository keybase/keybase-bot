import ClientBase from '../client-base'
import * as keybase1 from '../types/keybase1'

export interface AddMembersParam {
  team: string
  emails?: keybase1.MemberEmail[]
  usernames?: keybase1.MemberUsername[]
}

export interface RemoveMemberParam {
  team: string
  username: string
}

export interface ListTeamMembershipsParam {
  team: string
}

/** The team module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase team api`. */
class Team extends ClientBase {
  /**
   * Add a bunch of people with different privileges to a team
   * @memberof Team
   * @param additions - an array of the users to add, with privs
   * @returns - A result object of adding these members to the team.
   * @example
   * bot.team.addMembers({"team": "phoenix", "emails": [{"email": "alice@keybase.io", "role": "writer"}, {"email": "cleo@keybase.io", "role": "admin"}], "usernames": [{"username": "frank", "role": "reader"}, {"username": "keybaseio@twitter", "role": "writer"}]}).then(res => console.log(res))
   */
  public async addMembers(additions: AddMembersParam): Promise<keybase1.TeamAddMemberResult> {
    await this._guardInitialized()
    const options = additions
    const res = await this._runApiCommand({apiName: 'team', method: 'add-members', options})
    if (!res) {
      throw new Error('addMembers')
    }
    return res
  }

  /**
   * Remove someone from a team.
   * @memberof Team
   * @param removal - object with the `team` name and `username`
   * @example
   * bot.team.removeMember({"team": "phoenix", "username": "frank"}).then(res => console.log(res))
   */
  public async removeMember(removal: RemoveMemberParam): Promise<void> {
    await this._guardInitialized()
    const options = removal
    await this._runApiCommand({apiName: 'team', method: 'remove-member', options})
  }

  /**
   * List a team's members.
   * @memberof Team
   * @param team - an object with the `team` name in it.
   * @returns - Details about the team.
   * @example
   * bot.team.listTeamMemberships({"team": "phoenix"}).then(res => console.log(res))
   */
  public async listTeamMemberships(team: ListTeamMembershipsParam): Promise<keybase1.TeamDetails> {
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
