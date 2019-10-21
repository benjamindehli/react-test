import React from 'react';
import PropTypes from 'prop-types';
import RadioButtonInput from './RadioButtonInput';
import style from './RadioButtonListItem.module.scss';
import { id } from 'postcss-selector-parser';

class RadioButtonListItem extends React.Component {
  render() {
    return React.createElement("div", {
      className: style.radioButtonListItem
    }, React.createElement(RadioButtonInput, {
      checked: this.props.checked,
      id: this.props.id
    }, this.props.children));
  }

}

RadioButtonListItem.propTypes = {
  /** Text content inside list item */
  content: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string.isRequired
};
RadioButtonListItem.defaultProps = {
  content: '',
  name: '',
  checked: false,
  id: ''
};
export default RadioButtonListItem;