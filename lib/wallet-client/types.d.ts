/**
 * The status of a payment.
 */
export declare type PaymentStatus = 'none' | 'pending' | 'claimable' | 'completed' | 'error' | 'unknown' | 'canceled';
/**
 * An asset.
 */
export declare type Asset = {
    type: string;
    code: string;
    issuer: string;
    verifiedDomain: string;
    issuerName: string;
};
/**
 * An exchange rate, which specifies a currency and the rate of exchange between an asset and that currency.
 */
export declare type ExchangeRate = {
    currency: string;
    rate: string;
};
/**
 * A balance.
 */
export declare type Balance = {
    asset: Asset;
    amount: string;
    limit: string;
};
/**
 * An account, with money inside!
 */
export declare type Account = {
    accountId: string;
    name: string;
    isPrimary: boolean;
    balance: null | Balance[];
    exchangeRate: ExchangeRate;
};
/**
 * A transaction, where a user sends money to another user.
 */
export declare type Transaction = {
    txId: string;
    time: number;
    status: PaymentStatus;
    statusDetail: string;
    amount: string;
    asset: Asset;
    displayAmount: string;
    displayCurrency: string;
    fromStellar: string;
    toStellar: string;
    fromUsername: string;
    toUsername: string;
    note: string;
    noteErr: string;
    unread: boolean;
};
/**
 * In batch sends, one individual send
 */
export declare type PaymentBatchItem = {
    recipient: string;
    amount: string;
    message?: string;
};
export declare type BatchItemResult = {
    username: string;
    startTime: number;
    submittedTime: number;
    endTime: number;
    txId: string;
    status: number;
    statusDescription: string;
    error: null | string;
};
/**
 * A batch send result
 */
export declare type BatchResult = {
    payments: BatchItemResult[];
    startTime: number;
    preparedTime: number;
    allSubmittedTime: number;
    endTime: number;
    overallDurationMs: number;
    prepareDurationMs: number;
    submitDurationMs: number;
    waitDurationMs: number;
    countSuccess: number;
    countError: number;
    countPending: number;
    avgDurationMs: number;
    avgSuccessDurationMs: number;
    avgErrorDurationMs: number;
};
export declare type HistoryResultItem = {
    payment: {
        txID: string;
        time: number;
        status: PaymentStatus;
        statusDetail: string;
        amount: string;
        asset: any;
        displayAmount: string;
        displayCurrency: string;
        sourceAmountMax: string;
        sourceAmountActual: string;
        sourceAsset: any;
        isAdvanced: boolean;
        summaryAdvanced: string;
        operations: null | any[];
        fromStellar: void | string;
        toStellar: void | string;
        fromUsername: void | string;
        toUsername: void | string;
        note: string;
        noteErr: string;
        unread: boolean;
        publicNote: string;
        publicNoteType: string;
        feeChargedDescription: string;
    };
};
