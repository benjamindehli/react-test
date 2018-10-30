import React from 'react';
import PropTypes from 'prop-types';
import style from './Colors.scss';

class Color extends React.Component {
  render() {
    let className = style[this.props.colorName];
    return React.createElement("div", {
      className: style.color + " " + className
    }, " ", this.props.colorName, " ");
  }

}

class Colors extends React.Component {
  renderList() {
    let colors = this.props.colors.map(function (color, i) {
      return React.createElement(Color, {
        colorName: color,
        key: i
      });
    });
    return React.createElement("div", {
      className: style.colors
    }, colors);
  }

  render() {
    return React.createElement("div", null, this.renderList());
  }

}

Colors.propTypes = {
  colors: PropTypes.array
};
Colors.defaultProps = {
  colors: ['primary', 'primary-hover', 'default', 'default-hover', 'info', 'info-hover', 'warning', 'warning-hover', 'success', 'success-hover', 'dark-blue', 'light-blue']
};
export default Colors;