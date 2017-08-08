import chalk from 'chalk'

const optimize = (text) => {
  return chalk.bold.white.bgCyan(' OPTIMIZE ') + ' ' + chalk.cyan(text)
}

/**
  a data model representing the fields to lint and what to lint them for

  the 'optimizations' severity are compatibility-optimizations
  any violations reduce the user experience in the Documentation Portal

  the first segment is the requirement, length or (not) missing
  the second segment is the path to the field with the requirement
  elements on the path that are in BOLD are user defined in the swagger file
  requirements::buildObjectNavigationMap to map these to the key-names used in the actual swagger file
**/

const optimizations = {
  'missing_root_tags': (line) => optimize(`line ${line} - Include an array of tag obects to help users discover your service.`),
  'missing_root_paths_PATH_OPERATION_parameters_default': (line) => optimize(`line ${line} - Include a working example in the 'default' field of the $SCHEMA object for $OPERATION $PATH.`),
  'missing_root_definitions_DEFKEY_properties_PROPKEY_default': (line) => optimize(`line ${line} - Include a working example in the 'default' field of the $PROPKEY object for the $DEFKEY definition.`)
}

export default optimizations
