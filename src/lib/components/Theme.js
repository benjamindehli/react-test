import React from 'react';
import PropTypes from 'prop-types';
import { getThemePaletteBackgroundColor, getThemePaletteTextColor } from 'lib/functions/theme';
import style from './ColorPalette.module.scss';

class Theme extends React.Component {
  getThemeStyle(theme, color){
    return {
      backgroundColor: getThemePaletteBackgroundColor(theme, color),
      color: getThemePaletteTextColor(theme, color)
    }
  }

	renderColors(theme) {
    const colors = ['default', 'primary', 'success', 'warning', 'info', 'lightCyan', 'orange', 'lightOrange', 'lime', 'lightLime'];
    return colors.map(color => {
      const colorClassName = style[color];
      const themeStyle =  this.props.theme ? this.getThemeStyle(this.props.theme, color) : null;
      return <div key={color} className={`${style.color} ${colorClassName}`} style={themeStyle}>{ color }</div>;
    });
	}

	render () {
		return (
				<div className={style.colorPalette}>
					{this.renderColors(this.props.theme)}
				</div>
				)
		}
	}

Theme.propTypes = {
	theme: PropTypes.object
}

Theme.defaultProps = {
}

export default Theme;
