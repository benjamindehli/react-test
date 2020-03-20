import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import style from './InputField.module.scss';

class InputField extends React.Component {
  render() {
    return (<div className={`${style.inputField} ${style[this.props.type]}`}>
      <label htmlFor={this.props.id}>
        {this.props.label}
        {
          this.props.type === 'file'
            ? (<div className={style.fileInputContainer}>
                <span className={style.input}>{this.props.selectedFileName}</span>
                {
                  this.props.buttonContent
                    ? <Button size='small' color={this.props.buttonColor} onClick={() => {document.getElementById(this.props.id).click()}} content={this.props.buttonContent}/>
                    : ''
                }
              </div>)
            : ''
        }
      </label>
      {
        !this.props.contentOnly
          ? <input name={this.props.name} readOnly={this.props.readOnly} disabled={this.props.disabled} type={this.props.type} id={this.props.id} onChange={this.props.onChange} value={this.props.value ? this.props.value : ''}/>
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
  contentOnly: PropTypes.bool,
  buttonColor: PropTypes.string,
  buttonContent: PropTypes.string,
  selectedFileName: PropTypes.string
};

InputField.defaultProps = {
  name: '',
  type: 'text',
  label: '',
  contentOnly: false,
  buttonColor: 'default',
};

export default InputField;
