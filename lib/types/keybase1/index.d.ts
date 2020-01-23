/// <reference types="node" />
import * as gregor1 from '../gregor1';
export declare type HasServerKeysRes = {
    hasServerKeys: boolean;
};
export declare type APIRes = {
    status: string;
    body: string;
    httpStatus: number;
    appStatus: string;
};
export declare enum MobileAppState {
    FOREGROUND = "foreground",
    BACKGROUND = "background",
    INACTIVE = "inactive",
    BACKGROUNDACTIVE = "backgroundactive"
}
export declare enum MobileNetworkState {
    NONE = "none",
    WIFI = "wifi",
    CELLULAR = "cellular",
    UNKNOWN = "unknown",
    NOTAVAILABLE = "notavailable"
}
export declare enum BoxAuditAttemptResult {
    FAILURE_RETRYABLE = "failure_retryable",
    FAILURE_MALICIOUS_SERVER = "failure_malicious_server",
    OK_VERIFIED = "ok_verified",
    OK_NOT_ATTEMPTED_ROLE = "ok_not_attempted_role",
    OK_NOT_ATTEMPTED_OPENTEAM = "ok_not_attempted_openteam",
    OK_NOT_ATTEMPTED_SUBTEAM = "ok_not_attempted_subteam"
}
export declare type AvatarUrl = string;
export declare type AvatarFormat = string;
export declare enum BlockType {
    DATA = "data",
    MD = "md",
    GIT = "git"
}
export declare type ChallengeInfo = {
    now: number;
    challenge: string;
};
export declare enum BlockStatus {
    UNKNOWN = "unknown",
    LIVE = "live",
    ARCHIVED = "archived"
}
export declare type BlockRefNonce = string | null;
export declare type BlockPingResponse = {};
export declare type BotToken = string;
export declare type Time = number;
export declare type UnixTime = number;
export declare type DurationSec = number;
export declare type StringKVPair = {
    key: string;
    value: string;
};
export declare type UID = string;
export declare type VID = string;
export declare type DeviceID = string;
export declare type SigID = string;
export declare type LeaseID = string;
export declare type KID = string;
export declare type PhoneNumber = string;
export declare type RawPhoneNumber = string;
export declare type LinkID = string;
export declare type BinaryLinkID = Buffer;
export declare type BinaryKID = Buffer;
export declare type TLFID = string;
export declare type TeamID = string;
export declare type UserOrTeamID = string;
export declare type GitRepoName = string;
export declare type HashMeta = Buffer;
export declare enum TeamType {
    NONE = "none",
    LEGACY = "legacy",
    MODERN = "modern"
}
export declare enum TLFVisibility {
    ANY = "any",
    PUBLIC = "public",
    PRIVATE = "private"
}
export declare type Seqno = number;
export declare enum SeqType {
    NONE = "none",
    PUBLIC = "public",
    PRIVATE = "private",
    SEMIPRIVATE = "semiprivate",
    USER_PRIVATE_HIDDEN = "user_private_hidden",
    TEAM_PRIVATE_HIDDEN = "team_private_hidden"
}
export declare type Bytes32 = string | null;
export declare type Text = {
    data: string;
    markup: boolean;
};
export declare type PGPIdentity = {
    username: string;
    comment: string;
    email: string;
};
export declare enum DeviceType {
    DESKTOP = "desktop",
    MOBILE = "mobile"
}
export declare type Stream = {
    fd: number;
};
export declare enum LogLevel {
    NONE = "none",
    DEBUG = "debug",
    INFO = "info",
    NOTICE = "notice",
    WARN = "warn",
    ERROR = "error",
    CRITICAL = "critical",
    FATAL = "fatal"
}
export declare enum ClientType {
    NONE = "none",
    CLI = "cli",
    GUI_MAIN = "gui_main",
    KBFS = "kbfs",
    GUI_HELPER = "gui_helper"
}
export declare type KBFSPathInfo = {
    standardPath: string;
    deeplinkPath: string;
    platformAfterMountPath: string;
};
export declare type PerUserKeyGeneration = number;
export declare enum UserOrTeamResult {
    USER = "user",
    TEAM = "team"
}
export declare enum MerkleTreeID {
    MASTER = "master",
    KBFS_PUBLIC = "kbfs_public",
    KBFS_PRIVATE = "kbfs_private",
    KBFS_PRIVATETEAM = "kbfs_privateteam"
}
/**
 * SocialAssertionService is a service that can be used to assert proofs for a
 *     user.
 */
export declare type SocialAssertionService = string;
export declare type FullName = string;
export declare enum FullNamePackageVersion {
    V0 = "v0",
    V1 = "v1",
    V2 = "v2"
}
export declare type ImageCropRect = {
    x0: number;
    y0: number;
    x1: number;
    y1: number;
};
export declare enum IdentityVisibility {
    PRIVATE = "private",
    PUBLIC = "public"
}
export declare type SizedImage = {
    path: string;
    width: number;
};
export declare enum OfflineAvailability {
    NONE = "none",
    BEST_EFFORT = "best_effort"
}
export declare type ReacjiSkinTone = number;
export declare type SessionStatus = {
    sessionFor: string;
    loaded: boolean;
    cleared: boolean;
    saltOnly: boolean;
    expired: boolean;
};
export declare type PlatformInfo = {
    os: string;
    osVersion: string;
    arch: string;
    goVersion: string;
};
export declare type LoadDeviceErr = {
    where: string;
    desc: string;
};
export declare type DirSizeInfo = {
    numFiles: number;
    name: string;
    humanSize: string;
};
export declare type KbClientStatus = {
    version: string;
};
export declare type KbServiceStatus = {
    version: string;
    running: boolean;
    pid: string;
    log: string;
    ekLog: string;
};
export declare type KBFSStatus = {
    version: string;
    installedVersion: string;
    running: boolean;
    pid: string;
    log: string;
    mount: string;
};
export declare type DesktopStatus = {
    version: string;
    running: boolean;
    log: string;
};
export declare type UpdaterStatus = {
    log: string;
};
export declare type StartStatus = {
    log: string;
};
export declare type GitStatus = {
    log: string;
};
export declare type LogSendID = string;
export declare type AllProvisionedUsernames = {
    defaultUsername: string;
    provisionedUsernames: string[] | null;
    hasProvisionedUser: boolean;
};
export declare enum ForkType {
    NONE = "none",
    AUTO = "auto",
    WATCHDOG = "watchdog",
    LAUNCHD = "launchd",
    SYSTEMD = "systemd"
}
export declare type ConfigValue = {
    isNull: boolean;
    b?: boolean;
    i?: number;
    f?: number;
    s?: string;
    o?: string;
};
export declare type OutOfDateInfo = {
    upgradeTo: string;
    upgradeUri: string;
    customMessage: string;
    criticalClockSkew: number;
};
export declare enum UpdateInfoStatus {
    UP_TO_DATE = "up_to_date",
    NEED_UPDATE = "need_update",
    CRITICALLY_OUT_OF_DATE = "critically_out_of_date"
}
export declare enum UpdateInfoStatus2 {
    OK = "ok",
    SUGGESTED = "suggested",
    CRITICAL = "critical"
}
export declare type UpdateDetails = {
    message: string;
};
export declare enum ProxyType {
    No_Proxy = "no_proxy",
    HTTP_Connect = "http_connect",
    Socks = "socks"
}
export declare enum StatusCode {
    SCOk = "scok",
    SCInputError = "scinputerror",
    SCLoginRequired = "scloginrequired",
    SCBadSession = "scbadsession",
    SCBadLoginUserNotFound = "scbadloginusernotfound",
    SCBadLoginPassword = "scbadloginpassword",
    SCNotFound = "scnotfound",
    SCThrottleControl = "scthrottlecontrol",
    SCDeleted = "scdeleted",
    SCGeneric = "scgeneric",
    SCAlreadyLoggedIn = "scalreadyloggedin",
    SCExists = "scexists",
    SCCanceled = "sccanceled",
    SCInputCanceled = "scinputcanceled",
    SCBadUsername = "scbadusername",
    SCOffline = "scoffline",
    SCReloginRequired = "screloginrequired",
    SCResolutionFailed = "scresolutionfailed",
    SCProfileNotPublic = "scprofilenotpublic",
    SCIdentifyFailed = "scidentifyfailed",
    SCTrackingBroke = "sctrackingbroke",
    SCWrongCryptoFormat = "scwrongcryptoformat",
    SCDecryptionError = "scdecryptionerror",
    SCInvalidAddress = "scinvalidaddress",
    SCNoSession = "scnosession",
    SCAccountReset = "scaccountreset",
    SCIdentifiesFailed = "scidentifiesfailed",
    SCNoSpaceOnDevice = "scnospaceondevice",
    SCMerkleClientError = "scmerkleclienterror",
    SCBadEmail = "scbademail",
    SCRateLimit = "scratelimit",
    SCBadSignupUsernameTaken = "scbadsignupusernametaken",
    SCDuplicate = "scduplicate",
    SCBadInvitationCode = "scbadinvitationcode",
    SCBadSignupUsernameReserved = "scbadsignupusernamereserved",
    SCBadSignupTeamName = "scbadsignupteamname",
    SCFeatureFlag = "scfeatureflag",
    SCEmailTaken = "scemailtaken",
    SCEmailAlreadyAdded = "scemailalreadyadded",
    SCEmailLimitExceeded = "scemaillimitexceeded",
    SCEmailCannotDeletePrimary = "scemailcannotdeleteprimary",
    SCEmailUnknown = "scemailunknown",
    SCBotSignupTokenNotFound = "scbotsignuptokennotfound",
    SCNoUpdate = "scnoupdate",
    SCMissingResult = "scmissingresult",
    SCKeyNotFound = "sckeynotfound",
    SCKeyCorrupted = "sckeycorrupted",
    SCKeyInUse = "sckeyinuse",
    SCKeyBadGen = "sckeybadgen",
    SCKeyNoSecret = "sckeynosecret",
    SCKeyBadUIDs = "sckeybaduids",
    SCKeyNoActive = "sckeynoactive",
    SCKeyNoSig = "sckeynosig",
    SCKeyBadSig = "sckeybadsig",
    SCKeyBadEldest = "sckeybadeldest",
    SCKeyNoEldest = "sckeynoeldest",
    SCKeyDuplicateUpdate = "sckeyduplicateupdate",
    SCSibkeyAlreadyExists = "scsibkeyalreadyexists",
    SCDecryptionKeyNotFound = "scdecryptionkeynotfound",
    SCKeyNoPGPEncryption = "sckeynopgpencryption",
    SCKeyNoNaClEncryption = "sckeynonaclencryption",
    SCKeySyncedPGPNotFound = "sckeysyncedpgpnotfound",
    SCKeyNoMatchingGPG = "sckeynomatchinggpg",
    SCKeyRevoked = "sckeyrevoked",
    SCSigCannotVerify = "scsigcannotverify",
    SCSigWrongKey = "scsigwrongkey",
    SCSigOldSeqno = "scsigoldseqno",
    SCSigCreationDisallowed = "scsigcreationdisallowed",
    SCSigMissingRatchet = "scsigmissingratchet",
    SCSigBadTotalOrder = "scsigbadtotalorder",
    SCBadTrackSession = "scbadtracksession",
    SCDeviceBadName = "scdevicebadname",
    SCDeviceBadStatus = "scdevicebadstatus",
    SCDeviceNameInUse = "scdevicenameinuse",
    SCDeviceNotFound = "scdevicenotfound",
    SCDeviceMismatch = "scdevicemismatch",
    SCDeviceRequired = "scdevicerequired",
    SCDevicePrevProvisioned = "scdeviceprevprovisioned",
    SCDeviceNoProvision = "scdevicenoprovision",
    SCDeviceProvisionViaDevice = "scdeviceprovisionviadevice",
    SCRevokeCurrentDevice = "screvokecurrentdevice",
    SCRevokeLastDevice = "screvokelastdevice",
    SCDeviceProvisionOffline = "scdeviceprovisionoffline",
    SCRevokeLastDevicePGP = "screvokelastdevicepgp",
    SCStreamExists = "scstreamexists",
    SCStreamNotFound = "scstreamnotfound",
    SCStreamWrongKind = "scstreamwrongkind",
    SCStreamEOF = "scstreameof",
    SCStreamUnknown = "scstreamunknown",
    SCGenericAPIError = "scgenericapierror",
    SCAPINetworkError = "scapinetworkerror",
    SCTimeout = "sctimeout",
    SCProofError = "scprooferror",
    SCIdentificationExpired = "scidentificationexpired",
    SCSelfNotFound = "scselfnotfound",
    SCBadKexPhrase = "scbadkexphrase",
    SCNoUIDelegation = "scnouidelegation",
    SCNoUI = "scnoui",
    SCGPGUnavailable = "scgpgunavailable",
    SCInvalidVersionError = "scinvalidversionerror",
    SCOldVersionError = "scoldversionerror",
    SCInvalidLocationError = "scinvalidlocationerror",
    SCServiceStatusError = "scservicestatuserror",
    SCInstallError = "scinstallerror",
    SCLoadKextError = "scloadkexterror",
    SCLoadKextPermError = "scloadkextpermerror",
    SCGitInternal = "scgitinternal",
    SCGitRepoAlreadyExists = "scgitrepoalreadyexists",
    SCGitInvalidRepoName = "scgitinvalidreponame",
    SCGitCannotDelete = "scgitcannotdelete",
    SCGitRepoDoesntExist = "scgitrepodoesntexist",
    SCLoginStateTimeout = "scloginstatetimeout",
    SCChatInternal = "scchatinternal",
    SCChatRateLimit = "scchatratelimit",
    SCChatConvExists = "scchatconvexists",
    SCChatUnknownTLFID = "scchatunknowntlfid",
    SCChatNotInConv = "scchatnotinconv",
    SCChatBadMsg = "scchatbadmsg",
    SCChatBroadcast = "scchatbroadcast",
    SCChatAlreadySuperseded = "scchatalreadysuperseded",
    SCChatAlreadyDeleted = "scchatalreadydeleted",
    SCChatTLFFinalized = "scchattlffinalized",
    SCChatCollision = "scchatcollision",
    SCIdentifySummaryError = "scidentifysummaryerror",
    SCNeedSelfRekey = "scneedselfrekey",
    SCNeedOtherRekey = "scneedotherrekey",
    SCChatMessageCollision = "scchatmessagecollision",
    SCChatDuplicateMessage = "scchatduplicatemessage",
    SCChatClientError = "scchatclienterror",
    SCChatNotInTeam = "scchatnotinteam",
    SCChatStalePreviousState = "scchatstalepreviousstate",
    SCChatEphemeralRetentionPolicyViolatedError = "scchatephemeralretentionpolicyviolatederror",
    SCTeamBadMembership = "scteambadmembership",
    SCTeamSelfNotOwner = "scteamselfnotowner",
    SCTeamNotFound = "scteamnotfound",
    SCTeamExists = "scteamexists",
    SCTeamReadError = "scteamreaderror",
    SCTeamWritePermDenied = "scteamwritepermdenied",
    SCTeamBadGeneration = "scteambadgeneration",
    SCNoOp = "scnoop",
    SCTeamInviteBadCancel = "scteaminvitebadcancel",
    SCTeamInviteBadToken = "scteaminvitebadtoken",
    SCTeamTarDuplicate = "scteamtarduplicate",
    SCTeamTarNotFound = "scteamtarnotfound",
    SCTeamMemberExists = "scteammemberexists",
    SCTeamNotReleased = "scteamnotreleased",
    SCTeamPermanentlyLeft = "scteampermanentlyleft",
    SCTeamNeedRootId = "scteamneedrootid",
    SCTeamHasLiveChildren = "scteamhaslivechildren",
    SCTeamDeleteError = "scteamdeleteerror",
    SCTeamBadRootTeam = "scteambadrootteam",
    SCTeamNameConflictsWithUser = "scteamnameconflictswithuser",
    SCTeamDeleteNoUpPointer = "scteamdeletenouppointer",
    SCTeamNeedOwner = "scteamneedowner",
    SCTeamNoOwnerAllowed = "scteamnoownerallowed",
    SCTeamImplicitNoNonSbs = "scteamimplicitnononsbs",
    SCTeamImplicitBadHash = "scteamimplicitbadhash",
    SCTeamImplicitBadName = "scteamimplicitbadname",
    SCTeamImplicitClash = "scteamimplicitclash",
    SCTeamImplicitDuplicate = "scteamimplicitduplicate",
    SCTeamImplicitBadOp = "scteamimplicitbadop",
    SCTeamImplicitBadRole = "scteamimplicitbadrole",
    SCTeamImplicitNotFound = "scteamimplicitnotfound",
    SCTeamBadAdminSeqnoType = "scteambadadminseqnotype",
    SCTeamImplicitBadAdd = "scteamimplicitbadadd",
    SCTeamImplicitBadRemove = "scteamimplicitbadremove",
    SCTeamInviteTokenReused = "scteaminvitetokenreused",
    SCTeamKeyMaskNotFound = "scteamkeymasknotfound",
    SCTeamBanned = "scteambanned",
    SCTeamInvalidBan = "scteaminvalidban",
    SCTeamShowcasePermDenied = "scteamshowcasepermdenied",
    SCTeamProvisionalCanKey = "scteamprovisionalcankey",
    SCTeamProvisionalCannotKey = "scteamprovisionalcannotkey",
    SCTeamFTLOutdated = "scteamftloutdated",
    SCTeamStorageWrongRevision = "scteamstoragewrongrevision",
    SCTeamStorageBadGeneration = "scteamstoragebadgeneration",
    SCTeamStorageNotFound = "scteamstoragenotfound",
    SCTeamContactSettingsBlock = "scteamcontactsettingsblock",
    SCEphemeralKeyBadGeneration = "scephemeralkeybadgeneration",
    SCEphemeralKeyUnexpectedBox = "scephemeralkeyunexpectedbox",
    SCEphemeralKeyMissingBox = "scephemeralkeymissingbox",
    SCEphemeralKeyWrongNumberOfKeys = "scephemeralkeywrongnumberofkeys",
    SCEphemeralKeyMismatchedKey = "scephemeralkeymismatchedkey",
    SCEphemeralPairwiseMACsMissingUIDs = "scephemeralpairwisemacsmissinguids",
    SCEphemeralDeviceAfterEK = "scephemeraldeviceafterek",
    SCEphemeralMemberAfterEK = "scephemeralmemberafterek",
    SCEphemeralDeviceStale = "scephemeraldevicestale",
    SCEphemeralUserStale = "scephemeraluserstale",
    SCStellarError = "scstellarerror",
    SCStellarBadInput = "scstellarbadinput",
    SCStellarWrongRevision = "scstellarwrongrevision",
    SCStellarMissingBundle = "scstellarmissingbundle",
    SCStellarBadPuk = "scstellarbadpuk",
    SCStellarMissingAccount = "scstellarmissingaccount",
    SCStellarBadPrev = "scstellarbadprev",
    SCStellarWrongPrimary = "scstellarwrongprimary",
    SCStellarUnsupportedCurrency = "scstellarunsupportedcurrency",
    SCStellarNeedDisclaimer = "scstellarneeddisclaimer",
    SCStellarDeviceNotMobile = "scstellardevicenotmobile",
    SCStellarMobileOnlyPurgatory = "scstellarmobileonlypurgatory",
    SCStellarIncompatibleVersion = "scstellarincompatibleversion",
    SCNISTWrongSize = "scnistwrongsize",
    SCNISTBadMode = "scnistbadmode",
    SCNISTHashWrongSize = "scnisthashwrongsize",
    SCNISTSigWrongSize = "scnistsigwrongsize",
    SCNISTSigBadInput = "scnistsigbadinput",
    SCNISTSigBadUID = "scnistsigbaduid",
    SCNISTSigBadDeviceID = "scnistsigbaddeviceid",
    SCNISTSigBadNonce = "scnistsigbadnonce",
    SCNISTNoSigOrHash = "scnistnosigorhash",
    SCNISTExpired = "scnistexpired",
    SCNISTSigRevoked = "scnistsigrevoked",
    SCNISTKeyRevoked = "scnistkeyrevoked",
    SCNISTUserDeleted = "scnistuserdeleted",
    SCNISTNoDevice = "scnistnodevice",
    SCNISTSigCannot_verify = "scnistsigcannot_verify",
    SCNISTReplay = "scnistreplay",
    SCNISTSigBadLifetime = "scnistsigbadlifetime",
    SCNISTNotFound = "scnistnotfound",
    SCNISTBadClock = "scnistbadclock",
    SCNISTSigBadCtime = "scnistsigbadctime",
    SCBadSignupUsernameDeleted = "scbadsignupusernamedeleted",
    SCPhoneNumberUnknown = "scphonenumberunknown",
    SCPhoneNumberAlreadyVerified = "scphonenumberalreadyverified",
    SCPhoneNumberVerificationCodeExpired = "scphonenumberverificationcodeexpired",
    SCPhoneNumberWrongVerificationCode = "scphonenumberwrongverificationcode",
    SCPhoneNumberLimitExceeded = "scphonenumberlimitexceeded",
    SCNoPaperKeys = "scnopaperkeys",
    SCTeambotKeyGenerationExists = "scteambotkeygenerationexists",
    SCTeambotKeyOldBoxedGeneration = "scteambotkeyoldboxedgeneration",
    SCTeambotKeyBadGeneration = "scteambotkeybadgeneration",
    SCAirdropRegisterFailedMisc = "scairdropregisterfailedmisc"
}
export declare type ED25519PublicKey = string | null;
export declare type ED25519Signature = string | null;
export declare type EncryptedBytes32 = string | null;
export declare type BoxNonce = string | null;
export declare type BoxPublicKey = string | null;
export declare type RegisterAddressRes = {
    type: string;
    family: string;
};
export declare enum ExitCode {
    OK = "ok",
    NOTOK = "notok",
    RESTART = "restart"
}
export declare enum DbType {
    MAIN = "main",
    CHAT = "chat",
    FS_BLOCK_CACHE = "fs_block_cache",
    FS_BLOCK_CACHE_META = "fs_block_cache_meta",
    FS_SYNC_BLOCK_CACHE = "fs_sync_block_cache",
    FS_SYNC_BLOCK_CACHE_META = "fs_sync_block_cache_meta"
}
export declare type DbValue = Buffer;
export declare enum OnLoginStartupStatus {
    UNKNOWN = "unknown",
    DISABLED = "disabled",
    ENABLED = "enabled"
}
export declare type FirstStepResult = {
    valPlusTwo: number;
};
export declare type EkGeneration = number;
export declare enum TeamEphemeralKeyType {
    TEAM = "team",
    TEAMBOT = "teambot"
}
export declare enum FolderType {
    UNKNOWN = "unknown",
    PRIVATE = "private",
    PUBLIC = "public",
    TEAM = "team"
}
export declare enum FolderConflictType {
    NONE = "none",
    IN_CONFLICT = "in_conflict",
    IN_CONFLICT_AND_STUCK = "in_conflict_and_stuck",
    CLEARED_CONFLICT = "cleared_conflict"
}
export declare enum ConflictStateType {
    NormalView = "normalview",
    ManualResolvingLocalView = "manualresolvinglocalview"
}
export declare type FeaturedBot = {
    botAlias: string;
    description: string;
    extendedDescription: string;
    botUsername: string;
    ownerTeam?: string;
    ownerUser?: string;
    rank: number;
    isPromoted: boolean;
};
export declare type File = {
    path: string;
};
export declare type RepoID = string;
export declare enum GitLocalMetadataVersion {
    V1 = "v1"
}
export declare enum GitPushType {
    DEFAULT = "default",
    CREATEREPO = "createrepo",
    RENAMEREPO = "renamerepo"
}
export declare enum GitRepoResultState {
    ERR = "err",
    OK = "ok"
}
export declare type GitTeamRepoSettings = {
    channelName?: string;
    chatDisabled: boolean;
};
export declare type SelectKeyRes = {
    keyId: string;
    doSecretPush: boolean;
};
export declare enum PushReason {
    NONE = "none",
    RECONNECTED = "reconnected",
    NEW_DATA = "new_data"
}
export declare type HomeScreenItemID = string;
export declare enum HomeScreenItemType {
    TODO = "todo",
    PEOPLE = "people",
    ANNOUNCEMENT = "announcement"
}
export declare enum AppLinkType {
    NONE = "none",
    PEOPLE = "people",
    CHAT = "chat",
    FILES = "files",
    WALLET = "wallet",
    GIT = "git",
    DEVICES = "devices",
    SETTINGS = "settings",
    TEAMS = "teams"
}
export declare type HomeScreenAnnouncementID = number;
export declare type HomeScreenAnnouncementVersion = number;
export declare enum HomeScreenTodoType {
    NONE = "none",
    BIO = "bio",
    PROOF = "proof",
    DEVICE = "device",
    FOLLOW = "follow",
    CHAT = "chat",
    PAPERKEY = "paperkey",
    TEAM = "team",
    FOLDER = "folder",
    GIT_REPO = "git_repo",
    TEAM_SHOWCASE = "team_showcase",
    AVATAR_USER = "avatar_user",
    AVATAR_TEAM = "avatar_team",
    ADD_PHONE_NUMBER = "add_phone_number",
    VERIFY_ALL_PHONE_NUMBER = "verify_all_phone_number",
    VERIFY_ALL_EMAIL = "verify_all_email",
    LEGACY_EMAIL_VISIBILITY = "legacy_email_visibility",
    ADD_EMAIL = "add_email",
    ANNONCEMENT_PLACEHOLDER = "annoncement_placeholder"
}
export declare enum HomeScreenPeopleNotificationType {
    FOLLOWED = "followed",
    FOLLOWED_MULTI = "followed_multi",
    CONTACT = "contact",
    CONTACT_MULTI = "contact_multi"
}
export declare type Pics = {
    square40: string;
    square200: string;
    square360: string;
};
export declare type Identify3Assertion = string;
export declare type Identify3GUIID = string;
export declare enum Identify3RowState {
    CHECKING = "checking",
    VALID = "valid",
    ERROR = "error",
    WARNING = "warning",
    REVOKED = "revoked"
}
export declare enum Identify3RowColor {
    BLUE = "blue",
    RED = "red",
    BLACK = "black",
    GREEN = "green",
    GRAY = "gray",
    YELLOW = "yellow",
    ORANGE = "orange"
}
export declare enum Identify3ResultType {
    OK = "ok",
    BROKEN = "broken",
    NEEDS_UPGRADE = "needs_upgrade",
    CANCELED = "canceled"
}
export declare type TrackToken = string;
export declare type SigVersion = number;
export declare enum TrackDiffType {
    NONE = "none",
    ERROR = "error",
    CLASH = "clash",
    REVOKED = "revoked",
    UPGRADED = "upgraded",
    NEW = "new",
    REMOTE_FAIL = "remote_fail",
    REMOTE_WORKING = "remote_working",
    REMOTE_CHANGED = "remote_changed",
    NEW_ELDEST = "new_eldest",
    NONE_VIA_TEMPORARY = "none_via_temporary"
}
/**
 * TrackStatus is a summary of this track before the track is approved by the
 *     user.
 *     NEW_*: New tracks
 *     UPDATE_*: Update to an existing track
 *     NEW_OK: Everything ok
 *     NEW_ZERO_PROOFS: User being tracked has no proofs
 *     NEW_FAIL_PROOFS: User being tracked has some failed proofs
 *     UPDATE_BROKEN: Previous tracking statement broken, this one will fix it.
 *     UPDATE_NEW_PROOFS: Previous tracking statement ok, but there are new proofs since previous tracking statement generated
 *     UPDATE_OK: No changes to previous tracking statement
 */
