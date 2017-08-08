import chalk from 'chalk'

export const error = (text) => {
  return chalk.bold.white.bgRed(' ERROR ') + ' ' + chalk.red(text)
}

/**
  a data model representing the fields to lint and what to lint them for

  the 'error' severity is breaking to the Swager Spec Definition
  any violations in the file will cause a registration to fail

  the first segment is the requirement, length or (not) missing
  the second segment is the path to the field with the requirement
  elements on the path that are in BOLD are user defined in the swagger file
  requirements::buildObjectNavigationMap to map these to the key-names used in the actual swagger file
**/

const errors = {
  'missing_root_swagger': (line) => error(`line ${line} You must include the Swagger version in the 'swagger' field. We use 2.0.`),
  'missing_root_info': (line) => error(`line ${line} You must include an info object in the 'info' field.`),
  'missing_root_schemes': (line) => error(`line ${line} You must include at least one scheme in the 'schemes' field. eg. ['http', 'https']`),
  'missing_root_produces': (line) => error(`line ${line} You must indicate the MIME types that your service produces in the 'produces' field. eg: ['text/html', 'application/json']`),
  'missing_root_consumes': (line) => error(`line ${line} You must indicate the MIME types that your service consumes in the 'consumes' field. eg: ['multipart/form-data', 'application/json']`),
  'missing_root_paths': (line) => error(`line ${line} You must include the paths object in the 'paths' field.`),
  'missing_root_info_title': (line) => error(`line ${line} You must include the name of your service in the 'title' field of the info object.`),
  'missing_root_info_version': (line) => error(`line ${line} You must include the version of your service in the 'version' field of the info object.`),
  'missing_root_paths_PATH_OPERATION_responses': (line) => error(`line ${line} You must include a response object for '$OPERATION $PATH.`)
}

export default errors
