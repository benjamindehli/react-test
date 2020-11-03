import React from 'react';
import PropTypes from 'prop-types';
import { getThemePaletteBackgroundColor, getThemePaletteTextColor, getThemeTextColor, getThemeLinkColor, getThemeLogo, getThemeAppName } from 'lib/functions/theme';
import logo from 'lib/images/dibk-logo-mobile.svg';
import style from './Theme.module.scss';

class Theme extends React.Component {
  getThemeColorPaletteStyle(theme, color) {
    return {
      backgroundColor: getThemePaletteBackgroundColor(theme, color),
      color: getThemePaletteTextColor(theme, color)
    };
  }

  getThemeTextStyle(theme) {
    return {
      color: getThemeTextColor(theme)
    };
  }

  getThemeLinkStyle(theme) {
    return {
      color: getThemeLinkColor(theme)
    };
  }

  renderColors(theme) {
    const colors = ['default', 'primary', 'success', 'warning', 'info', 'lightCyan', 'orange', 'lightOrange', 'lime', 'lightLime'];
    return colors.map(color => {
      const colorClassName = style[color];
      const colorPaletteStyle = this.props.theme ? this.getThemeColorPaletteStyle(this.props.theme, color) : null;
      return /*#__PURE__*/React.createElement("div", {
        key: color,
        className: `${style.color} ${colorClassName}`,
        style: colorPaletteStyle
      }, color);
    });
  }

  renderLogo(logoLink) {
    const themeLogo = getThemeLogo(this.props.theme);
    const themeAppName = getThemeAppName(this.props.theme);
    const logoElement = themeLogo && themeAppName ? /*#__PURE__*/React.createElement("img", {
      alt: `${themeAppName} logo`,
      src: themeLogo
    }) : /*#__PURE__*/React.createElement("img", {
      alt: "DIBK logo",
      src: logo
    });
    return logoLink && logoLink.length ? /*#__PURE__*/React.createElement("a", {
      href: logoLink
    }, logoElement) : logoElement;
  }

  render() {
    const themeTextStyle = this.props.theme ? this.getThemeTextStyle(this.props.theme) : null;
    const themeLinkStyle = this.props.theme ? this.getThemeLinkStyle(this.props.theme) : null;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: style.colorPalette
    }, this.renderColors(this.props.theme)), /*#__PURE__*/React.createElement("p", {
      style: themeTextStyle
    }, "The is default text"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
      style: themeLinkStyle,
      href: "#theme"
    }, "This is a hyperlink")), this.renderLogo(this.props.theme));
  }

}

Theme.propTypes = {
  theme: PropTypes.object
};
Theme.defaultProps = {};
export default Theme;