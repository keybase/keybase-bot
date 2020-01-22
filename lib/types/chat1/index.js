"use strict";
/*
 * chat.1
 *
 * Auto-generated to TypeScript types by avdl-compiler v1.4.6 (https://github.com/keybase/node-avdl-compiler)
 * Input files:
 * - ../client/protocol/avdl/chat1/api.avdl
 * - ../client/protocol/avdl/chat1/blocking.avdl
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
var UIInboxBigTeamRowTyp;
(function (UIInboxBigTeamRowTyp) {
    UIInboxBigTeamRowTyp["LABEL"] = "label";
    UIInboxBigTeamRowTyp["CHANNEL"] = "channel";
})(UIInboxBigTeamRowTyp = exports.UIInboxBigTeamRowTyp || (exports.UIInboxBigTeamRowTyp = {}));
var UIParticipantType;
(function (UIParticipantType) {
    UIParticipantType["NONE"] = "none";
    UIParticipantType["USER"] = "user";
    UIParticipantType["PHONENO"] = "phoneno";
    UIParticipantType["EMAIL"] = "email";
})(UIParticipantType = exports.UIParticipantType || (exports.UIParticipantType = {}));
var MessageUnboxedState;
(function (MessageUnboxedState) {
    MessageUnboxedState["VALID"] = "valid";
    MessageUnboxedState["ERROR"] = "error";
    MessageUnboxedState["OUTBOX"] = "outbox";
    MessageUnboxedState["PLACEHOLDER"] = "placeholder";
    MessageUnboxedState["JOURNEYCARD"] = "journeycard";
})(MessageUnboxedState = exports.MessageUnboxedState || (exports.MessageUnboxedState = {}));
var UITextDecorationTyp;
(function (UITextDecorationTyp) {
    UITextDecorationTyp["PAYMENT"] = "payment";
    UITextDecorationTyp["ATMENTION"] = "atmention";
    UITextDecorationTyp["CHANNELNAMEMENTION"] = "channelnamemention";
    UITextDecorationTyp["MAYBEMENTION"] = "maybemention";
    UITextDecorationTyp["LINK"] = "link";
    UITextDecorationTyp["MAILTO"] = "mailto";
    UITextDecorationTyp["KBFSPATH"] = "kbfspath";
})(UITextDecorationTyp = exports.UITextDecorationTyp || (exports.UITextDecorationTyp = {}));
var UIMaybeMentionStatus;
(function (UIMaybeMentionStatus) {
    UIMaybeMentionStatus["UNKNOWN"] = "unknown";
    UIMaybeMentionStatus["USER"] = "user";
    UIMaybeMentionStatus["TEAM"] = "team";
    UIMaybeMentionStatus["NOTHING"] = "nothing";
})(UIMaybeMentionStatus = exports.UIMaybeMentionStatus || (exports.UIMaybeMentionStatus = {}));
var UIChatThreadStatusTyp;
(function (UIChatThreadStatusTyp) {
    UIChatThreadStatusTyp["NONE"] = "none";
    UIChatThreadStatusTyp["SERVER"] = "server";
    UIChatThreadStatusTyp["VALIDATING"] = "validating";
    UIChatThreadStatusTyp["VALIDATED"] = "validated";
})(UIChatThreadStatusTyp = exports.UIChatThreadStatusTyp || (exports.UIChatThreadStatusTyp = {}));
var UICoinFlipPhase;
(function (UICoinFlipPhase) {
    UICoinFlipPhase["COMMITMENT"] = "commitment";
    UICoinFlipPhase["REVEALS"] = "reveals";
    UICoinFlipPhase["COMPLETE"] = "complete";
    UICoinFlipPhase["ERROR"] = "error";
})(UICoinFlipPhase = exports.UICoinFlipPhase || (exports.UICoinFlipPhase = {}));
var UICoinFlipErrorTyp;
(function (UICoinFlipErrorTyp) {
    UICoinFlipErrorTyp["GENERIC"] = "generic";
    UICoinFlipErrorTyp["ABSENTEE"] = "absentee";
    UICoinFlipErrorTyp["TIMEOUT"] = "timeout";
    UICoinFlipErrorTyp["ABORTED"] = "aborted";
    UICoinFlipErrorTyp["DUPREG"] = "dupreg";
    UICoinFlipErrorTyp["DUPCOMMITCOMPLETE"] = "dupcommitcomplete";
    UICoinFlipErrorTyp["DUPREVEAL"] = "dupreveal";
    UICoinFlipErrorTyp["COMMITMISMATCH"] = "commitmismatch";
})(UICoinFlipErrorTyp = exports.UICoinFlipErrorTyp || (exports.UICoinFlipErrorTyp = {}));
var UICoinFlipResultTyp;
(function (UICoinFlipResultTyp) {
    UICoinFlipResultTyp["NUMBER"] = "number";
    UICoinFlipResultTyp["SHUFFLE"] = "shuffle";
    UICoinFlipResultTyp["DECK"] = "deck";
    UICoinFlipResultTyp["HANDS"] = "hands";
    UICoinFlipResultTyp["COIN"] = "coin";
})(UICoinFlipResultTyp = exports.UICoinFlipResultTyp || (exports.UICoinFlipResultTyp = {}));
var UIWatchPositionPerm;
(function (UIWatchPositionPerm) {
    UIWatchPositionPerm["BASE"] = "base";
    UIWatchPositionPerm["ALWAYS"] = "always";
})(UIWatchPositionPerm = exports.UIWatchPositionPerm || (exports.UIWatchPositionPerm = {}));
var UICommandStatusDisplayTyp;
(function (UICommandStatusDisplayTyp) {
    UICommandStatusDisplayTyp["STATUS"] = "status";
    UICommandStatusDisplayTyp["WARNING"] = "warning";
    UICommandStatusDisplayTyp["ERROR"] = "error";
})(UICommandStatusDisplayTyp = exports.UICommandStatusDisplayTyp || (exports.UICommandStatusDisplayTyp = {}));
var UICommandStatusActionTyp;
(function (UICommandStatusActionTyp) {
    UICommandStatusActionTyp["APPSETTINGS"] = "appsettings";
})(UICommandStatusActionTyp = exports.UICommandStatusActionTyp || (exports.UICommandStatusActionTyp = {}));
var UIBotCommandsUpdateStatusTyp;
(function (UIBotCommandsUpdateStatusTyp) {
    UIBotCommandsUpdateStatusTyp["UPTODATE"] = "uptodate";
    UIBotCommandsUpdateStatusTyp["UPDATING"] = "updating";
    UIBotCommandsUpdateStatusTyp["FAILED"] = "failed";
    UIBotCommandsUpdateStatusTyp["BLANK"] = "blank";
})(UIBotCommandsUpdateStatusTyp = exports.UIBotCommandsUpdateStatusTyp || (exports.UIBotCommandsUpdateStatusTyp = {}));
var ConversationCommandGroupsTyp;
(function (ConversationCommandGroupsTyp) {
    ConversationCommandGroupsTyp["BUILTIN"] = "builtin";
    ConversationCommandGroupsTyp["CUSTOM"] = "custom";
    ConversationCommandGroupsTyp["NONE"] = "none";
})(ConversationCommandGroupsTyp = exports.ConversationCommandGroupsTyp || (exports.ConversationCommandGroupsTyp = {}));
var ConversationBuiltinCommandTyp;
(function (ConversationBuiltinCommandTyp) {
    ConversationBuiltinCommandTyp["NONE"] = "none";
    ConversationBuiltinCommandTyp["ADHOC"] = "adhoc";
    ConversationBuiltinCommandTyp["SMALLTEAM"] = "smallteam";
    ConversationBuiltinCommandTyp["BIGTEAM"] = "bigteam";
    ConversationBuiltinCommandTyp["BIGTEAMGENERAL"] = "bigteamgeneral";
})(ConversationBuiltinCommandTyp = exports.ConversationBuiltinCommandTyp || (exports.ConversationBuiltinCommandTyp = {}));
var ConversationExistence;
(function (ConversationExistence) {
    ConversationExistence["ACTIVE"] = "active";
    ConversationExistence["ARCHIVED"] = "archived";
    ConversationExistence["DELETED"] = "deleted";
    ConversationExistence["ABANDONED"] = "abandoned";
})(ConversationExistence = exports.ConversationExistence || (exports.ConversationExistence = {}));
var ConversationMembersType;
(function (ConversationMembersType) {
    ConversationMembersType["KBFS"] = "kbfs";
    ConversationMembersType["TEAM"] = "team";
    ConversationMembersType["IMPTEAMNATIVE"] = "impteamnative";
    ConversationMembersType["IMPTEAMUPGRADE"] = "impteamupgrade";
})(ConversationMembersType = exports.ConversationMembersType || (exports.ConversationMembersType = {}));
var SyncInboxResType;
(function (SyncInboxResType) {
    SyncInboxResType["CURRENT"] = "current";
    SyncInboxResType["INCREMENTAL"] = "incremental";
    SyncInboxResType["CLEAR"] = "clear";
})(SyncInboxResType = exports.SyncInboxResType || (exports.SyncInboxResType = {}));
var MessageType;
(function (MessageType) {
    MessageType["NONE"] = "none";
    MessageType["TEXT"] = "text";
    MessageType["ATTACHMENT"] = "attachment";
    MessageType["EDIT"] = "edit";
    MessageType["DELETE"] = "delete";
    MessageType["METADATA"] = "metadata";
    MessageType["TLFNAME"] = "tlfname";
    MessageType["HEADLINE"] = "headline";
    MessageType["ATTACHMENTUPLOADED"] = "attachmentuploaded";
    MessageType["JOIN"] = "join";
    MessageType["LEAVE"] = "leave";
    MessageType["SYSTEM"] = "system";
    MessageType["DELETEHISTORY"] = "deletehistory";
    MessageType["REACTION"] = "reaction";
    MessageType["SENDPAYMENT"] = "sendpayment";
    MessageType["REQUESTPAYMENT"] = "requestpayment";
    MessageType["UNFURL"] = "unfurl";
    MessageType["FLIP"] = "flip";
    MessageType["PIN"] = "pin";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var TopicType;
(function (TopicType) {
    TopicType["NONE"] = "none";
    TopicType["CHAT"] = "chat";
    TopicType["DEV"] = "dev";
    TopicType["KBFSFILEEDIT"] = "kbfsfileedit";
})(TopicType = exports.TopicType || (exports.TopicType = {}));
var TeamType;
(function (TeamType) {
    TeamType["NONE"] = "none";
    TeamType["SIMPLE"] = "simple";
    TeamType["COMPLEX"] = "complex";
})(TeamType = exports.TeamType || (exports.TeamType = {}));
var NotificationKind;
(function (NotificationKind) {
    NotificationKind["GENERIC"] = "generic";
    NotificationKind["ATMENTION"] = "atmention";
})(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));
var GlobalAppNotificationSetting;
(function (GlobalAppNotificationSetting) {
    GlobalAppNotificationSetting["NEWMESSAGES"] = "newmessages";
    GlobalAppNotificationSetting["PLAINTEXTMOBILE"] = "plaintextmobile";
    GlobalAppNotificationSetting["PLAINTEXTDESKTOP"] = "plaintextdesktop";
    GlobalAppNotificationSetting["DEFAULTSOUNDMOBILE"] = "defaultsoundmobile";
    GlobalAppNotificationSetting["DISABLETYPING"] = "disabletyping";
})(GlobalAppNotificationSetting = exports.GlobalAppNotificationSetting || (exports.GlobalAppNotificationSetting = {}));
var ConversationStatus;
(function (ConversationStatus) {
    ConversationStatus["UNFILED"] = "unfiled";
    ConversationStatus["FAVORITE"] = "favorite";
    ConversationStatus["IGNORED"] = "ignored";
    ConversationStatus["BLOCKED"] = "blocked";
    ConversationStatus["MUTED"] = "muted";
    ConversationStatus["REPORTED"] = "reported";
})(ConversationStatus = exports.ConversationStatus || (exports.ConversationStatus = {}));
var ConversationMemberStatus;
(function (ConversationMemberStatus) {
    ConversationMemberStatus["ACTIVE"] = "active";
    ConversationMemberStatus["REMOVED"] = "removed";
    ConversationMemberStatus["LEFT"] = "left";
    ConversationMemberStatus["PREVIEW"] = "preview";
    ConversationMemberStatus["RESET"] = "reset";
    ConversationMemberStatus["NEVER_JOINED"] = "never_joined";
})(ConversationMemberStatus = exports.ConversationMemberStatus || (exports.ConversationMemberStatus = {}));
var InboxResType;
(function (InboxResType) {
    InboxResType["VERSIONHIT"] = "versionhit";
    InboxResType["FULL"] = "full";
})(InboxResType = exports.InboxResType || (exports.InboxResType = {}));
var RetentionPolicyType;
(function (RetentionPolicyType) {
    RetentionPolicyType["NONE"] = "none";
    RetentionPolicyType["RETAIN"] = "retain";
    RetentionPolicyType["EXPIRE"] = "expire";
    RetentionPolicyType["INHERIT"] = "inherit";
    RetentionPolicyType["EPHEMERAL"] = "ephemeral";
})(RetentionPolicyType = exports.RetentionPolicyType || (exports.RetentionPolicyType = {}));
var GetThreadReason;
(function (GetThreadReason) {
    GetThreadReason["GENERAL"] = "general";
    GetThreadReason["PUSH"] = "push";
    GetThreadReason["FOREGROUND"] = "foreground";
    GetThreadReason["BACKGROUNDCONVLOAD"] = "backgroundconvload";
    GetThreadReason["FIXRETRY"] = "fixretry";
    GetThreadReason["PREPARE"] = "prepare";
    GetThreadReason["SEARCHER"] = "searcher";
    GetThreadReason["INDEXED_SEARCH"] = "indexed_search";
    GetThreadReason["KBFSFILEACTIVITY"] = "kbfsfileactivity";
    GetThreadReason["COINFLIP"] = "coinflip";
    GetThreadReason["BOTCOMMANDS"] = "botcommands";
})(GetThreadReason = exports.GetThreadReason || (exports.GetThreadReason = {}));
var ReIndexingMode;
(function (ReIndexingMode) {
    ReIndexingMode["NONE"] = "none";
    ReIndexingMode["PRESEARCH_SYNC"] = "presearch_sync";
    ReIndexingMode["POSTSEARCH_SYNC"] = "postsearch_sync";
})(ReIndexingMode = exports.ReIndexingMode || (exports.ReIndexingMode = {}));
var AssetMetadataType;
(function (AssetMetadataType) {
    AssetMetadataType["NONE"] = "none";
    AssetMetadataType["IMAGE"] = "image";
    AssetMetadataType["VIDEO"] = "video";
})(AssetMetadataType = exports.AssetMetadataType || (exports.AssetMetadataType = {}));
var AssetTag;
(function (AssetTag) {
    AssetTag["PRIMARY"] = "primary";
})(AssetTag = exports.AssetTag || (exports.AssetTag = {}));
var BotCommandsAdvertisementTyp;
(function (BotCommandsAdvertisementTyp) {
    BotCommandsAdvertisementTyp["PUBLIC"] = "public";
    BotCommandsAdvertisementTyp["TLFID_MEMBERS"] = "tlfid_members";
    BotCommandsAdvertisementTyp["TLFID_CONVS"] = "tlfid_convs";
})(BotCommandsAdvertisementTyp = exports.BotCommandsAdvertisementTyp || (exports.BotCommandsAdvertisementTyp = {}));
var TextPaymentResultTyp;
(function (TextPaymentResultTyp) {
    TextPaymentResultTyp["SENT"] = "sent";
    TextPaymentResultTyp["ERROR"] = "error";
})(TextPaymentResultTyp = exports.TextPaymentResultTyp || (exports.TextPaymentResultTyp = {}));
var MessageSystemType;
(function (MessageSystemType) {
    MessageSystemType["ADDEDTOTEAM"] = "addedtoteam";
    MessageSystemType["INVITEADDEDTOTEAM"] = "inviteaddedtoteam";
    MessageSystemType["COMPLEXTEAM"] = "complexteam";
    MessageSystemType["CREATETEAM"] = "createteam";
    MessageSystemType["GITPUSH"] = "gitpush";
    MessageSystemType["CHANGEAVATAR"] = "changeavatar";
    MessageSystemType["CHANGERETENTION"] = "changeretention";
    MessageSystemType["BULKADDTOCONV"] = "bulkaddtoconv";
    MessageSystemType["SBSRESOLVE"] = "sbsresolve";
})(MessageSystemType = exports.MessageSystemType || (exports.MessageSystemType = {}));
var OutboxStateType;
(function (OutboxStateType) {
    OutboxStateType["SENDING"] = "sending";
    OutboxStateType["ERROR"] = "error";
})(OutboxStateType = exports.OutboxStateType || (exports.OutboxStateType = {}));
var OutboxErrorType;
(function (OutboxErrorType) {
    OutboxErrorType["MISC"] = "misc";
    OutboxErrorType["OFFLINE"] = "offline";
    OutboxErrorType["IDENTIFY"] = "identify";
    OutboxErrorType["TOOLONG"] = "toolong";
    OutboxErrorType["DUPLICATE"] = "duplicate";
    OutboxErrorType["EXPIRED"] = "expired";
    OutboxErrorType["TOOMANYATTEMPTS"] = "toomanyattempts";
    OutboxErrorType["ALREADY_DELETED"] = "already_deleted";
    OutboxErrorType["UPLOADFAILED"] = "uploadfailed";
    OutboxErrorType["RESTRICTEDBOT"] = "restrictedbot";
    OutboxErrorType["MINWRITER"] = "minwriter";
})(OutboxErrorType = exports.OutboxErrorType || (exports.OutboxErrorType = {}));
var HeaderPlaintextVersion;
(function (HeaderPlaintextVersion) {
    HeaderPlaintextVersion["V1"] = "v1";
    HeaderPlaintextVersion["V2"] = "v2";
    HeaderPlaintextVersion["V3"] = "v3";
    HeaderPlaintextVersion["V4"] = "v4";
    HeaderPlaintextVersion["V5"] = "v5";
    HeaderPlaintextVersion["V6"] = "v6";
    HeaderPlaintextVersion["V7"] = "v7";
    HeaderPlaintextVersion["V8"] = "v8";
    HeaderPlaintextVersion["V9"] = "v9";
    HeaderPlaintextVersion["V10"] = "v10";
})(HeaderPlaintextVersion = exports.HeaderPlaintextVersion || (exports.HeaderPlaintextVersion = {}));
var BodyPlaintextVersion;
(function (BodyPlaintextVersion) {
    BodyPlaintextVersion["V1"] = "v1";
    BodyPlaintextVersion["V2"] = "v2";
    BodyPlaintextVersion["V3"] = "v3";
    BodyPlaintextVersion["V4"] = "v4";
    BodyPlaintextVersion["V5"] = "v5";
    BodyPlaintextVersion["V6"] = "v6";
    BodyPlaintextVersion["V7"] = "v7";
    BodyPlaintextVersion["V8"] = "v8";
    BodyPlaintextVersion["V9"] = "v9";
    BodyPlaintextVersion["V10"] = "v10";
})(BodyPlaintextVersion = exports.BodyPlaintextVersion || (exports.BodyPlaintextVersion = {}));
var MessageUnboxedErrorType;
(function (MessageUnboxedErrorType) {
    MessageUnboxedErrorType["MISC"] = "misc";
    MessageUnboxedErrorType["BADVERSION_CRITICAL"] = "badversion_critical";
    MessageUnboxedErrorType["BADVERSION"] = "badversion";
    MessageUnboxedErrorType["IDENTIFY"] = "identify";
    MessageUnboxedErrorType["EPHEMERAL"] = "ephemeral";
    MessageUnboxedErrorType["PAIRWISE_MISSING"] = "pairwise_missing";
})(MessageUnboxedErrorType = exports.MessageUnboxedErrorType || (exports.MessageUnboxedErrorType = {}));
var JourneycardType;
(function (JourneycardType) {
    JourneycardType["WELCOME"] = "welcome";
    JourneycardType["POPULAR_CHANNELS"] = "popular_channels";
    JourneycardType["ADD_PEOPLE"] = "add_people";
    JourneycardType["CREATE_CHANNELS"] = "create_channels";
    JourneycardType["MSG_ATTENTION"] = "msg_attention";
    JourneycardType["UNUSED"] = "unused";
    JourneycardType["CHANNEL_INACTIVE"] = "channel_inactive";
    JourneycardType["MSG_NO_ANSWER"] = "msg_no_answer";
})(JourneycardType = exports.JourneycardType || (exports.JourneycardType = {}));
var ConversationErrorType;
(function (ConversationErrorType) {
    ConversationErrorType["PERMANENT"] = "permanent";
    ConversationErrorType["MISSINGINFO"] = "missinginfo";
    ConversationErrorType["SELFREKEYNEEDED"] = "selfrekeyneeded";
    ConversationErrorType["OTHERREKEYNEEDED"] = "otherrekeyneeded";
    ConversationErrorType["IDENTIFY"] = "identify";
    ConversationErrorType["TRANSIENT"] = "transient";
    ConversationErrorType["NONE"] = "none";
})(ConversationErrorType = exports.ConversationErrorType || (exports.ConversationErrorType = {}));
var MessageIDControlMode;
(function (MessageIDControlMode) {
    MessageIDControlMode["OLDERMESSAGES"] = "oldermessages";
    MessageIDControlMode["NEWERMESSAGES"] = "newermessages";
    MessageIDControlMode["CENTERED"] = "centered";
    MessageIDControlMode["UNREADLINE"] = "unreadline";
})(MessageIDControlMode = exports.MessageIDControlMode || (exports.MessageIDControlMode = {}));
var GetThreadNonblockCbMode;
(function (GetThreadNonblockCbMode) {
    GetThreadNonblockCbMode["FULL"] = "full";
    GetThreadNonblockCbMode["INCREMENTAL"] = "incremental";
})(GetThreadNonblockCbMode = exports.GetThreadNonblockCbMode || (exports.GetThreadNonblockCbMode = {}));
var GetThreadNonblockPgMode;
(function (GetThreadNonblockPgMode) {
    GetThreadNonblockPgMode["DEFAULT"] = "default";
    GetThreadNonblockPgMode["SERVER"] = "server";
})(GetThreadNonblockPgMode = exports.GetThreadNonblockPgMode || (exports.GetThreadNonblockPgMode = {}));
var InboxLayoutReselectMode;
(function (InboxLayoutReselectMode) {
    InboxLayoutReselectMode["DEFAULT"] = "default";
    InboxLayoutReselectMode["FORCE"] = "force";
})(InboxLayoutReselectMode = exports.InboxLayoutReselectMode || (exports.InboxLayoutReselectMode = {}));
var PreviewLocationTyp;
(function (PreviewLocationTyp) {
    PreviewLocationTyp["URL"] = "url";
    PreviewLocationTyp["FILE"] = "file";
    PreviewLocationTyp["BYTES"] = "bytes";
})(PreviewLocationTyp = exports.PreviewLocationTyp || (exports.PreviewLocationTyp = {}));
var UnfurlPromptAction;
(function (UnfurlPromptAction) {
    UnfurlPromptAction["ALWAYS"] = "always";
    UnfurlPromptAction["NEVER"] = "never";
    UnfurlPromptAction["ACCEPT"] = "accept";
    UnfurlPromptAction["NOTNOW"] = "notnow";
    UnfurlPromptAction["ONETIME"] = "onetime";
})(UnfurlPromptAction = exports.UnfurlPromptAction || (exports.UnfurlPromptAction = {}));
var GalleryItemTyp;
(function (GalleryItemTyp) {
    GalleryItemTyp["MEDIA"] = "media";
    GalleryItemTyp["LINK"] = "link";
    GalleryItemTyp["DOC"] = "doc";
})(GalleryItemTyp = exports.GalleryItemTyp || (exports.GalleryItemTyp = {}));
var SnippetDecoration;
(function (SnippetDecoration) {
    SnippetDecoration["NONE"] = "none";
    SnippetDecoration["PENDING_MESSAGE"] = "pending_message";
    SnippetDecoration["FAILED_PENDING_MESSAGE"] = "failed_pending_message";
    SnippetDecoration["EXPLODING_MESSAGE"] = "exploding_message";
    SnippetDecoration["EXPLODED_MESSAGE"] = "exploded_message";
    SnippetDecoration["AUDIO_ATTACHMENT"] = "audio_attachment";
    SnippetDecoration["VIDEO_ATTACHMENT"] = "video_attachment";
    SnippetDecoration["PHOTO_ATTACHMENT"] = "photo_attachment";
    SnippetDecoration["FILE_ATTACHMENT"] = "file_attachment";
    SnippetDecoration["STELLAR_RECEIVED"] = "stellar_received";
    SnippetDecoration["STELLAR_SENT"] = "stellar_sent";
    SnippetDecoration["PINNED_MESSAGE"] = "pinned_message";
})(SnippetDecoration = exports.SnippetDecoration || (exports.SnippetDecoration = {}));
var ChatActivitySource;
(function (ChatActivitySource) {
    ChatActivitySource["LOCAL"] = "local";
    ChatActivitySource["REMOTE"] = "remote";
})(ChatActivitySource = exports.ChatActivitySource || (exports.ChatActivitySource = {}));
var ChatActivityType;
(function (ChatActivityType) {
    ChatActivityType["RESERVED"] = "reserved";
    ChatActivityType["INCOMING_MESSAGE"] = "incoming_message";
    ChatActivityType["READ_MESSAGE"] = "read_message";
    ChatActivityType["NEW_CONVERSATION"] = "new_conversation";
    ChatActivityType["SET_STATUS"] = "set_status";
    ChatActivityType["FAILED_MESSAGE"] = "failed_message";
    ChatActivityType["MEMBERS_UPDATE"] = "members_update";
    ChatActivityType["SET_APP_NOTIFICATION_SETTINGS"] = "set_app_notification_settings";
    ChatActivityType["TEAMTYPE"] = "teamtype";
    ChatActivityType["EXPUNGE"] = "expunge";
    ChatActivityType["EPHEMERAL_PURGE"] = "ephemeral_purge";
    ChatActivityType["REACTION_UPDATE"] = "reaction_update";
    ChatActivityType["MESSAGES_UPDATED"] = "messages_updated";
})(ChatActivityType = exports.ChatActivityType || (exports.ChatActivityType = {}));
var StaleUpdateType;
(function (StaleUpdateType) {
    StaleUpdateType["CLEAR"] = "clear";
    StaleUpdateType["NEWACTIVITY"] = "newactivity";
})(StaleUpdateType = exports.StaleUpdateType || (exports.StaleUpdateType = {}));
var MessageBoxedVersion;
(function (MessageBoxedVersion) {
    MessageBoxedVersion["VNONE"] = "vnone";
    MessageBoxedVersion["V1"] = "v1";
    MessageBoxedVersion["V2"] = "v2";
    MessageBoxedVersion["V3"] = "v3";
    MessageBoxedVersion["V4"] = "v4";
})(MessageBoxedVersion = exports.MessageBoxedVersion || (exports.MessageBoxedVersion = {}));
var ChannelMention;
(function (ChannelMention) {
    ChannelMention["NONE"] = "none";
    ChannelMention["ALL"] = "all";
    ChannelMention["HERE"] = "here";
})(ChannelMention = exports.ChannelMention || (exports.ChannelMention = {}));
var SyncAllProtVers;
(function (SyncAllProtVers) {
    SyncAllProtVers["V0"] = "v0";
    SyncAllProtVers["V1"] = "v1";
})(SyncAllProtVers = exports.SyncAllProtVers || (exports.SyncAllProtVers = {}));
var SyncAllNotificationType;
(function (SyncAllNotificationType) {
    SyncAllNotificationType["STATE"] = "state";
    SyncAllNotificationType["INCREMENTAL"] = "incremental";
})(SyncAllNotificationType = exports.SyncAllNotificationType || (exports.SyncAllNotificationType = {}));
var ExternalAPIKeyTyp;
(function (ExternalAPIKeyTyp) {
    ExternalAPIKeyTyp["GOOGLEMAPS"] = "googlemaps";
    ExternalAPIKeyTyp["GIPHY"] = "giphy";
})(ExternalAPIKeyTyp = exports.ExternalAPIKeyTyp || (exports.ExternalAPIKeyTyp = {}));
var BotInfoResponseTyp;
(function (BotInfoResponseTyp) {
    BotInfoResponseTyp["UPTODATE"] = "uptodate";
    BotInfoResponseTyp["INFO"] = "info";
})(BotInfoResponseTyp = exports.BotInfoResponseTyp || (exports.BotInfoResponseTyp = {}));
var UnfurlType;
(function (UnfurlType) {
    UnfurlType["GENERIC"] = "generic";
    UnfurlType["YOUTUBE"] = "youtube";
    UnfurlType["GIPHY"] = "giphy";
    UnfurlType["MAPS"] = "maps";
})(UnfurlType = exports.UnfurlType || (exports.UnfurlType = {}));
var UnfurlMode;
(function (UnfurlMode) {
    UnfurlMode["ALWAYS"] = "always";
    UnfurlMode["NEVER"] = "never";
    UnfurlMode["WHITELISTED"] = "whitelisted";
})(UnfurlMode = exports.UnfurlMode || (exports.UnfurlMode = {}));
//# sourceMappingURL=index.js.map