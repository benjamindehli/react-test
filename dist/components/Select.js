function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import style from './Select.module.scss';

class Select extends React.Component {
  renderOptionElements(options) {
    return options.map((option, key) => {
      let optionObject = null;
      let isSelected = false;

      if (typeof option === 'object') {
        optionObject = {
          key: option.key ? option.key : '',
          value: option.value ? option.value : ''
        };
        isSelected = this.props.value && option.value && this.props.value === option.value;
      } else {
        optionObject = {
          key: option,
          value: option
        };
        isSelected = this.props.value && option && this.props.value === option;
      }

      return React.createElement("option", {
        value: optionObject.value,
        key: key,
        selected: isSelected
      }, optionObject.key);
    });
  }

  render() {
    return React.createElement("div", {
      className: style.selectContainer
    }, React.createElement("label", {
      htmlFor: this.props.id
    }, this.props.label), React.createElement("select", _extends({}, this.props, {
      id: this.props.id
    }), this.renderOptionElements(this.props.options)));
  }

}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string
  })])),
  value: PropTypes.any,
  label: PropTypes.string
};
Select.defaultProps = {
  name: '',
  options: [],
  label: ''
};
export default Select;