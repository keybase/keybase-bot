"use strict";
/*
 * stellar.1
 *
 * Auto-generated to TypeScript types by avdl-compiler v1.4.6 (https://github.com/keybase/node-avdl-compiler)
 * Input files:
 * - ../client/protocol/avdl/stellar1/bundle.avdl
 * - ../client/protocol/avdl/stellar1/common.avdl
 * - ../client/protocol/avdl/stellar1/gregor.avdl
 * - ../client/protocol/avdl/stellar1/local.avdl
 * - ../client/protocol/avdl/stellar1/notify.avdl
 * - ../client/protocol/avdl/stellar1/remote.avdl
 * - ../client/protocol/avdl/stellar1/ui.avdl
 */
Object.defineProperty(exports, "__esModule", { value: true });
var BundleVersion;
(function (BundleVersion) {
    BundleVersion["V1"] = "v1";
    BundleVersion["V2"] = "v2";
    BundleVersion["V3"] = "v3";
    BundleVersion["V4"] = "v4";
    BundleVersion["V5"] = "v5";
    BundleVersion["V6"] = "v6";
    BundleVersion["V7"] = "v7";
    BundleVersion["V8"] = "v8";
    BundleVersion["V9"] = "v9";
    BundleVersion["V10"] = "v10";
})(BundleVersion = exports.BundleVersion || (exports.BundleVersion = {}));
var AccountBundleVersion;
(function (AccountBundleVersion) {
    AccountBundleVersion["V1"] = "v1";
    AccountBundleVersion["V2"] = "v2";
    AccountBundleVersion["V3"] = "v3";
    AccountBundleVersion["V4"] = "v4";
    AccountBundleVersion["V5"] = "v5";
    AccountBundleVersion["V6"] = "v6";
    AccountBundleVersion["V7"] = "v7";
    AccountBundleVersion["V8"] = "v8";
    AccountBundleVersion["V9"] = "v9";
    AccountBundleVersion["V10"] = "v10";
})(AccountBundleVersion = exports.AccountBundleVersion || (exports.AccountBundleVersion = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["NONE"] = "none";
    TransactionStatus["PENDING"] = "pending";
    TransactionStatus["SUCCESS"] = "success";
    TransactionStatus["ERROR_TRANSIENT"] = "error_transient";
    TransactionStatus["ERROR_PERMANENT"] = "error_permanent";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
var RequestStatus;
(function (RequestStatus) {
    RequestStatus["OK"] = "ok";
    RequestStatus["CANCELED"] = "canceled";
    RequestStatus["DONE"] = "done";
})(RequestStatus = exports.RequestStatus || (exports.RequestStatus = {}));
var PaymentStrategy;
(function (PaymentStrategy) {
    PaymentStrategy["NONE"] = "none";
    PaymentStrategy["DIRECT"] = "direct";
    PaymentStrategy["RELAY"] = "relay";
})(PaymentStrategy = exports.PaymentStrategy || (exports.PaymentStrategy = {}));
var RelayDirection;
(function (RelayDirection) {
    RelayDirection["CLAIM"] = "claim";
    RelayDirection["YANK"] = "yank";
})(RelayDirection = exports.RelayDirection || (exports.RelayDirection = {}));
var AccountMode;
(function (AccountMode) {
    AccountMode["NONE"] = "none";
    AccountMode["USER"] = "user";
    AccountMode["MOBILE"] = "mobile";
})(AccountMode = exports.AccountMode || (exports.AccountMode = {}));
var BalanceDelta;
(function (BalanceDelta) {
    BalanceDelta["NONE"] = "none";
    BalanceDelta["INCREASE"] = "increase";
    BalanceDelta["DECREASE"] = "decrease";
})(BalanceDelta = exports.BalanceDelta || (exports.BalanceDelta = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["NONE"] = "none";
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["CLAIMABLE"] = "claimable";
    PaymentStatus["COMPLETED"] = "completed";
    PaymentStatus["ERROR"] = "error";
    PaymentStatus["UNKNOWN"] = "unknown";
    PaymentStatus["CANCELED"] = "canceled";
})(PaymentStatus = exports.PaymentStatus || (exports.PaymentStatus = {}));
var ParticipantType;
(function (ParticipantType) {
    ParticipantType["NONE"] = "none";
    ParticipantType["KEYBASE"] = "keybase";
    ParticipantType["STELLAR"] = "stellar";
    ParticipantType["SBS"] = "sbs";
    ParticipantType["OWNACCOUNT"] = "ownaccount";
})(ParticipantType = exports.ParticipantType || (exports.ParticipantType = {}));
var AdvancedBanner;
(function (AdvancedBanner) {
    AdvancedBanner["NO_BANNER"] = "no_banner";
    AdvancedBanner["SENDER_BANNER"] = "sender_banner";
    AdvancedBanner["RECEIVER_BANNER"] = "receiver_banner";
})(AdvancedBanner = exports.AdvancedBanner || (exports.AdvancedBanner = {}));
var PublicNoteType;
(function (PublicNoteType) {
    PublicNoteType["NONE"] = "none";
    PublicNoteType["TEXT"] = "text";
    PublicNoteType["ID"] = "id";
    PublicNoteType["HASH"] = "hash";
    PublicNoteType["RETURN"] = "return";
})(PublicNoteType = exports.PublicNoteType || (exports.PublicNoteType = {}));
var PaymentSummaryType;
(function (PaymentSummaryType) {
    PaymentSummaryType["NONE"] = "none";
    PaymentSummaryType["STELLAR"] = "stellar";
    PaymentSummaryType["DIRECT"] = "direct";
    PaymentSummaryType["RELAY"] = "relay";
})(PaymentSummaryType = exports.PaymentSummaryType || (exports.PaymentSummaryType = {}));
//# sourceMappingURL=index.js.map