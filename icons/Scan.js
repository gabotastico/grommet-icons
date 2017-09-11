'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Scan = function Scan(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Scan' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M20,14 L20,21 L4,21 L4,14 L4,14 M1,12 L23,12 L1,12 Z M4,11 L4,8 L4,11 Z M20,8 L20,11 L20,8 Z M7,3 L4,3 L4,6 M20,6 L20,3 L17,3 M9,3 L15,3 L9,3 Z', transform: 'matrix(1 0 0 -1 0 24)' })
  );
};

exports.default = Scan;