export declare enum TrackStatus {
    NEW_OK = "new_ok",
    NEW_ZERO_PROOFS = "new_zero_proofs",
    NEW_FAIL_PROOFS = "new_fail_proofs",
    UPDATE_BROKEN_FAILED_PROOFS = "update_broken_failed_proofs",
    UPDATE_NEW_PROOFS = "update_new_proofs",
    UPDATE_OK = "update_ok",
    UPDATE_BROKEN_REVOKED = "update_broken_revoked"
}
export declare enum IdentifyReasonType {
    NONE = "none",
    ID = "id",
    TRACK = "track",
    ENCRYPT = "encrypt",
    DECRYPT = "decrypt",
    VERIFY = "verify",
    RESOURCE = "resource",
    BACKGROUND = "background"
}
export declare type SigHint = {
    remoteId: string;
    humanUrl: string;
    apiUrl: string;
    checkText: string;
};
export declare enum CheckResultFreshness {
    FRESH = "fresh",
    AGED = "aged",
    RANCID = "rancid"
}
export declare type ConfirmResult = {
    identityConfirmed: boolean;
    remoteConfirmed: boolean;
    expiringLocal: boolean;
    autoConfirmed: boolean;
};
export declare enum DismissReasonType {
    NONE = "none",
    HANDLED_ELSEWHERE = "handled_elsewhere"
}
/**
 * Install status describes state of install for a component or service.
 */
