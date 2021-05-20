"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RadioButtonIcon = _interopRequireDefault(require("./RadioButtonIcon"));

var _RadioButtonInputModule = _interopRequireDefault(require("./RadioButtonInput.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RadioButtonInput = /*#__PURE__*/function (_React$Component) {
  _inherits(RadioButtonInput, _React$Component);

  var _super = _createSuper(RadioButtonInput);

  function RadioButtonInput() {
    _classCallCheck(this, RadioButtonInput);

    return _super.apply(this, arguments);
  }

  _createClass(RadioButtonInput, [{
    key: "render",
    value: function render() {
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
  }]);

  return RadioButtonInput;
}(_react.default.Component);

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