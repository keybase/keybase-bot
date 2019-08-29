/*
 * undefined
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

import * as keybase1 from '../keybase1'

export type BundleRevision = number

export type EncryptedBundle = {
  v: number
  e: Buffer
  n: keybase1.BoxNonce
  gen: keybase1.PerUserKeyGeneration
}

export enum BundleVersion {
  V1 = 1,
  V2 = 2,
  V3 = 3,
  V4 = 4,
  V5 = 5,
  V6 = 6,
  V7 = 7,
  V8 = 8,
  V9 = 9,
  V10 = 10,
}

export type BundleSecretVersioned =
  | {version: BundleVersion.V1; V1: BundleSecretUnsupported | null}
  | {version: BundleVersion.V2; V2: BundleSecretV2 | null}
  | {version: BundleVersion.V3; V3: BundleSecretUnsupported | null}
  | {version: BundleVersion.V4; V4: BundleSecretUnsupported | null}
  | {version: BundleVersion.V5; V5: BundleSecretUnsupported | null}
  | {version: BundleVersion.V6; V6: BundleSecretUnsupported | null}
  | {version: BundleVersion.V7; V7: BundleSecretUnsupported | null}
  | {version: BundleVersion.V8; V8: BundleSecretUnsupported | null}
  | {version: BundleVersion.V9; V9: BundleSecretUnsupported | null}
  | {version: BundleVersion.V10; V10: BundleSecretUnsupported | null}

export type BundleVisibleV2 = {
  revision: BundleRevision
  prev: Hash
  accounts: BundleVisibleEntryV2[]
}

export type BundleSecretV2 = {
  visibleHash: Hash
  accounts: BundleSecretEntryV2[]
}

export type BundleVisibleEntryV2 = {
  accountID: AccountID
  mode: AccountMode
  isPrimary: boolean
  acctBundleRevision: BundleRevision
  encAcctBundleHash: Hash
}

export type BundleSecretEntryV2 = {
  accountID: AccountID
  name: string
}

export type BundleSecretUnsupported = {}

export type EncryptedAccountBundle = {
  v: number
  e: Buffer
  n: keybase1.BoxNonce
  gen: keybase1.PerUserKeyGeneration
}

export enum AccountBundleVersion {
  V1 = 1,
  V2 = 2,
  V3 = 3,
  V4 = 4,
  V5 = 5,
  V6 = 6,
  V7 = 7,
  V8 = 8,
  V9 = 9,
  V10 = 10,
}

export type AccountBundleSecretVersioned =
  | {version: AccountBundleVersion.V1; V1: AccountBundleSecretV1 | null}
  | {version: AccountBundleVersion.V2; V2: AccountBundleSecretUnsupported | null}
  | {version: AccountBundleVersion.V3; V3: AccountBundleSecretUnsupported | null}
  | {version: AccountBundleVersion.V4; V4: AccountBundleSecretUnsupported | null}
  | {version: AccountBundleVersion.V5; V5: AccountBundleSecretUnsupported | null}
  | {version: AccountBundleVersion.V6; V6: AccountBundleSecretUnsupported | null}
  | {version: AccountBundleVersion.V7; V7: AccountBundleSecretUnsupported | null}
  | {version: AccountBundleVersion.V8; V8: AccountBundleSecretUnsupported | null}
  | {version: AccountBundleVersion.V9; V9: AccountBundleSecretUnsupported | null}
  | {version: AccountBundleVersion.V10; V10: AccountBundleSecretUnsupported | null}

export type AccountBundleSecretV1 = {
  accountID: AccountID
  signers: SecretKey[]
}

export type AccountBundleSecretUnsupported = {}

export type Bundle = {
  revision: BundleRevision
  prev: Hash
  ownHash: Hash
  accounts: BundleEntry[]
  accountBundles: {[key: string]: AccountBundle}
}

export type BundleEntry = {
  accountID: AccountID
  mode: AccountMode
  isPrimary: boolean
  name: string
  acctBundleRevision: BundleRevision
  encAcctBundleHash: Hash
}

export type AccountBundle = {
  prev: Hash
  ownHash: Hash
  accountID: AccountID
  signers: SecretKey[]
}

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
}

export type AssetListResult = {
  assets: Asset[]
  totalCount: number
}

export type Balance = {
  asset: Asset
  amount: string
  limit: string
  isAuthorized: boolean
}

export type AccountReserve = {
  amount: string
  description: string
}

export enum TransactionStatus {
  NONE = 0,
  PENDING = 1,
  SUCCESS = 2,
  ERROR_TRANSIENT = 3,
  ERROR_PERMANENT = 4,
}

export enum RequestStatus {
  OK = 0,
  CANCELED = 1,
  DONE = 2,
}

export enum PaymentStrategy {
  NONE = 0,
  DIRECT = 1,
  RELAY = 2,
}

export enum RelayDirection {
  CLAIM = 0,
  YANK = 1,
}

export type PaymentResult = {
  senderAccountID: AccountID
  keybaseID: KeybaseTransactionID
  stellarID: TransactionID
  pending: boolean
}

export type RelayClaimResult = {
  claimStellarID: TransactionID
}

export type EncryptedNote = {
  v: number
  e: Buffer
  n: keybase1.BoxNonce
  sender: NoteRecipient
  recipient?: NoteRecipient
}

export type NoteRecipient = {
  user: keybase1.UserVersion
  pukGen: keybase1.PerUserKeyGeneration
}

export type NoteContents = {
  note: string
  stellarID: TransactionID
}

export type EncryptedRelaySecret = {
  v: number
  e: Buffer
  n: keybase1.BoxNonce
  gen: keybase1.PerTeamKeyGeneration
}

export type RelayContents = {
  stellarID: TransactionID
  sk: SecretKey
  note: string
}

export type OutsideCurrencyCode = string

export type OutsideExchangeRate = {
  currency: OutsideCurrencyCode
  rate: string
}

export type CurrencySymbol = {
  symbol: string
  ambigious: boolean
  postfix: boolean
}

export type OutsideCurrencyDefinition = {
  name: string
  symbol: CurrencySymbol
}

export type StellarServerDefinitions = {
  revision: number
  currencies: {[key: string]: OutsideCurrencyDefinition}
}

export type PageCursor = {
  horizonCursor: string
  directCursor: string
  relayCursor: string
}

export enum AccountMode {
  NONE = 0,
  USER = 1,
  MOBILE = 2,
}

export type Trustline = {
  assetCode: AssetCode
  issuer: AccountID
}

export type PaymentPath = {
  sourceAmount: string
  sourceAmountMax: string
  sourceAsset: Asset
  path: Asset[]
  destinationAmount: string
  destinationAsset: Asset
  sourceInsufficientBalance: string
}

export type PaymentStatusMsg = {
  accountID: AccountID
  kbTxID: KeybaseTransactionID
  txID: TransactionID
}

export type RequestStatusMsg = {
  reqID: KeybaseRequestID
}

export type PaymentNotificationMsg = {
  accountID: AccountID
  paymentID: PaymentID
}

export type WalletAccountLocal = {
  accountID: AccountID
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

export type AccountAssetLocal = {
  name: string
  assetCode: string
  issuerName: string
  issuerAccountID: string
  issuerVerifiedDomain: string
  balanceTotal: string
  balanceAvailableToSend: string
  worthCurrency: string
  worth: string
  availableToSendWorth: string
  reserves: AccountReserve[]
  desc: string
  infoUrl: string
  infoUrlText: string
  showDepositButton: boolean
  depositButtonText: string
  showWithdrawButton: boolean
  withdrawButtonText: string
}

export enum BalanceDelta {
  NONE = 0,
  INCREASE = 1,
  DECREASE = 2,
}

export enum PaymentStatus {
  NONE = 0,
  PENDING = 1,
  CLAIMABLE = 2,
  COMPLETED = 3,
  ERROR = 4,
  UNKNOWN = 5,
  CANCELED = 6,
}

export enum ParticipantType {
  NONE = 0,
  KEYBASE = 1,
  STELLAR = 2,
  SBS = 3,
  OWNACCOUNT = 4,
}

export type PaymentOrErrorLocal = {
  payment?: PaymentLocal
  err?: string
}

export type PaymentsPageLocal = {
  payments: PaymentOrErrorLocal[]
  cursor?: PageCursor
  oldestUnread?: PaymentID
}

export type PaymentLocal = {
  id: PaymentID
  txID: TransactionID
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
  issuerAccountID?: AccountID
  fromType: ParticipantType
  toType: ParticipantType
  assetCode: string
  fromAccountID: AccountID
  fromAccountName: string
  fromUsername: string
  toAccountID?: AccountID
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
  operations: string[]
  unread: boolean
  batchID: string
  fromAirdrop: boolean
  isInflation: boolean
  inflationSource?: string
  trustline?: PaymentTrustlineLocal
}

export type PaymentDetailsLocal = {
  summary: PaymentLocal
  details: PaymentDetailsOnlyLocal
}

export type PaymentDetailsOnlyLocal = {
  publicNote: string
  publicNoteType: string
  externalTxURL: string
  feeChargedDescription: string
  pathIntermediate: Asset[]
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

export type BuildPaymentID = string

export type BuildPaymentResLocal = {
  readyToReview: boolean
  from: AccountID
  toErrMsg: string
  amountErrMsg: string
  secretNoteErrMsg: string
  publicMemoErrMsg: string
  worthDescription: string
  worthInfo: string
  worthAmount: string
  worthCurrency: string
  displayAmountXLM: string
  displayAmountFiat: string
  sendingIntentionXLM: boolean
  amountAvailable: string
  banners: SendBannerLocal[]
}

export enum AdvancedBanner {
  NO_BANNER = 0,
  SENDER_BANNER = 1,
  RECEIVER_BANNER = 2,
}

export type SendBannerLocal = {
  level: string
  message: string
  proofsChanged: boolean
  offerAdvancedSendForm: AdvancedBanner
}

export type SendPaymentResLocal = {
  kbTxID: KeybaseTransactionID
  pending: boolean
  jumpToChat: string
}

export type BuildRequestResLocal = {
  readyToRequest: boolean
  toErrMsg: string
  amountErrMsg: string
  secretNoteErrMsg: string
  worthDescription: string
  worthInfo: string
  displayAmountXLM: string
  displayAmountFiat: string
  sendingIntentionXLM: boolean
  banners: SendBannerLocal[]
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

export type InflationDestinationTag = string

export type PredefinedInflationDestination = {
  tag: InflationDestinationTag
  name: string
  recommended: boolean
  accountID: AccountID
  url: string
}

export type InflationDestinationResultLocal = {
  destination?: AccountID
  knownDestination?: PredefinedInflationDestination
  self: boolean
}

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

export type AirdropStatus = {
  state: AirdropState
  rows: AirdropQualification[]
}

export type RecipientTrustlinesLocal = {
  trustlines: Balance[]
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

export type AssetActionResultLocal = {
  externalUrl?: string
  messageFromAnchor?: string
}

export type SendResultCLILocal = {
  kbTxID: KeybaseTransactionID
  txID: TransactionID
}

export type PaymentOrErrorCLILocal = {
  payment?: PaymentCLILocal
  err?: string
}

export type PaymentCLILocal = {
  txID: TransactionID
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
  operations: string[]
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

export type OwnAccountCLILocal = {
  accountID: AccountID
  isPrimary: boolean
  name: string
  balance: Balance[]
  exchangeRate?: OutsideExchangeRate
  accountMode: AccountMode
}

export type LookupResultCLILocal = {
  accountID: AccountID
  username?: string
}

export type BatchPaymentError = {
  message: string
  code: number
}

export type BatchPaymentResult = {
  username: string
  startTime: TimeMs
  submittedTime: TimeMs
  endTime: TimeMs
  txID: TransactionID
  status: PaymentStatus
  statusDescription: string
  error?: BatchPaymentError
}

export type BatchResultLocal = {
  startTime: TimeMs
  preparedTime: TimeMs
  allSubmittedTime: TimeMs
  allCompleteTime: TimeMs
  endTime: TimeMs
  payments: BatchPaymentResult[]
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

export type BatchPaymentArg = {
  recipient: string
  amount: string
  message: string
}

export type TxDisplaySummary = {
  source: AccountID
  fee: number
  memo: string
  memoType: string
  operations: string[]
}

export type ValidateStellarURIResultLocal = {
  operation: string
  originDomain: string
  message: string
  callbackURL: string
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

export type PartnerUrl = {
  url: string
  title: string
  description: string
  iconFilename: string
  adminOnly: boolean
  extra: string
}

export type SignXdrResult = {
  singedTx: string
  accountID: AccountID
  submitErr?: string
  submitTxID?: TransactionID
}

export type StaticConfig = {
  paymentNoteMaxLength: number
  requestNoteMaxLength: number
  publicMemoMaxLength: number
}

export type ChatConversationID = string

export type PaymentDirectPost = {
  fromDeviceID: keybase1.DeviceID
  to?: keybase1.UserVersion
  displayAmount: string
  displayCurrency: string
  noteB64: string
  signedTransaction: string
  quickReturn: boolean
  chatConversationID?: ChatConversationID
  batchID: string
}

export type PaymentRelayPost = {
  fromDeviceID: keybase1.DeviceID
  to?: keybase1.UserVersion
  toAssertion: string
  relayAccount: AccountID
  teamID: keybase1.TeamID
  displayAmount: string
  displayCurrency: string
  boxB64: string
  signedTransaction: string
  quickReturn: boolean
  chatConversationID?: ChatConversationID
  batchID: string
}

export type RelayClaimPost = {
  keybaseID: KeybaseTransactionID
  dir: RelayDirection
  signedTransaction: string
  autoClaimToken?: string
}

export type PathPaymentPost = {
  fromDeviceID: keybase1.DeviceID
  to?: keybase1.UserVersion
  noteB64: string
  signedTransaction: string
  quickReturn: boolean
  chatConversationID?: ChatConversationID
}

export type DirectOp = {
  noteB64: string
}

export type RelayOp = {
  toAssertion: string
  relayAccount: AccountID
  teamID: keybase1.TeamID
  boxB64: string
}

export type PaymentOp = {
  to?: keybase1.UserVersion
  direct?: DirectOp
  relay?: RelayOp
}

export type PaymentMultiPost = {
  fromDeviceID: keybase1.DeviceID
  signedTransaction: string
  operations: PaymentOp[]
  batchID: string
}

export enum PaymentSummaryType {
  NONE = 0,
  STELLAR = 1,
  DIRECT = 2,
  RELAY = 3,
}

export type PaymentSummary =
  | {typ: PaymentSummaryType.STELLAR; STELLAR: PaymentSummaryStellar | null}
  | {typ: PaymentSummaryType.DIRECT; DIRECT: PaymentSummaryDirect | null}
  | {typ: PaymentSummaryType.RELAY; RELAY: PaymentSummaryRelay | null}

export type PaymentSummaryStellar = {
  txID: TransactionID
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
  operations: string[]
  trustline?: PaymentTrustlineLocal
}

export type PaymentSummaryDirect = {
  kbTxID: KeybaseTransactionID
  txID: TransactionID
  txStatus: TransactionStatus
  txErrMsg: string
  fromStellar: AccountID
  from: keybase1.UserVersion
  fromDeviceID: keybase1.DeviceID
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
  batchID: string
  fromAirdrop: boolean
  sourceAmountMax: string
  sourceAmountActual: string
  sourceAsset: Asset
}

export type PaymentSummaryRelay = {
  kbTxID: KeybaseTransactionID
  txID: TransactionID
  txStatus: TransactionStatus
  txErrMsg: string
  fromStellar: AccountID
  from: keybase1.UserVersion
  fromDeviceID: keybase1.DeviceID
  to?: keybase1.UserVersion
  toAssertion: string
  relayAccount: AccountID
  amount: string
  displayAmount?: string
  displayCurrency?: string
  ctime: TimeMs
  rtime: TimeMs
  boxB64: string
  teamID: keybase1.TeamID
  claim?: ClaimSummary
  cursorToken: string
  batchID: string
  fromAirdrop: boolean
}

export type ClaimSummary = {
  txID: TransactionID
  txStatus: TransactionStatus
  txErrMsg: string
  dir: RelayDirection
  toStellar: AccountID
  to: keybase1.UserVersion
}

export type PaymentDetails = {
  summary: PaymentSummary
  memo: string
  memoType: string
  externalTxURL: string
  feeCharged: string
  pathIntermediate: Asset[]
}

export type AccountDetails = {
  accountID: AccountID
  seqno: string
  balances: Balance[]
  subentryCount: number
  available: string
  reserves: AccountReserve[]
  readTransactionID?: TransactionID
  unreadPayments: number
  displayCurrency: string
  inflationDestination?: AccountID
}

export type PaymentsPage = {
  payments: PaymentSummary[]
  cursor?: PageCursor
  oldestUnread?: TransactionID
}

export type SubmitMultiRes = {
  txID: TransactionID
}

export type AutoClaim = {
  kbTxID: KeybaseTransactionID
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
  fundingKbTxID: KeybaseTransactionID
  status: RequestStatus
}

export type TimeboundsRecommendation = {
  timeNow: keybase1.UnixTime
  timeout: number
}

export type NetworkOptions = {
  baseFee: number
}

export type DetailsPlusPayments = {
  details: AccountDetails
  recentPayments: PaymentsPage
  pendingPayments: PaymentSummary[]
}

export type PaymentPathQuery = {
  source: AccountID
  destination: AccountID
  sourceAsset: Asset
  destinationAsset: Asset
  amount: string
}

export type UIPaymentReviewed = {
  bid: BuildPaymentID
  reviewID: number
  seqno: number
  banners: SendBannerLocal[]
  nextButton: string
}
