import React from 'react';
import PropTypes from 'prop-types';
import style from './CheckBoxListItem.module.scss';
import CheckBoxInput from './CheckBoxInput';

class CheckBoxListItem extends React.Component {
  render() {
    return (
      <div className={`${style.checkBoxListItem} ${this.props.checked ? style.checked : ''} ${this.props.contentOnly ? style.contentOnly : ''}`}>
        <CheckBoxInput onChange={this.props.onChange} checked={this.props.checked} contentOnly={this.props.contentOnly} id={this.props.id} theme={this.props.theme}>
          {this.props.children}
        </CheckBoxInput>
      </div>
    )
  }
}

CheckBoxListItem.propTypes = {
  /** Text content inside list item */
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  contentOnly: PropTypes.bool,
  theme: PropTypes.object
};
CheckBoxListItem.defaultProps = {
  checked: false,
  id: '',
  name: '',
  contentOnly: false
};
export default CheckBoxListItem;
