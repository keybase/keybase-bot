import { API_TYPES } from '../constants';
/**
  Takes a Keybase API input JavaScript object and recursively formats it into snake_case or kebab-case instead of camelCase for the service.
  * @ignore
  * @param obj - The object to be formatted.
  * @param apiType - The type of api the the input is being served to. Currently Keybase has chat, team, and wallet apis.
  * @returns - The new, formatted object.
  * @example
  * const inputOptions = formatAPIObject({unreadOnly: true})
  * console.log(inputOptions) // {unread_only: true}
 */
export declare function formatAPIObjectInput(obj: any, apiType: API_TYPES): any;
/**
 * Context of the object formatting process.
 * @ignore
 */
export declare type FormatAPIObjectOutputContext = {
    apiName: API_TYPES;
    method: string;
    parent?: any[];
};
/**
  Takes a Keybase output object and formats it in a more digestable JavaScript style by using camelCase instead of snake_case.
  * @ignore
  * @param obj - The object to be formatted.
  * @param context - An optional context with information about the called method required to perform blacklist lookups.
  * @returns - The new, formatted object.
  * @example
  * const outputRes = formatAPIObject({unread_only: true})
  * console.log(outputRes) // {unreadOnly: true}
 */
export declare function formatAPIObjectOutput(obj: any, context?: FormatAPIObjectOutputContext | null): any;
