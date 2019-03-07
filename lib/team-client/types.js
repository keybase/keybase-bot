// @flow

export type AddMemberEmailItem = {|
  email: string,
  role: string,
|}
export type AddMemberUsernameItem = {|
  username: string,
  role: string,
|}

export type AddMembersParam = {|
  team: string,
  emails?: AddMemberEmailItem[],
  usernames?: AddMemberUsernameItem[],
|}

export type RemoveMemberParam = {|
  team: string,
  username: string,
|}

export type ListTeamMembershipsParam = {|
  team: string,
|}

export type AddMembersResult = any /* TODO: this */
export type RemoveMemberResult = any /* TODO: this */

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
  annotatedActiveInvites: any /* TODO: this */,
  settings: {|
    open: boolean,
    joinAs: number,
  |},
  showcase: {|
    isShowcased: boolean,
    anyMemberShowcase: boolean,
  |},
|}
