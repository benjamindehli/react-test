import React from 'react';
import PropTypes from 'prop-types';
import style from './Select.module.scss';

class Select extends React.Component {
  getKeyByValue(value, options) {
    const selectedOption = options && options.length
      ? options.find(option => {
        console.log(typeof(option));
        if (typeof(option) === 'object') {
          return option.value === value;
        } else {
          return option === value;
        }
      })
      : null;
    if (selectedOption && selectedOption.key) {
      return selectedOption.key;
    } else if (selectedOption && selectedOption.value) {
      return selectedOption.value;
    } else {
      return selectedOption;
    }
  }
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
      {
        !this.props.contentOnly
          ? (<React.Fragment>
            <div className={style.selectContainer}>
              <select name={this.props.name} multiple={this.props.multiple} value={this.props.value} onChange={this.props.onChange} id={this.props.id}>
                {this.renderOptionElements(this.props.options)}
              </select>
            </div>
          </React.Fragment>)
          : (<span>
            {
              this.props.keyAsContent
                ? this.getKeyByValue(this.props.value, this.props.options)
                : this.props.value
            }
          </span>)
      }

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
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
  ]),
  contentOnly: PropTypes.bool,
  keyAsContent: PropTypes.bool
};
Select.defaultProps = {
  name: '',
  options: [],
  label: '',
  contentOnly: false,
  keyAsContent: false
};
export default Select;
