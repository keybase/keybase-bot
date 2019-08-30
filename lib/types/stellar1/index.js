"use strict";
/*
 * stellar.1
 *
 * Auto-generated to TypeScript types by avdl-compiler v1.4.1 (https://github.com/keybase/node-avdl-compiler)
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
    BundleVersion[BundleVersion["V1"] = 1] = "V1";
    BundleVersion[BundleVersion["V2"] = 2] = "V2";
    BundleVersion[BundleVersion["V3"] = 3] = "V3";
    BundleVersion[BundleVersion["V4"] = 4] = "V4";
    BundleVersion[BundleVersion["V5"] = 5] = "V5";
    BundleVersion[BundleVersion["V6"] = 6] = "V6";
    BundleVersion[BundleVersion["V7"] = 7] = "V7";
    BundleVersion[BundleVersion["V8"] = 8] = "V8";
    BundleVersion[BundleVersion["V9"] = 9] = "V9";
    BundleVersion[BundleVersion["V10"] = 10] = "V10";
})(BundleVersion = exports.BundleVersion || (exports.BundleVersion = {}));
var AccountBundleVersion;
(function (AccountBundleVersion) {
    AccountBundleVersion[AccountBundleVersion["V1"] = 1] = "V1";
    AccountBundleVersion[AccountBundleVersion["V2"] = 2] = "V2";
    AccountBundleVersion[AccountBundleVersion["V3"] = 3] = "V3";
    AccountBundleVersion[AccountBundleVersion["V4"] = 4] = "V4";
    AccountBundleVersion[AccountBundleVersion["V5"] = 5] = "V5";
    AccountBundleVersion[AccountBundleVersion["V6"] = 6] = "V6";
    AccountBundleVersion[AccountBundleVersion["V7"] = 7] = "V7";
    AccountBundleVersion[AccountBundleVersion["V8"] = 8] = "V8";
    AccountBundleVersion[AccountBundleVersion["V9"] = 9] = "V9";
    AccountBundleVersion[AccountBundleVersion["V10"] = 10] = "V10";
})(AccountBundleVersion = exports.AccountBundleVersion || (exports.AccountBundleVersion = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus[TransactionStatus["NONE"] = 0] = "NONE";
    TransactionStatus[TransactionStatus["PENDING"] = 1] = "PENDING";
    TransactionStatus[TransactionStatus["SUCCESS"] = 2] = "SUCCESS";
    TransactionStatus[TransactionStatus["ERROR_TRANSIENT"] = 3] = "ERROR_TRANSIENT";
    TransactionStatus[TransactionStatus["ERROR_PERMANENT"] = 4] = "ERROR_PERMANENT";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
var RequestStatus;
(function (RequestStatus) {
    RequestStatus[RequestStatus["OK"] = 0] = "OK";
    RequestStatus[RequestStatus["CANCELED"] = 1] = "CANCELED";
    RequestStatus[RequestStatus["DONE"] = 2] = "DONE";
})(RequestStatus = exports.RequestStatus || (exports.RequestStatus = {}));
var PaymentStrategy;
(function (PaymentStrategy) {
    PaymentStrategy[PaymentStrategy["NONE"] = 0] = "NONE";
    PaymentStrategy[PaymentStrategy["DIRECT"] = 1] = "DIRECT";
    PaymentStrategy[PaymentStrategy["RELAY"] = 2] = "RELAY";
})(PaymentStrategy = exports.PaymentStrategy || (exports.PaymentStrategy = {}));
var RelayDirection;
(function (RelayDirection) {
    RelayDirection[RelayDirection["CLAIM"] = 0] = "CLAIM";
    RelayDirection[RelayDirection["YANK"] = 1] = "YANK";
})(RelayDirection = exports.RelayDirection || (exports.RelayDirection = {}));
var AccountMode;
(function (AccountMode) {
    AccountMode[AccountMode["NONE"] = 0] = "NONE";
    AccountMode[AccountMode["USER"] = 1] = "USER";
    AccountMode[AccountMode["MOBILE"] = 2] = "MOBILE";
})(AccountMode = exports.AccountMode || (exports.AccountMode = {}));
var BalanceDelta;
(function (BalanceDelta) {
    BalanceDelta[BalanceDelta["NONE"] = 0] = "NONE";
    BalanceDelta[BalanceDelta["INCREASE"] = 1] = "INCREASE";
    BalanceDelta[BalanceDelta["DECREASE"] = 2] = "DECREASE";
})(BalanceDelta = exports.BalanceDelta || (exports.BalanceDelta = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["NONE"] = 0] = "NONE";
    PaymentStatus[PaymentStatus["PENDING"] = 1] = "PENDING";
    PaymentStatus[PaymentStatus["CLAIMABLE"] = 2] = "CLAIMABLE";
    PaymentStatus[PaymentStatus["COMPLETED"] = 3] = "COMPLETED";
    PaymentStatus[PaymentStatus["ERROR"] = 4] = "ERROR";
    PaymentStatus[PaymentStatus["UNKNOWN"] = 5] = "UNKNOWN";
    PaymentStatus[PaymentStatus["CANCELED"] = 6] = "CANCELED";
})(PaymentStatus = exports.PaymentStatus || (exports.PaymentStatus = {}));
var ParticipantType;
(function (ParticipantType) {
    ParticipantType[ParticipantType["NONE"] = 0] = "NONE";
    ParticipantType[ParticipantType["KEYBASE"] = 1] = "KEYBASE";
    ParticipantType[ParticipantType["STELLAR"] = 2] = "STELLAR";
    ParticipantType[ParticipantType["SBS"] = 3] = "SBS";
    ParticipantType[ParticipantType["OWNACCOUNT"] = 4] = "OWNACCOUNT";
})(ParticipantType = exports.ParticipantType || (exports.ParticipantType = {}));
var AdvancedBanner;
(function (AdvancedBanner) {
    AdvancedBanner[AdvancedBanner["NO_BANNER"] = 0] = "NO_BANNER";
    AdvancedBanner[AdvancedBanner["SENDER_BANNER"] = 1] = "SENDER_BANNER";
    AdvancedBanner[AdvancedBanner["RECEIVER_BANNER"] = 2] = "RECEIVER_BANNER";
})(AdvancedBanner = exports.AdvancedBanner || (exports.AdvancedBanner = {}));
var PaymentSummaryType;
(function (PaymentSummaryType) {
    PaymentSummaryType[PaymentSummaryType["NONE"] = 0] = "NONE";
    PaymentSummaryType[PaymentSummaryType["STELLAR"] = 1] = "STELLAR";
    PaymentSummaryType[PaymentSummaryType["DIRECT"] = 2] = "DIRECT";
    PaymentSummaryType[PaymentSummaryType["RELAY"] = 3] = "RELAY";
})(PaymentSummaryType = exports.PaymentSummaryType || (exports.PaymentSummaryType = {}));
//# sourceMappingURL=index.js.map