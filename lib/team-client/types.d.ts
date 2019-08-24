export declare type TeamRole = 'writer' | 'reader' | 'admin' | 'owner';
export declare type TeamRolePlural = 'writers' | 'readers' | 'admins' | 'owners';
export interface AddMemberEmailItem {
    email: string;
    role: TeamRole;
}
export interface AddMemberUsernameItem {
    username: string;
    role: TeamRole;
}
export interface CreateTeamParam {
    team: string;
}
export interface AddMembersParam {
    team: string;
    emails?: AddMemberEmailItem[];
    usernames?: AddMemberUsernameItem[];
}
export interface RemoveMemberParam {
    team: string;
    username: string;
}
export interface ListTeamMembershipsParam {
    team: string;
}
export declare type AddMembersResult = any;
export declare type RemoveMemberResult = any;
export declare type CreateTeamResult = any;
export interface UserVersionType {
    uid: string;
    eldestSeqno: number;
}
export interface MembershipItem {
    uv: UserVersionType;
    username: string;
    fullName: string;
    needsPuk: boolean;
    status: number;
}
export interface ListTeamMembershipsResult {
    members: {
        owners: MembershipItem[];
        admins: MembershipItem[];
        writers: MembershipItem[];
        readers: MembershipItem[];
    };
    keyGeneration: number;
    annotatedActiveInvites: any;
    settings: {
        open: boolean;
        joinAs: number;
    };
    showcase: {
        isShowcased: boolean;
        anyMemberShowcase: boolean;
    };
}
