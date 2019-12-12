import React from 'react';
import PropTypes from 'prop-types';
import style from './InputField.module.scss';

class InputField extends React.Component {
  render() {
    return (<div className={style.inputField}>
      <label htmlFor={this.props.id}>{this.props.label}</label>
      {
        !this.props.contentOnly
          ? <input {...this.props} id={this.props.id} onChange={this.props.onChange} value={this.props.value}/>
          : <span>{this.props.value}</span>
      }

    </div>)
  }
}

InputField.propTypes = {
  /** Text content inside list item */
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]))
  ]),
  contentOnly: PropTypes.bool
};
InputField.defaultProps = {
  name: '',
  type: 'text',
  label: '',
  contentOnly: false
};
export default InputField;
