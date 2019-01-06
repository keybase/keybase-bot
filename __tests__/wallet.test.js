import Bot from '../lib'
import config from './tests.config.js'

test('Wallet methods with an uninitialized bot', () => {
  const alice1 = new Bot()

  expect(alice1.wallet.balances()).rejects.toThrowError()
})

describe('Wallet Methods', () => {
  const charlie1 = new Bot()

  const accountMatcher = expect.objectContaining({
    accountId: expect.any(String),
    isPrimary: expect.any(Boolean),
    name: expect.any(String),
  })
  const transactionMatcher = expect.objectContaining({
    txId: expect.any(String),
    time: expect.any(Number),
    // status: PaymentStatus,
    statusDetail: expect.any(String),
    amount: expect.any(String),
    // asset: Asset,
    // displayAmount: expect.any(String),
    // displayCurrency: expect.any(String),
    fromStellar: expect.any(String),
    toStellar: expect.any(String),
    // fromUsername: expect.any(String),
    // toUsername: expect.any(String),
    note: expect.any(String),
    noteErr: expect.any(String),
    unread: expect.any(Boolean),
  })

  beforeAll(async () => {
    await charlie1.init(config.bots.charlie1.username, config.bots.charlie1.paperkey)
  })

  afterAll(async () => {
    await charlie1.deinit()
  })

  describe('Wallet balances', () => {
    it('Lists all of the accounts of a user', async () => {
      const accounts = await charlie1.wallet.balances()
      expect(Array.isArray(accounts)).toBe(true)
      for (const account of accounts) {
        expect(account).toEqual(accountMatcher)
      }
    })
  })

  describe('Wallet history', () => {
    it('Provides the details of all transactions involving the specified account', async () => {
      const accounts = await charlie1.wallet.balances()
      const transactions = await charlie1.wallet.history(accounts[0].accountId)
      expect(Array.isArray(transactions)).toBe(true)
      for (const transaction of transactions) {
        expect(transaction).toEqual(transactionMatcher)
      }
    })

    it('Throws an error if the accountId is invalid', () => {
      expect(charlie1.wallet.history('blah')).rejects.toThrowError()
    })
  })

  describe('Wallet details', () => {
    it('Provides the details of a transaction by its id', async () => {
      const accounts = await charlie1.wallet.balances()
      const transactions = await charlie1.wallet.history(accounts[0].accountId)
      const transactionId = transactions[0].txId
      expect(await charlie1.wallet.details(transactionId)).toEqual(transactionMatcher)
    })
    it('Throws an error if the transaction id is invalid', () => {
      expect(charlie1.wallet.details('blah')).rejects.toThrowError()
    })
  })

  describe('Wallet lookup', () => {
    it("Returns a user's account id and Keybase username upon successful lookup", async () => {
      const fromKeybase = await charlie1.wallet.lookup('chris')
      const fromTwitter = await charlie1.wallet.lookup('malgorithms@twitter')

      expect(fromKeybase).toEqual(fromTwitter)
      expect(fromKeybase).toHaveProperty('accountId')
      expect(fromKeybase).toHaveProperty('username', 'chris')
    })
    it('Throws an error if a user has not set up their wallet', async () => {
      // Bob hasn't set up his wallet yet
      expect(charlie1.wallet.lookup(config.bots.bob1.username)).rejects.toThrowError()
    })
    it('Throws an error if a user cannot be found', async () => {
      expect(charlie1.wallet.lookup('keybase')).rejects.toThrowError()
    })
  })

  describe('Wallet send', () => {
    it('Sends money', () => {})
    it('Throws an error if given an invalid recipient', () => {})
    it('Throws an error if given an invalid amount', () => {})
    it('Throws an error if given an invalid currency', () => {})
  })

  describe('Wallet cancel', () => {
    it('Successfully cancels transactions if to a user who has not set up their account', () => {})
    it('Throws an error if it is given a transaction that cannot be canceled', () => {})
  })
})
