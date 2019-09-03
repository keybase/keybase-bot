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
export declare type BundleSecretVersioned = {
    version: BundleVersion.V1;
    V1: BundleSecretUnsupported | null;
} | {
    version: BundleVersion.V2;
    V2: BundleSecretV2 | null;
} | {
    version: BundleVersion.V3;
    V3: BundleSecretUnsupported | null;
} | {
    version: BundleVersion.V4;
    V4: BundleSecretUnsupported | null;
} | {
    version: BundleVersion.V5;
    V5: BundleSecretUnsupported | null;
} | {
    version: BundleVersion.V6;
    V6: BundleSecretUnsupported | null;
} | {
    version: BundleVersion.V7;
    V7: BundleSecretUnsupported | null;
} | {
    version: BundleVersion.V8;
    V8: BundleSecretUnsupported | null;
} | {
    version: BundleVersion.V9;
    V9: BundleSecretUnsupported | null;
} | {
    version: BundleVersion.V10;
    V10: BundleSecretUnsupported | null;
};
export declare type BundleVisibleV2 = {
    revision: BundleRevision;
    prev: Hash;
    accounts: BundleVisibleEntryV2[];
};
export declare type BundleSecretV2 = {
    visibleHash: Hash;
    accounts: BundleSecretEntryV2[];
};
export declare type BundleVisibleEntryV2 = {
    accountID: AccountID;
    mode: AccountMode;
    isPrimary: boolean;
    acctBundleRevision: BundleRevision;
    encAcctBundleHash: Hash;
};
export declare type BundleSecretEntryV2 = {
    accountID: AccountID;
    name: string;
};
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
export declare type AccountBundleSecretVersioned = {
    version: AccountBundleVersion.V1;
    V1: AccountBundleSecretV1 | null;
} | {
    version: AccountBundleVersion.V2;
    V2: AccountBundleSecretUnsupported | null;
} | {
    version: AccountBundleVersion.V3;
    V3: AccountBundleSecretUnsupported | null;
} | {
    version: AccountBundleVersion.V4;
    V4: AccountBundleSecretUnsupported | null;
} | {
    version: AccountBundleVersion.V5;
    V5: AccountBundleSecretUnsupported | null;
} | {
    version: AccountBundleVersion.V6;
    V6: AccountBundleSecretUnsupported | null;
} | {
    version: AccountBundleVersion.V7;
    V7: AccountBundleSecretUnsupported | null;
} | {
    version: AccountBundleVersion.V8;
    V8: AccountBundleSecretUnsupported | null;
} | {
    version: AccountBundleVersion.V9;
    V9: AccountBundleSecretUnsupported | null;
} | {
    version: AccountBundleVersion.V10;
    V10: AccountBundleSecretUnsupported | null;
};
export declare type AccountBundleSecretV1 = {
    accountID: AccountID;
    signers: SecretKey[];
};
export declare type AccountBundleSecretUnsupported = {};
export declare type Bundle = {
    revision: BundleRevision;
    prev: Hash;
    ownHash: Hash;
    accounts: BundleEntry[];
    accountBundles: {
        [key: string]: AccountBundle;
    };
};
export declare type BundleEntry = {
    accountID: AccountID;
    mode: AccountMode;
    isPrimary: boolean;
    name: string;
    acctBundleRevision: BundleRevision;
    encAcctBundleHash: Hash;
};
export declare type AccountBundle = {
    prev: Hash;
    ownHash: Hash;
    accountID: AccountID;
    signers: SecretKey[];
};
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
};
export declare type AssetListResult = {
    assets: Asset[];
    totalCount: number;
};
export declare type Balance = {
    asset: Asset;
    amount: string;
    limit: string;
    isAuthorized: boolean;
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
export declare type PaymentResult = {
    senderAccountID: AccountID;
    keybaseID: KeybaseTransactionID;
    stellarID: TransactionID;
    pending: boolean;
};
export declare type RelayClaimResult = {
    claimStellarID: TransactionID;
};
export declare type EncryptedNote = {
    v: number;
    e: Buffer;
    n: keybase1.BoxNonce;
    sender: NoteRecipient;
    recipient?: NoteRecipient;
};
export declare type NoteRecipient = {
    user: keybase1.UserVersion;
    pukGen: keybase1.PerUserKeyGeneration;
};
export declare type NoteContents = {
    note: string;
    stellarID: TransactionID;
};
export declare type EncryptedRelaySecret = {
    v: number;
    e: Buffer;
    n: keybase1.BoxNonce;
    gen: keybase1.PerTeamKeyGeneration;
};
export declare type RelayContents = {
    stellarID: TransactionID;
    sk: SecretKey;
    note: string;
};
export declare type OutsideCurrencyCode = string;
export declare type OutsideExchangeRate = {
    currency: OutsideCurrencyCode;
    rate: string;
};
export declare type CurrencySymbol = {
    symbol: string;
    ambigious: boolean;
    postfix: boolean;
};
export declare type OutsideCurrencyDefinition = {
    name: string;
    symbol: CurrencySymbol;
};
export declare type StellarServerDefinitions = {
    revision: number;
    currencies: {
        [key: string]: OutsideCurrencyDefinition;
    };
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
export declare type Trustline = {
    assetCode: AssetCode;
    issuer: AccountID;
};
export declare type PaymentPath = {
    sourceAmount: string;
    sourceAmountMax: string;
    sourceAsset: Asset;
    path: Asset[];
    destinationAmount: string;
    destinationAsset: Asset;
    sourceInsufficientBalance: string;
};
export declare type PaymentStatusMsg = {
    accountID: AccountID;
    kbTxID: KeybaseTransactionID;
    txID: TransactionID;
};
export declare type RequestStatusMsg = {
    reqID: KeybaseRequestID;
};
export declare type PaymentNotificationMsg = {
    accountID: AccountID;
    paymentID: PaymentID;
};
export declare type WalletAccountLocal = {
    accountID: AccountID;
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
export declare type AccountAssetLocal = {
    name: string;
    assetCode: string;
    issuerName: string;
    issuerAccountID: string;
    issuerVerifiedDomain: string;
    balanceTotal: string;
    balanceAvailableToSend: string;
    worthCurrency: string;
    worth: string;
    availableToSendWorth: string;
    reserves: AccountReserve[];
    desc: string;
    infoUrl: string;
    infoUrlText: string;
    showDepositButton: boolean;
    depositButtonText: string;
    showWithdrawButton: boolean;
    withdrawButtonText: string;
};
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
export declare type PaymentOrErrorLocal = {
    payment?: PaymentLocal;
    err?: string;
};
export declare type PaymentsPageLocal = {
    payments: PaymentOrErrorLocal[];
    cursor?: PageCursor;
    oldestUnread?: PaymentID;
};
export declare type PaymentLocal = {
    id: PaymentID;
    txID: TransactionID;
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
    issuerAccountID?: AccountID;
    fromType: ParticipantType;
    toType: ParticipantType;
    assetCode: string;
    fromAccountID: AccountID;
    fromAccountName: string;
    fromUsername: string;
    toAccountID?: AccountID;
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
    operations: string[];
    unread: boolean;
    batchID: string;
    fromAirdrop: boolean;
    isInflation: boolean;
    inflationSource?: string;
    trustline?: PaymentTrustlineLocal;
};
export declare type PaymentDetailsLocal = {
    summary: PaymentLocal;
    details: PaymentDetailsOnlyLocal;
};
export declare type PaymentDetailsOnlyLocal = {
    publicNote: string;
    publicNoteType: string;
    externalTxURL: string;
    feeChargedDescription: string;
    pathIntermediate: Asset[];
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
export declare type BuildPaymentID = string;
export declare type BuildPaymentResLocal = {
    readyToReview: boolean;
    from: AccountID;
    toErrMsg: string;
    amountErrMsg: string;
    secretNoteErrMsg: string;
    publicMemoErrMsg: string;
    worthDescription: string;
    worthInfo: string;
    worthAmount: string;
    worthCurrency: string;
    displayAmountXLM: string;
    displayAmountFiat: string;
    sendingIntentionXLM: boolean;
    amountAvailable: string;
    banners: SendBannerLocal[];
};
export declare enum AdvancedBanner {
    NO_BANNER = "no_banner",
    SENDER_BANNER = "sender_banner",
    RECEIVER_BANNER = "receiver_banner"
}
export declare type SendBannerLocal = {
    level: string;
    message: string;
    proofsChanged: boolean;
    offerAdvancedSendForm: AdvancedBanner;
};
export declare type SendPaymentResLocal = {
    kbTxID: KeybaseTransactionID;
    pending: boolean;
    jumpToChat: string;
};
export declare type BuildRequestResLocal = {
    readyToRequest: boolean;
    toErrMsg: string;
    amountErrMsg: string;
    secretNoteErrMsg: string;
    worthDescription: string;
    worthInfo: string;
    displayAmountXLM: string;
    displayAmountFiat: string;
    sendingIntentionXLM: boolean;
    banners: SendBannerLocal[];
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
export declare type InflationDestinationTag = string;
export declare type PredefinedInflationDestination = {
    tag: InflationDestinationTag;
    name: string;
    recommended: boolean;
    accountID: AccountID;
    url: string;
};
export declare type InflationDestinationResultLocal = {
    destination?: AccountID;
    knownDestination?: PredefinedInflationDestination;
    self: boolean;
};
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
export declare type AirdropStatus = {
    state: AirdropState;
    rows: AirdropQualification[];
};
export declare type RecipientTrustlinesLocal = {
    trustlines: Balance[];
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
export declare type AssetActionResultLocal = {
    externalUrl?: string;
    messageFromAnchor?: string;
};
export declare type SendResultCLILocal = {
    kbTxID: KeybaseTransactionID;
    txID: TransactionID;
};
export declare type PaymentOrErrorCLILocal = {
    payment?: PaymentCLILocal;
    err?: string;
};
export declare type PaymentCLILocal = {
    txID: TransactionID;
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
    operations: string[];
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
export declare type OwnAccountCLILocal = {
    accountID: AccountID;
    isPrimary: boolean;
    name: string;
    balance: Balance[];
    exchangeRate?: OutsideExchangeRate;
    accountMode: AccountMode;
};
export declare type LookupResultCLILocal = {
    accountID: AccountID;
    username?: string;
};
export declare type BatchPaymentError = {
    message: string;
    code: number;
};
export declare type BatchPaymentResult = {
    username: string;
    startTime: TimeMs;
    submittedTime: TimeMs;
    endTime: TimeMs;
    txID: TransactionID;
    status: PaymentStatus;
    statusDescription: string;
    error?: BatchPaymentError;
};
export declare type BatchResultLocal = {
    startTime: TimeMs;
    preparedTime: TimeMs;
    allSubmittedTime: TimeMs;
    allCompleteTime: TimeMs;
    endTime: TimeMs;
    payments: BatchPaymentResult[];
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
export declare type BatchPaymentArg = {
    recipient: string;
    amount: string;
    message: string;
};
export declare type TxDisplaySummary = {
    source: AccountID;
    fee: number;
    memo: string;
    memoType: string;
    operations: string[];
};
export declare type ValidateStellarURIResultLocal = {
    operation: string;
    originDomain: string;
    message: string;
    callbackURL: string;
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
export declare type PartnerUrl = {
    url: string;
    title: string;
    description: string;
    iconFilename: string;
    adminOnly: boolean;
    extra: string;
};
export declare type SignXdrResult = {
    singedTx: string;
    accountID: AccountID;
    submitErr?: string;
    submitTxID?: TransactionID;
};
export declare type StaticConfig = {
    paymentNoteMaxLength: number;
    requestNoteMaxLength: number;
    publicMemoMaxLength: number;
};
export declare type ChatConversationID = string;
export declare type PaymentDirectPost = {
    fromDeviceID: keybase1.DeviceID;
    to?: keybase1.UserVersion;
    displayAmount: string;
    displayCurrency: string;
    noteB64: string;
    signedTransaction: string;
    quickReturn: boolean;
    chatConversationID?: ChatConversationID;
    batchID: string;
};
export declare type PaymentRelayPost = {
    fromDeviceID: keybase1.DeviceID;
    to?: keybase1.UserVersion;
    toAssertion: string;
    relayAccount: AccountID;
    teamID: keybase1.TeamID;
    displayAmount: string;
    displayCurrency: string;
    boxB64: string;
    signedTransaction: string;
    quickReturn: boolean;
    chatConversationID?: ChatConversationID;
    batchID: string;
};
export declare type RelayClaimPost = {
    keybaseID: KeybaseTransactionID;
    dir: RelayDirection;
    signedTransaction: string;
    autoClaimToken?: string;
};
export declare type PathPaymentPost = {
    fromDeviceID: keybase1.DeviceID;
    to?: keybase1.UserVersion;
    noteB64: string;
    signedTransaction: string;
    quickReturn: boolean;
    chatConversationID?: ChatConversationID;
};
export declare type DirectOp = {
    noteB64: string;
};
export declare type RelayOp = {
    toAssertion: string;
    relayAccount: AccountID;
    teamID: keybase1.TeamID;
    boxB64: string;
};
export declare type PaymentOp = {
    to?: keybase1.UserVersion;
    direct?: DirectOp;
    relay?: RelayOp;
};
export declare type PaymentMultiPost = {
    fromDeviceID: keybase1.DeviceID;
    signedTransaction: string;
    operations: PaymentOp[];
    batchID: string;
};
export declare enum PaymentSummaryType {
    NONE = "none",
    STELLAR = "stellar",
    DIRECT = "direct",
    RELAY = "relay"
}
export declare type PaymentSummary = {
    typ: PaymentSummaryType.STELLAR;
    STELLAR: PaymentSummaryStellar | null;
} | {
    typ: PaymentSummaryType.DIRECT;
    DIRECT: PaymentSummaryDirect | null;
} | {
    typ: PaymentSummaryType.RELAY;
    RELAY: PaymentSummaryRelay | null;
};
export declare type PaymentSummaryStellar = {
    txID: TransactionID;
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
    operations: string[];
    trustline?: PaymentTrustlineLocal;
};
export declare type PaymentSummaryDirect = {
    kbTxID: KeybaseTransactionID;
    txID: TransactionID;
    txStatus: TransactionStatus;
    txErrMsg: string;
    fromStellar: AccountID;
    from: keybase1.UserVersion;
    fromDeviceID: keybase1.DeviceID;
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
    batchID: string;
    fromAirdrop: boolean;
    sourceAmountMax: string;
    sourceAmountActual: string;
    sourceAsset: Asset;
};
export declare type PaymentSummaryRelay = {
    kbTxID: KeybaseTransactionID;
    txID: TransactionID;
    txStatus: TransactionStatus;
    txErrMsg: string;
    fromStellar: AccountID;
    from: keybase1.UserVersion;
    fromDeviceID: keybase1.DeviceID;
    to?: keybase1.UserVersion;
    toAssertion: string;
    relayAccount: AccountID;
    amount: string;
    displayAmount?: string;
    displayCurrency?: string;
    ctime: TimeMs;
    rtime: TimeMs;
    boxB64: string;
    teamID: keybase1.TeamID;
    claim?: ClaimSummary;
    cursorToken: string;
    batchID: string;
    fromAirdrop: boolean;
};
export declare type ClaimSummary = {
    txID: TransactionID;
    txStatus: TransactionStatus;
    txErrMsg: string;
    dir: RelayDirection;
    toStellar: AccountID;
    to: keybase1.UserVersion;
};
export declare type PaymentDetails = {
    summary: PaymentSummary;
    memo: string;
    memoType: string;
    externalTxURL: string;
    feeCharged: string;
    pathIntermediate: Asset[];
};
export declare type AccountDetails = {
    accountID: AccountID;
    seqno: string;
    balances: Balance[];
    subentryCount: number;
    available: string;
    reserves: AccountReserve[];
    readTransactionID?: TransactionID;
    unreadPayments: number;
    displayCurrency: string;
    inflationDestination?: AccountID;
};
export declare type PaymentsPage = {
    payments: PaymentSummary[];
    cursor?: PageCursor;
    oldestUnread?: TransactionID;
};
export declare type SubmitMultiRes = {
    txID: TransactionID;
};
export declare type AutoClaim = {
    kbTxID: KeybaseTransactionID;
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
    fundingKbTxID: KeybaseTransactionID;
    status: RequestStatus;
};
export declare type TimeboundsRecommendation = {
    timeNow: keybase1.UnixTime;
    timeout: number;
};
export declare type NetworkOptions = {
    baseFee: number;
};
export declare type DetailsPlusPayments = {
    details: AccountDetails;
    recentPayments: PaymentsPage;
    pendingPayments: PaymentSummary[];
};
export declare type PaymentPathQuery = {
    source: AccountID;
    destination: AccountID;
    sourceAsset: Asset;
    destinationAsset: Asset;
    amount: string;
};
export declare type UIPaymentReviewed = {
    bid: BuildPaymentID;
    reviewID: number;
    seqno: number;
    banners: SendBannerLocal[];
    nextButton: string;
};
