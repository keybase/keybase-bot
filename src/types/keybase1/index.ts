/*
 * keybase.1
 *
 * Auto-generated to TypeScript types by avdl-compiler v1.4.1 (https://github.com/keybase/node-avdl-compiler)
 * Input files:
 * - ../client/protocol/avdl/keybase1/account.avdl
 * - ../client/protocol/avdl/keybase1/apiserver.avdl
 * - ../client/protocol/avdl/keybase1/appstate.avdl
 * - ../client/protocol/avdl/keybase1/audit.avdl
 * - ../client/protocol/avdl/keybase1/avatars.avdl
 * - ../client/protocol/avdl/keybase1/backend_common.avdl
 * - ../client/protocol/avdl/keybase1/badger.avdl
 * - ../client/protocol/avdl/keybase1/block.avdl
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
 * - ../client/protocol/avdl/keybase1/install.avdl
 * - ../client/protocol/avdl/keybase1/kbfs.avdl
 * - ../client/protocol/avdl/keybase1/kbfs_common.avdl
 * - ../client/protocol/avdl/keybase1/kbfs_git.avdl
 * - ../client/protocol/avdl/keybase1/kbfsmount.avdl
 * - ../client/protocol/avdl/keybase1/kex2provisionee.avdl
 * - ../client/protocol/avdl/keybase1/kex2provisionee2.avdl
 * - ../client/protocol/avdl/keybase1/kex2provisioner.avdl
 * - ../client/protocol/avdl/keybase1/log.avdl
 * - ../client/protocol/avdl/keybase1/log_ui.avdl
 * - ../client/protocol/avdl/keybase1/login.avdl
 * - ../client/protocol/avdl/keybase1/login_ui.avdl
 * - ../client/protocol/avdl/keybase1/logsend.avdl
 * - ../client/protocol/avdl/keybase1/merkle.avdl
 * - ../client/protocol/avdl/keybase1/merkle_store.avdl
 * - ../client/protocol/avdl/keybase1/metadata.avdl
 * - ../client/protocol/avdl/keybase1/metadata_update.avdl
 * - ../client/protocol/avdl/keybase1/notify_app.avdl
 * - ../client/protocol/avdl/keybase1/notify_audit.avdl
 * - ../client/protocol/avdl/keybase1/notify_badges.avdl
 * - ../client/protocol/avdl/keybase1/notify_can_user_perform.avdl
 * - ../client/protocol/avdl/keybase1/notify_ctl.avdl
 * - ../client/protocol/avdl/keybase1/notify_device_clone.avdl
 * - ../client/protocol/avdl/keybase1/notify_email.avdl
 * - ../client/protocol/avdl/keybase1/notify_ephemeral.avdl
 * - ../client/protocol/avdl/keybase1/notify_favorites.avdl
 * - ../client/protocol/avdl/keybase1/notify_fs.avdl
 * - ../client/protocol/avdl/keybase1/notify_fs_request.avdl
 * - ../client/protocol/avdl/keybase1/notify_keyfamily.avdl
 * - ../client/protocol/avdl/keybase1/notify_paperkey.avdl
 * - ../client/protocol/avdl/keybase1/notify_pgp.avdl
 * - ../client/protocol/avdl/keybase1/notify_phone.avdl
 * - ../client/protocol/avdl/keybase1/notify_runtimestats.avdl
 * - ../client/protocol/avdl/keybase1/notify_service.avdl
 * - ../client/protocol/avdl/keybase1/notify_session.avdl
 * - ../client/protocol/avdl/keybase1/notify_team.avdl
 * - ../client/protocol/avdl/keybase1/notify_teambot.avdl
 * - ../client/protocol/avdl/keybase1/notify_tracking.avdl
 * - ../client/protocol/avdl/keybase1/notify_unverified_team_list.avdl
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
 * - ../client/protocol/avdl/keybase1/test.avdl
 * - ../client/protocol/avdl/keybase1/tlf.avdl
 * - ../client/protocol/avdl/keybase1/tlf_keys.avdl
 * - ../client/protocol/avdl/keybase1/track.avdl
 * - ../client/protocol/avdl/keybase1/ui.avdl
 * - ../client/protocol/avdl/keybase1/upk.avdl
 * - ../client/protocol/avdl/keybase1/user.avdl
 * - ../client/protocol/avdl/keybase1/usersearch.avdl
 */

import * as gregor1 from '../gregor1'

export type HasServerKeysRes = {
  hasServerKeys: boolean
}

export type LockdownHistory = {
  status: boolean
  creationTime: Time
  deviceID: DeviceID
  deviceName: string
}

export type GetLockdownResponse = {
  history: LockdownHistory[]
  status: boolean
}

export type APIRes = {
  status: string
  body: string
  httpStatus: number
  appStatus: string
}

export enum MobileAppState {
  FOREGROUND = 0,
  BACKGROUND = 1,
  INACTIVE = 2,
  BACKGROUNDACTIVE = 3,
}

export enum MobileNetworkState {
  NONE = 0,
  WIFI = 1,
  CELLUAR = 2,
  UNKNOWN = 3,
  NOTAVAILABLE = 4,
}

export enum BoxAuditAttemptResult {
  FAILURE_RETRYABLE = 0,
  FAILURE_MALICIOUS_SERVER = 1,
  OK_VERIFIED = 2,
  OK_NOT_ATTEMPTED_ROLE = 3,
  OK_NOT_ATTEMPTED_OPENTEAM = 4,
  OK_NOT_ATTEMPTED_SUBTEAM = 5,
}

export type BoxAuditAttempt = {
  ctime: UnixTime
  error?: string
  result: BoxAuditAttemptResult
  generation?: PerTeamKeyGeneration
  rotated: boolean
}

export type AvatarUrl = string

export type AvatarFormat = string

export type LoadAvatarsRes = {
  picmap: {[key: string]: {[key: string]: AvatarUrl}}
}

export type AvatarClearCacheMsg = {
  name: string
  formats: AvatarFormat[]
  typ: AvatarUpdateType
}

export enum BlockType {
  DATA = 0,
  MD = 1,
  GIT = 2,
}

export type BlockIdCombo = {
  blockHash: string
  chargedTo: UserOrTeamID
  blockType: BlockType
}

export type ChallengeInfo = {
  now: number
  challenge: string
}

export enum BlockStatus {
  UNKNOWN = 0,
  LIVE = 1,
  ARCHIVED = 2,
}

export type GetBlockRes = {
  blockKey: string
  buf: Buffer
  size: number
  status: BlockStatus
}

export type BlockRefNonce = string | null
export type BlockReference = {
  bid: BlockIdCombo
  nonce: BlockRefNonce
  chargedTo: UserOrTeamID
}

export type BlockReferenceCount = {
  ref: BlockReference
  liveCount: number
}

export type DowngradeReferenceRes = {
  completed: BlockReferenceCount[]
  failed: BlockReference
}

export type BlockIdCount = {
  id: BlockIdCombo
  liveCount: number
}

export type ReferenceCountRes = {
  counts: BlockIdCount[]
}

export type BlockPingResponse = {}

export type Time = number

export type UnixTime = number

export type DurationSec = number

export type StringKVPair = {
  key: string
  value: string
}

export type Status = {
  code: number
  name: string
  desc: string
  fields: StringKVPair[]
}

export type UID = string

export type DeviceID = string

export type SigID = string

export type LeaseID = string

export type KID = string

export type PhoneNumber = string

export type RawPhoneNumber = string

export type RegionCode = string

export type LinkID = string

export type BinaryLinkID = Buffer

export type BinaryKID = Buffer

export type TLFID = string

export type TeamID = string

export type UserOrTeamID = string

export type GitRepoName = string

export type HashMeta = Buffer

export type UserVersion = {
  uid: UID
  eldestSeqno: Seqno
}

export enum TeamType {
  NONE = 0,
  LEGACY = 1,
  MODERN = 2,
}

export type CompatibilityTeamID = {typ: TeamType.LEGACY; LEGACY: TLFID | null} | {typ: TeamType.MODERN; MODERN: TeamID | null}

export enum TLFVisibility {
  ANY = 0,
  PUBLIC = 1,
  PRIVATE = 2,
}

export type TeamIDWithVisibility = {
  teamID: TeamID
  visibility: TLFVisibility
}

export type TeamIDAndName = {
  id: TeamID
  name: TeamName
}

export type Seqno = number

