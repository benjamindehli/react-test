import React from 'react';
import PropTypes from 'prop-types';
import style from './Select.module.scss';

class Option extends React.Component {
  render() {
    if (typeof this.props.option == 'string') {
      return React.createElement("option", {
        value: this.props.option
      }, this.props.option);
    } else if (typeof this.props.option == 'object') {
      return React.createElement("option", {
        value: this.props.option.value
      }, this.props.option.key);
    } else {
      return null;
    }
  }

}

class Select extends React.Component {
  renderList() {
    let options = this.props.options.map(function (option, i) {
      return React.createElement(Option, {
        option: option,
        key: i
      });
    });
    return React.createElement("select", null, options);
  }

  render() {
    return React.createElement("div", {
      className: style.selectContainer
    }, this.renderList());
  }

}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string
  })])),
  multiple: PropTypes.bool
};
Select.defaultProps = {
  options: [],
  multiple: false
};
export default Select;
export { Select, Option };