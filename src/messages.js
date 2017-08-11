  import _ from 'lodash'

  export const buildMessage = (severity, response, lineMap, messages) => {
    var message = messages[severity][response.pathKey]
    if (!message || response.params.falsePositive) { return }

    message = message(lineMap[getCorrectPath(response)])
    for (var key in response.params) {
      message = `${message.replace(key, response.params[key].toUpperCase())}`
    }
    return message
  }

  const getCorrectPath = (response) => {
    var pathKey = response.pathKey
    for (var key in response.params) {
      pathKey = pathKey.replace(key.substring(1), response.params[key])
    }
    var pathKeyArray = pathKey.split('_')
    if (pathKeyArray[0] === 'missing') {
      pathKeyArray = _.dropRight(pathKeyArray)
    }

    return _.drop(pathKeyArray).join('_').toLowerCase()
  }
