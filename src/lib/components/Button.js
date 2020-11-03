import React from 'react';
import PropTypes from 'prop-types';
import { getThemePaletteBackgroundColor, getThemePaletteTextColor } from '../functions/theme';
import style from './Button.module.scss';

class Button extends React.Component {

  getArrowClass() {
    switch (this.props.arrow) {
      case 'left':
        return style.hasArrowLeft;
      case 'right':
        return style.hasArrowRight
      default:
        return ''
    }
  }

  getThemeStyle(theme, color){
    return {
      backgroundColor: getThemePaletteBackgroundColor(theme, color),
      color: getThemePaletteTextColor(theme, color)
    }
  }

  render() {
    const themeStyle =  this.props.theme ? this.getThemeStyle(this.props.theme, this.props.color) : null;
    const className = `${style.button} ${style[this.props.color]} ${style[this.props.size]} ${this.getArrowClass()}`;
    return (<button {...this.props} className={className} style={themeStyle}>{this.props.content}</button>)
  }
}

Button.propTypes = {
  /** Text content inside button */
  content: PropTypes.string,
  color: PropTypes.oneOf(['default', 'primary', 'success', 'warning']),
  size: PropTypes.oneOf(['small', 'regular']),
  arrow: PropTypes.oneOf(['left', 'right']),
  theme: PropTypes.object
}

Button.defaultProps = {
  content: 'button',
  color: 'default',
  size: 'regular'
}

export default Button;
