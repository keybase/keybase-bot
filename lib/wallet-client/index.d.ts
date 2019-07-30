import ClientBase from '../client-base';
import { Account, Transaction, PaymentBatchItem, BatchResult } from './types';
/** A function to call when a message is received. */
export declare type OnTransaction = (transaction: Transaction) => void | Promise<void>;
/** A function to call when an error occurs. */
export declare type OnError = (error: Error) => void | Promise<void>;
/** The wallet module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase wallet api`. */
declare class Wallet extends ClientBase {
    /**
     * Provides a list of all accounts owned by the current Keybase user.
     * @memberof Wallet
     * @returns - An array of accounts. If there are no accounts, the array is empty.
     * @example
     * bot.wallet.balances().then(accounts => console.log(accounts))
     */
    balances(): Promise<Account[]>;
    /**
     * Provides a list of all transactions in a single account.
     * @memberof Wallet
     * @param accountId - The id of an account owned by a Keybase user.
     * @returns - An array of transactions related to the account.
     * @example
     * bot.wallet.history('GDUKZH6Q3U5WQD4PDGZXYLJE3P76BDRDWPSALN4OUFEESI2QL5UZHCK').then(transactions => console.log(transactions))
     */
    history(accountId: string): Promise<Transaction[]>;
    /**
     * Get details about a particular transaction
     * @memberof Wallet
     * @param transactionId - The id of the transaction you would like details about.
     * @returns - An object of details about the transaction specified.
     * @example
     * bot.wallet.details('e5334601b9dc2a24e031ffeec2fce37bb6a8b4b51fc711d16dec04d3e64976c4').then(details => console.log(details))
     */
    details(transactionId: string): Promise<Transaction>;
    /**
     * Lookup the primary Stellar account ID of a Keybase user.
     * @memberof Wallet
     * @param name - The name of the user you want to lookup. This can be either a Keybase username or a username of another account that is supported by Keybase if it is followed by an '@<service>'.
     * @returns - An object containing the account ID and Keybase username of the found user.
     * @example
     * const lookup1 = bot.wallet.lookup('patrick')
     * // 'patrick' on Keybase is 'patrickxb' on twitter
     * const lookup2 = bot.wallet.lookup('patrcikxb@twitter')
     * // Using Lodash's `isEqual` since objects with same values aren't equal in JavaScript
     * _.isEqual(lookup1, lookup2) // => true
     */
    lookup(name: string): Promise<{
        accountId: string;
        username: string;
    }>;
    /**
     * Send lumens (XLM) via Keybase with your bot!
     * @memberof Wallet
     * @param recipient - Who you're sending your money to. This can be a Keybase user, stellar address, or a username of another account that is supported by Keybase if it is followed by an '@<service>'.
     * @param amount - The amount of XLM to send.
     * @param [currency] - Adds a currency value to the amount specified. For example, adding 'USD' would send
     * @param [message] - The message for your payment
     * @returns - The trasaction object of the transaction.
     * @example
     * bot.wallet.send('nathunsmitty', '3.50') // Send 3.50 XLM to Keybase user `nathunsmitty`
     * bot.wallet.send('nathunsmitty@github', '3.50') // Send 3.50 XLM to GitHub user `nathunsmitty`
     * bot.wallet.send('nathunsmitty', '3.50', 'USD') // Send $3.50 worth of lumens to Keybase user `nathunsmitty`
     * bot.wallet.send('nathunsmitty', '3.50', 'USD', 'Shut up and take my money!') // Send $3.50 worth of lumens to Keybase user `nathunsmitty` with a memo
     */
    send(recipient: string, amount: string, currency?: string, message?: string): Promise<Transaction>;
    /**
     * Send lumens (XLM) via Keybase to more than one user at once. As opposed to the normal bot.wallet.send
     * command, this can get multiple transactions into the same 5-second Stellar ledger.
     * @memberof Wallet
     * @param batchId - example, if sending a bunch of batches for an airdrop, you could pass them all `airdrop2025`.
     * @param payments - an array of objects containing recipients and XLM of the form {"recipient": "someusername", "amount": "1.234", "message", "hi there"}
     * @returns - an object
     * @example
     * bot.wallet.batch("airdrop2040",[{"recipient":"a1","amount": "1.414", "message": "hi a1, yes 1"},{"recipient": "a2", "amount": "3.14159", "message": "hi a2, yes 2"},}])
     */
    batch(batchId: string, payments: PaymentBatchItem[]): Promise<BatchResult>;
    /**
     * If you send XLM to a Keybase user who has not established a wallet, you can cancel the payment before the recipient claims it and the XLM will be returned to your account.
     * @memberof Wallet
     * @param transactionId - The id of the transaction to cancel.
     * @example
     * bot.wallet.cancel('e5334601b9dc2a24e031ffeec2fce37bb6a8b4b51fc711d16dec04d3e64976c4').then(() => console.log('Transaction successfully canceled!'))
     */
    cancel(transactionId: string): Promise<void>;
    /**
     * Listens for new chat messages on a specified channel. The `onMessage` function is called for every message your bot receives. This is pretty similar to `watchAllChannelsForNewMessages`, except it specifically checks one channel. Note that it receives messages your own bot posts, but from other devices. You can filter out your own messages by looking at a message's sender object.
     * Hides exploding messages by default.
     * @memberof Wallet
     * @param onMessage - A callback that is triggered on every message your bot receives.
     * @param onError - A callback that is triggered on any error that occurs while the method is executing.
     * @param options - Options for the listen method.
     * @example
     * // Reply to all messages between you and `kbot` with 'thanks!'
     * const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topicType: 'chat'}
     * const onMessage = message => {
     *   const channel = message.channel
     *   bot.chat.send(channel, {body: 'thanks!!!'})
     * }
     * bot.chat.watchChannelForNewMessages(channel, onMessage)
     */
    watchForNewTransactions(onTransaction: OnTransaction, onError?: OnError): Promise<void>;
    /**
     * Spawns the chat listen process for wallet notifications and handles the calling of onTransaction and onError.
     * @memberof Wallet
     * @ignore
     * @param onTransaction - A callback that is triggered on every transaction your bot receives.
     * @param onError - A callback that is triggered on any error that occurs while the method is executing.
     * @example
     * this._transactionListen(onTransaction, onError)
     */
    private _transactionListen;
}
export default Wallet;
