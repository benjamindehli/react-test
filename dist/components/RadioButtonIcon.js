"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../functions/theme");

var _RadioButtonIconModule = _interopRequireDefault(require("./RadioButtonIcon.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RadioButtonIcon extends _react.default.Component {
  render() {
    var inlineStyle = {
      height: this.props.size,
      width: this.props.size
    };

    if (this.props.theme && this.props.checked) {
      inlineStyle = _objectSpread(_objectSpread({}, inlineStyle), {}, {
        background: (0, _theme.getThemePaletteBackgroundColor)(this.props.theme, 'primary'),
        boxShadow: "0 0 0 1px ".concat((0, _theme.getThemePaletteBackgroundColor)(this.props.theme, 'primary'))
      });
    }

    return /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(_RadioButtonIconModule.default.radioButtonIcon, " ").concat(this.props.checked ? _RadioButtonIconModule.default.checked : ''),
      style: inlineStyle
    });
  }

}

RadioButtonIcon.propTypes = {
  size: _propTypes.default.string,
  checked: _propTypes.default.bool,
  theme: _propTypes.default.object
};
RadioButtonIcon.defaultProps = {
  size: '10px',
  checked: false
};
var _default = RadioButtonIcon;
exports.default = _default;