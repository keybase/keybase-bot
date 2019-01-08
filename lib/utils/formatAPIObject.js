// @flow
import snakeCase from 'lodash.snakecase'
import camelCase from 'lodash.camelcase'
import kebabCase from 'lodash.kebabcase'
import type {API_TYPES} from '../constants'

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
export function formatAPIObjectInput(obj: any, apiType: API_TYPES): any {
  if (obj === null || obj === undefined || typeof obj !== 'object') {
    return obj
  } else if (Array.isArray(obj)) {
    return obj.map(item => formatAPIObjectInput(item, apiType))
  } else {
    return Object.keys(obj).reduce((newObj, key) => {
      // TODO: hopefully we standardize how the Keybase API handles input keys
      let formattedKey
      if (apiType === 'wallet') {
        formattedKey = kebabCase(key)
      } else {
        formattedKey = snakeCase(key)
      }

      if (typeof obj[key] === 'object') {
        return {...newObj, [formattedKey]: formatAPIObjectInput(obj[key], apiType)}
      }
      return {...newObj, [formattedKey]: obj[key]}
    }, {})
  }
}

/**
  Takes a Keybase output object and formats it in a more digestable JavaScript style by using camelCase instead of snake_case.
  * @ignore
  * @param obj - The object to be formatted.
  * @returns - The new, formatted object.
  * @example
  * const outputRes = formatAPIObject({unread_only: true})
  * console.log(outputRes) // {unreadOnly: true}
 */
export function formatAPIObjectOutput(obj: any): any {
  if (obj == null || typeof obj !== 'object') {
    return obj
  } else if (Array.isArray(obj)) {
    return obj.map(item => formatAPIObjectOutput(item))
  } else {
    return Object.keys(obj).reduce((newObj, key) => {
      const formattedKey = camelCase(key)
      if (typeof obj[key] === 'object') {
        return {...newObj, [formattedKey]: formatAPIObjectOutput(obj[key])}
      }
      return {...newObj, [formattedKey]: obj[key]}
    }, {})
  }
}
