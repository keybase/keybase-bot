/// <reference types="node" />
import * as keybase1 from '../keybase1';
export declare type BundleRevision = number;
export declare type EncryptedBundle = {
    v: number;
    e: Buffer;
    n: keybase1.BoxNonce;
    gen: keybase1.PerUserKeyGeneration;
};
export declare enum BundleVersion {
    V1 = "v1",
    V2 = "v2",
    V3 = "v3",
    V4 = "v4",
    V5 = "v5",
    V6 = "v6",
    V7 = "v7",
    V8 = "v8",
    V9 = "v9",
    V10 = "v10"
}
export declare type BundleSecretUnsupported = {};
export declare type EncryptedAccountBundle = {
    v: number;
    e: Buffer;
    n: keybase1.BoxNonce;
    gen: keybase1.PerUserKeyGeneration;
};
export declare enum AccountBundleVersion {
    V1 = "v1",
    V2 = "v2",
    V3 = "v3",
    V4 = "v4",
    V5 = "v5",
    V6 = "v6",
    V7 = "v7",
    V8 = "v8",
    V9 = "v9",
    V10 = "v10"
}
export declare type AccountBundleSecretUnsupported = {};
export declare type AccountID = string;
export declare type SecretKey = string;
export declare type TransactionID = string;
export declare type PaymentID = string;
export declare type KeybaseTransactionID = string;
export declare type TimeMs = number;
export declare type Hash = Buffer;
export declare type KeybaseRequestID = string;
export declare type AssetCode = string;
export declare type Asset = {
    type: string;
    code: string;
    issuer: string;
    verifiedDomain: string;
    issuerName: string;
    desc: string;
    infoUrl: string;
    infoUrlText: string;
    showDepositButton: boolean;
    depositButtonText: string;
    showWithdrawButton: boolean;
    withdrawButtonText: string;
    withdrawType: string;
    transferServer: string;
    authEndpoint: string;
    depositReqAuth: boolean;
    withdrawReqAuth: boolean;
};
export declare type AccountReserve = {
    amount: string;
    description: string;
};
export declare enum TransactionStatus {
    NONE = "none",
    PENDING = "pending",
    SUCCESS = "success",
    ERROR_TRANSIENT = "error_transient",
    ERROR_PERMANENT = "error_permanent"
}
export declare enum RequestStatus {
    OK = "ok",
    CANCELED = "canceled",
    DONE = "done"
}
export declare enum PaymentStrategy {
    NONE = "none",
    DIRECT = "direct",
    RELAY = "relay"
}
export declare enum RelayDirection {
    CLAIM = "claim",
    YANK = "yank"
}
export declare type NoteRecipient = {
    user: keybase1.UserVersion;
    pukGen: keybase1.PerUserKeyGeneration;
};
export declare type EncryptedRelaySecret = {
    v: number;
    e: Buffer;
    n: keybase1.BoxNonce;
    gen: keybase1.PerTeamKeyGeneration;
};
export declare type OutsideCurrencyCode = string;
export declare type CurrencySymbol = {
    str: string;
    ambigious: boolean;
    postfix: boolean;
};
export declare type PageCursor = {
    horizonCursor: string;
    directCursor: string;
    relayCursor: string;
};
export declare enum AccountMode {
    NONE = "none",
    USER = "user",
    MOBILE = "mobile"
}
export declare enum BalanceDelta {
    NONE = "none",
    INCREASE = "increase",
    DECREASE = "decrease"
}
export declare enum PaymentStatus {
    NONE = "none",
    PENDING = "pending",
    CLAIMABLE = "claimable",
    COMPLETED = "completed",
    ERROR = "error",
    UNKNOWN = "unknown",
    CANCELED = "canceled"
}
export declare enum ParticipantType {
    NONE = "none",
    KEYBASE = "keybase",
    STELLAR = "stellar",
    SBS = "sbs",
    OWNACCOUNT = "ownaccount"
}
export declare type BuildPaymentID = string;
export declare enum AdvancedBanner {
    NO_BANNER = "no_banner",
    SENDER_BANNER = "sender_banner",
    RECEIVER_BANNER = "receiver_banner"
}
export declare type InflationDestinationTag = string;
export declare type AirdropDetails = {
    isPromoted: boolean;
    details: string;
    disclaimer: string;
};
export declare type AirdropState = string;
export declare type AirdropQualification = {
    title: string;
    subtitle: string;
    valid: boolean;
};
export declare type AssetActionResultLocal = {
    externalUrl?: string;
    messageFromAnchor?: string;
};
export declare enum PublicNoteType {
    NONE = "none",
    TEXT = "text",
    ID = "id",
    HASH = "hash",
    RETURN = "return"
}
export declare type BatchPaymentError = {
    message: string;
    code: number;
};
export declare type BatchPaymentArg = {
    recipient: string;
    amount: string;
    message: string;
};
export declare type PartnerUrl = {
    url: string;
    title: string;
    description: string;
    iconFilename: string;
    adminOnly: boolean;
    canPurchase: boolean;
    extra: string;
};
export declare type StaticConfig = {
    paymentNoteMaxLength: number;
    requestNoteMaxLength: number;
    publicMemoMaxLength: number;
};
export declare type ChatConversationID = string;
export declare type DirectOp = {
    noteB64: string;
};
export declare enum PaymentSummaryType {
    NONE = "none",
    STELLAR = "stellar",
    DIRECT = "direct",
    RELAY = "relay"
}
export declare type TimeboundsRecommendation = {
    timeNow: keybase1.UnixTime;
    timeout: number;
};
export declare type NetworkOptions = {
    baseFee: number;
};
export declare type BundleVisibleEntryV2 = {
    accountId: AccountID;
    mode: AccountMode;
    isPrimary: boolean;
    acctBundleRevision: BundleRevision;
    encAcctBundleHash: Hash;
};
export declare type BundleSecretEntryV2 = {
    accountId: AccountID;
    name: string;
};
export declare type AccountBundleSecretV1 = {
    accountId: AccountID;
    signers: SecretKey[] | null;
};
export declare type BundleEntry = {
    accountId: AccountID;
    mode: AccountMode;
    isPrimary: boolean;
    name: string;
    acctBundleRevision: BundleRevision;
    encAcctBundleHash: Hash;
};
export declare type AccountBundle = {
    prev: Hash;
    ownHash: Hash;
    accountId: AccountID;
    signers: SecretKey[] | null;
};
export declare type AssetListResult = {
    assets: Asset[] | null;
    totalCount: number;
};
export declare type Balance = {
    asset: Asset;
    amount: string;
    limit: string;
    isAuthorized: boolean;
};
export declare type PaymentResult = {
    senderAccountId: AccountID;
    keybaseId: KeybaseTransactionID;
    stellarId: TransactionID;
    pending: boolean;
};
export declare type RelayClaimResult = {
    claimStellarId: TransactionID;
};
export declare type EncryptedNote = {
    v: number;
    e: Buffer;
    n: keybase1.BoxNonce;
    sender: NoteRecipient;
    recipient?: NoteRecipient;
};
export declare type NoteContents = {
    note: string;
    stellarId: TransactionID;
};
export declare type RelayContents = {
    stellarId: TransactionID;
    sk: SecretKey;
    note: string;
};
export declare type OutsideExchangeRate = {
    currency: OutsideCurrencyCode;
    rate: string;
};
export declare type OutsideCurrencyDefinition = {
    name: string;
    symbol: CurrencySymbol;
};
export declare type Trustline = {
    assetCode: AssetCode;
    issuer: AccountID;
};
export declare type PaymentPath = {
    sourceAmount: string;
    sourceAmountMax: string;
    sourceAsset: Asset;
    path: Asset[] | null;
    destinationAmount: string;
    destinationAsset: Asset;
    sourceInsufficientBalance: string;
};
export declare type PaymentStatusMsg = {
    accountId: AccountID;
    kbTxId: KeybaseTransactionID;
    txId: TransactionID;
};
export declare type RequestStatusMsg = {
    reqId: KeybaseRequestID;
};
export declare type PaymentNotificationMsg = {
    accountId: AccountID;
    paymentId: PaymentID;
};
export declare type AccountAssetLocal = {
    name: string;
    assetCode: string;
    issuerName: string;
    issuerAccountId: string;
    issuerVerifiedDomain: string;
    balanceTotal: string;
    balanceAvailableToSend: string;
    worthCurrency: string;
    worth: string;
    availableToSendWorth: string;
    reserves: AccountReserve[] | null;
    desc: string;
    infoUrl: string;
    infoUrlText: string;
    showDepositButton: boolean;
    depositButtonText: string;
    showWithdrawButton: boolean;
    withdrawButtonText: string;
};
export declare type PaymentDetailsOnlyLocal = {
    publicNote: string;
    publicNoteType: string;
    externalTxUrl: string;
    feeChargedDescription: string;
    pathIntermediate: Asset[] | null;
};
export declare type PaymentTrustlineLocal = {
    asset: Asset;
    remove: boolean;
};
export declare type CurrencyLocal = {
    description: string;
    code: OutsideCurrencyCode;
    symbol: string;
    name: string;
};
export declare type SendAssetChoiceLocal = {
    asset: Asset;
    enabled: boolean;
    left: string;
    right: string;
    subtext: string;
};
export declare type SendBannerLocal = {
    level: string;
    message: string;
    proofsChanged: boolean;
    offerAdvancedSendForm: AdvancedBanner;
};
export declare type SendPaymentResLocal = {
    kbTxId: KeybaseTransactionID;
    pending: boolean;
    jumpToChat: string;
};
export declare type RequestDetailsLocal = {
    id: KeybaseRequestID;
    fromAssertion: string;
    fromCurrentUser: boolean;
    toUserType: ParticipantType;
    toAssertion: string;
    amount: string;
    asset?: Asset;
    currency?: OutsideCurrencyCode;
    amountDescription: string;
    worthAtRequestTime: string;
    status: RequestStatus;
};
export declare type PredefinedInflationDestination = {
    tag: InflationDestinationTag;
    name: string;
    recommended: boolean;
    accountId: AccountID;
    url: string;
};
export declare type AirdropStatus = {
    state: AirdropState;
    rows: AirdropQualification[] | null;
};
export declare type SendResultCLILocal = {
    kbTxId: KeybaseTransactionID;
    txId: TransactionID;
};
export declare type PaymentCLILocal = {
    txId: TransactionID;
    time: TimeMs;
    status: string;
    statusDetail: string;
    amount: string;
    asset: Asset;
    displayAmount?: string;
    displayCurrency?: string;
    sourceAmountMax: string;
    sourceAmountActual: string;
    sourceAsset: Asset;
    isAdvanced: boolean;
    summaryAdvanced: string;
    operations: string[] | null;
    fromStellar: AccountID;
    toStellar?: AccountID;
    fromUsername?: string;
    toUsername?: string;
    toAssertion?: string;
    note: string;
    noteErr: string;
    unread: boolean;
    publicNote: string;
    publicNoteType: string;
    feeChargedDescription: string;
};
export declare type LookupResultCLILocal = {
    accountId: AccountID;
    username?: string;
};
export declare type BatchPaymentResult = {
    username: string;
    startTime: TimeMs;
    submittedTime: TimeMs;
    endTime: TimeMs;
    txId: TransactionID;
    status: PaymentStatus;
    statusDescription: string;
    error?: BatchPaymentError;
};
export declare type TxDisplaySummary = {
    source: AccountID;
    fee: number;
    memo: string;
    memoType: string;
    operations: string[] | null;
};
export declare type SignXdrResult = {
    singedTx: string;
    accountId: AccountID;
    submitErr?: string;
    submitTxId?: TransactionID;
};
export declare type PaymentDirectPost = {
    fromDeviceId: keybase1.DeviceID;
    to?: keybase1.UserVersion;
    displayAmount: string;
    displayCurrency: string;
    noteB64: string;
    signedTransaction: string;
    quickReturn: boolean;
    chatConversationId?: ChatConversationID;
    batchId: string;
};
export declare type PaymentRelayPost = {
    fromDeviceId: keybase1.DeviceID;
    to?: keybase1.UserVersion;
    toAssertion: string;
    relayAccount: AccountID;
    teamId: keybase1.TeamID;
    displayAmount: string;
    displayCurrency: string;
    boxB64: string;
    signedTransaction: string;
    quickReturn: boolean;
    chatConversationId?: ChatConversationID;
    batchId: string;
};
export declare type RelayClaimPost = {
    keybaseId: KeybaseTransactionID;
    dir: RelayDirection;
    signedTransaction: string;
    autoClaimToken?: string;
};
export declare type PathPaymentPost = {
    fromDeviceId: keybase1.DeviceID;
    to?: keybase1.UserVersion;
    noteB64: string;
    signedTransaction: string;
    quickReturn: boolean;
    chatConversationId?: ChatConversationID;
};
export declare type RelayOp = {
    toAssertion: string;
    relayAccount: AccountID;
    teamId: keybase1.TeamID;
    boxB64: string;
};
export declare type PaymentSummaryDirect = {
    kbTxId: KeybaseTransactionID;
    txId: TransactionID;
    txStatus: TransactionStatus;
    txErrMsg: string;
    fromStellar: AccountID;
    from: keybase1.UserVersion;
    fromDeviceId: keybase1.DeviceID;
    toStellar: AccountID;
    to?: keybase1.UserVersion;
    amount: string;
    asset: Asset;
    displayAmount?: string;
    displayCurrency?: string;
    noteB64: string;
    fromDisplayAmount: string;
    fromDisplayCurrency: string;
    toDisplayAmount: string;
    toDisplayCurrency: string;
    ctime: TimeMs;
    rtime: TimeMs;
    cursorToken: string;
    unread: boolean;
    fromPrimary: boolean;
    batchId: string;
    fromAirdrop: boolean;
    sourceAmountMax: string;
    sourceAmountActual: string;
    sourceAsset: Asset;
};
export declare type ClaimSummary = {
    txId: TransactionID;
    txStatus: TransactionStatus;
    txErrMsg: string;
    dir: RelayDirection;
    toStellar: AccountID;
    to: keybase1.UserVersion;
};
export declare type SubmitMultiRes = {
    txId: TransactionID;
};
export declare type AutoClaim = {
    kbTxId: KeybaseTransactionID;
};
export declare type RequestPost = {
    toUser?: keybase1.UserVersion;
    toAssertion: string;
    amount: string;
    asset?: Asset;
    currency?: OutsideCurrencyCode;
};
export declare type RequestDetails = {
    id: KeybaseRequestID;
    fromUser: keybase1.UserVersion;
    toUser?: keybase1.UserVersion;
    toAssertion: string;
    amount: string;
    asset?: Asset;
    currency?: OutsideCurrencyCode;
    fromDisplayAmount: string;
    fromDisplayCurrency: string;
    toDisplayAmount: string;
    toDisplayCurrency: string;
    fundingKbTxId: KeybaseTransactionID;
    status: RequestStatus;
};
export declare type PaymentPathQuery = {
    source: AccountID;
    destination: AccountID;
    sourceAsset: Asset;
    destinationAsset: Asset;
    amount: string;
};
export declare type BundleVisibleV2 = {
    revision: BundleRevision;
    prev: Hash;
    accounts: BundleVisibleEntryV2[] | null;
};
export declare type BundleSecretV2 = {
    visibleHash: Hash;
    accounts: BundleSecretEntryV2[] | null;
};
export declare type AccountBundleSecretVersioned = {
    version: AccountBundleVersion.V1;
    V1: AccountBundleSecretV1;
} | {
    version: AccountBundleVersion.V2;
    V2: AccountBundleSecretUnsupported;
} | {
    version: AccountBundleVersion.V3;
    V3: AccountBundleSecretUnsupported;
} | {
    version: AccountBundleVersion.V4;
    V4: AccountBundleSecretUnsupported;
} | {
    version: AccountBundleVersion.V5;
    V5: AccountBundleSecretUnsupported;
} | {
    version: AccountBundleVersion.V6;
    V6: AccountBundleSecretUnsupported;
} | {
    version: AccountBundleVersion.V7;
    V7: AccountBundleSecretUnsupported;
} | {
    version: AccountBundleVersion.V8;
    V8: AccountBundleSecretUnsupported;
} | {
    version: AccountBundleVersion.V9;
    V9: AccountBundleSecretUnsupported;
} | {
    version: AccountBundleVersion.V10;
    V10: AccountBundleSecretUnsupported;
} | {
    version: Exclude<AccountBundleVersion, AccountBundleVersion.V1 | AccountBundleVersion.V2 | AccountBundleVersion.V3 | AccountBundleVersion.V4 | AccountBundleVersion.V5 | AccountBundleVersion.V6 | AccountBundleVersion.V7 | AccountBundleVersion.V8 | AccountBundleVersion.V9 | AccountBundleVersion.V10>;
};
export declare type Bundle = {
    revision: BundleRevision;
    prev: Hash;
    ownHash: Hash;
    accounts: BundleEntry[] | null;
    accountBundles: {
        [key: string]: AccountBundle;
    };
};
export declare type StellarServerDefinitions = {
    revision: number;
    currencies: {
        [key: string]: OutsideCurrencyDefinition;
    };
};
export declare type WalletAccountLocal = {
    accountId: AccountID;
    isDefault: boolean;
    name: string;
    balanceDescription: string;
    seqno: string;
    currencyLocal: CurrencyLocal;
    accountMode: AccountMode;
    accountModeEditable: boolean;
    deviceReadOnly: boolean;
    isFunded: boolean;
    canSubmitTx: boolean;
    canAddTrustline: boolean;
};
export declare type PaymentLocal = {
    id: PaymentID;
    txId: TransactionID;
    time: TimeMs;
    statusSimplified: PaymentStatus;
    statusDescription: string;
    statusDetail: string;
    showCancel: boolean;
    amountDescription: string;
    delta: BalanceDelta;
    worth: string;
    worthAtSendTime: string;
    issuerDescription: string;
    issuerAccountId?: AccountID;
    fromType: ParticipantType;
    toType: ParticipantType;
    assetCode: string;
    fromAccountId: AccountID;
    fromAccountName: string;
    fromUsername: string;
    toAccountId?: AccountID;
    toAccountName: string;
    toUsername: string;
    toAssertion: string;
    originalToAssertion: string;
    note: string;
    noteErr: string;
    sourceAmountMax: string;
    sourceAmountActual: string;
    sourceAsset: Asset;
    sourceConvRate: string;
    isAdvanced: boolean;
    summaryAdvanced: string;
    operations: string[] | null;
    unread: boolean;
    batchId: string;
    fromAirdrop: boolean;
    isInflation: boolean;
    inflationSource?: string;
    trustline?: PaymentTrustlineLocal;
};
export declare type BuildPaymentResLocal = {
    readyToReview: boolean;
    from: AccountID;
    toErrMsg: string;
    amountErrMsg: string;
    secretNoteErrMsg: string;
    publicMemoErrMsg: string;
    publicMemoOverride: string;
    worthDescription: string;
    worthInfo: string;
    worthAmount: string;
    worthCurrency: string;
    displayAmountXlm: string;
    displayAmountFiat: string;
    sendingIntentionXlm: boolean;
    amountAvailable: string;
    banners: SendBannerLocal[] | null;
};
export declare type BuildRequestResLocal = {
    readyToRequest: boolean;
    toErrMsg: string;
    amountErrMsg: string;
    secretNoteErrMsg: string;
    worthDescription: string;
    worthInfo: string;
    displayAmountXlm: string;
    displayAmountFiat: string;
    sendingIntentionXlm: boolean;
    banners: SendBannerLocal[] | null;
};
export declare type InflationDestinationResultLocal = {
    destination?: AccountID;
    knownDestination?: PredefinedInflationDestination;
    self: boolean;
};
export declare type RecipientTrustlinesLocal = {
    trustlines: Balance[] | null;
    recipientType: ParticipantType;
};
export declare type PaymentPathLocal = {
    sourceDisplay: string;
    sourceMaxDisplay: string;
    destinationDisplay: string;
    exchangeRate: string;
    amountError: string;
    destinationAccount: AccountID;
    fullPath: PaymentPath;
};
export declare type PaymentOrErrorCLILocal = {
    payment?: PaymentCLILocal;
    err?: string;
};
export declare type OwnAccountCLILocal = {
    accountId: AccountID;
    isPrimary: boolean;
    name: string;
    balance: Balance[] | null;
    exchangeRate?: OutsideExchangeRate;
    accountMode: AccountMode;
};
export declare type BatchResultLocal = {
    startTime: TimeMs;
    preparedTime: TimeMs;
    allSubmittedTime: TimeMs;
    allCompleteTime: TimeMs;
    endTime: TimeMs;
    payments: BatchPaymentResult[] | null;
    overallDurationMs: TimeMs;
    prepareDurationMs: TimeMs;
    submitDurationMs: TimeMs;
    waitPaymentsDurationMs: TimeMs;
    waitChatDurationMs: TimeMs;
    countSuccess: number;
    countDirect: number;
    countRelay: number;
    countError: number;
    countPending: number;
    avgDurationMs: TimeMs;
    avgSuccessDurationMs: TimeMs;
    avgDirectDurationMs: TimeMs;
    avgRelayDurationMs: TimeMs;
    avgErrorDurationMs: TimeMs;
};
export declare type ValidateStellarURIResultLocal = {
    operation: string;
    originDomain: string;
    message: string;
    callbackUrl: string;
    xdr: string;
    summary: TxDisplaySummary;
    recipient: string;
    amount: string;
    assetCode: string;
    assetIssuer: string;
    memo: string;
    memoType: string;
    displayAmountFiat: string;
    availableToSendNative: string;
    availableToSendFiat: string;
    signed: boolean;
};
export declare type PaymentOp = {
    to?: keybase1.UserVersion;
    direct?: DirectOp;
    relay?: RelayOp;
};
export declare type PaymentSummaryStellar = {
    txId: TransactionID;
    from: AccountID;
    to: AccountID;
    amount: string;
    asset: Asset;
    ctime: TimeMs;
    cursorToken: string;
    unread: boolean;
    isInflation: boolean;
    inflationSource?: string;
    sourceAmountMax: string;
    sourceAmountActual: string;
    sourceAsset: Asset;
    isAdvanced: boolean;
    summaryAdvanced: string;
    operations: string[] | null;
    trustline?: PaymentTrustlineLocal;
};
export declare type PaymentSummaryRelay = {
    kbTxId: KeybaseTransactionID;
    txId: TransactionID;
    txStatus: TransactionStatus;
    txErrMsg: string;
    fromStellar: AccountID;
    from: keybase1.UserVersion;
    fromDeviceId: keybase1.DeviceID;
    to?: keybase1.UserVersion;
    toAssertion: string;
    relayAccount: AccountID;
    amount: string;
    displayAmount?: string;
    displayCurrency?: string;
    ctime: TimeMs;
    rtime: TimeMs;
    boxB64: string;
    teamId: keybase1.TeamID;
    claim?: ClaimSummary;
    cursorToken: string;
    batchId: string;
    fromAirdrop: boolean;
};
export declare type AccountDetails = {
    accountId: AccountID;
    seqno: string;
    balances: Balance[] | null;
    subentryCount: number;
    available: string;
    reserves: AccountReserve[] | null;
    readTransactionId?: TransactionID;
    unreadPayments: number;
    displayCurrency: string;
    inflationDestination?: AccountID;
};
export declare type UIPaymentReviewed = {
    bid: BuildPaymentID;
    reviewId: number;
    seqno: number;
    banners: SendBannerLocal[] | null;
    nextButton: string;
};
export declare type BundleSecretVersioned = {
    version: BundleVersion.V1;
    V1: BundleSecretUnsupported;
} | {
    version: BundleVersion.V2;
    V2: BundleSecretV2;
} | {
    version: BundleVersion.V3;
    V3: BundleSecretUnsupported;
} | {
    version: BundleVersion.V4;
    V4: BundleSecretUnsupported;
} | {
    version: BundleVersion.V5;
    V5: BundleSecretUnsupported;
} | {
    version: BundleVersion.V6;
    V6: BundleSecretUnsupported;
} | {
    version: BundleVersion.V7;
    V7: BundleSecretUnsupported;
} | {
    version: BundleVersion.V8;
    V8: BundleSecretUnsupported;
} | {
    version: BundleVersion.V9;
    V9: BundleSecretUnsupported;
} | {
    version: BundleVersion.V10;
    V10: BundleSecretUnsupported;
} | {
    version: Exclude<BundleVersion, BundleVersion.V1 | BundleVersion.V2 | BundleVersion.V3 | BundleVersion.V4 | BundleVersion.V5 | BundleVersion.V6 | BundleVersion.V7 | BundleVersion.V8 | BundleVersion.V9 | BundleVersion.V10>;
};
export declare type PaymentOrErrorLocal = {
    payment?: PaymentLocal;
    err?: string;
};
export declare type PaymentDetailsLocal = {
    summary: PaymentLocal;
    details: PaymentDetailsOnlyLocal;
};
export declare type PaymentMultiPost = {
    fromDeviceId: keybase1.DeviceID;
    signedTransaction: string;
    operations: PaymentOp[] | null;
    batchId: string;
};
export declare type PaymentSummary = {
    typ: PaymentSummaryType.STELLAR;
    STELLAR: PaymentSummaryStellar;
} | {
    typ: PaymentSummaryType.DIRECT;
    DIRECT: PaymentSummaryDirect;
} | {
    typ: PaymentSummaryType.RELAY;
    RELAY: PaymentSummaryRelay;
} | {
    typ: Exclude<PaymentSummaryType, PaymentSummaryType.STELLAR | PaymentSummaryType.DIRECT | PaymentSummaryType.RELAY>;
};
export declare type PaymentsPageLocal = {
    payments: PaymentOrErrorLocal[] | null;
    cursor?: PageCursor;
    oldestUnread?: PaymentID;
};
export declare type PaymentDetails = {
    summary: PaymentSummary;
    memo: string;
    memoType: string;
    externalTxUrl: string;
    feeCharged: string;
    pathIntermediate: Asset[] | null;
};
export declare type PaymentsPage = {
    payments: PaymentSummary[] | null;
    cursor?: PageCursor;
    oldestUnread?: TransactionID;
};
export declare type DetailsPlusPayments = {
    details: AccountDetails;
    recentPayments: PaymentsPage;
    pendingPayments: PaymentSummary[] | null;
};
