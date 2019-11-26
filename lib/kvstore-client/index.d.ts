import ClientBase from '../client-base';
import * as keybase1 from '../types/keybase1';
/** The kvstore module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase kvstore help api`. */
declare class KVStore extends ClientBase {
    /**
     * List all of a team's key-value namespaces with a non-deleted entryKey.
     * @memberof KVStore
     * @param team - The teamname to list namespaces for.
     * @returns - An array of namespaces.
     * @example
     * bot.kvstore.listNamespaces('phoenix').then(namespaces => console.log(namespaces))
     */
    listNamespaces(team: string): Promise<keybase1.KVListNamespaceResult>;
    /**
     * List all of the non-deleted entryKeys in a namespace.
     * @memberof KVStore
     * @param team - The teamname to list entryKeys for.
     * @param namespace - The namespace to list entryKeys for.
     * @returns - An array of entryKeys and their revisions.
     * @example
     * bot.kvstore.listEntryKeys('phoenix', 'pw-manager').then(entryKeys => console.log(entryKeys))
     */
    listEntryKeys(team: string, namespace: string): Promise<keybase1.KVListEntryResult>;
    /**
     * Get a key-value store entry.
     * @memberof KVStore
     * @param team - The teamname to get a value from.
     * @param namespace - The namespace to get a value from.
     * @param entryKey - The entryKey to get the value for.
     * @returns - An entryKey with its value. If this key does not exist, the revision will be 0.
     * @example
     * bot.kvstore.get('phoenix', 'pw-manager', 'geocities').then(({revision, value}) => console.log({revision, value}))
     */
    get(team: string, namespace: string, entryKey: string): Promise<keybase1.KVGetResult>;
    /**
     * Put a key-value store entry. Specifying a non-zero revision enables custom concurrency behavior, e.g. 1 will throw an error if the entry already exists.
     * @memberof KVStore
     * @param team - The teamname to set an entryKey in.
     * @param namespace - The namespace to set an entryKey in.
     * @param entryKey - The entryKey to set the value for.
     * @param entryValue - The value to set.
     * @param revision - A revision number (call `get()` to find out the latest) for enforcing safe concurrency.
     * @returns - An entryKey with its value. If this key does not exist, the revision will be 0.
     * @example
     * bot.kvstore.put('phoenix', 'pw-manager', 'geocities', 'hunter2').then(({entryKey, revision}) => console.log({entryKey, revision}))
     */
    put(team: string, namespace: string, entryKey: string, entryValue: string, revision?: number): Promise<keybase1.KVPutResult>;
    /**
     * Delete a key-value store entry. If you specify a revision number, deletion will fail if that revision is not the latest.
     * @memberof KVStore
     * @param team - The teamname to list entryKeys for.
     * @param namespace - The namespace to list entryKeys for.
     * @param entryKey - The entryKey to delete the value for.
     * @param revision - A revision number (call `get()` to find out the latest) for enforcing safe concurrency.
     * @returns - The deleted entryKey and its revision.
     * @example
     * bot.kvstore.delete('phoenix', 'pw-manager', 'geocities').then(({entryKey, revision}) => console.log({entryKey, revision}))
     */
    delete(team: string, namespace: string, entryKey: string, revision?: number): Promise<keybase1.KVDeleteEntryResult>;
    /**
     * Determine whether the result of a `get()` call describes a deleted key-value store entry.
     * @memberof KVStore
     * @param res - The `get()` result to determine the status of.
     * @returns - Whether this key's value is deleted.
     * @example
     * bot.kvstore.isDeleted(res).then(isDeleted => console.log({isDeleted}))
     */
    isDeleted(res: keybase1.KVGetResult): boolean;
    /**
     * Determine whether the result of a `get()` call describes an entryKey that has an existing value.
     * @memberof KVStore
     * @param res - The `get()` result to determine the status of.
     * @returns - Whether this key's value is present.
     * @example
     * bot.kvstore.isPresent(res).then(isPresent => console.log({isPresent}))
     */
    isPresent(res: keybase1.KVGetResult): boolean;
}
export default KVStore;
