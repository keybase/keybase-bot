// @flow
// https://github.com/keybase/client/blob/8abfc8dc60baf072b62e12b92a6ce1b81ce39cf3/go/protocol/stellar1/local.go

/**
 * The status of a payment.
 */
export type PaymentStatus = 'none' | 'pending' | 'claimable' | 'completed' | 'error' | 'unknown' | 'canceled'

export type Asset = {|
  type: string,
  code: string,
  issuer: string,
  verifiedDomain: string,
  issuerName: string,
|}

/**
 * An account, with money inside!
 */
export type Account = {|
  accountId: string,
  name: string,
  isPrimary: boolean,
  balance: any,
  exchangeRate: any,
|}

/**
 * A transaction, where a user sends money to another user.
 */
export type Transaction = {|
  txID: string,
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
