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

/*
 * An internal blacklist of parent levels at which formatAPIObjectOutput transformations
 * shouldn't be performed. A `null` value matches everything.
 */
const transformsBlacklist = {
  chat: {
    read: [['messages', null, 'msg', 'reactions', 'reactions', null]],
  },
}

/**
 * Context of the object formatting process.
 * @ignore
 */
export type FormatAPIObjectOutputContext = {|
  apiName: string,
  method: string,
  parent?: any[],
|}

/*
 * Matches a context against the list of blacklisted parent levels.
 * @ignore
 * @param context - The context to match.
 * @returns - Whether the context is blacklisted from being formatted.
 */
function matchBlacklist(context: ?FormatAPIObjectOutputContext): boolean {
  if (
    !context ||
    !transformsBlacklist[context.apiName] ||
    !transformsBlacklist[context.apiName][context.method]
  ) {
    return false
  }

  const parentLength = context.parent ? context.parent.length : 0

  for (const matcher of transformsBlacklist[context.apiName][context.method]) {
    if (matcher.length !== parentLength) {
      continue
    }

    // Iterate over the items of the matcher
    let mismatch = false
    for (const [matcherIndex, desiredValue] of matcher.entries()) {
      if (desiredValue === null) {
        continue
      }

      if (typeof context.parent === 'object' && context.parent[matcherIndex] !== desiredValue) {
        mismatch = true
        break
      }
    }
    if (!mismatch) {
      return true
    }
  }

  return false
}

/*
 * Appends a new key to the parents array in the formatting context.
 * @ignore
 * @param context - The context to copy and modify.
 * @param key - The key to apprent to the parent array.
 * @returns - A new context.
 */
function buildContext(context: ?FormatAPIObjectOutputContext, key: any): ?FormatAPIObjectOutputContext {
  if (!context) {
    return context
  }

  const copiedContext: FormatAPIObjectOutputContext = {...context}
  if (!copiedContext.parent) {
    copiedContext.parent = [key]
  } else {
    copiedContext.parent = copiedContext.parent.slice()
    copiedContext.parent.push(key)
  }

  return copiedContext
}

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
export function formatAPIObjectOutput(obj: any, context?: ?FormatAPIObjectOutputContext): any {
  if (obj == null || typeof obj !== 'object') {
    return obj
  } else if (Array.isArray(obj)) {
    return obj.map((item, i) => formatAPIObjectOutput(item, buildContext(context, i)))
  } else {
    return Object.keys(obj).reduce((newObj, key) => {
      const formattedKey = matchBlacklist(context) ? key : camelCase(key)
      if (typeof obj[key] === 'object') {
        return {...newObj, [formattedKey]: formatAPIObjectOutput(obj[key], buildContext(context, key))}
      }
      return {...newObj, [formattedKey]: obj[key]}
    }, {})
  }
}
