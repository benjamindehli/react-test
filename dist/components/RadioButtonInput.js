"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RadioButtonIcon = _interopRequireDefault(require("./RadioButtonIcon"));

var _RadioButtonInputModule = _interopRequireDefault(require("./RadioButtonInput.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RadioButtonInput extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "".concat(_RadioButtonInputModule.default.radioButtonInput, " ").concat(this.props.checked ? _RadioButtonInputModule.default.checked : '')
    }, !this.props.contentOnly ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_RadioButtonIcon.default, {
      checked: this.props.checked,
      theme: this.props.theme
    }), /*#__PURE__*/_react.default.createElement("input", {
      type: "radio",
      onChange: this.props.onChange,
      id: this.props.id,
      name: this.props.name,
      value: this.props.inputValue,
      checked: this.props.checked
    })) : '', /*#__PURE__*/_react.default.createElement("span", null, this.props.children));
  }

}

RadioButtonInput.propTypes = {
  checked: _propTypes.default.bool,
  inputValue: _propTypes.default.string.isRequired,
  name: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  contentOnly: _propTypes.default.bool,
  theme: _propTypes.default.object
};
RadioButtonInput.defaultProps = {
  name: '',
  checked: false,
  contentOnly: false
};
var _default = RadioButtonInput;
exports.default = _default;