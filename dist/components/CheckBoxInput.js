"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CheckBoxIcon = _interopRequireDefault(require("./CheckBoxIcon"));

var _CheckBoxInputModule = _interopRequireDefault(require("./CheckBoxInput.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CheckBoxInput extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("label", {
      className: "".concat(_CheckBoxInputModule.default.checkBoxInput, " ").concat(this.props.contentOnly ? _CheckBoxInputModule.default.contentOnly : ''),
      htmlFor: this.props.id
    }, !this.props.contentOnly ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_CheckBoxIcon.default, {
      checked: this.props.checked,
      theme: this.props.theme
    }), /*#__PURE__*/_react.default.createElement("input", {
      onChange: this.props.onChange,
      type: "checkbox",
      name: this.props.name,
      id: this.props.id,
      checked: this.props.checked
    })) : /*#__PURE__*/_react.default.createElement(_CheckBoxIcon.default, {
      checked: this.props.checked,
      showBox: false,
      theme: this.props.theme
    }), /*#__PURE__*/_react.default.createElement("span", null, this.props.children));
  }

}

CheckBoxInput.propTypes = {
  checked: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  contentOnly: _propTypes.default.bool,
  theme: _propTypes.default.object
};
CheckBoxInput.defaultProps = {
  checked: false,
  name: '',
  contentOnly: false
};
var _default = CheckBoxInput;
exports.default = _default;