import React from 'react';
import PropTypes from 'prop-types';
import style from './Select.module.scss';

class Select extends React.Component {
  renderOptionElements(options) {
    return options.map((option, key) => {
      let optionObject = null;
      if (typeof(option) === 'object') {
        optionObject = {
          key: option.key
            ? option.key
            : '',
          value: option.value
            ? option.value
            : ''
        };
      } else {
        optionObject = {
          key: option,
          value: option
        }
      }
      return <option value={optionObject.value} key={key}>{optionObject.key}</option>
    });
  }
  render() {
    return (<div className={style.select}>
      <label htmlFor={this.props.id}>{this.props.label}</label>
      <div className={style.selectContainer}>
        <select {...this.props} onChange={this.props.onChange} id={this.props.id}>
          {this.renderOptionElements(this.props.options)}
        </select>
      </div>
    </div>)
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({key: PropTypes.string, value: PropTypes.string})
  ])),
  value: PropTypes.any,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]))
  ])
};
Select.defaultProps = {
  name: '',
  options: [],
  label: ''
};
export default Select;