export declare enum InstallStatus {
    UNKNOWN = "unknown",
    ERROR = "error",
    NOT_INSTALLED = "not_installed",
    INSTALLED = "installed"
}
export declare enum InstallAction {
    UNKNOWN = "unknown",
    NONE = "none",
    UPGRADE = "upgrade",
    REINSTALL = "reinstall",
    INSTALL = "install"
}
export declare type FuseMountInfo = {
    path: string;
    fstype: string;
    output: string;
};
export declare enum FSStatusCode {
    START = "start",
    FINISH = "finish",
    ERROR = "error"
}
export declare enum FSNotificationType {
    ENCRYPTING = "encrypting",
    DECRYPTING = "decrypting",
    SIGNING = "signing",
    VERIFYING = "verifying",
    REKEYING = "rekeying",
    CONNECTION = "connection",
    MD_READ_SUCCESS = "md_read_success",
    FILE_CREATED = "file_created",
    FILE_MODIFIED = "file_modified",
    FILE_DELETED = "file_deleted",
    FILE_RENAMED = "file_renamed",
    INITIALIZED = "initialized",
    SYNC_CONFIG_CHANGED = "sync_config_changed"
}
export declare enum FSErrorType {
    ACCESS_DENIED = "access_denied",
    USER_NOT_FOUND = "user_not_found",
    REVOKED_DATA_DETECTED = "revoked_data_detected",
    NOT_LOGGED_IN = "not_logged_in",
    TIMEOUT = "timeout",
    REKEY_NEEDED = "rekey_needed",
    BAD_FOLDER = "bad_folder",
    NOT_IMPLEMENTED = "not_implemented",
    OLD_VERSION = "old_version",
    OVER_QUOTA = "over_quota",
    NO_SIG_CHAIN = "no_sig_chain",
    TOO_MANY_FOLDERS = "too_many_folders",
    EXDEV_NOT_SUPPORTED = "exdev_not_supported",
    DISK_LIMIT_REACHED = "disk_limit_reached",
    DISK_CACHE_ERROR_LOG_SEND = "disk_cache_error_log_send",
    OFFLINE_ARCHIVED = "offline_archived",
    OFFLINE_UNSYNCED = "offline_unsynced"
}
export declare type FSSyncStatusRequest = {
    requestId: number;
};
export declare type PassphraseStream = {
    passphraseStream: Buffer;
    generation: number;
};
export declare type SessionToken = string;
export declare type CsrfToken = string;
export declare type HelloRes = string;
export declare type KVGetResult = {
    teamName: string;
    namespace: string;
    entryKey: string;
    entryValue: string;
    revision: number;
};
export declare type KVPutResult = {
    teamName: string;
    namespace: string;
    entryKey: string;
    revision: number;
};
export declare type EncryptedKVEntry = {
    v: number;
    e: Buffer;
    n: Buffer;
};
export declare type KVListNamespaceResult = {
    teamName: string;
    namespaces: string[] | null;
};
export declare type KVListEntryKey = {
    entryKey: string;
    revision: number;
};
export declare type KVDeleteEntryResult = {
    teamName: string;
    namespace: string;
    entryKey: string;
    revision: number;
};
export declare enum ResetPromptType {
    COMPLETE = "complete",
    ENTER_NO_DEVICES = "enter_no_devices",
    ENTER_FORGOT_PW = "enter_forgot_pw",
    ENTER_RESET_PW = "enter_reset_pw"
}
export declare type ResetPromptInfo = {
    hasWallet: boolean;
};
export declare enum ResetPromptResponse {
    NOTHING = "nothing",
    CANCEL_RESET = "cancel_reset",
    CONFIRM_RESET = "confirm_reset"
}
export declare enum PassphraseRecoveryPromptType {
    ENCRYPTED_PGP_KEYS = "encrypted_pgp_keys"
}
export declare enum ResetMessage {
    ENTERED_VERIFIED = "entered_verified",
    ENTERED_PASSWORDLESS = "entered_passwordless",
    REQUEST_VERIFIED = "request_verified",
    NOT_COMPLETED = "not_completed",
    CANCELED = "canceled",
    COMPLETED = "completed",
    RESET_LINK_SENT = "reset_link_sent"
}
export declare type KBFSRootHash = Buffer;
export declare type MerkleStoreSupportedVersion = number;
export declare type MerkleStoreKitHash = string;
export declare type MerkleStoreKit = string;
export declare type MerkleStoreEntryString = string;
export declare type KeyBundle = {
    version: number;
    bundle: Buffer;
};
export declare type MerkleRoot = {
    version: number;
    root: Buffer;
};
export declare type LockID = number;
export declare type MDPriority = number;
export declare type RekeyRequest = {
    folderId: string;
    revision: number;
};
export declare type ChatConversationID = Buffer;
export declare type DeletedTeamInfo = {
    teamName: string;
    deletedBy: string;
    id: gregor1.MsgID;
};
export declare type WalletAccountInfo = {
    accountId: string;
    numUnread: number;
};
export declare type NotificationChannels = {
    session: boolean;
    users: boolean;
    kbfs: boolean;
    kbfsdesktop: boolean;
    kbfslegacy: boolean;
    kbfssubscription: boolean;
    tracking: boolean;
    favorites: boolean;
    paperkeys: boolean;
    keyfamily: boolean;
    service: boolean;
    app: boolean;
    chat: boolean;
    pgp: boolean;
    kbfsrequest: boolean;
    badges: boolean;
    reachability: boolean;
    team: boolean;
    ephemeral: boolean;
    teambot: boolean;
    chatkbfsedits: boolean;
    chatdev: boolean;
    deviceclone: boolean;
    chatattachments: boolean;
    wallet: boolean;
    audit: boolean;
    runtimestats: boolean;
    featuredBots: boolean;
    saltpack: boolean;
};
export declare enum StatsSeverityLevel {
    NORMAL = "normal",
    WARNING = "warning",
    SEVERE = "severe"
}
export declare enum ProcessType {
    MAIN = "main",
    KBFS = "kbfs"
}
export declare enum SaltpackOperationType {
    ENCRYPT = "encrypt",
    DECRYPT = "decrypt",
    SIGN = "sign",
    VERIFY = "verify"
}
export declare type HttpSrvInfo = {
    address: string;
    token: string;
};
export declare type TeamChangeSet = {
    membershipChanged: boolean;
    keyRotated: boolean;
    renamed: boolean;
    misc: boolean;
};
export declare enum AvatarUpdateType {
    NONE = "none",
    USER = "user",
    TEAM = "team"
}
export declare enum RuntimeGroup {
    UNKNOWN = "unknown",
    LINUXLIKE = "linuxlike",
    DARWINLIKE = "darwinlike",
    WINDOWSLIKE = "windowslike"
}
export declare type Feature = {
    allow: boolean;
    defaultValue: boolean;
    readonly: boolean;
    label: string;
};
export declare enum PassphraseType {
    NONE = "none",
    PAPER_KEY = "paper_key",
    PASS_PHRASE = "pass_phrase",
    VERIFY_PASS_PHRASE = "verify_pass_phrase"
}
export declare type GetPassphraseRes = {
    passphrase: string;
    storeSecret: boolean;
};
export declare enum SignMode {
    ATTACHED = "attached",
    DETACHED = "detached",
    CLEAR = "clear"
}
export declare type PGPEncryptOptions = {
    recipients: string[] | null;
    noSign: boolean;
    noSelf: boolean;
    binaryOut: boolean;
    keyQuery: string;
};
export declare type PGPDecryptOptions = {
    assertSigned: boolean;
    signedBy: string;
};
export declare type PGPVerifyOptions = {
    signedBy: string;
    signature: Buffer;
};
export declare type KeyInfo = {
    fingerprint: string;
    key: string;
    desc: string;
};
export declare type PGPQuery = {
    secret: boolean;
    query: string;
    exactMatch: boolean;
};
/**
 * Export all pgp keys in lksec, then if doPurge is true, remove the keys from lksec.
 */
export declare type PGPPurgeRes = {
    filenames: string[] | null;
};
export declare enum FileType {
    UNKNOWN = "unknown",
    DIRECTORY = "directory",
    FILE = "file"
}
export declare enum ProofState {
    NONE = "none",
    OK = "ok",
    TEMP_FAILURE = "temp_failure",
    PERM_FAILURE = "perm_failure",
    LOOKING = "looking",
    SUPERSEDED = "superseded",
    POSTED = "posted",
    REVOKED = "revoked",
    DELETED = "deleted",
    UNKNOWN_TYPE = "unknown_type",
    SIG_HINT_MISSING = "sig_hint_missing",
    UNCHECKED = "unchecked"
}
/**
 * 3: It's been found in the hunt, but not proven yet
 *     1xx: Retryable soft errors; note that this will be put in the proof_cache, but won't
 *        be returned from the proof cache in most cases. Their freshness will always be
 *        RANCID.
 *     2xx: Will likely result in a hard error, if repeated enough
 *     3xx: Hard final errors
 */
export declare enum ProofStatus {
    NONE = "none",
    OK = "ok",
    LOCAL = "local",
    FOUND = "found",
    BASE_ERROR = "base_error",
    HOST_UNREACHABLE = "host_unreachable",
    PERMISSION_DENIED = "permission_denied",
    FAILED_PARSE = "failed_parse",
    DNS_ERROR = "dns_error",
    AUTH_FAILED = "auth_failed",
    HTTP_429 = "http_429",
    HTTP_500 = "http_500",
    TIMEOUT = "timeout",
    INTERNAL_ERROR = "internal_error",
    UNCHECKED = "unchecked",
    MISSING_PVL = "missing_pvl",
    BASE_HARD_ERROR = "base_hard_error",
    NOT_FOUND = "not_found",
    CONTENT_FAILURE = "content_failure",
    BAD_USERNAME = "bad_username",
    BAD_REMOTE_ID = "bad_remote_id",
    TEXT_NOT_FOUND = "text_not_found",
    BAD_ARGS = "bad_args",
    CONTENT_MISSING = "content_missing",
    TITLE_NOT_FOUND = "title_not_found",
    SERVICE_ERROR = "service_error",
    TOR_SKIPPED = "tor_skipped",
    TOR_INCOMPATIBLE = "tor_incompatible",
    HTTP_300 = "http_300",
    HTTP_400 = "http_400",
    HTTP_OTHER = "http_other",
    EMPTY_JSON = "empty_json",
    DELETED = "deleted",
    SERVICE_DEAD = "service_dead",
    BAD_SIGNATURE = "bad_signature",
    BAD_API_URL = "bad_api_url",
    UNKNOWN_TYPE = "unknown_type",
    NO_HINT = "no_hint",
    BAD_HINT_TEXT = "bad_hint_text",
    INVALID_PVL = "invalid_pvl"
}
export declare enum ProofType {
    NONE = "none",
    KEYBASE = "keybase",
    TWITTER = "twitter",
    GITHUB = "github",
    REDDIT = "reddit",
    COINBASE = "coinbase",
    HACKERNEWS = "hackernews",
    FACEBOOK = "facebook",
    GENERIC_SOCIAL = "generic_social",
    GENERIC_WEB_SITE = "generic_web_site",
    DNS = "dns",
    PGP = "pgp",
    ROOTER = "rooter"
}
export declare type SelectorEntry = {
    isIndex: boolean;
    index: number;
    isKey: boolean;
    key: string;
    isAll: boolean;
    isContents: boolean;
};
export declare type ParamProofUsernameConfig = {
    re: string;
    min: number;
    max: number;
};
export declare type ParamProofLogoConfig = {
    svgBlack: string;
    svgFull: string;
    svgWhite: string;
};
export declare type ServiceDisplayConfig = {
    creationDisabled: boolean;
    priority: number;
    key: string;
    group?: string;
    new: boolean;
    logoKey: string;
};
export declare enum PromptOverwriteType {
    SOCIAL = "social",
    SITE = "site"
}
export declare enum ProvisionMethod {
    DEVICE = "device",
    PAPER_KEY = "paper_key",
    PASSPHRASE = "passphrase",
    GPG_IMPORT = "gpg_import",
    GPG_SIGN = "gpg_sign"
}
export declare enum GPGMethod {
    GPG_NONE = "gpg_none",
    GPG_IMPORT = "gpg_import",
    GPG_SIGN = "gpg_sign"
}
export declare enum ChooseType {
    EXISTING_DEVICE = "existing_device",
    NEW_DEVICE = "new_device"
}
/**
 * SecretResponse should be returned by DisplayAndPromptSecret.  Use either secret or phrase.
 */
export declare type SecretResponse = {
    secret: Buffer;
    phrase: string;
};
export declare enum Reachable {
    UNKNOWN = "unknown",
    YES = "yes",
    NO = "no"
}
export declare enum Outcome {
    NONE = "none",
    FIXED = "fixed",
    IGNORED = "ignored"
}
export declare enum RekeyEventType {
    NONE = "none",
    NOT_LOGGED_IN = "not_logged_in",
    API_ERROR = "api_error",
    NO_PROBLEMS = "no_problems",
    LOAD_ME_ERROR = "load_me_error",
    CURRENT_DEVICE_CAN_REKEY = "current_device_can_rekey",
    DEVICE_LOAD_ERROR = "device_load_error",
    HARASS = "harass",
    NO_GREGOR_MESSAGES = "no_gregor_messages"
}
export declare type SHA512 = Buffer;
export declare enum ResetType {
    NONE = "none",
    RESET = "reset",
    DELETE = "delete"
}
export declare enum AuthenticityType {
    SIGNED = "signed",
    REPUDIABLE = "repudiable",
    ANONYMOUS = "anonymous"
}
export declare type SaltpackDecryptOptions = {
    interactive: boolean;
    forceRemoteCheck: boolean;
    usePaperKey: boolean;
};
export declare type SaltpackSignOptions = {
    detached: boolean;
    binary: boolean;
    saltpackVersion: number;
};
export declare type SaltpackVerifyOptions = {
    signedBy: string;
    signature: Buffer;
};
export declare type SaltpackEncryptResult = {
    usedUnresolvedSbs: boolean;
    unresolvedSbsAssertion: string;
};
export declare type SaltpackFrontendEncryptOptions = {
    recipients: string[] | null;
    signed: boolean;
    includeSelf: boolean;
};
export declare type SaltpackEncryptStringResult = {
    usedUnresolvedSbs: boolean;
    unresolvedSbsAssertion: string;
    ciphertext: string;
};
export declare type SaltpackEncryptFileResult = {
    usedUnresolvedSbs: boolean;
    unresolvedSbsAssertion: string;
    filename: string;
};
export declare enum SaltpackSenderType {
    NOT_TRACKED = "not_tracked",
    UNKNOWN = "unknown",
    ANONYMOUS = "anonymous",
    TRACKING_BROKE = "tracking_broke",
    TRACKING_OK = "tracking_ok",
    SELF = "self",
    REVOKED = "revoked",
    EXPIRED = "expired"
}
export declare type SecretEntryArg = {
    desc: string;
    prompt: string;
    err: string;
    cancel: string;
    ok: string;
    reason: string;
    showTyping: boolean;
};
export declare type SecretEntryRes = {
    text: string;
    canceled: boolean;
    storeSecret: boolean;
};
export declare type NaclSigningKeyPublic = string | null;
export declare type NaclSigningKeyPrivate = string | null;
export declare type NaclDHKeyPublic = string | null;
export declare type NaclDHKeyPrivate = string | null;
export declare type SignupRes = {
    passphraseOk: boolean;
    postOk: boolean;
    writeOk: boolean;
    paperKey: string;
};
export declare type SigTypes = {
    track: boolean;
    proof: boolean;
    cryptocurrency: boolean;
    isSelf: boolean;
};
export declare type OpID = string | null;
export declare type KBFSRevision = number;
export declare enum KBFSArchivedType {
    REVISION = "revision",
    TIME = "time",
    TIME_STRING = "time_string",
    REL_TIME_STRING = "rel_time_string"
}
export declare enum PathType {
    LOCAL = "local",
    KBFS = "kbfs",
    KBFS_ARCHIVED = "kbfs_archived"
}
export declare enum DirentType {
    FILE = "file",
    DIR = "dir",
    SYM = "sym",
    EXEC = "exec"
}
export declare enum PrefetchStatus {
    NOT_STARTED = "not_started",
    IN_PROGRESS = "in_progress",
    COMPLETE = "complete"
}
export declare enum RevisionSpanType {
    DEFAULT = "default",
    LAST_FIVE = "last_five"
}
export declare type ErrorNum = number;
export declare enum OpenFlags {
    READ = "read",
    REPLACE = "replace",
    EXISTING = "existing",
    WRITE = "write",
    APPEND = "append",
    DIRECTORY = "directory"
}
export declare type Progress = number;
export declare enum AsyncOps {
    LIST = "list",
    LIST_RECURSIVE = "list_recursive",
    READ = "read",
    WRITE = "write",
    COPY = "copy",
    MOVE = "move",
    REMOVE = "remove",
    LIST_RECURSIVE_TO_DEPTH = "list_recursive_to_depth",
    GET_REVISIONS = "get_revisions"
}
export declare enum ListFilter {
    NO_FILTER = "no_filter",
    FILTER_ALL_HIDDEN = "filter_all_hidden",
    FILTER_SYSTEM_HIDDEN = "filter_system_hidden"
}
export declare type SimpleFSQuotaUsage = {
    usageBytes: number;
    archiveBytes: number;
    limitBytes: number;
    gitUsageBytes: number;
    gitArchiveBytes: number;
    gitLimitBytes: number;
};
export declare enum FolderSyncMode {
    DISABLED = "disabled",
    ENABLED = "enabled",
    PARTIAL = "partial"
}
export declare enum KbfsOnlineStatus {
    OFFLINE = "offline",
    TRYING = "trying",
    ONLINE = "online"
}
export declare type FSSettings = {
    spaceAvailableNotificationThreshold: number;
    sfmiBannerDismissed: boolean;
};
export declare enum SubscriptionTopic {
    FAVORITES = "favorites",
    JOURNAL_STATUS = "journal_status",
    ONLINE_STATUS = "online_status",
    DOWNLOAD_STATUS = "download_status",
    FILES_TAB_BADGE = "files_tab_badge",
    OVERALL_SYNC_STATUS = "overall_sync_status",
    SETTINGS = "settings"
}
export declare enum PathSubscriptionTopic {
    CHILDREN = "children",
    STAT = "stat"
}
export declare enum FilesTabBadge {
    NONE = "none",
    UPLOADING_STUCK = "uploading_stuck",
    AWAITING_UPLOAD = "awaiting_upload",
    UPLOADING = "uploading"
}
export declare enum GUIViewType {
    DEFAULT = "default",
    TEXT = "text",
    IMAGE = "image",
    AUDIO = "audio",
    VIDEO = "video",
    PDF = "pdf"
}
export declare type TeambotKeyGeneration = number;
export declare enum TeamRole {
    NONE = "none",
    READER = "reader",
    WRITER = "writer",
    ADMIN = "admin",
    OWNER = "owner",
    BOT = "bot",
    RESTRICTEDBOT = "restrictedbot"
}
export declare enum TeamApplication {
    KBFS = "kbfs",
    CHAT = "chat",
    SALTPACK = "saltpack",
    GIT_METADATA = "git_metadata",
    SEITAN_INVITE_TOKEN = "seitan_invite_token",
    STELLAR_RELAY = "stellar_relay",
    KVSTORE = "kvstore"
}
export declare enum TeamStatus {
    NONE = "none",
    LIVE = "live",
    DELETED = "deleted",
    ABANDONED = "abandoned"
}
export declare enum AuditMode {
    STANDARD = "standard",
    JUST_CREATED = "just_created",
    SKIP = "skip",
    STANDARD_NO_HIDDEN = "standard_no_hidden"
}
export declare type PerTeamKeyGeneration = number;
export declare enum PTKType {
    READER = "reader"
}
export declare enum PerTeamSeedCheckVersion {
    V1 = "v1"
}
export declare type PerTeamSeedCheckValue = Buffer;
export declare type PerTeamSeedCheckValuePostImage = Buffer;
export declare type MaskB64 = Buffer;
export declare type TeamInviteID = string;
export declare type PerTeamKeySeed = string | null;
export declare enum TeamMemberStatus {
    ACTIVE = "active",
    RESET = "reset",
    DELETED = "deleted"
}
export declare type UserVersionPercentForm = string;
export declare enum RatchetType {
    MAIN = "main",
    BLINDED = "blinded",
    SELF = "self",
    UNCOMMITTED = "uncommitted"
}
export declare enum AuditVersion {
    V0 = "v0",
    V1 = "v1",
    V2 = "v2",
    V3 = "v3",
    V4 = "v4"
}
export declare enum TeamInviteCategory {
    NONE = "none",
    UNKNOWN = "unknown",
    KEYBASE = "keybase",
    EMAIL = "email",
    SBS = "sbs",
    SEITAN = "seitan",
    PHONE = "phone"
}
export declare type TeamInviteSocialNetwork = string;
export declare type TeamInviteName = string;
export declare type TeamEncryptedKBFSKeyset = {
    v: number;
    e: Buffer;
    n: Buffer;
};
export declare type TeamEncryptedKBFSKeysetHash = string;
export declare type BoxSummaryHash = string;
export declare type TeamNamePart = string;
export declare type SeitanAKey = string;
export declare type SeitanIKey = string;
export declare type SeitanPubKey = string;
export declare type SeitanIKeyV2 = string;
export declare enum SeitanKeyAndLabelVersion {
    V1 = "v1",
    V2 = "v2"
}
export declare enum SeitanKeyLabelType {
    SMS = "sms"
}
export declare type SeitanKeyLabelSms = {
    f: string;
    n: string;
};
export declare type TeamJoinRequest = {
    name: string;
    username: string;
};
export declare type TeamBotSettings = {
    cmds: boolean;
    mentions: boolean;
    triggers: string[] | null;
    convs: string[] | null;
};
export declare type TeamRequestAccessResult = {
    open: boolean;
};
export declare type TeamAcceptOrRequestResult = {
    wasToken: boolean;
    wasSeitan: boolean;
    wasTeamName: boolean;
    wasOpenTeam: boolean;
};
export declare type BulkRes = {
    invited: string[] | null;
    alreadyInvited: string[] | null;
    malformed: string[] | null;
};
export declare type ConflictGeneration = number;
export declare type TeamOperation = {
    manageMembers: boolean;
    manageSubteams: boolean;
    createChannel: boolean;
    chat: boolean;
    deleteChannel: boolean;
    renameChannel: boolean;
    renameTeam: boolean;
    editChannelDescription: boolean;
    editTeamDescription: boolean;
    setTeamShowcase: boolean;
    setMemberShowcase: boolean;
    setRetentionPolicy: boolean;
    setMinWriterRole: boolean;
    changeOpenTeam: boolean;
    leaveTeam: boolean;
    joinTeam: boolean;
    setPublicityAny: boolean;
    listFirst: boolean;
    changeTarsDisabled: boolean;
    deleteChatHistory: boolean;
    deleteOtherMessages: boolean;
    deleteTeam: boolean;
    pinMessage: boolean;
    manageBots: boolean;
};
export declare type ProfileTeamLoadRes = {
    loadTimeNsec: number;
};
export declare enum RotationType {
    VISIBLE = "visible",
    HIDDEN = "hidden",
    CLKR = "clkr"
}
export declare type MemberEmail = {
    email: string;
    role: string;
};
export declare type MemberUsername = {
    username: string;
    role: string;
};
export declare type UserTeamVersion = number;
/**
 * Result from calling test(..).
 */
