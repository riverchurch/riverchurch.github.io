'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var divider = {
  height: '2px',
  background: '#999'
};

var label = {
  color: '#999',
  fontWeight: 'bold'
};

var table = {
  width: '100%',
  borderBottom: '1px solid #eee',
  lineHeight: '135%',
  cellpadding: '0',
  cellspacing: '0'
};

var altRow = {
  backgroundColor: '#f5f5f5'
};

var value = {};

var ContactEmail = (function (_Component) {
  _inherits(ContactEmail, _Component);

  function ContactEmail() {
    _classCallCheck(this, ContactEmail);

    _get(Object.getPrototypeOf(ContactEmail.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ContactEmail, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var name = _props.name;
      var email = _props.email;
      var phone = _props.phone;
      var prayer = _props.prayer;

      var comments = this.props['whatcha-need'];
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h1',
          null,
          name
        ),
        _react2['default'].createElement(
          'strong',
          null,
          'RiverCharlotte.com Contact Form'
        ),
        _react2['default'].createElement('div', { style: divider }),
        _react2['default'].createElement(
          'table',
          { style: table },
          _react2['default'].createElement(
            'tbody',
            null,
            _react2['default'].createElement(
              'tr',
              { style: altRow },
              _react2['default'].createElement(
                'th',
                { style: label },
                'Name:'
              ),
              _react2['default'].createElement(
                'td',
                { style: value },
                name
              )
            ),
            _react2['default'].createElement(
              'tr',
              null,
              _react2['default'].createElement(
                'th',
                { style: label },
                'Email:'
              ),
              _react2['default'].createElement(
                'td',
                { style: value },
                email
              )
            ),
            _react2['default'].createElement(
              'tr',
              { style: altRow },
              _react2['default'].createElement(
                'th',
                { style: label },
                'Phone:'
              ),
              _react2['default'].createElement(
                'td',
                { style: value },
                phone
              )
            ),
            _react2['default'].createElement(
              'tr',
              null,
              _react2['default'].createElement(
                'th',
                { style: label },
                'Prayer Request:'
              ),
              _react2['default'].createElement(
                'td',
                { style: value },
                prayer
              )
            ),
            _react2['default'].createElement(
              'tr',
              { style: altRow },
              _react2['default'].createElement(
                'th',
                { style: label },
                'Comments:'
              ),
              _react2['default'].createElement(
                'td',
                { style: value },
                comments
              )
            )
          )
        )
      );
    }
  }]);

  return ContactEmail;
})(_react.Component);

exports['default'] = ContactEmail;
module.exports = exports['default'];

