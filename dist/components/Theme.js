"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../functions/theme");

var _dibkLogoMobile = _interopRequireDefault(require("../images/dibk-logo-mobile.svg"));

var _ThemeModule = _interopRequireDefault(require("./Theme.module.scss"));

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

var Theme = /*#__PURE__*/function (_React$Component) {
  _inherits(Theme, _React$Component);

  var _super = _createSuper(Theme);

  function Theme() {
    _classCallCheck(this, Theme);

    return _super.apply(this, arguments);
  }

  _createClass(Theme, [{
    key: "getThemeColorPaletteStyle",
    value: function getThemeColorPaletteStyle(theme, color) {
      return {
        backgroundColor: (0, _theme.getThemePaletteBackgroundColor)(theme, color),
        color: (0, _theme.getThemePaletteTextColor)(theme, color)
      };
    }
  }, {
    key: "getThemeTextStyle",
    value: function getThemeTextStyle(theme) {
      return {
        color: (0, _theme.getThemeTextColor)(theme)
      };
    }
  }, {
    key: "getThemeLinkStyle",
    value: function getThemeLinkStyle(theme) {
      return {
        color: (0, _theme.getThemeLinkColor)(theme)
      };
    }
  }, {
    key: "renderColors",
    value: function renderColors(theme) {
      var _this = this;

      var colors = ['default', 'primary', 'success', 'warning', 'info', 'lightCyan', 'orange', 'lightOrange', 'lime', 'lightLime'];
      return colors.map(function (color) {
        var colorClassName = _ThemeModule.default[color];
        var colorPaletteStyle = _this.props.theme ? _this.getThemeColorPaletteStyle(_this.props.theme, color) : null;
        return /*#__PURE__*/_react.default.createElement("div", {
          key: color,
          className: "".concat(_ThemeModule.default.color, " ").concat(colorClassName),
          style: colorPaletteStyle
        }, color);
      });
    }
  }, {
    key: "renderLogo",
    value: function renderLogo(logoLink) {
      var themeLogo = (0, _theme.getThemeLogo)(this.props.theme);
      var themeAppName = (0, _theme.getThemeAppName)(this.props.theme);
      var logoElement = themeLogo && themeAppName ? /*#__PURE__*/_react.default.createElement("img", {
        alt: "".concat(themeAppName, " logo"),
        src: themeLogo
      }) : /*#__PURE__*/_react.default.createElement("img", {
        alt: "DIBK logo",
        src: _dibkLogoMobile.default
      });
      return logoLink && logoLink.length ? /*#__PURE__*/_react.default.createElement("a", {
        href: logoLink
      }, logoElement) : logoElement;
    }
  }, {
    key: "render",
    value: function render() {
      var themeTextStyle = this.props.theme ? this.getThemeTextStyle(this.props.theme) : null;
      var themeLinkStyle = this.props.theme ? this.getThemeLinkStyle(this.props.theme) : null;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: _ThemeModule.default.colorPalette
      }, this.renderColors(this.props.theme)), /*#__PURE__*/_react.default.createElement("p", {
        style: themeTextStyle
      }, "The is default text"), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("a", {
        style: themeLinkStyle,
        href: "#theme"
      }, "This is a hyperlink")), this.renderLogo(this.props.theme));
    }
  }]);

  return Theme;
}(_react.default.Component);

Theme.propTypes = {
  theme: _propTypes.default.object
};
Theme.defaultProps = {};
var _default = Theme;
exports.default = _default;