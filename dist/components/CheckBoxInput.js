import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxIcon from './CheckBoxIcon';
import style from './CheckBoxInput.module.scss';

class CheckBoxInput extends React.Component {
  render() {
    return React.createElement("label", {
      className: style.checkBoxInput,
      for: this.props.id
    }, React.createElement(CheckBoxIcon, {
      checked: this.props.checked
    }), React.createElement("input", {
      type: "checkbox",
      name: this.props.name,
      id: this.props.id,
      checked: this.props.checked
    }), this.props.children);
  }

}

CheckBoxInput.propTypes = {
  /** Text content inside list item */
  content: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string
};
CheckBoxInput.defaultProps = {
  content: '',
  checked: false,
  id: '',
  name: ''
};
export default CheckBoxInput;