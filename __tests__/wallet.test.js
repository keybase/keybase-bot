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
    it('Provides the details of all transactions involving the specified account', () => {})
    it('Throws an error if the accountId is invalid', () => {})
  })

  describe('Wallet details', () => {
    it('Provides the details of a transaction by its id', () => {})
    it('Throws an error if the transaction id is invalid', () => {})
  })

  describe('Wallet lookup', () => {
    it("Returns a user's account id and Keybase username upon successful lookup", () => {})
    it('Throws an error if a user has not set up their wallet', () => {})
    it('Throws an error if a user cannot be found', () => {})
  })

  describe('Wallet send', () => {
    it('Sends money', () => {})
    it('Throws an error if given an invalid recipient', () => {})
    it('Throws an error if given an invalid amount')
    it('Throws an error if given an invalid currency')
  })

  describe('Wallet cancel', () => {
    it('Successfully cancels transactions if to a user who has not set up their account', () => {})
    it('Throws an error if it is given a transaction that cannot be canceled', () => {})
  })
})
