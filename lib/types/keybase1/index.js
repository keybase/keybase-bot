"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var MobileAppState;
(function (MobileAppState) {
    MobileAppState[MobileAppState["FOREGROUND"] = 0] = "FOREGROUND";
    MobileAppState[MobileAppState["BACKGROUND"] = 1] = "BACKGROUND";
    MobileAppState[MobileAppState["INACTIVE"] = 2] = "INACTIVE";
    MobileAppState[MobileAppState["BACKGROUNDACTIVE"] = 3] = "BACKGROUNDACTIVE";
})(MobileAppState = exports.MobileAppState || (exports.MobileAppState = {}));
var MobileNetworkState;
(function (MobileNetworkState) {
    MobileNetworkState[MobileNetworkState["NONE"] = 0] = "NONE";
    MobileNetworkState[MobileNetworkState["WIFI"] = 1] = "WIFI";
    MobileNetworkState[MobileNetworkState["CELLUAR"] = 2] = "CELLUAR";
    MobileNetworkState[MobileNetworkState["UNKNOWN"] = 3] = "UNKNOWN";
    MobileNetworkState[MobileNetworkState["NOTAVAILABLE"] = 4] = "NOTAVAILABLE";
})(MobileNetworkState = exports.MobileNetworkState || (exports.MobileNetworkState = {}));
var BoxAuditAttemptResult;
(function (BoxAuditAttemptResult) {
    BoxAuditAttemptResult[BoxAuditAttemptResult["FAILURE_RETRYABLE"] = 0] = "FAILURE_RETRYABLE";
    BoxAuditAttemptResult[BoxAuditAttemptResult["FAILURE_MALICIOUS_SERVER"] = 1] = "FAILURE_MALICIOUS_SERVER";
    BoxAuditAttemptResult[BoxAuditAttemptResult["OK_VERIFIED"] = 2] = "OK_VERIFIED";
    BoxAuditAttemptResult[BoxAuditAttemptResult["OK_NOT_ATTEMPTED_ROLE"] = 3] = "OK_NOT_ATTEMPTED_ROLE";
    BoxAuditAttemptResult[BoxAuditAttemptResult["OK_NOT_ATTEMPTED_OPENTEAM"] = 4] = "OK_NOT_ATTEMPTED_OPENTEAM";
    BoxAuditAttemptResult[BoxAuditAttemptResult["OK_NOT_ATTEMPTED_SUBTEAM"] = 5] = "OK_NOT_ATTEMPTED_SUBTEAM";
})(BoxAuditAttemptResult = exports.BoxAuditAttemptResult || (exports.BoxAuditAttemptResult = {}));
var BlockType;
(function (BlockType) {
    BlockType[BlockType["DATA"] = 0] = "DATA";
    BlockType[BlockType["MD"] = 1] = "MD";
    BlockType[BlockType["GIT"] = 2] = "GIT";
})(BlockType = exports.BlockType || (exports.BlockType = {}));
var BlockStatus;
(function (BlockStatus) {
    BlockStatus[BlockStatus["UNKNOWN"] = 0] = "UNKNOWN";
    BlockStatus[BlockStatus["LIVE"] = 1] = "LIVE";
    BlockStatus[BlockStatus["ARCHIVED"] = 2] = "ARCHIVED";
})(BlockStatus = exports.BlockStatus || (exports.BlockStatus = {}));
var TeamType;
(function (TeamType) {
    TeamType[TeamType["NONE"] = 0] = "NONE";
    TeamType[TeamType["LEGACY"] = 1] = "LEGACY";
    TeamType[TeamType["MODERN"] = 2] = "MODERN";
})(TeamType = exports.TeamType || (exports.TeamType = {}));
var TLFVisibility;
(function (TLFVisibility) {
    TLFVisibility[TLFVisibility["ANY"] = 0] = "ANY";
    TLFVisibility[TLFVisibility["PUBLIC"] = 1] = "PUBLIC";
    TLFVisibility[TLFVisibility["PRIVATE"] = 2] = "PRIVATE";
})(TLFVisibility = exports.TLFVisibility || (exports.TLFVisibility = {}));
var SeqType;
(function (SeqType) {
    SeqType[SeqType["NONE"] = 0] = "NONE";
    SeqType[SeqType["PUBLIC"] = 1] = "PUBLIC";
    SeqType[SeqType["PRIVATE"] = 2] = "PRIVATE";
    SeqType[SeqType["SEMIPRIVATE"] = 3] = "SEMIPRIVATE";
    SeqType[SeqType["USER_PRIVATE_HIDDEN"] = 16] = "USER_PRIVATE_HIDDEN";
    SeqType[SeqType["TEAM_PRIVATE_HIDDEN"] = 17] = "TEAM_PRIVATE_HIDDEN";
})(SeqType = exports.SeqType || (exports.SeqType = {}));
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["DESKTOP"] = 0] = "DESKTOP";
    DeviceType[DeviceType["MOBILE"] = 1] = "MOBILE";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["NONE"] = 0] = "NONE";
    LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["NOTICE"] = 3] = "NOTICE";
    LogLevel[LogLevel["WARN"] = 4] = "WARN";
    LogLevel[LogLevel["ERROR"] = 5] = "ERROR";
    LogLevel[LogLevel["CRITICAL"] = 6] = "CRITICAL";
    LogLevel[LogLevel["FATAL"] = 7] = "FATAL";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var ClientType;
