'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = _react2.default.createClass({
  displayName: 'App',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      'Hello Workshop!'
    );
  }
});

var comp = (0, _server.renderToStaticMarkup)(_react2.default.createElement(App, null));
console.log(comp);