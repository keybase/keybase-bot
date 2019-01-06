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
    it('Lists all the transactions of an account', async () => {
      const accounts = await charlie1.wallet.balances()
      const transactions = await charlie1.wallet.history(accounts[0].accountId)
      expect(Array.isArray(transactions)).toBe(true)
      console.log(transactions)
    })
  })
})
