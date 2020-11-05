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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(0, _reactDatepicker.registerLocale)('nb', _nb.default);

var InputField = /*#__PURE__*/function (_React$Component) {
  _inherits(InputField, _React$Component);

  var _super = _createSuper(InputField);

  function InputField() {
    _classCallCheck(this, InputField);

    return _super.apply(this, arguments);
  }

  _createClass(InputField, [{
    key: "convertDateToString",
    value: function convertDateToString(date) {
      return date ? (0, _dateFns.format)(new Date(date), this.props.dateFormat, {
        locale: _nb.default
      }) : '';
    }
  }, {
    key: "renderValueAsText",
    value: function renderValueAsText(value, defaultContent) {
      return this.props.type === 'date' ? value ? this.convertDateToString(value) : defaultContent : value ? value : defaultContent;
    }
  }, {
    key: "renderInputField",
    value: function renderInputField() {
      var _this = this;

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
        onChange: this.props.onChange ? function (date) {
          return _this.props.onChange(date);
        } : console.log("Missing onChange handler for date picker with id: ".concat(this.props.id)),
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
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

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
        onClick: function onClick() {
          document.getElementById(_this2.props.id).click();
        },
        content: this.props.buttonContent
      }) : '') : ''), !this.props.contentOnly ? this.renderInputField() : /*#__PURE__*/_react.default.createElement("span", null, this.renderValueAsText(this.props.value, this.props.defaultContent)), /*#__PURE__*/_react.default.createElement("span", {
        className: _InputFieldModule.default.errorMessage
      }, this.props.errorMessage ? this.props.errorMessage : ''));
    }
  }]);

  return InputField;
}(_react.default.Component);

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