'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Desktop = function Desktop(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Desktop' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M1,1 L23,1 L23,19 L1,19 L1,1 Z M5,23 L19,23 L5,23 Z M10,19 L10,23 L10,19 Z M14,19 L14,23 L14,19 Z' })
  );
};

exports.default = Desktop;