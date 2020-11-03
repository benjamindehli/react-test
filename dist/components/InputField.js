"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("./Button"));

var _reactDatepicker = _interopRequireWildcard(require("react-datepicker"));

var _dateFns = require("date-fns");

var _nb = _interopRequireDefault(require("date-fns/locale/nb"));

require("react-datepicker/dist/react-datepicker.css");

var _InputFieldModule = _interopRequireDefault(require("./InputField.module.scss"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDatepicker.registerLocale)('nb', _nb.default);

class InputField extends _react.default.Component {
  convertDateToString(date) {
    return date ? (0, _dateFns.format)(new Date(date), this.props.dateFormat, {
      locale: _nb.default
    }) : '';
  }

  renderValueAsText(value, defaultContent) {
    return this.props.type === 'date' ? value ? this.convertDateToString(value) : defaultContent : value ? value : defaultContent;
  }

  renderInputField() {
    return this.props.type === 'date' ? /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
      name: this.props.name,
      readOnly: this.props.readOnly,
      disabled: this.props.disabled,
      id: this.props.id,
      dateFormat: this.props.dateFormat,
      locale: "nb",
      selectsStart: this.props.selectsStart,
      selectsEnd: this.props.selectsEnd,
      startDate: this.props.startDate ? new Date(this.props.startDate) : null,
      endDate: this.props.endDate ? new Date(this.props.endDate) : null,
      onChange: this.props.onChange ? date => this.props.onChange(date) : console.log("Missing onChange handler for date picker with id: ".concat(this.props.id)),
      selected: this.props.value ? new Date(this.props.value) : null,
      className: this.props.hasErrors ? _InputFieldModule.default.hasErrors : ''
    }) : /*#__PURE__*/_react.default.createElement("input", {
      name: this.props.name,
      readOnly: this.props.readOnly,
      disabled: this.props.disabled,
      type: this.props.type,
      id: this.props.id,
      onChange: this.props.onChange,
      value: this.props.value ? this.props.value : '',
      className: this.props.hasErrors ? _InputFieldModule.default.hasErrors : '',
      "aria-required": this.props.mandatory
    });
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(_InputFieldModule.default.inputField, " ").concat(_InputFieldModule.default[this.props.type])
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id
    }, this.props.label, this.props.type === 'file' ? /*#__PURE__*/_react.default.createElement("div", {
      className: _InputFieldModule.default.fileInputContainer
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: _InputFieldModule.default.input
    }, this.props.selectedFileName), this.props.buttonContent ? /*#__PURE__*/_react.default.createElement(_Button.default, {
      size: "small",
      color: this.props.buttonColor,
      onClick: () => {
        document.getElementById(this.props.id).click();
      },
      content: this.props.buttonContent
    }) : '') : ''), !this.props.contentOnly ? this.renderInputField() : /*#__PURE__*/_react.default.createElement("span", null, this.renderValueAsText(this.props.value, this.props.defaultContent)), /*#__PURE__*/_react.default.createElement("span", {
      className: _InputFieldModule.default.errorMessage
    }, this.props.errorMessage ? this.props.errorMessage : ''));
  }

}

InputField.propTypes = {
  /** Text content inside list item */
  id: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  value: _propTypes.default.any,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  contentOnly: _propTypes.default.bool,
  buttonColor: _propTypes.default.string,
  buttonContent: _propTypes.default.string,
  selectedFileName: _propTypes.default.string,
  dateFormat: _propTypes.default.string,
  defaultContent: _propTypes.default.string,
  hasErrors: _propTypes.default.bool,
  errorMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  mandatory: _propTypes.default.bool
};
InputField.defaultProps = {
  name: '',
  type: 'text',
  label: '',
  contentOnly: false,
  buttonColor: 'default',
  dateFormat: 'd. MMMM, yyyy',
  defaultContent: '',
  hasErrors: false,
  errorMessage: '',
  mandatory: false
};
var _default = InputField;
exports.default = _default;