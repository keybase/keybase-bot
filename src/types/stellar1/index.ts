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

import * as keybase1 from '../keybase1'

export type BundleRevision = number

export type EncryptedBundle = {
  v: number
  e: Buffer
  n: keybase1.BoxNonce
  gen: keybase1.PerUserKeyGeneration
}

export enum BundleVersion {
  V1 = 'v1',
  V2 = 'v2',
  V3 = 'v3',
  V4 = 'v4',
  V5 = 'v5',
  V6 = 'v6',
  V7 = 'v7',
  V8 = 'v8',
  V9 = 'v9',
  V10 = 'v10',
}

export type BundleSecretUnsupported = {}

export type EncryptedAccountBundle = {
  v: number
  e: Buffer
  n: keybase1.BoxNonce
  gen: keybase1.PerUserKeyGeneration
}

export enum AccountBundleVersion {
  V1 = 'v1',
  V2 = 'v2',
  V3 = 'v3',
  V4 = 'v4',
  V5 = 'v5',
  V6 = 'v6',
  V7 = 'v7',
  V8 = 'v8',
  V9 = 'v9',
  V10 = 'v10',
}

export type AccountBundleSecretUnsupported = {}

export type AccountID = string

export type SecretKey = string

export type TransactionID = string

export type PaymentID = string

export type KeybaseTransactionID = string

export type TimeMs = number

export type Hash = Buffer

export type KeybaseRequestID = string

export type AssetCode = string

export type Asset = {
  type: string
  code: string
  issuer: string
  verifiedDomain: string
  issuerName: string
  desc: string
  infoUrl: string
  infoUrlText: string
  showDepositButton: boolean
  depositButtonText: string
  showWithdrawButton: boolean
  withdrawButtonText: string
  withdrawType: string
  transferServer: string
  authEndpoint: string
  depositReqAuth: boolean
  withdrawReqAuth: boolean
}

export type AccountReserve = {
  amount: string
  description: string
}

export enum TransactionStatus {
  NONE = 'none',
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR_TRANSIENT = 'error_transient',
  ERROR_PERMANENT = 'error_permanent',
}

export enum RequestStatus {
  OK = 'ok',
  CANCELED = 'canceled',
  DONE = 'done',
}

export enum PaymentStrategy {
  NONE = 'none',
  DIRECT = 'direct',
  RELAY = 'relay',
}

export enum RelayDirection {
  CLAIM = 'claim',
  YANK = 'yank',
}

export type NoteRecipient = {
  user: keybase1.UserVersion
  pukGen: keybase1.PerUserKeyGeneration
}

export type EncryptedRelaySecret = {
  v: number
  e: Buffer
  n: keybase1.BoxNonce
  gen: keybase1.PerTeamKeyGeneration
}

export type OutsideCurrencyCode = string

export type CurrencySymbol = {
  str: string
  ambigious: boolean
  postfix: boolean
}

export type PageCursor = {
  horizonCursor: string
  directCursor: string
  relayCursor: string
}

export enum AccountMode {
  NONE = 'none',
  USER = 'user',
  MOBILE = 'mobile',
}

export enum BalanceDelta {
  NONE = 'none',
  INCREASE = 'increase',
  DECREASE = 'decrease',
}

export enum PaymentStatus {
  NONE = 'none',
  PENDING = 'pending',
  CLAIMABLE = 'claimable',
  COMPLETED = 'completed',
  ERROR = 'error',
  UNKNOWN = 'unknown',
  CANCELED = 'canceled',
}

export enum ParticipantType {
  NONE = 'none',
  KEYBASE = 'keybase',
  STELLAR = 'stellar',
  SBS = 'sbs',
  OWNACCOUNT = 'ownaccount',
}

export type BuildPaymentID = string

export enum AdvancedBanner {
  NO_BANNER = 'no_banner',
  SENDER_BANNER = 'sender_banner',
  RECEIVER_BANNER = 'receiver_banner',
}

export type InflationDestinationTag = string

export type AirdropDetails = {
  isPromoted: boolean
  details: string
  disclaimer: string
}

export type AirdropState = string

export type AirdropQualification = {
  title: string
  subtitle: string
  valid: boolean
}

