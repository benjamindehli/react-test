import React from 'react';
import PropTypes from 'prop-types';
import RadioButtonIcon from './RadioButtonIcon';
import style from './RadioButtonInput.module.scss';

class RadioButtonInput extends React.Component {
  render() {
    return React.createElement("label", {
      htmlFor: this.props.id,
      className: `${style.radioButtonInput} ${this.props.checked ? style.checked : ''}`
    }, React.createElement(RadioButtonIcon, {
      checked: this.props.checked
    }), React.createElement("input", {
      type: "radio",
      onChange: this.props.onChange,
      id: this.props.id,
      name: this.props.name,
      value: this.props.inputValue,
      checked: this.props.checked
    }), React.createElement("span", null, this.props.children));
  }

}

RadioButtonInput.propTypes = {
  /** Text content inside list item */
  checked: PropTypes.bool,
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func
};
RadioButtonInput.defaultProps = {
  name: '',
  checked: false
};
export default RadioButtonInput;