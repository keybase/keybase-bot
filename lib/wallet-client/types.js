// @flow
// https://github.com/keybase/client/blob/8abfc8dc60baf072b62e12b92a6ce1b81ce39cf3/go/protocol/stellar1/local.go

/**
 * The status of a payment.
 */
export type PaymentStatus = 'none' | 'pending' | 'claimable' | 'completed' | 'error' | 'unknown' | 'canceled'

/**
 * An asset.
 */
export type Asset = {|
  type: string,
  code: string,
  issuer: string,
  verifiedDomain: string,
  issuerName: string,
|}

/**
 * An exchange rate, which specifies a currency and the rate of exchange between an asset and that currency.
 */
export type ExchangeRate = {|
  currency: string,
  rate: string,
|}

/**
 * A balance.
 */
export type Balance = {|
  asset: Asset,
  amount: string,
  limit: string,
|}

/**
 * An account, with money inside!
 */
export type Account = {|
  accountId: string,
  name: string,
  isPrimary: boolean,
  balance: null | Balance[],
  exchangeRate: ExchangeRate,
|}

/**
 * A transaction, where a user sends money to another user.
 */
export type Transaction = {|
  txId: string,
  time: number,
  status: PaymentStatus,
  statusDetail: string,
  amount: string,
  asset: Asset,
  displayAmount: string,
  displayCurrency: string,
  fromStellar: string,
  toStellar: string,
  fromUsername: string,
  toUsername: string,
  note: string,
  noteErr: string,
  unread: boolean,
|}

/**
 * In batch sends, one individual send
 */
export type PaymentBatchItem = {|
  recipient: string,
  amount: string,
  message?: string,
|}

export type BatchItemResult = {|
  username: string,
  startTime: number,
  submittedTime: number,
  endTime: number,
  txId: string,
  status: number,
  statusDescription: string,
  error: null | string,
|}

/**
 * A batch send result
 */
export type BatchResult = {|
  payments: BatchItemResult[],
  startTime: number,
  preparedTime: number,
  allSubmittedTime: number,
  endTime: number,
  overallDurationMs: number,
  prepareDurationMs: number,
  submitDurationMs: number,
  waitDurationMs: number,
  countSuccess: number,
  countError: number,
  countPending: number,
  avgDurationMs: number,
  avgSuccessDurationMs: number,
  avgErrorDurationMs: number,
|}
