// @flow
import snakeCase from 'lodash.snakecase'
import camelCase from 'lodash.camelcase'

// Recursively convert from camelCase to snake_case for any obj object for keybase chat api

/**
  Takes a Keybase API input JavaScript object and formats it into snake_case instead of camelCase for the service.
  * @ignore
  * @param obj - The object to be formatted.
  * @returns - The new, formatted object.
  * @example
  * const inputOptions = formatAPIObject({unreadOnly: true})
  * console.log(inputOptions) // {unread_only: true}
 */
export function formatAPIObjectInput(obj: any): any {
  if (obj == null || typeof obj !== 'object') {
    return obj
  } else if (Array.isArray(obj)) {
    return obj.map(item => formatAPIObjectInput(item))
  } else {
    return Object.keys(obj).reduce((newObj, key) => {
      if (typeof obj[key] === 'object') {
        return {...newObj, [snakeCase(key)]: formatAPIObjectInput(obj[key])}
      }
      return {
        ...newObj,
        [snakeCase(key)]: obj[key],
      }
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
      if (typeof obj[key] === 'object') {
        return {...newObj, [camelCase(key)]: formatAPIObjectOutput(obj[key])}
      }
      return {...newObj, [camelCase(key)]: obj[key]}
    }, {})
  }
}
