import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxIcon from './CheckBoxIcon';
import style from './CheckBoxInput.module.scss';

class CheckBoxInput extends React.Component {
  render() {
    return (    
        <label className={style.checkBoxInput} htmlFor={this.props.id} >
          <CheckBoxIcon checked={this.props.checked} />
          <input onChange={this.props.onChange} type="checkbox" name={this.props.name} id={this.props.id} checked={this.props.checked} />
          <span>{this.props.children}</span>
        </label>      
    )
  }
}

CheckBoxInput.propTypes = {
  /** Text content inside list item */
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired

};
CheckBoxInput.defaultProps = {
  checked: false,
  name: ''
};
export default CheckBoxInput;