export type AssetActionResultLocal = {
  externalUrl?: string
  messageFromAnchor?: string
}

export type BatchPaymentError = {
  message: string
  code: number
}

export type BatchPaymentArg = {
  recipient: string
  amount: string
  message: string
}

export type PartnerUrl = {
  url: string
  title: string
  description: string
  iconFilename: string
  adminOnly: boolean
  extra: string
}

export type StaticConfig = {
  paymentNoteMaxLength: number
  requestNoteMaxLength: number
  publicMemoMaxLength: number
}

export type ChatConversationID = string

export type DirectOp = {
  noteB64: string
}

export enum PaymentSummaryType {
  NONE = 'none',
  STELLAR = 'stellar',
  DIRECT = 'direct',
  RELAY = 'relay',
}

export type TimeboundsRecommendation = {
  timeNow: keybase1.UnixTime
  timeout: number
}

export type NetworkOptions = {
  baseFee: number
}

export type BundleVisibleEntryV2 = {
  accountId: AccountID
  mode: AccountMode
  isPrimary: boolean
  acctBundleRevision: BundleRevision
  encAcctBundleHash: Hash
}

export type BundleSecretEntryV2 = {
  accountId: AccountID
  name: string
}

export type AccountBundleSecretV1 = {
  accountId: AccountID
  signers: SecretKey[] | null
}

export type BundleEntry = {
  accountId: AccountID
  mode: AccountMode
  isPrimary: boolean
  name: string
  acctBundleRevision: BundleRevision
  encAcctBundleHash: Hash
}

export type AccountBundle = {
  prev: Hash
  ownHash: Hash
  accountId: AccountID
  signers: SecretKey[] | null
}

export type AssetListResult = {
  assets: Asset[] | null
  totalCount: number
}

export type Balance = {
  asset: Asset
  amount: string
  limit: string
  isAuthorized: boolean
}

export type PaymentResult = {
  senderAccountId: AccountID
  keybaseId: KeybaseTransactionID
  stellarId: TransactionID
  pending: boolean
}

export type RelayClaimResult = {
  claimStellarId: TransactionID
}

export type EncryptedNote = {
  v: number
  e: Buffer
  n: keybase1.BoxNonce
  sender: NoteRecipient
  recipient?: NoteRecipient
}

export type NoteContents = {
  note: string
  stellarId: TransactionID
}

export type RelayContents = {
  stellarId: TransactionID
  sk: SecretKey
  note: string
}

export type OutsideExchangeRate = {
  currency: OutsideCurrencyCode
  rate: string
}

export type OutsideCurrencyDefinition = {
  name: string
  symbol: CurrencySymbol
}

export type Trustline = {
  assetCode: AssetCode
  issuer: AccountID
}

export type PaymentPath = {
  sourceAmount: string
  sourceAmountMax: string
  sourceAsset: Asset
  path: Asset[] | null
  destinationAmount: string
  destinationAsset: Asset
  sourceInsufficientBalance: string
}

export type PaymentStatusMsg = {
  accountId: AccountID
  kbTxId: KeybaseTransactionID
  txId: TransactionID
}

export type RequestStatusMsg = {
  reqId: KeybaseRequestID
}

export type PaymentNotificationMsg = {
  accountId: AccountID
  paymentId: PaymentID
}

export type AccountAssetLocal = {
  name: string
  assetCode: string
  issuerName: string
  issuerAccountId: string
  issuerVerifiedDomain: string
  balanceTotal: string
  balanceAvailableToSend: string
  worthCurrency: string
  worth: string
  availableToSendWorth: string
  reserves: AccountReserve[] | null
  desc: string
  infoUrl: string
  infoUrlText: string
  showDepositButton: boolean
  depositButtonText: string
  showWithdrawButton: boolean
  withdrawButtonText: string
}

export type PaymentDetailsOnlyLocal = {
  publicNote: string
  publicNoteType: string
  externalTxUrl: string
  feeChargedDescription: string
  pathIntermediate: Asset[] | null
}

export type PaymentTrustlineLocal = {
  asset: Asset
  remove: boolean
}

