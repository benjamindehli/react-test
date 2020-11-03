import React from 'react';
import PropTypes from 'prop-types';
import { getThemePaletteBackgroundColor } from 'lib/functions/theme';
import style from './CheckBoxIcon.module.scss';

class CheckBoxIcon extends React.Component {
  render() {
    let inlineStyle = {
      height: this.props.size,
      width: this.props.size,
      fontSize: this.props.size
    };

    if (this.props.theme && this.props.checked) {
      inlineStyle = { ...inlineStyle,
        color: getThemePaletteBackgroundColor(this.props.theme, 'primary'),
        boxShadow: `0 0 0 1px ${getThemePaletteBackgroundColor(this.props.theme, 'primary')}`
      };
    }

    return /*#__PURE__*/React.createElement("span", {
      className: `${style.checkBoxIcon} ${this.props.checked ? style.checked : ''} ${this.props.showBox ? style.showBox : ''}`,
      style: inlineStyle
    }, /*#__PURE__*/React.createElement("span", {
      className: style.checkmark
    }, this.props.checked ? '✔' : ''));
  }

}

CheckBoxIcon.propTypes = {
  size: PropTypes.string,
  checked: PropTypes.bool,
  showBox: PropTypes.bool,
  theme: PropTypes.object
};
CheckBoxIcon.defaultProps = {
  size: '20px',
  checked: false,
  showBox: true
};
export default CheckBoxIcon;