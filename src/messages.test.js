import { buildMessage } from './messages'

it('buildMessage iterpolates variables', () => {
  let severity = 'extreme'
  let response = {
    pathKey: 'warning-name_root_VAR1_VAR2',
    params: { '$VAR1': 'foo', '$VAR2': 'bar' }
  }
  let lineMap = {
    'root_foo_bar': 3
  }
  let messageObject = {
    'extreme': {
      'warning-name_root_VAR1_VAR2': (line) => { return `${line} $VAR1 $VAR2` }
    }
  }

  expect(buildMessage(severity, response, lineMap, messageObject)).toBe('3 FOO BAR')
})
