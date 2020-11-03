import React from 'react';
import PropTypes from 'prop-types';
import RadioButtonIcon from './RadioButtonIcon';
import style from './RadioButtonInput.module.scss';

class RadioButtonInput extends React.Component {
  render() {
    return (<label htmlFor={this.props.id} className={`${style.radioButtonInput} ${this.props.checked
        ? style.checked
        : ''}`}>
        {
          !this.props.contentOnly
            ? (<React.Fragment>
              <RadioButtonIcon checked={this.props.checked} theme={this.props.theme}/>
              <input type="radio" onChange={this.props.onChange} id={this.props.id} name={this.props.name} value={this.props.inputValue} checked={this.props.checked} />
            </React.Fragment>)
            : ''
        }
      <span>{this.props.children}</span>
    </label>)
  }
}

RadioButtonInput.propTypes = {
  checked: PropTypes.bool,
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  contentOnly: PropTypes.bool,
  theme: PropTypes.object
}

RadioButtonInput.defaultProps = {
  name: '',
  checked: false,
  contentOnly: false
}

export default RadioButtonInput;