export type CurrencyLocal = {
  description: string
  code: OutsideCurrencyCode
  symbol: string
  name: string
}

export type SendAssetChoiceLocal = {
  asset: Asset
  enabled: boolean
  left: string
  right: string
  subtext: string
}

export type SendBannerLocal = {
  level: string
  message: string
  proofsChanged: boolean
  offerAdvancedSendForm: AdvancedBanner
}

export type SendPaymentResLocal = {
  kbTxId: KeybaseTransactionID
  pending: boolean
  jumpToChat: string
}

export type RequestDetailsLocal = {
  id: KeybaseRequestID
  fromAssertion: string
  fromCurrentUser: boolean
  toUserType: ParticipantType
  toAssertion: string
  amount: string
  asset?: Asset
  currency?: OutsideCurrencyCode
  amountDescription: string
  worthAtRequestTime: string
  status: RequestStatus
}

export type PredefinedInflationDestination = {
  tag: InflationDestinationTag
  name: string
  recommended: boolean
  accountId: AccountID
  url: string
}

export type AirdropStatus = {
  state: AirdropState
  rows: AirdropQualification[] | null
}

export type SendResultCLILocal = {
  kbTxId: KeybaseTransactionID
  txId: TransactionID
}

export type PaymentCLILocal = {
  txId: TransactionID
  time: TimeMs
  status: string
  statusDetail: string
  amount: string
  asset: Asset
  displayAmount?: string
  displayCurrency?: string
  sourceAmountMax: string
  sourceAmountActual: string
  sourceAsset: Asset
  isAdvanced: boolean
  summaryAdvanced: string
  operations: string[] | null
  fromStellar: AccountID
  toStellar?: AccountID
  fromUsername?: string
  toUsername?: string
  toAssertion?: string
  note: string
  noteErr: string
  unread: boolean
  publicNote: string
  publicNoteType: string
  feeChargedDescription: string
}

export type LookupResultCLILocal = {
  accountId: AccountID
  username?: string
}

export type BatchPaymentResult = {
  username: string
  startTime: TimeMs
  submittedTime: TimeMs
  endTime: TimeMs
  txId: TransactionID
  status: PaymentStatus
  statusDescription: string
  error?: BatchPaymentError
}

export type TxDisplaySummary = {
  source: AccountID
  fee: number
  memo: string
  memoType: string
  operations: string[] | null
}

export type SignXdrResult = {
  singedTx: string
  accountId: AccountID
  submitErr?: string
  submitTxId?: TransactionID
}

export type PaymentDirectPost = {
  fromDeviceId: keybase1.DeviceID
  to?: keybase1.UserVersion
  displayAmount: string
  displayCurrency: string
  noteB64: string
  signedTransaction: string
  quickReturn: boolean
  chatConversationId?: ChatConversationID
  batchId: string
}

export type PaymentRelayPost = {
  fromDeviceId: keybase1.DeviceID
  to?: keybase1.UserVersion
  toAssertion: string
  relayAccount: AccountID
  teamId: keybase1.TeamID
  displayAmount: string
  displayCurrency: string
  boxB64: string
  signedTransaction: string
  quickReturn: boolean
  chatConversationId?: ChatConversationID
  batchId: string
}

export type RelayClaimPost = {
  keybaseId: KeybaseTransactionID
  dir: RelayDirection
  signedTransaction: string
  autoClaimToken?: string
}

export type PathPaymentPost = {
  fromDeviceId: keybase1.DeviceID
  to?: keybase1.UserVersion
  noteB64: string
  signedTransaction: string
  quickReturn: boolean
  chatConversationId?: ChatConversationID
}

export type RelayOp = {
  toAssertion: string
  relayAccount: AccountID
  teamId: keybase1.TeamID
  boxB64: string
}

