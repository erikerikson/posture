  #!/usr/bin/env node

  import program from 'commander'
  import fs from 'fs'
  import chalk from 'chalk'
  import _ from 'lodash'
  import lintObject from './lint'
  import { getRequirementsArray, collectRequirements } from './requirements'
  import { buildMessage } from './messages'
  import mapLines from './mapLines'

  program
      .version('0.1.0')
      .option('-s, --swagger [swagger]', 'path to swagger file if not in root directory')
      .parse(process.argv)

  try {
    var file = program.swagger ? program.swagger : './swagger.json'
    const swagger = fs.readFileSync(file, 'utf8')
    const obj = JSON.parse(swagger)
    const lineMap = mapLines(swagger)
    const requirements = getRequirementsArray(collectRequirements(), obj)
    const results = lintObject(obj, requirements)

    if (_.keys(results).length) {
      for (let severity in results) {
        results[severity].forEach((result) => {
          var message = buildMessage(severity, result, lineMap, collectRequirements())
          if (message) { console.log(message) }
        })
      }
    } else {
      console.log(`${chalk.bgGreen.white(' SUCCESS ')} ${chalk.green('Your documentation conforms to recommended practices.')}`)
    }
  } catch (err) {
    console.log(err)
  }
