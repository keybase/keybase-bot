export declare type TeamRole = "writer" | "reader" | "admin" | "owner";
export declare type AddMemberEmailItem = {
    email: string;
    role: TeamRole;
};
export declare type AddMemberUsernameItem = {
    username: string;
    role: TeamRole;
};
export declare type AddMembersParam = {
    team: string;
    emails?: AddMemberEmailItem[];
    usernames?: AddMemberUsernameItem[];
};
export declare type RemoveMemberParam = {
    team: string;
    username: string;
};
export declare type ListTeamMembershipsParam = {
    team: string;
};
export declare type AddMembersResult = any;
export declare type RemoveMemberResult = any;
export declare type UserVersionType = {
    uid: string;
    eldestSeqno: number;
};
export declare type MembershipItem = {
    uv: UserVersionType;
    username: string;
    fullName: string;
    needsPuk: boolean;
    status: number;
};
export declare type ListTeamMembershipsResult = {
    owners: MembershipItem[];
    admins: MembershipItem[];
    writers: MembershipItem[];
    readers: MembershipItem[];
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
};