export declare type Test = {
    reply: string;
};
export declare enum TLFIdentifyBehavior {
    UNSET = "unset",
    CHAT_CLI = "chat_cli",
    CHAT_GUI = "chat_gui",
    REMOVED_AND_UNUSED = "removed_and_unused",
    KBFS_REKEY = "kbfs_rekey",
    KBFS_QR = "kbfs_qr",
    CHAT_SKIP = "chat_skip",
    SALTPACK = "saltpack",
    CLI = "cli",
    GUI = "gui",
    DEFAULT_KBFS = "default_kbfs",
    KBFS_CHAT = "kbfs_chat",
    RESOLVE_AND_CHECK = "resolve_and_check",
    GUI_PROFILE = "gui_profile",
    KBFS_INIT = "kbfs_init",
    FS_GUI = "fs_gui"
}
export declare type CanonicalTlfName = string;
export declare enum PromptDefault {
    NONE = "none",
    YES = "yes",
    NO = "no"
}
export declare enum KeyType {
    NONE = "none",
    NACL = "nacl",
    PGP = "pgp"
}
export declare enum UPK2MinorVersion {
    V0 = "v0",
    V1 = "v1",
    V2 = "v2",
    V3 = "v3",
    V4 = "v4",
    V5 = "v5",
    V6 = "v6"
}
export declare type PGPFingerprint = string | null;
export declare enum UPAKVersion {
    V1 = "v1",
    V2 = "v2"
}
export declare enum UPKLiteMinorVersion {
    V0 = "v0"
}
export declare type TrackProof = {
    proofType: string;
    proofName: string;
    idString: string;
};
export declare type WebProof = {
    hostname: string;
    protocols: string[] | null;
};
export declare type EmailAddress = string;
/**
 * PassphraseState values are used in .config.json, so should not be changed without a migration strategy
 */
export declare enum PassphraseState {
    KNOWN = "known",
    RANDOM = "random"
}
export declare enum UserBlockType {
    CHAT = "chat",
    FOLLOW = "follow"
}
export declare type UserBlockArg = {
    username: string;
    setChatBlock?: boolean;
    setFollowBlock?: boolean;
};
export declare type APIUserServiceID = string;
export declare type ImpTofuSearchResult = {
    assertion: string;
    assertionValue: string;
    assertionKey: string;
    label: string;
    prettyName: string;
    keybaseUsername: string;
};
export declare type LockdownHistory = {
    status: boolean;
    ctime: Time;
    deviceId: DeviceID;
    deviceName: string;
};
export declare type TeamContactSettings = {
    teamId: TeamID;
    enabled: boolean;
};
export declare type AirdropDetails = {
    uid: UID;
    kid: BinaryKID;
    vid: VID;
    vers: string;
    time: Time;
};
export declare type BoxAuditAttempt = {
    ctime: UnixTime;
    error?: string;
    result: BoxAuditAttemptResult;
    generation?: PerTeamKeyGeneration;
    rotated: boolean;
};
export declare type LoadAvatarsRes = {
    picmap: {
        [key: string]: {
            [key: string]: AvatarUrl;
        };
    };
};
export declare type AvatarClearCacheMsg = {
    name: string;
    formats: AvatarFormat[] | null;
    typ: AvatarUpdateType;
};
export declare type BlockIdCombo = {
    blockHash: string;
    chargedTo: UserOrTeamID;
    blockType: BlockType;
};
export declare type GetBlockRes = {
    blockKey: string;
    buf: Buffer;
    size: number;
    status: BlockStatus;
};
export declare type BotTokenInfo = {
    botToken: BotToken;
    ctime: Time;
};
export declare type Status = {
    code: number;
    name: string;
    desc: string;
    fields: StringKVPair[] | null;
};
export declare type UserVersion = {
    uid: UID;
    eldestSeqno: Seqno;
};
export declare type CompatibilityTeamID = {
    typ: TeamType.LEGACY;
    LEGACY: TLFID;
} | {
    typ: TeamType.MODERN;
    MODERN: TeamID;
} | {
    typ: Exclude<TeamType, TeamType.LEGACY | TeamType.MODERN>;
};
export declare type TeamIDWithVisibility = {
    teamId: TeamID;
    visibility: TLFVisibility;
};
export declare type PublicKey = {
    kid: KID;
    pgpFingerprint: string;
    pgpIdentities: PGPIdentity[] | null;
    isSibkey: boolean;
    isEldest: boolean;
    parentId: string;
    deviceId: DeviceID;
    deviceDescription: string;
    deviceType: string;
    cTime: Time;
    eTime: Time;
    isRevoked: boolean;
};
export declare type KeybaseTime = {
    unix: Time;
    chain: Seqno;
};
export declare type User = {
    uid: UID;
    username: string;
};
export declare type Device = {
    type: string;
    name: string;
    deviceId: DeviceID;
    deviceNumberOfType: number;
    cTime: Time;
    mTime: Time;
    lastUsedTime: Time;
    encryptKey: KID;
    verifyKey: KID;
    status: number;
};
export declare type UserVersionVector = {
    id: number;
    sigHints: number;
    sigChain: number;
    cachedAt: Time;
};
export declare type PerUserKey = {
    gen: number;
    seqno: Seqno;
    sigKid: KID;
    encKid: KID;
    signedByKid: KID;
};
export declare type UserOrTeamLite = {
    id: UserOrTeamID;
    name: string;
};
export declare type RemoteTrack = {
    username: string;
    uid: UID;
    linkId: LinkID;
};
/**
 * SocialAssertion contains a service and username for that service, that
 *     together form an assertion about a user. It can either be a social
 *     assertion (like "facebook" or "twitter") or a server trust assertion (like
 *     "phone" or "email").
 *
 *     If the assertion is for social network, resolving an assertion requires
 *     that the user posts a Keybase proof on the asserted service as the asserted
 *     user.
 *
 *     For server trust assertion, we have to trust the server.
 */
export declare type SocialAssertion = {
    user: string;
    service: SocialAssertionService;
};
export declare type FullNamePackage = {
    version: FullNamePackageVersion;
    fullName: FullName;
    eldestSeqno: Seqno;
    status: StatusCode;
    cachedAt: Time;
};
export declare type PhoneLookupResult = {
    uid: UID;
    username: string;
    ctime: UnixTime;
};
export declare type UserReacjis = {
    topReacjis: string[] | null;
    skinTone: ReacjiSkinTone;
};
export declare type ClientDetails = {
    pid: number;
    clientType: ClientType;
    argv: string[] | null;
    desc: string;
    version: string;
};
export declare type Config = {
    serverUri: string;
    socketFile: string;
    label: string;
    runMode: string;
    gpgExists: boolean;
    gpgPath: string;
    version: string;
    path: string;
    binaryRealpath: string;
    configPath: string;
    versionShort: string;
    versionFull: string;
    isAutoForked: boolean;
    forkType: ForkType;
};
export declare type UpdateInfo = {
    status: UpdateInfoStatus;
    message: string;
};
export declare type UpdateInfo2 = {
    status: UpdateInfoStatus2.OK;
} | {
    status: UpdateInfoStatus2.SUGGESTED;
    SUGGESTED: UpdateDetails;
} | {
    status: UpdateInfoStatus2.CRITICAL;
    CRITICAL: UpdateDetails;
} | {
    status: Exclude<UpdateInfoStatus2, UpdateInfoStatus2.OK | UpdateInfoStatus2.SUGGESTED | UpdateInfoStatus2.CRITICAL>;
};
export declare type ProxyData = {
    addressWithPort: string;
    proxyType: ProxyType;
    certPinning: boolean;
};
export declare type ContactComponent = {
    label: string;
    phoneNumber?: RawPhoneNumber;
    email?: EmailAddress;
};
export declare type ED25519SignatureInfo = {
    sig: ED25519Signature;
    publicKey: ED25519PublicKey;
};
export declare type CiphertextBundle = {
    kid: KID;
    ciphertext: EncryptedBytes32;
    nonce: BoxNonce;
    publicKey: BoxPublicKey;
};
export declare type UnboxAnyRes = {
    kid: KID;
    plaintext: Bytes32;
    index: number;
};
export declare type DbKey = {
    dbType: DbType;
    objType: number;
    key: string;
};
export declare type EmailLookupResult = {
    email: EmailAddress;
    uid?: UID;
};
export declare type EmailAddressVerifiedMsg = {
    email: EmailAddress;
};
export declare type EmailAddressChangedMsg = {
    email: EmailAddress;
};
export declare type DeviceEkMetadata = {
    deviceEphemeralDhPublic: KID;
    hashMeta: HashMeta;
    generation: EkGeneration;
    ctime: Time;
    deviceCtime: Time;
};
export declare type UserEkMetadata = {
    userEphemeralDhPublic: KID;
    hashMeta: HashMeta;
    generation: EkGeneration;
    ctime: Time;
};
export declare type UserEkBoxMetadata = {
    box: string;
    recipientGeneration: EkGeneration;
    recipientDeviceId: DeviceID;
};
export declare type TeamEkMetadata = {
    teamEphemeralDhPublic: KID;
    hashMeta: HashMeta;
    generation: EkGeneration;
    ctime: Time;
};
export declare type TeamEkBoxMetadata = {
    box: string;
    recipientGeneration: EkGeneration;
    recipientUid: UID;
};
export declare type TeambotEkMetadata = {
    teambotDhPublic: KID;
    generation: EkGeneration;
    uid: UID;
    userEkGeneration: EkGeneration;
    hashMeta: HashMeta;
    ctime: Time;
};
export declare type FolderHandle = {
    name: string;
    folderType: FolderType;
    created: boolean;
};
export declare type FeaturedBotsRes = {
    bots: FeaturedBot[] | null;
    isLastPage: boolean;
};
export declare type SearchRes = {
    bots: FeaturedBot[] | null;
    isLastPage: boolean;
};
export declare type ListResult = {
    files: File[] | null;
};
export declare type EncryptedGitMetadata = {
    v: number;
    e: Buffer;
    n: BoxNonce;
    gen: PerTeamKeyGeneration;
};
export declare type GitLocalMetadataV1 = {
    repoName: GitRepoName;
};
export declare type GitCommit = {
    commitHash: string;
    message: string;
    authorName: string;
    authorEmail: string;
    ctime: Time;
};
export declare type GitServerMetadata = {
    ctime: Time;
    mtime: Time;
    lastModifyingUsername: string;
    lastModifyingDeviceId: DeviceID;
    lastModifyingDeviceName: string;
};
export declare type GPGKey = {
    algorithm: string;
    keyId: string;
    creation: string;
    expiration: string;
    identities: PGPIdentity[] | null;
};
export declare type HomeScreenAnnouncement = {
    id: HomeScreenAnnouncementID;
    version: HomeScreenAnnouncementVersion;
    appLink: AppLinkType;
    confirmLabel: string;
    dismissable: boolean;
    iconUrl: string;
    text: string;
    url: string;
};
/**
 * Most of TODO items do not carry additional data, but some do. e.g. TODO
 *     item to tell user to verify their email address will carry that email
 *     address.
 *
 *     All new TODO data bundle types should be records rather than single fields
 *     to support adding new data to existing TODOs. If a legacy TODO (such as
 *     VERIFY_ALL_EMAIL) uses a single field, the "TodoExt" field should be used to
 *     introduce more data to the payload.
 */
