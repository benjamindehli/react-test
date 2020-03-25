import React from 'react';
import PropTypes from 'prop-types';
import style from './Select.module.scss';

class Select extends React.Component {
  getKeyByValue(value, options) {
    const selectedOption = options && options.length ? options.find(option => {
      if (typeof option === 'object') {
        return option.value === value;
      } else {
        return option === value;
      }
    }) : null;

    if (selectedOption && selectedOption.key) {
      return selectedOption.key;
    } else if (selectedOption && selectedOption.value) {
      return selectedOption.value;
    } else {
      return selectedOption;
    }
  }

  renderOptionElements(options) {
    return options.map((option, key) => {
      let optionObject = null;

      if (typeof option === 'object') {
        optionObject = {
          key: option.key ? option.key : '',
          value: option.value ? option.value : ''
        };
      } else {
        optionObject = {
          key: option,
          value: option
        };
      }

      return /*#__PURE__*/React.createElement("option", {
        value: optionObject.value,
        key: key
      }, optionObject.key);
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: style.select
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: this.props.id
    }, this.props.label), !this.props.contentOnly ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: style.selectContainer
    }, /*#__PURE__*/React.createElement("select", {
      name: this.props.name,
      multiple: this.props.multiple,
      value: this.props.value,
      onChange: this.props.onChange,
      id: this.props.id
    }, this.renderOptionElements(this.props.options)))) : /*#__PURE__*/React.createElement("span", null, this.props.keyAsContent ? this.getKeyByValue(this.props.value, this.props.options) : this.props.value));
  }

}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string
  })])),
  value: PropTypes.any,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))]),
  contentOnly: PropTypes.bool,
  keyAsContent: PropTypes.bool
};
Select.defaultProps = {
  name: '',
  options: [],
  label: '',
  contentOnly: false,
  keyAsContent: false
};
export default Select;