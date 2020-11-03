import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxIcon from './CheckBoxIcon';
import style from './CheckBoxInput.module.scss';

class CheckBoxInput extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("label", {
      className: `${style.checkBoxInput} ${this.props.contentOnly ? style.contentOnly : ''}`,
      htmlFor: this.props.id
    }, !this.props.contentOnly ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CheckBoxIcon, {
      checked: this.props.checked,
      theme: this.props.theme
    }), /*#__PURE__*/React.createElement("input", {
      onChange: this.props.onChange,
      type: "checkbox",
      name: this.props.name,
      id: this.props.id,
      checked: this.props.checked
    })) : /*#__PURE__*/React.createElement(CheckBoxIcon, {
      checked: this.props.checked,
      showBox: false,
      theme: this.props.theme
    }), /*#__PURE__*/React.createElement("span", null, this.props.children));
  }

}

CheckBoxInput.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  contentOnly: PropTypes.bool,
  theme: PropTypes.object
};
CheckBoxInput.defaultProps = {
  checked: false,
  name: '',
  contentOnly: false
};
export default CheckBoxInput;