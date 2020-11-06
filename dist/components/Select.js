"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../functions/theme");

var _SelectModule = _interopRequireDefault(require("./Select.module.scss"));

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

var Select = /*#__PURE__*/function (_React$Component) {
  _inherits(Select, _React$Component);

  var _super = _createSuper(Select);

  function Select() {
    _classCallCheck(this, Select);

    return _super.apply(this, arguments);
  }

  _createClass(Select, [{
    key: "getThemeErrorInputStyle",
    value: function getThemeErrorInputStyle(theme) {
      return {
        boxShadow: "0 0 3px ".concat((0, _theme.getThemePaletteBackgroundColor)(theme, 'warning')),
        borderColor: (0, _theme.getThemePaletteBackgroundColor)(theme, 'warning')
      };
    }
  }, {
    key: "getThemeErrorMessageStyle",
    value: function getThemeErrorMessageStyle(theme) {
      return {
        color: (0, _theme.getThemePaletteBackgroundColor)(theme, 'warning')
      };
    }
  }, {
    key: "getThemeArrowStyle",
    value: function getThemeArrowStyle(theme) {
      return {
        borderTopColor: (0, _theme.getThemePaletteBackgroundColor)(theme, 'primary')
      };
    }
  }, {
    key: "getKeyByValue",
    value: function getKeyByValue(value, options) {
      var selectedOption = options && options.length ? options.find(function (option) {
        if (typeof option === 'object') {
          return option.value === value;
        } else {
          return option === value;
        }
      }) : null;

      if (selectedOption && selectedOption.key) {
        return selectedOption.key;
      } else if (selectedOption && selectedOption.value) {
        return selectedOption.value;
      } else {
        return selectedOption;
      }
    }
  }, {
    key: "renderOptionElements",
    value: function renderOptionElements(options) {
      return options.map(function (option, key) {
        var optionObject = null;

        if (typeof option === 'object') {
          optionObject = {
            key: option.key ? option.key : '',
            value: option.value ? option.value : ''
          };
        } else {
          optionObject = {
            key: option,
            value: option
          };
        }

        return /*#__PURE__*/_react.default.createElement("option", {
          value: optionObject.value,
          key: key
        }, optionObject.key);
      });
    }
  }, {
    key: "renderPlaceholderOption",
    value: function renderPlaceholderOption(placeholder, placeholderValue) {
      return placeholder ? /*#__PURE__*/_react.default.createElement("option", {
        value: placeholderValue,
        disabled: true
      }, placeholder) : '';
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.props.value ? this.props.value : "";
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _SelectModule.default.select
      }, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: this.props.id
      }, this.props.label), !this.props.contentOnly ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: _SelectModule.default.selectContainer
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: _SelectModule.default.selectListArrow,
        style: this.getThemeArrowStyle(this.props.theme)
      }), /*#__PURE__*/_react.default.createElement("select", {
        name: this.props.name,
        multiple: this.props.multiple,
        value: value,
        onChange: this.props.onChange,
        id: this.props.id,
        className: this.props.hasErrors ? _SelectModule.default.hasErrors : '',
        style: this.props.hasErrors ? this.getThemeErrorInputStyle(this.props.theme) : null
      }, this.renderPlaceholderOption(this.props.placeholder, this.props.placeholderValue), this.renderOptionElements(this.props.options))), /*#__PURE__*/_react.default.createElement("span", {
        className: _SelectModule.default.errorMessage,
        style: this.getThemeErrorMessageStyle(this.props.theme)
      }, this.props.errorMessage ? this.props.errorMessage : '')) : /*#__PURE__*/_react.default.createElement("span", null, this.props.value ? this.props.keyAsContent ? this.getKeyByValue(this.props.value, this.props.options) : this.props.value : this.props.defaultContent));
    }
  }]);

  return Select;
}(_react.default.Component);

Select.propTypes = {
  id: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  options: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
    key: _propTypes.default.string,
    value: _propTypes.default.string
  })])),
  value: _propTypes.default.any,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  contentOnly: _propTypes.default.bool,
  keyAsContent: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  placeholderValue: _propTypes.default.string,
  defaultContent: _propTypes.default.string,
  hasErrors: _propTypes.default.bool,
  errorMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  theme: _propTypes.default.object
};
Select.defaultProps = {
  name: '',
  options: [],
  label: '',
  contentOnly: false,
  keyAsContent: false,
  placeholder: null,
  placeholderValue: '',
  defaultContent: null,
  hasErrors: false,
  errorMessage: ''
};
var _default = Select;
exports.default = _default;