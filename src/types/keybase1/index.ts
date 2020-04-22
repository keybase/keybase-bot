/*
 * keybase.1
 *
 * Auto-generated to TypeScript types by avdl-compiler v1.4.8 (https://github.com/keybase/node-avdl-compiler)
 * Input files:
 * - ../client/protocol/avdl/keybase1/account.avdl
 * - ../client/protocol/avdl/keybase1/airdrop.avdl
 * - ../client/protocol/avdl/keybase1/apiserver.avdl
 * - ../client/protocol/avdl/keybase1/appstate.avdl
 * - ../client/protocol/avdl/keybase1/audit.avdl
 * - ../client/protocol/avdl/keybase1/avatars.avdl
 * - ../client/protocol/avdl/keybase1/backend_common.avdl
 * - ../client/protocol/avdl/keybase1/badger.avdl
 * - ../client/protocol/avdl/keybase1/block.avdl
 * - ../client/protocol/avdl/keybase1/bot.avdl
 * - ../client/protocol/avdl/keybase1/btc.avdl
 * - ../client/protocol/avdl/keybase1/common.avdl
 * - ../client/protocol/avdl/keybase1/config.avdl
 * - ../client/protocol/avdl/keybase1/constants.avdl
 * - ../client/protocol/avdl/keybase1/contacts.avdl
 * - ../client/protocol/avdl/keybase1/crypto.avdl
 * - ../client/protocol/avdl/keybase1/cryptocurrency.avdl
 * - ../client/protocol/avdl/keybase1/ctl.avdl
 * - ../client/protocol/avdl/keybase1/debugging.avdl
 * - ../client/protocol/avdl/keybase1/delegate_ui_ctl.avdl
 * - ../client/protocol/avdl/keybase1/device.avdl
 * - ../client/protocol/avdl/keybase1/emails.avdl
 * - ../client/protocol/avdl/keybase1/ephemeral.avdl
 * - ../client/protocol/avdl/keybase1/favorite.avdl
 * - ../client/protocol/avdl/keybase1/featured_bot.avdl
 * - ../client/protocol/avdl/keybase1/fs.avdl
 * - ../client/protocol/avdl/keybase1/git.avdl
 * - ../client/protocol/avdl/keybase1/gpg_common.avdl
 * - ../client/protocol/avdl/keybase1/gpg_ui.avdl
 * - ../client/protocol/avdl/keybase1/gregor.avdl
 * - ../client/protocol/avdl/keybase1/gregor_ui.avdl
 * - ../client/protocol/avdl/keybase1/home.avdl
 * - ../client/protocol/avdl/keybase1/home_ui.avdl
 * - ../client/protocol/avdl/keybase1/identify.avdl
 * - ../client/protocol/avdl/keybase1/identify3.avdl
 * - ../client/protocol/avdl/keybase1/identify3_common.avdl
 * - ../client/protocol/avdl/keybase1/identify3_ui.avdl
 * - ../client/protocol/avdl/keybase1/identify_common.avdl
 * - ../client/protocol/avdl/keybase1/identify_ui.avdl
 * - ../client/protocol/avdl/keybase1/implicit_team_migration.avdl
 * - ../client/protocol/avdl/keybase1/incoming-share.avdl
 * - ../client/protocol/avdl/keybase1/install.avdl
 * - ../client/protocol/avdl/keybase1/invite_friends.avdl
 * - ../client/protocol/avdl/keybase1/kbfs.avdl
 * - ../client/protocol/avdl/keybase1/kbfs_common.avdl
 * - ../client/protocol/avdl/keybase1/kbfs_git.avdl
 * - ../client/protocol/avdl/keybase1/kbfsmount.avdl
 * - ../client/protocol/avdl/keybase1/kex2provisionee.avdl
 * - ../client/protocol/avdl/keybase1/kex2provisionee2.avdl
 * - ../client/protocol/avdl/keybase1/kex2provisioner.avdl
 * - ../client/protocol/avdl/keybase1/kvstore.avdl
 * - ../client/protocol/avdl/keybase1/log.avdl
 * - ../client/protocol/avdl/keybase1/log_ui.avdl
 * - ../client/protocol/avdl/keybase1/login.avdl
 * - ../client/protocol/avdl/keybase1/login_ui.avdl
 * - ../client/protocol/avdl/keybase1/logsend.avdl
 * - ../client/protocol/avdl/keybase1/merkle.avdl
 * - ../client/protocol/avdl/keybase1/merkle_store.avdl
 * - ../client/protocol/avdl/keybase1/metadata.avdl
 * - ../client/protocol/avdl/keybase1/metadata_update.avdl
 * - ../client/protocol/avdl/keybase1/network_stats.avdl
 * - ../client/protocol/avdl/keybase1/notify_app.avdl
 * - ../client/protocol/avdl/keybase1/notify_audit.avdl
 * - ../client/protocol/avdl/keybase1/notify_badges.avdl
 * - ../client/protocol/avdl/keybase1/notify_can_user_perform.avdl
 * - ../client/protocol/avdl/keybase1/notify_ctl.avdl
 * - ../client/protocol/avdl/keybase1/notify_device_clone.avdl
 * - ../client/protocol/avdl/keybase1/notify_email.avdl
 * - ../client/protocol/avdl/keybase1/notify_ephemeral.avdl
 * - ../client/protocol/avdl/keybase1/notify_favorites.avdl
 * - ../client/protocol/avdl/keybase1/notify_featuredbots.avdl
 * - ../client/protocol/avdl/keybase1/notify_fs.avdl
 * - ../client/protocol/avdl/keybase1/notify_fs_request.avdl
 * - ../client/protocol/avdl/keybase1/notify_invite_friends.avdl
 * - ../client/protocol/avdl/keybase1/notify_keyfamily.avdl
 * - ../client/protocol/avdl/keybase1/notify_paperkey.avdl
 * - ../client/protocol/avdl/keybase1/notify_pgp.avdl
 * - ../client/protocol/avdl/keybase1/notify_phone.avdl
 * - ../client/protocol/avdl/keybase1/notify_runtimestats.avdl
 * - ../client/protocol/avdl/keybase1/notify_saltpack.avdl
 * - ../client/protocol/avdl/keybase1/notify_service.avdl
 * - ../client/protocol/avdl/keybase1/notify_session.avdl
 * - ../client/protocol/avdl/keybase1/notify_team.avdl
 * - ../client/protocol/avdl/keybase1/notify_teambot.avdl
 * - ../client/protocol/avdl/keybase1/notify_tracking.avdl
 * - ../client/protocol/avdl/keybase1/notify_users.avdl
 * - ../client/protocol/avdl/keybase1/os.avdl
 * - ../client/protocol/avdl/keybase1/paperprovision.avdl
 * - ../client/protocol/avdl/keybase1/passphrase_common.avdl
 * - ../client/protocol/avdl/keybase1/pgp.avdl
 * - ../client/protocol/avdl/keybase1/pgp_ui.avdl
 * - ../client/protocol/avdl/keybase1/phone_numbers.avdl
 * - ../client/protocol/avdl/keybase1/pprof.avdl
 * - ../client/protocol/avdl/keybase1/process.avdl
 * - ../client/protocol/avdl/keybase1/prove.avdl
 * - ../client/protocol/avdl/keybase1/prove_common.avdl
 * - ../client/protocol/avdl/keybase1/prove_ui.avdl
 * - ../client/protocol/avdl/keybase1/provision_ui.avdl
 * - ../client/protocol/avdl/keybase1/quota.avdl
 * - ../client/protocol/avdl/keybase1/reachability.avdl
 * - ../client/protocol/avdl/keybase1/rekey.avdl
 * - ../client/protocol/avdl/keybase1/rekey_ui.avdl
 * - ../client/protocol/avdl/keybase1/reset.avdl
 * - ../client/protocol/avdl/keybase1/revoke.avdl
 * - ../client/protocol/avdl/keybase1/saltpack.avdl
 * - ../client/protocol/avdl/keybase1/saltpack_ui.avdl
 * - ../client/protocol/avdl/keybase1/scanproofs.avdl
 * - ../client/protocol/avdl/keybase1/secret_ui.avdl
 * - ../client/protocol/avdl/keybase1/secretkeys.avdl
 * - ../client/protocol/avdl/keybase1/selfprovision.avdl
 * - ../client/protocol/avdl/keybase1/session.avdl
 * - ../client/protocol/avdl/keybase1/signup.avdl
 * - ../client/protocol/avdl/keybase1/sigs.avdl
 * - ../client/protocol/avdl/keybase1/simple_fs.avdl
 * - ../client/protocol/avdl/keybase1/stream_ui.avdl
 * - ../client/protocol/avdl/keybase1/teambot.avdl
 * - ../client/protocol/avdl/keybase1/teams.avdl
 * - ../client/protocol/avdl/keybase1/teams_ui.avdl
 * - ../client/protocol/avdl/keybase1/teamsearch.avdl
 * - ../client/protocol/avdl/keybase1/test.avdl
 * - ../client/protocol/avdl/keybase1/tlf.avdl
 * - ../client/protocol/avdl/keybase1/tlf_keys.avdl
 * - ../client/protocol/avdl/keybase1/track.avdl
 * - ../client/protocol/avdl/keybase1/ui.avdl
 * - ../client/protocol/avdl/keybase1/upk.avdl
 * - ../client/protocol/avdl/keybase1/user.avdl
 * - ../client/protocol/avdl/keybase1/usersearch.avdl
 * - ../client/protocol/avdl/keybase1/wot.avdl
 */

import * as gregor1 from '../gregor1'

export type HasServerKeysRes = {
  hasServerKeys: boolean
}

export type APIRes = {
  status: string
  body: string
  httpStatus: number
  appStatus: string
}

export enum MobileAppState {
  FOREGROUND = 'foreground',
  BACKGROUND = 'background',
  INACTIVE = 'inactive',
  BACKGROUNDACTIVE = 'backgroundactive',
}

export enum MobileNetworkState {
  NONE = 'none',
  WIFI = 'wifi',
  CELLULAR = 'cellular',
  UNKNOWN = 'unknown',
  NOTAVAILABLE = 'notavailable',
}

export enum BoxAuditAttemptResult {
  FAILURE_RETRYABLE = 'failure_retryable',
  FAILURE_MALICIOUS_SERVER = 'failure_malicious_server',
  OK_VERIFIED = 'ok_verified',
  OK_NOT_ATTEMPTED_ROLE = 'ok_not_attempted_role',
  OK_NOT_ATTEMPTED_OPENTEAM = 'ok_not_attempted_openteam',
  OK_NOT_ATTEMPTED_SUBTEAM = 'ok_not_attempted_subteam',
}

export type AvatarUrl = string

export type AvatarFormat = string

export enum BlockType {
  DATA = 'data',
  MD = 'md',
  GIT = 'git',
}

export type ChallengeInfo = {
  now: number
  challenge: string
}

export enum BlockStatus {
  UNKNOWN = 'unknown',
  LIVE = 'live',
  ARCHIVED = 'archived',
}

export type BlockRefNonce = string | null
export type BlockPingResponse = {}

export type UsageStatRecord = {
  write: number
  archive: number
  read: number
  mdWrite: number
  gitWrite: number
  gitArchive: number
}

export type BotToken = string

export type Time = number

export type UnixTime = number

export type DurationSec = number

export type DurationMsec = number

export type StringKVPair = {
  key: string
  value: string
}

export type UID = string

export type VID = string

export type DeviceID = string

export type SigID = string

export type LeaseID = string

export type KID = string

export type PhoneNumber = string

export type RawPhoneNumber = string

export type LinkID = string

export type BinaryLinkID = Buffer

export type BinaryKID = Buffer

export type TLFID = string

export type TeamID = string

export type UserOrTeamID = string

export type GitRepoName = string

export type HashMeta = Buffer

export enum TeamType {
  NONE = 'none',
  LEGACY = 'legacy',
  MODERN = 'modern',
}

