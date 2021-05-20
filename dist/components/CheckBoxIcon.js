"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../functions/theme");

var _CheckBoxIconModule = _interopRequireDefault(require("./CheckBoxIcon.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var CheckBoxIcon = /*#__PURE__*/function (_React$Component) {
  _inherits(CheckBoxIcon, _React$Component);

  var _super = _createSuper(CheckBoxIcon);

  function CheckBoxIcon() {
    _classCallCheck(this, CheckBoxIcon);

    return _super.apply(this, arguments);
  }

  _createClass(CheckBoxIcon, [{
    key: "render",
    value: function render() {
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
  }]);

  return CheckBoxIcon;
}(_react.default.Component);

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