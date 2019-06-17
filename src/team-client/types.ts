export type TeamRole = 'writer' | 'reader' | 'admin' | 'owner'
export type TeamRolePlural = 'writers' | 'readers' | 'admins' | 'owners'

export interface AddMemberEmailItem {
  email: string
  role: TeamRole
}
export interface AddMemberUsernameItem {
  username: string
  role: TeamRole
}

export interface AddMembersParam {
  team: string
  emails?: AddMemberEmailItem[]
  usernames?: AddMemberUsernameItem[]
}

export interface RemoveMemberParam {
  team: string
  username: string
}

export interface ListTeamMembershipsParam {
  team: string
}

export type AddMembersResult = any /* TODO: this */
export type RemoveMemberResult = any /* TODO: this */

export interface UserVersionType {
  uid: string
  eldestSeqno: number
}
export interface MembershipItem {
  uv: UserVersionType
  username: string
  fullName: string
  needsPuk: boolean
  status: number
}

export interface ListTeamMembershipsResult {
  members: {
    owners: MembershipItem[]
    admins: MembershipItem[]
    writers: MembershipItem[]
    readers: MembershipItem[]
  }
  keyGeneration: number
  annotatedActiveInvites: any /* TODO: this */
  settings: {
    open: boolean
    joinAs: number
  }
  showcase: {
    isShowcased: boolean
    anyMemberShowcase: boolean
  }
}
