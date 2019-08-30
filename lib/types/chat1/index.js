"use strict";
/*
 * chat.1
 *
 * Auto-generated to TypeScript types by avdl-compiler v1.4.1 (https://github.com/keybase/node-avdl-compiler)
 * Input files:
 * - ../client/protocol/avdl/chat1/api.avdl
 * - ../client/protocol/avdl/chat1/chat_ui.avdl
 * - ../client/protocol/avdl/chat1/commands.avdl
 * - ../client/protocol/avdl/chat1/common.avdl
 * - ../client/protocol/avdl/chat1/gregor.avdl
 * - ../client/protocol/avdl/chat1/local.avdl
 * - ../client/protocol/avdl/chat1/notify.avdl
 * - ../client/protocol/avdl/chat1/remote.avdl
 * - ../client/protocol/avdl/chat1/unfurl.avdl
 */
Object.defineProperty(exports, "__esModule", { value: true });
var UIParticipantType;
(function (UIParticipantType) {
    UIParticipantType[UIParticipantType["NONE"] = 0] = "NONE";
    UIParticipantType[UIParticipantType["USER"] = 1] = "USER";
    UIParticipantType[UIParticipantType["PHONENO"] = 2] = "PHONENO";
    UIParticipantType[UIParticipantType["EMAIL"] = 3] = "EMAIL";
})(UIParticipantType = exports.UIParticipantType || (exports.UIParticipantType = {}));
var MessageUnboxedState;
(function (MessageUnboxedState) {
    MessageUnboxedState[MessageUnboxedState["VALID"] = 1] = "VALID";
    MessageUnboxedState[MessageUnboxedState["ERROR"] = 2] = "ERROR";
    MessageUnboxedState[MessageUnboxedState["OUTBOX"] = 3] = "OUTBOX";
    MessageUnboxedState[MessageUnboxedState["PLACEHOLDER"] = 4] = "PLACEHOLDER";
})(MessageUnboxedState = exports.MessageUnboxedState || (exports.MessageUnboxedState = {}));
var UITextDecorationTyp;
(function (UITextDecorationTyp) {
    UITextDecorationTyp[UITextDecorationTyp["PAYMENT"] = 0] = "PAYMENT";
    UITextDecorationTyp[UITextDecorationTyp["ATMENTION"] = 1] = "ATMENTION";
    UITextDecorationTyp[UITextDecorationTyp["CHANNELNAMEMENTION"] = 2] = "CHANNELNAMEMENTION";
    UITextDecorationTyp[UITextDecorationTyp["MAYBEMENTION"] = 3] = "MAYBEMENTION";
    UITextDecorationTyp[UITextDecorationTyp["LINK"] = 4] = "LINK";
    UITextDecorationTyp[UITextDecorationTyp["MAILTO"] = 5] = "MAILTO";
})(UITextDecorationTyp = exports.UITextDecorationTyp || (exports.UITextDecorationTyp = {}));
var UIMaybeMentionStatus;
(function (UIMaybeMentionStatus) {
    UIMaybeMentionStatus[UIMaybeMentionStatus["UNKNOWN"] = 0] = "UNKNOWN";
    UIMaybeMentionStatus[UIMaybeMentionStatus["USER"] = 1] = "USER";
    UIMaybeMentionStatus[UIMaybeMentionStatus["TEAM"] = 2] = "TEAM";
    UIMaybeMentionStatus[UIMaybeMentionStatus["NOTHING"] = 3] = "NOTHING";
})(UIMaybeMentionStatus = exports.UIMaybeMentionStatus || (exports.UIMaybeMentionStatus = {}));
var UIChatThreadStatusTyp;
(function (UIChatThreadStatusTyp) {
    UIChatThreadStatusTyp[UIChatThreadStatusTyp["NONE"] = 0] = "NONE";
    UIChatThreadStatusTyp[UIChatThreadStatusTyp["SERVER"] = 1] = "SERVER";
    UIChatThreadStatusTyp[UIChatThreadStatusTyp["VALIDATING"] = 2] = "VALIDATING";
    UIChatThreadStatusTyp[UIChatThreadStatusTyp["VALIDATED"] = 3] = "VALIDATED";
})(UIChatThreadStatusTyp = exports.UIChatThreadStatusTyp || (exports.UIChatThreadStatusTyp = {}));
var UICoinFlipPhase;
(function (UICoinFlipPhase) {
    UICoinFlipPhase[UICoinFlipPhase["COMMITMENT"] = 0] = "COMMITMENT";
    UICoinFlipPhase[UICoinFlipPhase["REVEALS"] = 1] = "REVEALS";
    UICoinFlipPhase[UICoinFlipPhase["COMPLETE"] = 2] = "COMPLETE";
    UICoinFlipPhase[UICoinFlipPhase["ERROR"] = 3] = "ERROR";
})(UICoinFlipPhase = exports.UICoinFlipPhase || (exports.UICoinFlipPhase = {}));
var UICoinFlipErrorTyp;
(function (UICoinFlipErrorTyp) {
    UICoinFlipErrorTyp[UICoinFlipErrorTyp["GENERIC"] = 0] = "GENERIC";
    UICoinFlipErrorTyp[UICoinFlipErrorTyp["ABSENTEE"] = 1] = "ABSENTEE";
    UICoinFlipErrorTyp[UICoinFlipErrorTyp["TIMEOUT"] = 2] = "TIMEOUT";
    UICoinFlipErrorTyp[UICoinFlipErrorTyp["ABORTED"] = 3] = "ABORTED";
    UICoinFlipErrorTyp[UICoinFlipErrorTyp["DUPREG"] = 4] = "DUPREG";
    UICoinFlipErrorTyp[UICoinFlipErrorTyp["DUPCOMMITCOMPLETE"] = 5] = "DUPCOMMITCOMPLETE";
    UICoinFlipErrorTyp[UICoinFlipErrorTyp["DUPREVEAL"] = 6] = "DUPREVEAL";
    UICoinFlipErrorTyp[UICoinFlipErrorTyp["COMMITMISMATCH"] = 7] = "COMMITMISMATCH";
})(UICoinFlipErrorTyp = exports.UICoinFlipErrorTyp || (exports.UICoinFlipErrorTyp = {}));
var UICoinFlipResultTyp;
(function (UICoinFlipResultTyp) {
    UICoinFlipResultTyp[UICoinFlipResultTyp["NUMBER"] = 0] = "NUMBER";
    UICoinFlipResultTyp[UICoinFlipResultTyp["SHUFFLE"] = 1] = "SHUFFLE";
    UICoinFlipResultTyp[UICoinFlipResultTyp["DECK"] = 2] = "DECK";
    UICoinFlipResultTyp[UICoinFlipResultTyp["HANDS"] = 3] = "HANDS";
    UICoinFlipResultTyp[UICoinFlipResultTyp["COIN"] = 4] = "COIN";
})(UICoinFlipResultTyp = exports.UICoinFlipResultTyp || (exports.UICoinFlipResultTyp = {}));
var UICommandStatusDisplayTyp;
(function (UICommandStatusDisplayTyp) {
    UICommandStatusDisplayTyp[UICommandStatusDisplayTyp["STATUS"] = 0] = "STATUS";
    UICommandStatusDisplayTyp[UICommandStatusDisplayTyp["WARNING"] = 1] = "WARNING";
    UICommandStatusDisplayTyp[UICommandStatusDisplayTyp["ERROR"] = 2] = "ERROR";
})(UICommandStatusDisplayTyp = exports.UICommandStatusDisplayTyp || (exports.UICommandStatusDisplayTyp = {}));
var UICommandStatusActionTyp;
(function (UICommandStatusActionTyp) {
    UICommandStatusActionTyp[UICommandStatusActionTyp["APPSETTINGS"] = 0] = "APPSETTINGS";
})(UICommandStatusActionTyp = exports.UICommandStatusActionTyp || (exports.UICommandStatusActionTyp = {}));
var UIBotCommandsUpdateStatus;
(function (UIBotCommandsUpdateStatus) {
    UIBotCommandsUpdateStatus[UIBotCommandsUpdateStatus["UPTODATE"] = 0] = "UPTODATE";
    UIBotCommandsUpdateStatus[UIBotCommandsUpdateStatus["UPDATING"] = 1] = "UPDATING";
    UIBotCommandsUpdateStatus[UIBotCommandsUpdateStatus["FAILED"] = 2] = "FAILED";
    UIBotCommandsUpdateStatus[UIBotCommandsUpdateStatus["BLANK"] = 3] = "BLANK";
})(UIBotCommandsUpdateStatus = exports.UIBotCommandsUpdateStatus || (exports.UIBotCommandsUpdateStatus = {}));
var ConversationCommandGroupsTyp;
(function (ConversationCommandGroupsTyp) {
    ConversationCommandGroupsTyp[ConversationCommandGroupsTyp["BUILTIN"] = 0] = "BUILTIN";
    ConversationCommandGroupsTyp[ConversationCommandGroupsTyp["CUSTOM"] = 1] = "CUSTOM";
    ConversationCommandGroupsTyp[ConversationCommandGroupsTyp["NONE"] = 2] = "NONE";
})(ConversationCommandGroupsTyp = exports.ConversationCommandGroupsTyp || (exports.ConversationCommandGroupsTyp = {}));
var ConversationBuiltinCommandTyp;
(function (ConversationBuiltinCommandTyp) {
    ConversationBuiltinCommandTyp[ConversationBuiltinCommandTyp["NONE"] = 0] = "NONE";
    ConversationBuiltinCommandTyp[ConversationBuiltinCommandTyp["ADHOC"] = 1] = "ADHOC";
    ConversationBuiltinCommandTyp[ConversationBuiltinCommandTyp["SMALLTEAM"] = 2] = "SMALLTEAM";
    ConversationBuiltinCommandTyp[ConversationBuiltinCommandTyp["BIGTEAM"] = 3] = "BIGTEAM";
    ConversationBuiltinCommandTyp[ConversationBuiltinCommandTyp["BIGTEAMGENERAL"] = 4] = "BIGTEAMGENERAL";
})(ConversationBuiltinCommandTyp = exports.ConversationBuiltinCommandTyp || (exports.ConversationBuiltinCommandTyp = {}));
var ConversationExistence;
(function (ConversationExistence) {
    ConversationExistence[ConversationExistence["ACTIVE"] = 0] = "ACTIVE";
    ConversationExistence[ConversationExistence["ARCHIVED"] = 1] = "ARCHIVED";
    ConversationExistence[ConversationExistence["DELETED"] = 2] = "DELETED";
    ConversationExistence[ConversationExistence["ABANDONED"] = 3] = "ABANDONED";
})(ConversationExistence = exports.ConversationExistence || (exports.ConversationExistence = {}));
var ConversationMembersType;
(function (ConversationMembersType) {
    ConversationMembersType[ConversationMembersType["KBFS"] = 0] = "KBFS";
    ConversationMembersType[ConversationMembersType["TEAM"] = 1] = "TEAM";
    ConversationMembersType[ConversationMembersType["IMPTEAMNATIVE"] = 2] = "IMPTEAMNATIVE";
    ConversationMembersType[ConversationMembersType["IMPTEAMUPGRADE"] = 3] = "IMPTEAMUPGRADE";
})(ConversationMembersType = exports.ConversationMembersType || (exports.ConversationMembersType = {}));
var SyncInboxResType;
(function (SyncInboxResType) {
    SyncInboxResType[SyncInboxResType["CURRENT"] = 0] = "CURRENT";
    SyncInboxResType[SyncInboxResType["INCREMENTAL"] = 1] = "INCREMENTAL";
    SyncInboxResType[SyncInboxResType["CLEAR"] = 2] = "CLEAR";
})(SyncInboxResType = exports.SyncInboxResType || (exports.SyncInboxResType = {}));
var MessageType;
(function (MessageType) {
    MessageType[MessageType["NONE"] = 0] = "NONE";
    MessageType[MessageType["TEXT"] = 1] = "TEXT";
    MessageType[MessageType["ATTACHMENT"] = 2] = "ATTACHMENT";
    MessageType[MessageType["EDIT"] = 3] = "EDIT";
    MessageType[MessageType["DELETE"] = 4] = "DELETE";
    MessageType[MessageType["METADATA"] = 5] = "METADATA";
    MessageType[MessageType["TLFNAME"] = 6] = "TLFNAME";
    MessageType[MessageType["HEADLINE"] = 7] = "HEADLINE";
    MessageType[MessageType["ATTACHMENTUPLOADED"] = 8] = "ATTACHMENTUPLOADED";
    MessageType[MessageType["JOIN"] = 9] = "JOIN";
    MessageType[MessageType["LEAVE"] = 10] = "LEAVE";
    MessageType[MessageType["SYSTEM"] = 11] = "SYSTEM";
    MessageType[MessageType["DELETEHISTORY"] = 12] = "DELETEHISTORY";
    MessageType[MessageType["REACTION"] = 13] = "REACTION";
    MessageType[MessageType["SENDPAYMENT"] = 14] = "SENDPAYMENT";
    MessageType[MessageType["REQUESTPAYMENT"] = 15] = "REQUESTPAYMENT";
    MessageType[MessageType["UNFURL"] = 16] = "UNFURL";
    MessageType[MessageType["FLIP"] = 17] = "FLIP";
    MessageType[MessageType["PIN"] = 18] = "PIN";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var TopicType;
(function (TopicType) {
    TopicType[TopicType["NONE"] = 0] = "NONE";
    TopicType[TopicType["CHAT"] = 1] = "CHAT";
    TopicType[TopicType["DEV"] = 2] = "DEV";
    TopicType[TopicType["KBFSFILEEDIT"] = 3] = "KBFSFILEEDIT";
})(TopicType = exports.TopicType || (exports.TopicType = {}));
var TeamType;
(function (TeamType) {
    TeamType[TeamType["NONE"] = 0] = "NONE";
    TeamType[TeamType["SIMPLE"] = 1] = "SIMPLE";
    TeamType[TeamType["COMPLEX"] = 2] = "COMPLEX";
})(TeamType = exports.TeamType || (exports.TeamType = {}));
var NotificationKind;
(function (NotificationKind) {
    NotificationKind[NotificationKind["GENERIC"] = 0] = "GENERIC";
    NotificationKind[NotificationKind["ATMENTION"] = 1] = "ATMENTION";
})(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));
var GlobalAppNotificationSetting;
(function (GlobalAppNotificationSetting) {
    GlobalAppNotificationSetting[GlobalAppNotificationSetting["NEWMESSAGES"] = 0] = "NEWMESSAGES";
    GlobalAppNotificationSetting[GlobalAppNotificationSetting["PLAINTEXTMOBILE"] = 1] = "PLAINTEXTMOBILE";
    GlobalAppNotificationSetting[GlobalAppNotificationSetting["PLAINTEXTDESKTOP"] = 2] = "PLAINTEXTDESKTOP";
    GlobalAppNotificationSetting[GlobalAppNotificationSetting["DEFAULTSOUNDMOBILE"] = 3] = "DEFAULTSOUNDMOBILE";
    GlobalAppNotificationSetting[GlobalAppNotificationSetting["DISABLETYPING"] = 4] = "DISABLETYPING";
})(GlobalAppNotificationSetting = exports.GlobalAppNotificationSetting || (exports.GlobalAppNotificationSetting = {}));
var ConversationStatus;
(function (ConversationStatus) {
    ConversationStatus[ConversationStatus["UNFILED"] = 0] = "UNFILED";
    ConversationStatus[ConversationStatus["FAVORITE"] = 1] = "FAVORITE";
    ConversationStatus[ConversationStatus["IGNORED"] = 2] = "IGNORED";
    ConversationStatus[ConversationStatus["BLOCKED"] = 3] = "BLOCKED";
    ConversationStatus[ConversationStatus["MUTED"] = 4] = "MUTED";
    ConversationStatus[ConversationStatus["REPORTED"] = 5] = "REPORTED";
})(ConversationStatus = exports.ConversationStatus || (exports.ConversationStatus = {}));
var ConversationMemberStatus;
(function (ConversationMemberStatus) {
    ConversationMemberStatus[ConversationMemberStatus["ACTIVE"] = 0] = "ACTIVE";
    ConversationMemberStatus[ConversationMemberStatus["REMOVED"] = 1] = "REMOVED";
    ConversationMemberStatus[ConversationMemberStatus["LEFT"] = 2] = "LEFT";
    ConversationMemberStatus[ConversationMemberStatus["PREVIEW"] = 3] = "PREVIEW";
    ConversationMemberStatus[ConversationMemberStatus["RESET"] = 4] = "RESET";
    ConversationMemberStatus[ConversationMemberStatus["NEVER_JOINED"] = 5] = "NEVER_JOINED";
})(ConversationMemberStatus = exports.ConversationMemberStatus || (exports.ConversationMemberStatus = {}));
var InboxResType;
(function (InboxResType) {
    InboxResType[InboxResType["VERSIONHIT"] = 0] = "VERSIONHIT";
    InboxResType[InboxResType["FULL"] = 1] = "FULL";
})(InboxResType = exports.InboxResType || (exports.InboxResType = {}));
var RetentionPolicyType;
(function (RetentionPolicyType) {
    RetentionPolicyType[RetentionPolicyType["NONE"] = 0] = "NONE";
    RetentionPolicyType[RetentionPolicyType["RETAIN"] = 1] = "RETAIN";
    RetentionPolicyType[RetentionPolicyType["EXPIRE"] = 2] = "EXPIRE";
    RetentionPolicyType[RetentionPolicyType["INHERIT"] = 3] = "INHERIT";
    RetentionPolicyType[RetentionPolicyType["EPHEMERAL"] = 4] = "EPHEMERAL";
})(RetentionPolicyType = exports.RetentionPolicyType || (exports.RetentionPolicyType = {}));
var GetThreadReason;
(function (GetThreadReason) {
    GetThreadReason[GetThreadReason["GENERAL"] = 0] = "GENERAL";
    GetThreadReason[GetThreadReason["PUSH"] = 1] = "PUSH";
    GetThreadReason[GetThreadReason["FOREGROUND"] = 2] = "FOREGROUND";
    GetThreadReason[GetThreadReason["BACKGROUNDCONVLOAD"] = 3] = "BACKGROUNDCONVLOAD";
    GetThreadReason[GetThreadReason["FIXRETRY"] = 4] = "FIXRETRY";
    GetThreadReason[GetThreadReason["PREPARE"] = 5] = "PREPARE";
    GetThreadReason[GetThreadReason["SEARCHER"] = 6] = "SEARCHER";
    GetThreadReason[GetThreadReason["INDEXED_SEARCH"] = 7] = "INDEXED_SEARCH";
    GetThreadReason[GetThreadReason["KBFSFILEACTIVITY"] = 8] = "KBFSFILEACTIVITY";
    GetThreadReason[GetThreadReason["COINFLIP"] = 9] = "COINFLIP";
    GetThreadReason[GetThreadReason["BOTCOMMANDS"] = 10] = "BOTCOMMANDS";
})(GetThreadReason = exports.GetThreadReason || (exports.GetThreadReason = {}));
var ReIndexingMode;
(function (ReIndexingMode) {
    ReIndexingMode[ReIndexingMode["NONE"] = 0] = "NONE";
    ReIndexingMode[ReIndexingMode["PRESEARCH_SYNC"] = 1] = "PRESEARCH_SYNC";
    ReIndexingMode[ReIndexingMode["POSTSEARCH_SYNC"] = 2] = "POSTSEARCH_SYNC";
})(ReIndexingMode = exports.ReIndexingMode || (exports.ReIndexingMode = {}));
var AssetMetadataType;
(function (AssetMetadataType) {
    AssetMetadataType[AssetMetadataType["NONE"] = 0] = "NONE";
    AssetMetadataType[AssetMetadataType["IMAGE"] = 1] = "IMAGE";
    AssetMetadataType[AssetMetadataType["VIDEO"] = 2] = "VIDEO";
    AssetMetadataType[AssetMetadataType["AUDIO"] = 3] = "AUDIO";
})(AssetMetadataType = exports.AssetMetadataType || (exports.AssetMetadataType = {}));
var AssetTag;
(function (AssetTag) {
    AssetTag[AssetTag["PRIMARY"] = 0] = "PRIMARY";
})(AssetTag = exports.AssetTag || (exports.AssetTag = {}));
var BotCommandsAdvertisementTyp;
(function (BotCommandsAdvertisementTyp) {
    BotCommandsAdvertisementTyp[BotCommandsAdvertisementTyp["PUBLIC"] = 0] = "PUBLIC";
    BotCommandsAdvertisementTyp[BotCommandsAdvertisementTyp["TLFID_MEMBERS"] = 1] = "TLFID_MEMBERS";
    BotCommandsAdvertisementTyp[BotCommandsAdvertisementTyp["TLFID_CONVS"] = 2] = "TLFID_CONVS";
})(BotCommandsAdvertisementTyp = exports.BotCommandsAdvertisementTyp || (exports.BotCommandsAdvertisementTyp = {}));
var TextPaymentResultTyp;
(function (TextPaymentResultTyp) {
    TextPaymentResultTyp[TextPaymentResultTyp["SENT"] = 0] = "SENT";
    TextPaymentResultTyp[TextPaymentResultTyp["ERROR"] = 1] = "ERROR";
})(TextPaymentResultTyp = exports.TextPaymentResultTyp || (exports.TextPaymentResultTyp = {}));
var MessageSystemType;
(function (MessageSystemType) {
    MessageSystemType[MessageSystemType["ADDEDTOTEAM"] = 0] = "ADDEDTOTEAM";
    MessageSystemType[MessageSystemType["INVITEADDEDTOTEAM"] = 1] = "INVITEADDEDTOTEAM";
    MessageSystemType[MessageSystemType["COMPLEXTEAM"] = 2] = "COMPLEXTEAM";
    MessageSystemType[MessageSystemType["CREATETEAM"] = 3] = "CREATETEAM";
    MessageSystemType[MessageSystemType["GITPUSH"] = 4] = "GITPUSH";
    MessageSystemType[MessageSystemType["CHANGEAVATAR"] = 5] = "CHANGEAVATAR";
    MessageSystemType[MessageSystemType["CHANGERETENTION"] = 6] = "CHANGERETENTION";
    MessageSystemType[MessageSystemType["BULKADDTOCONV"] = 7] = "BULKADDTOCONV";
})(MessageSystemType = exports.MessageSystemType || (exports.MessageSystemType = {}));
var OutboxStateType;
(function (OutboxStateType) {
    OutboxStateType[OutboxStateType["SENDING"] = 0] = "SENDING";
    OutboxStateType[OutboxStateType["ERROR"] = 1] = "ERROR";
})(OutboxStateType = exports.OutboxStateType || (exports.OutboxStateType = {}));
var OutboxErrorType;
(function (OutboxErrorType) {
    OutboxErrorType[OutboxErrorType["MISC"] = 0] = "MISC";
    OutboxErrorType[OutboxErrorType["OFFLINE"] = 1] = "OFFLINE";
    OutboxErrorType[OutboxErrorType["IDENTIFY"] = 2] = "IDENTIFY";
    OutboxErrorType[OutboxErrorType["TOOLONG"] = 3] = "TOOLONG";
    OutboxErrorType[OutboxErrorType["DUPLICATE"] = 4] = "DUPLICATE";
    OutboxErrorType[OutboxErrorType["EXPIRED"] = 5] = "EXPIRED";
    OutboxErrorType[OutboxErrorType["TOOMANYATTEMPTS"] = 6] = "TOOMANYATTEMPTS";
    OutboxErrorType[OutboxErrorType["ALREADY_DELETED"] = 7] = "ALREADY_DELETED";
    OutboxErrorType[OutboxErrorType["UPLOADFAILED"] = 8] = "UPLOADFAILED";
})(OutboxErrorType = exports.OutboxErrorType || (exports.OutboxErrorType = {}));
var HeaderPlaintextVersion;
(function (HeaderPlaintextVersion) {
    HeaderPlaintextVersion[HeaderPlaintextVersion["V1"] = 1] = "V1";
    HeaderPlaintextVersion[HeaderPlaintextVersion["V2"] = 2] = "V2";
    HeaderPlaintextVersion[HeaderPlaintextVersion["V3"] = 3] = "V3";
    HeaderPlaintextVersion[HeaderPlaintextVersion["V4"] = 4] = "V4";
    HeaderPlaintextVersion[HeaderPlaintextVersion["V5"] = 5] = "V5";
    HeaderPlaintextVersion[HeaderPlaintextVersion["V6"] = 6] = "V6";
    HeaderPlaintextVersion[HeaderPlaintextVersion["V7"] = 7] = "V7";
    HeaderPlaintextVersion[HeaderPlaintextVersion["V8"] = 8] = "V8";
    HeaderPlaintextVersion[HeaderPlaintextVersion["V9"] = 9] = "V9";
    HeaderPlaintextVersion[HeaderPlaintextVersion["V10"] = 10] = "V10";
})(HeaderPlaintextVersion = exports.HeaderPlaintextVersion || (exports.HeaderPlaintextVersion = {}));
var BodyPlaintextVersion;
(function (BodyPlaintextVersion) {
    BodyPlaintextVersion[BodyPlaintextVersion["V1"] = 1] = "V1";
    BodyPlaintextVersion[BodyPlaintextVersion["V2"] = 2] = "V2";
    BodyPlaintextVersion[BodyPlaintextVersion["V3"] = 3] = "V3";
    BodyPlaintextVersion[BodyPlaintextVersion["V4"] = 4] = "V4";
    BodyPlaintextVersion[BodyPlaintextVersion["V5"] = 5] = "V5";
    BodyPlaintextVersion[BodyPlaintextVersion["V6"] = 6] = "V6";
    BodyPlaintextVersion[BodyPlaintextVersion["V7"] = 7] = "V7";
    BodyPlaintextVersion[BodyPlaintextVersion["V8"] = 8] = "V8";
    BodyPlaintextVersion[BodyPlaintextVersion["V9"] = 9] = "V9";
    BodyPlaintextVersion[BodyPlaintextVersion["V10"] = 10] = "V10";
})(BodyPlaintextVersion = exports.BodyPlaintextVersion || (exports.BodyPlaintextVersion = {}));
var MessageUnboxedErrorType;
(function (MessageUnboxedErrorType) {
    MessageUnboxedErrorType[MessageUnboxedErrorType["MISC"] = 0] = "MISC";
    MessageUnboxedErrorType[MessageUnboxedErrorType["BADVERSION_CRITICAL"] = 1] = "BADVERSION_CRITICAL";
    MessageUnboxedErrorType[MessageUnboxedErrorType["BADVERSION"] = 2] = "BADVERSION";
    MessageUnboxedErrorType[MessageUnboxedErrorType["IDENTIFY"] = 3] = "IDENTIFY";
    MessageUnboxedErrorType[MessageUnboxedErrorType["EPHEMERAL"] = 4] = "EPHEMERAL";
    MessageUnboxedErrorType[MessageUnboxedErrorType["PAIRWISE_MISSING"] = 5] = "PAIRWISE_MISSING";
})(MessageUnboxedErrorType = exports.MessageUnboxedErrorType || (exports.MessageUnboxedErrorType = {}));
var ConversationErrorType;
(function (ConversationErrorType) {
    ConversationErrorType[ConversationErrorType["PERMANENT"] = 0] = "PERMANENT";
    ConversationErrorType[ConversationErrorType["MISSINGINFO"] = 1] = "MISSINGINFO";
    ConversationErrorType[ConversationErrorType["SELFREKEYNEEDED"] = 2] = "SELFREKEYNEEDED";
    ConversationErrorType[ConversationErrorType["OTHERREKEYNEEDED"] = 3] = "OTHERREKEYNEEDED";
    ConversationErrorType[ConversationErrorType["IDENTIFY"] = 4] = "IDENTIFY";
    ConversationErrorType[ConversationErrorType["TRANSIENT"] = 5] = "TRANSIENT";
    ConversationErrorType[ConversationErrorType["NONE"] = 6] = "NONE";
})(ConversationErrorType = exports.ConversationErrorType || (exports.ConversationErrorType = {}));
var MessageIDControlMode;
(function (MessageIDControlMode) {
    MessageIDControlMode[MessageIDControlMode["OLDERMESSAGES"] = 0] = "OLDERMESSAGES";
    MessageIDControlMode[MessageIDControlMode["NEWERMESSAGES"] = 1] = "NEWERMESSAGES";
    MessageIDControlMode[MessageIDControlMode["CENTERED"] = 2] = "CENTERED";
    MessageIDControlMode[MessageIDControlMode["UNREADLINE"] = 3] = "UNREADLINE";
})(MessageIDControlMode = exports.MessageIDControlMode || (exports.MessageIDControlMode = {}));
var GetThreadNonblockCbMode;
(function (GetThreadNonblockCbMode) {
    GetThreadNonblockCbMode[GetThreadNonblockCbMode["FULL"] = 0] = "FULL";
    GetThreadNonblockCbMode[GetThreadNonblockCbMode["INCREMENTAL"] = 1] = "INCREMENTAL";
})(GetThreadNonblockCbMode = exports.GetThreadNonblockCbMode || (exports.GetThreadNonblockCbMode = {}));
var GetThreadNonblockPgMode;
(function (GetThreadNonblockPgMode) {
    GetThreadNonblockPgMode[GetThreadNonblockPgMode["DEFAULT"] = 0] = "DEFAULT";
    GetThreadNonblockPgMode[GetThreadNonblockPgMode["SERVER"] = 1] = "SERVER";
})(GetThreadNonblockPgMode = exports.GetThreadNonblockPgMode || (exports.GetThreadNonblockPgMode = {}));
var PreviewLocationTyp;
(function (PreviewLocationTyp) {
    PreviewLocationTyp[PreviewLocationTyp["URL"] = 0] = "URL";
    PreviewLocationTyp[PreviewLocationTyp["FILE"] = 1] = "FILE";
    PreviewLocationTyp[PreviewLocationTyp["BYTES"] = 2] = "BYTES";
})(PreviewLocationTyp = exports.PreviewLocationTyp || (exports.PreviewLocationTyp = {}));
var UnfurlPromptAction;
(function (UnfurlPromptAction) {
    UnfurlPromptAction[UnfurlPromptAction["ALWAYS"] = 0] = "ALWAYS";
    UnfurlPromptAction[UnfurlPromptAction["NEVER"] = 1] = "NEVER";
    UnfurlPromptAction[UnfurlPromptAction["ACCEPT"] = 2] = "ACCEPT";
    UnfurlPromptAction[UnfurlPromptAction["NOTNOW"] = 3] = "NOTNOW";
    UnfurlPromptAction[UnfurlPromptAction["ONETIME"] = 4] = "ONETIME";
})(UnfurlPromptAction = exports.UnfurlPromptAction || (exports.UnfurlPromptAction = {}));
var GalleryItemTyp;
(function (GalleryItemTyp) {
    GalleryItemTyp[GalleryItemTyp["MEDIA"] = 0] = "MEDIA";
    GalleryItemTyp[GalleryItemTyp["LINK"] = 1] = "LINK";
    GalleryItemTyp[GalleryItemTyp["DOC"] = 2] = "DOC";
})(GalleryItemTyp = exports.GalleryItemTyp || (exports.GalleryItemTyp = {}));
var ChatActivitySource;
(function (ChatActivitySource) {
    ChatActivitySource[ChatActivitySource["LOCAL"] = 0] = "LOCAL";
    ChatActivitySource[ChatActivitySource["REMOTE"] = 1] = "REMOTE";
})(ChatActivitySource = exports.ChatActivitySource || (exports.ChatActivitySource = {}));
var ChatActivityType;
(function (ChatActivityType) {
    ChatActivityType[ChatActivityType["RESERVED"] = 0] = "RESERVED";
    ChatActivityType[ChatActivityType["INCOMING_MESSAGE"] = 1] = "INCOMING_MESSAGE";
    ChatActivityType[ChatActivityType["READ_MESSAGE"] = 2] = "READ_MESSAGE";
    ChatActivityType[ChatActivityType["NEW_CONVERSATION"] = 3] = "NEW_CONVERSATION";
    ChatActivityType[ChatActivityType["SET_STATUS"] = 4] = "SET_STATUS";
    ChatActivityType[ChatActivityType["FAILED_MESSAGE"] = 5] = "FAILED_MESSAGE";
    ChatActivityType[ChatActivityType["MEMBERS_UPDATE"] = 6] = "MEMBERS_UPDATE";
    ChatActivityType[ChatActivityType["SET_APP_NOTIFICATION_SETTINGS"] = 7] = "SET_APP_NOTIFICATION_SETTINGS";
    ChatActivityType[ChatActivityType["TEAMTYPE"] = 8] = "TEAMTYPE";
    ChatActivityType[ChatActivityType["EXPUNGE"] = 9] = "EXPUNGE";
    ChatActivityType[ChatActivityType["EPHEMERAL_PURGE"] = 10] = "EPHEMERAL_PURGE";
    ChatActivityType[ChatActivityType["REACTION_UPDATE"] = 11] = "REACTION_UPDATE";
    ChatActivityType[ChatActivityType["MESSAGES_UPDATED"] = 12] = "MESSAGES_UPDATED";
})(ChatActivityType = exports.ChatActivityType || (exports.ChatActivityType = {}));
var StaleUpdateType;
(function (StaleUpdateType) {
    StaleUpdateType[StaleUpdateType["CLEAR"] = 0] = "CLEAR";
    StaleUpdateType[StaleUpdateType["NEWACTIVITY"] = 1] = "NEWACTIVITY";
    StaleUpdateType[StaleUpdateType["CONVUPDATE"] = 2] = "CONVUPDATE";
})(StaleUpdateType = exports.StaleUpdateType || (exports.StaleUpdateType = {}));
var MessageBoxedVersion;
(function (MessageBoxedVersion) {
    MessageBoxedVersion[MessageBoxedVersion["VNONE"] = 0] = "VNONE";
    MessageBoxedVersion[MessageBoxedVersion["V1"] = 1] = "V1";
    MessageBoxedVersion[MessageBoxedVersion["V2"] = 2] = "V2";
    MessageBoxedVersion[MessageBoxedVersion["V3"] = 3] = "V3";
    MessageBoxedVersion[MessageBoxedVersion["V4"] = 4] = "V4";
})(MessageBoxedVersion = exports.MessageBoxedVersion || (exports.MessageBoxedVersion = {}));
var ChannelMention;
(function (ChannelMention) {
    ChannelMention[ChannelMention["NONE"] = 0] = "NONE";
    ChannelMention[ChannelMention["ALL"] = 1] = "ALL";
    ChannelMention[ChannelMention["HERE"] = 2] = "HERE";
})(ChannelMention = exports.ChannelMention || (exports.ChannelMention = {}));
var SyncAllProtVers;
(function (SyncAllProtVers) {
    SyncAllProtVers[SyncAllProtVers["V0"] = 0] = "V0";
    SyncAllProtVers[SyncAllProtVers["V1"] = 1] = "V1";
})(SyncAllProtVers = exports.SyncAllProtVers || (exports.SyncAllProtVers = {}));
var SyncAllNotificationType;
(function (SyncAllNotificationType) {
    SyncAllNotificationType[SyncAllNotificationType["STATE"] = 0] = "STATE";
    SyncAllNotificationType[SyncAllNotificationType["INCREMENTAL"] = 1] = "INCREMENTAL";
})(SyncAllNotificationType = exports.SyncAllNotificationType || (exports.SyncAllNotificationType = {}));
var ExternalAPIKeyTyp;
(function (ExternalAPIKeyTyp) {
    ExternalAPIKeyTyp[ExternalAPIKeyTyp["GOOGLEMAPS"] = 0] = "GOOGLEMAPS";
    ExternalAPIKeyTyp[ExternalAPIKeyTyp["GIPHY"] = 1] = "GIPHY";
})(ExternalAPIKeyTyp = exports.ExternalAPIKeyTyp || (exports.ExternalAPIKeyTyp = {}));
var BotInfoResponseTyp;
(function (BotInfoResponseTyp) {
    BotInfoResponseTyp[BotInfoResponseTyp["UPTODATE"] = 0] = "UPTODATE";
    BotInfoResponseTyp[BotInfoResponseTyp["INFO"] = 1] = "INFO";
})(BotInfoResponseTyp = exports.BotInfoResponseTyp || (exports.BotInfoResponseTyp = {}));
var UnfurlType;
(function (UnfurlType) {
    UnfurlType[UnfurlType["GENERIC"] = 0] = "GENERIC";
    UnfurlType[UnfurlType["YOUTUBE"] = 1] = "YOUTUBE";
    UnfurlType[UnfurlType["GIPHY"] = 2] = "GIPHY";
    UnfurlType[UnfurlType["MAPS"] = 3] = "MAPS";
})(UnfurlType = exports.UnfurlType || (exports.UnfurlType = {}));
var UnfurlMode;
(function (UnfurlMode) {
    UnfurlMode[UnfurlMode["ALWAYS"] = 0] = "ALWAYS";
    UnfurlMode[UnfurlMode["NEVER"] = 1] = "NEVER";
    UnfurlMode[UnfurlMode["WHITELISTED"] = 2] = "WHITELISTED";
})(UnfurlMode = exports.UnfurlMode || (exports.UnfurlMode = {}));
//# sourceMappingURL=index.js.map