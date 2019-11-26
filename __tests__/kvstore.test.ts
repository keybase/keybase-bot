import crypto from 'crypto'
import Bot from '../lib'
import config from './tests.config'
import {timeout} from '../lib/utils'
import {ChatChannel} from '../lib/types/chat1'
import {ChatSendOptions} from '../lib/chat-client'

test('KVStore methods with an uninitialized bot', (): void => {
  const alice1 = new Bot()
  const team = config.teams.acme.teamname
  expect(alice1.kvstore.listNamespaces(team)).rejects.toThrowError()
})

describe('KVStore Methods', (): void => {
  const alice1 = new Bot()
  const namespace = '_test_namespace1'
  const entryKey = '_test_key1'
  const team = config.teams.acme.teamname
  let rev: number = null

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

  it('Can put with a default revision, but not a stale one', async (): Promise<void> => {
    const res = await alice1.kvstore.put(team, namespace, entryKey, 'value1')
    rev = res.revision
    expect(rev).toBeGreaterThan(0)
    expect(alice1.kvstore.put(team, namespace, entryKey, 'value2', rev)).rejects.toThrowError()
  })

  it('Lists namespaces', async (): Promise<void> => {
    const res = await alice1.kvstore.listNamespaces(team)
    expect(res.namespaces.length).toBeGreaterThan(0)
  })

  it('Lists entryKeys', async (): Promise<void> => {
    const res = await alice1.kvstore.listEntryKeys(team, namespace)
    expect(res.entryKeys.length).toBeGreaterThan(0)
  })

  it('Gets values', async (): Promise<void> => {
    const res = await alice1.kvstore.get(team, namespace, entryKey)
    expect(res).toEqual(getResultMatcher)
    expect(res.entryValue).toEqual('value1')
    expect(res.revision).toEqual(rev)
  })

  it('Cannot delete with a future revision', (): void => {
    // Increment rev so that later tests always have a usable rev value prepared.
    rev += 1
    expect(alice1.kvstore.delete(team, namespace, entryKey, rev + 1)).rejects.toThrowError()
  })

  it('Deletes at the correct revision', async (): Promise<void> => {
    const res = await alice1.kvstore.delete(team, namespace, entryKey, rev)
    expect(res.revision).toEqual(rev)
  })

  it('Cannot delete twice', (): void => {
    expect(alice1.kvstore.delete(team, namespace, entryKey)).rejects.toThrowError()
  })
})
