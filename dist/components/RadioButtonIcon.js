import React from 'react';
import PropTypes from 'prop-types';
import style from './RadioButtonIcon.module.scss';

class RadioButtonIcon extends React.Component {
  render() {
    const inlineStyle = {
      height: this.props.size,
      width: this.props.size
    };
    return /*#__PURE__*/React.createElement("span", {
      className: `${style.radioButtonIcon} ${this.props.checked ? style.checked : ''}`,
      style: inlineStyle
    });
  }

}

RadioButtonIcon.propTypes = {
  size: PropTypes.string,
  checked: PropTypes.bool
};
RadioButtonIcon.defaultProps = {
  size: '10px',
  checked: false
};
export default RadioButtonIcon;