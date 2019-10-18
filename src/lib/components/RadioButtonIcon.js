import React from 'react';
import PropTypes from 'prop-types';
import style from './RadioButtonIcon.module.scss';

class RadioButtonIcon extends React.Component {
  render() {
    const inlineStyle = {
      height: this.props.size,
      width: this.props.size,
    };
    return (<label for={this.props.id} className={`${style.radioButtonIcon} ${this.props.checked
        ? style.checked
        : ''}`} style={inlineStyle}><input type="radio" id={this.props.id} name={this.props.name} /></label>)
  }
}

RadioButtonIcon.propTypes = {
  size: PropTypes.string,
  checked: PropTypes.bool
}

RadioButtonIcon.defaultProps = {
  size: '10px',
  name: '',
  id: '',
  checked: false
}

export default RadioButtonIcon;
