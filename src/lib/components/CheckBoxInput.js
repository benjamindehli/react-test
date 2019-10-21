import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxIcon from './CheckBoxIcon';
import style from './CheckBoxInput.module.scss';

class CheckBoxInput extends React.Component {
  render() {
    return (    
        <label className={style.checkBoxInput} for={this.props.id} >
          <CheckBoxIcon checked={this.props.checked} />
          <input type="checkbox" name={this.props.name} id={this.props.id} checked={this.props.checked} />
          {this.props.children}
        </label>      
    )
  }
}

CheckBoxInput.propTypes = {
  /** Text content inside list item */
  content: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string

};
CheckBoxInput.defaultProps = {
  content: '',
  checked: false,
  id: '',
  name: ''
};
export default CheckBoxInput;
