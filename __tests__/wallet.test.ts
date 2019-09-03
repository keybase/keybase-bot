import crypto from 'crypto'
import Bot from '../lib'
import config from './tests.config'
import {timeout} from '../lib/utils'
import {ChatChannel} from '../lib/types/chat1'
import {ChatSendOptions} from '../lib/chat-client'

test('Wallet methods with an uninitialized bot', (): void => {
  const alice1 = new Bot()

  expect(alice1.wallet.balances()).rejects.toThrowError()
})

describe('Wallet Methods', (): void => {
  const alice1 = new Bot()
  const alice2 = new Bot()
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

  beforeAll(
    async (): Promise<void> => {
      await alice1.init(config.bots.alice1.username, config.bots.alice1.paperkey)
      await alice2.init(config.bots.alice2.username, config.bots.alice2.paperkey)
      await bob.init(config.bots.bob1.username, config.bots.bob1.paperkey)
    }
  )

  afterAll(
    async (): Promise<void> => {
      await alice1.deinit()
      await alice2.deinit()
      await bob.deinit()
    }
  )

  describe('Wallet balances', (): void => {
    it('Lists all of the accounts of a user', async (): Promise<void> => {
      const accounts = await alice1.wallet.balances()
      expect(Array.isArray(accounts)).toBe(true)
      for (const account of accounts) {
        expect(account).toEqual(accountMatcher)
      }
    })
  })

  describe('Wallet history', (): void => {
    it('Provides the details of all transactions involving the specified account', async (): Promise<void> => {
      const accounts = await alice1.wallet.balances()
      const transactions = await alice1.wallet.history(accounts[0].accountId)
      expect(Array.isArray(transactions)).toBe(true)
      for (const transaction of transactions) {
        expect(transaction).toEqual(transactionMatcher)
      }
    })

    it('Throws an error if the accountId is invalid', (): void => {
      expect(alice1.wallet.history('blah')).rejects.toThrowError()
    })
  })

  describe('Wallet details', (): void => {
    it('Provides the details of a transaction by its id', async (): Promise<void> => {
      const accounts = await alice1.wallet.balances()
      const transactions = await alice1.wallet.history(accounts[0].accountId)
      const transactionId = transactions[0].txId
      expect(await alice1.wallet.details(transactionId)).toEqual(transactionMatcher)
    })
    it('Throws an error if the transaction id is invalid', (): void => {
      expect(alice1.wallet.details('blah')).rejects.toThrowError()
    })
  })

  describe('Wallet lookup', (): void => {
    it("Returns a user's account id and Keybase username upon successful lookup", async (): Promise<void> => {
      const fromKeybase = await alice1.wallet.lookup('chris')
      const fromTwitter = await alice1.wallet.lookup('malgorithms@twitter')

      expect(fromKeybase).toEqual(fromTwitter)
      expect(fromKeybase).toHaveProperty('accountId')
      expect(fromKeybase).toHaveProperty('username', 'chris')
    })
    it('Throws an error if a user has not set up their wallet', async (): Promise<void> => {
      // Charlie hasn't set up his wallet yet
      expect(alice1.wallet.lookup(config.bots.charlie1.username)).rejects.toThrowError()
    })
    it('Throws an error if a user cannot be found', async (): Promise<void> => {
      expect(alice1.wallet.lookup('keybase')).rejects.toThrowError()
    })
  })

  describe('Wallet send', (): void => {
    const amount = '0.01'
    const currency = 'USD'
    const recipient = config.bots.bob1.username

    it('Sends money', async (): Promise<void> => {
      const note = crypto.randomBytes(8).toString('hex')
      await alice1.wallet.send(recipient, amount, currency, note)
      const primaryAccount = await alice1.wallet.lookup(recipient)
      const transactions = await bob.wallet.history(primaryAccount.accountId)
      expect(transactions[0]).toHaveProperty('note', note)
    })
    it('Sends money in batches', async (): Promise<void> => {
      expect(true).toBe(true)
      const batchId = crypto.randomBytes(8).toString('hex')
      const batchRes = await alice1.wallet.batch(batchId, [
        {recipient: config.bots.bob1.username, amount: '0.01', message: 'hi bob'},
        {recipient: config.bots.alice2.username, amount: '0.02'},
        {recipient: config.bots.charlie1.username, amount: '0.03'}, // should fail since not enough for relay
      ])
      expect(batchRes.countSuccess).toBe(2)
      expect(batchRes.countError).toBe(1)
    })
    it('Sends money from chat when option set', async (): Promise<void> => {
      const channel: ChatChannel = {name: recipient, public: false, topicType: 'chat', membersType: 'impteamnative'}
      const chatAmount = '0.0001230'
      const message = {
        body: `And voila +${chatAmount}xlm`,
      }
      const options: ChatSendOptions = {
        confirmLumenSend: true,
      }
      await alice1.chat.send(channel, message, options)
      let sendStatus = 'pending'
      while (sendStatus === 'pending') {
        await timeout(100)
        const primaryAccount = await alice1.wallet.lookup(recipient)
        const tx = (await bob.wallet.history(primaryAccount.accountId))[0]
        if (tx.amount === chatAmount) {
          sendStatus = tx.status
        }
      }
      expect(sendStatus).toBe('completed')
    })

    it('Can send two inline in rapid succession', async (): Promise<void> => {
      const channel: ChatChannel = {name: recipient, public: false, topicType: 'chat', membersType: 'impteamnative'}
      const chatAmount = '0.0001230'
      const message = {
        body: `And voila +${chatAmount}xlm`,
      }
      const options: ChatSendOptions = {
        confirmLumenSend: true,
      }
      await alice1.chat.send(channel, message, options)
      await alice1.chat.send(channel, message, options)
      let sendStatus = 'pending'
      let tx = null
      while (sendStatus === 'pending') {
        await timeout(100)
        const primaryAccount = await alice1.wallet.lookup(recipient)
        tx = (await bob.wallet.history(primaryAccount.accountId))[0]
        if (tx.amount === chatAmount) {
          sendStatus = tx.status
        }
      }
      expect(sendStatus).toBe('completed')
    })

    it('Throws an error if chat sending without `confirmLumenSend` option set', async (): Promise<void> => {
      const channel: ChatChannel = {name: recipient, public: false, topicType: 'chat', membersType: 'impteamnative'}
      const chatAmount = '0.0009876'
      const message = {
        body: `This should fail +${chatAmount}xlm`,
      }
      expect(alice1.chat.send(channel, message)).rejects.toThrowError()
    })
    it('Throws an error if given an invalid recipient', (): void => {
      expect(alice1.wallet.send('keybase', amount, currency)).rejects.toThrowError()
    })
    it('Throws an error if given an invalid amount', (): void => {
      expect(alice1.wallet.send(recipient, '-100', currency)).rejects.toThrowError()
    })
    it('Throws an error if given an invalid currency', (): void => {
      expect(alice1.wallet.send(recipient, amount, 'blah')).rejects.toThrowError()
    })
  })

  describe('Wallet cancel', (): void => {
    it('Successfully cancels transactions if the recipient is a user who has not set up their account', async (): Promise<void> => {
      const res = await alice1.wallet.send(config.bots.charlie1.username, '3')
      expect(res.status).toBe('Claimable')
      await alice1.wallet.cancel(res.txId)
      const {accountId} = await alice1.wallet.lookup(config.bots.alice1.username)
      const transactions = await alice1.wallet.history(accountId)
      expect(transactions).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            txId: res.txId,
            status: 'Canceled',
          }),
        ])
      )
    })
    it('Throws an error if it is given a transaction that cannot be canceled', async (): Promise<void> => {
      const res = await alice1.wallet.send(config.bots.bob1.username, '1')
      expect(res.status).toBe('completed')
      expect(alice1.wallet.cancel(res.txId)).rejects.toThrowError()
    })
  })
})
