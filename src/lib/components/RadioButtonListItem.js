import React from 'react';
import PropTypes from 'prop-types';
import RadioButtonInput from './RadioButtonInput';
import style from './RadioButtonListItem.module.scss';

class RadioButtonListItem extends React.Component {
  render() {
    return (<div  className={style.radioButtonListItem}>
    <RadioButtonInput onChange={this.props.onChange} inputValue={this.props.inputValue} checked={this.props.checked} contentOnly={this.props.contentOnly} id={this.props.id} theme={this.props.theme}>{this.props.children}</RadioButtonInput>
    </div>)
  }
}

RadioButtonListItem.propTypes = {
  /** Text content inside list item */
  inputValue: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  contentOnly: PropTypes.bool,
  theme: PropTypes.object
}

RadioButtonListItem.defaultProps = {
  name: '',
  checked: false,
  contentOnly: false
}

export default RadioButtonListItem;
