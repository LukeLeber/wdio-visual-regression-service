'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.mapViewports = mapViewports;
exports.mapOrientations = mapOrientations;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('wdio-visual-regression-service');
function mapViewports(browser, delay) {
  var viewports = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var iterateeScreenshot = arguments[3];
  var iterateeProcess = arguments[4];

  var results, viewport, params, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _viewport, _params;

  return _regenerator2.default.async(function mapViewports$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:

          debug('7');
          results = [];

          if (viewports.length) {
            _context.next = 12;
            break;
          }

          _context.next = 5;
          return _regenerator2.default.awrap(browser.getViewportSize());

        case 5:
          viewport = _context.sent;
          _context.next = 8;
          return _regenerator2.default.awrap(iterateeScreenshot(viewport));

        case 8:
          params = _context.sent;

          results.push(iterateeProcess.apply(undefined, (0, _toConsumableArray3.default)(params)));
          _context.next = 44;
          break;

        case 12:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 15;
          _iterator = (0, _getIterator3.default)(viewports);

        case 17:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 30;
            break;
          }

          _viewport = _step.value;
          _context.next = 21;
          return _regenerator2.default.awrap(browser.setViewportSize(_viewport));

        case 21:
          _context.next = 23;
          return _regenerator2.default.awrap(browser.pause(delay));

        case 23:
          _context.next = 25;
          return _regenerator2.default.awrap(iterateeScreenshot(_viewport));

        case 25:
          _params = _context.sent;

          results.push(iterateeProcess.apply(undefined, (0, _toConsumableArray3.default)(_params)));

        case 27:
          _iteratorNormalCompletion = true;
          _context.next = 17;
          break;

        case 30:
          _context.next = 36;
          break;

        case 32:
          _context.prev = 32;
          _context.t0 = _context['catch'](15);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 36:
          _context.prev = 36;
          _context.prev = 37;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 39:
          _context.prev = 39;

          if (!_didIteratorError) {
            _context.next = 42;
            break;
          }

          throw _iteratorError;

        case 42:
          return _context.finish(39);

        case 43:
          return _context.finish(36);

        case 44:
          return _context.abrupt('return', _promise2.default.all(results));

        case 45:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this, [[15, 32, 36, 44], [37,, 39, 43]]);
}

function mapOrientations(browser, delay) {
  var orientations = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var iterateeScreenshot = arguments[3];
  var iterateeProcess = arguments[4];

  var results, orientation, params, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _orientation, _params2;

  return _regenerator2.default.async(function mapOrientations$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          debug('8');
          results = [];

          if (orientations.length) {
            _context2.next = 12;
            break;
          }

          _context2.next = 5;
          return _regenerator2.default.awrap(browser.getOrientation());

        case 5:
          orientation = _context2.sent;
          _context2.next = 8;
          return _regenerator2.default.awrap(iterateeScreenshot(orientation));

        case 8:
          params = _context2.sent;

          results.push(iterateeProcess.apply(undefined, (0, _toConsumableArray3.default)(params)));
          _context2.next = 44;
          break;

        case 12:
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context2.prev = 15;
          _iterator2 = (0, _getIterator3.default)(orientations);

        case 17:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context2.next = 30;
            break;
          }

          _orientation = _step2.value;
          _context2.next = 21;
          return _regenerator2.default.awrap(browser.setOrientation(_orientation));

        case 21:
          _context2.next = 23;
          return _regenerator2.default.awrap(browser.pause(delay));

        case 23:
          _context2.next = 25;
          return _regenerator2.default.awrap(iterateeScreenshot(_orientation));

        case 25:
          _params2 = _context2.sent;

          results.push(iterateeProcess.apply(undefined, (0, _toConsumableArray3.default)(_params2)));

        case 27:
          _iteratorNormalCompletion2 = true;
          _context2.next = 17;
          break;

        case 30:
          _context2.next = 36;
          break;

        case 32:
          _context2.prev = 32;
          _context2.t0 = _context2['catch'](15);
          _didIteratorError2 = true;
          _iteratorError2 = _context2.t0;

        case 36:
          _context2.prev = 36;
          _context2.prev = 37;

          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }

        case 39:
          _context2.prev = 39;

          if (!_didIteratorError2) {
            _context2.next = 42;
            break;
          }

          throw _iteratorError2;

        case 42:
          return _context2.finish(39);

        case 43:
          return _context2.finish(36);

        case 44:
          return _context2.abrupt('return', _promise2.default.all(results));

        case 45:
        case 'end':
          return _context2.stop();
      }
    }
  }, null, this, [[15, 32, 36, 44], [37,, 39, 43]]);
}