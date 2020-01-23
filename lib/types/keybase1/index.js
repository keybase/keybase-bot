"use strict";
/*
 * keybase.1
 *
 * Auto-generated to TypeScript types by avdl-compiler v1.4.6 (https://github.com/keybase/node-avdl-compiler)
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
 * - ../client/protocol/avdl/keybase1/install.avdl
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
    MobileAppState["FOREGROUND"] = "foreground";
    MobileAppState["BACKGROUND"] = "background";
    MobileAppState["INACTIVE"] = "inactive";
    MobileAppState["BACKGROUNDACTIVE"] = "backgroundactive";
})(MobileAppState = exports.MobileAppState || (exports.MobileAppState = {}));
var MobileNetworkState;
(function (MobileNetworkState) {
    MobileNetworkState["NONE"] = "none";
    MobileNetworkState["WIFI"] = "wifi";
    MobileNetworkState["CELLULAR"] = "cellular";
    MobileNetworkState["UNKNOWN"] = "unknown";
    MobileNetworkState["NOTAVAILABLE"] = "notavailable";
})(MobileNetworkState = exports.MobileNetworkState || (exports.MobileNetworkState = {}));
var BoxAuditAttemptResult;
(function (BoxAuditAttemptResult) {
    BoxAuditAttemptResult["FAILURE_RETRYABLE"] = "failure_retryable";
    BoxAuditAttemptResult["FAILURE_MALICIOUS_SERVER"] = "failure_malicious_server";
    BoxAuditAttemptResult["OK_VERIFIED"] = "ok_verified";
    BoxAuditAttemptResult["OK_NOT_ATTEMPTED_ROLE"] = "ok_not_attempted_role";
    BoxAuditAttemptResult["OK_NOT_ATTEMPTED_OPENTEAM"] = "ok_not_attempted_openteam";
    BoxAuditAttemptResult["OK_NOT_ATTEMPTED_SUBTEAM"] = "ok_not_attempted_subteam";
})(BoxAuditAttemptResult = exports.BoxAuditAttemptResult || (exports.BoxAuditAttemptResult = {}));
var BlockType;
(function (BlockType) {
    BlockType["DATA"] = "data";
    BlockType["MD"] = "md";
    BlockType["GIT"] = "git";
})(BlockType = exports.BlockType || (exports.BlockType = {}));
var BlockStatus;
(function (BlockStatus) {
    BlockStatus["UNKNOWN"] = "unknown";
    BlockStatus["LIVE"] = "live";
    BlockStatus["ARCHIVED"] = "archived";
})(BlockStatus = exports.BlockStatus || (exports.BlockStatus = {}));
var TeamType;
(function (TeamType) {
    TeamType["NONE"] = "none";
    TeamType["LEGACY"] = "legacy";
    TeamType["MODERN"] = "modern";
})(TeamType = exports.TeamType || (exports.TeamType = {}));
var TLFVisibility;
(function (TLFVisibility) {
    TLFVisibility["ANY"] = "any";
    TLFVisibility["PUBLIC"] = "public";
    TLFVisibility["PRIVATE"] = "private";
})(TLFVisibility = exports.TLFVisibility || (exports.TLFVisibility = {}));
var SeqType;
(function (SeqType) {
    SeqType["NONE"] = "none";
    SeqType["PUBLIC"] = "public";
    SeqType["PRIVATE"] = "private";
    SeqType["SEMIPRIVATE"] = "semiprivate";
    SeqType["USER_PRIVATE_HIDDEN"] = "user_private_hidden";
    SeqType["TEAM_PRIVATE_HIDDEN"] = "team_private_hidden";
})(SeqType = exports.SeqType || (exports.SeqType = {}));
var DeviceType;
(function (DeviceType) {
    DeviceType["DESKTOP"] = "desktop";
    DeviceType["MOBILE"] = "mobile";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel["NONE"] = "none";
    LogLevel["DEBUG"] = "debug";
    LogLevel["INFO"] = "info";
    LogLevel["NOTICE"] = "notice";
    LogLevel["WARN"] = "warn";
    LogLevel["ERROR"] = "error";
    LogLevel["CRITICAL"] = "critical";
    LogLevel["FATAL"] = "fatal";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var ClientType;
(function (ClientType) {
    ClientType["NONE"] = "none";
    ClientType["CLI"] = "cli";
    ClientType["GUI_MAIN"] = "gui_main";
    ClientType["KBFS"] = "kbfs";
    ClientType["GUI_HELPER"] = "gui_helper";
})(ClientType = exports.ClientType || (exports.ClientType = {}));
var UserOrTeamResult;
(function (UserOrTeamResult) {
    UserOrTeamResult["USER"] = "user";
    UserOrTeamResult["TEAM"] = "team";
})(UserOrTeamResult = exports.UserOrTeamResult || (exports.UserOrTeamResult = {}));
var MerkleTreeID;
(function (MerkleTreeID) {
    MerkleTreeID["MASTER"] = "master";
    MerkleTreeID["KBFS_PUBLIC"] = "kbfs_public";
    MerkleTreeID["KBFS_PRIVATE"] = "kbfs_private";
    MerkleTreeID["KBFS_PRIVATETEAM"] = "kbfs_privateteam";
})(MerkleTreeID = exports.MerkleTreeID || (exports.MerkleTreeID = {}));
var FullNamePackageVersion;
(function (FullNamePackageVersion) {
    FullNamePackageVersion["V0"] = "v0";
    FullNamePackageVersion["V1"] = "v1";
    FullNamePackageVersion["V2"] = "v2";
})(FullNamePackageVersion = exports.FullNamePackageVersion || (exports.FullNamePackageVersion = {}));
var IdentityVisibility;
(function (IdentityVisibility) {
    IdentityVisibility["PRIVATE"] = "private";
    IdentityVisibility["PUBLIC"] = "public";
})(IdentityVisibility = exports.IdentityVisibility || (exports.IdentityVisibility = {}));
var OfflineAvailability;
(function (OfflineAvailability) {
    OfflineAvailability["NONE"] = "none";
    OfflineAvailability["BEST_EFFORT"] = "best_effort";
})(OfflineAvailability = exports.OfflineAvailability || (exports.OfflineAvailability = {}));
var ForkType;
(function (ForkType) {
    ForkType["NONE"] = "none";
    ForkType["AUTO"] = "auto";
    ForkType["WATCHDOG"] = "watchdog";
    ForkType["LAUNCHD"] = "launchd";
    ForkType["SYSTEMD"] = "systemd";
})(ForkType = exports.ForkType || (exports.ForkType = {}));
var UpdateInfoStatus;
(function (UpdateInfoStatus) {
    UpdateInfoStatus["UP_TO_DATE"] = "up_to_date";
    UpdateInfoStatus["NEED_UPDATE"] = "need_update";
    UpdateInfoStatus["CRITICALLY_OUT_OF_DATE"] = "critically_out_of_date";
})(UpdateInfoStatus = exports.UpdateInfoStatus || (exports.UpdateInfoStatus = {}));
var UpdateInfoStatus2;
(function (UpdateInfoStatus2) {
    UpdateInfoStatus2["OK"] = "ok";
    UpdateInfoStatus2["SUGGESTED"] = "suggested";
    UpdateInfoStatus2["CRITICAL"] = "critical";
})(UpdateInfoStatus2 = exports.UpdateInfoStatus2 || (exports.UpdateInfoStatus2 = {}));
var ProxyType;
(function (ProxyType) {
    ProxyType["No_Proxy"] = "no_proxy";
    ProxyType["HTTP_Connect"] = "http_connect";
    ProxyType["Socks"] = "socks";
})(ProxyType = exports.ProxyType || (exports.ProxyType = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode["SCOk"] = "scok";
    StatusCode["SCInputError"] = "scinputerror";
    StatusCode["SCLoginRequired"] = "scloginrequired";
    StatusCode["SCBadSession"] = "scbadsession";
    StatusCode["SCBadLoginUserNotFound"] = "scbadloginusernotfound";
    StatusCode["SCBadLoginPassword"] = "scbadloginpassword";
    StatusCode["SCNotFound"] = "scnotfound";
    StatusCode["SCThrottleControl"] = "scthrottlecontrol";
    StatusCode["SCDeleted"] = "scdeleted";
    StatusCode["SCGeneric"] = "scgeneric";
    StatusCode["SCAlreadyLoggedIn"] = "scalreadyloggedin";
    StatusCode["SCExists"] = "scexists";
    StatusCode["SCCanceled"] = "sccanceled";
    StatusCode["SCInputCanceled"] = "scinputcanceled";
    StatusCode["SCBadUsername"] = "scbadusername";
    StatusCode["SCOffline"] = "scoffline";
    StatusCode["SCReloginRequired"] = "screloginrequired";
    StatusCode["SCResolutionFailed"] = "scresolutionfailed";
    StatusCode["SCProfileNotPublic"] = "scprofilenotpublic";
    StatusCode["SCIdentifyFailed"] = "scidentifyfailed";
    StatusCode["SCTrackingBroke"] = "sctrackingbroke";
    StatusCode["SCWrongCryptoFormat"] = "scwrongcryptoformat";
    StatusCode["SCDecryptionError"] = "scdecryptionerror";
    StatusCode["SCInvalidAddress"] = "scinvalidaddress";
    StatusCode["SCNoSession"] = "scnosession";
    StatusCode["SCAccountReset"] = "scaccountreset";
    StatusCode["SCIdentifiesFailed"] = "scidentifiesfailed";
    StatusCode["SCNoSpaceOnDevice"] = "scnospaceondevice";
    StatusCode["SCMerkleClientError"] = "scmerkleclienterror";
    StatusCode["SCBadEmail"] = "scbademail";
    StatusCode["SCRateLimit"] = "scratelimit";
    StatusCode["SCBadSignupUsernameTaken"] = "scbadsignupusernametaken";
    StatusCode["SCDuplicate"] = "scduplicate";
    StatusCode["SCBadInvitationCode"] = "scbadinvitationcode";
    StatusCode["SCBadSignupUsernameReserved"] = "scbadsignupusernamereserved";
    StatusCode["SCBadSignupTeamName"] = "scbadsignupteamname";
    StatusCode["SCFeatureFlag"] = "scfeatureflag";
    StatusCode["SCEmailTaken"] = "scemailtaken";
    StatusCode["SCEmailAlreadyAdded"] = "scemailalreadyadded";
    StatusCode["SCEmailLimitExceeded"] = "scemaillimitexceeded";
    StatusCode["SCEmailCannotDeletePrimary"] = "scemailcannotdeleteprimary";
    StatusCode["SCEmailUnknown"] = "scemailunknown";
    StatusCode["SCBotSignupTokenNotFound"] = "scbotsignuptokennotfound";
    StatusCode["SCNoUpdate"] = "scnoupdate";
    StatusCode["SCMissingResult"] = "scmissingresult";
    StatusCode["SCKeyNotFound"] = "sckeynotfound";
    StatusCode["SCKeyCorrupted"] = "sckeycorrupted";
    StatusCode["SCKeyInUse"] = "sckeyinuse";
    StatusCode["SCKeyBadGen"] = "sckeybadgen";
    StatusCode["SCKeyNoSecret"] = "sckeynosecret";
    StatusCode["SCKeyBadUIDs"] = "sckeybaduids";
    StatusCode["SCKeyNoActive"] = "sckeynoactive";
    StatusCode["SCKeyNoSig"] = "sckeynosig";
    StatusCode["SCKeyBadSig"] = "sckeybadsig";
    StatusCode["SCKeyBadEldest"] = "sckeybadeldest";
    StatusCode["SCKeyNoEldest"] = "sckeynoeldest";
    StatusCode["SCKeyDuplicateUpdate"] = "sckeyduplicateupdate";
    StatusCode["SCSibkeyAlreadyExists"] = "scsibkeyalreadyexists";
    StatusCode["SCDecryptionKeyNotFound"] = "scdecryptionkeynotfound";
    StatusCode["SCKeyNoPGPEncryption"] = "sckeynopgpencryption";
    StatusCode["SCKeyNoNaClEncryption"] = "sckeynonaclencryption";
    StatusCode["SCKeySyncedPGPNotFound"] = "sckeysyncedpgpnotfound";
    StatusCode["SCKeyNoMatchingGPG"] = "sckeynomatchinggpg";
    StatusCode["SCKeyRevoked"] = "sckeyrevoked";
    StatusCode["SCSigCannotVerify"] = "scsigcannotverify";
    StatusCode["SCSigWrongKey"] = "scsigwrongkey";
    StatusCode["SCSigOldSeqno"] = "scsigoldseqno";
    StatusCode["SCSigCreationDisallowed"] = "scsigcreationdisallowed";
    StatusCode["SCSigMissingRatchet"] = "scsigmissingratchet";
    StatusCode["SCSigBadTotalOrder"] = "scsigbadtotalorder";
    StatusCode["SCBadTrackSession"] = "scbadtracksession";
    StatusCode["SCDeviceBadName"] = "scdevicebadname";
    StatusCode["SCDeviceBadStatus"] = "scdevicebadstatus";
    StatusCode["SCDeviceNameInUse"] = "scdevicenameinuse";
    StatusCode["SCDeviceNotFound"] = "scdevicenotfound";
    StatusCode["SCDeviceMismatch"] = "scdevicemismatch";
    StatusCode["SCDeviceRequired"] = "scdevicerequired";
    StatusCode["SCDevicePrevProvisioned"] = "scdeviceprevprovisioned";
    StatusCode["SCDeviceNoProvision"] = "scdevicenoprovision";
    StatusCode["SCDeviceProvisionViaDevice"] = "scdeviceprovisionviadevice";
    StatusCode["SCRevokeCurrentDevice"] = "screvokecurrentdevice";
    StatusCode["SCRevokeLastDevice"] = "screvokelastdevice";
    StatusCode["SCDeviceProvisionOffline"] = "scdeviceprovisionoffline";
    StatusCode["SCRevokeLastDevicePGP"] = "screvokelastdevicepgp";
    StatusCode["SCStreamExists"] = "scstreamexists";
    StatusCode["SCStreamNotFound"] = "scstreamnotfound";
    StatusCode["SCStreamWrongKind"] = "scstreamwrongkind";
    StatusCode["SCStreamEOF"] = "scstreameof";
    StatusCode["SCStreamUnknown"] = "scstreamunknown";
    StatusCode["SCGenericAPIError"] = "scgenericapierror";
    StatusCode["SCAPINetworkError"] = "scapinetworkerror";
    StatusCode["SCTimeout"] = "sctimeout";
    StatusCode["SCProofError"] = "scprooferror";
    StatusCode["SCIdentificationExpired"] = "scidentificationexpired";
    StatusCode["SCSelfNotFound"] = "scselfnotfound";
    StatusCode["SCBadKexPhrase"] = "scbadkexphrase";
    StatusCode["SCNoUIDelegation"] = "scnouidelegation";
    StatusCode["SCNoUI"] = "scnoui";
    StatusCode["SCGPGUnavailable"] = "scgpgunavailable";
    StatusCode["SCInvalidVersionError"] = "scinvalidversionerror";
    StatusCode["SCOldVersionError"] = "scoldversionerror";
    StatusCode["SCInvalidLocationError"] = "scinvalidlocationerror";
    StatusCode["SCServiceStatusError"] = "scservicestatuserror";
    StatusCode["SCInstallError"] = "scinstallerror";
    StatusCode["SCLoadKextError"] = "scloadkexterror";
    StatusCode["SCLoadKextPermError"] = "scloadkextpermerror";
    StatusCode["SCGitInternal"] = "scgitinternal";
    StatusCode["SCGitRepoAlreadyExists"] = "scgitrepoalreadyexists";
    StatusCode["SCGitInvalidRepoName"] = "scgitinvalidreponame";
    StatusCode["SCGitCannotDelete"] = "scgitcannotdelete";
    StatusCode["SCGitRepoDoesntExist"] = "scgitrepodoesntexist";
    StatusCode["SCLoginStateTimeout"] = "scloginstatetimeout";
    StatusCode["SCChatInternal"] = "scchatinternal";
    StatusCode["SCChatRateLimit"] = "scchatratelimit";
    StatusCode["SCChatConvExists"] = "scchatconvexists";
    StatusCode["SCChatUnknownTLFID"] = "scchatunknowntlfid";
    StatusCode["SCChatNotInConv"] = "scchatnotinconv";
    StatusCode["SCChatBadMsg"] = "scchatbadmsg";
    StatusCode["SCChatBroadcast"] = "scchatbroadcast";
    StatusCode["SCChatAlreadySuperseded"] = "scchatalreadysuperseded";
    StatusCode["SCChatAlreadyDeleted"] = "scchatalreadydeleted";
    StatusCode["SCChatTLFFinalized"] = "scchattlffinalized";
    StatusCode["SCChatCollision"] = "scchatcollision";
    StatusCode["SCIdentifySummaryError"] = "scidentifysummaryerror";
    StatusCode["SCNeedSelfRekey"] = "scneedselfrekey";
    StatusCode["SCNeedOtherRekey"] = "scneedotherrekey";
    StatusCode["SCChatMessageCollision"] = "scchatmessagecollision";
    StatusCode["SCChatDuplicateMessage"] = "scchatduplicatemessage";
    StatusCode["SCChatClientError"] = "scchatclienterror";
    StatusCode["SCChatNotInTeam"] = "scchatnotinteam";
    StatusCode["SCChatStalePreviousState"] = "scchatstalepreviousstate";
    StatusCode["SCChatEphemeralRetentionPolicyViolatedError"] = "scchatephemeralretentionpolicyviolatederror";
    StatusCode["SCTeamBadMembership"] = "scteambadmembership";
    StatusCode["SCTeamSelfNotOwner"] = "scteamselfnotowner";
    StatusCode["SCTeamNotFound"] = "scteamnotfound";
    StatusCode["SCTeamExists"] = "scteamexists";
    StatusCode["SCTeamReadError"] = "scteamreaderror";
    StatusCode["SCTeamWritePermDenied"] = "scteamwritepermdenied";
    StatusCode["SCTeamBadGeneration"] = "scteambadgeneration";
    StatusCode["SCNoOp"] = "scnoop";
    StatusCode["SCTeamInviteBadCancel"] = "scteaminvitebadcancel";
    StatusCode["SCTeamInviteBadToken"] = "scteaminvitebadtoken";
    StatusCode["SCTeamTarDuplicate"] = "scteamtarduplicate";
    StatusCode["SCTeamTarNotFound"] = "scteamtarnotfound";
    StatusCode["SCTeamMemberExists"] = "scteammemberexists";
    StatusCode["SCTeamNotReleased"] = "scteamnotreleased";
    StatusCode["SCTeamPermanentlyLeft"] = "scteampermanentlyleft";
    StatusCode["SCTeamNeedRootId"] = "scteamneedrootid";
    StatusCode["SCTeamHasLiveChildren"] = "scteamhaslivechildren";
    StatusCode["SCTeamDeleteError"] = "scteamdeleteerror";
    StatusCode["SCTeamBadRootTeam"] = "scteambadrootteam";
    StatusCode["SCTeamNameConflictsWithUser"] = "scteamnameconflictswithuser";
    StatusCode["SCTeamDeleteNoUpPointer"] = "scteamdeletenouppointer";
    StatusCode["SCTeamNeedOwner"] = "scteamneedowner";
    StatusCode["SCTeamNoOwnerAllowed"] = "scteamnoownerallowed";
    StatusCode["SCTeamImplicitNoNonSbs"] = "scteamimplicitnononsbs";
    StatusCode["SCTeamImplicitBadHash"] = "scteamimplicitbadhash";
    StatusCode["SCTeamImplicitBadName"] = "scteamimplicitbadname";
    StatusCode["SCTeamImplicitClash"] = "scteamimplicitclash";
    StatusCode["SCTeamImplicitDuplicate"] = "scteamimplicitduplicate";
    StatusCode["SCTeamImplicitBadOp"] = "scteamimplicitbadop";
    StatusCode["SCTeamImplicitBadRole"] = "scteamimplicitbadrole";
    StatusCode["SCTeamImplicitNotFound"] = "scteamimplicitnotfound";
    StatusCode["SCTeamBadAdminSeqnoType"] = "scteambadadminseqnotype";
    StatusCode["SCTeamImplicitBadAdd"] = "scteamimplicitbadadd";
    StatusCode["SCTeamImplicitBadRemove"] = "scteamimplicitbadremove";
    StatusCode["SCTeamInviteTokenReused"] = "scteaminvitetokenreused";
    StatusCode["SCTeamKeyMaskNotFound"] = "scteamkeymasknotfound";
    StatusCode["SCTeamBanned"] = "scteambanned";
    StatusCode["SCTeamInvalidBan"] = "scteaminvalidban";
    StatusCode["SCTeamShowcasePermDenied"] = "scteamshowcasepermdenied";
    StatusCode["SCTeamProvisionalCanKey"] = "scteamprovisionalcankey";
    StatusCode["SCTeamProvisionalCannotKey"] = "scteamprovisionalcannotkey";
    StatusCode["SCTeamFTLOutdated"] = "scteamftloutdated";
    StatusCode["SCTeamStorageWrongRevision"] = "scteamstoragewrongrevision";
    StatusCode["SCTeamStorageBadGeneration"] = "scteamstoragebadgeneration";
    StatusCode["SCTeamStorageNotFound"] = "scteamstoragenotfound";
    StatusCode["SCTeamContactSettingsBlock"] = "scteamcontactsettingsblock";
    StatusCode["SCEphemeralKeyBadGeneration"] = "scephemeralkeybadgeneration";
    StatusCode["SCEphemeralKeyUnexpectedBox"] = "scephemeralkeyunexpectedbox";
    StatusCode["SCEphemeralKeyMissingBox"] = "scephemeralkeymissingbox";
    StatusCode["SCEphemeralKeyWrongNumberOfKeys"] = "scephemeralkeywrongnumberofkeys";
    StatusCode["SCEphemeralKeyMismatchedKey"] = "scephemeralkeymismatchedkey";
    StatusCode["SCEphemeralPairwiseMACsMissingUIDs"] = "scephemeralpairwisemacsmissinguids";
    StatusCode["SCEphemeralDeviceAfterEK"] = "scephemeraldeviceafterek";
    StatusCode["SCEphemeralMemberAfterEK"] = "scephemeralmemberafterek";
    StatusCode["SCEphemeralDeviceStale"] = "scephemeraldevicestale";
    StatusCode["SCEphemeralUserStale"] = "scephemeraluserstale";
    StatusCode["SCStellarError"] = "scstellarerror";
    StatusCode["SCStellarBadInput"] = "scstellarbadinput";
    StatusCode["SCStellarWrongRevision"] = "scstellarwrongrevision";
    StatusCode["SCStellarMissingBundle"] = "scstellarmissingbundle";
    StatusCode["SCStellarBadPuk"] = "scstellarbadpuk";
    StatusCode["SCStellarMissingAccount"] = "scstellarmissingaccount";
    StatusCode["SCStellarBadPrev"] = "scstellarbadprev";
    StatusCode["SCStellarWrongPrimary"] = "scstellarwrongprimary";
    StatusCode["SCStellarUnsupportedCurrency"] = "scstellarunsupportedcurrency";
    StatusCode["SCStellarNeedDisclaimer"] = "scstellarneeddisclaimer";
    StatusCode["SCStellarDeviceNotMobile"] = "scstellardevicenotmobile";
    StatusCode["SCStellarMobileOnlyPurgatory"] = "scstellarmobileonlypurgatory";
    StatusCode["SCStellarIncompatibleVersion"] = "scstellarincompatibleversion";
    StatusCode["SCNISTWrongSize"] = "scnistwrongsize";
    StatusCode["SCNISTBadMode"] = "scnistbadmode";
    StatusCode["SCNISTHashWrongSize"] = "scnisthashwrongsize";
    StatusCode["SCNISTSigWrongSize"] = "scnistsigwrongsize";
    StatusCode["SCNISTSigBadInput"] = "scnistsigbadinput";
    StatusCode["SCNISTSigBadUID"] = "scnistsigbaduid";
    StatusCode["SCNISTSigBadDeviceID"] = "scnistsigbaddeviceid";
    StatusCode["SCNISTSigBadNonce"] = "scnistsigbadnonce";
    StatusCode["SCNISTNoSigOrHash"] = "scnistnosigorhash";
    StatusCode["SCNISTExpired"] = "scnistexpired";
    StatusCode["SCNISTSigRevoked"] = "scnistsigrevoked";
    StatusCode["SCNISTKeyRevoked"] = "scnistkeyrevoked";
    StatusCode["SCNISTUserDeleted"] = "scnistuserdeleted";
    StatusCode["SCNISTNoDevice"] = "scnistnodevice";
    StatusCode["SCNISTSigCannot_verify"] = "scnistsigcannot_verify";
    StatusCode["SCNISTReplay"] = "scnistreplay";
    StatusCode["SCNISTSigBadLifetime"] = "scnistsigbadlifetime";
    StatusCode["SCNISTNotFound"] = "scnistnotfound";
    StatusCode["SCNISTBadClock"] = "scnistbadclock";
    StatusCode["SCNISTSigBadCtime"] = "scnistsigbadctime";
    StatusCode["SCBadSignupUsernameDeleted"] = "scbadsignupusernamedeleted";
    StatusCode["SCPhoneNumberUnknown"] = "scphonenumberunknown";
    StatusCode["SCPhoneNumberAlreadyVerified"] = "scphonenumberalreadyverified";
    StatusCode["SCPhoneNumberVerificationCodeExpired"] = "scphonenumberverificationcodeexpired";
    StatusCode["SCPhoneNumberWrongVerificationCode"] = "scphonenumberwrongverificationcode";
    StatusCode["SCPhoneNumberLimitExceeded"] = "scphonenumberlimitexceeded";
    StatusCode["SCNoPaperKeys"] = "scnopaperkeys";
    StatusCode["SCTeambotKeyGenerationExists"] = "scteambotkeygenerationexists";
    StatusCode["SCTeambotKeyOldBoxedGeneration"] = "scteambotkeyoldboxedgeneration";
    StatusCode["SCTeambotKeyBadGeneration"] = "scteambotkeybadgeneration";
    StatusCode["SCAirdropRegisterFailedMisc"] = "scairdropregisterfailedmisc";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
var ExitCode;
(function (ExitCode) {
    ExitCode["OK"] = "ok";
    ExitCode["NOTOK"] = "notok";
    ExitCode["RESTART"] = "restart";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
var DbType;
(function (DbType) {
    DbType["MAIN"] = "main";
    DbType["CHAT"] = "chat";
    DbType["FS_BLOCK_CACHE"] = "fs_block_cache";
    DbType["FS_BLOCK_CACHE_META"] = "fs_block_cache_meta";
    DbType["FS_SYNC_BLOCK_CACHE"] = "fs_sync_block_cache";
    DbType["FS_SYNC_BLOCK_CACHE_META"] = "fs_sync_block_cache_meta";
})(DbType = exports.DbType || (exports.DbType = {}));
var OnLoginStartupStatus;
(function (OnLoginStartupStatus) {
    OnLoginStartupStatus["UNKNOWN"] = "unknown";
    OnLoginStartupStatus["DISABLED"] = "disabled";
    OnLoginStartupStatus["ENABLED"] = "enabled";
})(OnLoginStartupStatus = exports.OnLoginStartupStatus || (exports.OnLoginStartupStatus = {}));
var TeamEphemeralKeyType;
(function (TeamEphemeralKeyType) {
    TeamEphemeralKeyType["TEAM"] = "team";
    TeamEphemeralKeyType["TEAMBOT"] = "teambot";
})(TeamEphemeralKeyType = exports.TeamEphemeralKeyType || (exports.TeamEphemeralKeyType = {}));
var FolderType;
(function (FolderType) {
    FolderType["UNKNOWN"] = "unknown";
    FolderType["PRIVATE"] = "private";
    FolderType["PUBLIC"] = "public";
    FolderType["TEAM"] = "team";
})(FolderType = exports.FolderType || (exports.FolderType = {}));
var FolderConflictType;
(function (FolderConflictType) {
    FolderConflictType["NONE"] = "none";
    FolderConflictType["IN_CONFLICT"] = "in_conflict";
    FolderConflictType["IN_CONFLICT_AND_STUCK"] = "in_conflict_and_stuck";
    FolderConflictType["CLEARED_CONFLICT"] = "cleared_conflict";
})(FolderConflictType = exports.FolderConflictType || (exports.FolderConflictType = {}));
var ConflictStateType;
(function (ConflictStateType) {
    ConflictStateType["NormalView"] = "normalview";
    ConflictStateType["ManualResolvingLocalView"] = "manualresolvinglocalview";
})(ConflictStateType = exports.ConflictStateType || (exports.ConflictStateType = {}));
var GitLocalMetadataVersion;
(function (GitLocalMetadataVersion) {
    GitLocalMetadataVersion["V1"] = "v1";
})(GitLocalMetadataVersion = exports.GitLocalMetadataVersion || (exports.GitLocalMetadataVersion = {}));
var GitPushType;
(function (GitPushType) {
    GitPushType["DEFAULT"] = "default";
    GitPushType["CREATEREPO"] = "createrepo";
    GitPushType["RENAMEREPO"] = "renamerepo";
})(GitPushType = exports.GitPushType || (exports.GitPushType = {}));
var GitRepoResultState;
(function (GitRepoResultState) {
    GitRepoResultState["ERR"] = "err";
    GitRepoResultState["OK"] = "ok";
})(GitRepoResultState = exports.GitRepoResultState || (exports.GitRepoResultState = {}));
var PushReason;
(function (PushReason) {
    PushReason["NONE"] = "none";
    PushReason["RECONNECTED"] = "reconnected";
    PushReason["NEW_DATA"] = "new_data";
})(PushReason = exports.PushReason || (exports.PushReason = {}));
var HomeScreenItemType;
(function (HomeScreenItemType) {
    HomeScreenItemType["TODO"] = "todo";
    HomeScreenItemType["PEOPLE"] = "people";
    HomeScreenItemType["ANNOUNCEMENT"] = "announcement";
})(HomeScreenItemType = exports.HomeScreenItemType || (exports.HomeScreenItemType = {}));
var AppLinkType;
(function (AppLinkType) {
    AppLinkType["NONE"] = "none";
    AppLinkType["PEOPLE"] = "people";
    AppLinkType["CHAT"] = "chat";
    AppLinkType["FILES"] = "files";
    AppLinkType["WALLET"] = "wallet";
    AppLinkType["GIT"] = "git";
    AppLinkType["DEVICES"] = "devices";
    AppLinkType["SETTINGS"] = "settings";
    AppLinkType["TEAMS"] = "teams";
})(AppLinkType = exports.AppLinkType || (exports.AppLinkType = {}));
var HomeScreenTodoType;
(function (HomeScreenTodoType) {
    HomeScreenTodoType["NONE"] = "none";
    HomeScreenTodoType["BIO"] = "bio";
    HomeScreenTodoType["PROOF"] = "proof";
    HomeScreenTodoType["DEVICE"] = "device";
    HomeScreenTodoType["FOLLOW"] = "follow";
    HomeScreenTodoType["CHAT"] = "chat";
    HomeScreenTodoType["PAPERKEY"] = "paperkey";
    HomeScreenTodoType["TEAM"] = "team";
    HomeScreenTodoType["FOLDER"] = "folder";
    HomeScreenTodoType["GIT_REPO"] = "git_repo";
    HomeScreenTodoType["TEAM_SHOWCASE"] = "team_showcase";
    HomeScreenTodoType["AVATAR_USER"] = "avatar_user";
    HomeScreenTodoType["AVATAR_TEAM"] = "avatar_team";
    HomeScreenTodoType["ADD_PHONE_NUMBER"] = "add_phone_number";
    HomeScreenTodoType["VERIFY_ALL_PHONE_NUMBER"] = "verify_all_phone_number";
    HomeScreenTodoType["VERIFY_ALL_EMAIL"] = "verify_all_email";
    HomeScreenTodoType["LEGACY_EMAIL_VISIBILITY"] = "legacy_email_visibility";
    HomeScreenTodoType["ADD_EMAIL"] = "add_email";
    HomeScreenTodoType["ANNONCEMENT_PLACEHOLDER"] = "annoncement_placeholder";
})(HomeScreenTodoType = exports.HomeScreenTodoType || (exports.HomeScreenTodoType = {}));
var HomeScreenPeopleNotificationType;
(function (HomeScreenPeopleNotificationType) {
    HomeScreenPeopleNotificationType["FOLLOWED"] = "followed";
    HomeScreenPeopleNotificationType["FOLLOWED_MULTI"] = "followed_multi";
    HomeScreenPeopleNotificationType["CONTACT"] = "contact";
    HomeScreenPeopleNotificationType["CONTACT_MULTI"] = "contact_multi";
})(HomeScreenPeopleNotificationType = exports.HomeScreenPeopleNotificationType || (exports.HomeScreenPeopleNotificationType = {}));
var Identify3RowState;
(function (Identify3RowState) {
    Identify3RowState["CHECKING"] = "checking";
    Identify3RowState["VALID"] = "valid";
    Identify3RowState["ERROR"] = "error";
    Identify3RowState["WARNING"] = "warning";
    Identify3RowState["REVOKED"] = "revoked";
})(Identify3RowState = exports.Identify3RowState || (exports.Identify3RowState = {}));
var Identify3RowColor;
(function (Identify3RowColor) {
    Identify3RowColor["BLUE"] = "blue";
    Identify3RowColor["RED"] = "red";
    Identify3RowColor["BLACK"] = "black";
    Identify3RowColor["GREEN"] = "green";
    Identify3RowColor["GRAY"] = "gray";
    Identify3RowColor["YELLOW"] = "yellow";
    Identify3RowColor["ORANGE"] = "orange";
})(Identify3RowColor = exports.Identify3RowColor || (exports.Identify3RowColor = {}));
var Identify3ResultType;
(function (Identify3ResultType) {
    Identify3ResultType["OK"] = "ok";
    Identify3ResultType["BROKEN"] = "broken";
    Identify3ResultType["NEEDS_UPGRADE"] = "needs_upgrade";
    Identify3ResultType["CANCELED"] = "canceled";
})(Identify3ResultType = exports.Identify3ResultType || (exports.Identify3ResultType = {}));
var TrackDiffType;
(function (TrackDiffType) {
    TrackDiffType["NONE"] = "none";
    TrackDiffType["ERROR"] = "error";
    TrackDiffType["CLASH"] = "clash";
    TrackDiffType["REVOKED"] = "revoked";
    TrackDiffType["UPGRADED"] = "upgraded";
    TrackDiffType["NEW"] = "new";
    TrackDiffType["REMOTE_FAIL"] = "remote_fail";
    TrackDiffType["REMOTE_WORKING"] = "remote_working";
    TrackDiffType["REMOTE_CHANGED"] = "remote_changed";
    TrackDiffType["NEW_ELDEST"] = "new_eldest";
    TrackDiffType["NONE_VIA_TEMPORARY"] = "none_via_temporary";
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
    TrackStatus["NEW_OK"] = "new_ok";
    TrackStatus["NEW_ZERO_PROOFS"] = "new_zero_proofs";
    TrackStatus["NEW_FAIL_PROOFS"] = "new_fail_proofs";
    TrackStatus["UPDATE_BROKEN_FAILED_PROOFS"] = "update_broken_failed_proofs";
    TrackStatus["UPDATE_NEW_PROOFS"] = "update_new_proofs";
    TrackStatus["UPDATE_OK"] = "update_ok";
    TrackStatus["UPDATE_BROKEN_REVOKED"] = "update_broken_revoked";
})(TrackStatus = exports.TrackStatus || (exports.TrackStatus = {}));
var IdentifyReasonType;
(function (IdentifyReasonType) {
    IdentifyReasonType["NONE"] = "none";
    IdentifyReasonType["ID"] = "id";
    IdentifyReasonType["TRACK"] = "track";
    IdentifyReasonType["ENCRYPT"] = "encrypt";
    IdentifyReasonType["DECRYPT"] = "decrypt";
    IdentifyReasonType["VERIFY"] = "verify";
    IdentifyReasonType["RESOURCE"] = "resource";
    IdentifyReasonType["BACKGROUND"] = "background";
})(IdentifyReasonType = exports.IdentifyReasonType || (exports.IdentifyReasonType = {}));
var CheckResultFreshness;
(function (CheckResultFreshness) {
    CheckResultFreshness["FRESH"] = "fresh";
    CheckResultFreshness["AGED"] = "aged";
    CheckResultFreshness["RANCID"] = "rancid";
})(CheckResultFreshness = exports.CheckResultFreshness || (exports.CheckResultFreshness = {}));
var DismissReasonType;
(function (DismissReasonType) {
    DismissReasonType["NONE"] = "none";
    DismissReasonType["HANDLED_ELSEWHERE"] = "handled_elsewhere";
})(DismissReasonType = exports.DismissReasonType || (exports.DismissReasonType = {}));
/**
 * Install status describes state of install for a component or service.
 */