export declare type HomeScreenTodo = {
    t: HomeScreenTodoType.VERIFY_ALL_PHONE_NUMBER;
    VERIFY_ALL_PHONE_NUMBER: PhoneNumber;
} | {
    t: HomeScreenTodoType.VERIFY_ALL_EMAIL;
    VERIFY_ALL_EMAIL: EmailAddress;
} | {
    t: HomeScreenTodoType.LEGACY_EMAIL_VISIBILITY;
    LEGACY_EMAIL_VISIBILITY: EmailAddress;
} | {
    t: Exclude<HomeScreenTodoType, HomeScreenTodoType.VERIFY_ALL_PHONE_NUMBER | HomeScreenTodoType.VERIFY_ALL_EMAIL | HomeScreenTodoType.LEGACY_EMAIL_VISIBILITY>;
};
export declare type VerifyAllEmailTodoExt = {
    lastVerifyEmailDate: UnixTime;
};
export declare type HomeScreenPeopleNotificationContact = {
    resolveTime: Time;
    username: string;
    description: string;
    resolvedContactBlob: string;
};
export declare type HomeUserSummary = {
    uid: UID;
    username: string;
    bio: string;
    fullName: string;
    pics?: Pics;
};
export declare type Identify3RowMeta = {
    color: Identify3RowColor;
    label: string;
};
export declare type TrackDiff = {
    type: TrackDiffType;
    displayMarkup: string;
};
export declare type TrackSummary = {
    username: string;
    time: Time;
    isRemote: boolean;
};
export declare type TrackOptions = {
    localOnly: boolean;
    bypassConfirm: boolean;
    forceRetrack: boolean;
    expiringLocal: boolean;
    forPgpPull: boolean;
    sigVersion?: SigVersion;
};
export declare type IdentifyReason = {
    type: IdentifyReasonType;
    reason: string;
    resource: string;
};
export declare type RemoteProof = {
    proofType: ProofType;
    key: string;
    value: string;
    displayMarkup: string;
    sigId: SigID;
    mTime: Time;
};
export declare type ProofResult = {
    state: ProofState;
    status: ProofStatus;
    desc: string;
};
export declare type Cryptocurrency = {
    rowId: number;
    pkhash: Buffer;
    address: string;
    sigId: SigID;
    type: string;
    family: string;
};
export declare type StellarAccount = {
    accountId: string;
    federationAddress: string;
    sigId: SigID;
    hidden: boolean;
};
export declare type UserTeamShowcase = {
    fqName: string;
    open: boolean;
    teamIsShowcased: boolean;
    description: string;
    role: TeamRole;
    publicAdmins: string[] | null;
    numMembers: number;
};
export declare type DismissReason = {
    type: DismissReasonType;
    reason: string;
    resource: string;
};
export declare type KBFSTeamSettings = {
    tlfId: TLFID;
};
export declare type FSNotification = {
    filename: string;
    status: string;
    statusCode: FSStatusCode;
    notificationType: FSNotificationType;
    errorType: FSErrorType;
    params: {
        [key: string]: string;
    };
    writerUid: UID;
    localTime: Time;
    folderType: FolderType;
};
export declare type FSFolderWriterEdit = {
    filename: string;
    notificationType: FSNotificationType;
    serverTime: Time;
};
export declare type FSPathSyncStatus = {
    folderType: FolderType;
    path: string;
    syncingBytes: number;
    syncingOps: number;
    syncedBytes: number;
};
export declare type FSSyncStatus = {
    totalSyncingBytes: number;
    syncingPaths: string[] | null;
    endEstimate?: Time;
};
export declare type GcOptions = {
    maxLooseRefs: number;
    pruneMinLooseObjects: number;
    pruneExpireTime: Time;
    maxObjectPacks: number;
};
export declare type Hello2Res = {
    encryptionKey: KID;
    sigPayload: HelloRes;
    deviceEkKid: KID;
};
export declare type PerUserKeyBox = {
    generation: PerUserKeyGeneration;
    box: string;
    receiverKid: KID;
};
export declare type KVEntryID = {
    teamId: TeamID;
    namespace: string;
    entryKey: string;
};
export declare type KVListEntryResult = {
    teamName: string;
    namespace: string;
    entryKeys: KVListEntryKey[] | null;
};
export declare type ConfiguredAccount = {
    username: string;
    fullname: FullName;
    hasStoredSecret: boolean;
    isCurrent: boolean;
};
export declare type ResetPrompt = {
    t: ResetPromptType.COMPLETE;
    COMPLETE: ResetPromptInfo;
} | {
    t: Exclude<ResetPromptType, ResetPromptType.COMPLETE>;
};
export declare type KBFSRoot = {
    treeId: MerkleTreeID;
    root: KBFSRootHash;
};
export declare type MerkleStoreEntry = {
    hash: MerkleStoreKitHash;
    entry: MerkleStoreEntryString;
};
export declare type KeyHalf = {
    user: UID;
    deviceKid: KID;
    key: Buffer;
};
export declare type MDBlock = {
    version: number;
    timestamp: Time;
    block: Buffer;
};
export declare type PingResponse = {
    timestamp: Time;
};
export declare type KeyBundleResponse = {
    writerBundle: KeyBundle;
    readerBundle: KeyBundle;
};
export declare type LockContext = {
    requireLockId: LockID;
    releaseAfterSuccess: boolean;
};
export declare type FindNextMDResponse = {
    kbfsRoot: MerkleRoot;
    merkleNodes: Buffer[] | null;
    rootSeqno: Seqno;
    rootHash: HashMeta;
};
export declare type TeamMemberOutReset = {
    teamId: TeamID;
    teamname: string;
    username: string;
    uid: UID;
    id: gregor1.MsgID;
};
export declare type ResetState = {
    endTime: Time;
    active: boolean;
};
export declare type BadgeConversationInfo = {
    convId: ChatConversationID;
    badgeCounts: {
        [key: string]: number;
    };
    unreadMessages: number;
};
export declare type DbStats = {
    type: DbType;
    memCompActive: boolean;
    tableCompActive: boolean;
};
export declare type ProcessRuntimeStats = {
    type: ProcessType;
    cpu: string;
    resident: string;
    virt: string;
    free: string;
    goheap: string;
    goheapsys: string;
    goreleased: string;
    cpuSeverity: StatsSeverityLevel;
    residentSeverity: StatsSeverityLevel;
};
export declare type GUIEntryFeatures = {
    showTyping: Feature;
};
export declare type PGPSignOptions = {
    keyQuery: string;
    mode: SignMode;
    binaryIn: boolean;
    binaryOut: boolean;
};
export declare type PGPCreateUids = {
    useDefault: boolean;
    ids: PGPIdentity[] | null;
};
/**
 * Phone number support for TOFU chats.
 */
