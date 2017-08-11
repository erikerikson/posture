  import _ from 'lodash'
  import buildPathKey from './buildPathKey'

  const checkFieldPresence = (requiredKeys, severity, currentObject, results, objectPath) => {
    const keys = _.keys(currentObject)
    requiredKeys.forEach((key) => {
      if (!keys.includes(key)) {
        _.update(results, severity, (r = []) => {
          return _.concat(r, buildPathKey('missing', objectPath, key, currentObject))
        })
      }
    })
  }

  const checkFieldLength = (requiredKeys, severity, currentObject, results, objectPath, min, max) => {
    const keys = _.keys(currentObject)
    requiredKeys.forEach((key) => {
      if (keys.includes(key)) {
        if (currentObject[key].length < min || currentObject[key].length > max) {
          _.update(results, severity, (r = []) => {
            return _.concat(r, buildPathKey(`length-${min}-${max}`, objectPath, key, currentObject))
          })
        }
      }
    })
  }

  const lintObject = (currentObject, results, objectPath, requirements) => {
    requirements.forEach((r) => {
      // severities are warn, error, etc...
      const severity = r.severity

      for (var requirement in r.requirements) {
        const requiredKeys = r.requirements[requirement][objectPath.slice(-1).pop()]
        // continue if current object doesn't have any fields that match the current requirement
        if (!requiredKeys) { continue }
        if (requirement === 'missing') {
          checkFieldPresence(requiredKeys, severity, currentObject, results, objectPath)
        }
        if (requirement.split('-')[0] === 'length') {
          var [ , min, max ] = requirement.split('-')
          checkFieldLength(requiredKeys, severity, currentObject, results, objectPath, min, max)
        }
      }
    })

    // recurse over all enum
    for (let key in currentObject) {
      const child = currentObject[key]
      const childPath = _.concat(objectPath, key)

      if (typeof (child) === 'object' && !Array.isArray(child)) {
        lintObject(child, results, childPath, requirements)
      } else if (typeof (child) === 'object' && Array.isArray(child)) {
        child.forEach((item) => {
          if (typeof (item) === 'object' && !Array.isArray(item)) {
            lintObject(item, results, childPath, requirements)
          }
        })
      }
    }
  }

  const lintSwagger = (swagger, requirements) => {
    var results = {}
    lintObject(swagger, results, ['root'], requirements)
    return results
  }

  export default lintSwagger
