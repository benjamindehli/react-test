import React from 'react';
import PropTypes from 'prop-types';
import RadioButtonIcon from './RadioButtonIcon';
import style from './RadioButtonInput.module.scss';

class RadioButtonInput extends React.Component {
  render() {
    return React.createElement("label", {
      for: this.props.id,
      className: `${style.radioButtonInput} ${this.props.checked ? style.checked : ''}`
    }, React.createElement(RadioButtonIcon, {
      checked: this.props.checked
    }), React.createElement("input", {
      type: "radio",
      id: this.props.id,
      name: this.props.name,
      value: this.props.content,
      checked: this.props.checked
    }), this.props.children);
  }

}

RadioButtonInput.propTypes = {
  /** Text content inside list item */
  content: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string.isRequired
};
RadioButtonInput.defaultProps = {
  content: '',
  name: '',
  checked: false,
  id: ''
};
export default RadioButtonInput;