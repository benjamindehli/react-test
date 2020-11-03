"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../functions/theme");

var _CheckBoxIconModule = _interopRequireDefault(require("./CheckBoxIcon.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CheckBoxIcon extends _react.default.Component {
  render() {
    var inlineStyle = {
      height: this.props.size,
      width: this.props.size,
      fontSize: this.props.size
    };

    if (this.props.theme && this.props.checked) {
      inlineStyle = _objectSpread(_objectSpread({}, inlineStyle), {}, {
        color: (0, _theme.getThemePaletteBackgroundColor)(this.props.theme, 'primary'),
        boxShadow: "0 0 0 1px ".concat((0, _theme.getThemePaletteBackgroundColor)(this.props.theme, 'primary'))
      });
    }

    return /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(_CheckBoxIconModule.default.checkBoxIcon, " ").concat(this.props.checked ? _CheckBoxIconModule.default.checked : '', " ").concat(this.props.showBox ? _CheckBoxIconModule.default.showBox : ''),
      style: inlineStyle
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: _CheckBoxIconModule.default.checkmark
    }, this.props.checked ? '✔' : ''));
  }

}

CheckBoxIcon.propTypes = {
  size: _propTypes.default.string,
  checked: _propTypes.default.bool,
  showBox: _propTypes.default.bool,
  theme: _propTypes.default.object
};
CheckBoxIcon.defaultProps = {
  size: '20px',
  checked: false,
  showBox: true
};
var _default = CheckBoxIcon;
exports.default = _default;