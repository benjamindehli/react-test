import React from 'react';
import PropTypes from 'prop-types';
import style from './CheckBoxIcon.module.scss';

class CheckBoxIcon extends React.Component {
  render() {
    const inlineStyle = {
      height: this.props.size,
      width: this.props.size,
      fontSize: this.props.size
    };
    return (<span className={`${style.checkBoxIcon} ${this.props.checked ? style.checked : ''}`} style={inlineStyle}>
      <span className={style.checkmark}>{this.props.checked ? '✔' : ''}</span>
    </span>)
  }
}

CheckBoxIcon.propTypes = {
  size: PropTypes.string,
  checked: PropTypes.bool
}

CheckBoxIcon.defaultProps = {
  size: '10px',
  checked: false
}

export default CheckBoxIcon;