export type PaymentSummaryDirect = {
  kbTxId: KeybaseTransactionID
  txId: TransactionID
  txStatus: TransactionStatus
  txErrMsg: string
  fromStellar: AccountID
  from: keybase1.UserVersion
  fromDeviceId: keybase1.DeviceID
  toStellar: AccountID
  to?: keybase1.UserVersion
  amount: string
  asset: Asset
  displayAmount?: string
  displayCurrency?: string
  noteB64: string
  fromDisplayAmount: string
  fromDisplayCurrency: string
  toDisplayAmount: string
  toDisplayCurrency: string
  ctime: TimeMs
  rtime: TimeMs
  cursorToken: string
  unread: boolean
  fromPrimary: boolean
  batchId: string
  fromAirdrop: boolean
  sourceAmountMax: string
  sourceAmountActual: string
  sourceAsset: Asset
}

export type ClaimSummary = {
  txId: TransactionID
  txStatus: TransactionStatus
  txErrMsg: string
  dir: RelayDirection
  toStellar: AccountID
  to: keybase1.UserVersion
}

export type SubmitMultiRes = {
  txId: TransactionID
}

export type AutoClaim = {
  kbTxId: KeybaseTransactionID
}

export type RequestPost = {
  toUser?: keybase1.UserVersion
  toAssertion: string
  amount: string
  asset?: Asset
  currency?: OutsideCurrencyCode
}

export type RequestDetails = {
  id: KeybaseRequestID
  fromUser: keybase1.UserVersion
  toUser?: keybase1.UserVersion
  toAssertion: string
  amount: string
  asset?: Asset
  currency?: OutsideCurrencyCode
  fromDisplayAmount: string
  fromDisplayCurrency: string
  toDisplayAmount: string
  toDisplayCurrency: string
  fundingKbTxId: KeybaseTransactionID
  status: RequestStatus
}

export type PaymentPathQuery = {
  source: AccountID
  destination: AccountID
  sourceAsset: Asset
  destinationAsset: Asset
  amount: string
}

export type BundleVisibleV2 = {
  revision: BundleRevision
  prev: Hash
  accounts: BundleVisibleEntryV2[] | null
}

export type BundleSecretV2 = {
  visibleHash: Hash
  accounts: BundleSecretEntryV2[] | null
}

export type AccountBundleSecretVersioned =
  | {version: AccountBundleVersion.V1; V1: AccountBundleSecretV1}
  | {version: AccountBundleVersion.V2; V2: AccountBundleSecretUnsupported}
  | {version: AccountBundleVersion.V3; V3: AccountBundleSecretUnsupported}
  | {version: AccountBundleVersion.V4; V4: AccountBundleSecretUnsupported}
  | {version: AccountBundleVersion.V5; V5: AccountBundleSecretUnsupported}
  | {version: AccountBundleVersion.V6; V6: AccountBundleSecretUnsupported}
  | {version: AccountBundleVersion.V7; V7: AccountBundleSecretUnsupported}
  | {version: AccountBundleVersion.V8; V8: AccountBundleSecretUnsupported}
  | {version: AccountBundleVersion.V9; V9: AccountBundleSecretUnsupported}
  | {version: AccountBundleVersion.V10; V10: AccountBundleSecretUnsupported}
  | {
      version: Exclude<
        AccountBundleVersion,
        | AccountBundleVersion.V1
        | AccountBundleVersion.V2
        | AccountBundleVersion.V3
        | AccountBundleVersion.V4
        | AccountBundleVersion.V5
        | AccountBundleVersion.V6
        | AccountBundleVersion.V7
        | AccountBundleVersion.V8
        | AccountBundleVersion.V9
        | AccountBundleVersion.V10
      >
    }

export type Bundle = {
  revision: BundleRevision
  prev: Hash
  ownHash: Hash
  accounts: BundleEntry[] | null
  accountBundles: {[key: string]: AccountBundle}
}

export type StellarServerDefinitions = {
  revision: number
  currencies: {[key: string]: OutsideCurrencyDefinition}
}

export type WalletAccountLocal = {
  accountId: AccountID
  isDefault: boolean
  name: string
  balanceDescription: string
  seqno: string
  currencyLocal: CurrencyLocal
  accountMode: AccountMode
  accountModeEditable: boolean
  deviceReadOnly: boolean
  isFunded: boolean
  canSubmitTx: boolean
  canAddTrustline: boolean
}

