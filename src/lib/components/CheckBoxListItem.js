import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxIcon from './CheckBoxIcon';
import style from './CheckBoxListItem.module.scss';
import CheckBoxInput from './CheckBoxInput';
import { prototype } from 'eventemitter3';

class CheckBoxListItem extends React.Component {
  render() {
    return (
      <div className={`${style.checkBoxListItem} ${this.props.checked ? style.checked : ''}`}>
        <CheckBoxInput onChange={this.props.onChange} checked={this.props.checked} id={this.props.id}>{this.props.children}</CheckBoxInput>
      </div>
    )
  }
}

CheckBoxListItem.propTypes = {
  /** Text content inside list item */
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired

};
CheckBoxListItem.defaultProps = {
  checked: false,
  id: '',
  name: ''
};
export default CheckBoxListItem;
