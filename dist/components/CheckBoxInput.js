import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxIcon from './CheckBoxIcon';
import style from './CheckBoxInput.module.scss';

class CheckBoxInput extends React.Component {
  render() {
    return React.createElement("label", {
      className: style.checkBoxInput,
      htmlFor: this.props.id
    }, !this.props.contentOnly ? React.createElement(React.Fragment, null, React.createElement(CheckBoxIcon, {
      checked: this.props.checked
    }), React.createElement("input", {
      onChange: this.props.onChange,
      type: "checkbox",
      name: this.props.name,
      id: this.props.id,
      checked: this.props.checked
    })) : '', React.createElement("span", null, this.props.children));
  }

}

CheckBoxInput.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  contentOnly: PropTypes.bool
};
CheckBoxInput.defaultProps = {
  checked: false,
  name: '',
  contentOnly: false
};
export default CheckBoxInput;