export type PaymentLocal = {
  id: PaymentID
  txId: TransactionID
  time: TimeMs
  statusSimplified: PaymentStatus
  statusDescription: string
  statusDetail: string
  showCancel: boolean
  amountDescription: string
  delta: BalanceDelta
  worth: string
  worthAtSendTime: string
  issuerDescription: string
  issuerAccountId?: AccountID
  fromType: ParticipantType
  toType: ParticipantType
  assetCode: string
  fromAccountId: AccountID
  fromAccountName: string
  fromUsername: string
  toAccountId?: AccountID
  toAccountName: string
  toUsername: string
  toAssertion: string
  originalToAssertion: string
  note: string
  noteErr: string
  sourceAmountMax: string
  sourceAmountActual: string
  sourceAsset: Asset
  sourceConvRate: string
  isAdvanced: boolean
  summaryAdvanced: string
  operations: string[] | null
  unread: boolean
  batchId: string
  fromAirdrop: boolean
  isInflation: boolean
  inflationSource?: string
  trustline?: PaymentTrustlineLocal
}

export type BuildPaymentResLocal = {
  readyToReview: boolean
  from: AccountID
  toErrMsg: string
  amountErrMsg: string
  secretNoteErrMsg: string
  publicMemoErrMsg: string
  publicMemoOverride: string
  worthDescription: string
  worthInfo: string
  worthAmount: string
  worthCurrency: string
  displayAmountXlm: string
  displayAmountFiat: string
  sendingIntentionXlm: boolean
  amountAvailable: string
  banners: SendBannerLocal[] | null
}

export type BuildRequestResLocal = {
  readyToRequest: boolean
  toErrMsg: string
  amountErrMsg: string
  secretNoteErrMsg: string
  worthDescription: string
  worthInfo: string
  displayAmountXlm: string
  displayAmountFiat: string
  sendingIntentionXlm: boolean
  banners: SendBannerLocal[] | null
}

export type InflationDestinationResultLocal = {
  destination?: AccountID
  knownDestination?: PredefinedInflationDestination
  self: boolean
}

export type RecipientTrustlinesLocal = {
  trustlines: Balance[] | null
  recipientType: ParticipantType
}

export type PaymentPathLocal = {
  sourceDisplay: string
  sourceMaxDisplay: string
  destinationDisplay: string
  exchangeRate: string
  amountError: string
  destinationAccount: AccountID
  fullPath: PaymentPath
}

export type PaymentOrErrorCLILocal = {
  payment?: PaymentCLILocal
  err?: string
}

export type OwnAccountCLILocal = {
  accountId: AccountID
  isPrimary: boolean
  name: string
  balance: Balance[] | null
  exchangeRate?: OutsideExchangeRate
  accountMode: AccountMode
}

export type BatchResultLocal = {
  startTime: TimeMs
  preparedTime: TimeMs
  allSubmittedTime: TimeMs
  allCompleteTime: TimeMs
  endTime: TimeMs
  payments: BatchPaymentResult[] | null
  overallDurationMs: TimeMs
  prepareDurationMs: TimeMs
  submitDurationMs: TimeMs
  waitPaymentsDurationMs: TimeMs
  waitChatDurationMs: TimeMs
  countSuccess: number
  countDirect: number
  countRelay: number
  countError: number
  countPending: number
  avgDurationMs: TimeMs
  avgSuccessDurationMs: TimeMs
  avgDirectDurationMs: TimeMs
  avgRelayDurationMs: TimeMs
  avgErrorDurationMs: TimeMs
}

export type ValidateStellarURIResultLocal = {
  operation: string
  originDomain: string
  message: string
  callbackUrl: string
  xdr: string
  summary: TxDisplaySummary
  recipient: string
  amount: string
  assetCode: string
  assetIssuer: string
  memo: string
  memoType: string
  displayAmountFiat: string
  availableToSendNative: string
  availableToSendFiat: string
  signed: boolean
}

export type PaymentOp = {
  to?: keybase1.UserVersion
  direct?: DirectOp
  relay?: RelayOp
}

