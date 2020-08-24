import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxIcon from './CheckBoxIcon';
import style from './CheckBoxInput.module.scss';

class CheckBoxInput extends React.Component {
  render() {
    return (<label className={`${style.checkBoxInput} ${this.props.contentOnly ? style.contentOnly : ''}`} htmlFor={this.props.id}>
      {
        !this.props.contentOnly
          ? (<React.Fragment>
            <CheckBoxIcon checked={this.props.checked}/>
            <input onChange={this.props.onChange} type="checkbox" name={this.props.name} id={this.props.id} checked={this.props.checked}/>
          </React.Fragment>)
          : <CheckBoxIcon checked={this.props.checked} showBox={false}/>
      }
      <span>{this.props.children}</span>
    </label>)
  }
}

CheckBoxInput.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  contentOnly: PropTypes.bool

};
CheckBoxInput.defaultProps = {
  checked: false,
  name: '',
  contentOnly: false
};
export default CheckBoxInput;