export declare type UserPhoneNumber = {
    phoneNumber: PhoneNumber;
    verified: boolean;
    superseded: boolean;
    visibility: IdentityVisibility;
    ctime: UnixTime;
};
export declare type PhoneNumberLookupResult = {
    phoneNumber: RawPhoneNumber;
    coercedPhoneNumber: PhoneNumber;
    err?: string;
    uid?: UID;
};
export declare type PhoneNumberChangedMsg = {
    phone: PhoneNumber;
};
export declare type FileDescriptor = {
    name: string;
    type: FileType;
};
export declare type CheckProofStatus = {
    found: boolean;
    status: ProofStatus;
    proofText: string;
    state: ProofState;
};
export declare type StartProofResult = {
    sigId: SigID;
};
export declare type ParamProofJSON = {
    sigHash: SigID;
    kbUsername: string;
};
export declare type ParamProofServiceConfig = {
    version: number;
    domain: string;
    displayName: string;
    logo?: ParamProofLogoConfig;
    description: string;
    username: ParamProofUsernameConfig;
    brandColor: string;
    prefillUrl: string;
    profileUrl: string;
    checkUrl: string;
    checkPath: SelectorEntry[] | null;
    avatarPath: SelectorEntry[] | null;
};
export declare type ProveParameters = {
    logoFull: SizedImage[] | null;
    logoBlack: SizedImage[] | null;
    logoWhite: SizedImage[] | null;
    title: string;
    subtext: string;
    suffix: string;
    buttonLabel: string;
};
export declare type VerifySessionRes = {
    uid: UID;
    sid: string;
    generated: number;
    lifetime: number;
};
export declare type Reachability = {
    reachable: Reachable;
};
export declare type TLF = {
    id: TLFID;
    name: string;
    writers: string[] | null;
    readers: string[] | null;
    isPrivate: boolean;
};
export declare type RekeyEvent = {
    eventType: RekeyEventType;
    interruptType: number;
};
export declare type ResetMerkleRoot = {
    hashMeta: HashMeta;
    seqno: Seqno;
};
export declare type ResetPrev = {
    eldestKid?: KID;
    publicSeqno: Seqno;
    reset: SHA512;
};
export declare type SaltpackEncryptOptions = {
    recipients: string[] | null;
    teamRecipients: string[] | null;
    authenticityType: AuthenticityType;
    useEntityKeys: boolean;
    useDeviceKeys: boolean;
    usePaperKeys: boolean;
    noSelfEncrypt: boolean;
    binary: boolean;
    saltpackVersion: number;
    useKbfsKeysOnlyForTesting: boolean;
};
export declare type SaltpackSender = {
    uid: UID;
    username: string;
    senderType: SaltpackSenderType;
};
export declare type SecretKeys = {
    signing: NaclSigningKeyPrivate;
    encryption: NaclDHKeyPrivate;
};
export declare type Session = {
    uid: UID;
    username: string;
    token: string;
    deviceSubkeyKid: KID;
    deviceSibkeyKid: KID;
};
export declare type Sig = {
    seqno: Seqno;
    sigId: SigID;
    sigIdDisplay: string;
    type: string;
    cTime: Time;
    revoked: boolean;
    active: boolean;
    key: string;
    body: string;
};
export declare type SigListArgs = {
    sessionId: number;
    username: string;
    allKeys: boolean;
    types?: SigTypes;
    filterx: string;
    verbose: boolean;
    revoked: boolean;
};
export declare type KBFSArchivedParam = {
    KBFSArchivedType: KBFSArchivedType.REVISION;
    REVISION: KBFSRevision;
} | {
    KBFSArchivedType: KBFSArchivedType.TIME;
    TIME: Time;
} | {
    KBFSArchivedType: KBFSArchivedType.TIME_STRING;
    TIME_STRING: string;
} | {
    KBFSArchivedType: KBFSArchivedType.REL_TIME_STRING;
    REL_TIME_STRING: string;
} | {
    KBFSArchivedType: Exclude<KBFSArchivedType, KBFSArchivedType.REVISION | KBFSArchivedType.TIME | KBFSArchivedType.TIME_STRING | KBFSArchivedType.REL_TIME_STRING>;
};
export declare type KBFSPath = {
    path: string;
    identifyBehavior?: TLFIdentifyBehavior;
};
export declare type PrefetchProgress = {
    start: Time;
    endEstimate: Time;
    bytesTotal: number;
    bytesFetched: number;
};
export declare type FileContent = {
    data: Buffer;
    progress: Progress;
};
export declare type OpProgress = {
    start: Time;
    endEstimate: Time;
    opType: AsyncOps;
    bytesTotal: number;
    bytesRead: number;
    bytesWritten: number;
    filesTotal: number;
    filesRead: number;
    filesWritten: number;
};
export declare type FolderSyncConfig = {
    mode: FolderSyncMode;
    paths: string[] | null;
};
export declare type DownloadState = {
    downloadId: string;
    progress: number;
    endEstimate: Time;
    localPath: string;
    error: string;
    done: boolean;
    canceled: boolean;
};
export declare type GUIFileContext = {
    viewType: GUIViewType;
    contentType: string;
    url: string;
};
export declare type TeambotKeyMetadata = {
    teambotDhPublic: KID;
    generation: TeambotKeyGeneration;
    uid: UID;
    pukGeneration: PerUserKeyGeneration;
    application: TeamApplication;
};
export declare type PerTeamSeedCheck = {
    version: PerTeamSeedCheckVersion;
    value: PerTeamSeedCheckValue;
};
export declare type PerTeamSeedCheckPostImage = {
    h: PerTeamSeedCheckValuePostImage;
    v: PerTeamSeedCheckVersion;
};
export declare type TeamApplicationKey = {
    application: TeamApplication;
    keyGeneration: PerTeamKeyGeneration;
    key: Bytes32;
};
export declare type ReaderKeyMask = {
    application: TeamApplication;
    generation: PerTeamKeyGeneration;
    mask: MaskB64;
};
export declare type PerTeamKey = {
    gen: PerTeamKeyGeneration;
    seqno: Seqno;
    sigKid: KID;
    encKid: KID;
};
export declare type TeamMember = {
    uid: UID;
    role: TeamRole;
    eldestSeqno: Seqno;
    status: TeamMemberStatus;
    botSettings?: TeamBotSettings;
};
export declare type LinkTriple = {
    seqno: Seqno;
    seqType: SeqType;
    linkId: LinkID;
};
export declare type UpPointer = {
    ourSeqno: Seqno;
    parentId: TeamID;
    parentSeqno: Seqno;
    deletion: boolean;
};
export declare type DownPointer = {
    id: TeamID;
    nameComponent: string;
    isDeleted: boolean;
};
export declare type Signer = {
    e: Seqno;
    k: KID;
    u: UID;
};
export declare type Audit = {
    time: Time;
    mms: Seqno;
    mcs: Seqno;
    mhs: Seqno;
    mmp: Seqno;
};
export declare type Probe = {
    i: number;
    t: Seqno;
    h: Seqno;
};
export declare type TeamInviteType = {
    c: TeamInviteCategory.UNKNOWN;
    UNKNOWN: string;
} | {
    c: TeamInviteCategory.SBS;
    SBS: TeamInviteSocialNetwork;
} | {
    c: Exclude<TeamInviteCategory, TeamInviteCategory.UNKNOWN | TeamInviteCategory.SBS>;
};
export declare type TeamGetLegacyTLFUpgrade = {
    encryptedKeyset: string;
    teamGeneration: PerTeamKeyGeneration;
    legacyGeneration: number;
    appType: TeamApplication;
};
export declare type TeamLegacyTLFUpgradeChainInfo = {
    keysetHash: TeamEncryptedKBFSKeysetHash;
    teamGeneration: PerTeamKeyGeneration;
    legacyGeneration: number;
    appType: TeamApplication;
};
export declare type TeamNameLogPoint = {
    lastPart: TeamNamePart;
    seqno: Seqno;
};
export declare type TeamName = {
    parts: TeamNamePart[] | null;
};
export declare type TeamCLKRResetUser = {
    uid: UID;
    userEldest: Seqno;
    memberEldest: Seqno;
};
export declare type TeamResetUser = {
    username: string;
    uid: UID;
    eldestSeqno: Seqno;
    isDelete: boolean;
};
export declare type TeamChangeRow = {
    id: TeamID;
    name: string;
    keyRotated: boolean;
    membershipChanged: boolean;
    latestSeqno: Seqno;
    latestHiddenSeqno: Seqno;
    latestOffchainSeqno: Seqno;
    implicitTeam: boolean;
    misc: boolean;
    removedResetUsers: boolean;
};
export declare type TeamExitRow = {
    id: TeamID;
};
export declare type TeamNewlyAddedRow = {
    id: TeamID;
    name: string;
};
export declare type TeamInvitee = {
    inviteId: TeamInviteID;
    uid: UID;
    eldestSeqno: Seqno;
    role: TeamRole;
};
export declare type TeamAccessRequest = {
    uid: UID;
    eldestSeqno: Seqno;
};
export declare type SeitanKeyLabel = {
    t: SeitanKeyLabelType.SMS;
    SMS: SeitanKeyLabelSms;
} | {
    t: Exclude<SeitanKeyLabelType, SeitanKeyLabelType.SMS>;
};
export declare type TeamSeitanRequest = {
    inviteId: TeamInviteID;
    uid: UID;
    eldestSeqno: Seqno;
    akey: SeitanAKey;
    role: TeamRole;
    ctime: number;
};
export declare type TeamKBFSKeyRefresher = {
    generation: number;
    appType: TeamApplication;
};
export declare type ImplicitRole = {
    role: TeamRole;
    ancestor: TeamID;
};
export declare type TeamCreateResult = {
    teamId: TeamID;
    chatSent: boolean;
    creatorAdded: boolean;
};
export declare type TeamSettings = {
    open: boolean;
    joinAs: TeamRole;
};
export declare type TeamShowcase = {
    isShowcased: boolean;
    description?: string;
    setByUid?: UID;
    anyMemberShowcase: boolean;
};
export declare type UserRolePair = {
    assertionOrEmail: string;
    role: TeamRole;
    botSettings?: TeamBotSettings;
};
export declare type ImplicitTeamConflictInfo = {
    generation: ConflictGeneration;
    time: Time;
};
export declare type TeamRolePair = {
    role: TeamRole;
    implicitRole: TeamRole;
};
export declare type UserTeamVersionUpdate = {
    version: UserTeamVersion;
};
export declare type CryptKey = {
    keyGeneration: number;
    key: Bytes32;
};
export declare type TLFQuery = {
    tlfName: string;
    identifyBehavior: TLFIdentifyBehavior;
};
export declare type MerkleRootV2 = {
    seqno: Seqno;
    hashMeta: HashMeta;
};
export declare type SigChainLocation = {
    seqno: Seqno;
    seqType: SeqType;
};
export declare type Email = {
    email: EmailAddress;
    isVerified: boolean;
    isPrimary: boolean;
    visibility: IdentityVisibility;
    lastVerifyEmailDate: UnixTime;
};
export declare type UserSummary2 = {
    uid: UID;
    username: string;
    thumbnail: string;
    fullName: string;
    isFollower: boolean;
    isFollowee: boolean;
};
export declare type InterestingPerson = {
    uid: UID;
    username: string;
    fullname: string;
    serviceMap: {
        [key: string]: string;
    };
};
export declare type CanLogoutRes = {
    canLogout: boolean;
    reason: string;
    passphraseState: PassphraseState;
};
export declare type UserPassphraseStateMsg = {
    state: PassphraseState;
};
export declare type UserBlockedRow = {
    blockUid: UID;
    blockUsername: string;
    chat?: boolean;
    follow?: boolean;
};
export declare type UserBlockState = {
    blockType: UserBlockType;
    blocked: boolean;
};
export declare type UserBlock = {
    username: string;
    chatBlocked: boolean;
    followBlocked: boolean;
    createTime?: Time;
    modifyTime?: Time;
};
export declare type TeamBlock = {
    fqName: string;
    ctime: Time;
};
export declare type APIUserKeybaseResult = {
    username: string;
    uid: UID;
    pictureUrl?: string;
    fullName?: string;
    rawScore: number;
    stellar?: string;
    isFollowee: boolean;
};
export declare type APIUserServiceResult = {
    serviceName: APIUserServiceID;
    username: string;
    pictureUrl: string;
    bio: string;
    location: string;
    fullName: string;
    confirmed?: boolean;
};
export declare type APIUserServiceSummary = {
    serviceName: APIUserServiceID;
    username: string;
};
export declare type GetLockdownResponse = {
    history: LockdownHistory[] | null;
    status: boolean;
};
export declare type ContactSettings = {
    version?: number;
    allowFolloweeDegrees: number;
    allowGoodTeams: boolean;
    enabled: boolean;
    teams: TeamContactSettings[] | null;
};
export declare type BlockReference = {
    bid: BlockIdCombo;
    nonce: BlockRefNonce;
    chargedTo: UserOrTeamID;
};
export declare type BlockIdCount = {
    id: BlockIdCombo;
    liveCount: number;
};
export declare type TeamIDAndName = {
    id: TeamID;
    name: TeamName;
};
export declare type RevokedKey = {
    key: PublicKey;
    time: KeybaseTime;
    by: KID;
};
export declare type CurrentStatus = {
    configured: boolean;
    registered: boolean;
    loggedIn: boolean;
    sessionIsValid: boolean;
    user?: User;
};
export declare type ClientStatus = {
    details: ClientDetails;
    connectionId: number;
    notificationChannels: NotificationChannels;
};
export declare type BootstrapStatus = {
    registered: boolean;
    loggedIn: boolean;
    uid: UID;
    username: string;
    deviceId: DeviceID;
    deviceName: string;
    fullname: FullName;
    userReacjis: UserReacjis;
    httpSrvInfo?: HttpSrvInfo;
};
export declare type Contact = {
    name: string;
    components: ContactComponent[] | null;
};
export declare type ProcessedContact = {
    contactIndex: number;
    contactName: string;
    component: ContactComponent;
    resolved: boolean;
    uid: UID;
    username: string;
    fullName: string;
    following: boolean;
    serviceMap: {
        [key: string]: string;
    };
    assertion: string;
    displayName: string;
    displayLabel: string;
};
export declare type DeviceDetail = {
    device: Device;
    eldest: boolean;
    provisioner?: Device;
    provisionedAt?: Time;
    revokedAt?: Time;
    revokedBy: KID;
    revokedByDevice?: Device;
    currentDevice: boolean;
};
export declare type DeviceEkStatement = {
    currentDeviceEkMetadata: DeviceEkMetadata;
};
export declare type DeviceEk = {
    seed: Bytes32;
    metadata: DeviceEkMetadata;
};
export declare type UserEkStatement = {
    currentUserEkMetadata: UserEkMetadata;
};
export declare type UserEkBoxed = {
    box: string;
    deviceEkGeneration: EkGeneration;
    metadata: UserEkMetadata;
};
export declare type UserEk = {
    seed: Bytes32;
    metadata: UserEkMetadata;
};
export declare type UserEkReboxArg = {
    userEkBoxMetadata: UserEkBoxMetadata;
    deviceId: DeviceID;
    deviceEkStatementSig: string;
};
export declare type TeamEkStatement = {
    currentTeamEkMetadata: TeamEkMetadata;
};
export declare type TeamEkBoxed = {
    box: string;
    userEkGeneration: EkGeneration;
    metadata: TeamEkMetadata;
};
export declare type TeamEk = {
    seed: Bytes32;
    metadata: TeamEkMetadata;
};
export declare type TeambotEkBoxed = {
    box: string;
    metadata: TeambotEkMetadata;
};
export declare type TeambotEk = {
    seed: Bytes32;
    metadata: TeambotEkMetadata;
};
export declare type GitLocalMetadataVersioned = {
    version: GitLocalMetadataVersion.V1;
    V1: GitLocalMetadataV1;
} | {
    version: Exclude<GitLocalMetadataVersion, GitLocalMetadataVersion.V1>;
};
export declare type GitRefMetadata = {
    refName: string;
    commits: GitCommit[] | null;
    moreCommitsAvailable: boolean;
    isDelete: boolean;
};
export declare type HomeScreenTodoExt = {
    t: HomeScreenTodoType.VERIFY_ALL_EMAIL;
    VERIFY_ALL_EMAIL: VerifyAllEmailTodoExt;
} | {
    t: Exclude<HomeScreenTodoType, HomeScreenTodoType.VERIFY_ALL_EMAIL>;
};
export declare type HomeScreenPeopleNotificationContactMulti = {
    contacts: HomeScreenPeopleNotificationContact[] | null;
    numOthers: number;
};
export declare type Identify3Row = {
    guiId: Identify3GUIID;
    key: string;
    value: string;
    priority: number;
    siteUrl: string;
    siteIcon: SizedImage[] | null;
    siteIconFull: SizedImage[] | null;
    siteIconWhite: SizedImage[] | null;
    proofUrl: string;
    sigId: SigID;
    ctime: Time;
    state: Identify3RowState;
    metas: Identify3RowMeta[] | null;
    color: Identify3RowColor;
    kid?: KID;
};
export declare type IdentifyOutcome = {
    username: string;
    status?: Status;
    warnings: string[] | null;
    trackUsed?: TrackSummary;
    trackStatus: TrackStatus;
    numTrackFailures: number;
    numTrackChanges: number;
    numProofFailures: number;
    numRevoked: number;
    numProofSuccesses: number;
    revoked: TrackDiff[] | null;
    trackOptions: TrackOptions;
    forPgpPull: boolean;
    reason: IdentifyReason;
};
export declare type IdentifyRow = {
    rowId: number;
    proof: RemoteProof;
    trackDiff?: TrackDiff;
};
export declare type IdentifyKey = {
    pgpFingerprint: Buffer;
    kid: KID;
    trackDiff?: TrackDiff;
    breaksTracking: boolean;
    sigId: SigID;
};
export declare type RevokedProof = {
    proof: RemoteProof;
    diff: TrackDiff;
    snoozed: boolean;
};
export declare type CheckResult = {
    proofResult: ProofResult;
    time: Time;
    freshness: CheckResultFreshness;
};
export declare type UserCard = {
    following: number;
    followers: number;
    uid: UID;
    fullName: string;
    location: string;
    bio: string;
    bioDecorated: string;
    website: string;
    twitter: string;
    youFollowThem: boolean;
    theyFollowYou: boolean;
    teamShowcase: UserTeamShowcase[] | null;
    registeredForAirdrop: boolean;
    stellarHidden: boolean;
    blocked: boolean;
    hidFromFollowers: boolean;
};
export declare type ServiceStatus = {
    version: string;
    label: string;
    pid: string;
    lastExitStatus: string;
    bundleVersion: string;
    installStatus: InstallStatus;
    installAction: InstallAction;
    status: Status;
};
export declare type FuseStatus = {
    version: string;
    bundleVersion: string;
    kextId: string;
    path: string;
    kextStarted: boolean;
    installStatus: InstallStatus;
    installAction: InstallAction;
    mountInfos: FuseMountInfo[] | null;
    status: Status;
};
export declare type ComponentResult = {
    name: string;
    status: Status;
    exitCode: number;
};
export declare type FSFolderWriterEditHistory = {
    writerName: string;
    edits: FSFolderWriterEdit[] | null;
    deletes: FSFolderWriterEdit[] | null;
};
export declare type FolderSyncStatus = {
    localDiskBytesAvailable: number;
    localDiskBytesTotal: number;
    prefetchStatus: PrefetchStatus;
    prefetchProgress: PrefetchProgress;
    storedBytesTotal: number;
    outOfSyncSpace: boolean;
};
export declare type MerkleRootAndTime = {
    root: MerkleRootV2;
    updateTime: Time;
    fetchTime: Time;
};
export declare type MetadataResponse = {
    folderId: string;
    mdBlocks: MDBlock[] | null;
};
export declare type BadgeState = {
    newTlfs: number;
    rekeysNeeded: number;
    newFollowers: number;
    inboxVers: number;
    homeTodoItems: number;
    unverifiedEmails: number;
    unverifiedPhones: number;
    newDevices: DeviceID[] | null;
    revokedDevices: DeviceID[] | null;
    conversations: BadgeConversationInfo[] | null;
    newGitRepoGlobalUniqueIDs: string[] | null;
    newTeams: TeamID[] | null;
    deletedTeams: DeletedTeamInfo[] | null;
    newTeamAccessRequests: TeamID[] | null;
    teamsWithResetUsers: TeamMemberOutReset[] | null;
    unreadWalletAccounts: WalletAccountInfo[] | null;
    resetState: ResetState;
};
export declare type RuntimeStats = {
    processStats: ProcessRuntimeStats[] | null;
    dbStats: DbStats[] | null;
    convLoaderActive: boolean;
    selectiveSyncActive: boolean;
};
export declare type GUIEntryArg = {
    windowTitle: string;
    prompt: string;
    username: string;
    submitLabel: string;
    cancelLabel: string;
    retryLabel: string;
    type: PassphraseType;
    features: GUIEntryFeatures;
};
/**
 * PGPSigVerification is returned by pgpDecrypt and pgpVerify with information
 *     about the signature verification. If isSigned is false, there was no
 *     signature, and the rest of the fields should be ignored.
 */
export declare type PGPSigVerification = {
    isSigned: boolean;
    verified: boolean;
    signer: User;
    signKey: PublicKey;
};
export declare type Process = {
    pid: string;
    command: string;
    fileDescriptors: FileDescriptor[] | null;
};
export declare type ExternalServiceConfig = {
    schemaVersion: number;
    display?: ServiceDisplayConfig;
    config?: ParamProofServiceConfig;
};
export declare type ProblemTLF = {
    tlf: TLF;
    score: number;
    solutionKids: KID[] | null;
};
export declare type RevokeWarning = {
    endangeredTlFs: TLF[] | null;
};
export declare type ResetLink = {
    ctime: UnixTime;
    merkleRoot: ResetMerkleRoot;
    prev: ResetPrev;
    resetSeqno: Seqno;
    type: ResetType;
    uid: UID;
};
export declare type ResetSummary = {
    ctime: UnixTime;
    merkleRoot: ResetMerkleRoot;
    resetSeqno: Seqno;
    eldestSeqno: Seqno;
    type: ResetType;
};
export declare type SaltpackEncryptedMessageInfo = {
    devices: Device[] | null;
    numAnonReceivers: number;
    receiverIsAnon: boolean;
    sender: SaltpackSender;
};
export declare type SaltpackVerifyResult = {
    signingKid: KID;
    sender: SaltpackSender;
    plaintext: string;
    verified: boolean;
};
export declare type SaltpackVerifyFileResult = {
    signingKid: KID;
    sender: SaltpackSender;
    verifiedFilename: string;
    verified: boolean;
};
export declare type KBFSArchivedPath = {
    path: string;
    archivedParam: KBFSArchivedParam;
    identifyBehavior?: TLFIdentifyBehavior;
};
export declare type Dirent = {
    time: Time;
    size: number;
    name: string;
    direntType: DirentType;
    lastWriterUnverified: User;
    writable: boolean;
    prefetchStatus: PrefetchStatus;
    prefetchProgress: PrefetchProgress;
    symlinkTarget: string;
};
export declare type SimpleFSStats = {
    processStats: ProcessRuntimeStats;
    blockCacheDbStats: string[] | null;
    syncCacheDbStats: string[] | null;
    runtimeDbStats: DbStats[] | null;
};
export declare type DownloadInfo = {
    downloadId: string;
    path: KBFSPath;
    filename: string;
    startTime: Time;
    isRegularDownload: boolean;
};
export declare type DownloadStatus = {
    regularDownloadIDs: string[] | null;
    states: DownloadState[] | null;
};
export declare type TeambotKeyBoxed = {
    box: string;
    metadata: TeambotKeyMetadata;
};
export declare type TeambotKey = {
    seed: Bytes32;
    metadata: TeambotKeyMetadata;
};
export declare type PerTeamKeyAndCheck = {
    ptk: PerTeamKey;
    check: PerTeamSeedCheckPostImage;
};
export declare type PerTeamKeySeedItem = {
    seed: PerTeamKeySeed;
    generation: PerTeamKeyGeneration;
    seqno: Seqno;
    check?: PerTeamSeedCheck;
};
export declare type TeamMembers = {
    owners: UserVersion[] | null;
    admins: UserVersion[] | null;
    writers: UserVersion[] | null;
    readers: UserVersion[] | null;
    bots: UserVersion[] | null;
    restrictedBots: UserVersion[] | null;
};
export declare type TeamMemberDetails = {
    uv: UserVersion;
    username: string;
    fullName: FullName;
    needsPuk: boolean;
    status: TeamMemberStatus;
};
export declare type TeamChangeReq = {
    owners: UserVersion[] | null;
    admins: UserVersion[] | null;
    writers: UserVersion[] | null;
    readers: UserVersion[] | null;
    bots: UserVersion[] | null;
    restrictedBots: {
        [key: string]: TeamBotSettings;
    };
    none: UserVersion[] | null;
    completedInvites: {
        [key: string]: UserVersionPercentForm;
    };
};
export declare type TeamPlusApplicationKeys = {
    id: TeamID;
    name: string;
    implicit: boolean;
    public: boolean;
    application: TeamApplication;
    writers: UserVersion[] | null;
    onlyReaders: UserVersion[] | null;
    onlyRestrictedBots: UserVersion[] | null;
    applicationKeys: TeamApplicationKey[] | null;
};
export declare type LinkTripleAndTime = {
    triple: LinkTriple;
    time: Time;
};
export declare type FastTeamSigChainState = {
    id: TeamID;
    public: boolean;
    rootAncestor: TeamName;
    nameDepth: number;
    last?: LinkTriple;
    perTeamKeys: {
        [key: string]: PerTeamKey;
    };
    perTeamKeySeedsVerified: {
        [key: string]: PerTeamKeySeed;
    };
    downPointers: {
        [key: string]: DownPointer;
    };
    lastUpPointer?: UpPointer;
    perTeamKeyCTime: UnixTime;
    linkIDs: {
        [key: string]: LinkID;
    };
    merkleInfo: {
        [key: string]: MerkleRootV2;
    };
};
export declare type AuditHistory = {
    id: TeamID;
    public: boolean;
    priorMerkleSeqno: Seqno;
    version: AuditVersion;
    audits: Audit[] | null;
    preProbes: {
        [key: string]: Probe;
    };
    postProbes: {
        [key: string]: Probe;
    };
    tails: {
        [key: string]: LinkID;
    };
    hiddenTails: {
        [key: string]: LinkID;
    };
    skipUntil: Time;
};
export declare type TeamInvite = {
    role: TeamRole;
    id: TeamInviteID;
    type: TeamInviteType;
    name: TeamInviteName;
    inviter: UserVersion;
};
export declare type AnnotatedTeamInvite = {
    role: TeamRole;
    id: TeamInviteID;
    type: TeamInviteType;
    name: TeamInviteName;
    uv: UserVersion;
    inviter: UserVersion;
    inviterUsername: string;
    teamName: string;
    status: TeamMemberStatus;
};
export declare type SubteamLogPoint = {
    name: TeamName;
    seqno: Seqno;
};
export declare type TeamCLKRMsg = {
    teamId: TeamID;
    generation: PerTeamKeyGeneration;
    score: number;
    resetUsers: TeamCLKRResetUser[] | null;
};
export declare type TeamMemberOutFromReset = {
    teamId: TeamID;
    teamName: string;
    resetUser: TeamResetUser;
};
export declare type TeamSBSMsg = {
    teamId: TeamID;
    score: number;
    invitees: TeamInvitee[] | null;
};
export declare type TeamOpenReqMsg = {
    teamId: TeamID;
    tars: TeamAccessRequest[] | null;
};
export declare type SeitanKeyAndLabelVersion1 = {
    i: SeitanIKey;
    l: SeitanKeyLabel;
};
export declare type SeitanKeyAndLabelVersion2 = {
    k: SeitanPubKey;
    l: SeitanKeyLabel;
};
export declare type TeamSeitanMsg = {
    teamId: TeamID;
    seitans: TeamSeitanRequest[] | null;
};
export declare type TeamOpenSweepMsg = {
    teamId: TeamID;
    resetUsers: TeamCLKRResetUser[] | null;
};
/**
 * * TeamRefreshData are needed or wanted data requirements that, if unmet, will cause
 *    * a refresh of the cache.
 */
