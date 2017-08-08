import { getRequirementsArray } from './requirements'
import exampleSwagger from './testUtils/exampleSwagger'

const warnings = {
  'basic-error_root_tags': null,
  'path-error_root_paths_PATH_OPERATION_field': null,
  'definiton-error_root_definitions_DEFKEY_properties_PROPKEY_field': null
}

it('builds requirements from common Operations', () => {
  var reqArr = getRequirementsArray({ warnings }, exampleSwagger)
  var expected = {
    get: [ 'field' ],
    put: [ 'field' ],
    post: [ 'field' ],
    delete: [ 'field' ],
    options: [ 'field' ],
    head: [ 'field' ],
    patch: [ 'field' ]
  }

  expect(reqArr[0].requirements['path-error']).toEqual(expected)
})

it('builds requirements from Definiton Keys and Property Keys', () => {
  var reqArr = getRequirementsArray({ warnings }, exampleSwagger)
  var expected = {
    'propArray': [ 'field' ],
    'propOne': [ 'field' ]
  }

  expect(reqArr[0].requirements['definiton-error']).toEqual(expected)
})
