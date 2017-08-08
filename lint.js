#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _lint = require('./lib/lint');

var _lint2 = _interopRequireDefault(_lint);

var _requirements = require('./lib/requirements');

var _messages = require('./lib/messages');

var _messagesObject = require('./lib/messagesObject');

var _messagesObject2 = _interopRequireDefault(_messagesObject);

var _errors = require('./lib/errors');

var _mapLines = require('./lib/mapLines');

var _mapLines2 = _interopRequireDefault(_mapLines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version('0.1.0').option('-s, --swagger [swagger]', 'path to swagger file if not in root directory').parse(process.argv);

try {
  var file;

  (function () {
    file = _commander2.default.swagger ? _commander2.default.swagger : './swagger.json';

    var swagger = _fs2.default.readFileSync(file, 'utf8');
    var obj = JSON.parse(swagger);
    var lineMap = (0, _mapLines2.default)(swagger);
    var requirements = (0, _requirements.getRequirementsArray)((0, _requirements.collectRequirements)(), obj);
    var results = (0, _lint2.default)(obj, requirements);

    if (_lodash2.default.keys(results).length) {
      var _loop = function _loop(severity) {
        results[severity].forEach(function (result) {
          var message = (0, _messages.buildMessage)(severity, result, lineMap, _messagesObject2.default);
          if (message) {
            console.log(message);
          }
        });
      };

      for (var severity in results) {
        _loop(severity);
      }
    } else {
      console.log(_chalk2.default.bgGreen.white(' SUCCESS ') + ' ' + _chalk2.default.green('Your documentation conforms to recommended practices.'));
    }
  })();
} catch (err) {
  console.log((0, _errors.error)('Malformed JSON file'));
  console.log(err);
}
