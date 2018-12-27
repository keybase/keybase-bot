// @flow
import snakeCase from 'lodash.snakecase'

// Recursively convert from camelCase to snake_case for any options object for keybase chat api
const formatOptions = (options: Object): Object =>
  Object.keys(options).reduce((newOptions, key) => {
    if (typeof options[key] === 'object') {
      return {
        ...newOptions,
        [snakeCase(key)]: formatOptions(options[key]),
      }
    }
    return {
      ...newOptions,
      [snakeCase(key)]: options[key],
    }
  }, {})

export default formatOptions
