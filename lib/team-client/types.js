// @flow

// TODO: this
export type AddMembersParam = any
export type RemoveMemberParam = any
export type ListTeamMembershipsParam = {|
  team: string,
|}
export type AddMembersResult = any
export type RemoveMemberResult = any

export type UserVersionType = {|
  uid: string,
  eldestSeqno: number,
|}
export type MembershipItem = {|
  uv: UserVersionType,
  username: string,
  fullName: string,
  needsPuk: boolean,
  status: number,
|}

export type ListTeamMembershipsResult = {|
  owners: MembershipItem[],
  admins: MembershipItem[],
  writers: MembershipItem[],
  readers: MembershipItem[],
  keyGeneration: number,
  annotatedActiveInvites: any /* todo: define this better */,
  settings: {|
    open: boolean,
    joinAs: number,
  |},
  showcase: {|
    isShowcased: boolean,
    anyMemberShowcase: boolean,
  |},
|}
