import React from 'react';
import PropTypes from 'prop-types';
import {  getThemePaletteBackgroundColor } from '../functions/theme';

import style from './RadioButtonIcon.module.scss';

class RadioButtonIcon extends React.Component {
  render() {
    let inlineStyle = {
      height: this.props.size,
      width: this.props.size
    };
    if (this.props.theme && this.props.checked){
      inlineStyle = {
        ...inlineStyle,
        background: getThemePaletteBackgroundColor(this.props.theme, 'primary'),
        boxShadow: `0 0 0 1px ${getThemePaletteBackgroundColor(this.props.theme, 'primary')}`
      }
    }
    return (<span className={`${style.radioButtonIcon} ${this.props.checked
        ? style.checked
        : ''}`} style={inlineStyle}></span>)
  }
}

RadioButtonIcon.propTypes = {
  size: PropTypes.string,
  checked: PropTypes.bool,
  theme: PropTypes.object
}

RadioButtonIcon.defaultProps = {
  size: '10px',
  checked: false
}

export default RadioButtonIcon;
