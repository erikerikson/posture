import _ from 'lodash'
import jju from 'jju'

const lineMap = { root: 0 }
var line = 1

const buildKeyPath = (key, stack) => {
  const plainKey = key.replace(/"/g, '')
  const numberlessPath = _.filter(stack, (i) => { return !Number.isInteger(i) })
  const pathFromRoot = _.concat(['root'], numberlessPath)
  return _.concat(pathFromRoot, plainKey).join('_').toLowerCase()
}

const mapTokens = (tokens) => {
  tokens.forEach((t) => {
    if (t.type === 'newline') {
      line++
    } else if (t.type === 'key') {
      var keyPath = buildKeyPath(t.raw, t.stack)
      lineMap[keyPath] = line
    }
  })
}

const mapLines = (swagger) => {
  var tokens = jju.tokenize(swagger)
  mapTokens(tokens)
  return lineMap
}

export default mapLines
