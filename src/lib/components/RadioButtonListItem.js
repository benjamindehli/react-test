import React from 'react';
import PropTypes from 'prop-types';
import RadioButtonIcon from './RadioButtonIcon';
import style from './RadioButtonListItem.module.scss';

class RadioButtonListItem extends React.Component {
  render() {
    return (<div className={`${style.radioButtonListItem} ${this.props.checked
        ? style.checked
        : ''}`}>
      <RadioButtonIcon checked={this.props.checked}/> {this.props.content}
    </div>)
  }
}

RadioButtonListItem.propTypes = {
  /** Text content inside list item */
  content: PropTypes.string,
  checked: PropTypes.bool
}

RadioButtonListItem.defaultProps = {
  content: '',
  checked: false
}

export default RadioButtonListItem;