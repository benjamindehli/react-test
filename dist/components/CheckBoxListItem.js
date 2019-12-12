import React from 'react';
import PropTypes from 'prop-types';
import style from './CheckBoxListItem.module.scss';
import CheckBoxInput from './CheckBoxInput';

class CheckBoxListItem extends React.Component {
  render() {
    return React.createElement("div", {
      className: `${style.checkBoxListItem} ${this.props.checked ? style.checked : ''}`
    }, React.createElement(CheckBoxInput, {
      onChange: this.props.onChange,
      checked: this.props.checked,
      contentOnly: this.props.contentOnly,
      id: this.props.id
    }, this.props.children));
  }

}

CheckBoxListItem.propTypes = {
  /** Text content inside list item */
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  contentOnly: PropTypes.bool
};
CheckBoxListItem.defaultProps = {
  checked: false,
  id: '',
  name: '',
  contentOnly: false
};
export default CheckBoxListItem;