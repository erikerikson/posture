  import _ from 'lodash'
  import { operations, propKeys, defKeys } from './requirements'

  const buildPathKey = (prefix, pathArray, currentKey, obj) => {
    var composedPath = ''
    const params = {}
    const fullKeyPath = _.concat(pathArray, currentKey)
    fullKeyPath.forEach((key, index) => {
      composedPath = `${composedPath}${extractVariableKeyNamesToParams(key, index, params, fullKeyPath, obj)}`
    })

    return { pathKey: `${prefix}${composedPath}`, params }
  }

  const extractVariableKeyNamesToParams = (key, index, params, fullKeyPath, obj) => {
    if (_.startsWith(key, '/')) {
      _.set(params, '$PATH', key)
      return '_PATH'
    }
    if (operations.includes(key)) {
      _.set(params, '$OPERATION', key)
      return '_OPERATION'
    }
    if (defKeys.includes(key)) {
      if (fullKeyPath[index - 1] === 'definitions') {
        _.set(params, '$DEFKEY', key)
        return '_DEFKEY'
      }
    }
    if (propKeys.includes(key)) {
      if (fullKeyPath[index - 1] === 'properties') {
        _.set(params, '$PROPKEY', key)
        return '_PROPKEY'
      }
    }
    if (key === 'default') {
      if (obj.required === false || obj['x-example'] || obj['schema']) { _.set(params, 'falsePositive', true) }
      if (fullKeyPath[index - 1] === 'parameters') { _.set(params, '$SCHEMA', obj.name) }
    }
    return `_${key}`
  }

  export default buildPathKey
