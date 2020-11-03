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

class Theme extends _react.default.Component {
  getThemeColorPaletteStyle(theme, color) {
    return {
      backgroundColor: (0, _theme.getThemePaletteBackgroundColor)(theme, color),
      color: (0, _theme.getThemePaletteTextColor)(theme, color)
    };
  }

  getThemeTextStyle(theme) {
    return {
      color: (0, _theme.getThemeTextColor)(theme)
    };
  }

  getThemeLinkStyle(theme) {
    return {
      color: (0, _theme.getThemeLinkColor)(theme)
    };
  }

  renderColors(theme) {
    var colors = ['default', 'primary', 'success', 'warning', 'info', 'lightCyan', 'orange', 'lightOrange', 'lime', 'lightLime'];
    return colors.map(color => {
      var colorClassName = _ThemeModule.default[color];
      var colorPaletteStyle = this.props.theme ? this.getThemeColorPaletteStyle(this.props.theme, color) : null;
      return /*#__PURE__*/_react.default.createElement("div", {
        key: color,
        className: "".concat(_ThemeModule.default.color, " ").concat(colorClassName),
        style: colorPaletteStyle
      }, color);
    });
  }

  renderLogo(logoLink) {
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

  render() {
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

}

Theme.propTypes = {
  theme: _propTypes.default.object
};
Theme.defaultProps = {};
var _default = Theme;
exports.default = _default;