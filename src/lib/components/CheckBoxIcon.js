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
    return (<label for={this.props.id} className={`${style.checkBoxIcon} ${this.props.checked ? style.checked : ''}`} style={inlineStyle}>
      <span className={style.checkmark}>{this.props.checked ? '✔' : ''}</span>
      <input type="checkbox" id={this.props.id} name={this.props.name} />
    </label>)
  }
}

CheckBoxIcon.propTypes = {
  size: PropTypes.string,
  checked: PropTypes.bool
}

CheckBoxIcon.defaultProps = {
  size: '20px',
  checked: false,
  id: '',
  name: ''
}

export default CheckBoxIcon;
