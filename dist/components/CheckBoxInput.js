import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxIcon from './CheckBoxIcon';
import style from './CheckBoxInput.module.scss';

class CheckBoxInput extends React.Component {
  render() {
    return React.createElement("label", {
      className: style.checkBoxInput,
      htmlFor: this.props.id
    }, React.createElement(CheckBoxIcon, {
      checked: this.props.checked
    }), React.createElement("input", {
      onChange: this.props.onChange,
      type: "checkbox",
      name: this.props.name,
      id: this.props.id,
      checked: this.props.checked
    }), this.props.children);
  }

}

CheckBoxInput.propTypes = {
  /** Text content inside list item */
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
CheckBoxInput.defaultProps = {
  checked: false,
  name: ''
};
export default CheckBoxInput;