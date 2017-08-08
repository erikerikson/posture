import exampleSwagger from './testUtils/exampleSwagger'
import lintSwagger from './lint'

it('returns array of message objects by severity', () => {
  const requirementsArray = [{
    severity: 'warnings',
    requirements: {
      missing: {
        root: ['tags'],
        get: [ 'field' ],
        put: [ 'field' ],
        post: [ 'field' ],
        delete: [ 'field' ],
        options: [ 'field' ],
        head: [ 'field' ],
        patch: [ 'field' ],
        propOne: [ 'field' ],
        propArray: [ 'field' ]
      }
    }
  }]

  const expectedResults = {
    warnings: [
      { pathKey: 'missing_root_paths_PATH_OPERATION_field',
        params: { '$PATH': '/blog', '$OPERATION': 'get' } },
      { pathKey: 'missing_root_paths_PATH_OPERATION_field',
        params: { '$PATH': '/blog', '$OPERATION': 'post' } },
      { pathKey: 'missing_root_paths_PATH_OPERATION_field',
        params: { '$PATH': '/profile', '$OPERATION': 'get' } }
    ]
  }
  const results = lintSwagger(exampleSwagger, requirementsArray)
  expect(results.warnings).toEqual(expectedResults.warnings)
})
