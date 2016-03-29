'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sampletext = require('./sampletext');

var _sampletext2 = _interopRequireDefault(_sampletext);

var _reactSimpletabs = require('react-simpletabs');

var _reactSimpletabs2 = _interopRequireDefault(_reactSimpletabs);

var fonts = [['sans', '300', '', 'EconSans'], ['sans', '', '', 'EconSans'], ['sans', '700', '', 'EconSans'], ['sans', '', 'italic', 'EconSans'], ['serif', '', '', 'MiloSerifPro'], ['serif', '500', '', 'MiloSerifPro'], ['serif', '', 'italic', 'MiloSerifPro']];
var eachSample = fonts.map(function (fontFamily) {
  var kind = fontFamily[0];
  var modifier = fontFamily[1];
  var fontStyle = fontFamily[2];
  var family = fontFamily[3];

  var classes = ['example__' + kind + '-text', modifier && 'example__' + kind + '-text--' + modifier].join(' ');
  var style = { fontFamily: family };
  if (modifier !== '') {
    style.fontWeight = modifier;
  }
  if (fontStyle !== '') {
    style.fontStyle = fontStyle;
  }
  return _react2['default'].createElement(
    _reactSimpletabs2['default'].Panel,
    { title: family + ' ' + modifier + ' ' + fontStyle, key: 'typography-' + fontFamily.join('x') },
    _react2['default'].createElement(
      'h2',
      null,
      'Sample for font-family: ',
      fontFamily.join(' ')
    ),
    _react2['default'].createElement(
      'div',
      {
        className: classes,
        style: style,
        'data-font': family.toLowerCase().replace(/ /g, '-')
      },
      _react2['default'].createElement(_sampletext2['default'], null)
    ),
    _react2['default'].createElement('hr', null)
  );
});

exports['default'] = _react2['default'].createElement(
  _reactSimpletabs2['default'],
  { className: 'library--example-tabs' },
  eachSample
);
module.exports = exports['default'];