export enum TLFVisibility {
  ANY = 'any',
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export type Seqno = number

export enum SeqType {
  NONE = 'none',
  PUBLIC = 'public',
  PRIVATE = 'private',
  SEMIPRIVATE = 'semiprivate',
  USER_PRIVATE_HIDDEN = 'user_private_hidden',
  TEAM_PRIVATE_HIDDEN = 'team_private_hidden',
}

export type Bytes32 = string | null
export type Text = {
  data: string
  markup: boolean
}

export type PGPIdentity = {
  username: string
  comment: string
  email: string
}

export enum DeviceType {
  DESKTOP = 'desktop',
  MOBILE = 'mobile',
}

export type DeviceTypeV2 = string

export type Stream = {
  fd: number
}

export enum LogLevel {
  NONE = 'none',
  DEBUG = 'debug',
  INFO = 'info',
  NOTICE = 'notice',
  WARN = 'warn',
  ERROR = 'error',
  CRITICAL = 'critical',
  FATAL = 'fatal',
}

export enum ClientType {
  NONE = 'none',
  CLI = 'cli',
  GUI_MAIN = 'gui_main',
  KBFS = 'kbfs',
  GUI_HELPER = 'gui_helper',
}

export type KBFSPathInfo = {
  standardPath: string
  deeplinkPath: string
  platformAfterMountPath: string
}

export type PerUserKeyGeneration = number

export enum UserOrTeamResult {
  USER = 'user',
  TEAM = 'team',
}

export enum MerkleTreeID {
  MASTER = 'master',
  KBFS_PUBLIC = 'kbfs_public',
  KBFS_PRIVATE = 'kbfs_private',
  KBFS_PRIVATETEAM = 'kbfs_privateteam',
}

/**
 * SocialAssertionService is a service that can be used to assert proofs for a
 *     user.
 */
export type SocialAssertionService = string

export type FullName = string

export enum FullNamePackageVersion {
  V0 = 'v0',
  V1 = 'v1',
  V2 = 'v2',
}

export type ImageCropRect = {
  x0: number
  y0: number
  x1: number
  y1: number
}

export enum IdentityVisibility {
  PRIVATE = 'private',
  PUBLIC = 'public',
}

export type SizedImage = {
  path: string
  width: number
}

export enum OfflineAvailability {
  NONE = 'none',
  BEST_EFFORT = 'best_effort',
}

export type UserReacji = {
  name: string
  customAddr?: string
  customAddrNoAnim?: string
}

export enum ReacjiSkinTone {
  NONE = 'none',
  SKINTONE1 = 'skintone1',
  SKINTONE2 = 'skintone2',
  SKINTONE3 = 'skintone3',
  SKINTONE4 = 'skintone4',
  SKINTONE5 = 'skintone5',
}

export enum WotStatusType {
  NONE = 'none',
  PROPOSED = 'proposed',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  REVOKED = 'revoked',
}

export type SessionStatus = {
  sessionFor: string
  loaded: boolean
  cleared: boolean
  saltOnly: boolean
  expired: boolean
}

export type PlatformInfo = {
  os: string
  osVersion: string
  arch: string
  goVersion: string
}

export type LoadDeviceErr = {
  where: string
  desc: string
}

export type DirSizeInfo = {
  numFiles: number
  name: string
  humanSize: string
}

export type KbClientStatus = {
  version: string
}

export type KbServiceStatus = {
  version: string
  running: boolean
  pid: string
  log: string
  ekLog: string
  perfLog: string
}

export type KBFSStatus = {
  version: string
  installedVersion: string
  running: boolean
  pid: string
  log: string
  perfLog: string
  mount: string
}

export type DesktopStatus = {
  version: string
  running: boolean
  log: string
}

export type UpdaterStatus = {
  log: string
}

export type StartStatus = {
  log: string
}

export type GitStatus = {
  log: string
  perfLog: string
}

export type LogSendID = string

export type AllProvisionedUsernames = {
  defaultUsername: string
  provisionedUsernames: string[] | null
  hasProvisionedUser: boolean
}

export enum ForkType {
  NONE = 'none',
  AUTO = 'auto',
  WATCHDOG = 'watchdog',
  LAUNCHD = 'launchd',
  SYSTEMD = 'systemd',
}

export type ConfigValue = {
  isNull: boolean
  b?: boolean
  i?: number
  f?: number
  s?: string
  o?: string
}

export type OutOfDateInfo = {
  upgradeTo: string
  upgradeUri: string
  customMessage: string
  criticalClockSkew: number
}

export enum UpdateInfoStatus {
  UP_TO_DATE = 'up_to_date',
  NEED_UPDATE = 'need_update',
  CRITICALLY_OUT_OF_DATE = 'critically_out_of_date',
}

export enum UpdateInfoStatus2 {
  OK = 'ok',
  SUGGESTED = 'suggested',
  CRITICAL = 'critical',
}

export type UpdateDetails = {
  message: string
}

export enum ProxyType {
  No_Proxy = 'no_proxy',
  HTTP_Connect = 'http_connect',
  Socks = 'socks',
}

export enum StatusCode {
  SCOk = 'scok',
  SCInputError = 'scinputerror',
  SCAssertionParseError = 'scassertionparseerror',
  SCLoginRequired = 'scloginrequired',
  SCBadSession = 'scbadsession',
  SCBadLoginUserNotFound = 'scbadloginusernotfound',
  SCBadLoginPassword = 'scbadloginpassword',
  SCNotFound = 'scnotfound',
  SCThrottleControl = 'scthrottlecontrol',
  SCDeleted = 'scdeleted',
  SCGeneric = 'scgeneric',
  SCAlreadyLoggedIn = 'scalreadyloggedin',
  SCExists = 'scexists',
  SCCanceled = 'sccanceled',
  SCInputCanceled = 'scinputcanceled',
  SCBadUsername = 'scbadusername',
  SCOffline = 'scoffline',
  SCReloginRequired = 'screloginrequired',
  SCResolutionFailed = 'scresolutionfailed',
  SCProfileNotPublic = 'scprofilenotpublic',
  SCIdentifyFailed = 'scidentifyfailed',
  SCTrackingBroke = 'sctrackingbroke',
  SCWrongCryptoFormat = 'scwrongcryptoformat',
  SCDecryptionError = 'scdecryptionerror',
  SCInvalidAddress = 'scinvalidaddress',
  SCWrongCryptoMsgType = 'scwrongcryptomsgtype',
  SCNoSession = 'scnosession',
  SCAccountReset = 'scaccountreset',
  SCIdentifiesFailed = 'scidentifiesfailed',
  SCNoSpaceOnDevice = 'scnospaceondevice',
  SCMerkleClientError = 'scmerkleclienterror',
  SCMerkleUpdateRoot = 'scmerkleupdateroot',
  SCBadEmail = 'scbademail',
  SCRateLimit = 'scratelimit',
  SCBadSignupUsernameTaken = 'scbadsignupusernametaken',
  SCDuplicate = 'scduplicate',
  SCBadInvitationCode = 'scbadinvitationcode',
  SCBadSignupUsernameReserved = 'scbadsignupusernamereserved',
  SCBadSignupTeamName = 'scbadsignupteamname',
  SCFeatureFlag = 'scfeatureflag',
  SCEmailTaken = 'scemailtaken',
  SCEmailAlreadyAdded = 'scemailalreadyadded',
  SCEmailLimitExceeded = 'scemaillimitexceeded',
  SCEmailCannotDeletePrimary = 'scemailcannotdeleteprimary',
  SCEmailUnknown = 'scemailunknown',
  SCBotSignupTokenNotFound = 'scbotsignuptokennotfound',
  SCNoUpdate = 'scnoupdate',
  SCMissingResult = 'scmissingresult',
  SCKeyNotFound = 'sckeynotfound',
  SCKeyCorrupted = 'sckeycorrupted',
  SCKeyInUse = 'sckeyinuse',
  SCKeyBadGen = 'sckeybadgen',
  SCKeyNoSecret = 'sckeynosecret',
  SCKeyBadUIDs = 'sckeybaduids',
  SCKeyNoActive = 'sckeynoactive',
  SCKeyNoSig = 'sckeynosig',
  SCKeyBadSig = 'sckeybadsig',
  SCKeyBadEldest = 'sckeybadeldest',
  SCKeyNoEldest = 'sckeynoeldest',
  SCKeyDuplicateUpdate = 'sckeyduplicateupdate',
  SCSibkeyAlreadyExists = 'scsibkeyalreadyexists',
  SCDecryptionKeyNotFound = 'scdecryptionkeynotfound',
  SCVerificationKeyNotFound = 'scverificationkeynotfound',
  SCKeyNoPGPEncryption = 'sckeynopgpencryption',
  SCKeyNoNaClEncryption = 'sckeynonaclencryption',
  SCKeySyncedPGPNotFound = 'sckeysyncedpgpnotfound',
  SCKeyNoMatchingGPG = 'sckeynomatchinggpg',
  SCKeyRevoked = 'sckeyrevoked',
  SCSigCannotVerify = 'scsigcannotverify',
  SCSigWrongKey = 'scsigwrongkey',
  SCSigOldSeqno = 'scsigoldseqno',
  SCSigCreationDisallowed = 'scsigcreationdisallowed',
  SCSigMissingRatchet = 'scsigmissingratchet',
  SCSigBadTotalOrder = 'scsigbadtotalorder',
  SCBadTrackSession = 'scbadtracksession',
  SCDeviceBadName = 'scdevicebadname',
  SCDeviceBadStatus = 'scdevicebadstatus',
  SCDeviceNameInUse = 'scdevicenameinuse',
  SCDeviceNotFound = 'scdevicenotfound',
  SCDeviceMismatch = 'scdevicemismatch',
  SCDeviceRequired = 'scdevicerequired',
  SCDevicePrevProvisioned = 'scdeviceprevprovisioned',
  SCDeviceNoProvision = 'scdevicenoprovision',
  SCDeviceProvisionViaDevice = 'scdeviceprovisionviadevice',
  SCRevokeCurrentDevice = 'screvokecurrentdevice',
  SCRevokeLastDevice = 'screvokelastdevice',
  SCDeviceProvisionOffline = 'scdeviceprovisionoffline',
  SCRevokeLastDevicePGP = 'screvokelastdevicepgp',
  SCStreamExists = 'scstreamexists',
  SCStreamNotFound = 'scstreamnotfound',
  SCStreamWrongKind = 'scstreamwrongkind',
  SCStreamEOF = 'scstreameof',
  SCStreamUnknown = 'scstreamunknown',
  SCGenericAPIError = 'scgenericapierror',
  SCAPINetworkError = 'scapinetworkerror',
  SCTimeout = 'sctimeout',
  SCKBFSClientTimeout = 'sckbfsclienttimeout',
  SCProofError = 'scprooferror',
  SCIdentificationExpired = 'scidentificationexpired',
  SCSelfNotFound = 'scselfnotfound',
  SCBadKexPhrase = 'scbadkexphrase',
  SCNoUIDelegation = 'scnouidelegation',
  SCNoUI = 'scnoui',
  SCGPGUnavailable = 'scgpgunavailable',
  SCInvalidVersionError = 'scinvalidversionerror',
  SCOldVersionError = 'scoldversionerror',
  SCInvalidLocationError = 'scinvalidlocationerror',
  SCServiceStatusError = 'scservicestatuserror',
  SCInstallError = 'scinstallerror',
  SCLoadKextError = 'scloadkexterror',
  SCLoadKextPermError = 'scloadkextpermerror',
  SCGitInternal = 'scgitinternal',
  SCGitRepoAlreadyExists = 'scgitrepoalreadyexists',
  SCGitInvalidRepoName = 'scgitinvalidreponame',
  SCGitCannotDelete = 'scgitcannotdelete',
  SCGitRepoDoesntExist = 'scgitrepodoesntexist',
  SCLoginStateTimeout = 'scloginstatetimeout',
  SCChatInternal = 'scchatinternal',
  SCChatRateLimit = 'scchatratelimit',
  SCChatConvExists = 'scchatconvexists',
  SCChatUnknownTLFID = 'scchatunknowntlfid',
  SCChatNotInConv = 'scchatnotinconv',
  SCChatBadMsg = 'scchatbadmsg',
  SCChatBroadcast = 'scchatbroadcast',
  SCChatAlreadySuperseded = 'scchatalreadysuperseded',
  SCChatAlreadyDeleted = 'scchatalreadydeleted',
  SCChatTLFFinalized = 'scchattlffinalized',
  SCChatCollision = 'scchatcollision',
  SCIdentifySummaryError = 'scidentifysummaryerror',
  SCNeedSelfRekey = 'scneedselfrekey',
  SCNeedOtherRekey = 'scneedotherrekey',
  SCChatMessageCollision = 'scchatmessagecollision',
  SCChatDuplicateMessage = 'scchatduplicatemessage',
  SCChatClientError = 'scchatclienterror',
  SCChatNotInTeam = 'scchatnotinteam',
  SCChatStalePreviousState = 'scchatstalepreviousstate',
  SCChatEphemeralRetentionPolicyViolatedError = 'scchatephemeralretentionpolicyviolatederror',
  SCChatUsersAlreadyInConversationError = 'scchatusersalreadyinconversationerror',
  SCChatBadConversationError = 'scchatbadconversationerror',
  SCTeamBadMembership = 'scteambadmembership',
  SCTeamSelfNotOwner = 'scteamselfnotowner',
  SCTeamNotFound = 'scteamnotfound',
  SCTeamExists = 'scteamexists',
  SCTeamReadError = 'scteamreaderror',
  SCTeamWritePermDenied = 'scteamwritepermdenied',
  SCTeamBadGeneration = 'scteambadgeneration',
  SCNoOp = 'scnoop',
  SCTeamInviteBadCancel = 'scteaminvitebadcancel',
  SCTeamInviteBadToken = 'scteaminvitebadtoken',
  SCTeamBadNameReservedDB = 'scteambadnamereserveddb',
  SCTeamTarDuplicate = 'scteamtarduplicate',
  SCTeamTarNotFound = 'scteamtarnotfound',
  SCTeamMemberExists = 'scteammemberexists',
  SCTeamNotReleased = 'scteamnotreleased',
  SCTeamPermanentlyLeft = 'scteampermanentlyleft',
  SCTeamNeedRootId = 'scteamneedrootid',
  SCTeamHasLiveChildren = 'scteamhaslivechildren',
  SCTeamDeleteError = 'scteamdeleteerror',
  SCTeamBadRootTeam = 'scteambadrootteam',
  SCTeamNameConflictsWithUser = 'scteamnameconflictswithuser',
  SCTeamDeleteNoUpPointer = 'scteamdeletenouppointer',
  SCTeamNeedOwner = 'scteamneedowner',
  SCTeamNoOwnerAllowed = 'scteamnoownerallowed',
  SCTeamImplicitNoNonSbs = 'scteamimplicitnononsbs',
  SCTeamImplicitBadHash = 'scteamimplicitbadhash',
  SCTeamImplicitBadName = 'scteamimplicitbadname',
  SCTeamImplicitClash = 'scteamimplicitclash',
  SCTeamImplicitDuplicate = 'scteamimplicitduplicate',
  SCTeamImplicitBadOp = 'scteamimplicitbadop',
  SCTeamImplicitBadRole = 'scteamimplicitbadrole',
  SCTeamImplicitNotFound = 'scteamimplicitnotfound',
  SCTeamBadAdminSeqnoType = 'scteambadadminseqnotype',
  SCTeamImplicitBadAdd = 'scteamimplicitbadadd',
  SCTeamImplicitBadRemove = 'scteamimplicitbadremove',
  SCTeamInviteTokenReused = 'scteaminvitetokenreused',
  SCTeamKeyMaskNotFound = 'scteamkeymasknotfound',
  SCTeamBanned = 'scteambanned',
  SCTeamInvalidBan = 'scteaminvalidban',
  SCTeamShowcasePermDenied = 'scteamshowcasepermdenied',
  SCTeamProvisionalCanKey = 'scteamprovisionalcankey',
  SCTeamProvisionalCannotKey = 'scteamprovisionalcannotkey',
  SCTeamFTLOutdated = 'scteamftloutdated',
  SCTeamStorageWrongRevision = 'scteamstoragewrongrevision',
  SCTeamStorageBadGeneration = 'scteamstoragebadgeneration',
  SCTeamStorageNotFound = 'scteamstoragenotfound',
  SCTeamContactSettingsBlock = 'scteamcontactsettingsblock',
  SCEphemeralKeyBadGeneration = 'scephemeralkeybadgeneration',
  SCEphemeralKeyUnexpectedBox = 'scephemeralkeyunexpectedbox',
  SCEphemeralKeyMissingBox = 'scephemeralkeymissingbox',
  SCEphemeralKeyWrongNumberOfKeys = 'scephemeralkeywrongnumberofkeys',
  SCEphemeralKeyMismatchedKey = 'scephemeralkeymismatchedkey',
  SCEphemeralPairwiseMACsMissingUIDs = 'scephemeralpairwisemacsmissinguids',
  SCEphemeralDeviceAfterEK = 'scephemeraldeviceafterek',
  SCEphemeralMemberAfterEK = 'scephemeralmemberafterek',
  SCEphemeralDeviceStale = 'scephemeraldevicestale',
  SCEphemeralUserStale = 'scephemeraluserstale',
  SCStellarError = 'scstellarerror',
  SCStellarBadInput = 'scstellarbadinput',
  SCStellarWrongRevision = 'scstellarwrongrevision',
  SCStellarMissingBundle = 'scstellarmissingbundle',
  SCStellarBadPuk = 'scstellarbadpuk',
  SCStellarMissingAccount = 'scstellarmissingaccount',
  SCStellarBadPrev = 'scstellarbadprev',
  SCStellarWrongPrimary = 'scstellarwrongprimary',
  SCStellarUnsupportedCurrency = 'scstellarunsupportedcurrency',
  SCStellarNeedDisclaimer = 'scstellarneeddisclaimer',
  SCStellarDeviceNotMobile = 'scstellardevicenotmobile',
  SCStellarMobileOnlyPurgatory = 'scstellarmobileonlypurgatory',
  SCStellarIncompatibleVersion = 'scstellarincompatibleversion',
  SCNISTWrongSize = 'scnistwrongsize',
  SCNISTBadMode = 'scnistbadmode',
  SCNISTHashWrongSize = 'scnisthashwrongsize',
  SCNISTSigWrongSize = 'scnistsigwrongsize',
  SCNISTSigBadInput = 'scnistsigbadinput',
  SCNISTSigBadUID = 'scnistsigbaduid',
  SCNISTSigBadDeviceID = 'scnistsigbaddeviceid',
  SCNISTSigBadNonce = 'scnistsigbadnonce',
  SCNISTNoSigOrHash = 'scnistnosigorhash',
  SCNISTExpired = 'scnistexpired',
  SCNISTSigRevoked = 'scnistsigrevoked',
  SCNISTKeyRevoked = 'scnistkeyrevoked',
  SCNISTUserDeleted = 'scnistuserdeleted',
  SCNISTNoDevice = 'scnistnodevice',
  SCNISTSigCannot_verify = 'scnistsigcannot_verify',
  SCNISTReplay = 'scnistreplay',
  SCNISTSigBadLifetime = 'scnistsigbadlifetime',
  SCNISTNotFound = 'scnistnotfound',
  SCNISTBadClock = 'scnistbadclock',
  SCNISTSigBadCtime = 'scnistsigbadctime',
  SCBadSignupUsernameDeleted = 'scbadsignupusernamedeleted',
  SCPhoneNumberUnknown = 'scphonenumberunknown',
  SCPhoneNumberAlreadyVerified = 'scphonenumberalreadyverified',
  SCPhoneNumberVerificationCodeExpired = 'scphonenumberverificationcodeexpired',
  SCPhoneNumberWrongVerificationCode = 'scphonenumberwrongverificationcode',
  SCPhoneNumberLimitExceeded = 'scphonenumberlimitexceeded',
  SCNoPaperKeys = 'scnopaperkeys',
  SCTeambotKeyGenerationExists = 'scteambotkeygenerationexists',
  SCTeambotKeyOldBoxedGeneration = 'scteambotkeyoldboxedgeneration',
  SCTeambotKeyBadGeneration = 'scteambotkeybadgeneration',
  SCAirdropRegisterFailedMisc = 'scairdropregisterfailedmisc',
  SCSimpleFSNameExists = 'scsimplefsnameexists',
  SCSimpleFSDirNotEmpty = 'scsimplefsdirnotempty',
  SCSimpleFSNotExist = 'scsimplefsnotexist',
  SCSimpleFSNoAccess = 'scsimplefsnoaccess',
}

export type ED25519PublicKey = string | null
export type ED25519Signature = string | null
export type EncryptedBytes32 = string | null
export type BoxNonce = string | null
export type BoxPublicKey = string | null
export type RegisterAddressRes = {
  type: string
  family: string
}

export enum ExitCode {
  OK = 'ok',
  NOTOK = 'notok',
  RESTART = 'restart',
}

export enum DbType {
  MAIN = 'main',
  CHAT = 'chat',
  FS_BLOCK_CACHE = 'fs_block_cache',
  FS_BLOCK_CACHE_META = 'fs_block_cache_meta',
  FS_SYNC_BLOCK_CACHE = 'fs_sync_block_cache',
  FS_SYNC_BLOCK_CACHE_META = 'fs_sync_block_cache_meta',
}

export type DbValue = Buffer

export enum OnLoginStartupStatus {
  UNKNOWN = 'unknown',
  DISABLED = 'disabled',
  ENABLED = 'enabled',
}

export type FirstStepResult = {
  valPlusTwo: number
}

export type EkGeneration = number

export enum TeamEphemeralKeyType {
  TEAM = 'team',
  TEAMBOT = 'teambot',
}

export enum FolderType {
  UNKNOWN = 'unknown',
  PRIVATE = 'private',
  PUBLIC = 'public',
  TEAM = 'team',
}

export enum FolderConflictType {
  NONE = 'none',
  IN_CONFLICT = 'in_conflict',
  IN_CONFLICT_AND_STUCK = 'in_conflict_and_stuck',
  CLEARED_CONFLICT = 'cleared_conflict',
}

export enum ConflictStateType {
  NormalView = 'normalview',
  ManualResolvingLocalView = 'manualresolvinglocalview',
}

export type FeaturedBot = {
  botAlias: string
  description: string
  extendedDescription: string
  extendedDescriptionRaw: string
  botUsername: string
  ownerTeam?: string
  ownerUser?: string
  rank: number
  isPromoted: boolean
}

export type File = {
  path: string
}

export type RepoID = string

export enum GitLocalMetadataVersion {
  V1 = 'v1',
}

export enum GitPushType {
  DEFAULT = 'default',
  CREATEREPO = 'createrepo',
  RENAMEREPO = 'renamerepo',
}

export enum GitRepoResultState {
  ERR = 'err',
  OK = 'ok',
}

export type GitTeamRepoSettings = {
  channelName?: string
  chatDisabled: boolean
}

export type SelectKeyRes = {
  keyId: string
  doSecretPush: boolean
}

export enum PushReason {
  NONE = 'none',
  RECONNECTED = 'reconnected',
  NEW_DATA = 'new_data',
}

export type HomeScreenItemID = string

export enum HomeScreenItemType {
  TODO = 'todo',
  PEOPLE = 'people',
  ANNOUNCEMENT = 'announcement',
}

export enum AppLinkType {
  NONE = 'none',
  PEOPLE = 'people',
  CHAT = 'chat',
  FILES = 'files',
  WALLET = 'wallet',
  GIT = 'git',
  DEVICES = 'devices',
  SETTINGS = 'settings',
  TEAMS = 'teams',
}

export type HomeScreenAnnouncementID = number

export type HomeScreenAnnouncementVersion = number

export enum HomeScreenTodoType {
  NONE = 'none',
  BIO = 'bio',
  PROOF = 'proof',
  DEVICE = 'device',
  FOLLOW = 'follow',
  CHAT = 'chat',
  PAPERKEY = 'paperkey',
  TEAM = 'team',
  FOLDER = 'folder',
  GIT_REPO = 'git_repo',
  TEAM_SHOWCASE = 'team_showcase',
  AVATAR_USER = 'avatar_user',
  AVATAR_TEAM = 'avatar_team',
  ADD_PHONE_NUMBER = 'add_phone_number',
  VERIFY_ALL_PHONE_NUMBER = 'verify_all_phone_number',
  VERIFY_ALL_EMAIL = 'verify_all_email',
  LEGACY_EMAIL_VISIBILITY = 'legacy_email_visibility',
  ADD_EMAIL = 'add_email',
  ANNONCEMENT_PLACEHOLDER = 'annoncement_placeholder',
}

export enum HomeScreenPeopleNotificationType {
  FOLLOWED = 'followed',
  FOLLOWED_MULTI = 'followed_multi',
  CONTACT = 'contact',
  CONTACT_MULTI = 'contact_multi',
}

export type Pics = {
  square40: string
  square200: string
  square360: string
}

export type Identify3Assertion = string

export type Identify3GUIID = string

export enum Identify3RowState {
  CHECKING = 'checking',
  VALID = 'valid',
  ERROR = 'error',
  WARNING = 'warning',
  REVOKED = 'revoked',
}

export enum Identify3RowColor {
  BLUE = 'blue',
  RED = 'red',
  BLACK = 'black',
  GREEN = 'green',
  GRAY = 'gray',
  YELLOW = 'yellow',
  ORANGE = 'orange',
}

export enum Identify3ResultType {
  OK = 'ok',
  BROKEN = 'broken',
  NEEDS_UPGRADE = 'needs_upgrade',
  CANCELED = 'canceled',
}

export type TrackToken = string

export type SigVersion = number

export enum TrackDiffType {
  NONE = 'none',
  ERROR = 'error',
  CLASH = 'clash',
  REVOKED = 'revoked',
  UPGRADED = 'upgraded',
  NEW = 'new',
  REMOTE_FAIL = 'remote_fail',
  REMOTE_WORKING = 'remote_working',
  REMOTE_CHANGED = 'remote_changed',
  NEW_ELDEST = 'new_eldest',
  NONE_VIA_TEMPORARY = 'none_via_temporary',
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
export enum TrackStatus {
  NEW_OK = 'new_ok',
  NEW_ZERO_PROOFS = 'new_zero_proofs',
  NEW_FAIL_PROOFS = 'new_fail_proofs',
  UPDATE_BROKEN_FAILED_PROOFS = 'update_broken_failed_proofs',
  UPDATE_NEW_PROOFS = 'update_new_proofs',
  UPDATE_OK = 'update_ok',
  UPDATE_BROKEN_REVOKED = 'update_broken_revoked',
}

export enum IdentifyReasonType {
  NONE = 'none',
  ID = 'id',
  TRACK = 'track',
  ENCRYPT = 'encrypt',
  DECRYPT = 'decrypt',
  VERIFY = 'verify',
  RESOURCE = 'resource',
  BACKGROUND = 'background',
}

export type SigHint = {
  remoteId: string
  humanUrl: string
  apiUrl: string
  checkText: string
}

export enum CheckResultFreshness {
  FRESH = 'fresh',
  AGED = 'aged',
  RANCID = 'rancid',
}

export type ConfirmResult = {
  identityConfirmed: boolean
  remoteConfirmed: boolean
  expiringLocal: boolean
  autoConfirmed: boolean
}

export enum DismissReasonType {
  NONE = 'none',
  HANDLED_ELSEWHERE = 'handled_elsewhere',
}

export enum IncomingShareType {
  FILE = 'file',
  TEXT = 'text',
  IMAGE = 'image',
  VIDEO = 'video',
}

/**
 * Install status describes state of install for a component or service.
 */
export enum InstallStatus {
  UNKNOWN = 'unknown',
  ERROR = 'error',
  NOT_INSTALLED = 'not_installed',
  INSTALLED = 'installed',
}

export enum InstallAction {
  UNKNOWN = 'unknown',
  NONE = 'none',
  UPGRADE = 'upgrade',
  REINSTALL = 'reinstall',
  INSTALL = 'install',
}

export type FuseMountInfo = {
  path: string
  fstype: string
  output: string
}

export type InviteCounts = {
  inviteCount: number
  percentageChange: number
  showNumInvites: boolean
  showFire: boolean
  tooltipMarkdown: string
}

export type EmailInvites = {
  commaSeparatedEmailsFromUser?: string
  emailsFromContacts?: EmailAddress[] | null
}

export enum FSStatusCode {
  START = 'start',
  FINISH = 'finish',
  ERROR = 'error',
}

export enum FSNotificationType {
  ENCRYPTING = 'encrypting',
  DECRYPTING = 'decrypting',
  SIGNING = 'signing',
  VERIFYING = 'verifying',
  REKEYING = 'rekeying',
  CONNECTION = 'connection',
  MD_READ_SUCCESS = 'md_read_success',
  FILE_CREATED = 'file_created',
  FILE_MODIFIED = 'file_modified',
  FILE_DELETED = 'file_deleted',
  FILE_RENAMED = 'file_renamed',
  INITIALIZED = 'initialized',
  SYNC_CONFIG_CHANGED = 'sync_config_changed',
}

export enum FSErrorType {
  ACCESS_DENIED = 'access_denied',
  USER_NOT_FOUND = 'user_not_found',
  REVOKED_DATA_DETECTED = 'revoked_data_detected',
  NOT_LOGGED_IN = 'not_logged_in',
  TIMEOUT = 'timeout',
  REKEY_NEEDED = 'rekey_needed',
  BAD_FOLDER = 'bad_folder',
  NOT_IMPLEMENTED = 'not_implemented',
  OLD_VERSION = 'old_version',
  OVER_QUOTA = 'over_quota',
  NO_SIG_CHAIN = 'no_sig_chain',
  TOO_MANY_FOLDERS = 'too_many_folders',
  EXDEV_NOT_SUPPORTED = 'exdev_not_supported',
  DISK_LIMIT_REACHED = 'disk_limit_reached',
  DISK_CACHE_ERROR_LOG_SEND = 'disk_cache_error_log_send',
  OFFLINE_ARCHIVED = 'offline_archived',
  OFFLINE_UNSYNCED = 'offline_unsynced',
}

export type FSSyncStatusRequest = {
  requestId: number
}

export type PassphraseStream = {
  passphraseStream: Buffer
  generation: number
}

export type SessionToken = string

export type CsrfToken = string

export type HelloRes = string

export type KVGetResult = {
  teamName: string
  namespace: string
  entryKey: string
  entryValue?: string | null
  revision: number
}

export type KVPutResult = {
  teamName: string
  namespace: string
  entryKey: string
  revision: number
}

export type EncryptedKVEntry = {
  v: number
  e: Buffer
  n: Buffer
}

export type KVListNamespaceResult = {
  teamName: string
  namespaces: string[] | null
}

export type KVListEntryKey = {
  entryKey: string
  revision: number
}

export type KVDeleteEntryResult = {
  teamName: string
  namespace: string
  entryKey: string
  revision: number
}

export enum ResetPromptType {
  COMPLETE = 'complete',
  ENTER_NO_DEVICES = 'enter_no_devices',
  ENTER_FORGOT_PW = 'enter_forgot_pw',
  ENTER_RESET_PW = 'enter_reset_pw',
}

export type ResetPromptInfo = {
  hasWallet: boolean
}

export enum ResetPromptResponse {
  NOTHING = 'nothing',
  CANCEL_RESET = 'cancel_reset',
  CONFIRM_RESET = 'confirm_reset',
}

export enum PassphraseRecoveryPromptType {
  ENCRYPTED_PGP_KEYS = 'encrypted_pgp_keys',
}

export enum ResetMessage {
  ENTERED_VERIFIED = 'entered_verified',
  ENTERED_PASSWORDLESS = 'entered_passwordless',
  REQUEST_VERIFIED = 'request_verified',
  NOT_COMPLETED = 'not_completed',
  CANCELED = 'canceled',
  COMPLETED = 'completed',
  RESET_LINK_SENT = 'reset_link_sent',
}

export type KBFSRootHash = Buffer

export type MerkleStoreSupportedVersion = number

export type MerkleStoreKitHash = string

export type MerkleStoreKit = string

export type MerkleStoreEntryString = string

export type KeyBundle = {
  version: number
  bundle: Buffer
}

export type MerkleRoot = {
  version: number
  root: Buffer
}

export type LockID = number

export type MDPriority = number

export type RekeyRequest = {
  folderId: string
  revision: number
}

export enum NetworkSource {
  LOCAL = 'local',
  REMOTE = 'remote',
}

export type ChatConversationID = Buffer

export type DeletedTeamInfo = {
  teamName: string
  deletedBy: string
  id: gregor1.MsgID
}

export type WalletAccountInfo = {
  accountId: string
  numUnread: number
}

export type NotificationChannels = {
  session: boolean
  users: boolean
  kbfs: boolean
  kbfsdesktop: boolean
  kbfslegacy: boolean
  kbfssubscription: boolean
  tracking: boolean
  favorites: boolean
  paperkeys: boolean
  keyfamily: boolean
  service: boolean
  app: boolean
  chat: boolean
  pgp: boolean
  kbfsrequest: boolean
  badges: boolean
  reachability: boolean
  team: boolean
  ephemeral: boolean
  teambot: boolean
  chatkbfsedits: boolean
  chatdev: boolean
  chatemoji: boolean
  chatemojicross: boolean
  deviceclone: boolean
  chatattachments: boolean
  wallet: boolean
  audit: boolean
  runtimestats: boolean
  featuredBots: boolean
  saltpack: boolean
}

export enum StatsSeverityLevel {
  NORMAL = 'normal',
  WARNING = 'warning',
  SEVERE = 'severe',
}

export enum ProcessType {
  MAIN = 'main',
  KBFS = 'kbfs',
}

export enum PerfEventType {
  NETWORK = 'network',
  TEAMBOXAUDIT = 'teamboxaudit',
  TEAMAUDIT = 'teamaudit',
  USERCHAIN = 'userchain',
  TEAMCHAIN = 'teamchain',
  CLEARCONV = 'clearconv',
  CLEARINBOX = 'clearinbox',
  TEAMTREELOAD = 'teamtreeload',
}

export enum SaltpackOperationType {
  ENCRYPT = 'encrypt',
  DECRYPT = 'decrypt',
  SIGN = 'sign',
  VERIFY = 'verify',
}

export type HttpSrvInfo = {
  address: string
  token: string
}

export type TeamChangeSet = {
  membershipChanged: boolean
  keyRotated: boolean
  renamed: boolean
  misc: boolean
}

export enum AvatarUpdateType {
  NONE = 'none',
  USER = 'user',
  TEAM = 'team',
}

export enum RuntimeGroup {
  UNKNOWN = 'unknown',
  LINUXLIKE = 'linuxlike',
  DARWINLIKE = 'darwinlike',
  WINDOWSLIKE = 'windowslike',
}

export type Feature = {
  allow: boolean
  defaultValue: boolean
  readonly: boolean
  label: string
}

export enum PassphraseType {
  NONE = 'none',
  PAPER_KEY = 'paper_key',
  PASS_PHRASE = 'pass_phrase',
  VERIFY_PASS_PHRASE = 'verify_pass_phrase',
}

export type GetPassphraseRes = {
  passphrase: string
  storeSecret: boolean
}

export enum SignMode {
  ATTACHED = 'attached',
  DETACHED = 'detached',
  CLEAR = 'clear',
}

export type PGPEncryptOptions = {
  recipients: string[] | null
  noSign: boolean
  noSelf: boolean
  binaryOut: boolean
  keyQuery: string
}

export type PGPDecryptOptions = {
  assertSigned: boolean
  signedBy: string
}

export type PGPVerifyOptions = {
  signedBy: string
  signature: Buffer
}

export type KeyInfo = {
  fingerprint: string
  key: string
  desc: string
}

export type PGPQuery = {
  secret: boolean
  query: string
  exactMatch: boolean
}

/**
 * Export all pgp keys in lksec, then if doPurge is true, remove the keys from lksec.
 */
export type PGPPurgeRes = {
  filenames: string[] | null
}

export enum FileType {
  UNKNOWN = 'unknown',
  DIRECTORY = 'directory',
  FILE = 'file',
}

export enum ProofState {
  NONE = 'none',
  OK = 'ok',
  TEMP_FAILURE = 'temp_failure',
  PERM_FAILURE = 'perm_failure',
  LOOKING = 'looking',
  SUPERSEDED = 'superseded',
  POSTED = 'posted',
  REVOKED = 'revoked',
  DELETED = 'deleted',
  UNKNOWN_TYPE = 'unknown_type',
  SIG_HINT_MISSING = 'sig_hint_missing',
  UNCHECKED = 'unchecked',
}

/**
 * 3: It's been found in the hunt, but not proven yet
 *     1xx: Retryable soft errors; note that this will be put in the proof_cache, but won't
 *        be returned from the proof cache in most cases. Their freshness will always be
 *        RANCID.
 *     2xx: Will likely result in a hard error, if repeated enough
 *     3xx: Hard final errors
 */
export enum ProofStatus {
  NONE = 'none',
  OK = 'ok',
  LOCAL = 'local',
  FOUND = 'found',
  BASE_ERROR = 'base_error',
  HOST_UNREACHABLE = 'host_unreachable',
  PERMISSION_DENIED = 'permission_denied',
  FAILED_PARSE = 'failed_parse',
  DNS_ERROR = 'dns_error',
  AUTH_FAILED = 'auth_failed',
  HTTP_429 = 'http_429',
  HTTP_500 = 'http_500',
  TIMEOUT = 'timeout',
  INTERNAL_ERROR = 'internal_error',
  UNCHECKED = 'unchecked',
  MISSING_PVL = 'missing_pvl',
  BASE_HARD_ERROR = 'base_hard_error',
  NOT_FOUND = 'not_found',
  CONTENT_FAILURE = 'content_failure',
  BAD_USERNAME = 'bad_username',
  BAD_REMOTE_ID = 'bad_remote_id',
  TEXT_NOT_FOUND = 'text_not_found',
  BAD_ARGS = 'bad_args',
  CONTENT_MISSING = 'content_missing',
  TITLE_NOT_FOUND = 'title_not_found',
  SERVICE_ERROR = 'service_error',
  TOR_SKIPPED = 'tor_skipped',
  TOR_INCOMPATIBLE = 'tor_incompatible',
  HTTP_300 = 'http_300',
  HTTP_400 = 'http_400',
  HTTP_OTHER = 'http_other',
  EMPTY_JSON = 'empty_json',
  DELETED = 'deleted',
  SERVICE_DEAD = 'service_dead',
  BAD_SIGNATURE = 'bad_signature',
  BAD_API_URL = 'bad_api_url',
  UNKNOWN_TYPE = 'unknown_type',
  NO_HINT = 'no_hint',
  BAD_HINT_TEXT = 'bad_hint_text',
  INVALID_PVL = 'invalid_pvl',
}

export enum ProofType {
  NONE = 'none',
  KEYBASE = 'keybase',
  TWITTER = 'twitter',
  GITHUB = 'github',
  REDDIT = 'reddit',
  COINBASE = 'coinbase',
  HACKERNEWS = 'hackernews',
  FACEBOOK = 'facebook',
  GENERIC_SOCIAL = 'generic_social',
  GENERIC_WEB_SITE = 'generic_web_site',
  DNS = 'dns',
  PGP = 'pgp',
  ROOTER = 'rooter',
}

export type SelectorEntry = {
  isIndex: boolean
  index: number
  isKey: boolean
  key: string
  isAll: boolean
  isContents: boolean
}

export type ParamProofUsernameConfig = {
  re: string
  min: number
  max: number
}

export type ServiceDisplayConfig = {
  creationDisabled: boolean
  priority: number
  key: string
  group?: string
  new: boolean
  logoKey: string
}

export enum PromptOverwriteType {
  SOCIAL = 'social',
  SITE = 'site',
}

export enum ProvisionMethod {
  DEVICE = 'device',
  PAPER_KEY = 'paper_key',
  PASSPHRASE = 'passphrase',
  GPG_IMPORT = 'gpg_import',
  GPG_SIGN = 'gpg_sign',
}

export enum GPGMethod {
  GPG_NONE = 'gpg_none',
  GPG_IMPORT = 'gpg_import',
  GPG_SIGN = 'gpg_sign',
}

export enum ChooseType {
  EXISTING_DEVICE = 'existing_device',
  NEW_DEVICE = 'new_device',
}

/**
 * SecretResponse should be returned by DisplayAndPromptSecret.  Use either secret or phrase.
 */
export type SecretResponse = {
  secret: Buffer
  phrase: string
}

export enum Reachable {
  UNKNOWN = 'unknown',
  YES = 'yes',
  NO = 'no',
}

export enum Outcome {
  NONE = 'none',
  FIXED = 'fixed',
  IGNORED = 'ignored',
}

export enum RekeyEventType {
  NONE = 'none',
  NOT_LOGGED_IN = 'not_logged_in',
  API_ERROR = 'api_error',
  NO_PROBLEMS = 'no_problems',
  LOAD_ME_ERROR = 'load_me_error',
  CURRENT_DEVICE_CAN_REKEY = 'current_device_can_rekey',
  DEVICE_LOAD_ERROR = 'device_load_error',
  HARASS = 'harass',
  NO_GREGOR_MESSAGES = 'no_gregor_messages',
}

export type SHA512 = Buffer

export enum ResetType {
  NONE = 'none',
  RESET = 'reset',
  DELETE = 'delete',
}

export enum AuthenticityType {
  SIGNED = 'signed',
  REPUDIABLE = 'repudiable',
  ANONYMOUS = 'anonymous',
}

export type SaltpackDecryptOptions = {
  interactive: boolean
  forceRemoteCheck: boolean
  usePaperKey: boolean
}

export type SaltpackSignOptions = {
  detached: boolean
  binary: boolean
  saltpackVersion: number
}

export type SaltpackVerifyOptions = {
  signedBy: string
  signature: Buffer
}

export type SaltpackEncryptResult = {
  usedUnresolvedSbs: boolean
  unresolvedSbsAssertion: string
}

export type SaltpackFrontendEncryptOptions = {
  recipients: string[] | null
  signed: boolean
  includeSelf: boolean
}

export type SaltpackEncryptStringResult = {
  usedUnresolvedSbs: boolean
  unresolvedSbsAssertion: string
  ciphertext: string
}

export type SaltpackEncryptFileResult = {
  usedUnresolvedSbs: boolean
  unresolvedSbsAssertion: string
  filename: string
}

export enum SaltpackSenderType {
  NOT_TRACKED = 'not_tracked',
  UNKNOWN = 'unknown',
  ANONYMOUS = 'anonymous',
  TRACKING_BROKE = 'tracking_broke',
  TRACKING_OK = 'tracking_ok',
  SELF = 'self',
  REVOKED = 'revoked',
  EXPIRED = 'expired',
}

export type SecretEntryArg = {
  desc: string
  prompt: string
  err: string
  cancel: string
  ok: string
  reason: string
  showTyping: boolean
}

export type SecretEntryRes = {
  text: string
  canceled: boolean
  storeSecret: boolean
}

export type NaclSigningKeyPublic = string | null
export type NaclSigningKeyPrivate = string | null
export type NaclDHKeyPublic = string | null
export type NaclDHKeyPrivate = string | null
export type SignupRes = {
  passphraseOk: boolean
  postOk: boolean
  writeOk: boolean
  paperKey: string
}

export type SigTypes = {
  track: boolean
  proof: boolean
  cryptocurrency: boolean
  isSelf: boolean
}

export type OpID = string | null
export type KBFSRevision = number

export enum KBFSArchivedType {
  REVISION = 'revision',
  TIME = 'time',
  TIME_STRING = 'time_string',
  REL_TIME_STRING = 'rel_time_string',
}

export enum PathType {
  LOCAL = 'local',
  KBFS = 'kbfs',
  KBFS_ARCHIVED = 'kbfs_archived',
}

export enum DirentType {
  FILE = 'file',
  DIR = 'dir',
  SYM = 'sym',
  EXEC = 'exec',
}

export enum PrefetchStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  COMPLETE = 'complete',
}

export enum RevisionSpanType {
  DEFAULT = 'default',
  LAST_FIVE = 'last_five',
}

export type ErrorNum = number

export enum OpenFlags {
  READ = 'read',
  REPLACE = 'replace',
  EXISTING = 'existing',
  WRITE = 'write',
  APPEND = 'append',
  DIRECTORY = 'directory',
}

export type Progress = number

export enum AsyncOps {
  LIST = 'list',
  LIST_RECURSIVE = 'list_recursive',
  READ = 'read',
  WRITE = 'write',
  COPY = 'copy',
  MOVE = 'move',
  REMOVE = 'remove',
  LIST_RECURSIVE_TO_DEPTH = 'list_recursive_to_depth',
  GET_REVISIONS = 'get_revisions',
}

export enum ListFilter {
  NO_FILTER = 'no_filter',
  FILTER_ALL_HIDDEN = 'filter_all_hidden',
  FILTER_SYSTEM_HIDDEN = 'filter_system_hidden',
}

export type SimpleFSQuotaUsage = {
  usageBytes: number
  archiveBytes: number
  limitBytes: number
  gitUsageBytes: number
  gitArchiveBytes: number
  gitLimitBytes: number
}

export enum FolderSyncMode {
  DISABLED = 'disabled',
  ENABLED = 'enabled',
  PARTIAL = 'partial',
}

export enum KbfsOnlineStatus {
  OFFLINE = 'offline',
  TRYING = 'trying',
  ONLINE = 'online',
}

export type FSSettings = {
  spaceAvailableNotificationThreshold: number
  sfmiBannerDismissed: boolean
  syncOnCellular: boolean
}

export enum SubscriptionTopic {
  FAVORITES = 'favorites',
  JOURNAL_STATUS = 'journal_status',
  ONLINE_STATUS = 'online_status',
  DOWNLOAD_STATUS = 'download_status',
  FILES_TAB_BADGE = 'files_tab_badge',
  OVERALL_SYNC_STATUS = 'overall_sync_status',
  SETTINGS = 'settings',
  UPLOAD_STATUS = 'upload_status',
}

export enum PathSubscriptionTopic {
  CHILDREN = 'children',
  STAT = 'stat',
}

export enum FilesTabBadge {
  NONE = 'none',
  UPLOADING_STUCK = 'uploading_stuck',
  AWAITING_UPLOAD = 'awaiting_upload',
  UPLOADING = 'uploading',
}

export enum GUIViewType {
  DEFAULT = 'default',
  TEXT = 'text',
  IMAGE = 'image',
  AUDIO = 'audio',
  VIDEO = 'video',
  PDF = 'pdf',
}

export type SimpleFSSearchHit = {
  path: string
}

export type TeambotKeyGeneration = number

export enum TeamRole {
  NONE = 'none',
  READER = 'reader',
  WRITER = 'writer',
  ADMIN = 'admin',
  OWNER = 'owner',
  BOT = 'bot',
  RESTRICTEDBOT = 'restrictedbot',
}

export enum TeamApplication {
  KBFS = 'kbfs',
  CHAT = 'chat',
  SALTPACK = 'saltpack',
  GIT_METADATA = 'git_metadata',
  SEITAN_INVITE_TOKEN = 'seitan_invite_token',
  STELLAR_RELAY = 'stellar_relay',
  KVSTORE = 'kvstore',
}

export enum TeamStatus {
  NONE = 'none',
  LIVE = 'live',
  DELETED = 'deleted',
  ABANDONED = 'abandoned',
}

export enum AuditMode {
  STANDARD = 'standard',
  JUST_CREATED = 'just_created',
  SKIP = 'skip',
  STANDARD_NO_HIDDEN = 'standard_no_hidden',
}

export type PerTeamKeyGeneration = number

export enum PTKType {
  READER = 'reader',
}

export enum PerTeamSeedCheckVersion {
  V1 = 'v1',
}

export type PerTeamSeedCheckValue = Buffer

export type PerTeamSeedCheckValuePostImage = Buffer

export type MaskB64 = Buffer

export type TeamInviteID = string

export type TeamInviteMaxUses = number

export type PerTeamKeySeed = string | null
export enum TeamMemberStatus {
  ACTIVE = 'active',
  RESET = 'reset',
  DELETED = 'deleted',
}

export type UserVersionPercentForm = string

export enum RatchetType {
  MAIN = 'main',
  BLINDED = 'blinded',
  SELF = 'self',
  UNCOMMITTED = 'uncommitted',
}

export enum AuditVersion {
  V0 = 'v0',
  V1 = 'v1',
  V2 = 'v2',
  V3 = 'v3',
  V4 = 'v4',
}

export enum TeamInviteCategory {
  NONE = 'none',
  UNKNOWN = 'unknown',
  KEYBASE = 'keybase',
  EMAIL = 'email',
  SBS = 'sbs',
  SEITAN = 'seitan',
  PHONE = 'phone',
  INVITELINK = 'invitelink',
}

export type TeamInviteSocialNetwork = string

export type TeamInviteName = string

export type TeamInviteDisplayName = string

export type TeamEncryptedKBFSKeyset = {
  v: number
  e: Buffer
  n: Buffer
}

export type TeamEncryptedKBFSKeysetHash = string

export type BoxSummaryHash = string

export type TeamNamePart = string

export type SeitanAKey = string

export type SeitanIKey = string

export type SeitanIKeyInvitelink = string

export type SeitanPubKey = string

export type SeitanIKeyV2 = string

export enum SeitanKeyAndLabelVersion {
  V1 = 'v1',
  V2 = 'v2',
  Invitelink = 'invitelink',
}

export enum SeitanKeyLabelType {
  SMS = 'sms',
  GENERIC = 'generic',
}

export type SeitanKeyLabelSms = {
  f: string
  n: string
}

export type SeitanKeyLabelGeneric = {
  l: string
}

export type TeamBotSettings = {
  cmds: boolean
  mentions: boolean
  triggers: string[] | null
  convs: string[] | null
}

export type TeamRequestAccessResult = {
  open: boolean
}

export type TeamAcceptOrRequestResult = {
  wasToken: boolean
  wasSeitan: boolean
  wasTeamName: boolean
  wasOpenTeam: boolean
}

export type BulkRes = {
  malformed: string[] | null
}

export type ConflictGeneration = number

export type TeamOperation = {
  manageMembers: boolean
  manageSubteams: boolean
  createChannel: boolean
  chat: boolean
  deleteChannel: boolean
  renameChannel: boolean
  renameTeam: boolean
  editChannelDescription: boolean
  editTeamDescription: boolean
  setTeamShowcase: boolean
  setMemberShowcase: boolean
  setRetentionPolicy: boolean
  setMinWriterRole: boolean
  changeOpenTeam: boolean
  leaveTeam: boolean
  joinTeam: boolean
  setPublicityAny: boolean
  listFirst: boolean
  changeTarsDisabled: boolean
  deleteChatHistory: boolean
  deleteOtherEmojis: boolean
  deleteOtherMessages: boolean
  deleteTeam: boolean
  pinMessage: boolean
  manageBots: boolean
  manageEmojis: boolean
}

export type ProfileTeamLoadRes = {
  loadTimeNsec: number
}

export enum RotationType {
  VISIBLE = 'visible',
  HIDDEN = 'hidden',
  CLKR = 'clkr',
}

export type MemberEmail = {
  email: string
  role: string
}

export type MemberUsername = {
  username: string
  role: string
}

export type UserTeamVersion = number

export enum TeamTreeMembershipStatus {
  OK = 'ok',
  ERROR = 'error',
  HIDDEN = 'hidden',
}

export type TeamTreeError = {
  message: string
  willSkipSubtree: boolean
  willSkipAncestors: boolean
}

export type TeamTreeInitial = {
  guid: number
}

/**
 * Result from calling test(..).
 */
export type Test = {
  reply: string
}

export enum TLFIdentifyBehavior {
  UNSET = 'unset',
  CHAT_CLI = 'chat_cli',
  CHAT_GUI = 'chat_gui',
  REMOVED_AND_UNUSED = 'removed_and_unused',
  KBFS_REKEY = 'kbfs_rekey',
  KBFS_QR = 'kbfs_qr',
  CHAT_SKIP = 'chat_skip',
  SALTPACK = 'saltpack',
  CLI = 'cli',
  GUI = 'gui',
  DEFAULT_KBFS = 'default_kbfs',
  KBFS_CHAT = 'kbfs_chat',
  RESOLVE_AND_CHECK = 'resolve_and_check',
  GUI_PROFILE = 'gui_profile',
  KBFS_INIT = 'kbfs_init',
  FS_GUI = 'fs_gui',
}

export type CanonicalTlfName = string

export enum PromptDefault {
  NONE = 'none',
  YES = 'yes',
  NO = 'no',
}

export enum KeyType {
  NONE = 'none',
  NACL = 'nacl',
  PGP = 'pgp',
}

export enum UPK2MinorVersion {
  V0 = 'v0',
  V1 = 'v1',
  V2 = 'v2',
  V3 = 'v3',
  V4 = 'v4',
  V5 = 'v5',
  V6 = 'v6',
}

export type PGPFingerprint = string | null
export enum UPAKVersion {
  V1 = 'v1',
  V2 = 'v2',
}

export enum UPKLiteMinorVersion {
  V0 = 'v0',
}

export type TrackProof = {
  proofType: string
  proofName: string
  idString: string
}

export type WebProof = {
  hostname: string
  protocols: string[] | null
}

export type EmailAddress = string

/**
 * PassphraseState values are used in .config.json, so should not be changed without a migration strategy
 */
export enum PassphraseState {
  KNOWN = 'known',
  RANDOM = 'random',
}

export enum UserBlockType {
  CHAT = 'chat',
  FOLLOW = 'follow',
}

export type UserBlockArg = {
  username: string
  setChatBlock?: boolean
  setFollowBlock?: boolean
}

export type APIUserServiceID = string

export type ImpTofuSearchResult = {
  assertion: string
  assertionValue: string
  assertionKey: string
  label: string
  prettyName: string
  keybaseUsername: string
}

export type EmailOrPhoneNumberSearchResult = {
  input: string
  assertion: string
  assertionValue: string
  assertionKey: string
  foundUser: boolean
  username: string
  fullName: string
}

export type UsernameVerificationType = string

export enum WotReactionType {
  ACCEPT = 'accept',
  REJECT = 'reject',
}

export type LockdownHistory = {
  status: boolean
  ctime: Time
  deviceId: DeviceID
  deviceName: string
}

export type TeamContactSettings = {
  teamId: TeamID
  enabled: boolean
}

export type AirdropDetails = {
  uid: UID
  kid: BinaryKID
  vid: VID
  vers: string
  time: Time
}

export type BoxAuditAttempt = {
  ctime: UnixTime
  error?: string
  result: BoxAuditAttemptResult
  generation?: PerTeamKeyGeneration
  rotated: boolean
}

export type LoadAvatarsRes = {
  picmap: {[key: string]: {[key: string]: AvatarUrl}}
}

export type AvatarClearCacheMsg = {
  name: string
  formats: AvatarFormat[] | null
  typ: AvatarUpdateType
}

export type BlockIdCombo = {
  blockHash: string
  chargedTo: UserOrTeamID
  blockType: BlockType
}

export type GetBlockRes = {
  blockKey: string
  buf: Buffer
  size: number
  status: BlockStatus
}

export type GetBlockSizesRes = {
  sizes: number[] | null
  statuses: BlockStatus[] | null
}

export type UsageStat = {
  bytes: UsageStatRecord
  blocks: UsageStatRecord
  mtime: Time
}

export type BotTokenInfo = {
  botToken: BotToken
  ctime: Time
}

export type Status = {
  code: number
  name: string
  desc: string
  fields: StringKVPair[] | null
}

export type UserVersion = {
  uid: UID
  eldestSeqno: Seqno
}

export type CompatibilityTeamID =
  | {typ: TeamType.LEGACY; LEGACY: TLFID}
  | {typ: TeamType.MODERN; MODERN: TeamID}
  | {typ: Exclude<TeamType, TeamType.LEGACY | TeamType.MODERN>}

export type TeamIDWithVisibility = {
  teamId: TeamID
  visibility: TLFVisibility
}

export type PublicKey = {
  kid: KID
  pgpFingerprint: string
  pgpIdentities: PGPIdentity[] | null
  isSibkey: boolean
  isEldest: boolean
  parentId: string
  deviceId: DeviceID
  deviceDescription: string
  deviceType: DeviceTypeV2
  cTime: Time
  eTime: Time
  isRevoked: boolean
}

export type KeybaseTime = {
  unix: Time
  chain: Seqno
}

export type User = {
  uid: UID
  username: string
}

export type Device = {
  type: DeviceTypeV2
  name: string
  deviceId: DeviceID
  deviceNumberOfType: number
  cTime: Time
  mTime: Time
  lastUsedTime: Time
  encryptKey: KID
  verifyKey: KID
  status: number
}

export type UserVersionVector = {
  id: number
  sigHints: number
  sigChain: number
  cachedAt: Time
}

export type PerUserKey = {
  gen: number
  seqno: Seqno
  sigKid: KID
  encKid: KID
  signedByKid: KID
}

export type UserOrTeamLite = {
  id: UserOrTeamID
  name: string
}

export type RemoteTrack = {
  username: string
  uid: UID
  linkId: LinkID
}

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
export type SocialAssertion = {
  user: string
  service: SocialAssertionService
}

export type FullNamePackage = {
  version: FullNamePackageVersion
  fullName: FullName
  eldestSeqno: Seqno
  status: StatusCode
  cachedAt: Time
}

export type PhoneLookupResult = {
  uid: UID
  username: string
  ctime: UnixTime
}

export type UserReacjis = {
  topReacjis: UserReacji[] | null
  skinTone: ReacjiSkinTone
}

export type ClientDetails = {
  pid: number
  clientType: ClientType
  argv: string[] | null
  desc: string
  version: string
}

export type Config = {
  serverUri: string
  socketFile: string
  label: string
  runMode: string
  gpgExists: boolean
  gpgPath: string
  version: string
  path: string
  binaryRealpath: string
  configPath: string
  versionShort: string
  versionFull: string
  isAutoForked: boolean
  forkType: ForkType
}

export type UpdateInfo = {
  status: UpdateInfoStatus
  message: string
}

export type UpdateInfo2 =
  | {status: UpdateInfoStatus2.OK}
  | {status: UpdateInfoStatus2.SUGGESTED; SUGGESTED: UpdateDetails}
  | {status: UpdateInfoStatus2.CRITICAL; CRITICAL: UpdateDetails}
  | {status: Exclude<UpdateInfoStatus2, UpdateInfoStatus2.OK | UpdateInfoStatus2.SUGGESTED | UpdateInfoStatus2.CRITICAL>}

export type ProxyData = {
  addressWithPort: string
  proxyType: ProxyType
  certPinning: boolean
}

export type ContactComponent = {
  label: string
  phoneNumber?: RawPhoneNumber
  email?: EmailAddress
}

export type ED25519SignatureInfo = {
  sig: ED25519Signature
  publicKey: ED25519PublicKey
}

export type CiphertextBundle = {
  kid: KID
  ciphertext: EncryptedBytes32
  nonce: BoxNonce
  publicKey: BoxPublicKey
}

export type UnboxAnyRes = {
  kid: KID
  plaintext: Bytes32
  index: number
}

export type DbKey = {
  dbType: DbType
  objType: number
  key: string
}

export type EmailLookupResult = {
  email: EmailAddress
  uid?: UID
}

export type EmailAddressVerifiedMsg = {
  email: EmailAddress
}

export type EmailAddressChangedMsg = {
  email: EmailAddress
}

export type DeviceEkMetadata = {
  deviceEphemeralDhPublic: KID
  hashMeta: HashMeta
  generation: EkGeneration
  ctime: Time
  deviceCtime: Time
}

export type UserEkMetadata = {
  userEphemeralDhPublic: KID
  hashMeta: HashMeta
  generation: EkGeneration
  ctime: Time
}

export type UserEkBoxMetadata = {
  box: string
  recipientGeneration: EkGeneration
  recipientDeviceId: DeviceID
}

export type TeamEkMetadata = {
  teamEphemeralDhPublic: KID
  hashMeta: HashMeta
  generation: EkGeneration
  ctime: Time
}

export type TeamEkBoxMetadata = {
  box: string
  recipientGeneration: EkGeneration
  recipientUid: UID
}

export type TeambotEkMetadata = {
  teambotDhPublic: KID
  generation: EkGeneration
  uid: UID
  userEkGeneration: EkGeneration
  hashMeta: HashMeta
  ctime: Time
}

export type FolderHandle = {
  name: string
  folderType: FolderType
  created: boolean
}

export type FeaturedBotsRes = {
  bots: FeaturedBot[] | null
  isLastPage: boolean
}

export type SearchRes = {
  bots: FeaturedBot[] | null
  isLastPage: boolean
}

export type ListResult = {
  files: File[] | null
}

export type EncryptedGitMetadata = {
  v: number
  e: Buffer
  n: BoxNonce
  gen: PerTeamKeyGeneration
}

export type GitLocalMetadataV1 = {
  repoName: GitRepoName
}

export type GitCommit = {
  commitHash: string
  message: string
  authorName: string
  authorEmail: string
  ctime: Time
}

export type GitServerMetadata = {
  ctime: Time
  mtime: Time
  lastModifyingUsername: string
  lastModifyingDeviceId: DeviceID
  lastModifyingDeviceName: string
}

export type GPGKey = {
  algorithm: string
  keyId: string
  creation: string
  expiration: string
  identities: PGPIdentity[] | null
}

export type HomeScreenAnnouncement = {
  id: HomeScreenAnnouncementID
  version: HomeScreenAnnouncementVersion
  appLink: AppLinkType
  confirmLabel: string
  dismissable: boolean
  iconUrl: string
  text: string
  url: string
}

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
export type HomeScreenTodo =
  | {t: HomeScreenTodoType.VERIFY_ALL_PHONE_NUMBER; VERIFY_ALL_PHONE_NUMBER: PhoneNumber}
  | {t: HomeScreenTodoType.VERIFY_ALL_EMAIL; VERIFY_ALL_EMAIL: EmailAddress}
  | {t: HomeScreenTodoType.LEGACY_EMAIL_VISIBILITY; LEGACY_EMAIL_VISIBILITY: EmailAddress}
  | {
      t: Exclude<
        HomeScreenTodoType,
        HomeScreenTodoType.VERIFY_ALL_PHONE_NUMBER | HomeScreenTodoType.VERIFY_ALL_EMAIL | HomeScreenTodoType.LEGACY_EMAIL_VISIBILITY
      >
    }

export type VerifyAllEmailTodoExt = {
  lastVerifyEmailDate: UnixTime
}

export type HomeScreenPeopleNotificationContact = {
  resolveTime: Time
  username: string
  description: string
  resolvedContactBlob: string
}

export type HomeUserSummary = {
  uid: UID
  username: string
  bio: string
  fullName: string
  pics?: Pics
}

export type Identify3RowMeta = {
  color: Identify3RowColor
  label: string
}

export type Identify3Summary = {
  guiId: Identify3GUIID
  numProofsToCheck: number
}

export type TrackDiff = {
  type: TrackDiffType
  displayMarkup: string
}

export type TrackSummary = {
  username: string
  time: Time
  isRemote: boolean
}

export type TrackOptions = {
  localOnly: boolean
  bypassConfirm: boolean
  forceRetrack: boolean
  expiringLocal: boolean
  forPgpPull: boolean
  sigVersion?: SigVersion
}

export type IdentifyReason = {
  type: IdentifyReasonType
  reason: string
  resource: string
}

export type RemoteProof = {
  proofType: ProofType
  key: string
  value: string
  displayMarkup: string
  sigId: SigID
  mTime: Time
}

export type ProofResult = {
  state: ProofState
  status: ProofStatus
  desc: string
}

export type Cryptocurrency = {
  rowId: number
  pkhash: Buffer
  address: string
  sigId: SigID
  type: string
  family: string
}

export type StellarAccount = {
  accountId: string
  federationAddress: string
  sigId: SigID
  hidden: boolean
}

export type UserTeamShowcase = {
  fqName: string
  open: boolean
  teamIsShowcased: boolean
  description: string
  role: TeamRole
  publicAdmins: string[] | null
  numMembers: number
}

export type DismissReason = {
  type: DismissReasonType
  reason: string
  resource: string
}

export type IncomingShareItem = {
  type: IncomingShareType
  originalPath: string
  originalSize: number
  scaledPath?: string
  scaledSize?: number
  thumbnailPath?: string
  content?: string
}

export type KBFSTeamSettings = {
  tlfId: TLFID
}

export type FSNotification = {
  filename: string
  status: string
  statusCode: FSStatusCode
  notificationType: FSNotificationType
  errorType: FSErrorType
  params: {[key: string]: string}
  writerUid: UID
  localTime: Time
  folderType: FolderType
}

export type FSFolderWriterEdit = {
  filename: string
  notificationType: FSNotificationType
  serverTime: Time
}

export type FSPathSyncStatus = {
  folderType: FolderType
  path: string
  syncingBytes: number
  syncingOps: number
  syncedBytes: number
}

export type FSSyncStatus = {
  totalSyncingBytes: number
  syncingPaths: string[] | null
  endEstimate?: Time
}

export type GcOptions = {
  maxLooseRefs: number
  pruneMinLooseObjects: number
  pruneExpireTime: Time
  maxObjectPacks: number
}

export type Hello2Res = {
  encryptionKey: KID
  sigPayload: HelloRes
  deviceEkKid: KID
}

export type PerUserKeyBox = {
  generation: PerUserKeyGeneration
  box: string
  receiverKid: KID
}

export type KVEntryID = {
  teamId: TeamID
  namespace: string
  entryKey: string
}

export type KVListEntryResult = {
  teamName: string
  namespace: string
  entryKeys: KVListEntryKey[] | null
}

export type ConfiguredAccount = {
  username: string
  fullname: FullName
  hasStoredSecret: boolean
  isCurrent: boolean
}

export type ResetPrompt = {t: ResetPromptType.COMPLETE; COMPLETE: ResetPromptInfo} | {t: Exclude<ResetPromptType, ResetPromptType.COMPLETE>}

export type KBFSRoot = {
  treeId: MerkleTreeID
  root: KBFSRootHash
}

export type MerkleStoreEntry = {
  hash: MerkleStoreKitHash
  entry: MerkleStoreEntryString
}

export type KeyHalf = {
  user: UID
  deviceKid: KID
  key: Buffer
}

export type MDBlock = {
  version: number
  timestamp: Time
  block: Buffer
}

export type PingResponse = {
  timestamp: Time
}

export type KeyBundleResponse = {
  writerBundle: KeyBundle
  readerBundle: KeyBundle
}

export type LockContext = {
  requireLockId: LockID
  releaseAfterSuccess: boolean
}

export type FindNextMDResponse = {
  kbfsRoot: MerkleRoot
  merkleNodes: Buffer[] | null
  rootSeqno: Seqno
  rootHash: HashMeta
}

export type InstrumentationStat = {
  tag: string
  numCalls: number
  ctime: Time
  mtime: Time
  avgDur: DurationMsec
  maxDur: DurationMsec
  minDur: DurationMsec
  totalDur: DurationMsec
  avgSize: number
  maxSize: number
  minSize: number
  totalSize: number
}

export type TeamMemberOutReset = {
  teamId: TeamID
  teamname: string
  username: string
  uid: UID
  id: gregor1.MsgID
}

export type ResetState = {
  endTime: Time
  active: boolean
}

export type WotUpdate = {
  voucher: string
  vouchee: string
  status: WotStatusType
}

export type BadgeConversationInfo = {
  convId: ChatConversationID
  badgeCount: number
  unreadMessages: number
}

export type DbStats = {
  type: DbType
  memCompActive: boolean
  tableCompActive: boolean
}

export type ProcessRuntimeStats = {
  type: ProcessType
  cpu: string
  resident: string
  virt: string
  free: string
  goheap: string
  goheapsys: string
  goreleased: string
  cpuSeverity: StatsSeverityLevel
  residentSeverity: StatsSeverityLevel
}

export type PerfEvent = {
  message: string
  ctime: Time
  eventType: PerfEventType
}

export type GUIEntryFeatures = {
  showTyping: Feature
}

export type PGPSignOptions = {
  keyQuery: string
  mode: SignMode
  binaryIn: boolean
  binaryOut: boolean
}

export type PGPCreateUids = {
  useDefault: boolean
  ids: PGPIdentity[] | null
}

/**
 * Phone number support for TOFU chats.
 */
export type UserPhoneNumber = {
  phoneNumber: PhoneNumber
  verified: boolean
  superseded: boolean
  visibility: IdentityVisibility
  ctime: UnixTime
}

export type PhoneNumberLookupResult = {
  phoneNumber: RawPhoneNumber
  coercedPhoneNumber: PhoneNumber
  err?: string
  uid?: UID
}

export type PhoneNumberChangedMsg = {
  phone: PhoneNumber
}

export type FileDescriptor = {
  name: string
  type: FileType
}

export type CheckProofStatus = {
  found: boolean
  status: ProofStatus
  proofText: string
  state: ProofState
}

export type StartProofResult = {
  sigId: SigID
}

export type ParamProofJSON = {
  sigHash: SigID
  kbUsername: string
}

export type ParamProofServiceConfig = {
  version: number
  domain: string
  displayName: string
  description: string
  username: ParamProofUsernameConfig
  brandColor: string
  prefillUrl: string
  profileUrl: string
  checkUrl: string
  checkPath: SelectorEntry[] | null
  avatarPath: SelectorEntry[] | null
}

export type ProveParameters = {
  logoFull: SizedImage[] | null
  logoBlack: SizedImage[] | null
  logoWhite: SizedImage[] | null
  title: string
  subtext: string
  suffix: string
  buttonLabel: string
}

export type VerifySessionRes = {
  uid: UID
  sid: string
  generated: number
  lifetime: number
}

export type Reachability = {
  reachable: Reachable
}

export type TLF = {
  id: TLFID
  name: string
  writers: string[] | null
  readers: string[] | null
  isPrivate: boolean
}

export type RekeyEvent = {
  eventType: RekeyEventType
  interruptType: number
}

export type ResetMerkleRoot = {
  hashMeta: HashMeta
  seqno: Seqno
}

export type ResetPrev = {
  eldestKid?: KID
  publicSeqno: Seqno
  reset: SHA512
}

export type SaltpackEncryptOptions = {
  recipients: string[] | null
  teamRecipients: string[] | null
  authenticityType: AuthenticityType
  useEntityKeys: boolean
  useDeviceKeys: boolean
  usePaperKeys: boolean
  noSelfEncrypt: boolean
  binary: boolean
  saltpackVersion: number
  noForcePoll: boolean
  useKbfsKeysOnlyForTesting: boolean
}

export type SaltpackSender = {
  uid: UID
  username: string
  fullname: string
  senderType: SaltpackSenderType
}

export type SecretKeys = {
  signing: NaclSigningKeyPrivate
  encryption: NaclDHKeyPrivate
}

export type Session = {
  uid: UID
  username: string
  token: string
  deviceSubkeyKid: KID
  deviceSibkeyKid: KID
}

export type Sig = {
  seqno: Seqno
  sigId: SigID
  sigIdDisplay: string
  type: string
  cTime: Time
  revoked: boolean
  active: boolean
  key: string
  body: string
}

export type SigListArgs = {
  sessionId: number
  username: string
  allKeys: boolean
  types?: SigTypes
  filterx: string
  verbose: boolean
  revoked: boolean
}

export type KBFSArchivedParam =
  | {KBFSArchivedType: KBFSArchivedType.REVISION; REVISION: KBFSRevision}
  | {KBFSArchivedType: KBFSArchivedType.TIME; TIME: Time}
  | {KBFSArchivedType: KBFSArchivedType.TIME_STRING; TIME_STRING: string}
  | {KBFSArchivedType: KBFSArchivedType.REL_TIME_STRING; REL_TIME_STRING: string}
  | {
      KBFSArchivedType: Exclude<
        KBFSArchivedType,
        KBFSArchivedType.REVISION | KBFSArchivedType.TIME | KBFSArchivedType.TIME_STRING | KBFSArchivedType.REL_TIME_STRING
      >
    }

export type KBFSPath = {
  path: string
  identifyBehavior?: TLFIdentifyBehavior
}

export type PrefetchProgress = {
  start: Time
  endEstimate: Time
  bytesTotal: number
  bytesFetched: number
}

export type FileContent = {
  data: Buffer
  progress: Progress
}

export type OpProgress = {
  start: Time
  endEstimate: Time
  opType: AsyncOps
  bytesTotal: number
  bytesRead: number
  bytesWritten: number
  filesTotal: number
  filesRead: number
  filesWritten: number
}

export type FolderSyncConfig = {
  mode: FolderSyncMode
  paths: string[] | null
}

export type DownloadState = {
  downloadId: string
  progress: number
  endEstimate: Time
  localPath: string
  error: string
  done: boolean
  canceled: boolean
}

export type GUIFileContext = {
  viewType: GUIViewType
  contentType: string
  url: string
}

export type SimpleFSSearchResults = {
  hits: SimpleFSSearchHit[] | null
  nextResult: number
}

export type IndexProgressRecord = {
  endEstimate: Time
  bytesTotal: number
  bytesSoFar: number
}

export type TeambotKeyMetadata = {
  teambotDhPublic: KID
  generation: TeambotKeyGeneration
  uid: UID
  pukGeneration: PerUserKeyGeneration
  application: TeamApplication
}

export type PerTeamSeedCheck = {
  version: PerTeamSeedCheckVersion
  value: PerTeamSeedCheckValue
}

export type PerTeamSeedCheckPostImage = {
  h: PerTeamSeedCheckValuePostImage
  v: PerTeamSeedCheckVersion
}

export type TeamApplicationKey = {
  application: TeamApplication
  keyGeneration: PerTeamKeyGeneration
  key: Bytes32
}

export type ReaderKeyMask = {
  application: TeamApplication
  generation: PerTeamKeyGeneration
  mask: MaskB64
}

export type PerTeamKey = {
  gen: PerTeamKeyGeneration
  seqno: Seqno
  sigKid: KID
  encKid: KID
}

export type TeamMember = {
  uid: UID
  role: TeamRole
  eldestSeqno: Seqno
  status: TeamMemberStatus
  botSettings?: TeamBotSettings
}

export type TeamMemberRole = {
  uid: UID
  username: string
  fullName: FullName
  role: TeamRole
}

export type TeamUsedInvite = {
  inviteId: TeamInviteID
  uv: UserVersionPercentForm
}

export type LinkTriple = {
  seqno: Seqno
  seqType: SeqType
  linkId: LinkID
}

export type UpPointer = {
  ourSeqno: Seqno
  parentId: TeamID
  parentSeqno: Seqno
  deletion: boolean
}

export type DownPointer = {
  id: TeamID
  nameComponent: string
  isDeleted: boolean
}

export type Signer = {
  e: Seqno
  k: KID
  u: UID
}

export type Audit = {
  time: Time
  mms: Seqno
  mcs: Seqno
  mhs: Seqno
  mmp: Seqno
}

export type Probe = {
  i: number
  t: Seqno
  h: Seqno
}

export type TeamInviteType =
  | {c: TeamInviteCategory.UNKNOWN; UNKNOWN: string}
  | {c: TeamInviteCategory.SBS; SBS: TeamInviteSocialNetwork}
  | {c: Exclude<TeamInviteCategory, TeamInviteCategory.UNKNOWN | TeamInviteCategory.SBS>}

export type TeamGetLegacyTLFUpgrade = {
  encryptedKeyset: string
  teamGeneration: PerTeamKeyGeneration
  legacyGeneration: number
  appType: TeamApplication
}

export type TeamLegacyTLFUpgradeChainInfo = {
  keysetHash: TeamEncryptedKBFSKeysetHash
  teamGeneration: PerTeamKeyGeneration
  legacyGeneration: number
  appType: TeamApplication
}

export type TeamNameLogPoint = {
  lastPart: TeamNamePart
  seqno: Seqno
}

export type TeamName = {
  parts: TeamNamePart[] | null
}

export type TeamCLKRResetUser = {
  uid: UID
  userEldest: Seqno
  memberEldest: Seqno
}

export type TeamResetUser = {
  username: string
  uid: UID
  eldestSeqno: Seqno
  isDelete: boolean
}

export type TeamChangeRow = {
  id: TeamID
  name: string
  keyRotated: boolean
  membershipChanged: boolean
  latestSeqno: Seqno
  latestHiddenSeqno: Seqno
  latestOffchainVersion: Seqno
  implicitTeam: boolean
  misc: boolean
  removedResetUsers: boolean
}

export type TeamExitRow = {
  id: TeamID
}

export type TeamNewlyAddedRow = {
  id: TeamID
  name: string
}

export type TeamInvitee = {
  inviteId: TeamInviteID
  uid: UID
  eldestSeqno: Seqno
  role: TeamRole
}

export type TeamAccessRequest = {
  uid: UID
  eldestSeqno: Seqno
}

export type SeitanKeyLabel =
  | {t: SeitanKeyLabelType.SMS; SMS: SeitanKeyLabelSms}
  | {t: SeitanKeyLabelType.GENERIC; GENERIC: SeitanKeyLabelGeneric}
  | {t: Exclude<SeitanKeyLabelType, SeitanKeyLabelType.SMS | SeitanKeyLabelType.GENERIC>}

export type TeamSeitanRequest = {
  inviteId: TeamInviteID
  uid: UID
  eldestSeqno: Seqno
  akey: SeitanAKey
  role: TeamRole
  ctime: number
}

export type TeamKBFSKeyRefresher = {
  generation: number
  appType: TeamApplication
}

export type ImplicitRole = {
  role: TeamRole
  ancestor: TeamID
}

export type TeamJoinRequest = {
  name: string
  username: string
  fullName: FullName
  ctime: UnixTime
}

export type TeamCreateResult = {
  teamId: TeamID
  chatSent: boolean
  creatorAdded: boolean
}

export type TeamSettings = {
  open: boolean
  joinAs: TeamRole
}

export type TeamShowcase = {
  isShowcased: boolean
  description?: string
  setByUid?: UID
  anyMemberShowcase: boolean
}

export type UserRolePair = {
  assertion: string
  role: TeamRole
  botSettings?: TeamBotSettings
}

export type TeamMemberToRemove = {
  username: string
  email: string
  inviteId: TeamInviteID
  allowInaction: boolean
}

export type UntrustedTeamExistsResult = {
  exists: boolean
  status: StatusCode
}

export type Invitelink = {
  ikey: SeitanIKeyInvitelink
  url: string
}

export type ImplicitTeamConflictInfo = {
  generation: ConflictGeneration
  time: Time
}

export type TeamRolePair = {
  role: TeamRole
  implicitRole: TeamRole
}

export type UserTeamVersionUpdate = {
  version: UserTeamVersion
}

export type TeamTreeMembershipValue = {
  role: TeamRole
  joinTime?: Time
  teamId: TeamID
}

export type TeamTreeMembershipsDoneResult = {
  expectedCount: number
  targetTeamId: TeamID
  targetUsername: string
  guid: number
}

export type TeamSearchItem = {
  id: TeamID
  name: string
  description?: string
  memberCount: number
  lastActive: Time
  isDemoted: boolean
  inTeam: boolean
}

export type CryptKey = {
  keyGeneration: number
  key: Bytes32
}

export type TLFQuery = {
  tlfName: string
  identifyBehavior: TLFIdentifyBehavior
}

export type MerkleRootV2 = {
  seqno: Seqno
  hashMeta: HashMeta
}

export type SigChainLocation = {
  seqno: Seqno
  seqType: SeqType
}

export type UserSummary = {
  uid: UID
  username: string
  fullName: string
  linkId?: LinkID
}

export type Email = {
  email: EmailAddress
  isVerified: boolean
  isPrimary: boolean
  visibility: IdentityVisibility
  lastVerifyEmailDate: UnixTime
}

export type InterestingPerson = {
  uid: UID
  username: string
  fullname: string
  serviceMap: {[key: string]: string}
}

export type CanLogoutRes = {
  canLogout: boolean
  reason: string
  passphraseState: PassphraseState
}

export type UserPassphraseStateMsg = {
  state: PassphraseState
}

export type UserBlockedRow = {
  blockUid: UID
  blockUsername: string
  chat?: boolean
  follow?: boolean
}

export type UserBlockState = {
  blockType: UserBlockType
  blocked: boolean
}

export type UserBlock = {
  username: string
  chatBlocked: boolean
  followBlocked: boolean
  createTime?: Time
  modifyTime?: Time
}

export type TeamBlock = {
  fqName: string
  ctime: Time
}

export type APIUserKeybaseResult = {
  username: string
  uid: UID
  pictureUrl?: string
  fullName?: string
  rawScore: number
  stellar?: string
  isFollowee: boolean
}

export type APIUserServiceResult = {
  serviceName: APIUserServiceID
  username: string
  pictureUrl: string
  bio: string
  location: string
  fullName: string
  confirmed?: boolean
}

export type APIUserServiceSummary = {
  serviceName: APIUserServiceID
  username: string
}

export type WotProof = {
  proofType: ProofType
  nameOmitempty: string
  usernameOmitempty: string
  protocolOmitempty: string
  hostnameOmitempty: string
  domainOmitempty: string
}

export type GetLockdownResponse = {
  history: LockdownHistory[] | null
  status: boolean
}

export type ContactSettings = {
  version?: number
  allowFolloweeDegrees: number
  allowGoodTeams: boolean
  enabled: boolean
  teams: TeamContactSettings[] | null
}

export type BlockReference = {
  bid: BlockIdCombo
  nonce: BlockRefNonce
  chargedTo: UserOrTeamID
}

export type BlockIdCount = {
  id: BlockIdCombo
  liveCount: number
}

export type FolderUsageStat = {
  folderId: string
  stats: UsageStat
}

export type TeamIDAndName = {
  id: TeamID
  name: TeamName
}

export type RevokedKey = {
  key: PublicKey
  time: KeybaseTime
  by: KID
}

export type CurrentStatus = {
  configured: boolean
  registered: boolean
  loggedIn: boolean
  sessionIsValid: boolean
  user?: User
  deviceName: string
}

export type ClientStatus = {
  details: ClientDetails
  connectionId: number
  notificationChannels: NotificationChannels
}

export type BootstrapStatus = {
  registered: boolean
  loggedIn: boolean
  uid: UID
  username: string
  deviceId: DeviceID
  deviceName: string
  fullname: FullName
  userReacjis: UserReacjis
  httpSrvInfo?: HttpSrvInfo
}

export type Contact = {
  name: string
  components: ContactComponent[] | null
}

export type ProcessedContact = {
  contactIndex: number
  contactName: string
  component: ContactComponent
  resolved: boolean
  uid: UID
  username: string
  fullName: string
  following: boolean
  serviceMap: {[key: string]: string}
  assertion: string
  displayName: string
  displayLabel: string
}

export type DeviceDetail = {
  device: Device
  eldest: boolean
  provisioner?: Device
  provisionedAt?: Time
  revokedAt?: Time
  revokedBy: KID
  revokedByDevice?: Device
  currentDevice: boolean
}

export type DeviceEkStatement = {
  currentDeviceEkMetadata: DeviceEkMetadata
}

export type DeviceEk = {
  seed: Bytes32
  metadata: DeviceEkMetadata
}

export type UserEkStatement = {
  currentUserEkMetadata: UserEkMetadata
}

export type UserEkBoxed = {
  box: string
  deviceEkGeneration: EkGeneration
  metadata: UserEkMetadata
}

export type UserEk = {
  seed: Bytes32
  metadata: UserEkMetadata
}

export type UserEkReboxArg = {
  userEkBoxMetadata: UserEkBoxMetadata
  deviceId: DeviceID
  deviceEkStatementSig: string
}

export type TeamEkStatement = {
  currentTeamEkMetadata: TeamEkMetadata
}

export type TeamEkBoxed = {
  box: string
  userEkGeneration: EkGeneration
  metadata: TeamEkMetadata
}

export type TeamEk = {
  seed: Bytes32
  metadata: TeamEkMetadata
}

export type TeambotEkBoxed = {
  box: string
  metadata: TeambotEkMetadata
}

export type TeambotEk = {
  seed: Bytes32
  metadata: TeambotEkMetadata
}

export type GitLocalMetadataVersioned =
  | {version: GitLocalMetadataVersion.V1; V1: GitLocalMetadataV1}
  | {version: Exclude<GitLocalMetadataVersion, GitLocalMetadataVersion.V1>}

export type GitRefMetadata = {
  refName: string
  commits: GitCommit[] | null
  moreCommitsAvailable: boolean
  isDelete: boolean
}

export type HomeScreenTodoExt =
  | {t: HomeScreenTodoType.VERIFY_ALL_EMAIL; VERIFY_ALL_EMAIL: VerifyAllEmailTodoExt}
  | {t: Exclude<HomeScreenTodoType, HomeScreenTodoType.VERIFY_ALL_EMAIL>}

export type HomeScreenPeopleNotificationFollowed = {
  followTime: Time
  followedBack: boolean
  user: UserSummary
}

export type HomeScreenPeopleNotificationContactMulti = {
  contacts: HomeScreenPeopleNotificationContact[] | null
  numOthers: number
}

export type Identify3Row = {
  guiId: Identify3GUIID
  key: string
  value: string
  priority: number
  siteUrl: string
  siteIcon: SizedImage[] | null
  siteIconDarkmode: SizedImage[] | null
  siteIconFull: SizedImage[] | null
  siteIconFullDarkmode: SizedImage[] | null
  proofUrl: string
  sigId: SigID
  ctime: Time
  state: Identify3RowState
  metas: Identify3RowMeta[] | null
  color: Identify3RowColor
  kid?: KID
}

export type IdentifyOutcome = {
  username: string
  status?: Status
  warnings: string[] | null
  trackUsed?: TrackSummary
  trackStatus: TrackStatus
  numTrackFailures: number
  numTrackChanges: number
  numProofFailures: number
  numRevoked: number
  numProofSuccesses: number
  revoked: TrackDiff[] | null
  trackOptions: TrackOptions
  forPgpPull: boolean
  reason: IdentifyReason
}

export type IdentifyRow = {
  rowId: number
  proof: RemoteProof
  trackDiff?: TrackDiff
}

export type IdentifyKey = {
  pgpFingerprint: Buffer
  kid: KID
  trackDiff?: TrackDiff
  breaksTracking: boolean
  sigId: SigID
}

export type RevokedProof = {
  proof: RemoteProof
  diff: TrackDiff
  snoozed: boolean
}

export type CheckResult = {
  proofResult: ProofResult
  time: Time
  freshness: CheckResultFreshness
}

export type UserCard = {
  unverifiedNumFollowing: number
  unverifiedNumFollowers: number
  uid: UID
  fullName: string
  location: string
  bio: string
  bioDecorated: string
  website: string
  twitter: string
  teamShowcase: UserTeamShowcase[] | null
  registeredForAirdrop: boolean
  stellarHidden: boolean
  blocked: boolean
  hidFromFollowers: boolean
}

export type ServiceStatus = {
  version: string
  label: string
  pid: string
  lastExitStatus: string
  bundleVersion: string
  installStatus: InstallStatus
  installAction: InstallAction
  status: Status
}

export type FuseStatus = {
  version: string
  bundleVersion: string
  kextId: string
  path: string
  kextStarted: boolean
  installStatus: InstallStatus
  installAction: InstallAction
  mountInfos: FuseMountInfo[] | null
  status: Status
}

export type ComponentResult = {
  name: string
  status: Status
  exitCode: number
}

export type FSFolderWriterEditHistory = {
  writerName: string
  edits: FSFolderWriterEdit[] | null
  deletes: FSFolderWriterEdit[] | null
}

export type FolderSyncStatus = {
  localDiskBytesAvailable: number
  localDiskBytesTotal: number
  prefetchStatus: PrefetchStatus
  prefetchProgress: PrefetchProgress
  storedBytesTotal: number
  outOfSyncSpace: boolean
}

export type MerkleRootAndTime = {
  root: MerkleRootV2
  updateTime: Time
  fetchTime: Time
}

export type MetadataResponse = {
  folderId: string
  mdBlocks: MDBlock[] | null
}

export type BadgeState = {
  newTlfs: number
  rekeysNeeded: number
  newFollowers: number
  inboxVers: number
  homeTodoItems: number
  unverifiedEmails: number
  unverifiedPhones: number
  smallTeamBadgeCount: number
  bigTeamBadgeCount: number
  newTeamAccessRequestCount: number
  newDevices: DeviceID[] | null
  revokedDevices: DeviceID[] | null
  conversations: BadgeConversationInfo[] | null
  newGitRepoGlobalUniqueIDs: string[] | null
  newTeams: TeamID[] | null
  deletedTeams: DeletedTeamInfo[] | null
  teamsWithResetUsers: TeamMemberOutReset[] | null
  unreadWalletAccounts: WalletAccountInfo[] | null
  wotUpdates: {[key: string]: WotUpdate}
  resetState: ResetState
}

export type RuntimeStats = {
  processStats: ProcessRuntimeStats[] | null
  dbStats: DbStats[] | null
  perfEvents: PerfEvent[] | null
  convLoaderActive: boolean
  selectiveSyncActive: boolean
}

export type GUIEntryArg = {
  windowTitle: string
  prompt: string
  username: string
  submitLabel: string
  cancelLabel: string
  retryLabel: string
  type: PassphraseType
  features: GUIEntryFeatures
}

/**
 * PGPSigVerification is returned by pgpDecrypt and pgpVerify with information
 *     about the signature verification. If isSigned is false, there was no
 *     signature, and the rest of the fields should be ignored.
 */
export type PGPSigVerification = {
  isSigned: boolean
  verified: boolean
  signer: User
  signKey: PublicKey
  warnings: string[] | null
}

export type Process = {
  pid: string
  command: string
  fileDescriptors: FileDescriptor[] | null
}

export type ExternalServiceConfig = {
  schemaVersion: number
  display?: ServiceDisplayConfig
  config?: ParamProofServiceConfig
}

export type ProblemTLF = {
  tlf: TLF
  score: number
  solutionKids: KID[] | null
}

export type RevokeWarning = {
  endangeredTlFs: TLF[] | null
}

export type ResetLink = {
  ctime: UnixTime
  merkleRoot: ResetMerkleRoot
  prev: ResetPrev
  resetSeqno: Seqno
  type: ResetType
  uid: UID
}

export type ResetSummary = {
  ctime: UnixTime
  merkleRoot: ResetMerkleRoot
  resetSeqno: Seqno
  eldestSeqno: Seqno
  type: ResetType
}

export type SaltpackEncryptedMessageInfo = {
  devices: Device[] | null
  numAnonReceivers: number
  receiverIsAnon: boolean
  sender: SaltpackSender
}

export type SaltpackVerifyResult = {
  signingKid: KID
  sender: SaltpackSender
  plaintext: string
  verified: boolean
}

export type SaltpackVerifyFileResult = {
  signingKid: KID
  sender: SaltpackSender
  verifiedFilename: string
  verified: boolean
}

export type KBFSArchivedPath = {
  path: string
  archivedParam: KBFSArchivedParam
  identifyBehavior?: TLFIdentifyBehavior
}

export type Dirent = {
  time: Time
  size: number
  name: string
  direntType: DirentType
  lastWriterUnverified: User
  writable: boolean
  prefetchStatus: PrefetchStatus
  prefetchProgress: PrefetchProgress
  symlinkTarget: string
}

export type SimpleFSStats = {
  processStats: ProcessRuntimeStats
  blockCacheDbStats: string[] | null
  syncCacheDbStats: string[] | null
  runtimeDbStats: DbStats[] | null
}

export type DownloadInfo = {
  downloadId: string
  path: KBFSPath
  filename: string
  startTime: Time
  isRegularDownload: boolean
}

export type DownloadStatus = {
  regularDownloadIDs: string[] | null
  states: DownloadState[] | null
}

export type UploadState = {
  uploadId: string
  targetPath: KBFSPath
  error?: string
  canceled: boolean
}

export type TeambotKeyBoxed = {
  box: string
  metadata: TeambotKeyMetadata
}

export type TeambotKey = {
  seed: Bytes32
  metadata: TeambotKeyMetadata
}

export type PerTeamKeyAndCheck = {
  ptk: PerTeamKey
  check: PerTeamSeedCheckPostImage
}

export type PerTeamKeySeedItem = {
  seed: PerTeamKeySeed
  generation: PerTeamKeyGeneration
  seqno: Seqno
  check?: PerTeamSeedCheck
}

export type TeamMembers = {
  owners: UserVersion[] | null
  admins: UserVersion[] | null
  writers: UserVersion[] | null
  readers: UserVersion[] | null
  bots: UserVersion[] | null
  restrictedBots: UserVersion[] | null
}

export type TeamMemberDetails = {
  uv: UserVersion
  username: string
  fullName: FullName
  needsPuk: boolean
  status: TeamMemberStatus
  joinTime?: Time
}

export type UntrustedTeamInfo = {
  name: TeamName
  inTeam: boolean
  open: boolean
  description: string
  publicAdmins: string[] | null
  numMembers: number
  publicMembers: TeamMemberRole[] | null
}

export type TeamChangeReq = {
  owners: UserVersion[] | null
  admins: UserVersion[] | null
  writers: UserVersion[] | null
  readers: UserVersion[] | null
  bots: UserVersion[] | null
  restrictedBots: {[key: string]: TeamBotSettings}
  none: UserVersion[] | null
  completedInvites: {[key: string]: UserVersionPercentForm}
  usedInvites: TeamUsedInvite[] | null
}

export type TeamPlusApplicationKeys = {
  id: TeamID
  name: string
  implicit: boolean
  public: boolean
  application: TeamApplication
  writers: UserVersion[] | null
  onlyReaders: UserVersion[] | null
  onlyRestrictedBots: UserVersion[] | null
  applicationKeys: TeamApplicationKey[] | null
}

export type LinkTripleAndTime = {
  triple: LinkTriple
  time: Time
}

export type FastTeamSigChainState = {
  id: TeamID
  public: boolean
  rootAncestor: TeamName
  nameDepth: number
  last?: LinkTriple
  perTeamKeys: {[key: string]: PerTeamKey}
  perTeamKeySeedsVerified: {[key: string]: PerTeamKeySeed}
  downPointers: {[key: string]: DownPointer}
  lastUpPointer?: UpPointer
  perTeamKeyCTime: UnixTime
  linkIDs: {[key: string]: LinkID}
  merkleInfo: {[key: string]: MerkleRootV2}
}

export type AuditHistory = {
  id: TeamID
  public: boolean
  priorMerkleSeqno: Seqno
  version: AuditVersion
  audits: Audit[] | null
  preProbes: {[key: string]: Probe}
  postProbes: {[key: string]: Probe}
  tails: {[key: string]: LinkID}
  hiddenTails: {[key: string]: LinkID}
  preProbesToRetry: Seqno[] | null
  postProbesToRetry: Seqno[] | null
  skipUntil: Time
}

export type TeamInvite = {
  role: TeamRole
  id: TeamInviteID
  type: TeamInviteType
  name: TeamInviteName
  inviter: UserVersion
  maxUses?: TeamInviteMaxUses
  etime?: UnixTime
}

export type TeamUsedInviteLogPoint = {
  uv: UserVersion
  logPoint: number
}

export type SubteamLogPoint = {
  name: TeamName
  seqno: Seqno
}

export type TeamCLKRMsg = {
  teamId: TeamID
  generation: PerTeamKeyGeneration
  score: number
  resetUsers: TeamCLKRResetUser[] | null
}

export type TeamMemberOutFromReset = {
  teamId: TeamID
  teamName: string
  resetUser: TeamResetUser
}

export type TeamSBSMsg = {
  teamId: TeamID
  score: number
  invitees: TeamInvitee[] | null
}

export type TeamOpenReqMsg = {
  teamId: TeamID
  tars: TeamAccessRequest[] | null
}

export type SeitanKeyAndLabelVersion1 = {
  i: SeitanIKey
  l: SeitanKeyLabel
}

export type SeitanKeyAndLabelVersion2 = {
  k: SeitanPubKey
  l: SeitanKeyLabel
}

export type SeitanKeyAndLabelInvitelink = {
  i: SeitanIKeyInvitelink
  l: SeitanKeyLabel
}

export type TeamSeitanMsg = {
  teamId: TeamID
  seitans: TeamSeitanRequest[] | null
}

export type TeamOpenSweepMsg = {
  teamId: TeamID
  resetUsers: TeamCLKRResetUser[] | null
}

/**
 * * TeamRefreshData are needed or wanted data requirements that, if unmet, will cause
 *    * a refresh of the cache.
 */
export type TeamRefreshers = {
  needKeyGeneration: PerTeamKeyGeneration
  needApplicationsAtGenerations: {[key: string]: TeamApplication[] | null}
  needApplicationsAtGenerationsWithKbfs: {[key: string]: TeamApplication[] | null}
  wantMembers: UserVersion[] | null
  wantMembersRole: TeamRole
  needKbfsKeyGeneration: TeamKBFSKeyRefresher
}

export type FastTeamLoadArg = {
  id: TeamID
  public: boolean
  assertTeamName?: TeamName
  applications: TeamApplication[] | null
  keyGenerationsNeeded: PerTeamKeyGeneration[] | null
  needLatestKey: boolean
  forceRefresh: boolean
  hiddenChainIsOptional: boolean
}

export type FastTeamLoadRes = {
  name: TeamName
  applicationKeys: TeamApplicationKey[] | null
}

export type MemberInfo = {
  uid: UID
  teamId: TeamID
  fqName: string
  isImplicitTeam: boolean
  isOpenTeam: boolean
  role: TeamRole
  implicit?: ImplicitRole
  memberCount: number
  allowProfilePromote: boolean
  isMemberShowcased: boolean
}

export type AnnotatedMemberInfo = {
  uid: UID
  teamId: TeamID
  username: string
  fullName: string
  fqName: string
  isImplicitTeam: boolean
  implicitTeamDisplayName: string
  isOpenTeam: boolean
  role: TeamRole
  implicit?: ImplicitRole
  needsPuk: boolean
  memberCount: number
  memberEldestSeqno: Seqno
  allowProfilePromote: boolean
  isMemberShowcased: boolean
  status: TeamMemberStatus
}

export type TeamAddMemberResult = {
  invited: boolean
  user?: User
  chatSending: boolean
}

export type TeamAddMembersResult = {
  notAdded: User[] | null
}

export type TeamTreeEntry = {
  name: TeamName
  admin: boolean
}

export type SubteamListEntry = {
  name: TeamName
  teamId: TeamID
  memberCount: number
}

export type TeamAndMemberShowcase = {
  teamShowcase: TeamShowcase
  isMemberShowcased: boolean
}

export type TeamRemoveMembersResult = {
  failures: TeamMemberToRemove[] | null
}

export type TeamEditMembersResult = {
  failures: UserRolePair[] | null
}

export type InviteLinkDetails = {
  inviteId: TeamInviteID
  inviterUid: UID
  inviterUsername: string
  inviterResetOrDel: boolean
  teamIsOpen: boolean
  teamId: TeamID
  teamDesc: string
  teamName: TeamName
  teamNumMembers: number
  teamAvatars: {[key: string]: AvatarUrl}
}

export type ImplicitTeamUserSet = {
  keybaseUsers: string[] | null
  unresolvedUsers: SocialAssertion[] | null
}

export type TeamProfileAddEntry = {
  teamId: TeamID
  teamName: TeamName
  open: boolean
  disabledReason: string
}

export type TeamRoleMapAndVersion = {
  teams: {[key: string]: TeamRolePair}
  userTeamVersion: UserTeamVersion
}

export type TeamTreeMembershipResult =
  | {s: TeamTreeMembershipStatus.OK; OK: TeamTreeMembershipValue}
  | {s: TeamTreeMembershipStatus.ERROR; ERROR: TeamTreeError}
  | {s: TeamTreeMembershipStatus.HIDDEN}
  | {s: Exclude<TeamTreeMembershipStatus, TeamTreeMembershipStatus.OK | TeamTreeMembershipStatus.ERROR | TeamTreeMembershipStatus.HIDDEN>}

export type TeamSearchExport = {
  items: {[key: string]: TeamSearchItem}
  suggested: TeamID[] | null
}

export type TeamSearchRes = {
  results: TeamSearchItem[] | null
}

export type MerkleTreeLocation = {
  leaf: UserOrTeamID
  loc: SigChainLocation
}

export type SignatureMetadata = {
  signingKid: KID
  prevMerkleRootSigned: MerkleRootV2
  firstAppearedUnverified: Seqno
  time: Time
  sigChainLocation: SigChainLocation
}

export type Proofs = {
  social: TrackProof[] | null
  web: WebProof[] | null
  publicKeys: PublicKey[] | null
}

export type UserSummarySet = {
  users: UserSummary[] | null
  time: Time
  version: number
}

export type UserSettings = {
  emails: Email[] | null
  phoneNumbers: UserPhoneNumber[] | null
}

export type ProofSuggestion = {
  key: string
  belowFold: boolean
  profileText: string
  profileIcon: SizedImage[] | null
  profileIconDarkmode: SizedImage[] | null
  pickerText: string
  pickerSubtext: string
  pickerIcon: SizedImage[] | null
  pickerIconDarkmode: SizedImage[] | null
  metas: Identify3RowMeta[] | null
}

export type NextMerkleRootRes = {
  res?: MerkleRootV2
}

export type UserBlockedBody = {
  blocks: UserBlockedRow[] | null
  blockerUid: UID
  blockerUsername: string
}

export type UserBlockedSummary = {
  blocker: string
  blocks: {[key: string]: UserBlockState[] | null}
}

export type Confidence = {
  usernameVerifiedViaOmitempty: UsernameVerificationType
  proofsOmitempty: WotProof[] | null
  otherOmitempty: string
}

export type BlockReferenceCount = {
  ref: BlockReference
  liveCount: number
}

export type ReferenceCountRes = {
  counts: BlockIdCount[] | null
}

export type BlockQuotaInfo = {
  folders: FolderUsageStat[] | null
  total: UsageStat
  limit: number
  gitLimit: number
}

export type UserPlusKeys = {
  uid: UID
  username: string
  eldestSeqno: Seqno
  status: StatusCode
  deviceKeys: PublicKey[] | null
  revokedDeviceKeys: RevokedKey[] | null
  pgpKeyCount: number
  uvv: UserVersionVector
  deletedDeviceKeys: PublicKey[] | null
  perUserKeys: PerUserKey[] | null
  resets: ResetSummary[] | null
}

export type ExtendedStatus = {
  standalone: boolean
  passphraseStreamCached: boolean
  tsecCached: boolean
  deviceSigKeyCached: boolean
  deviceEncKeyCached: boolean
  paperSigKeyCached: boolean
  paperEncKeyCached: boolean
  storedSecret: boolean
  secretPromptSkip: boolean
  rememberPassphrase: boolean
  device?: Device
  deviceErr?: LoadDeviceErr
  logDir: string
  session?: SessionStatus
  defaultUsername: string
  provisionedUsernames: string[] | null
  configuredAccounts: ConfiguredAccount[] | null
  clients: ClientStatus[] | null
  deviceEkNames: string[] | null
  platformInfo: PlatformInfo
  defaultDeviceId: DeviceID
  localDbStats: string[] | null
  localChatDbStats: string[] | null
  localBlockCacheDbStats: string[] | null
  localSyncCacheDbStats: string[] | null
  cacheDirSizeInfo: DirSizeInfo[] | null
  uiRouterMapping: {[key: string]: number}
}

export type ContactListResolutionResult = {
  newlyResolved: ProcessedContact[] | null
  resolved: ProcessedContact[] | null
}

export type TeamEphemeralKey =
  | {keyType: TeamEphemeralKeyType.TEAM; TEAM: TeamEk}
  | {keyType: TeamEphemeralKeyType.TEAMBOT; TEAMBOT: TeambotEk}
  | {keyType: Exclude<TeamEphemeralKeyType, TeamEphemeralKeyType.TEAM | TeamEphemeralKeyType.TEAMBOT>}

export type TeamEphemeralKeyBoxed =
  | {keyType: TeamEphemeralKeyType.TEAM; TEAM: TeamEkBoxed}
  | {keyType: TeamEphemeralKeyType.TEAMBOT; TEAMBOT: TeambotEkBoxed}
  | {keyType: Exclude<TeamEphemeralKeyType, TeamEphemeralKeyType.TEAM | TeamEphemeralKeyType.TEAMBOT>}

export type GitLocalMetadata = {
  repoName: GitRepoName
  refs: GitRefMetadata[] | null
  pushType: GitPushType
  previousRepoName: GitRepoName
}

export type HomeScreenItemDataExt =
  | {t: HomeScreenItemType.TODO; TODO: HomeScreenTodoExt}
  | {t: Exclude<HomeScreenItemType, HomeScreenItemType.TODO>}

export type HomeScreenPeopleNotificationFollowedMulti = {
  followers: HomeScreenPeopleNotificationFollowed[] | null
  numOthers: number
}

export type Identity = {
  status?: Status
  whenLastTracked: Time
  proofs: IdentifyRow[] | null
  cryptocurrency: Cryptocurrency[] | null
  revoked: TrackDiff[] | null
  revokedDetails: RevokedProof[] | null
  breaksTracking: boolean
}

export type LinkCheckResult = {
  proofId: number
  proofResult: ProofResult
  snoozedResult: ProofResult
  torWarning: boolean
  tmpTrackExpireTime: Time
  cached?: CheckResult
  diff?: TrackDiff
  remoteDiff?: TrackDiff
  hint?: SigHint
  breaksTracking: boolean
}

export type ServicesStatus = {
  service: ServiceStatus[] | null
  kbfs: ServiceStatus[] | null
  updater: ServiceStatus[] | null
}

export type InstallResult = {
  componentResults: ComponentResult[] | null
  status: Status
  fatal: boolean
}

export type UninstallResult = {
  componentResults: ComponentResult[] | null
  status: Status
}

/**
 * ProblemSet is for a particular (user,kid) that initiated a rekey problem.
 *    This problem consists of one or more problem TLFs, which are individually scored
 *    and have attendant solutions --- devices that if they came online can rekey and
 *    solve the ProblemTLF.
 */
export type ProblemSet = {
  user: User
  kid: KID
  tlfs: ProblemTLF[] | null
}

export type SaltpackPlaintextResult = {
  info: SaltpackEncryptedMessageInfo
  plaintext: string
  signed: boolean
}

export type SaltpackFileResult = {
  info: SaltpackEncryptedMessageInfo
  decryptedFilename: string
  signed: boolean
}

export type Path =
  | {PathType: PathType.LOCAL; LOCAL: string}
  | {PathType: PathType.KBFS; KBFS: KBFSPath}
  | {PathType: PathType.KBFS_ARCHIVED; KBFS_ARCHIVED: KBFSArchivedPath}
  | {PathType: Exclude<PathType, PathType.LOCAL | PathType.KBFS | PathType.KBFS_ARCHIVED>}

export type DirentWithRevision = {
  entry: Dirent
  revision: KBFSRevision
}

export type SimpleFSListResult = {
  entries: Dirent[] | null
  progress: Progress
}

export type FolderSyncConfigAndStatus = {
  config: FolderSyncConfig
  status: FolderSyncStatus
}

export type TeamMembersDetails = {
  owners: TeamMemberDetails[] | null
  admins: TeamMemberDetails[] | null
  writers: TeamMemberDetails[] | null
  readers: TeamMemberDetails[] | null
  bots: TeamMemberDetails[] | null
  restrictedBots: TeamMemberDetails[] | null
}

export type FastTeamData = {
  frozen: boolean
  subversion: number
  tombstoned: boolean
  name: TeamName
  chain: FastTeamSigChainState
  perTeamKeySeedsUnverified: {[key: string]: PerTeamKeySeed}
  maxContinuousPtkGeneration: PerTeamKeyGeneration
  seedChecks: {[key: string]: PerTeamSeedCheck}
  latestKeyGeneration: PerTeamKeyGeneration
  readerKeyMasks: {[key: string]: {[key: string]: MaskB64}}
  latestSeqnoHint: Seqno
  cachedAt: Time
  loadedLatest: boolean
}

export type HiddenTeamChainRatchetSet = {
  ratchets: {[key: string]: LinkTripleAndTime}
}

export type HiddenTeamChainLink = {
  m: MerkleRootV2
  p: LinkTriple
  s: Signer
  k: {[key: string]: PerTeamKeyAndCheck}
}

export type UserLogPoint = {
  role: TeamRole
  sigMeta: SignatureMetadata
}

export type AnnotatedTeamUsedInviteLogPoint = {
  username: string
  teamUsedInviteLogPoint: TeamUsedInviteLogPoint
}

export type SeitanKeyAndLabel =
  | {v: SeitanKeyAndLabelVersion.V1; V1: SeitanKeyAndLabelVersion1}
  | {v: SeitanKeyAndLabelVersion.V2; V2: SeitanKeyAndLabelVersion2}
  | {v: SeitanKeyAndLabelVersion.Invitelink; Invitelink: SeitanKeyAndLabelInvitelink}
  | {v: Exclude<SeitanKeyAndLabelVersion, SeitanKeyAndLabelVersion.V1 | SeitanKeyAndLabelVersion.V2 | SeitanKeyAndLabelVersion.Invitelink>}

export type LoadTeamArg = {
  id: TeamID
  name: string
  public: boolean
  needAdmin: boolean
  refreshUidMapper: boolean
  refreshers: TeamRefreshers
  forceFullReload: boolean
  forceRepoll: boolean
  staleOk: boolean
  allowNameLookupBurstCache: boolean
  skipNeedHiddenRotateCheck: boolean
  auditMode: AuditMode
}

export type TeamList = {
  teams: MemberInfo[] | null
}

export type TeamTreeResult = {
  entries: TeamTreeEntry[] | null
}

export type SubteamListResult = {
  entries: SubteamListEntry[] | null
}

/**
 * * iTeams
 */
export type ImplicitTeamDisplayName = {
  isPublic: boolean
  writers: ImplicitTeamUserSet
  readers: ImplicitTeamUserSet
  conflictInfo?: ImplicitTeamConflictInfo
}

export type TeamRoleMapStored = {
  data: TeamRoleMapAndVersion
  cachedAt: Time
}

export type AnnotatedTeamMemberDetails = {
  details: TeamMemberDetails
  role: TeamRole
}

export type TeamTreeMembership = {
  teamName: string
  result: TeamTreeMembershipResult
  targetTeamId: TeamID
  targetUsername: string
  guid: number
}

export type PublicKeyV2Base = {
  kid: KID
  isSibkey: boolean
  isEldest: boolean
  cTime: Time
  eTime: Time
  provisioning: SignatureMetadata
  revocation?: SignatureMetadata
}

export type ProofSuggestionsRes = {
  suggestions: ProofSuggestion[] | null
  showMore: boolean
}

export type APIUserSearchResult = {
  score: number
  keybase?: APIUserKeybaseResult
  service?: APIUserServiceResult
  contact?: ProcessedContact
  imptofu?: ImpTofuSearchResult
  servicesSummary: {[key: string]: APIUserServiceSummary}
  rawScore: number
}

export type NonUserDetails = {
  isNonUser: boolean
  assertionValue: string
  assertionKey: string
  description: string
  contact?: ProcessedContact
  service?: APIUserServiceResult
  siteIcon: SizedImage[] | null
  siteIconDarkmode: SizedImage[] | null
  siteIconFull: SizedImage[] | null
  siteIconFullDarkmode: SizedImage[] | null
}

export type WotVouch = {
  status: WotStatusType
  vouchProof: SigID
  vouchee: UserVersion
  voucheeUsername: string
  voucher: UserVersion
  voucherUsername: string
  vouchTexts: string[] | null
  vouchedAt: Time
  confidence?: Confidence
}

export type DowngradeReferenceRes = {
  completed: BlockReferenceCount[] | null
  failed: BlockReference
}

export type UserPlusAllKeys = {
  base: UserPlusKeys
  pgpKeys: PublicKey[] | null
  remoteTracks: RemoteTrack[] | null
}

export type FullStatus = {
  username: string
  configPath: string
  curStatus: CurrentStatus
  extStatus: ExtendedStatus
  client: KbClientStatus
  service: KbServiceStatus
  kbfs: KBFSStatus
  desktop: DesktopStatus
  updater: UpdaterStatus
  start: StartStatus
  git: GitStatus
}

export type FolderNormalView = {
  resolvingConflict: boolean
  stuckInConflict: boolean
  localViews: Path[] | null
}

export type FolderConflictManualResolvingLocalView = {
  normalView: Path
}

export type GitRepoInfo = {
  folder: FolderHandle
  repoId: RepoID
  localMetadata: GitLocalMetadata
  serverMetadata: GitServerMetadata
  repoUrl: string
  globalUniqueId: string
  canDelete: boolean
  teamRepoSettings?: GitTeamRepoSettings
}

export type HomeScreenPeopleNotification =
  | {t: HomeScreenPeopleNotificationType.FOLLOWED; FOLLOWED: HomeScreenPeopleNotificationFollowed}
  | {t: HomeScreenPeopleNotificationType.FOLLOWED_MULTI; FOLLOWED_MULTI: HomeScreenPeopleNotificationFollowedMulti}
  | {t: HomeScreenPeopleNotificationType.CONTACT; CONTACT: HomeScreenPeopleNotificationContact}
  | {t: HomeScreenPeopleNotificationType.CONTACT_MULTI; CONTACT_MULTI: HomeScreenPeopleNotificationContactMulti}
  | {
      t: Exclude<
        HomeScreenPeopleNotificationType,
        | HomeScreenPeopleNotificationType.FOLLOWED
        | HomeScreenPeopleNotificationType.FOLLOWED_MULTI
        | HomeScreenPeopleNotificationType.CONTACT
        | HomeScreenPeopleNotificationType.CONTACT_MULTI
      >
    }

export type IdentifyProofBreak = {
  remoteProof: RemoteProof
  lcr: LinkCheckResult
}

export type ProblemSetDevices = {
  problemSet: ProblemSet
  devices: Device[] | null
}

export type ListArgs = {
  opId: OpID
  path: Path
  filter: ListFilter
}

export type ListToDepthArgs = {
  opId: OpID
  path: Path
  filter: ListFilter
  depth: number
}

export type RemoveArgs = {
  opId: OpID
  path: Path
  recursive: boolean
}

export type ReadArgs = {
  opId: OpID
  path: Path
  offset: number
  size: number
}

export type WriteArgs = {
  opId: OpID
  path: Path
  offset: number
}

export type CopyArgs = {
  opId: OpID
  src: Path
  dest: Path
  overwriteExistingFiles: boolean
}

export type MoveArgs = {
  opId: OpID
  src: Path
  dest: Path
  overwriteExistingFiles: boolean
}

export type GetRevisionsArgs = {
  opId: OpID
  path: Path
  spanType: RevisionSpanType
}

export type GetRevisionsResult = {
  revisions: DirentWithRevision[] | null
  progress: Progress
}

export type HiddenTeamChain = {
  id: TeamID
  subversion: number
  public: boolean
  frozen: boolean
  tombstoned: boolean
  last: Seqno
  lastFull: Seqno
  latestSeqnoHint: Seqno
  lastCommittedSeqno: Seqno
  linkReceiptTimes: {[key: string]: Time}
  lastPerTeamKeys: {[key: string]: Seqno}
  outer: {[key: string]: LinkID}
  inner: {[key: string]: HiddenTeamChainLink}
  readerPerTeamKeys: {[key: string]: Seqno}
  ratchetSet: HiddenTeamChainRatchetSet
  cachedAt: Time
  needRotate: boolean
  merkleRoots: {[key: string]: MerkleRootV2}
}

export type AnnotatedTeamInvite = {
  invite: TeamInvite
  displayName: TeamInviteDisplayName
  inviterUsername: string
  inviteeUv: UserVersion
  teamName: string
  status?: TeamMemberStatus
  usedInvites: AnnotatedTeamUsedInviteLogPoint[] | null
}

export type TeamSigChainState = {
  reader: UserVersion
  id: TeamID
  implicit: boolean
  public: boolean
  rootAncestor: TeamName
  nameDepth: number
  nameLog: TeamNameLogPoint[] | null
  lastSeqno: Seqno
  lastLinkId: LinkID
  lastHighSeqno: Seqno
  lastHighLinkId: LinkID
  parentId?: TeamID
  userLog: {[key: string]: UserLogPoint[] | null}
  subteamLog: {[key: string]: SubteamLogPoint[] | null}
  perTeamKeys: {[key: string]: PerTeamKey}
  maxPerTeamKeyGeneration: PerTeamKeyGeneration
  perTeamKeyCTime: UnixTime
  linkIDs: {[key: string]: LinkID}
  stubbedLinks: {[key: string]: boolean}
  activeInvites: {[key: string]: TeamInvite}
  obsoleteInvites: {[key: string]: TeamInvite}
  usedInvites: {[key: string]: TeamUsedInviteLogPoint[] | null}
  open: boolean
  openTeamJoinAs: TeamRole
  bots: {[key: string]: TeamBotSettings}
  tlfIDs: TLFID[] | null
  tlfLegacyUpgrade: {[key: string]: TeamLegacyTLFUpgradeChainInfo}
  headMerkle?: MerkleRootV2
  merkleRoots: {[key: string]: MerkleRootV2}
}

export type LookupImplicitTeamRes = {
  teamId: TeamID
  name: TeamName
  displayName: ImplicitTeamDisplayName
  tlfId: TLFID
}

export type PublicKeyV2NaCl = {
  base: PublicKeyV2Base
  parent?: KID
  deviceId: DeviceID
  deviceDescription: string
  deviceType: DeviceTypeV2
}

export type PublicKeyV2PGPSummary = {
  base: PublicKeyV2Base
  fingerprint: PGPFingerprint
  identities: PGPIdentity[] | null
}

export type ConflictState =
  | {conflictStateType: ConflictStateType.NormalView; NormalView: FolderNormalView}
  | {conflictStateType: ConflictStateType.ManualResolvingLocalView; ManualResolvingLocalView: FolderConflictManualResolvingLocalView}
  | {conflictStateType: Exclude<ConflictStateType, ConflictStateType.NormalView | ConflictStateType.ManualResolvingLocalView>}

export type GitRepoResult =
  | {state: GitRepoResultState.ERR; ERR: string}
  | {state: GitRepoResultState.OK; OK: GitRepoInfo}
  | {state: Exclude<GitRepoResultState, GitRepoResultState.ERR | GitRepoResultState.OK>}

export type HomeScreenItemData =
  | {t: HomeScreenItemType.TODO; TODO: HomeScreenTodo}
  | {t: HomeScreenItemType.PEOPLE; PEOPLE: HomeScreenPeopleNotification}
  | {t: HomeScreenItemType.ANNOUNCEMENT; ANNOUNCEMENT: HomeScreenAnnouncement}
  | {t: Exclude<HomeScreenItemType, HomeScreenItemType.TODO | HomeScreenItemType.PEOPLE | HomeScreenItemType.ANNOUNCEMENT>}

export type IdentifyTrackBreaks = {
  keys: IdentifyKey[] | null
  proofs: IdentifyProofBreak[] | null
}

export type OpDescription =
  | {asyncOp: AsyncOps.LIST; LIST: ListArgs}
  | {asyncOp: AsyncOps.LIST_RECURSIVE; LIST_RECURSIVE: ListArgs}
  | {asyncOp: AsyncOps.LIST_RECURSIVE_TO_DEPTH; LIST_RECURSIVE_TO_DEPTH: ListToDepthArgs}
  | {asyncOp: AsyncOps.READ; READ: ReadArgs}
  | {asyncOp: AsyncOps.WRITE; WRITE: WriteArgs}
  | {asyncOp: AsyncOps.COPY; COPY: CopyArgs}
  | {asyncOp: AsyncOps.MOVE; MOVE: MoveArgs}
  | {asyncOp: AsyncOps.REMOVE; REMOVE: RemoveArgs}
  | {asyncOp: AsyncOps.GET_REVISIONS; GET_REVISIONS: GetRevisionsArgs}
  | {
      asyncOp: Exclude<
        AsyncOps,
        | AsyncOps.LIST
        | AsyncOps.LIST_RECURSIVE
        | AsyncOps.LIST_RECURSIVE_TO_DEPTH
        | AsyncOps.READ
        | AsyncOps.WRITE
        | AsyncOps.COPY
        | AsyncOps.MOVE
        | AsyncOps.REMOVE
        | AsyncOps.GET_REVISIONS
      >
    }

export type TeamDetails = {
  name: string
  members: TeamMembersDetails
  keyGeneration: PerTeamKeyGeneration
  annotatedActiveInvites: {[key: string]: AnnotatedTeamInvite}
  settings: TeamSettings
  showcase: TeamShowcase
}

export type TeamData = {
  v: number
  frozen: boolean
  tombstoned: boolean
  secretless: boolean
  name: TeamName
  chain: TeamSigChainState
  perTeamKeySeedsUnverified: {[key: string]: PerTeamKeySeedItem}
  readerKeyMasks: {[key: string]: {[key: string]: MaskB64}}
  latestSeqnoHint: Seqno
  cachedAt: Time
  tlfCryptKeys: {[key: string]: CryptKey[] | null}
}

export type AnnotatedTeamList = {
  teams: AnnotatedMemberInfo[] | null
  annotatedActiveInvites: {[key: string]: AnnotatedTeamInvite}
}

export type TeamDebugRes = {
  chain: TeamSigChainState
}

export type AnnotatedTeam = {
  teamId: TeamID
  name: string
  transitiveSubteamsUnverified: SubteamListResult
  members: AnnotatedTeamMemberDetails[] | null
  invites: AnnotatedTeamInvite[] | null
  joinRequests: TeamJoinRequest[] | null
  tarsDisabled: boolean
  settings: TeamSettings
  showcase: TeamShowcase
}

export type PublicKeyV2 =
  | {keyType: KeyType.NACL; NACL: PublicKeyV2NaCl}
  | {keyType: KeyType.PGP; PGP: PublicKeyV2PGPSummary}
  | {keyType: Exclude<KeyType, KeyType.NACL | KeyType.PGP>}

export type UserPlusKeysV2 = {
  uid: UID
  username: string
  eldestSeqno: Seqno
  status: StatusCode
  perUserKeys: PerUserKey[] | null
  deviceKeys: {[key: string]: PublicKeyV2NaCl}
  pgpKeys: {[key: string]: PublicKeyV2PGPSummary}
  stellarAccountId?: string
  remoteTracks: {[key: string]: RemoteTrack}
  reset?: ResetSummary
  unstubbed: boolean
}

export type UPKLiteV1 = {
  uid: UID
  username: string
  eldestSeqno: Seqno
  status: StatusCode
  deviceKeys: {[key: string]: PublicKeyV2NaCl}
  reset?: ResetSummary
}

/**
 * Folder represents a favorite top-level folder in kbfs.
 *     This type is likely to change significantly as all the various parts are
 *     connected and tested.
 */
export type Folder = {
  name: string
  private: boolean
  created: boolean
  folderType: FolderType
  teamId?: TeamID
  resetMembers: User[] | null
  mtime?: Time
  conflictState?: ConflictState
  syncConfig?: FolderSyncConfig
}

export type HomeScreenItem = {
  badged: boolean
  data: HomeScreenItemData
  dataExt: HomeScreenItemDataExt
}

export type Identify2Res = {
  upk: UserPlusKeys
  identifiedAt: Time
  trackBreaks?: IdentifyTrackBreaks
}

export type IdentifyLiteRes = {
  ul: UserOrTeamLite
  trackBreaks?: IdentifyTrackBreaks
}

export type ResolveIdentifyImplicitTeamRes = {
  displayName: string
  teamId: TeamID
  writers: UserVersion[] | null
  trackBreaks: {[key: string]: IdentifyTrackBreaks}
  folderId: TLFID
}

export type TLFIdentifyFailure = {
  user: User
  breaks?: IdentifyTrackBreaks
}

export type UserPlusKeysV2AllIncarnations = {
  current: UserPlusKeysV2
  pastIncarnations: UserPlusKeysV2[] | null
  uvv: UserVersionVector
  seqnoLinkIDs: {[key: string]: LinkID}
  minorVersion: UPK2MinorVersion
  stale: boolean
}

export type UPKLiteV1AllIncarnations = {
  current: UPKLiteV1
  pastIncarnations: UPKLiteV1[] | null
  seqnoLinkIDs: {[key: string]: LinkID}
  minorVersion: UPKLiteMinorVersion
}

export type FavoritesResult = {
  favoriteFolders: Folder[] | null
  ignoredFolders: Folder[] | null
  newFolders: Folder[] | null
}

export type HomeScreen = {
  lastViewed: Time
  version: number
  visits: number
  items: HomeScreenItem[] | null
  followSuggestions: HomeUserSummary[] | null
  announcementsVersion: number
}

export type Identify2ResUPK2 = {
  upk: UserPlusKeysV2AllIncarnations
  identifiedAt: Time
  trackBreaks?: IdentifyTrackBreaks
}

export type FSEditListRequest = {
  folder: Folder
  requestId: number
}

export type FSFolderEditHistory = {
  folder: Folder
  serverTime: Time
  history: FSFolderWriterEditHistory[] | null
}

export type FolderSyncConfigAndStatusWithFolder = {
  folder: Folder
  config: FolderSyncConfig
  status: FolderSyncStatus
}

export type FolderWithFavFlags = {
  folder: Folder
  isFavorite: boolean
  isIgnored: boolean
  isNew: boolean
}

export type SimpleFSIndexProgress = {
  overallProgress: IndexProgressRecord
  currFolder: Folder
  currProgress: IndexProgressRecord
  foldersLeft: Folder[] | null
}

export type TLFBreak = {
  breaks: TLFIdentifyFailure[] | null
}

/**
 * * What we're storing for each user. At first it was UPAKs, as defined
 *    * in common.avdl. But going forward, we're going to use UserPlusKeysV2AllIncarnations.
 */
export type UPAKVersioned =
  | {v: UPAKVersion.V1; V1: UserPlusAllKeys}
  | {v: UPAKVersion.V2; V2: UserPlusKeysV2AllIncarnations}
  | {v: Exclude<UPAKVersion, UPAKVersion.V1 | UPAKVersion.V2>}

export type SyncConfigAndStatusRes = {
  folders: FolderSyncConfigAndStatusWithFolder[] | null
  overallStatus: FolderSyncStatus
}

export type CanonicalTLFNameAndIDWithBreaks = {
  tlfId: TLFID
  canonicalName: CanonicalTlfName
  breaks: TLFBreak
}

export type GetTLFCryptKeysRes = {
  nameIdBreaks: CanonicalTLFNameAndIDWithBreaks
  cryptKeys: CryptKey[] | null
}
