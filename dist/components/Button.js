function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.scss';

class Button extends React.Component {
  getArrowClass() {
    switch (this.props.arrow) {
      case 'left':
        return style.hasArrowLeft;

      case 'right':
        return style.hasArrowRight;

      default:
        return '';
    }
  }

  render() {
    const className = `${style.button} ${style[this.props.color]} ${style[this.props.size]} ${this.getArrowClass()}`;
    return React.createElement("button", _extends({}, this.props, {
      className: className
    }), this.props.content);
  }

}

Button.propTypes = {
  /** Text content inside button */
  content: PropTypes.string,
  color: PropTypes.oneOf(['default', 'primary', 'success', 'warning']),
  size: PropTypes.oneOf(['small', 'regular']),
  arrow: PropTypes.oneOf(['left', 'right'])
};
Button.defaultProps = {
  content: 'button',
  color: 'default',
  size: 'regular'
};
export default Button;