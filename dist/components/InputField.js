function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import style from './InputField.module.scss';

class InputField extends React.Component {
  render() {
    return React.createElement("div", {
      className: style.inputField
    }, React.createElement("label", {
      htmlFor: this.props.id
    }, this.props.label), !this.props.contentOnly ? React.createElement("input", _extends({}, this.props, {
      id: this.props.id,
      onChange: this.props.onChange,
      value: this.props.value
    })) : React.createElement("span", null, this.props.value));
  }

}

InputField.propTypes = {
  /** Text content inside list item */
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))]),
  contentOnly: PropTypes.bool
};
InputField.defaultProps = {
  name: '',
  type: 'text',
  label: '',
  contentOnly: false
};
export default InputField;