export enum SeqType {
  NONE = 0,
  PUBLIC = 1,
  PRIVATE = 2,
  SEMIPRIVATE = 3,
  USER_PRIVATE_HIDDEN = 16,
  TEAM_PRIVATE_HIDDEN = 17,
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

export type PublicKey = {
  KID: KID
  PGPFingerprint: string
  PGPIdentities: PGPIdentity[]
  isSibkey: boolean
  isEldest: boolean
  parentID: string
  deviceID: DeviceID
  deviceDescription: string
  deviceType: string
  cTime: Time
  eTime: Time
  isRevoked: boolean
}

export type KeybaseTime = {
  unix: Time
  chain: Seqno
}

export type RevokedKey = {
  key: PublicKey
  time: KeybaseTime
  by: KID
}

export type User = {
  uid: UID
  username: string
}

export type Device = {
  type: string
  name: string
  deviceID: DeviceID
  cTime: Time
  mTime: Time
  lastUsedTime: Time
  encryptKey: KID
  verifyKey: KID
  status: number
}

export enum DeviceType {
  DESKTOP = 0,
  MOBILE = 1,
}

export type Stream = {
  fd: number
}

export enum LogLevel {
  NONE = 0,
  DEBUG = 1,
  INFO = 2,
  NOTICE = 3,
  WARN = 4,
  ERROR = 5,
  CRITICAL = 6,
  FATAL = 7,
}

export enum ClientType {
  NONE = 0,
  CLI = 1,
  GUI_MAIN = 2,
  KBFS = 3,
  GUI_HELPER = 4,
}

export type UserVersionVector = {
  id: number
  sigHints: number
  sigChain: number
  cachedAt: Time
}

export type PerUserKeyGeneration = number

export type PerUserKey = {
  gen: number
  seqno: Seqno
  sigKID: KID
  encKID: KID
  signedByKID: KID
}

export type UserPlusKeys = {
  uid: UID
  username: string
  eldestSeqno: Seqno
  status: StatusCode
  deviceKeys: PublicKey[]
  revokedDeviceKeys: RevokedKey[]
  pgpKeyCount: number
  uvv: UserVersionVector
  deletedDeviceKeys: PublicKey[]
  perUserKeys: PerUserKey[]
  resets: ResetSummary[]
}

export type UserOrTeamLite = {
  id: UserOrTeamID
  name: string
}

export enum UserOrTeamResult {
  USER = 1,
  TEAM = 2,
}

export type RemoteTrack = {
  username: string
  uid: UID
  linkID: LinkID
}

export type UserPlusAllKeys = {
  base: UserPlusKeys
  pgpKeys: PublicKey[]
  remoteTracks: RemoteTrack[]
}

export enum MerkleTreeID {
  MASTER = 0,
  KBFS_PUBLIC = 1,
  KBFS_PRIVATE = 2,
  KBFS_PRIVATETEAM = 3,
}

/**
 * SocialAssertionService is a service that can be used to assert proofs for a
 *     user.
 */
export type SocialAssertionService = string

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

export type FullName = string

export enum FullNamePackageVersion {
  V0 = 0,
  V1 = 1,
  V2 = 2,
}

export type FullNamePackage = {
  version: FullNamePackageVersion
  fullName: FullName
  eldestSeqno: Seqno
  status: StatusCode
  cachedAt: Time
}

export type ImageCropRect = {
  x0: number
  y0: number
  x1: number
  y1: number
}

export type PhoneLookupResult = {
  uid: UID
  username: string
  ctime: UnixTime
}

export enum IdentityVisibility {
  PRIVATE = 0,
  PUBLIC = 1,
}

export type SizedImage = {
  path: string
  width: number
}

export enum OfflineAvailability {
  NONE = 0,
  BEST_EFFORT = 1,
}

export type ReacjiSkinTone = number

export type UserReacjis = {
  topReacjis: string[]
  skinTone: ReacjiSkinTone
}

export type CurrentStatus = {
  configured: boolean
  registered: boolean
  loggedIn: boolean
  sessionIsValid: boolean
  user?: User
}

export type SessionStatus = {
  SessionFor: string
  Loaded: boolean
  Cleared: boolean
  SaltOnly: boolean
  Expired: boolean
}

export type ClientDetails = {
  pid: number
  clientType: ClientType
  argv: string[]
  desc: string
  version: string
}

export type ClientStatus = {
  details: ClientDetails
  connectionID: number
  notificationChannels: NotificationChannels
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
  provisionedUsernames: string[]
  configuredAccounts: ConfiguredAccount[]
  Clients: ClientStatus[]
  deviceEkNames: string[]
  platformInfo: PlatformInfo
  defaultDeviceID: DeviceID
  localDbStats: string[]
  localChatDbStats: string[]
  localBlockCacheDbStats: string[]
  localSyncCacheDbStats: string[]
  cacheDirSizeInfo: DirSizeInfo[]
  uiRouterMapping: {[key: string]: number}
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
}

export type KBFSStatus = {
  version: string
  installedVersion: string
  running: boolean
  pid: string
  log: string
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

export type LogSendID = string

export type AllProvisionedUsernames = {
  defaultUsername: string
  provisionedUsernames: string[]
  hasProvisionedUser: boolean
}

export enum ForkType {
  NONE = 0,
  AUTO = 1,
  WATCHDOG = 2,
  LAUNCHD = 3,
  SYSTEMD = 4,
}

export type Config = {
  serverURI: string
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

export type ConfigValue = {
  isNull: boolean
  b?: boolean
  i?: number
  s?: string
  o?: string
}

export type OutOfDateInfo = {
  upgradeTo: string
  upgradeURI: string
  customMessage: string
  criticalClockSkew: number
}

export enum UpdateInfoStatus {
  UP_TO_DATE = 0,
  NEED_UPDATE = 1,
  CRITICALLY_OUT_OF_DATE = 2,
}

export type UpdateInfo = {
  status: UpdateInfoStatus
  message: string
}

export type BootstrapStatus = {
  registered: boolean
  loggedIn: boolean
  uid: UID
  username: string
  deviceID: DeviceID
  deviceName: string
  fullname: FullName
  userReacjis: UserReacjis
  httpSrvInfo?: HttpSrvInfo
}

export enum UpdateInfoStatus2 {
  OK = 0,
  SUGGESTED = 1,
  CRITICAL = 2,
}

export type UpdateDetails = {
  message: string
}

export type UpdateInfo2 =
  | {status: UpdateInfoStatus2.OK}
  | {status: UpdateInfoStatus2.SUGGESTED; SUGGESTED: UpdateDetails | null}
  | {status: UpdateInfoStatus2.CRITICAL; CRITICAL: UpdateDetails | null}

export enum ProxyType {
  No_Proxy = 0,
  HTTP_Connect = 1,
  Socks = 2,
}

export type ProxyData = {
  addressWithPort: string
  proxyType: ProxyType
  certPinning: boolean
}

export enum StatusCode {
  SCOk = 0,
  SCInputError = 100,
  SCLoginRequired = 201,
  SCBadSession = 202,
  SCBadLoginUserNotFound = 203,
  SCBadLoginPassword = 204,
  SCNotFound = 205,
  SCThrottleControl = 210,
  SCDeleted = 216,
  SCGeneric = 218,
  SCAlreadyLoggedIn = 235,
  SCExists = 230,
  SCCanceled = 237,
  SCInputCanceled = 239,
  SCBadUsername = 243,
  SCOffline = 267,
  SCReloginRequired = 274,
  SCResolutionFailed = 275,
  SCProfileNotPublic = 276,
  SCIdentifyFailed = 277,
  SCTrackingBroke = 278,
  SCWrongCryptoFormat = 279,
  SCDecryptionError = 280,
  SCInvalidAddress = 281,
  SCNoSession = 283,
  SCAccountReset = 290,
  SCIdentifiesFailed = 295,
  SCNoSpaceOnDevice = 297,
  SCMerkleClientError = 299,
  SCBadEmail = 472,
  SCRateLimit = 602,
  SCBadSignupUsernameTaken = 701,
  SCBadInvitationCode = 707,
  SCBadSignupTeamName = 711,
  SCFeatureFlag = 712,
  SCEmailTaken = 713,
  SCEmailAlreadyAdded = 714,
  SCEmailLimitExceeded = 715,
  SCEmailCannotDeletePrimary = 716,
  SCEmailUnknown = 717,
  SCMissingResult = 801,
  SCKeyNotFound = 901,
  SCKeyCorrupted = 905,
  SCKeyInUse = 907,
  SCKeyBadGen = 913,
  SCKeyNoSecret = 914,
  SCKeyBadUIDs = 915,
  SCKeyNoActive = 916,
  SCKeyNoSig = 917,
  SCKeyBadSig = 918,
  SCKeyBadEldest = 919,
  SCKeyNoEldest = 920,
  SCKeyDuplicateUpdate = 921,
  SCSibkeyAlreadyExists = 922,
  SCDecryptionKeyNotFound = 924,
  SCKeyNoPGPEncryption = 927,
  SCKeyNoNaClEncryption = 928,
  SCKeySyncedPGPNotFound = 929,
  SCKeyNoMatchingGPG = 930,
  SCKeyRevoked = 931,
  SCSigCannotVerify = 1002,
  SCSigWrongKey = 1008,
  SCSigOldSeqno = 1010,
  SCSigCreationDisallowed = 1016,
  SCSigMissingRatchet = 1021,
  SCSigBadTotalOrder = 1022,
  SCBadTrackSession = 1301,
  SCDeviceBadName = 1404,
  SCDeviceNameInUse = 1408,
  SCDeviceNotFound = 1409,
  SCDeviceMismatch = 1410,
  SCDeviceRequired = 1411,
  SCDevicePrevProvisioned = 1413,
  SCDeviceNoProvision = 1414,
  SCDeviceProvisionViaDevice = 1415,
  SCRevokeCurrentDevice = 1416,
  SCRevokeLastDevice = 1417,
  SCDeviceProvisionOffline = 1418,
  SCRevokeLastDevicePGP = 1419,
  SCStreamExists = 1501,
  SCStreamNotFound = 1502,
  SCStreamWrongKind = 1503,
  SCStreamEOF = 1504,
  SCGenericAPIError = 1600,
  SCAPINetworkError = 1601,
  SCTimeout = 1602,
  SCProofError = 1701,
  SCIdentificationExpired = 1702,
  SCSelfNotFound = 1703,
  SCBadKexPhrase = 1704,
  SCNoUIDelegation = 1705,
  SCNoUI = 1706,
  SCGPGUnavailable = 1707,
  SCInvalidVersionError = 1800,
  SCOldVersionError = 1801,
  SCInvalidLocationError = 1802,
  SCServiceStatusError = 1803,
  SCInstallError = 1804,
  SCLoadKextError = 1810,
  SCLoadKextPermError = 1811,
  SCGitInternal = 2300,
  SCGitRepoAlreadyExists = 2301,
  SCGitInvalidRepoName = 2302,
  SCGitCannotDelete = 2303,
  SCGitRepoDoesntExist = 2304,
  SCLoginStateTimeout = 2400,
  SCChatInternal = 2500,
  SCChatRateLimit = 2501,
  SCChatConvExists = 2502,
  SCChatUnknownTLFID = 2503,
  SCChatNotInConv = 2504,
  SCChatBadMsg = 2505,
  SCChatBroadcast = 2506,
  SCChatAlreadySuperseded = 2507,
  SCChatAlreadyDeleted = 2508,
  SCChatTLFFinalized = 2509,
  SCChatCollision = 2510,
  SCIdentifySummaryError = 2511,
  SCNeedSelfRekey = 2512,
  SCNeedOtherRekey = 2513,
  SCChatMessageCollision = 2514,
  SCChatDuplicateMessage = 2515,
  SCChatClientError = 2516,
  SCChatNotInTeam = 2517,
  SCChatStalePreviousState = 2518,
  SCChatEphemeralRetentionPolicyViolatedError = 2519,
  SCTeamBadMembership = 2604,
  SCTeamSelfNotOwner = 2607,
  SCTeamNotFound = 2614,
  SCTeamExists = 2619,
  SCTeamReadError = 2623,
  SCTeamWritePermDenied = 2625,
  SCTeamBadGeneration = 2636,
  SCNoOp = 2638,
  SCTeamInviteBadToken = 2646,
  SCTeamTarDuplicate = 2663,
  SCTeamTarNotFound = 2664,
  SCTeamMemberExists = 2665,
  SCTeamNotReleased = 2666,
  SCTeamPermanentlyLeft = 2667,
  SCTeamNeedRootId = 2668,
  SCTeamHasLiveChildren = 2669,
  SCTeamDeleteError = 2670,
  SCTeamBadRootTeam = 2671,
  SCTeamNameConflictsWithUser = 2672,
  SCTeamDeleteNoUpPointer = 2673,
  SCTeamNeedOwner = 2674,
  SCTeamNoOwnerAllowed = 2675,
  SCTeamImplicitNoNonSbs = 2676,
  SCTeamImplicitBadHash = 2677,
  SCTeamImplicitBadName = 2678,
  SCTeamImplicitClash = 2679,
  SCTeamImplicitDuplicate = 2680,
  SCTeamImplicitBadOp = 2681,
  SCTeamImplicitBadRole = 2682,
  SCTeamImplicitNotFound = 2683,
  SCTeamBadAdminSeqnoType = 2684,
  SCTeamImplicitBadAdd = 2685,
  SCTeamImplicitBadRemove = 2686,
  SCTeamInviteTokenReused = 2696,
  SCTeamKeyMaskNotFound = 2697,
  SCTeamBanned = 2702,
  SCTeamInvalidBan = 2703,
  SCTeamShowcasePermDenied = 2711,
  SCTeamProvisionalCanKey = 2721,
  SCTeamProvisionalCannotKey = 2722,
  SCTeamFTLOutdated = 2736,
  SCEphemeralKeyBadGeneration = 2900,
  SCEphemeralKeyUnexpectedBox = 2901,
  SCEphemeralKeyMissingBox = 2902,
  SCEphemeralKeyWrongNumberOfKeys = 2903,
  SCEphemeralKeyMismatchedKey = 2904,
  SCEphemeralPairwiseMACsMissingUIDs = 2905,
  SCEphemeralDeviceAfterEK = 2906,
  SCEphemeralMemberAfterEK = 2907,
  SCEphemeralDeviceStale = 2908,
  SCEphemeralUserStale = 2909,
  SCStellarError = 3100,
  SCStellarBadInput = 3101,
  SCStellarWrongRevision = 3102,
  SCStellarMissingBundle = 3103,
  SCStellarBadPuk = 3104,
  SCStellarMissingAccount = 3105,
  SCStellarBadPrev = 3106,
  SCStellarWrongPrimary = 3107,
  SCStellarUnsupportedCurrency = 3108,
  SCStellarNeedDisclaimer = 3109,
  SCStellarDeviceNotMobile = 3110,
  SCStellarMobileOnlyPurgatory = 3111,
  SCStellarIncompatibleVersion = 3112,
  SCNISTWrongSize = 3201,
  SCNISTBadMode = 3202,
  SCNISTHashWrongSize = 3203,
  SCNISTSigWrongSize = 3204,
  SCNISTSigBadInput = 3205,
  SCNISTSigBadUID = 3206,
  SCNISTSigBadDeviceID = 3207,
  SCNISTSigBadNonce = 3208,
  SCNISTNoSigOrHash = 3209,
  SCNISTExpired = 3210,
  SCNISTSigRevoked = 3211,
  SCNISTKeyRevoked = 3212,
  SCNISTUserDeleted = 3213,
  SCNISTNoDevice = 3214,
  SCNISTSigCannot_verify = 3215,
  SCNISTReplay = 3216,
  SCNISTSigBadLifetime = 3217,
  SCNISTNotFound = 3218,
  SCNISTBadClock = 3219,
  SCNISTSigBadCtime = 3220,
  SCBadSignupUsernameDeleted = 3221,
  SCPhoneNumberUnknown = 3400,
  SCPhoneNumberAlreadyVerified = 3401,
  SCPhoneNumberVerificationCodeExpired = 3402,
  SCPhoneNumberWrongVerificationCode = 3403,
  SCPhoneNumberLimitExceeded = 3404,
  SCNoPaperKeys = 3605,
  SCTeambotKeyGenerationExists = 3800,
  SCTeambotKeyOldBoxedGeneration = 3801,
  SCTeambotKeyBadGeneration = 3802,
}

export type ContactComponent = {
  label: string
  phoneNumber?: RawPhoneNumber
  email?: EmailAddress
}

export type Contact = {
  name: string
  components: ContactComponent[]
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
  assertion: string
  displayName: string
  displayLabel: string
}

export type ED25519PublicKey = string | null
export type ED25519Signature = string | null
export type ED25519SignatureInfo = {
  sig: ED25519Signature
  publicKey: ED25519PublicKey
}

export type EncryptedBytes32 = string | null
export type BoxNonce = string | null
export type BoxPublicKey = string | null
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

export type RegisterAddressRes = {
  type: string
  family: string
}

export enum ExitCode {
  OK = 0,
  NOTOK = 2,
  RESTART = 4,
}

export enum DbType {
  MAIN = 0,
  CHAT = 1,
  FS_BLOCK_CACHE = 2,
  FS_BLOCK_CACHE_META = 3,
  FS_SYNC_BLOCK_CACHE = 4,
  FS_SYNC_BLOCK_CACHE_META = 5,
}

export type DbKey = {
  dbType: DbType
  objType: number
  key: string
}

export type DbValue = Buffer

export type FirstStepResult = {
  valPlusTwo: number
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

export type EkGeneration = number

export type DeviceEkMetadata = {
  kid: KID
  hashMeta: HashMeta
  generation: EkGeneration
  ctime: Time
  deviceCtime: Time
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

export type UserEkMetadata = {
  kid: KID
  hashMeta: HashMeta
  generation: EkGeneration
  ctime: Time
}

export type UserEkBoxed = {
  box: string
  deviceEkGeneration: EkGeneration
  metadata: UserEkMetadata
}

export type UserEkBoxMetadata = {
  box: string
  recipientGeneration: EkGeneration
  recipientDeviceID: DeviceID
}

export type UserEk = {
  seed: Bytes32
  metadata: UserEkMetadata
}

export type UserEkReboxArg = {
  userEkBoxMetadata: UserEkBoxMetadata
  deviceID: DeviceID
  deviceEkStatementSig: string
}

export type TeamEkMetadata = {
  kid: KID
  hashMeta: HashMeta
  generation: EkGeneration
  ctime: Time
}

export type TeamEkStatement = {
  currentTeamEkMetadata: TeamEkMetadata
}

export type TeamEkBoxed = {
  box: string
  userEkGeneration: EkGeneration
  metadata: TeamEkMetadata
}

export type TeamEkBoxMetadata = {
  box: string
  recipientGeneration: EkGeneration
  recipientUID: UID
}

export type TeamEk = {
  seed: Bytes32
  metadata: TeamEkMetadata
}

export type TeambotEkMetadata = {
  kid: KID
  generation: EkGeneration
  uid: UID
  userEkGeneration: EkGeneration
  hashMeta: HashMeta
  ctime: Time
}

export type TeambotEkBoxed = {
  box: string
  metadata: TeambotEkMetadata
}

export type TeambotEk = {
  seed: Bytes32
  metadata: TeambotEkMetadata
}

export enum TeamEphemeralKeyType {
  TEAM = 0,
  TEAMBOT = 1,
}

export type TeamEphemeralKey =
  | {keyType: TeamEphemeralKeyType.TEAM; TEAM: TeamEk | null}
  | {keyType: TeamEphemeralKeyType.TEAMBOT; TEAMBOT: TeambotEk | null}

export type TeamEphemeralKeyBoxed =
  | {keyType: TeamEphemeralKeyType.TEAM; TEAM: TeamEkBoxed | null}
  | {keyType: TeamEphemeralKeyType.TEAMBOT; TEAMBOT: TeambotEkBoxed | null}

export enum FolderType {
  UNKNOWN = 0,
  PRIVATE = 1,
  PUBLIC = 2,
  TEAM = 3,
}

export enum FolderConflictType {
  NONE = 0,
  IN_CONFLICT = 1,
  IN_CONFLICT_AND_STUCK = 2,
  CLEARED_CONFLICT = 3,
}

export enum ConflictStateType {
  NormalView = 1,
  ManualResolvingLocalView = 2,
}

export type FolderNormalView = {
  resolvingConflict: boolean
  stuckInConflict: boolean
  localViews: Path[]
}

export type FolderConflictManualResolvingLocalView = {
  normalView: Path
}

export type ConflictState =
  | {conflictStateType: ConflictStateType.NormalView; NormalView: FolderNormalView | null}
  | {conflictStateType: ConflictStateType.ManualResolvingLocalView; ManualResolvingLocalView: FolderConflictManualResolvingLocalView | null}

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
  teamID?: TeamID
  resetMembers: User[]
  mtime?: Time
  conflictState?: ConflictState
  syncConfig?: FolderSyncConfig
}

export type FolderHandle = {
  name: string
  folderType: FolderType
  created: boolean
}

export type FavoritesResult = {
  favoriteFolders: Folder[]
  ignoredFolders: Folder[]
  newFolders: Folder[]
}

export type File = {
  path: string
}

export type ListResult = {
  files: File[]
}

export type EncryptedGitMetadata = {
  v: number
  e: Buffer
  n: BoxNonce
  gen: PerTeamKeyGeneration
}

export type RepoID = string

export enum GitLocalMetadataVersion {
  V1 = 1,
}

export type GitLocalMetadataV1 = {
  repoName: GitRepoName
}

export type GitLocalMetadataVersioned = {version: GitLocalMetadataVersion.V1; V1: GitLocalMetadataV1 | null}

export type GitCommit = {
  commitHash: string
  message: string
  authorName: string
  authorEmail: string
  ctime: Time
}

export enum GitPushType {
  DEFAULT = 0,
  CREATEREPO = 1,
  RENAMEREPO = 3,
}

export type GitRefMetadata = {
  refName: string
  commits: GitCommit[]
  moreCommitsAvailable: boolean
  isDelete: boolean
}

export type GitLocalMetadata = {
  repoName: GitRepoName
  refs: GitRefMetadata[]
  pushType: GitPushType
  previousRepoName: GitRepoName
}

export type GitServerMetadata = {
  ctime: Time
  mtime: Time
  lastModifyingUsername: string
  lastModifyingDeviceID: DeviceID
  lastModifyingDeviceName: string
}

export enum GitRepoResultState {
  ERR = 0,
  OK = 1,
}

export type GitRepoResult = {state: GitRepoResultState.ERR; ERR: string | null} | {state: GitRepoResultState.OK; OK: GitRepoInfo | null}

export type GitRepoInfo = {
  folder: FolderHandle
  repoID: RepoID
  localMetadata: GitLocalMetadata
  serverMetadata: GitServerMetadata
  repoUrl: string
  globalUniqueID: string
  canDelete: boolean
  teamRepoSettings?: GitTeamRepoSettings
}

export type GitTeamRepoSettings = {
  channelName?: string
  chatDisabled: boolean
}

export type GPGKey = {
  algorithm: string
  keyID: string
  creation: string
  expiration: string
  identities: PGPIdentity[]
}

export type SelectKeyRes = {
  keyID: string
  doSecretPush: boolean
}

export enum PushReason {
  NONE = 0,
  RECONNECTED = 1,
  NEW_DATA = 2,
}

export type HomeScreenItemID = string

export enum HomeScreenItemType {
  TODO = 1,
  PEOPLE = 2,
  ANNOUNCEMENT = 3,
}

export type HomeScreenItemData =
  | {t: HomeScreenItemType.TODO; TODO: HomeScreenTodo | null}
  | {t: HomeScreenItemType.PEOPLE; PEOPLE: HomeScreenPeopleNotification | null}
  | {t: HomeScreenItemType.ANNOUNCEMENT; ANNOUNCEMENT: HomeScreenAnnouncement | null}

export type HomeScreenItemDataExt = {t: HomeScreenItemType.TODO; TODO: HomeScreenTodoExt | null}

export enum AppLinkType {
  NONE = 0,
  PEOPLE = 1,
  CHAT = 2,
  FILES = 3,
  WALLET = 4,
  GIT = 5,
  DEVICES = 6,
  SETTINGS = 7,
  TEAMS = 8,
}

export type HomeScreenAnnouncementID = number

export type HomeScreenAnnouncementVersion = number

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

export enum HomeScreenTodoType {
  NONE = 0,
  BIO = 1,
  PROOF = 2,
  DEVICE = 3,
  FOLLOW = 4,
  CHAT = 5,
  PAPERKEY = 6,
  TEAM = 7,
  FOLDER = 8,
  GIT_REPO = 9,
  TEAM_SHOWCASE = 10,
  AVATAR_USER = 11,
  AVATAR_TEAM = 12,
  ADD_PHONE_NUMBER = 18,
  VERIFY_ALL_PHONE_NUMBER = 19,
  VERIFY_ALL_EMAIL = 20,
  LEGACY_EMAIL_VISIBILITY = 21,
  ADD_EMAIL = 22,
  ANNONCEMENT_PLACEHOLDER = 10000,
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
  | {t: HomeScreenTodoType.VERIFY_ALL_PHONE_NUMBER; VERIFY_ALL_PHONE_NUMBER: PhoneNumber | null}
  | {t: HomeScreenTodoType.VERIFY_ALL_EMAIL; VERIFY_ALL_EMAIL: EmailAddress | null}
  | {t: HomeScreenTodoType.LEGACY_EMAIL_VISIBILITY; LEGACY_EMAIL_VISIBILITY: EmailAddress | null}

export type HomeScreenTodoExt = {t: HomeScreenTodoType.VERIFY_ALL_EMAIL; VERIFY_ALL_EMAIL: VerifyAllEmailTodoExt | null}

export type VerifyAllEmailTodoExt = {
  lastVerifyEmailDate: UnixTime
}

export enum HomeScreenPeopleNotificationType {
  FOLLOWED = 1,
  FOLLOWED_MULTI = 2,
}

export type HomeScreenPeopleNotificationFollowed = {
  followTime: Time
  followedBack: boolean
  user: UserSummary
}

export type HomeScreenPeopleNotificationFollowedMulti = {
  followers: HomeScreenPeopleNotificationFollowed[]
  numOthers: number
}

export type HomeScreenPeopleNotification =
  | {t: HomeScreenPeopleNotificationType.FOLLOWED; FOLLOWED: HomeScreenPeopleNotificationFollowed | null}
  | {t: HomeScreenPeopleNotificationType.FOLLOWED_MULTI; FOLLOWED_MULTI: HomeScreenPeopleNotificationFollowedMulti | null}

export type HomeScreenItem = {
  badged: boolean
  data: HomeScreenItemData
  dataExt: HomeScreenItemDataExt
}

export type Pics = {
  square40: string
  square200: string
  square360: string
}

export type HomeUserSummary = {
  uid: UID
  username: string
  bio: string
  fullName: string
  pics?: Pics
}

export type HomeScreen = {
  lastViewed: Time
  version: number
  visits: number
  items: HomeScreenItem[]
  followSuggestions: HomeUserSummary[]
  announcementsVersion: number
}

export type IdentifyProofBreak = {
  remoteProof: RemoteProof
  lcr: LinkCheckResult
}

export type IdentifyTrackBreaks = {
  keys: IdentifyKey[]
  proofs: IdentifyProofBreak[]
}

export type Identify2Res = {
  upk: UserPlusKeys
  identifiedAt: Time
  trackBreaks?: IdentifyTrackBreaks
}

export type Identify2ResUPK2 = {
  upk: UserPlusKeysV2AllIncarnations
  identifiedAt: Time
  trackBreaks?: IdentifyTrackBreaks
}

export type IdentifyLiteRes = {
  ul: UserOrTeamLite
  trackBreaks?: IdentifyTrackBreaks
}

export type ResolveIdentifyImplicitTeamRes = {
  displayName: string
  teamID: TeamID
  writers: UserVersion[]
  trackBreaks: {[key: string]: IdentifyTrackBreaks}
  folderID: TLFID
}

export type Identify3Assertion = string

export type Identify3GUIID = string

export enum Identify3RowState {
  CHECKING = 1,
  VALID = 2,
  ERROR = 3,
  WARNING = 4,
  REVOKED = 5,
}

export enum Identify3RowColor {
  BLUE = 1,
  RED = 2,
  BLACK = 3,
  GREEN = 4,
  GRAY = 5,
  YELLOW = 6,
  ORANGE = 7,
}

export enum Identify3ResultType {
  OK = 0,
  BROKEN = 1,
  NEEDS_UPGRADE = 2,
  CANCELED = 3,
}

export type Identify3RowMeta = {
  color: Identify3RowColor
  label: string
}

export type Identify3Row = {
  guiID: Identify3GUIID
  key: string
  value: string
  priority: number
  siteURL: string
  siteIcon: SizedImage[]
  siteIconFull: SizedImage[]
  proofURL: string
  sigID: SigID
  ctime: Time
  state: Identify3RowState
  metas: Identify3RowMeta[]
  color: Identify3RowColor
  kid?: KID
}

export type TrackToken = string

export type SigVersion = number

export enum TrackDiffType {
  NONE = 0,
  ERROR = 1,
  CLASH = 2,
  REVOKED = 3,
  UPGRADED = 4,
  NEW = 5,
  REMOTE_FAIL = 6,
  REMOTE_WORKING = 7,
  REMOTE_CHANGED = 8,
  NEW_ELDEST = 9,
  NONE_VIA_TEMPORARY = 10,
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
  NEW_OK = 1,
  NEW_ZERO_PROOFS = 2,
  NEW_FAIL_PROOFS = 3,
  UPDATE_BROKEN_FAILED_PROOFS = 4,
  UPDATE_NEW_PROOFS = 5,
  UPDATE_OK = 6,
  UPDATE_BROKEN_REVOKED = 7,
}

export type TrackOptions = {
  localOnly: boolean
  bypassConfirm: boolean
  forceRetrack: boolean
  expiringLocal: boolean
  forPGPPull: boolean
  sigVersion?: SigVersion
}

export enum IdentifyReasonType {
  NONE = 0,
  ID = 1,
  TRACK = 2,
  ENCRYPT = 3,
  DECRYPT = 4,
  VERIFY = 5,
  RESOURCE = 6,
  BACKGROUND = 7,
}

export type IdentifyReason = {
  type: IdentifyReasonType
  reason: string
  resource: string
}

export type IdentifyOutcome = {
  username: string
  status?: Status
  warnings: string[]
  trackUsed?: TrackSummary
  trackStatus: TrackStatus
  numTrackFailures: number
  numTrackChanges: number
  numProofFailures: number
  numRevoked: number
  numProofSuccesses: number
  revoked: TrackDiff[]
  trackOptions: TrackOptions
  forPGPPull: boolean
  reason: IdentifyReason
}

export type RemoteProof = {
  proofType: ProofType
  key: string
  value: string
  displayMarkup: string
  sigID: SigID
  mTime: Time
}

export type ProofResult = {
  state: ProofState
  status: ProofStatus
  desc: string
}

export type IdentifyRow = {
  rowId: number
  proof: RemoteProof
  trackDiff?: TrackDiff
}

export type IdentifyKey = {
  pgpFingerprint: Buffer
  KID: KID
  trackDiff?: TrackDiff
  breaksTracking: boolean
  sigID: SigID
}

export type Cryptocurrency = {
  rowId: number
  pkhash: Buffer
  address: string
  sigID: SigID
  type: string
  family: string
}

export type StellarAccount = {
  accountID: string
  federationAddress: string
  sigID: SigID
}

export type RevokedProof = {
  proof: RemoteProof
  diff: TrackDiff
  snoozed: boolean
}

export type Identity = {
  status?: Status
  whenLastTracked: Time
  proofs: IdentifyRow[]
  cryptocurrency: Cryptocurrency[]
  revoked: TrackDiff[]
  revokedDetails: RevokedProof[]
  breaksTracking: boolean
}

export type SigHint = {
  remoteId: string
  humanUrl: string
  apiUrl: string
  checkText: string
}

export enum CheckResultFreshness {
  FRESH = 0,
  AGED = 1,
  RANCID = 2,
}

export type CheckResult = {
  proofResult: ProofResult
  time: Time
  freshness: CheckResultFreshness
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

export type UserTeamShowcase = {
  fqName: string
  open: boolean
  teamIsShowcased: boolean
  description: string
  role: TeamRole
  publicAdmins: string[]
  numMembers: number
}

export type UserCard = {
  following: number
  followers: number
  uid: UID
  fullName: string
  location: string
  bio: string
  website: string
  twitter: string
  youFollowThem: boolean
  theyFollowYou: boolean
  teamShowcase: UserTeamShowcase[]
  registeredForAirdrop: boolean
  blocked: boolean
}

export type ConfirmResult = {
  identityConfirmed: boolean
  remoteConfirmed: boolean
  expiringLocal: boolean
  autoConfirmed: boolean
}

export enum DismissReasonType {
  NONE = 0,
  HANDLED_ELSEWHERE = 1,
}

export type DismissReason = {
  type: DismissReasonType
  reason: string
  resource: string
}

/**
 * Install status describes state of install for a component or service.
 */
export enum InstallStatus {
  UNKNOWN = 0,
  ERROR = 1,
  NOT_INSTALLED = 2,
  INSTALLED = 4,
}

export enum InstallAction {
  UNKNOWN = 0,
  NONE = 1,
  UPGRADE = 2,
  REINSTALL = 3,
  INSTALL = 4,
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

export type ServicesStatus = {
  service: ServiceStatus[]
  kbfs: ServiceStatus[]
  updater: ServiceStatus[]
}

export type FuseMountInfo = {
  path: string
  fstype: string
  output: string
}

export type FuseStatus = {
  version: string
  bundleVersion: string
  kextID: string
  path: string
  kextStarted: boolean
  installStatus: InstallStatus
  installAction: InstallAction
  mountInfos: FuseMountInfo[]
  status: Status
}

export type ComponentResult = {
  name: string
  status: Status
  exitCode: number
}

export type InstallResult = {
  componentResults: ComponentResult[]
  status: Status
  fatal: boolean
}

export type UninstallResult = {
  componentResults: ComponentResult[]
  status: Status
}

export type KBFSTeamSettings = {
  tlfID: TLFID
}

export enum FSStatusCode {
  START = 0,
  FINISH = 1,
  ERROR = 2,
}

export enum FSNotificationType {
  ENCRYPTING = 0,
  DECRYPTING = 1,
  SIGNING = 2,
  VERIFYING = 3,
  REKEYING = 4,
  CONNECTION = 5,
  MD_READ_SUCCESS = 6,
  FILE_CREATED = 7,
  FILE_MODIFIED = 8,
  FILE_DELETED = 9,
  FILE_RENAMED = 10,
  INITIALIZED = 11,
  SYNC_CONFIG_CHANGED = 12,
}

export enum FSErrorType {
  ACCESS_DENIED = 0,
  USER_NOT_FOUND = 1,
  REVOKED_DATA_DETECTED = 2,
  NOT_LOGGED_IN = 3,
  TIMEOUT = 4,
  REKEY_NEEDED = 5,
  BAD_FOLDER = 6,
  NOT_IMPLEMENTED = 7,
  OLD_VERSION = 8,
  OVER_QUOTA = 9,
  NO_SIG_CHAIN = 10,
  TOO_MANY_FOLDERS = 11,
  EXDEV_NOT_SUPPORTED = 12,
  DISK_LIMIT_REACHED = 13,
  DISK_CACHE_ERROR_LOG_SEND = 14,
  OFFLINE_ARCHIVED = 15,
  OFFLINE_UNSYNCED = 16,
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

export type FSEditListRequest = {
  folder: Folder
  requestID: number
}

export type FSFolderWriterEdit = {
  filename: string
  notificationType: FSNotificationType
  serverTime: Time
}

export type FSFolderWriterEditHistory = {
  writerName: string
  edits: FSFolderWriterEdit[]
  deletes: FSFolderWriterEdit[]
}

export type FSFolderEditHistory = {
  folder: Folder
  serverTime: Time
  history: FSFolderWriterEditHistory[]
}

export type FSSyncStatusRequest = {
  requestID: number
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
  syncingPaths: string[]
  endEstimate?: Time
}

export type FolderSyncStatus = {
  localDiskBytesAvailable: number
  localDiskBytesTotal: number
  prefetchStatus: PrefetchStatus
  prefetchProgress: PrefetchProgress
  storedBytesTotal: number
  outOfSyncSpace: boolean
}

export type GcOptions = {
  maxLooseRefs: number
  pruneMinLooseObjects: number
  pruneExpireTime: Time
  maxObjectPacks: number
}

export type PassphraseStream = {
  passphraseStream: Buffer
  generation: number
}

export type SessionToken = string

export type CsrfToken = string

export type HelloRes = string

export type Hello2Res = {
  encryptionKey: KID
  sigPayload: HelloRes
  deviceEkKID: KID
}

export type PerUserKeyBox = {
  generation: PerUserKeyGeneration
  box: string
  receiverKID: KID
}

export type ConfiguredAccount = {
  username: string
  fullname: FullName
  hasStoredSecret: boolean
  isCurrent: boolean
}

export enum ResetPromptType {
  COMPLETE = 0,
  ENTER_NO_DEVICES = 1,
  ENTER_FORGOT_PW = 2,
}

export enum PassphraseRecoveryPromptType {
  ENCRYPTED_PGP_KEYS = 0,
}

export type MerkleRootAndTime = {
  root: MerkleRootV2
  updateTime: Time
  fetchTime: Time
}

export type KBFSRootHash = Buffer

export type KBFSRoot = {
  treeID: MerkleTreeID
  root: KBFSRootHash
}

export type MerkleStoreSupportedVersion = number

export type MerkleStoreKitHash = string

export type MerkleStoreKit = string

export type MerkleStoreEntryString = string

export type MerkleStoreEntry = {
  hash: MerkleStoreKitHash
  entry: MerkleStoreEntryString
}

export type KeyHalf = {
  user: UID
  deviceKID: KID
  key: Buffer
}

export type MDBlock = {
  version: number
  timestamp: Time
  block: Buffer
}

export type KeyBundle = {
  version: number
  bundle: Buffer
}

export type MetadataResponse = {
  folderID: string
  mdBlocks: MDBlock[]
}

export type MerkleRoot = {
  version: number
  root: Buffer
}

export type PingResponse = {
  timestamp: Time
}

export type KeyBundleResponse = {
  WriterBundle: KeyBundle
  ReaderBundle: KeyBundle
}

export type LockID = number

export type MDPriority = number

export type LockContext = {
  requireLockID: LockID
  releaseAfterSuccess: boolean
}

export type FindNextMDResponse = {
  kbfsRoot: MerkleRoot
  merkleNodes: Buffer[]
  rootSeqno: Seqno
  rootHash: HashMeta
}

export type RekeyRequest = {
  folderID: string
  revision: number
}

export type ChatConversationID = Buffer

export type TeamMemberOutReset = {
  teamname: string
  username: string
  uid: UID
  id: gregor1.MsgID
}

export type DeletedTeamInfo = {
  teamName: string
  deletedBy: string
  id: gregor1.MsgID
}

export type WalletAccountInfo = {
  accountID: string
  numUnread: number
}

export type ResetState = {
  endTime: Time
  active: boolean
}

export type BadgeState = {
  newTlfs: number
  rekeysNeeded: number
  newFollowers: number
  inboxVers: number
  homeTodoItems: number
  unverifiedEmails: number
  unverifiedPhones: number
  newDevices: DeviceID[]
  revokedDevices: DeviceID[]
  conversations: BadgeConversationInfo[]
  newGitRepoGlobalUniqueIDs: string[]
  newTeamNames: string[]
  deletedTeams: DeletedTeamInfo[]
  newTeamAccessRequests: string[]
  teamsWithResetUsers: TeamMemberOutReset[]
  unreadWalletAccounts: WalletAccountInfo[]
  resetState: ResetState
}

export type BadgeConversationInfo = {
  convID: ChatConversationID
  badgeCounts: {[key: string]: number}
  unreadMessages: number
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
  deviceclone: boolean
  chatattachments: boolean
  wallet: boolean
  audit: boolean
  runtimestats: boolean
}

export enum StatsSeverityLevel {
  NORMAL = 0,
  WARNING = 1,
  SEVERE = 2,
}

export type DbStats = {
  type: DbType
  memCompActive: boolean
  tableCompActive: boolean
}

export enum ProcessType {
  MAIN = 0,
  KBFS = 1,
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

export type RuntimeStats = {
  processStats: ProcessRuntimeStats[]
  dbStats: DbStats[]
  convLoaderActive: boolean
  selectiveSyncActive: boolean
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
  NONE = 0,
  USER = 1,
  TEAM = 2,
}

export enum RuntimeGroup {
  UNKNOWN = 0,
  LINUXLIKE = 1,
  DARWINLIKE = 2,
  WINDOWSLIKE = 3,
}

export type Feature = {
  allow: boolean
  defaultValue: boolean
  readonly: boolean
  label: string
}

export type GUIEntryFeatures = {
  showTyping: Feature
}

export enum PassphraseType {
  NONE = 0,
  PAPER_KEY = 1,
  PASS_PHRASE = 2,
  VERIFY_PASS_PHRASE = 3,
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

export type GetPassphraseRes = {
  passphrase: string
  storeSecret: boolean
}

export enum SignMode {
  ATTACHED = 0,
  DETACHED = 1,
  CLEAR = 2,
}

export type PGPSignOptions = {
  keyQuery: string
  mode: SignMode
  binaryIn: boolean
  binaryOut: boolean
}

export type PGPEncryptOptions = {
  recipients: string[]
  noSign: boolean
  noSelf: boolean
  binaryOut: boolean
  keyQuery: string
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

export type PGPCreateUids = {
  useDefault: boolean
  ids: PGPIdentity[]
}

/**
 * Export all pgp keys in lksec, then if doPurge is true, remove the keys from lksec.
 */
export type PGPPurgeRes = {
  filenames: string[]
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
  phoneNumber: PhoneNumber
}

export enum FileType {
  UNKNOWN = 0,
  DIRECTORY = 1,
  FILE = 2,
}

export type FileDescriptor = {
  name: string
  type: FileType
}

export type Process = {
  pid: string
  command: string
  fileDescriptors: FileDescriptor[]
}

export type CheckProofStatus = {
  found: boolean
  status: ProofStatus
  proofText: string
  state: ProofState
}

export type StartProofResult = {
  sigID: SigID
}

export enum ProofState {
  NONE = 0,
  OK = 1,
  TEMP_FAILURE = 2,
  PERM_FAILURE = 3,
  LOOKING = 4,
  SUPERSEDED = 5,
  POSTED = 6,
  REVOKED = 7,
  DELETED = 8,
  UNKNOWN_TYPE = 9,
  SIG_HINT_MISSING = 10,
  UNCHECKED = 11,
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
  NONE = 0,
  OK = 1,
  LOCAL = 2,
  FOUND = 3,
  BASE_ERROR = 100,
  HOST_UNREACHABLE = 101,
  PERMISSION_DENIED = 103,
  FAILED_PARSE = 106,
  DNS_ERROR = 107,
  AUTH_FAILED = 108,
  HTTP_429 = 129,
  HTTP_500 = 150,
  TIMEOUT = 160,
  INTERNAL_ERROR = 170,
  UNCHECKED = 171,
  MISSING_PVL = 172,
  BASE_HARD_ERROR = 200,
  NOT_FOUND = 201,
  CONTENT_FAILURE = 202,
  BAD_USERNAME = 203,
  BAD_REMOTE_ID = 204,
  TEXT_NOT_FOUND = 205,
  BAD_ARGS = 206,
  CONTENT_MISSING = 207,
  TITLE_NOT_FOUND = 208,
  SERVICE_ERROR = 209,
  TOR_SKIPPED = 210,
  TOR_INCOMPATIBLE = 211,
  HTTP_300 = 230,
  HTTP_400 = 240,
  HTTP_OTHER = 260,
  EMPTY_JSON = 270,
  DELETED = 301,
  SERVICE_DEAD = 302,
  BAD_SIGNATURE = 303,
  BAD_API_URL = 304,
  UNKNOWN_TYPE = 305,
  NO_HINT = 306,
  BAD_HINT_TEXT = 307,
  INVALID_PVL = 308,
}

export enum ProofType {
  NONE = 0,
  KEYBASE = 1,
  TWITTER = 2,
  GITHUB = 3,
  REDDIT = 4,
  COINBASE = 5,
  HACKERNEWS = 6,
  FACEBOOK = 8,
  GENERIC_SOCIAL = 9,
  GENERIC_WEB_SITE = 1000,
  DNS = 1001,
  PGP = 1002,
  ROOTER = 100001,
}

export type SelectorEntry = {
  isIndex: boolean
  index: number
  isKey: boolean
  key: string
  isAll: boolean
  isContents: boolean
}

export type ParamProofJSON = {
  sigHash: SigID
  kbUsername: string
}

export type ParamProofUsernameConfig = {
  re: string
  min: number
  max: number
}

export type ParamProofLogoConfig = {
  svgBlack: string
  svgFull: string
}

export type ParamProofServiceConfig = {
  version: number
  domain: string
  displayName: string
  logo?: ParamProofLogoConfig
  description: string
  usernameConfig: ParamProofUsernameConfig
  brandColor: string
  prefillUrl: string
  profileUrl: string
  checkUrl: string
  checkPath: SelectorEntry[]
  avatarPath: SelectorEntry[]
}

export type ServiceDisplayConfig = {
  creationDisabled: boolean
  priority: number
  key: string
  group?: string
  new: boolean
  logoKey: string
}

export type ExternalServiceConfig = {
  schemaVersion: number
  display?: ServiceDisplayConfig
  config?: ParamProofServiceConfig
}

export enum PromptOverwriteType {
  SOCIAL = 0,
  SITE = 1,
}

export type ProveParameters = {
  logoFull: SizedImage[]
  logoBlack: SizedImage[]
  title: string
  subtext: string
  suffix: string
  buttonLabel: string
}

export enum ProvisionMethod {
  DEVICE = 0,
  PAPER_KEY = 1,
  PASSPHRASE = 2,
  GPG_IMPORT = 3,
  GPG_SIGN = 4,
}

export enum GPGMethod {
  GPG_NONE = 0,
  GPG_IMPORT = 1,
  GPG_SIGN = 2,
}

export enum ChooseType {
  EXISTING_DEVICE = 0,
  NEW_DEVICE = 1,
}

/**
 * SecretResponse should be returned by DisplayAndPromptSecret.  Use either secret or phrase.
 */
export type SecretResponse = {
  secret: Buffer
  phrase: string
}

export type VerifySessionRes = {
  uid: UID
  sid: string
  generated: number
  lifetime: number
}

export enum Reachable {
  UNKNOWN = 0,
  YES = 1,
  NO = 2,
}

export type Reachability = {
  reachable: Reachable
}

export type TLF = {
  id: TLFID
  name: string
  writers: string[]
  readers: string[]
  isPrivate: boolean
}

export type ProblemTLF = {
  tlf: TLF
  score: number
  solution_kids: KID[]
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
  tlfs: ProblemTLF[]
}

export type ProblemSetDevices = {
  problemSet: ProblemSet
  devices: Device[]
}

export enum Outcome {
  NONE = 0,
  FIXED = 1,
  IGNORED = 2,
}

export type RevokeWarning = {
  endangeredTLFs: TLF[]
}

export enum RekeyEventType {
  NONE = 0,
  NOT_LOGGED_IN = 1,
  API_ERROR = 2,
  NO_PROBLEMS = 3,
  LOAD_ME_ERROR = 4,
  CURRENT_DEVICE_CAN_REKEY = 5,
  DEVICE_LOAD_ERROR = 6,
  HARASS = 7,
  NO_GREGOR_MESSAGES = 8,
}

export type RekeyEvent = {
  eventType: RekeyEventType
  interruptType: number
}

export type SHA512 = Buffer

export enum ResetType {
  NONE = 0,
  RESET = 1,
  DELETE = 2,
}

export type ResetMerkleRoot = {
  hashMeta: HashMeta
  seqno: Seqno
}

export type ResetPrev = {
  eldestKID?: KID
  lastSeqno: Seqno
  reset: SHA512
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

export enum AuthenticityType {
  SIGNED = 0,
  REPUDIABLE = 1,
  ANONYMOUS = 2,
}

export type SaltpackEncryptOptions = {
  recipients: string[]
  teamRecipients: string[]
  authenticityType: AuthenticityType
  useEntityKeys: boolean
  useDeviceKeys: boolean
  usePaperKeys: boolean
  noSelfEncrypt: boolean
  binary: boolean
  saltpackVersion: number
  useKBFSKeysOnlyForTesting: boolean
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

export type SaltpackEncryptedMessageInfo = {
  devices: Device[]
  numAnonReceivers: number
  receiverIsAnon: boolean
  sender: SaltpackSender
}

export enum SaltpackSenderType {
  NOT_TRACKED = 0,
  UNKNOWN = 1,
  ANONYMOUS = 2,
  TRACKING_BROKE = 3,
  TRACKING_OK = 4,
  SELF = 5,
  REVOKED = 6,
  EXPIRED = 7,
}

export type SaltpackSender = {
  uid: UID
  username: string
  senderType: SaltpackSenderType
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

export type SignupRes = {
  passphraseOk: boolean
  postOk: boolean
  writeOk: boolean
}

export type Sig = {
  seqno: Seqno
  sigID: SigID
  sigIDDisplay: string
  type: string
  cTime: Time
  revoked: boolean
  active: boolean
  key: string
  body: string
}

export type SigTypes = {
  track: boolean
  proof: boolean
  cryptocurrency: boolean
  isSelf: boolean
}

export type SigListArgs = {
  sessionID: number
  username: string
  allKeys: boolean
  types?: SigTypes
  filterx: string
  verbose: boolean
  revoked: boolean
}

export type OpID = string | null
export type KBFSRevision = number

export enum KBFSArchivedType {
  REVISION = 0,
  TIME = 1,
  TIME_STRING = 2,
  REL_TIME_STRING = 3,
}

export type KBFSArchivedParam =
  | {KBFSArchivedType: KBFSArchivedType.REVISION; REVISION: KBFSRevision | null}
  | {KBFSArchivedType: KBFSArchivedType.TIME; TIME: Time | null}
  | {KBFSArchivedType: KBFSArchivedType.TIME_STRING; TIME_STRING: string | null}
  | {KBFSArchivedType: KBFSArchivedType.REL_TIME_STRING; REL_TIME_STRING: string | null}

export type KBFSArchivedPath = {
  path: string
  archivedParam: KBFSArchivedParam
  identifyBehavior?: TLFIdentifyBehavior
}

export type KBFSPath = {
  path: string
  identifyBehavior?: TLFIdentifyBehavior
}

export enum PathType {
  LOCAL = 0,
  KBFS = 1,
  KBFS_ARCHIVED = 2,
}

export type Path =
  | {PathType: PathType.LOCAL; LOCAL: string | null}
  | {PathType: PathType.KBFS; KBFS: KBFSPath | null}
  | {PathType: PathType.KBFS_ARCHIVED; KBFS_ARCHIVED: KBFSArchivedPath | null}

export enum DirentType {
  FILE = 0,
  DIR = 1,
  SYM = 2,
  EXEC = 3,
}

export enum PrefetchStatus {
  NOT_STARTED = 0,
  IN_PROGRESS = 1,
  COMPLETE = 2,
}

export type PrefetchProgress = {
  start: Time
  endEstimate: Time
  bytesTotal: number
  bytesFetched: number
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
}

export type DirentWithRevision = {
  entry: Dirent
  revision: KBFSRevision
}

export enum RevisionSpanType {
  DEFAULT = 0,
  LAST_FIVE = 1,
}

export type ErrorNum = number

export enum OpenFlags {
  READ = 0,
  REPLACE = 1,
  EXISTING = 2,
  WRITE = 4,
  APPEND = 8,
  DIRECTORY = 16,
}

export type Progress = number

export type SimpleFSListResult = {
  entries: Dirent[]
  progress: Progress
}

export type FileContent = {
  data: Buffer
  progress: Progress
}

export enum AsyncOps {
  LIST = 0,
  LIST_RECURSIVE = 1,
  READ = 2,
  WRITE = 3,
  COPY = 4,
  MOVE = 5,
  REMOVE = 6,
  LIST_RECURSIVE_TO_DEPTH = 7,
  GET_REVISIONS = 8,
}

export enum ListFilter {
  NO_FILTER = 0,
  FILTER_ALL_HIDDEN = 1,
  FILTER_SYSTEM_HIDDEN = 2,
}

export type ListArgs = {
  opID: OpID
  path: Path
  filter: ListFilter
}

export type ListToDepthArgs = {
  opID: OpID
  path: Path
  filter: ListFilter
  depth: number
}

export type RemoveArgs = {
  opID: OpID
  path: Path
  recursive: boolean
}

export type ReadArgs = {
  opID: OpID
  path: Path
  offset: number
  size: number
}

export type WriteArgs = {
  opID: OpID
  path: Path
  offset: number
}

export type CopyArgs = {
  opID: OpID
  src: Path
  dest: Path
}

export type MoveArgs = {
  opID: OpID
  src: Path
  dest: Path
}

export type GetRevisionsArgs = {
  opID: OpID
  path: Path
  spanType: RevisionSpanType
}

export type OpDescription =
  | {asyncOp: AsyncOps.LIST; LIST: ListArgs | null}
  | {asyncOp: AsyncOps.LIST_RECURSIVE; LIST_RECURSIVE: ListArgs | null}
  | {asyncOp: AsyncOps.LIST_RECURSIVE_TO_DEPTH; LIST_RECURSIVE_TO_DEPTH: ListToDepthArgs | null}
  | {asyncOp: AsyncOps.READ; READ: ReadArgs | null}
  | {asyncOp: AsyncOps.WRITE; WRITE: WriteArgs | null}
  | {asyncOp: AsyncOps.COPY; COPY: CopyArgs | null}
  | {asyncOp: AsyncOps.MOVE; MOVE: MoveArgs | null}
  | {asyncOp: AsyncOps.REMOVE; REMOVE: RemoveArgs | null}
  | {asyncOp: AsyncOps.GET_REVISIONS; GET_REVISIONS: GetRevisionsArgs | null}

export type GetRevisionsResult = {
  revisions: DirentWithRevision[]
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

export type SimpleFSGetHTTPAddressAndTokenResponse = {
  address: string
  token: string
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
  DISABLED = 0,
  ENABLED = 1,
  PARTIAL = 2,
}

export type FolderSyncConfig = {
  mode: FolderSyncMode
  paths: string[]
}

export type FolderSyncConfigAndStatus = {
  config: FolderSyncConfig
  status: FolderSyncStatus
}

export type FolderSyncConfigAndStatusWithFolder = {
  folder: Folder
  config: FolderSyncConfig
  status: FolderSyncStatus
}

export type SyncConfigAndStatusRes = {
  folders: FolderSyncConfigAndStatusWithFolder[]
  overallStatus: FolderSyncStatus
}

export type FSSettings = {
  spaceAvailableNotificationThreshold: number
}

export type SimpleFSStats = {
  processStats: ProcessRuntimeStats
  blockCacheDbStats: string[]
  syncCacheDbStats: string[]
  runtimeDbStats: DbStats[]
}

export enum SubscriptionTopic {
  FAVORITES = 0,
  JOURNAL_STATUS = 1,
  ONLINE_STATUS = 2,
}

export enum PathSubscriptionTopic {
  CHILDREN = 0,
  STAT = 1,
}

export type TeambotKeyGeneration = number

export type TeambotKeyMetadata = {
  kid: KID
  generation: TeambotKeyGeneration
  uid: UID
  pukGeneration: PerUserKeyGeneration
}

export type TeambotKeyBoxed = {
  box: string
  metadata: TeambotKeyMetadata
}

export type TeambotKey = {
  seed: Bytes32
  metadata: TeambotKeyMetadata
}

export enum TeamRole {
  NONE = 0,
  READER = 1,
  WRITER = 2,
  ADMIN = 3,
  OWNER = 4,
  BOT = 5,
  RESTRICTEDBOT = 6,
}

export enum TeamApplication {
  KBFS = 1,
  CHAT = 2,
  SALTPACK = 3,
  GIT_METADATA = 4,
  SEITAN_INVITE_TOKEN = 5,
  STELLAR_RELAY = 6,
}

export enum TeamStatus {
  NONE = 0,
  LIVE = 1,
  DELETED = 2,
  ABANDONED = 3,
}

export type PerTeamKeyGeneration = number

export enum PTKType {
  READER = 0,
}

export enum PerTeamSeedCheckVersion {
  V1 = 1,
}

export type PerTeamSeedCheck = {
  version: PerTeamSeedCheckVersion
  value: PerTeamSeedCheckValue
}

export type PerTeamSeedCheckValue = Buffer

export type PerTeamSeedCheckValuePostImage = Buffer

export type PerTeamSeedCheckPostImage = {
  value: PerTeamSeedCheckValuePostImage
  version: PerTeamSeedCheckVersion
}

export type TeamApplicationKey = {
  application: TeamApplication
  keyGeneration: PerTeamKeyGeneration
  key: Bytes32
}

export type MaskB64 = Buffer

export type TeamInviteID = string

export type ReaderKeyMask = {
  application: TeamApplication
  generation: PerTeamKeyGeneration
  mask: MaskB64
}

export type PerTeamKey = {
  gen: PerTeamKeyGeneration
  seqno: Seqno
  sigKID: KID
  encKID: KID
}

export type PerTeamKeyAndCheck = {
  ptk: PerTeamKey
  check: PerTeamSeedCheckPostImage
}

export type PerTeamKeySeed = string | null
export type PerTeamKeySeedItem = {
  seed: PerTeamKeySeed
  generation: PerTeamKeyGeneration
  seqno: Seqno
  check?: PerTeamSeedCheck
}

export type TeamMember = {
  uid: UID
  role: TeamRole
  eldestSeqno: Seqno
  status: TeamMemberStatus
}

export type TeamMembers = {
  owners: UserVersion[]
  admins: UserVersion[]
  writers: UserVersion[]
  readers: UserVersion[]
  bots: UserVersion[]
  restrictedBots: UserVersion[]
}

export enum TeamMemberStatus {
  ACTIVE = 0,
  RESET = 1,
  DELETED = 2,
}

export type TeamMemberDetails = {
  uv: UserVersion
  username: string
  fullName: FullName
  needsPUK: boolean
  status: TeamMemberStatus
}

export type TeamMembersDetails = {
  owners: TeamMemberDetails[]
  admins: TeamMemberDetails[]
  writers: TeamMemberDetails[]
  readers: TeamMemberDetails[]
  bots: TeamMemberDetails[]
  restrictedBots: TeamMemberDetails[]
}

export type TeamDetails = {
  members: TeamMembersDetails
  keyGeneration: PerTeamKeyGeneration
  annotatedActiveInvites: {[key: string]: AnnotatedTeamInvite}
  settings: TeamSettings
  showcase: TeamShowcase
}

export type UserVersionPercentForm = string

export type TeamChangeReq = {
  owners: UserVersion[]
  admins: UserVersion[]
  writers: UserVersion[]
  readers: UserVersion[]
  bots: UserVersion[]
  restrictedBots: {[key: string]: TeamBotSettings}
  none: UserVersion[]
  completedInvites: {[key: string]: UserVersionPercentForm}
}

export type TeamPlusApplicationKeys = {
  id: TeamID
  name: string
  implicit: boolean
  public: boolean
  application: TeamApplication
  writers: UserVersion[]
  onlyReaders: UserVersion[]
  onlyRestrictedBots: UserVersion[]
  applicationKeys: TeamApplicationKey[]
}

export type TeamData = {
  subversion: number
  frozen: boolean
  tombstoned: boolean
  secretless: boolean
  name: TeamName
  chain: TeamSigChainState
  perTeamKeySeedsUnverified: {[key: string]: PerTeamKeySeedItem}
  readerKeyMasks: {[key: string]: {[key: string]: MaskB64}}
  latestSeqnoHint: Seqno
  cachedAt: Time
  tlfCryptKeys: {[key: string]: CryptKey[]}
}

export type FastTeamData = {
  frozen: boolean
  subversion: number
  tombstoned: boolean
  name: TeamName
  chain: FastTeamSigChainState
  perTeamKeySeedsUnverified: {[key: string]: PerTeamKeySeed}
  maxContinuousPTKGeneration: PerTeamKeyGeneration
  seedChecks: {[key: string]: PerTeamSeedCheck}
  latestKeyGeneration: PerTeamKeyGeneration
  readerKeyMasks: {[key: string]: {[key: string]: MaskB64}}
  latestSeqnoHint: Seqno
  cachedAt: Time
  loadedLatest: boolean
}

export enum RatchetType {
  MAIN = 0,
  BLINDED = 1,
  SELF = 2,
}

export type HiddenTeamChainRatchetSet = {
  ratchets: {[key: string]: LinkTripleAndTime}
}

export type HiddenTeamChain = {
  id: TeamID
  subversion: number
  public: boolean
  frozen: boolean
  tombstoned: boolean
  last: Seqno
  latestSeqnoHint: Seqno
  lastPerTeamKeys: {[key: string]: Seqno}
  outer: {[key: string]: LinkID}
  inner: {[key: string]: HiddenTeamChainLink}
  readerPerTeamKeys: {[key: string]: Seqno}
  ratchetSet: HiddenTeamChainRatchetSet
  cachedAt: Time
  needRotate: boolean
  merkleRoots: {[key: string]: MerkleRootV2}
}

export type LinkTriple = {
  seqno: Seqno
  seqType: SeqType
  linkID: LinkID
}

export type LinkTripleAndTime = {
  triple: LinkTriple
  time: Time
}

export type UpPointer = {
  ourSeqno: Seqno
  parentID: TeamID
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

export type HiddenTeamChainLink = {
  merkleRoot: MerkleRootV2
  parentChain: LinkTriple
  signer: Signer
  ptk: {[key: string]: PerTeamKeyAndCheck}
}

export type FastTeamSigChainState = {
  ID: TeamID
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

export type Audit = {
  time: Time
  maxMerkleSeqno: Seqno
  maxChainSeqno: Seqno
  maxMerkleProbe: Seqno
}

export type Probe = {
  index: number
  teamSeqno: Seqno
}

export enum AuditVersion {
  V0 = 0,
  V1 = 1,
  V2 = 2,
  V3 = 3,
}

export type AuditHistory = {
  ID: TeamID
  public: boolean
  priorMerkleSeqno: Seqno
  version: AuditVersion
  audits: Audit[]
  preProbes: {[key: string]: Probe}
  postProbes: {[key: string]: Probe}
  tails: {[key: string]: LinkID}
  skipUntil: Time
}

export enum TeamInviteCategory {
  NONE = 0,
  UNKNOWN = 1,
  KEYBASE = 2,
  EMAIL = 3,
  SBS = 4,
  SEITAN = 5,
  PHONE = 6,
}

export type TeamInviteType =
  | {c: TeamInviteCategory.UNKNOWN; UNKNOWN: string | null}
  | {c: TeamInviteCategory.SBS; SBS: TeamInviteSocialNetwork | null}

export type TeamInviteSocialNetwork = string

export type TeamInviteName = string

export type TeamInvite = {
  role: TeamRole
  id: TeamInviteID
  type: TeamInviteType
  name: TeamInviteName
  inviter: UserVersion
}

export type AnnotatedTeamInvite = {
  role: TeamRole
  id: TeamInviteID
  type: TeamInviteType
  name: TeamInviteName
  uv: UserVersion
  inviter: UserVersion
  inviterUsername: string
  teamName: string
  status: TeamMemberStatus
}

export type TeamEncryptedKBFSKeyset = {
  v: number
  e: Buffer
  n: Buffer
}

export type TeamGetLegacyTLFUpgrade = {
  encryptedKeyset: string
  teamGeneration: PerTeamKeyGeneration
  legacyGeneration: number
  appType: TeamApplication
}

export type TeamEncryptedKBFSKeysetHash = string

export type TeamLegacyTLFUpgradeChainInfo = {
  keysetHash: TeamEncryptedKBFSKeysetHash
  teamGeneration: PerTeamKeyGeneration
  legacyGeneration: number
  appType: TeamApplication
}

export type TeamSigChainState = {
  reader: UserVersion
  id: TeamID
  implicit: boolean
  public: boolean
  rootAncestor: TeamName
  nameDepth: number
  nameLog: TeamNameLogPoint[]
  lastSeqno: Seqno
  lastLinkID: LinkID
  lastHighSeqno: Seqno
  lastHighLinkID: LinkID
  parentID?: TeamID
  userLog: {[key: string]: UserLogPoint[]}
  subteamLog: {[key: string]: SubteamLogPoint[]}
  perTeamKeys: {[key: string]: PerTeamKey}
  maxPerTeamKeyGeneration: PerTeamKeyGeneration
  perTeamKeyCTime: UnixTime
  linkIDs: {[key: string]: LinkID}
  stubbedLinks: {[key: string]: boolean}
  activeInvites: {[key: string]: TeamInvite}
  obsoleteInvites: {[key: string]: TeamInvite}
  open: boolean
  openTeamJoinAs: TeamRole
  bots: {[key: string]: TeamBotSettings}
  tlfIDs: TLFID[]
  tlfLegacyUpgrade: {[key: string]: TeamLegacyTLFUpgradeChainInfo}
  headMerkle?: MerkleRootV2
  merkleRoots: {[key: string]: MerkleRootV2}
}

export type BoxSummaryHash = string

export type TeamNameLogPoint = {
  lastPart: TeamNamePart
  seqno: Seqno
}

export type UserLogPoint = {
  role: TeamRole
  sigMeta: SignatureMetadata
}

export type SubteamLogPoint = {
  name: TeamName
  seqno: Seqno
}

export type TeamNamePart = string

export type TeamName = {
  parts: TeamNamePart[]
}

export type TeamCLKRResetUser = {
  uid: UID
  userEldestSeqno: Seqno
  memberEldestSeqno: Seqno
}

export type TeamCLKRMsg = {
  teamID: TeamID
  generation: PerTeamKeyGeneration
  score: number
  resetUsersUntrusted: TeamCLKRResetUser[]
}

export type TeamResetUser = {
  username: string
  uid: UID
  eldestSeqno: Seqno
  isDelete: boolean
}

export type TeamMemberOutFromReset = {
  teamName: string
  resetUser: TeamResetUser
}

export type TeamChangeRow = {
  id: TeamID
  name: string
  keyRotated: boolean
  membershipChanged: boolean
  latestSeqno: Seqno
  latestHiddenSeqno: Seqno
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
  inviteID: TeamInviteID
  uid: UID
  eldestSeqno: Seqno
  role: TeamRole
}

export type TeamSBSMsg = {
  teamID: TeamID
  score: number
  invitees: TeamInvitee[]
}

export type TeamAccessRequest = {
  uid: UID
  eldestSeqno: Seqno
}

export type TeamOpenReqMsg = {
  teamID: TeamID
  tars: TeamAccessRequest[]
}

export type SeitanAKey = string

export type SeitanIKey = string

export type SeitanPubKey = string

export type SeitanIKeyV2 = string

export enum SeitanKeyAndLabelVersion {
  V1 = 1,
  V2 = 2,
}

export type SeitanKeyAndLabel =
  | {v: SeitanKeyAndLabelVersion.V1; V1: SeitanKeyAndLabelVersion1 | null}
  | {v: SeitanKeyAndLabelVersion.V2; V2: SeitanKeyAndLabelVersion2 | null}

export type SeitanKeyAndLabelVersion1 = {
  i: SeitanIKey
  l: SeitanKeyLabel
}

export type SeitanKeyAndLabelVersion2 = {
  k: SeitanPubKey
  l: SeitanKeyLabel
}

export enum SeitanKeyLabelType {
  SMS = 1,
}

export type SeitanKeyLabel = {t: SeitanKeyLabelType.SMS; SMS: SeitanKeyLabelSms | null}

export type SeitanKeyLabelSms = {
  f: string
  n: string
}

export type TeamSeitanRequest = {
  inviteID: TeamInviteID
  uid: UID
  eldestSeqno: Seqno
  akey: SeitanAKey
  role: TeamRole
  unixCTime: number
}

export type TeamSeitanMsg = {
  teamID: TeamID
  seitans: TeamSeitanRequest[]
}

export type TeamOpenSweepMsg = {
  teamID: TeamID
  resetUsersUntrusted: TeamCLKRResetUser[]
}

export type TeamKBFSKeyRefresher = {
  generation: number
  appType: TeamApplication
}

/**
 * * TeamRefreshData are needed or wanted data requirements that, if unmet, will cause
 *    * a refresh of the cache.
 */
export type TeamRefreshers = {
  needKeyGeneration: PerTeamKeyGeneration
  needApplicationsAtGenerations: {[key: string]: TeamApplication[]}
  needApplicationsAtGenerationsWithKBFS: {[key: string]: TeamApplication[]}
  wantMembers: UserVersion[]
  wantMembersRole: TeamRole
  needKBFSKeyGeneration: TeamKBFSKeyRefresher
}

export type LoadTeamArg = {
  ID: TeamID
  name: string
  public: boolean
  needAdmin: boolean
  refreshUIDMapper: boolean
  refreshers: TeamRefreshers
  forceFullReload: boolean
  forceRepoll: boolean
  staleOK: boolean
  allowNameLookupBurstCache: boolean
  skipAudit: boolean
  skipNeedHiddenRotateCheck: boolean
}

export type FastTeamLoadArg = {
  ID: TeamID
  public: boolean
  assertTeamName?: TeamName
  applications: TeamApplication[]
  keyGenerationsNeeded: PerTeamKeyGeneration[]
  needLatestKey: boolean
  forceRefresh: boolean
}

export type FastTeamLoadRes = {
  name: TeamName
  applicationKeys: TeamApplicationKey[]
}

export type ImplicitRole = {
  role: TeamRole
  ancestor: TeamID
}

export type MemberInfo = {
  userID: UID
  teamID: TeamID
  fqName: string
  isImplicitTeam: boolean
  isOpenTeam: boolean
  role: TeamRole
  implicit?: ImplicitRole
  memberCount: number
  allowProfilePromote: boolean
  isMemberShowcased: boolean
}

export type TeamList = {
  teams: MemberInfo[]
}

export type AnnotatedMemberInfo = {
  userID: UID
  teamID: TeamID
  username: string
  fullName: string
  fqName: string
  isImplicitTeam: boolean
  impTeamDisplayName: string
  isOpenTeam: boolean
  role: TeamRole
  implicit?: ImplicitRole
  needsPUK: boolean
  memberCount: number
  eldestSeqno: Seqno
  allowProfilePromote: boolean
  isMemberShowcased: boolean
  status: TeamMemberStatus
}

export type AnnotatedTeamList = {
  teams: AnnotatedMemberInfo[]
  annotatedActiveInvites: {[key: string]: AnnotatedTeamInvite}
}

export type TeamAddMemberResult = {
  invited: boolean
  user?: User
  emailSent: boolean
  chatSending: boolean
}

export type TeamJoinRequest = {
  name: string
  username: string
}

export type TeamTreeResult = {
  entries: TeamTreeEntry[]
}

export type TeamTreeEntry = {
  name: TeamName
  admin: boolean
}

export type SubteamListEntry = {
  name: TeamName
  memberCount: number
}

export type SubteamListResult = {
  entries: SubteamListEntry[]
}

export type TeamCreateResult = {
  teamID: TeamID
  chatSent: boolean
  creatorAdded: boolean
}

export type TeamSettings = {
  open: boolean
  joinAs: TeamRole
}

export type TeamBotSettings = {
  cmds: boolean
  mentions: boolean
  triggers: string[]
  convs: string[]
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

export type TeamShowcase = {
  isShowcased: boolean
  description?: string
  setByUID?: UID
  anyMemberShowcase: boolean
}

export type TeamAndMemberShowcase = {
  teamShowcase: TeamShowcase
  isMemberShowcased: boolean
}

export type UserRolePair = {
  assertionOrEmail: string
  role: TeamRole
  botSettings?: TeamBotSettings
}

export type BulkRes = {
  invited: string[]
  alreadyInvited: string[]
  malformed: string[]
}

export type ImplicitTeamUserSet = {
  keybaseUsers: string[]
  unresolvedUsers: SocialAssertion[]
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

export type ConflictGeneration = number

export type ImplicitTeamConflictInfo = {
  generation: ConflictGeneration
  time: Time
}

export type LookupImplicitTeamRes = {
  teamID: TeamID
  name: TeamName
  displayName: ImplicitTeamDisplayName
  tlfID: TLFID
}

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
  deleteOtherMessages: boolean
  deleteTeam: boolean
}

export type ProfileTeamLoadRes = {
  loadTimeNsec: number
}

export enum RotationType {
  VISIBLE = 0,
  HIDDEN = 1,
  CLKR = 2,
}

export type TeamDebugRes = {
  chain: TeamSigChainState
}

export type TeamProfileAddEntry = {
  teamName: TeamName
  open: boolean
  disabledReason: string
}

export type MemberEmail = {
  email: string
  role: string
}

export type MemberUsername = {
  username: string
  role: string
}

/**
 * Result from calling test(..).
 */
export type Test = {
  reply: string
}

export enum TLFIdentifyBehavior {
  UNSET = 0,
  CHAT_CLI = 1,
  CHAT_GUI = 2,
  REMOVED_AND_UNUSED = 3,
  KBFS_REKEY = 4,
  KBFS_QR = 5,
  CHAT_SKIP = 6,
  SALTPACK = 7,
  CLI = 8,
  GUI = 9,
  DEFAULT_KBFS = 10,
  KBFS_CHAT = 11,
  RESOLVE_AND_CHECK = 12,
  GUI_PROFILE = 13,
  KBFS_INIT = 14,
  FS_GUI = 15,
}

export type CanonicalTlfName = string

export type CryptKey = {
  KeyGeneration: number
  Key: Bytes32
}

export type TLFBreak = {
  breaks: TLFIdentifyFailure[]
}

export type TLFIdentifyFailure = {
  user: User
  breaks?: IdentifyTrackBreaks
}

export type CanonicalTLFNameAndIDWithBreaks = {
  tlfID: TLFID
  CanonicalName: CanonicalTlfName
  breaks: TLFBreak
}

export type GetTLFCryptKeysRes = {
  nameIDBreaks: CanonicalTLFNameAndIDWithBreaks
  CryptKeys: CryptKey[]
}

export type TLFQuery = {
  tlfName: string
  identifyBehavior: TLFIdentifyBehavior
}

export enum PromptDefault {
  NONE = 0,
  YES = 1,
  NO = 2,
}

export enum KeyType {
  NONE = 0,
  NACL = 1,
  PGP = 2,
}

export enum UPK2MinorVersion {
  V0 = 0,
  V1 = 1,
  V2 = 2,
  V3 = 3,
  V4 = 4,
  V5 = 5,
  V6 = 6,
}

export type MerkleRootV2 = {
  seqno: Seqno
  hashMeta: HashMeta
}

export type SigChainLocation = {
  seqno: Seqno
  seqType: SeqType
}

export type MerkleTreeLocation = {
  leaf: UserOrTeamID
  loc: SigChainLocation
}

export type SignatureMetadata = {
  signingKID: KID
  prevMerkleRootSigned: MerkleRootV2
  firstAppearedUnverified: Seqno
  time: Time
  sigChainLocation: SigChainLocation
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

export type PublicKeyV2NaCl = {
  base: PublicKeyV2Base
  parent?: KID
  deviceID: DeviceID
  deviceDescription: string
  deviceType: string
}

export type PGPFingerprint = string | null
export type PublicKeyV2PGPSummary = {
  base: PublicKeyV2Base
  fingerprint: PGPFingerprint
  identities: PGPIdentity[]
}

export type PublicKeyV2 = {keyType: KeyType.NACL; NACL: PublicKeyV2NaCl | null} | {keyType: KeyType.PGP; PGP: PublicKeyV2PGPSummary | null}

export type UserPlusKeysV2 = {
  uid: UID
  username: string
  eldestSeqno: Seqno
  status: StatusCode
  perUserKeys: PerUserKey[]
  deviceKeys: {[key: string]: PublicKeyV2NaCl}
  pgpKeys: {[key: string]: PublicKeyV2PGPSummary}
  stellarAccountID?: string
  remoteTracks: {[key: string]: RemoteTrack}
  reset?: ResetSummary
  unstubbed: boolean
}

export type UserPlusKeysV2AllIncarnations = {
  current: UserPlusKeysV2
  pastIncarnations: UserPlusKeysV2[]
  uvv: UserVersionVector
  seqnoLinkIDs: {[key: string]: LinkID}
  minorVersion: UPK2MinorVersion
  stale: boolean
}

export enum UPAKVersion {
  V1 = 1,
  V2 = 2,
}

/**
 * * What we're storing for each user. At first it was UPAKs, as defined
 *    * in common.avdl. But going forward, we're going to use UserPlusKeysV2AllIncarnations.
 */
export type UPAKVersioned = {v: UPAKVersion.V1; V1: UserPlusAllKeys | null} | {v: UPAKVersion.V2; V2: UserPlusKeysV2AllIncarnations | null}

export enum UPKLiteMinorVersion {
  V0 = 0,
}

export type UPKLiteV1 = {
  uid: UID
  username: string
  eldestSeqno: Seqno
  status: StatusCode
  deviceKeys: {[key: string]: PublicKeyV2NaCl}
  reset?: ResetSummary
}

export type UPKLiteV1AllIncarnations = {
  current: UPKLiteV1
  pastIncarnations: UPKLiteV1[]
  seqnoLinkIDs: {[key: string]: LinkID}
  minorVersion: UPKLiteMinorVersion
}

export type TrackProof = {
  proofType: string
  proofName: string
  idString: string
}

export type WebProof = {
  hostname: string
  protocols: string[]
}

export type Proofs = {
  social: TrackProof[]
  web: WebProof[]
  publicKeys: PublicKey[]
}

export type UserSummary = {
  uid: UID
  username: string
  thumbnail: string
  idVersion: number
  fullName: string
  bio: string
  proofs: Proofs
  sigIDDisplay: string
  trackTime: Time
}

export type EmailAddress = string

export type Email = {
  email: EmailAddress
  isVerified: boolean
  isPrimary: boolean
  visibility: IdentityVisibility
  lastVerifyEmailDate: UnixTime
}

export type UserSettings = {
  emails: Email[]
  phoneNumbers: UserPhoneNumber[]
}

export type UserSummary2 = {
  uid: UID
  username: string
  thumbnail: string
  fullName: string
  isFollower: boolean
  isFollowee: boolean
}

export type UserSummary2Set = {
  users: UserSummary2[]
  time: Time
  version: number
}

export type InterestingPerson = {
  uid: UID
  username: string
  fullname: string
}

export type ProofSuggestionsRes = {
  suggestions: ProofSuggestion[]
  showMore: boolean
}

export type ProofSuggestion = {
  key: string
  belowFold: boolean
  profileText: string
  profileIcon: SizedImage[]
  pickerText: string
  pickerSubtext: string
  pickerIcon: SizedImage[]
  metas: Identify3RowMeta[]
}

export type NextMerkleRootRes = {
  res?: MerkleRootV2
}

export type CanLogoutRes = {
  canLogout: boolean
  reason: string
  setPassphrase: boolean
}

export type APIUserServiceIDWithContact = string

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
  serviceName: APIUserServiceIDWithContact
  username: string
  pictureUrl: string
  bio: string
  location: string
  fullName: string
  confirmed?: boolean
}

export type APIUserServiceSummary = {
  serviceName: APIUserServiceIDWithContact
  username: string
}

export type ImpTofuSearchResult = {
  assertion: string
  assertionValue: string
  assertionKey: string
  label: string
  prettyName: string
  keybaseUsername: string
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
  siteIcon: SizedImage[]
  siteIconFull: SizedImage[]
}

export enum ImpTofuSearchType {
  PHONE = 0,
  EMAIL = 1,
}

export type ImpTofuQuery =
  | {t: ImpTofuSearchType.PHONE; PHONE: PhoneNumber | null}
  | {t: ImpTofuSearchType.EMAIL; EMAIL: EmailAddress | null}
