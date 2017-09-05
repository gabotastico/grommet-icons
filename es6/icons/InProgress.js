var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var InProgress = function InProgress(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'InProgress' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M1,1 L23,1 M10,4.5 L14,4.5 C14,4.5 14,6 14,6 C14,7 12,8 12,8 C12,8 10,7 10,6 C10,6 10,4.5 10,4.5 Z M5,1 C5,1 5,3 5,6 C5,9 10,9.23530084 10,12 C10,14.7646992 5.00000001,15 5,18 C4.99999999,21 5,23 5,23 M19,1 C19,1 19,3 19,6 C19,9 14,9.23530084 14,12 C14,14.7646992 19,15 19,18 C19,21 19,23 19,23 M1,23 L23,23 M8,21 C8,19 12,17 12,17 C12,17 16,19 16,21 C16,21 16,23 16,23 L8,23 L8,21 Z' })
      )
    )
  );
};

export default InProgress;