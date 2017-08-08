import chalk from 'chalk'

const warn = (text) => {
  return chalk.bold.white.bgYellow(' WARN ') + ' ' + chalk.yellow(text)
}

/**
  a data model representing the fields to lint and what to lint them for

  the 'warning' severity are compatibility-optimizations
  any violations reduce the user experience in the Documentation Portal

  the first segment is the requirement, length or (not) missing
  the second segment is the path to the field with the requirement
  elements on the path that are in BOLD are user defined in the swagger file
  requirements::buildObjectNavigationMap to map these to the key-names used in the actual swagger file
**/

const warnings = {
  'length-25-75_root_paths_PATH_OPERATION_summary': (line) => warn(`line ${line} - Summary field for '$OPERATION $PATH' should be a short name - about 50 characters. eg: Get user by name`),
  'length-25-10000_root_paths_PATH_OPERATION_summary': (line) => warn(`line ${line} - Description field for '$OPERATION $PATH' should be more descriptive.`),
  'missing_root_info_description': (line) => warn(`line ${line} - Include a description of your service to let users know if they've found what they're looking for.`),
  'missing_root_paths_PATH_OPERATION_summary': (line) => warn(`line ${line} - Include the 'summary' field for '$OPERATION $PATH'. This should be a short (~50 char) name for this operation and is used for navigation. eg: Get user by name`),
  'missing_root_paths_PATH_OPERATION_description': (line) => warn(`line ${line} - Include a 'description' for '$OPERATION $PATH'. This is an in depth field where you can explain why users would want to use this operation.`)
}

export default warnings
