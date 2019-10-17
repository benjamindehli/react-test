import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxIcon from './CheckBoxIcon';
import style from './CheckBoxListItem.module.scss';

class CheckBoxListItem extends React.Component {
  render() {
    return React.createElement("div", {
      className: `${style.checkBoxListItem} ${this.props.checked ? style.checked : ''}`
    }, React.createElement(CheckBoxIcon, {
      checked: this.props.checked
    }), this.props.content);
  }

}

CheckBoxListItem.propTypes = {
  /** Text content inside list item */
  content: PropTypes.string,
  checked: PropTypes.bool
};
CheckBoxListItem.defaultProps = {
  content: '',
  checked: false
};
export default CheckBoxListItem;