var InstallStatus;
(function (InstallStatus) {
    InstallStatus["UNKNOWN"] = "unknown";
    InstallStatus["ERROR"] = "error";
    InstallStatus["NOT_INSTALLED"] = "not_installed";
    InstallStatus["INSTALLED"] = "installed";
})(InstallStatus = exports.InstallStatus || (exports.InstallStatus = {}));
var InstallAction;
(function (InstallAction) {
    InstallAction["UNKNOWN"] = "unknown";
    InstallAction["NONE"] = "none";
    InstallAction["UPGRADE"] = "upgrade";
    InstallAction["REINSTALL"] = "reinstall";
    InstallAction["INSTALL"] = "install";
})(InstallAction = exports.InstallAction || (exports.InstallAction = {}));
var FSStatusCode;
(function (FSStatusCode) {
    FSStatusCode["START"] = "start";
    FSStatusCode["FINISH"] = "finish";
    FSStatusCode["ERROR"] = "error";
})(FSStatusCode = exports.FSStatusCode || (exports.FSStatusCode = {}));
var FSNotificationType;
(function (FSNotificationType) {
    FSNotificationType["ENCRYPTING"] = "encrypting";
    FSNotificationType["DECRYPTING"] = "decrypting";
    FSNotificationType["SIGNING"] = "signing";
    FSNotificationType["VERIFYING"] = "verifying";
    FSNotificationType["REKEYING"] = "rekeying";
    FSNotificationType["CONNECTION"] = "connection";
    FSNotificationType["MD_READ_SUCCESS"] = "md_read_success";
    FSNotificationType["FILE_CREATED"] = "file_created";
    FSNotificationType["FILE_MODIFIED"] = "file_modified";
    FSNotificationType["FILE_DELETED"] = "file_deleted";
    FSNotificationType["FILE_RENAMED"] = "file_renamed";
    FSNotificationType["INITIALIZED"] = "initialized";
    FSNotificationType["SYNC_CONFIG_CHANGED"] = "sync_config_changed";
})(FSNotificationType = exports.FSNotificationType || (exports.FSNotificationType = {}));
var FSErrorType;
(function (FSErrorType) {
    FSErrorType["ACCESS_DENIED"] = "access_denied";
    FSErrorType["USER_NOT_FOUND"] = "user_not_found";
    FSErrorType["REVOKED_DATA_DETECTED"] = "revoked_data_detected";
    FSErrorType["NOT_LOGGED_IN"] = "not_logged_in";
    FSErrorType["TIMEOUT"] = "timeout";
    FSErrorType["REKEY_NEEDED"] = "rekey_needed";
    FSErrorType["BAD_FOLDER"] = "bad_folder";
    FSErrorType["NOT_IMPLEMENTED"] = "not_implemented";
    FSErrorType["OLD_VERSION"] = "old_version";
    FSErrorType["OVER_QUOTA"] = "over_quota";
    FSErrorType["NO_SIG_CHAIN"] = "no_sig_chain";
    FSErrorType["TOO_MANY_FOLDERS"] = "too_many_folders";
    FSErrorType["EXDEV_NOT_SUPPORTED"] = "exdev_not_supported";
    FSErrorType["DISK_LIMIT_REACHED"] = "disk_limit_reached";
    FSErrorType["DISK_CACHE_ERROR_LOG_SEND"] = "disk_cache_error_log_send";
    FSErrorType["OFFLINE_ARCHIVED"] = "offline_archived";
    FSErrorType["OFFLINE_UNSYNCED"] = "offline_unsynced";
})(FSErrorType = exports.FSErrorType || (exports.FSErrorType = {}));
var ResetPromptType;
(function (ResetPromptType) {
    ResetPromptType["COMPLETE"] = "complete";
    ResetPromptType["ENTER_NO_DEVICES"] = "enter_no_devices";
    ResetPromptType["ENTER_FORGOT_PW"] = "enter_forgot_pw";
    ResetPromptType["ENTER_RESET_PW"] = "enter_reset_pw";
})(ResetPromptType = exports.ResetPromptType || (exports.ResetPromptType = {}));
var ResetPromptResponse;
(function (ResetPromptResponse) {
    ResetPromptResponse["NOTHING"] = "nothing";
    ResetPromptResponse["CANCEL_RESET"] = "cancel_reset";
    ResetPromptResponse["CONFIRM_RESET"] = "confirm_reset";
})(ResetPromptResponse = exports.ResetPromptResponse || (exports.ResetPromptResponse = {}));
var PassphraseRecoveryPromptType;
(function (PassphraseRecoveryPromptType) {
    PassphraseRecoveryPromptType["ENCRYPTED_PGP_KEYS"] = "encrypted_pgp_keys";
})(PassphraseRecoveryPromptType = exports.PassphraseRecoveryPromptType || (exports.PassphraseRecoveryPromptType = {}));
var ResetMessage;
(function (ResetMessage) {
    ResetMessage["ENTERED_VERIFIED"] = "entered_verified";
    ResetMessage["ENTERED_PASSWORDLESS"] = "entered_passwordless";
    ResetMessage["REQUEST_VERIFIED"] = "request_verified";
    ResetMessage["NOT_COMPLETED"] = "not_completed";
    ResetMessage["CANCELED"] = "canceled";
    ResetMessage["COMPLETED"] = "completed";
    ResetMessage["RESET_LINK_SENT"] = "reset_link_sent";
})(ResetMessage = exports.ResetMessage || (exports.ResetMessage = {}));
var StatsSeverityLevel;
(function (StatsSeverityLevel) {
    StatsSeverityLevel["NORMAL"] = "normal";
    StatsSeverityLevel["WARNING"] = "warning";
    StatsSeverityLevel["SEVERE"] = "severe";
})(StatsSeverityLevel = exports.StatsSeverityLevel || (exports.StatsSeverityLevel = {}));
var ProcessType;
(function (ProcessType) {
    ProcessType["MAIN"] = "main";
    ProcessType["KBFS"] = "kbfs";
})(ProcessType = exports.ProcessType || (exports.ProcessType = {}));
var SaltpackOperationType;
(function (SaltpackOperationType) {
    SaltpackOperationType["ENCRYPT"] = "encrypt";
    SaltpackOperationType["DECRYPT"] = "decrypt";
    SaltpackOperationType["SIGN"] = "sign";
    SaltpackOperationType["VERIFY"] = "verify";
})(SaltpackOperationType = exports.SaltpackOperationType || (exports.SaltpackOperationType = {}));
var AvatarUpdateType;
(function (AvatarUpdateType) {
    AvatarUpdateType["NONE"] = "none";
    AvatarUpdateType["USER"] = "user";
    AvatarUpdateType["TEAM"] = "team";
})(AvatarUpdateType = exports.AvatarUpdateType || (exports.AvatarUpdateType = {}));
var RuntimeGroup;
(function (RuntimeGroup) {
    RuntimeGroup["UNKNOWN"] = "unknown";
    RuntimeGroup["LINUXLIKE"] = "linuxlike";
    RuntimeGroup["DARWINLIKE"] = "darwinlike";
    RuntimeGroup["WINDOWSLIKE"] = "windowslike";
})(RuntimeGroup = exports.RuntimeGroup || (exports.RuntimeGroup = {}));
var PassphraseType;
(function (PassphraseType) {
    PassphraseType["NONE"] = "none";
    PassphraseType["PAPER_KEY"] = "paper_key";
    PassphraseType["PASS_PHRASE"] = "pass_phrase";
    PassphraseType["VERIFY_PASS_PHRASE"] = "verify_pass_phrase";
})(PassphraseType = exports.PassphraseType || (exports.PassphraseType = {}));
var SignMode;
(function (SignMode) {
    SignMode["ATTACHED"] = "attached";
    SignMode["DETACHED"] = "detached";
    SignMode["CLEAR"] = "clear";
})(SignMode = exports.SignMode || (exports.SignMode = {}));
var FileType;
(function (FileType) {
    FileType["UNKNOWN"] = "unknown";
    FileType["DIRECTORY"] = "directory";
    FileType["FILE"] = "file";
})(FileType = exports.FileType || (exports.FileType = {}));
var ProofState;
(function (ProofState) {
    ProofState["NONE"] = "none";
    ProofState["OK"] = "ok";
    ProofState["TEMP_FAILURE"] = "temp_failure";
    ProofState["PERM_FAILURE"] = "perm_failure";
    ProofState["LOOKING"] = "looking";
    ProofState["SUPERSEDED"] = "superseded";
    ProofState["POSTED"] = "posted";
    ProofState["REVOKED"] = "revoked";
    ProofState["DELETED"] = "deleted";
    ProofState["UNKNOWN_TYPE"] = "unknown_type";
    ProofState["SIG_HINT_MISSING"] = "sig_hint_missing";
    ProofState["UNCHECKED"] = "unchecked";
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
    ProofStatus["NONE"] = "none";
    ProofStatus["OK"] = "ok";
    ProofStatus["LOCAL"] = "local";
    ProofStatus["FOUND"] = "found";
    ProofStatus["BASE_ERROR"] = "base_error";
    ProofStatus["HOST_UNREACHABLE"] = "host_unreachable";
    ProofStatus["PERMISSION_DENIED"] = "permission_denied";
    ProofStatus["FAILED_PARSE"] = "failed_parse";
    ProofStatus["DNS_ERROR"] = "dns_error";
    ProofStatus["AUTH_FAILED"] = "auth_failed";
    ProofStatus["HTTP_429"] = "http_429";
    ProofStatus["HTTP_500"] = "http_500";
    ProofStatus["TIMEOUT"] = "timeout";
    ProofStatus["INTERNAL_ERROR"] = "internal_error";
    ProofStatus["UNCHECKED"] = "unchecked";
    ProofStatus["MISSING_PVL"] = "missing_pvl";
    ProofStatus["BASE_HARD_ERROR"] = "base_hard_error";
    ProofStatus["NOT_FOUND"] = "not_found";
    ProofStatus["CONTENT_FAILURE"] = "content_failure";
    ProofStatus["BAD_USERNAME"] = "bad_username";
    ProofStatus["BAD_REMOTE_ID"] = "bad_remote_id";
    ProofStatus["TEXT_NOT_FOUND"] = "text_not_found";
    ProofStatus["BAD_ARGS"] = "bad_args";
    ProofStatus["CONTENT_MISSING"] = "content_missing";
    ProofStatus["TITLE_NOT_FOUND"] = "title_not_found";
    ProofStatus["SERVICE_ERROR"] = "service_error";
    ProofStatus["TOR_SKIPPED"] = "tor_skipped";
    ProofStatus["TOR_INCOMPATIBLE"] = "tor_incompatible";
    ProofStatus["HTTP_300"] = "http_300";
    ProofStatus["HTTP_400"] = "http_400";
    ProofStatus["HTTP_OTHER"] = "http_other";
    ProofStatus["EMPTY_JSON"] = "empty_json";
    ProofStatus["DELETED"] = "deleted";
    ProofStatus["SERVICE_DEAD"] = "service_dead";
    ProofStatus["BAD_SIGNATURE"] = "bad_signature";
    ProofStatus["BAD_API_URL"] = "bad_api_url";
    ProofStatus["UNKNOWN_TYPE"] = "unknown_type";
    ProofStatus["NO_HINT"] = "no_hint";
    ProofStatus["BAD_HINT_TEXT"] = "bad_hint_text";
    ProofStatus["INVALID_PVL"] = "invalid_pvl";
})(ProofStatus = exports.ProofStatus || (exports.ProofStatus = {}));
var ProofType;
(function (ProofType) {
    ProofType["NONE"] = "none";
    ProofType["KEYBASE"] = "keybase";
    ProofType["TWITTER"] = "twitter";
    ProofType["GITHUB"] = "github";
    ProofType["REDDIT"] = "reddit";
    ProofType["COINBASE"] = "coinbase";
    ProofType["HACKERNEWS"] = "hackernews";
    ProofType["FACEBOOK"] = "facebook";
    ProofType["GENERIC_SOCIAL"] = "generic_social";
    ProofType["GENERIC_WEB_SITE"] = "generic_web_site";
    ProofType["DNS"] = "dns";
    ProofType["PGP"] = "pgp";
    ProofType["ROOTER"] = "rooter";
})(ProofType = exports.ProofType || (exports.ProofType = {}));
var PromptOverwriteType;
(function (PromptOverwriteType) {
    PromptOverwriteType["SOCIAL"] = "social";
    PromptOverwriteType["SITE"] = "site";
})(PromptOverwriteType = exports.PromptOverwriteType || (exports.PromptOverwriteType = {}));
var ProvisionMethod;
(function (ProvisionMethod) {
    ProvisionMethod["DEVICE"] = "device";
    ProvisionMethod["PAPER_KEY"] = "paper_key";
    ProvisionMethod["PASSPHRASE"] = "passphrase";
    ProvisionMethod["GPG_IMPORT"] = "gpg_import";
    ProvisionMethod["GPG_SIGN"] = "gpg_sign";
})(ProvisionMethod = exports.ProvisionMethod || (exports.ProvisionMethod = {}));
var GPGMethod;
(function (GPGMethod) {
    GPGMethod["GPG_NONE"] = "gpg_none";
    GPGMethod["GPG_IMPORT"] = "gpg_import";
    GPGMethod["GPG_SIGN"] = "gpg_sign";
})(GPGMethod = exports.GPGMethod || (exports.GPGMethod = {}));
var ChooseType;
(function (ChooseType) {
    ChooseType["EXISTING_DEVICE"] = "existing_device";
    ChooseType["NEW_DEVICE"] = "new_device";
})(ChooseType = exports.ChooseType || (exports.ChooseType = {}));
var Reachable;
(function (Reachable) {
    Reachable["UNKNOWN"] = "unknown";
    Reachable["YES"] = "yes";
    Reachable["NO"] = "no";
})(Reachable = exports.Reachable || (exports.Reachable = {}));
var Outcome;
(function (Outcome) {
    Outcome["NONE"] = "none";
    Outcome["FIXED"] = "fixed";
    Outcome["IGNORED"] = "ignored";
})(Outcome = exports.Outcome || (exports.Outcome = {}));
var RekeyEventType;
(function (RekeyEventType) {
    RekeyEventType["NONE"] = "none";
    RekeyEventType["NOT_LOGGED_IN"] = "not_logged_in";
    RekeyEventType["API_ERROR"] = "api_error";
    RekeyEventType["NO_PROBLEMS"] = "no_problems";
    RekeyEventType["LOAD_ME_ERROR"] = "load_me_error";
    RekeyEventType["CURRENT_DEVICE_CAN_REKEY"] = "current_device_can_rekey";
    RekeyEventType["DEVICE_LOAD_ERROR"] = "device_load_error";
    RekeyEventType["HARASS"] = "harass";
    RekeyEventType["NO_GREGOR_MESSAGES"] = "no_gregor_messages";
})(RekeyEventType = exports.RekeyEventType || (exports.RekeyEventType = {}));
var ResetType;
(function (ResetType) {
    ResetType["NONE"] = "none";
    ResetType["RESET"] = "reset";
    ResetType["DELETE"] = "delete";
})(ResetType = exports.ResetType || (exports.ResetType = {}));
var AuthenticityType;
(function (AuthenticityType) {
    AuthenticityType["SIGNED"] = "signed";
    AuthenticityType["REPUDIABLE"] = "repudiable";
    AuthenticityType["ANONYMOUS"] = "anonymous";
})(AuthenticityType = exports.AuthenticityType || (exports.AuthenticityType = {}));
var SaltpackSenderType;
(function (SaltpackSenderType) {
    SaltpackSenderType["NOT_TRACKED"] = "not_tracked";
    SaltpackSenderType["UNKNOWN"] = "unknown";
    SaltpackSenderType["ANONYMOUS"] = "anonymous";
    SaltpackSenderType["TRACKING_BROKE"] = "tracking_broke";
    SaltpackSenderType["TRACKING_OK"] = "tracking_ok";
    SaltpackSenderType["SELF"] = "self";
    SaltpackSenderType["REVOKED"] = "revoked";
    SaltpackSenderType["EXPIRED"] = "expired";
})(SaltpackSenderType = exports.SaltpackSenderType || (exports.SaltpackSenderType = {}));
var KBFSArchivedType;
(function (KBFSArchivedType) {
    KBFSArchivedType["REVISION"] = "revision";
    KBFSArchivedType["TIME"] = "time";
    KBFSArchivedType["TIME_STRING"] = "time_string";
    KBFSArchivedType["REL_TIME_STRING"] = "rel_time_string";
})(KBFSArchivedType = exports.KBFSArchivedType || (exports.KBFSArchivedType = {}));
var PathType;
(function (PathType) {
    PathType["LOCAL"] = "local";
    PathType["KBFS"] = "kbfs";
    PathType["KBFS_ARCHIVED"] = "kbfs_archived";
})(PathType = exports.PathType || (exports.PathType = {}));
var DirentType;
(function (DirentType) {
    DirentType["FILE"] = "file";
    DirentType["DIR"] = "dir";
    DirentType["SYM"] = "sym";
    DirentType["EXEC"] = "exec";
})(DirentType = exports.DirentType || (exports.DirentType = {}));
var PrefetchStatus;
(function (PrefetchStatus) {
    PrefetchStatus["NOT_STARTED"] = "not_started";
    PrefetchStatus["IN_PROGRESS"] = "in_progress";
    PrefetchStatus["COMPLETE"] = "complete";
})(PrefetchStatus = exports.PrefetchStatus || (exports.PrefetchStatus = {}));
var RevisionSpanType;
(function (RevisionSpanType) {
    RevisionSpanType["DEFAULT"] = "default";
    RevisionSpanType["LAST_FIVE"] = "last_five";
})(RevisionSpanType = exports.RevisionSpanType || (exports.RevisionSpanType = {}));
var OpenFlags;
(function (OpenFlags) {
    OpenFlags["READ"] = "read";
    OpenFlags["REPLACE"] = "replace";
    OpenFlags["EXISTING"] = "existing";
    OpenFlags["WRITE"] = "write";
    OpenFlags["APPEND"] = "append";
    OpenFlags["DIRECTORY"] = "directory";
})(OpenFlags = exports.OpenFlags || (exports.OpenFlags = {}));
var AsyncOps;
(function (AsyncOps) {
    AsyncOps["LIST"] = "list";
    AsyncOps["LIST_RECURSIVE"] = "list_recursive";
    AsyncOps["READ"] = "read";
    AsyncOps["WRITE"] = "write";
    AsyncOps["COPY"] = "copy";
    AsyncOps["MOVE"] = "move";
    AsyncOps["REMOVE"] = "remove";
    AsyncOps["LIST_RECURSIVE_TO_DEPTH"] = "list_recursive_to_depth";
    AsyncOps["GET_REVISIONS"] = "get_revisions";
})(AsyncOps = exports.AsyncOps || (exports.AsyncOps = {}));
var ListFilter;
(function (ListFilter) {
    ListFilter["NO_FILTER"] = "no_filter";
    ListFilter["FILTER_ALL_HIDDEN"] = "filter_all_hidden";
    ListFilter["FILTER_SYSTEM_HIDDEN"] = "filter_system_hidden";
})(ListFilter = exports.ListFilter || (exports.ListFilter = {}));
var FolderSyncMode;
(function (FolderSyncMode) {
    FolderSyncMode["DISABLED"] = "disabled";
    FolderSyncMode["ENABLED"] = "enabled";
    FolderSyncMode["PARTIAL"] = "partial";
})(FolderSyncMode = exports.FolderSyncMode || (exports.FolderSyncMode = {}));
var KbfsOnlineStatus;
(function (KbfsOnlineStatus) {
    KbfsOnlineStatus["OFFLINE"] = "offline";
    KbfsOnlineStatus["TRYING"] = "trying";
    KbfsOnlineStatus["ONLINE"] = "online";
})(KbfsOnlineStatus = exports.KbfsOnlineStatus || (exports.KbfsOnlineStatus = {}));
var SubscriptionTopic;
(function (SubscriptionTopic) {
    SubscriptionTopic["FAVORITES"] = "favorites";
    SubscriptionTopic["JOURNAL_STATUS"] = "journal_status";
    SubscriptionTopic["ONLINE_STATUS"] = "online_status";
    SubscriptionTopic["DOWNLOAD_STATUS"] = "download_status";
    SubscriptionTopic["FILES_TAB_BADGE"] = "files_tab_badge";
    SubscriptionTopic["OVERALL_SYNC_STATUS"] = "overall_sync_status";
    SubscriptionTopic["SETTINGS"] = "settings";
})(SubscriptionTopic = exports.SubscriptionTopic || (exports.SubscriptionTopic = {}));
var PathSubscriptionTopic;
(function (PathSubscriptionTopic) {
    PathSubscriptionTopic["CHILDREN"] = "children";
    PathSubscriptionTopic["STAT"] = "stat";
})(PathSubscriptionTopic = exports.PathSubscriptionTopic || (exports.PathSubscriptionTopic = {}));
var FilesTabBadge;
(function (FilesTabBadge) {
    FilesTabBadge["NONE"] = "none";
    FilesTabBadge["UPLOADING_STUCK"] = "uploading_stuck";
    FilesTabBadge["AWAITING_UPLOAD"] = "awaiting_upload";
    FilesTabBadge["UPLOADING"] = "uploading";
})(FilesTabBadge = exports.FilesTabBadge || (exports.FilesTabBadge = {}));
var GUIViewType;
(function (GUIViewType) {
    GUIViewType["DEFAULT"] = "default";
    GUIViewType["TEXT"] = "text";
    GUIViewType["IMAGE"] = "image";
    GUIViewType["AUDIO"] = "audio";
    GUIViewType["VIDEO"] = "video";
    GUIViewType["PDF"] = "pdf";
})(GUIViewType = exports.GUIViewType || (exports.GUIViewType = {}));
var TeamRole;
(function (TeamRole) {
    TeamRole["NONE"] = "none";
    TeamRole["READER"] = "reader";
    TeamRole["WRITER"] = "writer";
    TeamRole["ADMIN"] = "admin";
    TeamRole["OWNER"] = "owner";
    TeamRole["BOT"] = "bot";
    TeamRole["RESTRICTEDBOT"] = "restrictedbot";
})(TeamRole = exports.TeamRole || (exports.TeamRole = {}));
var TeamApplication;
(function (TeamApplication) {
    TeamApplication["KBFS"] = "kbfs";
    TeamApplication["CHAT"] = "chat";
    TeamApplication["SALTPACK"] = "saltpack";
    TeamApplication["GIT_METADATA"] = "git_metadata";
    TeamApplication["SEITAN_INVITE_TOKEN"] = "seitan_invite_token";
    TeamApplication["STELLAR_RELAY"] = "stellar_relay";
    TeamApplication["KVSTORE"] = "kvstore";
})(TeamApplication = exports.TeamApplication || (exports.TeamApplication = {}));
var TeamStatus;
(function (TeamStatus) {
    TeamStatus["NONE"] = "none";
    TeamStatus["LIVE"] = "live";
    TeamStatus["DELETED"] = "deleted";
    TeamStatus["ABANDONED"] = "abandoned";
})(TeamStatus = exports.TeamStatus || (exports.TeamStatus = {}));
var AuditMode;
(function (AuditMode) {
    AuditMode["STANDARD"] = "standard";
    AuditMode["JUST_CREATED"] = "just_created";
    AuditMode["SKIP"] = "skip";
    AuditMode["STANDARD_NO_HIDDEN"] = "standard_no_hidden";
})(AuditMode = exports.AuditMode || (exports.AuditMode = {}));
var PTKType;
(function (PTKType) {
    PTKType["READER"] = "reader";
})(PTKType = exports.PTKType || (exports.PTKType = {}));
var PerTeamSeedCheckVersion;
(function (PerTeamSeedCheckVersion) {
    PerTeamSeedCheckVersion["V1"] = "v1";
})(PerTeamSeedCheckVersion = exports.PerTeamSeedCheckVersion || (exports.PerTeamSeedCheckVersion = {}));
var TeamMemberStatus;
(function (TeamMemberStatus) {
    TeamMemberStatus["ACTIVE"] = "active";
    TeamMemberStatus["RESET"] = "reset";
    TeamMemberStatus["DELETED"] = "deleted";
})(TeamMemberStatus = exports.TeamMemberStatus || (exports.TeamMemberStatus = {}));
var RatchetType;
(function (RatchetType) {
    RatchetType["MAIN"] = "main";
    RatchetType["BLINDED"] = "blinded";
    RatchetType["SELF"] = "self";
    RatchetType["UNCOMMITTED"] = "uncommitted";
})(RatchetType = exports.RatchetType || (exports.RatchetType = {}));
var AuditVersion;
(function (AuditVersion) {
    AuditVersion["V0"] = "v0";
    AuditVersion["V1"] = "v1";
    AuditVersion["V2"] = "v2";
    AuditVersion["V3"] = "v3";
    AuditVersion["V4"] = "v4";
})(AuditVersion = exports.AuditVersion || (exports.AuditVersion = {}));
var TeamInviteCategory;
(function (TeamInviteCategory) {
    TeamInviteCategory["NONE"] = "none";
    TeamInviteCategory["UNKNOWN"] = "unknown";
    TeamInviteCategory["KEYBASE"] = "keybase";
    TeamInviteCategory["EMAIL"] = "email";
    TeamInviteCategory["SBS"] = "sbs";
    TeamInviteCategory["SEITAN"] = "seitan";
    TeamInviteCategory["PHONE"] = "phone";
})(TeamInviteCategory = exports.TeamInviteCategory || (exports.TeamInviteCategory = {}));
var SeitanKeyAndLabelVersion;
(function (SeitanKeyAndLabelVersion) {
    SeitanKeyAndLabelVersion["V1"] = "v1";
    SeitanKeyAndLabelVersion["V2"] = "v2";
})(SeitanKeyAndLabelVersion = exports.SeitanKeyAndLabelVersion || (exports.SeitanKeyAndLabelVersion = {}));
var SeitanKeyLabelType;
(function (SeitanKeyLabelType) {
    SeitanKeyLabelType["SMS"] = "sms";
})(SeitanKeyLabelType = exports.SeitanKeyLabelType || (exports.SeitanKeyLabelType = {}));
var RotationType;
(function (RotationType) {
    RotationType["VISIBLE"] = "visible";
    RotationType["HIDDEN"] = "hidden";
    RotationType["CLKR"] = "clkr";
})(RotationType = exports.RotationType || (exports.RotationType = {}));
var TLFIdentifyBehavior;
(function (TLFIdentifyBehavior) {
    TLFIdentifyBehavior["UNSET"] = "unset";
    TLFIdentifyBehavior["CHAT_CLI"] = "chat_cli";
    TLFIdentifyBehavior["CHAT_GUI"] = "chat_gui";
    TLFIdentifyBehavior["REMOVED_AND_UNUSED"] = "removed_and_unused";
    TLFIdentifyBehavior["KBFS_REKEY"] = "kbfs_rekey";
    TLFIdentifyBehavior["KBFS_QR"] = "kbfs_qr";
    TLFIdentifyBehavior["CHAT_SKIP"] = "chat_skip";
    TLFIdentifyBehavior["SALTPACK"] = "saltpack";
    TLFIdentifyBehavior["CLI"] = "cli";
    TLFIdentifyBehavior["GUI"] = "gui";
    TLFIdentifyBehavior["DEFAULT_KBFS"] = "default_kbfs";
    TLFIdentifyBehavior["KBFS_CHAT"] = "kbfs_chat";
    TLFIdentifyBehavior["RESOLVE_AND_CHECK"] = "resolve_and_check";
    TLFIdentifyBehavior["GUI_PROFILE"] = "gui_profile";
    TLFIdentifyBehavior["KBFS_INIT"] = "kbfs_init";
    TLFIdentifyBehavior["FS_GUI"] = "fs_gui";
})(TLFIdentifyBehavior = exports.TLFIdentifyBehavior || (exports.TLFIdentifyBehavior = {}));
var PromptDefault;
(function (PromptDefault) {
    PromptDefault["NONE"] = "none";
    PromptDefault["YES"] = "yes";
    PromptDefault["NO"] = "no";
})(PromptDefault = exports.PromptDefault || (exports.PromptDefault = {}));
var KeyType;
(function (KeyType) {
    KeyType["NONE"] = "none";
    KeyType["NACL"] = "nacl";
    KeyType["PGP"] = "pgp";
})(KeyType = exports.KeyType || (exports.KeyType = {}));
var UPK2MinorVersion;
(function (UPK2MinorVersion) {
    UPK2MinorVersion["V0"] = "v0";
    UPK2MinorVersion["V1"] = "v1";
    UPK2MinorVersion["V2"] = "v2";
    UPK2MinorVersion["V3"] = "v3";
    UPK2MinorVersion["V4"] = "v4";
    UPK2MinorVersion["V5"] = "v5";
    UPK2MinorVersion["V6"] = "v6";
})(UPK2MinorVersion = exports.UPK2MinorVersion || (exports.UPK2MinorVersion = {}));
var UPAKVersion;
(function (UPAKVersion) {
    UPAKVersion["V1"] = "v1";
    UPAKVersion["V2"] = "v2";
})(UPAKVersion = exports.UPAKVersion || (exports.UPAKVersion = {}));
var UPKLiteMinorVersion;
(function (UPKLiteMinorVersion) {
    UPKLiteMinorVersion["V0"] = "v0";
})(UPKLiteMinorVersion = exports.UPKLiteMinorVersion || (exports.UPKLiteMinorVersion = {}));
/**
 * PassphraseState values are used in .config.json, so should not be changed without a migration strategy
 */
var PassphraseState;
(function (PassphraseState) {
    PassphraseState["KNOWN"] = "known";
    PassphraseState["RANDOM"] = "random";
})(PassphraseState = exports.PassphraseState || (exports.PassphraseState = {}));
var UserBlockType;
(function (UserBlockType) {
    UserBlockType["CHAT"] = "chat";
    UserBlockType["FOLLOW"] = "follow";
})(UserBlockType = exports.UserBlockType || (exports.UserBlockType = {}));
//# sourceMappingURL=index.js.map