(function (ClientType) {
    ClientType[ClientType["NONE"] = 0] = "NONE";
    ClientType[ClientType["CLI"] = 1] = "CLI";
    ClientType[ClientType["GUI_MAIN"] = 2] = "GUI_MAIN";
    ClientType[ClientType["KBFS"] = 3] = "KBFS";
    ClientType[ClientType["GUI_HELPER"] = 4] = "GUI_HELPER";
})(ClientType = exports.ClientType || (exports.ClientType = {}));
var UserOrTeamResult;
(function (UserOrTeamResult) {
    UserOrTeamResult[UserOrTeamResult["USER"] = 1] = "USER";
    UserOrTeamResult[UserOrTeamResult["TEAM"] = 2] = "TEAM";
})(UserOrTeamResult = exports.UserOrTeamResult || (exports.UserOrTeamResult = {}));
var MerkleTreeID;
(function (MerkleTreeID) {
    MerkleTreeID[MerkleTreeID["MASTER"] = 0] = "MASTER";
    MerkleTreeID[MerkleTreeID["KBFS_PUBLIC"] = 1] = "KBFS_PUBLIC";
    MerkleTreeID[MerkleTreeID["KBFS_PRIVATE"] = 2] = "KBFS_PRIVATE";
    MerkleTreeID[MerkleTreeID["KBFS_PRIVATETEAM"] = 3] = "KBFS_PRIVATETEAM";
})(MerkleTreeID = exports.MerkleTreeID || (exports.MerkleTreeID = {}));
var FullNamePackageVersion;
(function (FullNamePackageVersion) {
    FullNamePackageVersion[FullNamePackageVersion["V0"] = 0] = "V0";
    FullNamePackageVersion[FullNamePackageVersion["V1"] = 1] = "V1";
    FullNamePackageVersion[FullNamePackageVersion["V2"] = 2] = "V2";
})(FullNamePackageVersion = exports.FullNamePackageVersion || (exports.FullNamePackageVersion = {}));
var IdentityVisibility;
(function (IdentityVisibility) {
    IdentityVisibility[IdentityVisibility["PRIVATE"] = 0] = "PRIVATE";
    IdentityVisibility[IdentityVisibility["PUBLIC"] = 1] = "PUBLIC";
})(IdentityVisibility = exports.IdentityVisibility || (exports.IdentityVisibility = {}));
var OfflineAvailability;
(function (OfflineAvailability) {
    OfflineAvailability[OfflineAvailability["NONE"] = 0] = "NONE";
    OfflineAvailability[OfflineAvailability["BEST_EFFORT"] = 1] = "BEST_EFFORT";
})(OfflineAvailability = exports.OfflineAvailability || (exports.OfflineAvailability = {}));
var ForkType;
(function (ForkType) {
    ForkType[ForkType["NONE"] = 0] = "NONE";
    ForkType[ForkType["AUTO"] = 1] = "AUTO";
    ForkType[ForkType["WATCHDOG"] = 2] = "WATCHDOG";
    ForkType[ForkType["LAUNCHD"] = 3] = "LAUNCHD";
    ForkType[ForkType["SYSTEMD"] = 4] = "SYSTEMD";
})(ForkType = exports.ForkType || (exports.ForkType = {}));
var UpdateInfoStatus;
(function (UpdateInfoStatus) {
    UpdateInfoStatus[UpdateInfoStatus["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    UpdateInfoStatus[UpdateInfoStatus["NEED_UPDATE"] = 1] = "NEED_UPDATE";
    UpdateInfoStatus[UpdateInfoStatus["CRITICALLY_OUT_OF_DATE"] = 2] = "CRITICALLY_OUT_OF_DATE";
})(UpdateInfoStatus = exports.UpdateInfoStatus || (exports.UpdateInfoStatus = {}));
var UpdateInfoStatus2;
(function (UpdateInfoStatus2) {
    UpdateInfoStatus2[UpdateInfoStatus2["OK"] = 0] = "OK";
    UpdateInfoStatus2[UpdateInfoStatus2["SUGGESTED"] = 1] = "SUGGESTED";
    UpdateInfoStatus2[UpdateInfoStatus2["CRITICAL"] = 2] = "CRITICAL";
})(UpdateInfoStatus2 = exports.UpdateInfoStatus2 || (exports.UpdateInfoStatus2 = {}));
var ProxyType;
(function (ProxyType) {
    ProxyType[ProxyType["No_Proxy"] = 0] = "No_Proxy";
    ProxyType[ProxyType["HTTP_Connect"] = 1] = "HTTP_Connect";
    ProxyType[ProxyType["Socks"] = 2] = "Socks";
})(ProxyType = exports.ProxyType || (exports.ProxyType = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SCOk"] = 0] = "SCOk";
    StatusCode[StatusCode["SCInputError"] = 100] = "SCInputError";
    StatusCode[StatusCode["SCLoginRequired"] = 201] = "SCLoginRequired";
    StatusCode[StatusCode["SCBadSession"] = 202] = "SCBadSession";
    StatusCode[StatusCode["SCBadLoginUserNotFound"] = 203] = "SCBadLoginUserNotFound";
    StatusCode[StatusCode["SCBadLoginPassword"] = 204] = "SCBadLoginPassword";
    StatusCode[StatusCode["SCNotFound"] = 205] = "SCNotFound";
    StatusCode[StatusCode["SCThrottleControl"] = 210] = "SCThrottleControl";
    StatusCode[StatusCode["SCDeleted"] = 216] = "SCDeleted";
    StatusCode[StatusCode["SCGeneric"] = 218] = "SCGeneric";
    StatusCode[StatusCode["SCAlreadyLoggedIn"] = 235] = "SCAlreadyLoggedIn";
    StatusCode[StatusCode["SCExists"] = 230] = "SCExists";
    StatusCode[StatusCode["SCCanceled"] = 237] = "SCCanceled";
    StatusCode[StatusCode["SCInputCanceled"] = 239] = "SCInputCanceled";
    StatusCode[StatusCode["SCBadUsername"] = 243] = "SCBadUsername";
    StatusCode[StatusCode["SCOffline"] = 267] = "SCOffline";
    StatusCode[StatusCode["SCReloginRequired"] = 274] = "SCReloginRequired";
    StatusCode[StatusCode["SCResolutionFailed"] = 275] = "SCResolutionFailed";
    StatusCode[StatusCode["SCProfileNotPublic"] = 276] = "SCProfileNotPublic";
    StatusCode[StatusCode["SCIdentifyFailed"] = 277] = "SCIdentifyFailed";
    StatusCode[StatusCode["SCTrackingBroke"] = 278] = "SCTrackingBroke";
    StatusCode[StatusCode["SCWrongCryptoFormat"] = 279] = "SCWrongCryptoFormat";
    StatusCode[StatusCode["SCDecryptionError"] = 280] = "SCDecryptionError";
    StatusCode[StatusCode["SCInvalidAddress"] = 281] = "SCInvalidAddress";
    StatusCode[StatusCode["SCNoSession"] = 283] = "SCNoSession";
    StatusCode[StatusCode["SCAccountReset"] = 290] = "SCAccountReset";
    StatusCode[StatusCode["SCIdentifiesFailed"] = 295] = "SCIdentifiesFailed";
    StatusCode[StatusCode["SCNoSpaceOnDevice"] = 297] = "SCNoSpaceOnDevice";
    StatusCode[StatusCode["SCMerkleClientError"] = 299] = "SCMerkleClientError";
    StatusCode[StatusCode["SCBadEmail"] = 472] = "SCBadEmail";
    StatusCode[StatusCode["SCRateLimit"] = 602] = "SCRateLimit";
    StatusCode[StatusCode["SCBadSignupUsernameTaken"] = 701] = "SCBadSignupUsernameTaken";
    StatusCode[StatusCode["SCBadInvitationCode"] = 707] = "SCBadInvitationCode";
    StatusCode[StatusCode["SCBadSignupTeamName"] = 711] = "SCBadSignupTeamName";
    StatusCode[StatusCode["SCFeatureFlag"] = 712] = "SCFeatureFlag";
    StatusCode[StatusCode["SCEmailTaken"] = 713] = "SCEmailTaken";
    StatusCode[StatusCode["SCEmailAlreadyAdded"] = 714] = "SCEmailAlreadyAdded";
    StatusCode[StatusCode["SCEmailLimitExceeded"] = 715] = "SCEmailLimitExceeded";
    StatusCode[StatusCode["SCEmailCannotDeletePrimary"] = 716] = "SCEmailCannotDeletePrimary";
    StatusCode[StatusCode["SCEmailUnknown"] = 717] = "SCEmailUnknown";
    StatusCode[StatusCode["SCMissingResult"] = 801] = "SCMissingResult";
    StatusCode[StatusCode["SCKeyNotFound"] = 901] = "SCKeyNotFound";
    StatusCode[StatusCode["SCKeyCorrupted"] = 905] = "SCKeyCorrupted";
    StatusCode[StatusCode["SCKeyInUse"] = 907] = "SCKeyInUse";
    StatusCode[StatusCode["SCKeyBadGen"] = 913] = "SCKeyBadGen";
    StatusCode[StatusCode["SCKeyNoSecret"] = 914] = "SCKeyNoSecret";
    StatusCode[StatusCode["SCKeyBadUIDs"] = 915] = "SCKeyBadUIDs";
    StatusCode[StatusCode["SCKeyNoActive"] = 916] = "SCKeyNoActive";
    StatusCode[StatusCode["SCKeyNoSig"] = 917] = "SCKeyNoSig";
    StatusCode[StatusCode["SCKeyBadSig"] = 918] = "SCKeyBadSig";
    StatusCode[StatusCode["SCKeyBadEldest"] = 919] = "SCKeyBadEldest";
    StatusCode[StatusCode["SCKeyNoEldest"] = 920] = "SCKeyNoEldest";
    StatusCode[StatusCode["SCKeyDuplicateUpdate"] = 921] = "SCKeyDuplicateUpdate";
    StatusCode[StatusCode["SCSibkeyAlreadyExists"] = 922] = "SCSibkeyAlreadyExists";
    StatusCode[StatusCode["SCDecryptionKeyNotFound"] = 924] = "SCDecryptionKeyNotFound";
    StatusCode[StatusCode["SCKeyNoPGPEncryption"] = 927] = "SCKeyNoPGPEncryption";
    StatusCode[StatusCode["SCKeyNoNaClEncryption"] = 928] = "SCKeyNoNaClEncryption";
    StatusCode[StatusCode["SCKeySyncedPGPNotFound"] = 929] = "SCKeySyncedPGPNotFound";
    StatusCode[StatusCode["SCKeyNoMatchingGPG"] = 930] = "SCKeyNoMatchingGPG";
    StatusCode[StatusCode["SCKeyRevoked"] = 931] = "SCKeyRevoked";
    StatusCode[StatusCode["SCSigCannotVerify"] = 1002] = "SCSigCannotVerify";
    StatusCode[StatusCode["SCSigWrongKey"] = 1008] = "SCSigWrongKey";
    StatusCode[StatusCode["SCSigOldSeqno"] = 1010] = "SCSigOldSeqno";
    StatusCode[StatusCode["SCSigCreationDisallowed"] = 1016] = "SCSigCreationDisallowed";
    StatusCode[StatusCode["SCSigMissingRatchet"] = 1021] = "SCSigMissingRatchet";
    StatusCode[StatusCode["SCSigBadTotalOrder"] = 1022] = "SCSigBadTotalOrder";
    StatusCode[StatusCode["SCBadTrackSession"] = 1301] = "SCBadTrackSession";
    StatusCode[StatusCode["SCDeviceBadName"] = 1404] = "SCDeviceBadName";
    StatusCode[StatusCode["SCDeviceNameInUse"] = 1408] = "SCDeviceNameInUse";
    StatusCode[StatusCode["SCDeviceNotFound"] = 1409] = "SCDeviceNotFound";
    StatusCode[StatusCode["SCDeviceMismatch"] = 1410] = "SCDeviceMismatch";
    StatusCode[StatusCode["SCDeviceRequired"] = 1411] = "SCDeviceRequired";
    StatusCode[StatusCode["SCDevicePrevProvisioned"] = 1413] = "SCDevicePrevProvisioned";
    StatusCode[StatusCode["SCDeviceNoProvision"] = 1414] = "SCDeviceNoProvision";
    StatusCode[StatusCode["SCDeviceProvisionViaDevice"] = 1415] = "SCDeviceProvisionViaDevice";
    StatusCode[StatusCode["SCRevokeCurrentDevice"] = 1416] = "SCRevokeCurrentDevice";
    StatusCode[StatusCode["SCRevokeLastDevice"] = 1417] = "SCRevokeLastDevice";
    StatusCode[StatusCode["SCDeviceProvisionOffline"] = 1418] = "SCDeviceProvisionOffline";
    StatusCode[StatusCode["SCRevokeLastDevicePGP"] = 1419] = "SCRevokeLastDevicePGP";
    StatusCode[StatusCode["SCStreamExists"] = 1501] = "SCStreamExists";
    StatusCode[StatusCode["SCStreamNotFound"] = 1502] = "SCStreamNotFound";
    StatusCode[StatusCode["SCStreamWrongKind"] = 1503] = "SCStreamWrongKind";
    StatusCode[StatusCode["SCStreamEOF"] = 1504] = "SCStreamEOF";
    StatusCode[StatusCode["SCGenericAPIError"] = 1600] = "SCGenericAPIError";
    StatusCode[StatusCode["SCAPINetworkError"] = 1601] = "SCAPINetworkError";
    StatusCode[StatusCode["SCTimeout"] = 1602] = "SCTimeout";
    StatusCode[StatusCode["SCProofError"] = 1701] = "SCProofError";
    StatusCode[StatusCode["SCIdentificationExpired"] = 1702] = "SCIdentificationExpired";
    StatusCode[StatusCode["SCSelfNotFound"] = 1703] = "SCSelfNotFound";
    StatusCode[StatusCode["SCBadKexPhrase"] = 1704] = "SCBadKexPhrase";
    StatusCode[StatusCode["SCNoUIDelegation"] = 1705] = "SCNoUIDelegation";
    StatusCode[StatusCode["SCNoUI"] = 1706] = "SCNoUI";
    StatusCode[StatusCode["SCGPGUnavailable"] = 1707] = "SCGPGUnavailable";
    StatusCode[StatusCode["SCInvalidVersionError"] = 1800] = "SCInvalidVersionError";
    StatusCode[StatusCode["SCOldVersionError"] = 1801] = "SCOldVersionError";
    StatusCode[StatusCode["SCInvalidLocationError"] = 1802] = "SCInvalidLocationError";
    StatusCode[StatusCode["SCServiceStatusError"] = 1803] = "SCServiceStatusError";
    StatusCode[StatusCode["SCInstallError"] = 1804] = "SCInstallError";
    StatusCode[StatusCode["SCLoadKextError"] = 1810] = "SCLoadKextError";
    StatusCode[StatusCode["SCLoadKextPermError"] = 1811] = "SCLoadKextPermError";
    StatusCode[StatusCode["SCGitInternal"] = 2300] = "SCGitInternal";
    StatusCode[StatusCode["SCGitRepoAlreadyExists"] = 2301] = "SCGitRepoAlreadyExists";
    StatusCode[StatusCode["SCGitInvalidRepoName"] = 2302] = "SCGitInvalidRepoName";
    StatusCode[StatusCode["SCGitCannotDelete"] = 2303] = "SCGitCannotDelete";
    StatusCode[StatusCode["SCGitRepoDoesntExist"] = 2304] = "SCGitRepoDoesntExist";
    StatusCode[StatusCode["SCLoginStateTimeout"] = 2400] = "SCLoginStateTimeout";
    StatusCode[StatusCode["SCChatInternal"] = 2500] = "SCChatInternal";
    StatusCode[StatusCode["SCChatRateLimit"] = 2501] = "SCChatRateLimit";
    StatusCode[StatusCode["SCChatConvExists"] = 2502] = "SCChatConvExists";
    StatusCode[StatusCode["SCChatUnknownTLFID"] = 2503] = "SCChatUnknownTLFID";
    StatusCode[StatusCode["SCChatNotInConv"] = 2504] = "SCChatNotInConv";
    StatusCode[StatusCode["SCChatBadMsg"] = 2505] = "SCChatBadMsg";
    StatusCode[StatusCode["SCChatBroadcast"] = 2506] = "SCChatBroadcast";
    StatusCode[StatusCode["SCChatAlreadySuperseded"] = 2507] = "SCChatAlreadySuperseded";
    StatusCode[StatusCode["SCChatAlreadyDeleted"] = 2508] = "SCChatAlreadyDeleted";
    StatusCode[StatusCode["SCChatTLFFinalized"] = 2509] = "SCChatTLFFinalized";
    StatusCode[StatusCode["SCChatCollision"] = 2510] = "SCChatCollision";
    StatusCode[StatusCode["SCIdentifySummaryError"] = 2511] = "SCIdentifySummaryError";
    StatusCode[StatusCode["SCNeedSelfRekey"] = 2512] = "SCNeedSelfRekey";
    StatusCode[StatusCode["SCNeedOtherRekey"] = 2513] = "SCNeedOtherRekey";
    StatusCode[StatusCode["SCChatMessageCollision"] = 2514] = "SCChatMessageCollision";
    StatusCode[StatusCode["SCChatDuplicateMessage"] = 2515] = "SCChatDuplicateMessage";
    StatusCode[StatusCode["SCChatClientError"] = 2516] = "SCChatClientError";
    StatusCode[StatusCode["SCChatNotInTeam"] = 2517] = "SCChatNotInTeam";
    StatusCode[StatusCode["SCChatStalePreviousState"] = 2518] = "SCChatStalePreviousState";
    StatusCode[StatusCode["SCChatEphemeralRetentionPolicyViolatedError"] = 2519] = "SCChatEphemeralRetentionPolicyViolatedError";
    StatusCode[StatusCode["SCTeamBadMembership"] = 2604] = "SCTeamBadMembership";
    StatusCode[StatusCode["SCTeamSelfNotOwner"] = 2607] = "SCTeamSelfNotOwner";
    StatusCode[StatusCode["SCTeamNotFound"] = 2614] = "SCTeamNotFound";
    StatusCode[StatusCode["SCTeamExists"] = 2619] = "SCTeamExists";
    StatusCode[StatusCode["SCTeamReadError"] = 2623] = "SCTeamReadError";
    StatusCode[StatusCode["SCTeamWritePermDenied"] = 2625] = "SCTeamWritePermDenied";
    StatusCode[StatusCode["SCTeamBadGeneration"] = 2636] = "SCTeamBadGeneration";
    StatusCode[StatusCode["SCNoOp"] = 2638] = "SCNoOp";
    StatusCode[StatusCode["SCTeamInviteBadToken"] = 2646] = "SCTeamInviteBadToken";
    StatusCode[StatusCode["SCTeamTarDuplicate"] = 2663] = "SCTeamTarDuplicate";
    StatusCode[StatusCode["SCTeamTarNotFound"] = 2664] = "SCTeamTarNotFound";
    StatusCode[StatusCode["SCTeamMemberExists"] = 2665] = "SCTeamMemberExists";
    StatusCode[StatusCode["SCTeamNotReleased"] = 2666] = "SCTeamNotReleased";
    StatusCode[StatusCode["SCTeamPermanentlyLeft"] = 2667] = "SCTeamPermanentlyLeft";
    StatusCode[StatusCode["SCTeamNeedRootId"] = 2668] = "SCTeamNeedRootId";
    StatusCode[StatusCode["SCTeamHasLiveChildren"] = 2669] = "SCTeamHasLiveChildren";
    StatusCode[StatusCode["SCTeamDeleteError"] = 2670] = "SCTeamDeleteError";
    StatusCode[StatusCode["SCTeamBadRootTeam"] = 2671] = "SCTeamBadRootTeam";
    StatusCode[StatusCode["SCTeamNameConflictsWithUser"] = 2672] = "SCTeamNameConflictsWithUser";
    StatusCode[StatusCode["SCTeamDeleteNoUpPointer"] = 2673] = "SCTeamDeleteNoUpPointer";
    StatusCode[StatusCode["SCTeamNeedOwner"] = 2674] = "SCTeamNeedOwner";
    StatusCode[StatusCode["SCTeamNoOwnerAllowed"] = 2675] = "SCTeamNoOwnerAllowed";
    StatusCode[StatusCode["SCTeamImplicitNoNonSbs"] = 2676] = "SCTeamImplicitNoNonSbs";
    StatusCode[StatusCode["SCTeamImplicitBadHash"] = 2677] = "SCTeamImplicitBadHash";
    StatusCode[StatusCode["SCTeamImplicitBadName"] = 2678] = "SCTeamImplicitBadName";
    StatusCode[StatusCode["SCTeamImplicitClash"] = 2679] = "SCTeamImplicitClash";
    StatusCode[StatusCode["SCTeamImplicitDuplicate"] = 2680] = "SCTeamImplicitDuplicate";
    StatusCode[StatusCode["SCTeamImplicitBadOp"] = 2681] = "SCTeamImplicitBadOp";
    StatusCode[StatusCode["SCTeamImplicitBadRole"] = 2682] = "SCTeamImplicitBadRole";
    StatusCode[StatusCode["SCTeamImplicitNotFound"] = 2683] = "SCTeamImplicitNotFound";
    StatusCode[StatusCode["SCTeamBadAdminSeqnoType"] = 2684] = "SCTeamBadAdminSeqnoType";
    StatusCode[StatusCode["SCTeamImplicitBadAdd"] = 2685] = "SCTeamImplicitBadAdd";
    StatusCode[StatusCode["SCTeamImplicitBadRemove"] = 2686] = "SCTeamImplicitBadRemove";
    StatusCode[StatusCode["SCTeamInviteTokenReused"] = 2696] = "SCTeamInviteTokenReused";
    StatusCode[StatusCode["SCTeamKeyMaskNotFound"] = 2697] = "SCTeamKeyMaskNotFound";
    StatusCode[StatusCode["SCTeamBanned"] = 2702] = "SCTeamBanned";
    StatusCode[StatusCode["SCTeamInvalidBan"] = 2703] = "SCTeamInvalidBan";
    StatusCode[StatusCode["SCTeamShowcasePermDenied"] = 2711] = "SCTeamShowcasePermDenied";
    StatusCode[StatusCode["SCTeamProvisionalCanKey"] = 2721] = "SCTeamProvisionalCanKey";
    StatusCode[StatusCode["SCTeamProvisionalCannotKey"] = 2722] = "SCTeamProvisionalCannotKey";
    StatusCode[StatusCode["SCTeamFTLOutdated"] = 2736] = "SCTeamFTLOutdated";
    StatusCode[StatusCode["SCEphemeralKeyBadGeneration"] = 2900] = "SCEphemeralKeyBadGeneration";
    StatusCode[StatusCode["SCEphemeralKeyUnexpectedBox"] = 2901] = "SCEphemeralKeyUnexpectedBox";
    StatusCode[StatusCode["SCEphemeralKeyMissingBox"] = 2902] = "SCEphemeralKeyMissingBox";
    StatusCode[StatusCode["SCEphemeralKeyWrongNumberOfKeys"] = 2903] = "SCEphemeralKeyWrongNumberOfKeys";
    StatusCode[StatusCode["SCEphemeralKeyMismatchedKey"] = 2904] = "SCEphemeralKeyMismatchedKey";
    StatusCode[StatusCode["SCEphemeralPairwiseMACsMissingUIDs"] = 2905] = "SCEphemeralPairwiseMACsMissingUIDs";
    StatusCode[StatusCode["SCEphemeralDeviceAfterEK"] = 2906] = "SCEphemeralDeviceAfterEK";
    StatusCode[StatusCode["SCEphemeralMemberAfterEK"] = 2907] = "SCEphemeralMemberAfterEK";
    StatusCode[StatusCode["SCEphemeralDeviceStale"] = 2908] = "SCEphemeralDeviceStale";
    StatusCode[StatusCode["SCEphemeralUserStale"] = 2909] = "SCEphemeralUserStale";
    StatusCode[StatusCode["SCStellarError"] = 3100] = "SCStellarError";
    StatusCode[StatusCode["SCStellarBadInput"] = 3101] = "SCStellarBadInput";
    StatusCode[StatusCode["SCStellarWrongRevision"] = 3102] = "SCStellarWrongRevision";
    StatusCode[StatusCode["SCStellarMissingBundle"] = 3103] = "SCStellarMissingBundle";
    StatusCode[StatusCode["SCStellarBadPuk"] = 3104] = "SCStellarBadPuk";
    StatusCode[StatusCode["SCStellarMissingAccount"] = 3105] = "SCStellarMissingAccount";
    StatusCode[StatusCode["SCStellarBadPrev"] = 3106] = "SCStellarBadPrev";
    StatusCode[StatusCode["SCStellarWrongPrimary"] = 3107] = "SCStellarWrongPrimary";
    StatusCode[StatusCode["SCStellarUnsupportedCurrency"] = 3108] = "SCStellarUnsupportedCurrency";
    StatusCode[StatusCode["SCStellarNeedDisclaimer"] = 3109] = "SCStellarNeedDisclaimer";
    StatusCode[StatusCode["SCStellarDeviceNotMobile"] = 3110] = "SCStellarDeviceNotMobile";
    StatusCode[StatusCode["SCStellarMobileOnlyPurgatory"] = 3111] = "SCStellarMobileOnlyPurgatory";
    StatusCode[StatusCode["SCStellarIncompatibleVersion"] = 3112] = "SCStellarIncompatibleVersion";
    StatusCode[StatusCode["SCNISTWrongSize"] = 3201] = "SCNISTWrongSize";
    StatusCode[StatusCode["SCNISTBadMode"] = 3202] = "SCNISTBadMode";
    StatusCode[StatusCode["SCNISTHashWrongSize"] = 3203] = "SCNISTHashWrongSize";
    StatusCode[StatusCode["SCNISTSigWrongSize"] = 3204] = "SCNISTSigWrongSize";
    StatusCode[StatusCode["SCNISTSigBadInput"] = 3205] = "SCNISTSigBadInput";
    StatusCode[StatusCode["SCNISTSigBadUID"] = 3206] = "SCNISTSigBadUID";
    StatusCode[StatusCode["SCNISTSigBadDeviceID"] = 3207] = "SCNISTSigBadDeviceID";
    StatusCode[StatusCode["SCNISTSigBadNonce"] = 3208] = "SCNISTSigBadNonce";
    StatusCode[StatusCode["SCNISTNoSigOrHash"] = 3209] = "SCNISTNoSigOrHash";
    StatusCode[StatusCode["SCNISTExpired"] = 3210] = "SCNISTExpired";
    StatusCode[StatusCode["SCNISTSigRevoked"] = 3211] = "SCNISTSigRevoked";
    StatusCode[StatusCode["SCNISTKeyRevoked"] = 3212] = "SCNISTKeyRevoked";
    StatusCode[StatusCode["SCNISTUserDeleted"] = 3213] = "SCNISTUserDeleted";
    StatusCode[StatusCode["SCNISTNoDevice"] = 3214] = "SCNISTNoDevice";
    StatusCode[StatusCode["SCNISTSigCannot_verify"] = 3215] = "SCNISTSigCannot_verify";
    StatusCode[StatusCode["SCNISTReplay"] = 3216] = "SCNISTReplay";
    StatusCode[StatusCode["SCNISTSigBadLifetime"] = 3217] = "SCNISTSigBadLifetime";
    StatusCode[StatusCode["SCNISTNotFound"] = 3218] = "SCNISTNotFound";
    StatusCode[StatusCode["SCNISTBadClock"] = 3219] = "SCNISTBadClock";
    StatusCode[StatusCode["SCNISTSigBadCtime"] = 3220] = "SCNISTSigBadCtime";
    StatusCode[StatusCode["SCBadSignupUsernameDeleted"] = 3221] = "SCBadSignupUsernameDeleted";
    StatusCode[StatusCode["SCPhoneNumberUnknown"] = 3400] = "SCPhoneNumberUnknown";
    StatusCode[StatusCode["SCPhoneNumberAlreadyVerified"] = 3401] = "SCPhoneNumberAlreadyVerified";
    StatusCode[StatusCode["SCPhoneNumberVerificationCodeExpired"] = 3402] = "SCPhoneNumberVerificationCodeExpired";
    StatusCode[StatusCode["SCPhoneNumberWrongVerificationCode"] = 3403] = "SCPhoneNumberWrongVerificationCode";
    StatusCode[StatusCode["SCPhoneNumberLimitExceeded"] = 3404] = "SCPhoneNumberLimitExceeded";
    StatusCode[StatusCode["SCNoPaperKeys"] = 3605] = "SCNoPaperKeys";
    StatusCode[StatusCode["SCTeambotKeyGenerationExists"] = 3800] = "SCTeambotKeyGenerationExists";
    StatusCode[StatusCode["SCTeambotKeyOldBoxedGeneration"] = 3801] = "SCTeambotKeyOldBoxedGeneration";
    StatusCode[StatusCode["SCTeambotKeyBadGeneration"] = 3802] = "SCTeambotKeyBadGeneration";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
var ExitCode;
(function (ExitCode) {
    ExitCode[ExitCode["OK"] = 0] = "OK";
    ExitCode[ExitCode["NOTOK"] = 2] = "NOTOK";
    ExitCode[ExitCode["RESTART"] = 4] = "RESTART";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
var DbType;
(function (DbType) {
    DbType[DbType["MAIN"] = 0] = "MAIN";
    DbType[DbType["CHAT"] = 1] = "CHAT";
    DbType[DbType["FS_BLOCK_CACHE"] = 2] = "FS_BLOCK_CACHE";
    DbType[DbType["FS_BLOCK_CACHE_META"] = 3] = "FS_BLOCK_CACHE_META";
    DbType[DbType["FS_SYNC_BLOCK_CACHE"] = 4] = "FS_SYNC_BLOCK_CACHE";
    DbType[DbType["FS_SYNC_BLOCK_CACHE_META"] = 5] = "FS_SYNC_BLOCK_CACHE_META";
})(DbType = exports.DbType || (exports.DbType = {}));
var TeamEphemeralKeyType;
(function (TeamEphemeralKeyType) {
    TeamEphemeralKeyType[TeamEphemeralKeyType["TEAM"] = 0] = "TEAM";
    TeamEphemeralKeyType[TeamEphemeralKeyType["TEAMBOT"] = 1] = "TEAMBOT";
})(TeamEphemeralKeyType = exports.TeamEphemeralKeyType || (exports.TeamEphemeralKeyType = {}));
var FolderType;
(function (FolderType) {
    FolderType[FolderType["UNKNOWN"] = 0] = "UNKNOWN";
    FolderType[FolderType["PRIVATE"] = 1] = "PRIVATE";
    FolderType[FolderType["PUBLIC"] = 2] = "PUBLIC";
    FolderType[FolderType["TEAM"] = 3] = "TEAM";
})(FolderType = exports.FolderType || (exports.FolderType = {}));
var FolderConflictType;
(function (FolderConflictType) {
    FolderConflictType[FolderConflictType["NONE"] = 0] = "NONE";
    FolderConflictType[FolderConflictType["IN_CONFLICT"] = 1] = "IN_CONFLICT";
    FolderConflictType[FolderConflictType["IN_CONFLICT_AND_STUCK"] = 2] = "IN_CONFLICT_AND_STUCK";
    FolderConflictType[FolderConflictType["CLEARED_CONFLICT"] = 3] = "CLEARED_CONFLICT";
})(FolderConflictType = exports.FolderConflictType || (exports.FolderConflictType = {}));
var ConflictStateType;
(function (ConflictStateType) {
    ConflictStateType[ConflictStateType["NormalView"] = 1] = "NormalView";
    ConflictStateType[ConflictStateType["ManualResolvingLocalView"] = 2] = "ManualResolvingLocalView";
})(ConflictStateType = exports.ConflictStateType || (exports.ConflictStateType = {}));
var GitLocalMetadataVersion;
(function (GitLocalMetadataVersion) {
    GitLocalMetadataVersion[GitLocalMetadataVersion["V1"] = 1] = "V1";
})(GitLocalMetadataVersion = exports.GitLocalMetadataVersion || (exports.GitLocalMetadataVersion = {}));
var GitPushType;
(function (GitPushType) {
    GitPushType[GitPushType["DEFAULT"] = 0] = "DEFAULT";
    GitPushType[GitPushType["CREATEREPO"] = 1] = "CREATEREPO";
    GitPushType[GitPushType["RENAMEREPO"] = 3] = "RENAMEREPO";
})(GitPushType = exports.GitPushType || (exports.GitPushType = {}));
var GitRepoResultState;
(function (GitRepoResultState) {
    GitRepoResultState[GitRepoResultState["ERR"] = 0] = "ERR";
    GitRepoResultState[GitRepoResultState["OK"] = 1] = "OK";
})(GitRepoResultState = exports.GitRepoResultState || (exports.GitRepoResultState = {}));
var PushReason;
(function (PushReason) {
    PushReason[PushReason["NONE"] = 0] = "NONE";
    PushReason[PushReason["RECONNECTED"] = 1] = "RECONNECTED";
    PushReason[PushReason["NEW_DATA"] = 2] = "NEW_DATA";
})(PushReason = exports.PushReason || (exports.PushReason = {}));
var HomeScreenItemType;
(function (HomeScreenItemType) {
    HomeScreenItemType[HomeScreenItemType["TODO"] = 1] = "TODO";
    HomeScreenItemType[HomeScreenItemType["PEOPLE"] = 2] = "PEOPLE";
    HomeScreenItemType[HomeScreenItemType["ANNOUNCEMENT"] = 3] = "ANNOUNCEMENT";
})(HomeScreenItemType = exports.HomeScreenItemType || (exports.HomeScreenItemType = {}));
var AppLinkType;
(function (AppLinkType) {
    AppLinkType[AppLinkType["NONE"] = 0] = "NONE";
    AppLinkType[AppLinkType["PEOPLE"] = 1] = "PEOPLE";
    AppLinkType[AppLinkType["CHAT"] = 2] = "CHAT";
    AppLinkType[AppLinkType["FILES"] = 3] = "FILES";
    AppLinkType[AppLinkType["WALLET"] = 4] = "WALLET";
    AppLinkType[AppLinkType["GIT"] = 5] = "GIT";
    AppLinkType[AppLinkType["DEVICES"] = 6] = "DEVICES";
    AppLinkType[AppLinkType["SETTINGS"] = 7] = "SETTINGS";
    AppLinkType[AppLinkType["TEAMS"] = 8] = "TEAMS";
})(AppLinkType = exports.AppLinkType || (exports.AppLinkType = {}));
var HomeScreenTodoType;
(function (HomeScreenTodoType) {
    HomeScreenTodoType[HomeScreenTodoType["NONE"] = 0] = "NONE";
    HomeScreenTodoType[HomeScreenTodoType["BIO"] = 1] = "BIO";
    HomeScreenTodoType[HomeScreenTodoType["PROOF"] = 2] = "PROOF";
    HomeScreenTodoType[HomeScreenTodoType["DEVICE"] = 3] = "DEVICE";
    HomeScreenTodoType[HomeScreenTodoType["FOLLOW"] = 4] = "FOLLOW";
    HomeScreenTodoType[HomeScreenTodoType["CHAT"] = 5] = "CHAT";
    HomeScreenTodoType[HomeScreenTodoType["PAPERKEY"] = 6] = "PAPERKEY";
    HomeScreenTodoType[HomeScreenTodoType["TEAM"] = 7] = "TEAM";
    HomeScreenTodoType[HomeScreenTodoType["FOLDER"] = 8] = "FOLDER";
    HomeScreenTodoType[HomeScreenTodoType["GIT_REPO"] = 9] = "GIT_REPO";
    HomeScreenTodoType[HomeScreenTodoType["TEAM_SHOWCASE"] = 10] = "TEAM_SHOWCASE";
    HomeScreenTodoType[HomeScreenTodoType["AVATAR_USER"] = 11] = "AVATAR_USER";
    HomeScreenTodoType[HomeScreenTodoType["AVATAR_TEAM"] = 12] = "AVATAR_TEAM";
    HomeScreenTodoType[HomeScreenTodoType["ADD_PHONE_NUMBER"] = 18] = "ADD_PHONE_NUMBER";
    HomeScreenTodoType[HomeScreenTodoType["VERIFY_ALL_PHONE_NUMBER"] = 19] = "VERIFY_ALL_PHONE_NUMBER";
    HomeScreenTodoType[HomeScreenTodoType["VERIFY_ALL_EMAIL"] = 20] = "VERIFY_ALL_EMAIL";
    HomeScreenTodoType[HomeScreenTodoType["LEGACY_EMAIL_VISIBILITY"] = 21] = "LEGACY_EMAIL_VISIBILITY";
    HomeScreenTodoType[HomeScreenTodoType["ADD_EMAIL"] = 22] = "ADD_EMAIL";
    HomeScreenTodoType[HomeScreenTodoType["ANNONCEMENT_PLACEHOLDER"] = 10000] = "ANNONCEMENT_PLACEHOLDER";
})(HomeScreenTodoType = exports.HomeScreenTodoType || (exports.HomeScreenTodoType = {}));
var HomeScreenPeopleNotificationType;
(function (HomeScreenPeopleNotificationType) {
    HomeScreenPeopleNotificationType[HomeScreenPeopleNotificationType["FOLLOWED"] = 1] = "FOLLOWED";
    HomeScreenPeopleNotificationType[HomeScreenPeopleNotificationType["FOLLOWED_MULTI"] = 2] = "FOLLOWED_MULTI";
})(HomeScreenPeopleNotificationType = exports.HomeScreenPeopleNotificationType || (exports.HomeScreenPeopleNotificationType = {}));
var Identify3RowState;
(function (Identify3RowState) {
    Identify3RowState[Identify3RowState["CHECKING"] = 1] = "CHECKING";
    Identify3RowState[Identify3RowState["VALID"] = 2] = "VALID";
    Identify3RowState[Identify3RowState["ERROR"] = 3] = "ERROR";
    Identify3RowState[Identify3RowState["WARNING"] = 4] = "WARNING";
    Identify3RowState[Identify3RowState["REVOKED"] = 5] = "REVOKED";
})(Identify3RowState = exports.Identify3RowState || (exports.Identify3RowState = {}));
var Identify3RowColor;
(function (Identify3RowColor) {
    Identify3RowColor[Identify3RowColor["BLUE"] = 1] = "BLUE";
    Identify3RowColor[Identify3RowColor["RED"] = 2] = "RED";
    Identify3RowColor[Identify3RowColor["BLACK"] = 3] = "BLACK";
    Identify3RowColor[Identify3RowColor["GREEN"] = 4] = "GREEN";
    Identify3RowColor[Identify3RowColor["GRAY"] = 5] = "GRAY";
    Identify3RowColor[Identify3RowColor["YELLOW"] = 6] = "YELLOW";
    Identify3RowColor[Identify3RowColor["ORANGE"] = 7] = "ORANGE";
})(Identify3RowColor = exports.Identify3RowColor || (exports.Identify3RowColor = {}));
var Identify3ResultType;
(function (Identify3ResultType) {
    Identify3ResultType[Identify3ResultType["OK"] = 0] = "OK";
    Identify3ResultType[Identify3ResultType["BROKEN"] = 1] = "BROKEN";
    Identify3ResultType[Identify3ResultType["NEEDS_UPGRADE"] = 2] = "NEEDS_UPGRADE";
    Identify3ResultType[Identify3ResultType["CANCELED"] = 3] = "CANCELED";
})(Identify3ResultType = exports.Identify3ResultType || (exports.Identify3ResultType = {}));
var TrackDiffType;
(function (TrackDiffType) {
    TrackDiffType[TrackDiffType["NONE"] = 0] = "NONE";
    TrackDiffType[TrackDiffType["ERROR"] = 1] = "ERROR";
    TrackDiffType[TrackDiffType["CLASH"] = 2] = "CLASH";
    TrackDiffType[TrackDiffType["REVOKED"] = 3] = "REVOKED";
    TrackDiffType[TrackDiffType["UPGRADED"] = 4] = "UPGRADED";
    TrackDiffType[TrackDiffType["NEW"] = 5] = "NEW";
    TrackDiffType[TrackDiffType["REMOTE_FAIL"] = 6] = "REMOTE_FAIL";
    TrackDiffType[TrackDiffType["REMOTE_WORKING"] = 7] = "REMOTE_WORKING";
    TrackDiffType[TrackDiffType["REMOTE_CHANGED"] = 8] = "REMOTE_CHANGED";
    TrackDiffType[TrackDiffType["NEW_ELDEST"] = 9] = "NEW_ELDEST";
    TrackDiffType[TrackDiffType["NONE_VIA_TEMPORARY"] = 10] = "NONE_VIA_TEMPORARY";
})(TrackDiffType = exports.TrackDiffType || (exports.TrackDiffType = {}));
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
var TrackStatus;
(function (TrackStatus) {
    TrackStatus[TrackStatus["NEW_OK"] = 1] = "NEW_OK";
    TrackStatus[TrackStatus["NEW_ZERO_PROOFS"] = 2] = "NEW_ZERO_PROOFS";
    TrackStatus[TrackStatus["NEW_FAIL_PROOFS"] = 3] = "NEW_FAIL_PROOFS";
    TrackStatus[TrackStatus["UPDATE_BROKEN_FAILED_PROOFS"] = 4] = "UPDATE_BROKEN_FAILED_PROOFS";
    TrackStatus[TrackStatus["UPDATE_NEW_PROOFS"] = 5] = "UPDATE_NEW_PROOFS";
    TrackStatus[TrackStatus["UPDATE_OK"] = 6] = "UPDATE_OK";
    TrackStatus[TrackStatus["UPDATE_BROKEN_REVOKED"] = 7] = "UPDATE_BROKEN_REVOKED";
})(TrackStatus = exports.TrackStatus || (exports.TrackStatus = {}));
var IdentifyReasonType;
(function (IdentifyReasonType) {
    IdentifyReasonType[IdentifyReasonType["NONE"] = 0] = "NONE";
    IdentifyReasonType[IdentifyReasonType["ID"] = 1] = "ID";
    IdentifyReasonType[IdentifyReasonType["TRACK"] = 2] = "TRACK";
    IdentifyReasonType[IdentifyReasonType["ENCRYPT"] = 3] = "ENCRYPT";
    IdentifyReasonType[IdentifyReasonType["DECRYPT"] = 4] = "DECRYPT";
    IdentifyReasonType[IdentifyReasonType["VERIFY"] = 5] = "VERIFY";
    IdentifyReasonType[IdentifyReasonType["RESOURCE"] = 6] = "RESOURCE";
    IdentifyReasonType[IdentifyReasonType["BACKGROUND"] = 7] = "BACKGROUND";
})(IdentifyReasonType = exports.IdentifyReasonType || (exports.IdentifyReasonType = {}));
var CheckResultFreshness;
(function (CheckResultFreshness) {
    CheckResultFreshness[CheckResultFreshness["FRESH"] = 0] = "FRESH";
    CheckResultFreshness[CheckResultFreshness["AGED"] = 1] = "AGED";
    CheckResultFreshness[CheckResultFreshness["RANCID"] = 2] = "RANCID";
})(CheckResultFreshness = exports.CheckResultFreshness || (exports.CheckResultFreshness = {}));
var DismissReasonType;
(function (DismissReasonType) {
    DismissReasonType[DismissReasonType["NONE"] = 0] = "NONE";
    DismissReasonType[DismissReasonType["HANDLED_ELSEWHERE"] = 1] = "HANDLED_ELSEWHERE";
})(DismissReasonType = exports.DismissReasonType || (exports.DismissReasonType = {}));
/**
 * Install status describes state of install for a component or service.
 */
var InstallStatus;
(function (InstallStatus) {
    InstallStatus[InstallStatus["UNKNOWN"] = 0] = "UNKNOWN";
    InstallStatus[InstallStatus["ERROR"] = 1] = "ERROR";
    InstallStatus[InstallStatus["NOT_INSTALLED"] = 2] = "NOT_INSTALLED";
    InstallStatus[InstallStatus["INSTALLED"] = 4] = "INSTALLED";
})(InstallStatus = exports.InstallStatus || (exports.InstallStatus = {}));
var InstallAction;
(function (InstallAction) {
    InstallAction[InstallAction["UNKNOWN"] = 0] = "UNKNOWN";
    InstallAction[InstallAction["NONE"] = 1] = "NONE";
    InstallAction[InstallAction["UPGRADE"] = 2] = "UPGRADE";
    InstallAction[InstallAction["REINSTALL"] = 3] = "REINSTALL";
    InstallAction[InstallAction["INSTALL"] = 4] = "INSTALL";
})(InstallAction = exports.InstallAction || (exports.InstallAction = {}));
var FSStatusCode;
(function (FSStatusCode) {
    FSStatusCode[FSStatusCode["START"] = 0] = "START";
    FSStatusCode[FSStatusCode["FINISH"] = 1] = "FINISH";
    FSStatusCode[FSStatusCode["ERROR"] = 2] = "ERROR";
})(FSStatusCode = exports.FSStatusCode || (exports.FSStatusCode = {}));
var FSNotificationType;
(function (FSNotificationType) {
    FSNotificationType[FSNotificationType["ENCRYPTING"] = 0] = "ENCRYPTING";
    FSNotificationType[FSNotificationType["DECRYPTING"] = 1] = "DECRYPTING";
    FSNotificationType[FSNotificationType["SIGNING"] = 2] = "SIGNING";
    FSNotificationType[FSNotificationType["VERIFYING"] = 3] = "VERIFYING";
    FSNotificationType[FSNotificationType["REKEYING"] = 4] = "REKEYING";
    FSNotificationType[FSNotificationType["CONNECTION"] = 5] = "CONNECTION";
    FSNotificationType[FSNotificationType["MD_READ_SUCCESS"] = 6] = "MD_READ_SUCCESS";
    FSNotificationType[FSNotificationType["FILE_CREATED"] = 7] = "FILE_CREATED";
    FSNotificationType[FSNotificationType["FILE_MODIFIED"] = 8] = "FILE_MODIFIED";
    FSNotificationType[FSNotificationType["FILE_DELETED"] = 9] = "FILE_DELETED";
    FSNotificationType[FSNotificationType["FILE_RENAMED"] = 10] = "FILE_RENAMED";
    FSNotificationType[FSNotificationType["INITIALIZED"] = 11] = "INITIALIZED";
    FSNotificationType[FSNotificationType["SYNC_CONFIG_CHANGED"] = 12] = "SYNC_CONFIG_CHANGED";
})(FSNotificationType = exports.FSNotificationType || (exports.FSNotificationType = {}));
var FSErrorType;
(function (FSErrorType) {
    FSErrorType[FSErrorType["ACCESS_DENIED"] = 0] = "ACCESS_DENIED";
    FSErrorType[FSErrorType["USER_NOT_FOUND"] = 1] = "USER_NOT_FOUND";
    FSErrorType[FSErrorType["REVOKED_DATA_DETECTED"] = 2] = "REVOKED_DATA_DETECTED";
    FSErrorType[FSErrorType["NOT_LOGGED_IN"] = 3] = "NOT_LOGGED_IN";
    FSErrorType[FSErrorType["TIMEOUT"] = 4] = "TIMEOUT";
    FSErrorType[FSErrorType["REKEY_NEEDED"] = 5] = "REKEY_NEEDED";
    FSErrorType[FSErrorType["BAD_FOLDER"] = 6] = "BAD_FOLDER";
    FSErrorType[FSErrorType["NOT_IMPLEMENTED"] = 7] = "NOT_IMPLEMENTED";
    FSErrorType[FSErrorType["OLD_VERSION"] = 8] = "OLD_VERSION";
    FSErrorType[FSErrorType["OVER_QUOTA"] = 9] = "OVER_QUOTA";
    FSErrorType[FSErrorType["NO_SIG_CHAIN"] = 10] = "NO_SIG_CHAIN";
    FSErrorType[FSErrorType["TOO_MANY_FOLDERS"] = 11] = "TOO_MANY_FOLDERS";
    FSErrorType[FSErrorType["EXDEV_NOT_SUPPORTED"] = 12] = "EXDEV_NOT_SUPPORTED";
    FSErrorType[FSErrorType["DISK_LIMIT_REACHED"] = 13] = "DISK_LIMIT_REACHED";
    FSErrorType[FSErrorType["DISK_CACHE_ERROR_LOG_SEND"] = 14] = "DISK_CACHE_ERROR_LOG_SEND";
    FSErrorType[FSErrorType["OFFLINE_ARCHIVED"] = 15] = "OFFLINE_ARCHIVED";
    FSErrorType[FSErrorType["OFFLINE_UNSYNCED"] = 16] = "OFFLINE_UNSYNCED";
})(FSErrorType = exports.FSErrorType || (exports.FSErrorType = {}));
var ResetPromptType;
(function (ResetPromptType) {
    ResetPromptType[ResetPromptType["COMPLETE"] = 0] = "COMPLETE";
    ResetPromptType[ResetPromptType["ENTER_NO_DEVICES"] = 1] = "ENTER_NO_DEVICES";
    ResetPromptType[ResetPromptType["ENTER_FORGOT_PW"] = 2] = "ENTER_FORGOT_PW";
})(ResetPromptType = exports.ResetPromptType || (exports.ResetPromptType = {}));
var PassphraseRecoveryPromptType;
(function (PassphraseRecoveryPromptType) {
    PassphraseRecoveryPromptType[PassphraseRecoveryPromptType["ENCRYPTED_PGP_KEYS"] = 0] = "ENCRYPTED_PGP_KEYS";
})(PassphraseRecoveryPromptType = exports.PassphraseRecoveryPromptType || (exports.PassphraseRecoveryPromptType = {}));
var StatsSeverityLevel;
(function (StatsSeverityLevel) {
    StatsSeverityLevel[StatsSeverityLevel["NORMAL"] = 0] = "NORMAL";
    StatsSeverityLevel[StatsSeverityLevel["WARNING"] = 1] = "WARNING";
    StatsSeverityLevel[StatsSeverityLevel["SEVERE"] = 2] = "SEVERE";
})(StatsSeverityLevel = exports.StatsSeverityLevel || (exports.StatsSeverityLevel = {}));
var ProcessType;
(function (ProcessType) {
    ProcessType[ProcessType["MAIN"] = 0] = "MAIN";
    ProcessType[ProcessType["KBFS"] = 1] = "KBFS";
})(ProcessType = exports.ProcessType || (exports.ProcessType = {}));
var AvatarUpdateType;
(function (AvatarUpdateType) {
    AvatarUpdateType[AvatarUpdateType["NONE"] = 0] = "NONE";
    AvatarUpdateType[AvatarUpdateType["USER"] = 1] = "USER";
    AvatarUpdateType[AvatarUpdateType["TEAM"] = 2] = "TEAM";
})(AvatarUpdateType = exports.AvatarUpdateType || (exports.AvatarUpdateType = {}));
var RuntimeGroup;
(function (RuntimeGroup) {
    RuntimeGroup[RuntimeGroup["UNKNOWN"] = 0] = "UNKNOWN";
    RuntimeGroup[RuntimeGroup["LINUXLIKE"] = 1] = "LINUXLIKE";
    RuntimeGroup[RuntimeGroup["DARWINLIKE"] = 2] = "DARWINLIKE";
    RuntimeGroup[RuntimeGroup["WINDOWSLIKE"] = 3] = "WINDOWSLIKE";
})(RuntimeGroup = exports.RuntimeGroup || (exports.RuntimeGroup = {}));
var PassphraseType;
(function (PassphraseType) {
    PassphraseType[PassphraseType["NONE"] = 0] = "NONE";
    PassphraseType[PassphraseType["PAPER_KEY"] = 1] = "PAPER_KEY";
    PassphraseType[PassphraseType["PASS_PHRASE"] = 2] = "PASS_PHRASE";
    PassphraseType[PassphraseType["VERIFY_PASS_PHRASE"] = 3] = "VERIFY_PASS_PHRASE";
})(PassphraseType = exports.PassphraseType || (exports.PassphraseType = {}));
var SignMode;
(function (SignMode) {
    SignMode[SignMode["ATTACHED"] = 0] = "ATTACHED";
    SignMode[SignMode["DETACHED"] = 1] = "DETACHED";
    SignMode[SignMode["CLEAR"] = 2] = "CLEAR";
})(SignMode = exports.SignMode || (exports.SignMode = {}));
var FileType;
(function (FileType) {
    FileType[FileType["UNKNOWN"] = 0] = "UNKNOWN";
    FileType[FileType["DIRECTORY"] = 1] = "DIRECTORY";
    FileType[FileType["FILE"] = 2] = "FILE";
})(FileType = exports.FileType || (exports.FileType = {}));
var ProofState;
(function (ProofState) {
    ProofState[ProofState["NONE"] = 0] = "NONE";
    ProofState[ProofState["OK"] = 1] = "OK";
    ProofState[ProofState["TEMP_FAILURE"] = 2] = "TEMP_FAILURE";
    ProofState[ProofState["PERM_FAILURE"] = 3] = "PERM_FAILURE";
    ProofState[ProofState["LOOKING"] = 4] = "LOOKING";
    ProofState[ProofState["SUPERSEDED"] = 5] = "SUPERSEDED";
    ProofState[ProofState["POSTED"] = 6] = "POSTED";
    ProofState[ProofState["REVOKED"] = 7] = "REVOKED";
    ProofState[ProofState["DELETED"] = 8] = "DELETED";
    ProofState[ProofState["UNKNOWN_TYPE"] = 9] = "UNKNOWN_TYPE";
    ProofState[ProofState["SIG_HINT_MISSING"] = 10] = "SIG_HINT_MISSING";
    ProofState[ProofState["UNCHECKED"] = 11] = "UNCHECKED";
})(ProofState = exports.ProofState || (exports.ProofState = {}));
/**
 * 3: It's been found in the hunt, but not proven yet
 *     1xx: Retryable soft errors; note that this will be put in the proof_cache, but won't
 *        be returned from the proof cache in most cases. Their freshness will always be
 *        RANCID.
 *     2xx: Will likely result in a hard error, if repeated enough
 *     3xx: Hard final errors
 */
var ProofStatus;
(function (ProofStatus) {
    ProofStatus[ProofStatus["NONE"] = 0] = "NONE";
    ProofStatus[ProofStatus["OK"] = 1] = "OK";
    ProofStatus[ProofStatus["LOCAL"] = 2] = "LOCAL";
    ProofStatus[ProofStatus["FOUND"] = 3] = "FOUND";
    ProofStatus[ProofStatus["BASE_ERROR"] = 100] = "BASE_ERROR";
    ProofStatus[ProofStatus["HOST_UNREACHABLE"] = 101] = "HOST_UNREACHABLE";
    ProofStatus[ProofStatus["PERMISSION_DENIED"] = 103] = "PERMISSION_DENIED";
    ProofStatus[ProofStatus["FAILED_PARSE"] = 106] = "FAILED_PARSE";
    ProofStatus[ProofStatus["DNS_ERROR"] = 107] = "DNS_ERROR";
    ProofStatus[ProofStatus["AUTH_FAILED"] = 108] = "AUTH_FAILED";
    ProofStatus[ProofStatus["HTTP_429"] = 129] = "HTTP_429";
    ProofStatus[ProofStatus["HTTP_500"] = 150] = "HTTP_500";
    ProofStatus[ProofStatus["TIMEOUT"] = 160] = "TIMEOUT";
    ProofStatus[ProofStatus["INTERNAL_ERROR"] = 170] = "INTERNAL_ERROR";
    ProofStatus[ProofStatus["UNCHECKED"] = 171] = "UNCHECKED";
    ProofStatus[ProofStatus["MISSING_PVL"] = 172] = "MISSING_PVL";
    ProofStatus[ProofStatus["BASE_HARD_ERROR"] = 200] = "BASE_HARD_ERROR";
    ProofStatus[ProofStatus["NOT_FOUND"] = 201] = "NOT_FOUND";
    ProofStatus[ProofStatus["CONTENT_FAILURE"] = 202] = "CONTENT_FAILURE";
    ProofStatus[ProofStatus["BAD_USERNAME"] = 203] = "BAD_USERNAME";
    ProofStatus[ProofStatus["BAD_REMOTE_ID"] = 204] = "BAD_REMOTE_ID";
    ProofStatus[ProofStatus["TEXT_NOT_FOUND"] = 205] = "TEXT_NOT_FOUND";
    ProofStatus[ProofStatus["BAD_ARGS"] = 206] = "BAD_ARGS";
    ProofStatus[ProofStatus["CONTENT_MISSING"] = 207] = "CONTENT_MISSING";
    ProofStatus[ProofStatus["TITLE_NOT_FOUND"] = 208] = "TITLE_NOT_FOUND";
    ProofStatus[ProofStatus["SERVICE_ERROR"] = 209] = "SERVICE_ERROR";
    ProofStatus[ProofStatus["TOR_SKIPPED"] = 210] = "TOR_SKIPPED";
    ProofStatus[ProofStatus["TOR_INCOMPATIBLE"] = 211] = "TOR_INCOMPATIBLE";
    ProofStatus[ProofStatus["HTTP_300"] = 230] = "HTTP_300";
    ProofStatus[ProofStatus["HTTP_400"] = 240] = "HTTP_400";
    ProofStatus[ProofStatus["HTTP_OTHER"] = 260] = "HTTP_OTHER";
    ProofStatus[ProofStatus["EMPTY_JSON"] = 270] = "EMPTY_JSON";
    ProofStatus[ProofStatus["DELETED"] = 301] = "DELETED";
    ProofStatus[ProofStatus["SERVICE_DEAD"] = 302] = "SERVICE_DEAD";
    ProofStatus[ProofStatus["BAD_SIGNATURE"] = 303] = "BAD_SIGNATURE";
    ProofStatus[ProofStatus["BAD_API_URL"] = 304] = "BAD_API_URL";
    ProofStatus[ProofStatus["UNKNOWN_TYPE"] = 305] = "UNKNOWN_TYPE";
    ProofStatus[ProofStatus["NO_HINT"] = 306] = "NO_HINT";
    ProofStatus[ProofStatus["BAD_HINT_TEXT"] = 307] = "BAD_HINT_TEXT";
    ProofStatus[ProofStatus["INVALID_PVL"] = 308] = "INVALID_PVL";
})(ProofStatus = exports.ProofStatus || (exports.ProofStatus = {}));
var ProofType;
(function (ProofType) {
    ProofType[ProofType["NONE"] = 0] = "NONE";
    ProofType[ProofType["KEYBASE"] = 1] = "KEYBASE";
    ProofType[ProofType["TWITTER"] = 2] = "TWITTER";
    ProofType[ProofType["GITHUB"] = 3] = "GITHUB";
    ProofType[ProofType["REDDIT"] = 4] = "REDDIT";
    ProofType[ProofType["COINBASE"] = 5] = "COINBASE";
    ProofType[ProofType["HACKERNEWS"] = 6] = "HACKERNEWS";
    ProofType[ProofType["FACEBOOK"] = 8] = "FACEBOOK";
    ProofType[ProofType["GENERIC_SOCIAL"] = 9] = "GENERIC_SOCIAL";
    ProofType[ProofType["GENERIC_WEB_SITE"] = 1000] = "GENERIC_WEB_SITE";
    ProofType[ProofType["DNS"] = 1001] = "DNS";
    ProofType[ProofType["PGP"] = 1002] = "PGP";
    ProofType[ProofType["ROOTER"] = 100001] = "ROOTER";
})(ProofType = exports.ProofType || (exports.ProofType = {}));
var PromptOverwriteType;
(function (PromptOverwriteType) {
    PromptOverwriteType[PromptOverwriteType["SOCIAL"] = 0] = "SOCIAL";
    PromptOverwriteType[PromptOverwriteType["SITE"] = 1] = "SITE";
})(PromptOverwriteType = exports.PromptOverwriteType || (exports.PromptOverwriteType = {}));
var ProvisionMethod;
(function (ProvisionMethod) {
    ProvisionMethod[ProvisionMethod["DEVICE"] = 0] = "DEVICE";
    ProvisionMethod[ProvisionMethod["PAPER_KEY"] = 1] = "PAPER_KEY";
    ProvisionMethod[ProvisionMethod["PASSPHRASE"] = 2] = "PASSPHRASE";
    ProvisionMethod[ProvisionMethod["GPG_IMPORT"] = 3] = "GPG_IMPORT";
    ProvisionMethod[ProvisionMethod["GPG_SIGN"] = 4] = "GPG_SIGN";
})(ProvisionMethod = exports.ProvisionMethod || (exports.ProvisionMethod = {}));
var GPGMethod;
(function (GPGMethod) {
    GPGMethod[GPGMethod["GPG_NONE"] = 0] = "GPG_NONE";
    GPGMethod[GPGMethod["GPG_IMPORT"] = 1] = "GPG_IMPORT";
    GPGMethod[GPGMethod["GPG_SIGN"] = 2] = "GPG_SIGN";
})(GPGMethod = exports.GPGMethod || (exports.GPGMethod = {}));
var ChooseType;
(function (ChooseType) {
    ChooseType[ChooseType["EXISTING_DEVICE"] = 0] = "EXISTING_DEVICE";
    ChooseType[ChooseType["NEW_DEVICE"] = 1] = "NEW_DEVICE";
})(ChooseType = exports.ChooseType || (exports.ChooseType = {}));
var Reachable;
(function (Reachable) {
    Reachable[Reachable["UNKNOWN"] = 0] = "UNKNOWN";
    Reachable[Reachable["YES"] = 1] = "YES";
    Reachable[Reachable["NO"] = 2] = "NO";
})(Reachable = exports.Reachable || (exports.Reachable = {}));
var Outcome;
(function (Outcome) {
    Outcome[Outcome["NONE"] = 0] = "NONE";
    Outcome[Outcome["FIXED"] = 1] = "FIXED";
    Outcome[Outcome["IGNORED"] = 2] = "IGNORED";
})(Outcome = exports.Outcome || (exports.Outcome = {}));
var RekeyEventType;
(function (RekeyEventType) {
    RekeyEventType[RekeyEventType["NONE"] = 0] = "NONE";
    RekeyEventType[RekeyEventType["NOT_LOGGED_IN"] = 1] = "NOT_LOGGED_IN";
    RekeyEventType[RekeyEventType["API_ERROR"] = 2] = "API_ERROR";
    RekeyEventType[RekeyEventType["NO_PROBLEMS"] = 3] = "NO_PROBLEMS";
    RekeyEventType[RekeyEventType["LOAD_ME_ERROR"] = 4] = "LOAD_ME_ERROR";
    RekeyEventType[RekeyEventType["CURRENT_DEVICE_CAN_REKEY"] = 5] = "CURRENT_DEVICE_CAN_REKEY";
    RekeyEventType[RekeyEventType["DEVICE_LOAD_ERROR"] = 6] = "DEVICE_LOAD_ERROR";
    RekeyEventType[RekeyEventType["HARASS"] = 7] = "HARASS";
    RekeyEventType[RekeyEventType["NO_GREGOR_MESSAGES"] = 8] = "NO_GREGOR_MESSAGES";
})(RekeyEventType = exports.RekeyEventType || (exports.RekeyEventType = {}));
var ResetType;
(function (ResetType) {
    ResetType[ResetType["NONE"] = 0] = "NONE";
    ResetType[ResetType["RESET"] = 1] = "RESET";
    ResetType[ResetType["DELETE"] = 2] = "DELETE";
})(ResetType = exports.ResetType || (exports.ResetType = {}));
var AuthenticityType;
(function (AuthenticityType) {
    AuthenticityType[AuthenticityType["SIGNED"] = 0] = "SIGNED";
    AuthenticityType[AuthenticityType["REPUDIABLE"] = 1] = "REPUDIABLE";
    AuthenticityType[AuthenticityType["ANONYMOUS"] = 2] = "ANONYMOUS";
})(AuthenticityType = exports.AuthenticityType || (exports.AuthenticityType = {}));
var SaltpackSenderType;
(function (SaltpackSenderType) {
    SaltpackSenderType[SaltpackSenderType["NOT_TRACKED"] = 0] = "NOT_TRACKED";
    SaltpackSenderType[SaltpackSenderType["UNKNOWN"] = 1] = "UNKNOWN";
    SaltpackSenderType[SaltpackSenderType["ANONYMOUS"] = 2] = "ANONYMOUS";
    SaltpackSenderType[SaltpackSenderType["TRACKING_BROKE"] = 3] = "TRACKING_BROKE";
    SaltpackSenderType[SaltpackSenderType["TRACKING_OK"] = 4] = "TRACKING_OK";
    SaltpackSenderType[SaltpackSenderType["SELF"] = 5] = "SELF";
    SaltpackSenderType[SaltpackSenderType["REVOKED"] = 6] = "REVOKED";
    SaltpackSenderType[SaltpackSenderType["EXPIRED"] = 7] = "EXPIRED";
})(SaltpackSenderType = exports.SaltpackSenderType || (exports.SaltpackSenderType = {}));
var KBFSArchivedType;
(function (KBFSArchivedType) {
    KBFSArchivedType[KBFSArchivedType["REVISION"] = 0] = "REVISION";
    KBFSArchivedType[KBFSArchivedType["TIME"] = 1] = "TIME";
    KBFSArchivedType[KBFSArchivedType["TIME_STRING"] = 2] = "TIME_STRING";
    KBFSArchivedType[KBFSArchivedType["REL_TIME_STRING"] = 3] = "REL_TIME_STRING";
})(KBFSArchivedType = exports.KBFSArchivedType || (exports.KBFSArchivedType = {}));
var PathType;
(function (PathType) {
    PathType[PathType["LOCAL"] = 0] = "LOCAL";
    PathType[PathType["KBFS"] = 1] = "KBFS";
    PathType[PathType["KBFS_ARCHIVED"] = 2] = "KBFS_ARCHIVED";
})(PathType = exports.PathType || (exports.PathType = {}));
var DirentType;
(function (DirentType) {
    DirentType[DirentType["FILE"] = 0] = "FILE";
    DirentType[DirentType["DIR"] = 1] = "DIR";
    DirentType[DirentType["SYM"] = 2] = "SYM";
    DirentType[DirentType["EXEC"] = 3] = "EXEC";
})(DirentType = exports.DirentType || (exports.DirentType = {}));
var PrefetchStatus;
(function (PrefetchStatus) {
    PrefetchStatus[PrefetchStatus["NOT_STARTED"] = 0] = "NOT_STARTED";
    PrefetchStatus[PrefetchStatus["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    PrefetchStatus[PrefetchStatus["COMPLETE"] = 2] = "COMPLETE";
})(PrefetchStatus = exports.PrefetchStatus || (exports.PrefetchStatus = {}));
var RevisionSpanType;
(function (RevisionSpanType) {
    RevisionSpanType[RevisionSpanType["DEFAULT"] = 0] = "DEFAULT";
    RevisionSpanType[RevisionSpanType["LAST_FIVE"] = 1] = "LAST_FIVE";
})(RevisionSpanType = exports.RevisionSpanType || (exports.RevisionSpanType = {}));
var OpenFlags;
(function (OpenFlags) {
    OpenFlags[OpenFlags["READ"] = 0] = "READ";
    OpenFlags[OpenFlags["REPLACE"] = 1] = "REPLACE";
    OpenFlags[OpenFlags["EXISTING"] = 2] = "EXISTING";
    OpenFlags[OpenFlags["WRITE"] = 4] = "WRITE";
    OpenFlags[OpenFlags["APPEND"] = 8] = "APPEND";
    OpenFlags[OpenFlags["DIRECTORY"] = 16] = "DIRECTORY";
})(OpenFlags = exports.OpenFlags || (exports.OpenFlags = {}));
var AsyncOps;
(function (AsyncOps) {
    AsyncOps[AsyncOps["LIST"] = 0] = "LIST";
    AsyncOps[AsyncOps["LIST_RECURSIVE"] = 1] = "LIST_RECURSIVE";
    AsyncOps[AsyncOps["READ"] = 2] = "READ";
    AsyncOps[AsyncOps["WRITE"] = 3] = "WRITE";
    AsyncOps[AsyncOps["COPY"] = 4] = "COPY";
    AsyncOps[AsyncOps["MOVE"] = 5] = "MOVE";
    AsyncOps[AsyncOps["REMOVE"] = 6] = "REMOVE";
    AsyncOps[AsyncOps["LIST_RECURSIVE_TO_DEPTH"] = 7] = "LIST_RECURSIVE_TO_DEPTH";
    AsyncOps[AsyncOps["GET_REVISIONS"] = 8] = "GET_REVISIONS";
})(AsyncOps = exports.AsyncOps || (exports.AsyncOps = {}));
var ListFilter;
(function (ListFilter) {
    ListFilter[ListFilter["NO_FILTER"] = 0] = "NO_FILTER";
    ListFilter[ListFilter["FILTER_ALL_HIDDEN"] = 1] = "FILTER_ALL_HIDDEN";
    ListFilter[ListFilter["FILTER_SYSTEM_HIDDEN"] = 2] = "FILTER_SYSTEM_HIDDEN";
})(ListFilter = exports.ListFilter || (exports.ListFilter = {}));
var FolderSyncMode;
(function (FolderSyncMode) {
    FolderSyncMode[FolderSyncMode["DISABLED"] = 0] = "DISABLED";
    FolderSyncMode[FolderSyncMode["ENABLED"] = 1] = "ENABLED";
    FolderSyncMode[FolderSyncMode["PARTIAL"] = 2] = "PARTIAL";
})(FolderSyncMode = exports.FolderSyncMode || (exports.FolderSyncMode = {}));
var SubscriptionTopic;
(function (SubscriptionTopic) {
    SubscriptionTopic[SubscriptionTopic["FAVORITES"] = 0] = "FAVORITES";
    SubscriptionTopic[SubscriptionTopic["JOURNAL_STATUS"] = 1] = "JOURNAL_STATUS";
    SubscriptionTopic[SubscriptionTopic["ONLINE_STATUS"] = 2] = "ONLINE_STATUS";
})(SubscriptionTopic = exports.SubscriptionTopic || (exports.SubscriptionTopic = {}));
var PathSubscriptionTopic;
(function (PathSubscriptionTopic) {
    PathSubscriptionTopic[PathSubscriptionTopic["CHILDREN"] = 0] = "CHILDREN";
    PathSubscriptionTopic[PathSubscriptionTopic["STAT"] = 1] = "STAT";
})(PathSubscriptionTopic = exports.PathSubscriptionTopic || (exports.PathSubscriptionTopic = {}));
var TeamRole;
(function (TeamRole) {
    TeamRole[TeamRole["NONE"] = 0] = "NONE";
    TeamRole[TeamRole["READER"] = 1] = "READER";
    TeamRole[TeamRole["WRITER"] = 2] = "WRITER";
    TeamRole[TeamRole["ADMIN"] = 3] = "ADMIN";
    TeamRole[TeamRole["OWNER"] = 4] = "OWNER";
    TeamRole[TeamRole["BOT"] = 5] = "BOT";
    TeamRole[TeamRole["RESTRICTEDBOT"] = 6] = "RESTRICTEDBOT";
})(TeamRole = exports.TeamRole || (exports.TeamRole = {}));
var TeamApplication;
(function (TeamApplication) {
    TeamApplication[TeamApplication["KBFS"] = 1] = "KBFS";
    TeamApplication[TeamApplication["CHAT"] = 2] = "CHAT";
    TeamApplication[TeamApplication["SALTPACK"] = 3] = "SALTPACK";
    TeamApplication[TeamApplication["GIT_METADATA"] = 4] = "GIT_METADATA";
    TeamApplication[TeamApplication["SEITAN_INVITE_TOKEN"] = 5] = "SEITAN_INVITE_TOKEN";
    TeamApplication[TeamApplication["STELLAR_RELAY"] = 6] = "STELLAR_RELAY";
})(TeamApplication = exports.TeamApplication || (exports.TeamApplication = {}));
var TeamStatus;
(function (TeamStatus) {
    TeamStatus[TeamStatus["NONE"] = 0] = "NONE";
    TeamStatus[TeamStatus["LIVE"] = 1] = "LIVE";
    TeamStatus[TeamStatus["DELETED"] = 2] = "DELETED";
    TeamStatus[TeamStatus["ABANDONED"] = 3] = "ABANDONED";
})(TeamStatus = exports.TeamStatus || (exports.TeamStatus = {}));
var PTKType;
(function (PTKType) {
    PTKType[PTKType["READER"] = 0] = "READER";
})(PTKType = exports.PTKType || (exports.PTKType = {}));
var PerTeamSeedCheckVersion;
(function (PerTeamSeedCheckVersion) {
    PerTeamSeedCheckVersion[PerTeamSeedCheckVersion["V1"] = 1] = "V1";
})(PerTeamSeedCheckVersion = exports.PerTeamSeedCheckVersion || (exports.PerTeamSeedCheckVersion = {}));
var TeamMemberStatus;
(function (TeamMemberStatus) {
    TeamMemberStatus[TeamMemberStatus["ACTIVE"] = 0] = "ACTIVE";
    TeamMemberStatus[TeamMemberStatus["RESET"] = 1] = "RESET";
    TeamMemberStatus[TeamMemberStatus["DELETED"] = 2] = "DELETED";
})(TeamMemberStatus = exports.TeamMemberStatus || (exports.TeamMemberStatus = {}));
var RatchetType;
(function (RatchetType) {
    RatchetType[RatchetType["MAIN"] = 0] = "MAIN";
    RatchetType[RatchetType["BLINDED"] = 1] = "BLINDED";
    RatchetType[RatchetType["SELF"] = 2] = "SELF";
})(RatchetType = exports.RatchetType || (exports.RatchetType = {}));
var AuditVersion;
(function (AuditVersion) {
    AuditVersion[AuditVersion["V0"] = 0] = "V0";
    AuditVersion[AuditVersion["V1"] = 1] = "V1";
    AuditVersion[AuditVersion["V2"] = 2] = "V2";
    AuditVersion[AuditVersion["V3"] = 3] = "V3";
})(AuditVersion = exports.AuditVersion || (exports.AuditVersion = {}));
var TeamInviteCategory;
(function (TeamInviteCategory) {
    TeamInviteCategory[TeamInviteCategory["NONE"] = 0] = "NONE";
    TeamInviteCategory[TeamInviteCategory["UNKNOWN"] = 1] = "UNKNOWN";
    TeamInviteCategory[TeamInviteCategory["KEYBASE"] = 2] = "KEYBASE";
    TeamInviteCategory[TeamInviteCategory["EMAIL"] = 3] = "EMAIL";
    TeamInviteCategory[TeamInviteCategory["SBS"] = 4] = "SBS";
    TeamInviteCategory[TeamInviteCategory["SEITAN"] = 5] = "SEITAN";
    TeamInviteCategory[TeamInviteCategory["PHONE"] = 6] = "PHONE";
})(TeamInviteCategory = exports.TeamInviteCategory || (exports.TeamInviteCategory = {}));
var SeitanKeyAndLabelVersion;
(function (SeitanKeyAndLabelVersion) {
    SeitanKeyAndLabelVersion[SeitanKeyAndLabelVersion["V1"] = 1] = "V1";
    SeitanKeyAndLabelVersion[SeitanKeyAndLabelVersion["V2"] = 2] = "V2";
})(SeitanKeyAndLabelVersion = exports.SeitanKeyAndLabelVersion || (exports.SeitanKeyAndLabelVersion = {}));
var SeitanKeyLabelType;
(function (SeitanKeyLabelType) {
    SeitanKeyLabelType[SeitanKeyLabelType["SMS"] = 1] = "SMS";
})(SeitanKeyLabelType = exports.SeitanKeyLabelType || (exports.SeitanKeyLabelType = {}));
var RotationType;
(function (RotationType) {
    RotationType[RotationType["VISIBLE"] = 0] = "VISIBLE";
    RotationType[RotationType["HIDDEN"] = 1] = "HIDDEN";
    RotationType[RotationType["CLKR"] = 2] = "CLKR";
})(RotationType = exports.RotationType || (exports.RotationType = {}));
var TLFIdentifyBehavior;
(function (TLFIdentifyBehavior) {
    TLFIdentifyBehavior[TLFIdentifyBehavior["UNSET"] = 0] = "UNSET";
    TLFIdentifyBehavior[TLFIdentifyBehavior["CHAT_CLI"] = 1] = "CHAT_CLI";
    TLFIdentifyBehavior[TLFIdentifyBehavior["CHAT_GUI"] = 2] = "CHAT_GUI";
    TLFIdentifyBehavior[TLFIdentifyBehavior["REMOVED_AND_UNUSED"] = 3] = "REMOVED_AND_UNUSED";
    TLFIdentifyBehavior[TLFIdentifyBehavior["KBFS_REKEY"] = 4] = "KBFS_REKEY";
    TLFIdentifyBehavior[TLFIdentifyBehavior["KBFS_QR"] = 5] = "KBFS_QR";
    TLFIdentifyBehavior[TLFIdentifyBehavior["CHAT_SKIP"] = 6] = "CHAT_SKIP";
    TLFIdentifyBehavior[TLFIdentifyBehavior["SALTPACK"] = 7] = "SALTPACK";
    TLFIdentifyBehavior[TLFIdentifyBehavior["CLI"] = 8] = "CLI";
    TLFIdentifyBehavior[TLFIdentifyBehavior["GUI"] = 9] = "GUI";
    TLFIdentifyBehavior[TLFIdentifyBehavior["DEFAULT_KBFS"] = 10] = "DEFAULT_KBFS";
    TLFIdentifyBehavior[TLFIdentifyBehavior["KBFS_CHAT"] = 11] = "KBFS_CHAT";
    TLFIdentifyBehavior[TLFIdentifyBehavior["RESOLVE_AND_CHECK"] = 12] = "RESOLVE_AND_CHECK";
    TLFIdentifyBehavior[TLFIdentifyBehavior["GUI_PROFILE"] = 13] = "GUI_PROFILE";
    TLFIdentifyBehavior[TLFIdentifyBehavior["KBFS_INIT"] = 14] = "KBFS_INIT";
    TLFIdentifyBehavior[TLFIdentifyBehavior["FS_GUI"] = 15] = "FS_GUI";
})(TLFIdentifyBehavior = exports.TLFIdentifyBehavior || (exports.TLFIdentifyBehavior = {}));
var PromptDefault;
(function (PromptDefault) {
    PromptDefault[PromptDefault["NONE"] = 0] = "NONE";
    PromptDefault[PromptDefault["YES"] = 1] = "YES";
    PromptDefault[PromptDefault["NO"] = 2] = "NO";
})(PromptDefault = exports.PromptDefault || (exports.PromptDefault = {}));
var KeyType;
(function (KeyType) {
    KeyType[KeyType["NONE"] = 0] = "NONE";
    KeyType[KeyType["NACL"] = 1] = "NACL";
    KeyType[KeyType["PGP"] = 2] = "PGP";
})(KeyType = exports.KeyType || (exports.KeyType = {}));
var UPK2MinorVersion;
(function (UPK2MinorVersion) {
    UPK2MinorVersion[UPK2MinorVersion["V0"] = 0] = "V0";
    UPK2MinorVersion[UPK2MinorVersion["V1"] = 1] = "V1";
    UPK2MinorVersion[UPK2MinorVersion["V2"] = 2] = "V2";
    UPK2MinorVersion[UPK2MinorVersion["V3"] = 3] = "V3";
    UPK2MinorVersion[UPK2MinorVersion["V4"] = 4] = "V4";
    UPK2MinorVersion[UPK2MinorVersion["V5"] = 5] = "V5";
    UPK2MinorVersion[UPK2MinorVersion["V6"] = 6] = "V6";
})(UPK2MinorVersion = exports.UPK2MinorVersion || (exports.UPK2MinorVersion = {}));
var UPAKVersion;
(function (UPAKVersion) {
    UPAKVersion[UPAKVersion["V1"] = 1] = "V1";
    UPAKVersion[UPAKVersion["V2"] = 2] = "V2";
})(UPAKVersion = exports.UPAKVersion || (exports.UPAKVersion = {}));
var UPKLiteMinorVersion;
(function (UPKLiteMinorVersion) {
    UPKLiteMinorVersion[UPKLiteMinorVersion["V0"] = 0] = "V0";
})(UPKLiteMinorVersion = exports.UPKLiteMinorVersion || (exports.UPKLiteMinorVersion = {}));
var ImpTofuSearchType;
(function (ImpTofuSearchType) {
    ImpTofuSearchType[ImpTofuSearchType["PHONE"] = 0] = "PHONE";
    ImpTofuSearchType[ImpTofuSearchType["EMAIL"] = 1] = "EMAIL";
})(ImpTofuSearchType = exports.ImpTofuSearchType || (exports.ImpTofuSearchType = {}));
//# sourceMappingURL=index.js.map