export declare type TeamRefreshers = {
    needKeyGeneration: PerTeamKeyGeneration;
    needApplicationsAtGenerations: {
        [key: string]: TeamApplication[] | null;
    };
    needApplicationsAtGenerationsWithKbfs: {
        [key: string]: TeamApplication[] | null;
    };
    wantMembers: UserVersion[] | null;
    wantMembersRole: TeamRole;
    needKbfsKeyGeneration: TeamKBFSKeyRefresher;
};
export declare type FastTeamLoadArg = {
    id: TeamID;
    public: boolean;
    assertTeamName?: TeamName;
    applications: TeamApplication[] | null;
    keyGenerationsNeeded: PerTeamKeyGeneration[] | null;
    needLatestKey: boolean;
    forceRefresh: boolean;
    hiddenChainIsOptional: boolean;
};
export declare type FastTeamLoadRes = {
    name: TeamName;
    applicationKeys: TeamApplicationKey[] | null;
};
export declare type MemberInfo = {
    uid: UID;
    teamId: TeamID;
    fqName: string;
    isImplicitTeam: boolean;
    isOpenTeam: boolean;
    role: TeamRole;
    implicit?: ImplicitRole;
    memberCount: number;
    allowProfilePromote: boolean;
    isMemberShowcased: boolean;
};
export declare type AnnotatedMemberInfo = {
    uid: UID;
    teamId: TeamID;
    username: string;
    fullName: string;
    fqName: string;
    isImplicitTeam: boolean;
    implicitTeamDisplayName: string;
    isOpenTeam: boolean;
    role: TeamRole;
    implicit?: ImplicitRole;
    needsPuk: boolean;
    memberCount: number;
    memberEldestSeqno: Seqno;
    allowProfilePromote: boolean;
    isMemberShowcased: boolean;
    status: TeamMemberStatus;
};
export declare type TeamAddMemberResult = {
    invited: boolean;
    user?: User;
    chatSending: boolean;
};
export declare type TeamAddMembersResult = {
    notAdded: User[] | null;
};
export declare type TeamTreeEntry = {
    name: TeamName;
    admin: boolean;
};
export declare type SubteamListEntry = {
    name: TeamName;
    teamId: TeamID;
    memberCount: number;
};
export declare type TeamAndMemberShowcase = {
    teamShowcase: TeamShowcase;
    isMemberShowcased: boolean;
};
export declare type ImplicitTeamUserSet = {
    keybaseUsers: string[] | null;
    unresolvedUsers: SocialAssertion[] | null;
};
export declare type TeamProfileAddEntry = {
    teamId: TeamID;
    teamName: TeamName;
    open: boolean;
    disabledReason: string;
};
export declare type TeamRoleMapAndVersion = {
    teams: {
        [key: string]: TeamRolePair;
    };
    userTeamVersion: UserTeamVersion;
};
export declare type MerkleTreeLocation = {
    leaf: UserOrTeamID;
    loc: SigChainLocation;
};
export declare type SignatureMetadata = {
    signingKid: KID;
    prevMerkleRootSigned: MerkleRootV2;
    firstAppearedUnverified: Seqno;
    time: Time;
    sigChainLocation: SigChainLocation;
};
export declare type Proofs = {
    social: TrackProof[] | null;
    web: WebProof[] | null;
    publicKeys: PublicKey[] | null;
};
export declare type UserSettings = {
    emails: Email[] | null;
    phoneNumbers: UserPhoneNumber[] | null;
};
export declare type UserSummary2Set = {
    users: UserSummary2[] | null;
    time: Time;
    version: number;
};
export declare type ProofSuggestion = {
    key: string;
    belowFold: boolean;
    profileText: string;
    profileIcon: SizedImage[] | null;
    profileIconWhite: SizedImage[] | null;
    pickerText: string;
    pickerSubtext: string;
    pickerIcon: SizedImage[] | null;
    metas: Identify3RowMeta[] | null;
};
export declare type NextMerkleRootRes = {
    res?: MerkleRootV2;
};
export declare type UserBlockedBody = {
    blocks: UserBlockedRow[] | null;
    blockerUid: UID;
    blockerUsername: string;
};
export declare type UserBlockedSummary = {
    blocker: string;
    blocks: {
        [key: string]: UserBlockState[] | null;
    };
};
export declare type BlockReferenceCount = {
    ref: BlockReference;
    liveCount: number;
};
export declare type ReferenceCountRes = {
    counts: BlockIdCount[] | null;
};
export declare type UserPlusKeys = {
    uid: UID;
    username: string;
    eldestSeqno: Seqno;
    status: StatusCode;
    deviceKeys: PublicKey[] | null;
    revokedDeviceKeys: RevokedKey[] | null;
    pgpKeyCount: number;
    uvv: UserVersionVector;
    deletedDeviceKeys: PublicKey[] | null;
    perUserKeys: PerUserKey[] | null;
    resets: ResetSummary[] | null;
};
export declare type ExtendedStatus = {
    standalone: boolean;
    passphraseStreamCached: boolean;
    tsecCached: boolean;
    deviceSigKeyCached: boolean;
    deviceEncKeyCached: boolean;
    paperSigKeyCached: boolean;
    paperEncKeyCached: boolean;
    storedSecret: boolean;
    secretPromptSkip: boolean;
    rememberPassphrase: boolean;
    device?: Device;
    deviceErr?: LoadDeviceErr;
    logDir: string;
    session?: SessionStatus;
    defaultUsername: string;
    provisionedUsernames: string[] | null;
    configuredAccounts: ConfiguredAccount[] | null;
    clients: ClientStatus[] | null;
    deviceEkNames: string[] | null;
    platformInfo: PlatformInfo;
    defaultDeviceId: DeviceID;
    localDbStats: string[] | null;
    localChatDbStats: string[] | null;
    localBlockCacheDbStats: string[] | null;
    localSyncCacheDbStats: string[] | null;
    cacheDirSizeInfo: DirSizeInfo[] | null;
    uiRouterMapping: {
        [key: string]: number;
    };
};
export declare type ContactListResolutionResult = {
    newlyResolved: ProcessedContact[] | null;
    resolved: ProcessedContact[] | null;
};
export declare type TeamEphemeralKey = {
    keyType: TeamEphemeralKeyType.TEAM;
    TEAM: TeamEk;
} | {
    keyType: TeamEphemeralKeyType.TEAMBOT;
    TEAMBOT: TeambotEk;
} | {
    keyType: Exclude<TeamEphemeralKeyType, TeamEphemeralKeyType.TEAM | TeamEphemeralKeyType.TEAMBOT>;
};
export declare type TeamEphemeralKeyBoxed = {
    keyType: TeamEphemeralKeyType.TEAM;
    TEAM: TeamEkBoxed;
} | {
    keyType: TeamEphemeralKeyType.TEAMBOT;
    TEAMBOT: TeambotEkBoxed;
} | {
    keyType: Exclude<TeamEphemeralKeyType, TeamEphemeralKeyType.TEAM | TeamEphemeralKeyType.TEAMBOT>;
};
export declare type GitLocalMetadata = {
    repoName: GitRepoName;
    refs: GitRefMetadata[] | null;
    pushType: GitPushType;
    previousRepoName: GitRepoName;
};
export declare type HomeScreenItemDataExt = {
    t: HomeScreenItemType.TODO;
    TODO: HomeScreenTodoExt;
} | {
    t: Exclude<HomeScreenItemType, HomeScreenItemType.TODO>;
};
export declare type Identity = {
    status?: Status;
    whenLastTracked: Time;
    proofs: IdentifyRow[] | null;
    cryptocurrency: Cryptocurrency[] | null;
    revoked: TrackDiff[] | null;
    revokedDetails: RevokedProof[] | null;
    breaksTracking: boolean;
};
export declare type LinkCheckResult = {
    proofId: number;
    proofResult: ProofResult;
    snoozedResult: ProofResult;
    torWarning: boolean;
    tmpTrackExpireTime: Time;
    cached?: CheckResult;
    diff?: TrackDiff;
    remoteDiff?: TrackDiff;
    hint?: SigHint;
    breaksTracking: boolean;
};
export declare type ServicesStatus = {
    service: ServiceStatus[] | null;
    kbfs: ServiceStatus[] | null;
    updater: ServiceStatus[] | null;
};
export declare type InstallResult = {
    componentResults: ComponentResult[] | null;
    status: Status;
    fatal: boolean;
};
export declare type UninstallResult = {
    componentResults: ComponentResult[] | null;
    status: Status;
};
/**
 * ProblemSet is for a particular (user,kid) that initiated a rekey problem.
 *    This problem consists of one or more problem TLFs, which are individually scored
 *    and have attendant solutions --- devices that if they came online can rekey and
 *    solve the ProblemTLF.
 */
export declare type ProblemSet = {
    user: User;
    kid: KID;
    tlfs: ProblemTLF[] | null;
};
export declare type SaltpackPlaintextResult = {
    info: SaltpackEncryptedMessageInfo;
    plaintext: string;
    signed: boolean;
};
export declare type SaltpackFileResult = {
    info: SaltpackEncryptedMessageInfo;
    decryptedFilename: string;
    signed: boolean;
};
export declare type Path = {
    PathType: PathType.LOCAL;
    LOCAL: string;
} | {
    PathType: PathType.KBFS;
    KBFS: KBFSPath;
} | {
    PathType: PathType.KBFS_ARCHIVED;
    KBFS_ARCHIVED: KBFSArchivedPath;
} | {
    PathType: Exclude<PathType, PathType.LOCAL | PathType.KBFS | PathType.KBFS_ARCHIVED>;
};
export declare type DirentWithRevision = {
    entry: Dirent;
    revision: KBFSRevision;
};
export declare type SimpleFSListResult = {
    entries: Dirent[] | null;
    progress: Progress;
};
export declare type FolderSyncConfigAndStatus = {
    config: FolderSyncConfig;
    status: FolderSyncStatus;
};
export declare type TeamMembersDetails = {
    owners: TeamMemberDetails[] | null;
    admins: TeamMemberDetails[] | null;
    writers: TeamMemberDetails[] | null;
    readers: TeamMemberDetails[] | null;
    bots: TeamMemberDetails[] | null;
    restrictedBots: TeamMemberDetails[] | null;
};
export declare type FastTeamData = {
    frozen: boolean;
    subversion: number;
    tombstoned: boolean;
    name: TeamName;
    chain: FastTeamSigChainState;
    perTeamKeySeedsUnverified: {
        [key: string]: PerTeamKeySeed;
    };
    maxContinuousPtkGeneration: PerTeamKeyGeneration;
    seedChecks: {
        [key: string]: PerTeamSeedCheck;
    };
    latestKeyGeneration: PerTeamKeyGeneration;
    readerKeyMasks: {
        [key: string]: {
            [key: string]: MaskB64;
        };
    };
    latestSeqnoHint: Seqno;
    cachedAt: Time;
    loadedLatest: boolean;
};
export declare type HiddenTeamChainRatchetSet = {
    ratchets: {
        [key: string]: LinkTripleAndTime;
    };
};
export declare type HiddenTeamChainLink = {
    m: MerkleRootV2;
    p: LinkTriple;
    s: Signer;
    k: {
        [key: string]: PerTeamKeyAndCheck;
    };
};
export declare type UserLogPoint = {
    role: TeamRole;
    sigMeta: SignatureMetadata;
};
export declare type SeitanKeyAndLabel = {
    v: SeitanKeyAndLabelVersion.V1;
    V1: SeitanKeyAndLabelVersion1;
} | {
    v: SeitanKeyAndLabelVersion.V2;
    V2: SeitanKeyAndLabelVersion2;
} | {
    v: Exclude<SeitanKeyAndLabelVersion, SeitanKeyAndLabelVersion.V1 | SeitanKeyAndLabelVersion.V2>;
};
export declare type LoadTeamArg = {
    id: TeamID;
    name: string;
    public: boolean;
    needAdmin: boolean;
    refreshUidMapper: boolean;
    refreshers: TeamRefreshers;
    forceFullReload: boolean;
    forceRepoll: boolean;
    staleOk: boolean;
    allowNameLookupBurstCache: boolean;
    skipNeedHiddenRotateCheck: boolean;
    auditMode: AuditMode;
};
export declare type TeamList = {
    teams: MemberInfo[] | null;
};
export declare type AnnotatedTeamList = {
    teams: AnnotatedMemberInfo[] | null;
    annotatedActiveInvites: {
        [key: string]: AnnotatedTeamInvite;
    };
};
export declare type TeamTreeResult = {
    entries: TeamTreeEntry[] | null;
};
export declare type SubteamListResult = {
    entries: SubteamListEntry[] | null;
};
/**
 * * iTeams
 */
