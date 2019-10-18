import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxIcon from './CheckBoxIcon';
import style from './CheckBoxListItem.module.scss';

class CheckBoxListItem extends React.Component {
  render() {
    return (
      <div className={`${style.checkBoxListItem} ${this.props.checked ? style.checked : ''}`}>
        <label for={this.props.id} >
          <CheckBoxIcon checked={this.props.checked} />
          <input type="checkbox" name={this.props.name} id={this.props.id} checked={this.props.checked} />
          {this.props.content}
        </label>
      </div>
    )
  }
}

CheckBoxListItem.propTypes = {
  /** Text content inside list item */
  content: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string

};
CheckBoxListItem.defaultProps = {
  content: '',
  checked: false,
  id: '',
  name: ''
};
export default CheckBoxListItem;
