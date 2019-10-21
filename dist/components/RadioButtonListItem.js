import React from 'react';
import PropTypes from 'prop-types';
import RadioButtonInput from './RadioButtonInput';
import style from './RadioButtonListItem.module.scss';

class RadioButtonListItem extends React.Component {
  render() {
    return React.createElement("div", {
      className: style.radioButtonListItem
    }, React.createElement(RadioButtonInput, {
      onChange: this.props.onChange,
      inputValue: this.props.inputValue,
      checked: this.props.checked,
      id: this.props.id
    }, this.props.children));
  }

}

RadioButtonListItem.propTypes = {
  /** Text content inside list item */
  inputValue: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func
};
RadioButtonListItem.defaultProps = {
  name: '',
  checked: false
};
export default RadioButtonListItem;