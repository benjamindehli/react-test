import React from 'react';
import PropTypes from 'prop-types';
import style from './Select.module.scss';

class Select extends React.Component {
  renderOptionElements(options) {
    return options.map((option, key) => {
      let optionObject = null;
      let isSelected = false;
      if (typeof(option) === 'object') {
        optionObject = {
          key: option.key
            ? option.key
            : '',
          value: option.value
            ? option.value
            : ''
        };
        isSelected = this.props.value && option.value && this.props.value === option.value;
      } else {
        optionObject = {
          key: option,
          value: option
        }
        isSelected = this.props.value && option && this.props.value === option;
      }
      return <option value={optionObject.value} key={key} selected={isSelected}>{optionObject.key}</option>
    });
  }
  render() {
    return (<div className={style.selectContainer}>
      <label htmlFor={this.props.id}>{this.props.label}</label>
      <select {...this.props} id={this.props.id}>
        {this.renderOptionElements(this.props.options)}
      </select>
    </div>)
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({key: PropTypes.string, value: PropTypes.string})
  ])),
  value: PropTypes.any,
  label: PropTypes.string
};
Select.defaultProps = {
  name: '',
  options: [],
  label: ''
};
export default Select;
