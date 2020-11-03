import React from 'react';
import PropTypes from 'prop-types';
import { getThemePaletteBackgroundColor, getThemePaletteTextColor, getThemeTextColor, getThemeLinkColor, getThemeLogo, getThemeAppName } from '../functions/theme';
import logo from '../images/dibk-logo-mobile.svg';
import style from './Theme.module.scss';

class Theme extends React.Component {
  getThemeColorPaletteStyle(theme, color){
    return {
      backgroundColor: getThemePaletteBackgroundColor(theme, color),
      color: getThemePaletteTextColor(theme, color)
    }
  }

  getThemeTextStyle(theme){
    return {
      color: getThemeTextColor(theme)
    }
  }

  getThemeLinkStyle(theme){
    return {
      color: getThemeLinkColor(theme)
    }
  }

	renderColors(theme) {
    const colors = ['default', 'primary', 'success', 'warning', 'info', 'lightCyan', 'orange', 'lightOrange', 'lime', 'lightLime'];
    return colors.map(color => {
      const colorClassName = style[color];
      const colorPaletteStyle =  this.props.theme ? this.getThemeColorPaletteStyle(this.props.theme, color) : null;
      return <div key={color} className={`${style.color} ${colorClassName}`} style={colorPaletteStyle}>{ color }</div>;
    });
	}

  renderLogo(logoLink){
    const themeLogo = getThemeLogo(this.props.theme);
    const themeAppName = getThemeAppName(this.props.theme);

    const logoElement = themeLogo && themeAppName
      ? <img alt={`${themeAppName} logo`} src={themeLogo} />
      : <img alt='DIBK logo' src={logo} />;
    return logoLink && logoLink.length
      ? (<a href={logoLink}>{logoElement}</a>)
      : logoElement
  }

	render () {
    const themeTextStyle = this.props.theme ? this.getThemeTextStyle(this.props.theme) : null;
    const themeLinkStyle = this.props.theme ? this.getThemeLinkStyle(this.props.theme) : null;
		return (
      <React.Fragment>
				<div className={style.colorPalette}>
					{this.renderColors(this.props.theme)}
				</div>
        <p style={themeTextStyle}>The is default text</p>
        <p><a style={themeLinkStyle} href="#theme">This is a hyperlink</a></p>
        { this.renderLogo(this.props.theme) }
      </React.Fragment>
				)
		}
	}

Theme.propTypes = {
	theme: PropTypes.object
}

Theme.defaultProps = {
}

export default Theme;