export declare type ImplicitTeamDisplayName = {
    isPublic: boolean;
    writers: ImplicitTeamUserSet;
    readers: ImplicitTeamUserSet;
    conflictInfo?: ImplicitTeamConflictInfo;
};
export declare type TeamRoleMapStored = {
    data: TeamRoleMapAndVersion;
    cachedAt: Time;
};
export declare type AnnotatedTeamMemberDetails = {
    details: TeamMemberDetails;
    role: TeamRole;
};
export declare type PublicKeyV2Base = {
    kid: KID;
    isSibkey: boolean;
    isEldest: boolean;
    cTime: Time;
    eTime: Time;
    provisioning: SignatureMetadata;
    revocation?: SignatureMetadata;
};
export declare type UserSummary = {
    uid: UID;
    username: string;
    thumbnail: string;
    idVersion: number;
    fullName: string;
    bio: string;
    proofs: Proofs;
    sigIdDisplay: string;
    trackTime: Time;
};
export declare type ProofSuggestionsRes = {
    suggestions: ProofSuggestion[] | null;
    showMore: boolean;
};
export declare type APIUserSearchResult = {
    score: number;
    keybase?: APIUserKeybaseResult;
    service?: APIUserServiceResult;
    contact?: ProcessedContact;
    imptofu?: ImpTofuSearchResult;
    servicesSummary: {
        [key: string]: APIUserServiceSummary;
    };
    rawScore: number;
};
export declare type NonUserDetails = {
    isNonUser: boolean;
    assertionValue: string;
    assertionKey: string;
    description: string;
    contact?: ProcessedContact;
    service?: APIUserServiceResult;
    siteIcon: SizedImage[] | null;
    siteIconFull: SizedImage[] | null;
    siteIconWhite: SizedImage[] | null;
};
export declare type DowngradeReferenceRes = {
    completed: BlockReferenceCount[] | null;
    failed: BlockReference;
};
export declare type UserPlusAllKeys = {
    base: UserPlusKeys;
    pgpKeys: PublicKey[] | null;
    remoteTracks: RemoteTrack[] | null;
};
export declare type FullStatus = {
    username: string;
    configPath: string;
    curStatus: CurrentStatus;
    extStatus: ExtendedStatus;
    client: KbClientStatus;
    service: KbServiceStatus;
    kbfs: KBFSStatus;
    desktop: DesktopStatus;
    updater: UpdaterStatus;
    start: StartStatus;
    git: GitStatus;
};
export declare type FolderNormalView = {
    resolvingConflict: boolean;
    stuckInConflict: boolean;
    localViews: Path[] | null;
};
export declare type FolderConflictManualResolvingLocalView = {
    normalView: Path;
};
export declare type GitRepoInfo = {
    folder: FolderHandle;
    repoId: RepoID;
    localMetadata: GitLocalMetadata;
    serverMetadata: GitServerMetadata;
    repoUrl: string;
    globalUniqueId: string;
    canDelete: boolean;
    teamRepoSettings?: GitTeamRepoSettings;
};
export declare type HomeScreenPeopleNotificationFollowed = {
    followTime: Time;
    followedBack: boolean;
    user: UserSummary;
};
export declare type IdentifyProofBreak = {
    remoteProof: RemoteProof;
    lcr: LinkCheckResult;
};
export declare type ProblemSetDevices = {
    problemSet: ProblemSet;
    devices: Device[] | null;
};
export declare type ListArgs = {
    opId: OpID;
    path: Path;
    filter: ListFilter;
};
export declare type ListToDepthArgs = {
    opId: OpID;
    path: Path;
    filter: ListFilter;
    depth: number;
};
export declare type RemoveArgs = {
    opId: OpID;
    path: Path;
    recursive: boolean;
};
export declare type ReadArgs = {
    opId: OpID;
    path: Path;
    offset: number;
    size: number;
};
export declare type WriteArgs = {
    opId: OpID;
    path: Path;
    offset: number;
};
export declare type CopyArgs = {
    opId: OpID;
    src: Path;
    dest: Path;
};
export declare type MoveArgs = {
    opId: OpID;
    src: Path;
    dest: Path;
};
export declare type GetRevisionsArgs = {
    opId: OpID;
    path: Path;
    spanType: RevisionSpanType;
};
export declare type GetRevisionsResult = {
    revisions: DirentWithRevision[] | null;
    progress: Progress;
};
export declare type TeamDetails = {
    name: string;
    members: TeamMembersDetails;
    keyGeneration: PerTeamKeyGeneration;
    annotatedActiveInvites: {
        [key: string]: AnnotatedTeamInvite;
    };
    settings: TeamSettings;
    showcase: TeamShowcase;
};
export declare type HiddenTeamChain = {
    id: TeamID;
    subversion: number;
    public: boolean;
    frozen: boolean;
    tombstoned: boolean;
    last: Seqno;
    lastFull: Seqno;
    latestSeqnoHint: Seqno;
    lastCommittedSeqno: Seqno;
    linkReceiptTimes: {
        [key: string]: Time;
    };
    lastPerTeamKeys: {
        [key: string]: Seqno;
    };
    outer: {
        [key: string]: LinkID;
    };
    inner: {
        [key: string]: HiddenTeamChainLink;
    };
    readerPerTeamKeys: {
        [key: string]: Seqno;
    };
    ratchetSet: HiddenTeamChainRatchetSet;
    cachedAt: Time;
    needRotate: boolean;
    merkleRoots: {
        [key: string]: MerkleRootV2;
    };
};
export declare type TeamSigChainState = {
    reader: UserVersion;
    id: TeamID;
    implicit: boolean;
    public: boolean;
    rootAncestor: TeamName;
    nameDepth: number;
    nameLog: TeamNameLogPoint[] | null;
    lastSeqno: Seqno;
    lastLinkId: LinkID;
    lastHighSeqno: Seqno;
    lastHighLinkId: LinkID;
    parentId?: TeamID;
    userLog: {
        [key: string]: UserLogPoint[] | null;
    };
    subteamLog: {
        [key: string]: SubteamLogPoint[] | null;
    };
    perTeamKeys: {
        [key: string]: PerTeamKey;
    };
    maxPerTeamKeyGeneration: PerTeamKeyGeneration;
    perTeamKeyCTime: UnixTime;
    linkIDs: {
        [key: string]: LinkID;
    };
    stubbedLinks: {
        [key: string]: boolean;
    };
    activeInvites: {
        [key: string]: TeamInvite;
    };
    obsoleteInvites: {
        [key: string]: TeamInvite;
    };
    open: boolean;
    openTeamJoinAs: TeamRole;
    bots: {
        [key: string]: TeamBotSettings;
    };
    tlfIDs: TLFID[] | null;
    tlfLegacyUpgrade: {
        [key: string]: TeamLegacyTLFUpgradeChainInfo;
    };
    headMerkle?: MerkleRootV2;
    merkleRoots: {
        [key: string]: MerkleRootV2;
    };
};
export declare type LookupImplicitTeamRes = {
    teamId: TeamID;
    name: TeamName;
    displayName: ImplicitTeamDisplayName;
    tlfId: TLFID;
};
export declare type AnnotatedTeam = {
    teamId: TeamID;
    name: string;
    transitiveSubteamsUnverified: SubteamListResult;
    members: AnnotatedTeamMemberDetails[] | null;
    invites: AnnotatedTeamInvite[] | null;
    joinRequests: TeamJoinRequest[] | null;
    userIsShowcasing: boolean;
    tarsDisabled: boolean;
    settings: TeamSettings;
    showcase: TeamShowcase;
};
export declare type PublicKeyV2NaCl = {
    base: PublicKeyV2Base;
    parent?: KID;
    deviceId: DeviceID;
    deviceDescription: string;
    deviceType: string;
};
export declare type PublicKeyV2PGPSummary = {
    base: PublicKeyV2Base;
    fingerprint: PGPFingerprint;
    identities: PGPIdentity[] | null;
};
export declare type ConflictState = {
    conflictStateType: ConflictStateType.NormalView;
    NormalView: FolderNormalView;
} | {
    conflictStateType: ConflictStateType.ManualResolvingLocalView;
    ManualResolvingLocalView: FolderConflictManualResolvingLocalView;
} | {
    conflictStateType: Exclude<ConflictStateType, ConflictStateType.NormalView | ConflictStateType.ManualResolvingLocalView>;
};
export declare type GitRepoResult = {
    state: GitRepoResultState.ERR;
    ERR: string;
} | {
    state: GitRepoResultState.OK;
    OK: GitRepoInfo;
} | {
    state: Exclude<GitRepoResultState, GitRepoResultState.ERR | GitRepoResultState.OK>;
};
export declare type HomeScreenPeopleNotificationFollowedMulti = {
    followers: HomeScreenPeopleNotificationFollowed[] | null;
    numOthers: number;
};
export declare type IdentifyTrackBreaks = {
    keys: IdentifyKey[] | null;
    proofs: IdentifyProofBreak[] | null;
};
export declare type OpDescription = {
    asyncOp: AsyncOps.LIST;
    LIST: ListArgs;
} | {
    asyncOp: AsyncOps.LIST_RECURSIVE;
    LIST_RECURSIVE: ListArgs;
} | {
    asyncOp: AsyncOps.LIST_RECURSIVE_TO_DEPTH;
    LIST_RECURSIVE_TO_DEPTH: ListToDepthArgs;
} | {
    asyncOp: AsyncOps.READ;
    READ: ReadArgs;
} | {
    asyncOp: AsyncOps.WRITE;
    WRITE: WriteArgs;
} | {
    asyncOp: AsyncOps.COPY;
    COPY: CopyArgs;
} | {
    asyncOp: AsyncOps.MOVE;
    MOVE: MoveArgs;
} | {
    asyncOp: AsyncOps.REMOVE;
    REMOVE: RemoveArgs;
} | {
    asyncOp: AsyncOps.GET_REVISIONS;
    GET_REVISIONS: GetRevisionsArgs;
} | {
    asyncOp: Exclude<AsyncOps, AsyncOps.LIST | AsyncOps.LIST_RECURSIVE | AsyncOps.LIST_RECURSIVE_TO_DEPTH | AsyncOps.READ | AsyncOps.WRITE | AsyncOps.COPY | AsyncOps.MOVE | AsyncOps.REMOVE | AsyncOps.GET_REVISIONS>;
};
export declare type TeamData = {
    v: number;
    frozen: boolean;
    tombstoned: boolean;
    secretless: boolean;
    name: TeamName;
    chain: TeamSigChainState;
    perTeamKeySeedsUnverified: {
        [key: string]: PerTeamKeySeedItem;
    };
    readerKeyMasks: {
        [key: string]: {
            [key: string]: MaskB64;
        };
    };
    latestSeqnoHint: Seqno;
    cachedAt: Time;
    tlfCryptKeys: {
        [key: string]: CryptKey[] | null;
    };
};
export declare type TeamDebugRes = {
    chain: TeamSigChainState;
};
export declare type PublicKeyV2 = {
    keyType: KeyType.NACL;
    NACL: PublicKeyV2NaCl;
} | {
    keyType: KeyType.PGP;
    PGP: PublicKeyV2PGPSummary;
} | {
    keyType: Exclude<KeyType, KeyType.NACL | KeyType.PGP>;
};
export declare type UserPlusKeysV2 = {
    uid: UID;
    username: string;
    eldestSeqno: Seqno;
    status: StatusCode;
    perUserKeys: PerUserKey[] | null;
    deviceKeys: {
        [key: string]: PublicKeyV2NaCl;
    };
    pgpKeys: {
        [key: string]: PublicKeyV2PGPSummary;
    };
    stellarAccountId?: string;
    remoteTracks: {
        [key: string]: RemoteTrack;
    };
    reset?: ResetSummary;
    unstubbed: boolean;
};
export declare type UPKLiteV1 = {
    uid: UID;
    username: string;
    eldestSeqno: Seqno;
    status: StatusCode;
    deviceKeys: {
        [key: string]: PublicKeyV2NaCl;
    };
    reset?: ResetSummary;
};
/**
 * Folder represents a favorite top-level folder in kbfs.
 *     This type is likely to change significantly as all the various parts are
 *     connected and tested.
 */
export declare type Folder = {
    name: string;
    private: boolean;
    created: boolean;
    folderType: FolderType;
    teamId?: TeamID;
    resetMembers: User[] | null;
    mtime?: Time;
    conflictState?: ConflictState;
    syncConfig?: FolderSyncConfig;
};
export declare type HomeScreenPeopleNotification = {
    t: HomeScreenPeopleNotificationType.FOLLOWED;
    FOLLOWED: HomeScreenPeopleNotificationFollowed;
} | {
    t: HomeScreenPeopleNotificationType.FOLLOWED_MULTI;
    FOLLOWED_MULTI: HomeScreenPeopleNotificationFollowedMulti;
} | {
    t: HomeScreenPeopleNotificationType.CONTACT;
    CONTACT: HomeScreenPeopleNotificationContact;
} | {
    t: HomeScreenPeopleNotificationType.CONTACT_MULTI;
    CONTACT_MULTI: HomeScreenPeopleNotificationContactMulti;
} | {
    t: Exclude<HomeScreenPeopleNotificationType, HomeScreenPeopleNotificationType.FOLLOWED | HomeScreenPeopleNotificationType.FOLLOWED_MULTI | HomeScreenPeopleNotificationType.CONTACT | HomeScreenPeopleNotificationType.CONTACT_MULTI>;
};
export declare type Identify2Res = {
    upk: UserPlusKeys;
    identifiedAt: Time;
    trackBreaks?: IdentifyTrackBreaks;
};
export declare type IdentifyLiteRes = {
    ul: UserOrTeamLite;
    trackBreaks?: IdentifyTrackBreaks;
};
export declare type ResolveIdentifyImplicitTeamRes = {
    displayName: string;
    teamId: TeamID;
    writers: UserVersion[] | null;
    trackBreaks: {
        [key: string]: IdentifyTrackBreaks;
    };
    folderId: TLFID;
};
export declare type TLFIdentifyFailure = {
    user: User;
    breaks?: IdentifyTrackBreaks;
};
export declare type UserPlusKeysV2AllIncarnations = {
    current: UserPlusKeysV2;
    pastIncarnations: UserPlusKeysV2[] | null;
    uvv: UserVersionVector;
    seqnoLinkIDs: {
        [key: string]: LinkID;
    };
    minorVersion: UPK2MinorVersion;
    stale: boolean;
};
export declare type UPKLiteV1AllIncarnations = {
    current: UPKLiteV1;
    pastIncarnations: UPKLiteV1[] | null;
    seqnoLinkIDs: {
        [key: string]: LinkID;
    };
    minorVersion: UPKLiteMinorVersion;
};
export declare type FavoritesResult = {
    favoriteFolders: Folder[] | null;
    ignoredFolders: Folder[] | null;
    newFolders: Folder[] | null;
};
export declare type HomeScreenItemData = {
    t: HomeScreenItemType.TODO;
    TODO: HomeScreenTodo;
} | {
    t: HomeScreenItemType.PEOPLE;
    PEOPLE: HomeScreenPeopleNotification;
} | {
    t: HomeScreenItemType.ANNOUNCEMENT;
    ANNOUNCEMENT: HomeScreenAnnouncement;
} | {
    t: Exclude<HomeScreenItemType, HomeScreenItemType.TODO | HomeScreenItemType.PEOPLE | HomeScreenItemType.ANNOUNCEMENT>;
};
export declare type Identify2ResUPK2 = {
    upk: UserPlusKeysV2AllIncarnations;
    identifiedAt: Time;
    trackBreaks?: IdentifyTrackBreaks;
};
export declare type FSEditListRequest = {
    folder: Folder;
    requestId: number;
};
export declare type FSFolderEditHistory = {
    folder: Folder;
    serverTime: Time;
    history: FSFolderWriterEditHistory[] | null;
};
export declare type FolderSyncConfigAndStatusWithFolder = {
    folder: Folder;
    config: FolderSyncConfig;
    status: FolderSyncStatus;
};
export declare type FolderWithFavFlags = {
    folder: Folder;
    isFavorite: boolean;
    isIgnored: boolean;
    isNew: boolean;
};
export declare type TLFBreak = {
    breaks: TLFIdentifyFailure[] | null;
};
/**
 * * What we're storing for each user. At first it was UPAKs, as defined
 *    * in common.avdl. But going forward, we're going to use UserPlusKeysV2AllIncarnations.
 */
export declare type UPAKVersioned = {
    v: UPAKVersion.V1;
    V1: UserPlusAllKeys;
} | {
    v: UPAKVersion.V2;
    V2: UserPlusKeysV2AllIncarnations;
} | {
    v: Exclude<UPAKVersion, UPAKVersion.V1 | UPAKVersion.V2>;
};
export declare type HomeScreenItem = {
    badged: boolean;
    data: HomeScreenItemData;
    dataExt: HomeScreenItemDataExt;
};
export declare type SyncConfigAndStatusRes = {
    folders: FolderSyncConfigAndStatusWithFolder[] | null;
    overallStatus: FolderSyncStatus;
};
export declare type CanonicalTLFNameAndIDWithBreaks = {
    tlfId: TLFID;
    canonicalName: CanonicalTlfName;
    breaks: TLFBreak;
};
export declare type HomeScreen = {
    lastViewed: Time;
    version: number;
    visits: number;
    items: HomeScreenItem[] | null;
    followSuggestions: HomeUserSummary[] | null;
    announcementsVersion: number;
};
export declare type GetTLFCryptKeysRes = {
    nameIdBreaks: CanonicalTLFNameAndIDWithBreaks;
    cryptKeys: CryptKey[] | null;
};
