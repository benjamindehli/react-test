import React from 'react';
import PropTypes from 'prop-types';
import RadioButtonIcon from './RadioButtonIcon';
import style from './RadioButtonListItem.module.scss';
import { id } from 'postcss-selector-parser';

class RadioButtonListItem extends React.Component {
  render() {
    return (<label for={this.props.id} className={`${style.radioButtonListItem} ${this.props.checked
        ? style.checked
        : ''}`}>
      <RadioButtonIcon checked={this.props.checked}/> {this.props.content}
      <input type="radio" id={this.props.id} name={this.props.name} value={this.props.content} />
    </label>)
  }
}

RadioButtonListItem.propTypes = {
  /** Text content inside list item */
  content: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string
}

RadioButtonListItem.defaultProps = {
  content: '',
  name: '',
  checked: false,
  id: ''
}

export default RadioButtonListItem;
