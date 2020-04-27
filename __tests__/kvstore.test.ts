import Bot from '../lib'
import config from './tests.config'
import * as KVStoreClient from '../lib/kvstore-client'
import {ErrorWithCode} from '../lib/client-base'

test('KVStore methods with an uninitialized bot', (): void => {
  const alice1 = new Bot()
  const team = config.teams.acme.teamname
  expect(alice1.kvstore.listNamespaces(team)).rejects.toThrowError()
})

const expectThrowCode = (promise: Promise<any>, checker: (error: ErrorWithCode) => boolean): Promise<any> =>
  promise
    .then(() => expect(true).toBe(false))
    .catch(e => {
      expect(checker(e)).toBe(true)
    })

describe('KVStore Methods', (): void => {
  const alice1 = new Bot()
  const firstRando = Math.floor(Math.random() * 1000).toString()
  const secondRando = Math.floor(Math.random() * 1000).toString()
  const namespace = '_test_namespace' + firstRando
  const entryKey = '_test_key' + secondRando
  const team = config.teams.acme.teamname
  let rev: number | null = null

  const getResultMatcher = expect.objectContaining({
    entryKey: expect.any(String),
    entryValue: expect.any(String),
    namespace: expect.any(String),
    revision: expect.any(Number),
    teamName: expect.any(String),
  })

  beforeAll(
    async (): Promise<void> => {
      await alice1.init(config.bots.alice1.username, config.bots.alice1.paperkey)
    }
  )

  afterAll(
    async (): Promise<void> => {
      await alice1.deinit()
    }
  )

  it('Getting an unset value', async (): Promise<void> => {
    const res = await alice1.kvstore.get(team, namespace, entryKey)
    expect(res.entryValue).toEqual(null)
    expect(res.revision).toEqual(0)
    expect(alice1.kvstore.isPresent(res)).toBe(false)
    expect(alice1.kvstore.isDeleted(res)).toBe(false)
  })

  it('Can put with a default revision, but not a stale one', async (): Promise<void> => {
    const res = await alice1.kvstore.put(team, namespace, entryKey, 'value1')
    rev = res.revision
    expect(rev).toBeGreaterThan(0)
    return expectThrowCode(alice1.kvstore.put(team, namespace, entryKey, 'value2', rev), KVStoreClient.ErrorIsWrongRevision)
  })

  it('Lists namespaces', async (): Promise<void> => {
    const res = await alice1.kvstore.listNamespaces(team)
    expect(res?.namespaces?.length).toBeGreaterThan(0)
  })

  it('Lists entryKeys', async (): Promise<void> => {
    const res = await alice1.kvstore.listEntryKeys(team, namespace)
    expect(res?.entryKeys?.length).toBeGreaterThan(0)
  })

  it('Gets values', async (): Promise<void> => {
    const res = await alice1.kvstore.get(team, namespace, entryKey)
    expect(res).toEqual(getResultMatcher)
    expect(res.entryValue).toEqual('value1')
    expect(res.revision).toEqual(rev)
    expect(alice1.kvstore.isPresent(res)).toBe(true)
    expect(alice1.kvstore.isDeleted(res)).toBe(false)
  })

  it('Cannot delete with a future revision', (): Promise<void> => {
    // Increment rev so that later tests always have a usable rev value prepared.
    if (rev === null) throw new Error('rev should be a number by now')
    rev += 1
    return expectThrowCode(alice1.kvstore.delete(team, namespace, entryKey, rev + 1), KVStoreClient.ErrorIsWrongRevision)
  })

  it('Deletes at the correct revision', async (): Promise<void> => {
    if (rev === null) throw new Error('rev should be a number by now')
    const res = await alice1.kvstore.delete(team, namespace, entryKey, rev)
    expect(res.revision).toEqual(rev)
  })

  it('Cannot delete twice', (): Promise<void> => {
    return expectThrowCode(alice1.kvstore.delete(team, namespace, entryKey), KVStoreClient.ErrorIsNotFound)
  })

  it('Getting a deleted value', async (): Promise<void> => {
    const res = await alice1.kvstore.get(team, namespace, entryKey)
    expect(res.entryValue).toEqual(null)
    expect(res.revision).toEqual(rev)
    expect(alice1.kvstore.isPresent(res)).toBe(false)
    expect(alice1.kvstore.isDeleted(res)).toBe(true)
  })

  it('optional teamname', async (): Promise<void> => {
    const v = 'optional teamname'
    try {
      await alice1.kvstore.delete(config.bots.alice1.username, namespace, entryKey)
    } catch {}
    await alice1.kvstore.put(undefined, namespace, entryKey, v)
    const res = await alice1.kvstore.get(`${config.bots.alice1.username},${config.bots.alice1.username}`, namespace, entryKey)
    expect(res.entryValue).toEqual(v)
  })
})
