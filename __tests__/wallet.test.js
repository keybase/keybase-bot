import crypto from 'crypto'
import Bot from '../lib'
import config from './tests.config.js'
import {timeout} from '../lib/utils'

test('Wallet methods with an uninitialized bot', () => {
  const alice1 = new Bot()

  expect(alice1.wallet.balances()).rejects.toThrowError()
})

describe('Wallet Methods', () => {
  const alice = new Bot()
  const bob = new Bot()

  const accountMatcher = expect.objectContaining({
    accountId: expect.any(String),
    isPrimary: expect.any(Boolean),
    name: expect.any(String),
  })
  const transactionMatcher = expect.objectContaining({
    txId: expect.any(String),
    time: expect.any(Number),
    statusDetail: expect.any(String),
    amount: expect.any(String),
    fromStellar: expect.any(String),
    note: expect.any(String),
    noteErr: expect.any(String),
    unread: expect.any(Boolean),
  })

  beforeAll(async () => {
    await alice.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    await bob.init(config.bots.bob1.username, config.bots.bob1.paperkey)
  })

  afterAll(async () => {
    await alice.deinit()
    await bob.deinit()
  })

  describe('Wallet balances', () => {
    it('Lists all of the accounts of a user', async () => {
      const accounts = await alice.wallet.balances()
      expect(Array.isArray(accounts)).toBe(true)
      for (const account of accounts) {
        expect(account).toEqual(accountMatcher)
      }
    })
  })

  describe('Wallet history', () => {
    it('Provides the details of all transactions involving the specified account', async () => {
      const accounts = await alice.wallet.balances()
      const transactions = await alice.wallet.history(accounts[0].accountId)
      expect(Array.isArray(transactions)).toBe(true)
      for (const transaction of transactions) {
        expect(transaction).toEqual(transactionMatcher)
      }
    })

    it('Throws an error if the accountId is invalid', () => {
      expect(alice.wallet.history('blah')).rejects.toThrowError()
    })
  })

  describe('Wallet details', () => {
    it('Provides the details of a transaction by its id', async () => {
      const accounts = await alice.wallet.balances()
      const transactions = await alice.wallet.history(accounts[0].accountId)
      const transactionId = transactions[0].txId
      expect(await alice.wallet.details(transactionId)).toEqual(transactionMatcher)
    })
    it('Throws an error if the transaction id is invalid', () => {
      expect(alice.wallet.details('blah')).rejects.toThrowError()
    })
  })

  describe('Wallet lookup', () => {
    it("Returns a user's account id and Keybase username upon successful lookup", async () => {
      const fromKeybase = await alice.wallet.lookup('chris')
      const fromTwitter = await alice.wallet.lookup('malgorithms@twitter')

      expect(fromKeybase).toEqual(fromTwitter)
      expect(fromKeybase).toHaveProperty('accountId')
      expect(fromKeybase).toHaveProperty('username', 'chris')
    })
    it('Throws an error if a user has not set up their wallet', async () => {
      // Charlie hasn't set up his wallet yet
      expect(alice.wallet.lookup(config.bots.charlie1.username)).rejects.toThrowError()
    })
    it('Throws an error if a user cannot be found', async () => {
      expect(alice.wallet.lookup('keybase')).rejects.toThrowError()
    })
  })

  describe('Wallet send', () => {
    const amount = '0.01'
    const currency = 'USD'
    const recipient = config.bots.bob1.username

    it('Sends money', async () => {
      const note = crypto.randomBytes(8).toString('hex')
      await alice.wallet.send(recipient, amount, currency, note)
      const primaryAccount = await alice.wallet.lookup(recipient)
      const transactions = await bob.wallet.history(primaryAccount.accountId)
      expect(transactions[0]).toHaveProperty('note', note)
    })
    it('Sends money from chat when option set', async () => {
      const channel = {name: recipient, public: false, topic_type: 'chat'}
      const chatAmount = '0.0001230'
      const message = {
        body: `And voila +${chatAmount}xlm`,
      }
      const options = {
        confirmLumenSend: true,
      }
      await alice.chat.send(channel, message, options)
      let sendStatus = 'pending'
      while (sendStatus === 'pending') {
        await timeout(100)
        const primaryAccount = await alice.wallet.lookup(recipient)
        const tx = (await bob.wallet.history(primaryAccount.accountId))[0]
        if (tx.amount === chatAmount) {
          sendStatus = tx.status
        }
      }
      expect(sendStatus).toBe('completed')
    })
    it('Throws an error if chat sending without `confirmLumenSend` option set', async () => {
      const channel = {name: recipient, public: false, topic_type: 'chat'}
      const chatAmount = '0.0009876'
      const message = {
        body: `This should fail +${chatAmount}xlm`,
      }
      expect(alice.chat.send(channel, message)).rejects.toThrowError()
    })
    it('Throws an error if given an invalid recipient', () => {
      expect(alice.wallet.send('keybase', amount, currency)).rejects.toThrowError()
    })
    it('Throws an error if given an invalid amount', () => {
      expect(alice.wallet.send(recipient, '-100', currency)).rejects.toThrowError()
    })
    it('Throws an error if given an invalid currency', () => {
      expect(alice.wallet.send(recipient, amount, 'blah')).rejects.toThrowError()
    })
  })

  describe('Wallet cancel', () => {
    it('Successfully cancels transactions if the recipient is a user who has not set up their account', async () => {
      const res = await alice.wallet.send(config.bots.charlie1.username, '3')
      expect(res.status).toBe('Claimable')
      await alice.wallet.cancel(res.txId)
      const {accountId} = await alice.wallet.lookup(config.bots.alice1.username)
      const transactions = await alice.wallet.history(accountId)
      expect(transactions[0]).toHaveProperty('txId', res.txId)
      expect(transactions[0]).toHaveProperty('status', 'Canceled')
    })
    it('Throws an error if it is given a transaction that cannot be canceled', async () => {
      const res = await alice.wallet.send(config.bots.bob1.username, '1')
      expect(res.status).toBe('completed')
      expect(alice.wallet.cancel(res.txId)).rejects.toThrowError()
    })
  })
})
