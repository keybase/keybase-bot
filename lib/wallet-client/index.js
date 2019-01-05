// @flow
import ClientBase from '../client-base'
import type {Account} from './types'

/** The wallet module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase wallet api`. */
class Wallet extends ClientBase {
  /**
   * Lists your chats, with info on which ones have unread messages.
   * @memberof Wallet
   * @returns - An array of accounts. If there are no accounts, the array is empty.
   * @example
   * bot.wallet.balances().then(accounts => console.log(accounts))
   */
  async balances(): Promise<Account[]> {
    await this._guardInitialized()
    const res = await this._runApiCommand({apiName: 'wallet', method: 'balances'})
    if (!res) {
      throw new Error('Keybase wallet balanaces returned nothing.')
    }
    return res || []
  }
}

export default Wallet