export type PaymentSummaryStellar = {
  txId: TransactionID
  from: AccountID
  to: AccountID
  amount: string
  asset: Asset
  ctime: TimeMs
  cursorToken: string
  unread: boolean
  isInflation: boolean
  inflationSource?: string
  sourceAmountMax: string
  sourceAmountActual: string
  sourceAsset: Asset
  isAdvanced: boolean
  summaryAdvanced: string
  operations: string[] | null
  trustline?: PaymentTrustlineLocal
}

export type PaymentSummaryRelay = {
  kbTxId: KeybaseTransactionID
  txId: TransactionID
  txStatus: TransactionStatus
  txErrMsg: string
  fromStellar: AccountID
  from: keybase1.UserVersion
  fromDeviceId: keybase1.DeviceID
  to?: keybase1.UserVersion
  toAssertion: string
  relayAccount: AccountID
  amount: string
  displayAmount?: string
  displayCurrency?: string
  ctime: TimeMs
  rtime: TimeMs
  boxB64: string
  teamId: keybase1.TeamID
  claim?: ClaimSummary
  cursorToken: string
  batchId: string
  fromAirdrop: boolean
}

export type AccountDetails = {
  accountId: AccountID
  seqno: string
  balances: Balance[] | null
  subentryCount: number
  available: string
  reserves: AccountReserve[] | null
  readTransactionId?: TransactionID
  unreadPayments: number
  displayCurrency: string
  inflationDestination?: AccountID
}

export type UIPaymentReviewed = {
  bid: BuildPaymentID
  reviewId: number
  seqno: number
  banners: SendBannerLocal[] | null
  nextButton: string
}

export type BundleSecretVersioned =
  | {version: BundleVersion.V1; V1: BundleSecretUnsupported}
  | {version: BundleVersion.V2; V2: BundleSecretV2}
  | {version: BundleVersion.V3; V3: BundleSecretUnsupported}
  | {version: BundleVersion.V4; V4: BundleSecretUnsupported}
  | {version: BundleVersion.V5; V5: BundleSecretUnsupported}
  | {version: BundleVersion.V6; V6: BundleSecretUnsupported}
  | {version: BundleVersion.V7; V7: BundleSecretUnsupported}
  | {version: BundleVersion.V8; V8: BundleSecretUnsupported}
  | {version: BundleVersion.V9; V9: BundleSecretUnsupported}
  | {version: BundleVersion.V10; V10: BundleSecretUnsupported}
  | {
      version: Exclude<
        BundleVersion,
        | BundleVersion.V1
        | BundleVersion.V2
        | BundleVersion.V3
        | BundleVersion.V4
        | BundleVersion.V5
        | BundleVersion.V6
        | BundleVersion.V7
        | BundleVersion.V8
        | BundleVersion.V9
        | BundleVersion.V10
      >
    }

export type PaymentOrErrorLocal = {
  payment?: PaymentLocal
  err?: string
}

export type PaymentDetailsLocal = {
  summary: PaymentLocal
  details: PaymentDetailsOnlyLocal
}

export type PaymentMultiPost = {
  fromDeviceId: keybase1.DeviceID
  signedTransaction: string
  operations: PaymentOp[] | null
  batchId: string
}

export type PaymentSummary =
  | {typ: PaymentSummaryType.STELLAR; STELLAR: PaymentSummaryStellar}
  | {typ: PaymentSummaryType.DIRECT; DIRECT: PaymentSummaryDirect}
  | {typ: PaymentSummaryType.RELAY; RELAY: PaymentSummaryRelay}
  | {typ: Exclude<PaymentSummaryType, PaymentSummaryType.STELLAR | PaymentSummaryType.DIRECT | PaymentSummaryType.RELAY>}

export type PaymentsPageLocal = {
  payments: PaymentOrErrorLocal[] | null
  cursor?: PageCursor
  oldestUnread?: PaymentID
}

export type PaymentDetails = {
  summary: PaymentSummary
  memo: string
  memoType: string
  externalTxUrl: string
  feeCharged: string
  pathIntermediate: Asset[] | null
}

export type PaymentsPage = {
  payments: PaymentSummary[] | null
  cursor?: PageCursor
  oldestUnread?: TransactionID
}

export type DetailsPlusPayments = {
  details: AccountDetails
  recentPayments: PaymentsPage
  pendingPayments: PaymentSummary[] | null
}
