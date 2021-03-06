import React from 'react';
import PropTypes from 'prop-types';
import { getThemePaletteBackgroundColor } from '../functions/theme';
import style from './Select.module.scss';

class Select extends React.Component {
  getThemeErrorInputStyle(theme){
    return {
      boxShadow: `0 0 3px ${getThemePaletteBackgroundColor(theme, 'warning')}`,
      borderColor: getThemePaletteBackgroundColor(theme, 'warning')
    }
  }
  getThemeErrorMessageStyle(theme){
    return {
      color: getThemePaletteBackgroundColor(theme, 'warning')
    }
  }
  getThemeArrowStyle(theme){
    return {
      borderTopColor: getThemePaletteBackgroundColor(theme, 'primary')
    }
  }
  getKeyByValue(value, options) {
    const selectedOption = options && options.length
      ? options.find(option => {
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
  renderPlaceholderOption(placeholder, placeholderValue) {
    return placeholder
      ? (<option value={placeholderValue} disabled>{placeholder}</option>)
      : '';
  }
  render() {
    const value = this.props.value ? this.props.value : "";
    return (<div className={style.select}>
      <label htmlFor={this.props.id}>{this.props.label}</label>
      {
        !this.props.contentOnly
          ? (<React.Fragment>
            <div className={style.selectContainer}>
              <span className={style.selectListArrow} style={this.getThemeArrowStyle(this.props.theme)}></span>
              <select name={this.props.name}
                      multiple={this.props.multiple}
                      value={value} onChange={this.props.onChange}
                      id={this.props.id}
                      className={this.props.hasErrors ? style.hasErrors : ''}
                      style={this.props.hasErrors ? this.getThemeErrorInputStyle(this.props.theme) : null}>
                {this.renderPlaceholderOption(this.props.placeholder, this.props.placeholderValue)}
                {this.renderOptionElements(this.props.options)}
              </select>
            </div>
            <span className={style.errorMessage} style={this.getThemeErrorMessageStyle(this.props.theme)}>{this.props.errorMessage ? this.props.errorMessage : ''}</span>
          </React.Fragment>)
          : (<span>
            {
              this.props.value
                ? this.props.keyAsContent
                  ? this.getKeyByValue(this.props.value, this.props.options)
                  : this.props.value
                : this.props.defaultContent
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
  keyAsContent: PropTypes.bool,
  placeholder: PropTypes.string,
  placeholderValue: PropTypes.string,
  defaultContent: PropTypes.string,
  hasErrors: PropTypes.bool,
  errorMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]))
  ]),
  theme: PropTypes.object
};
Select.defaultProps = {
  name: '',
  options: [],
  label: '',
  contentOnly: false,
  keyAsContent: false,
  placeholder: null,
  placeholderValue: '',
  defaultContent: null,
  hasErrors: false,
  errorMessage : ''
};
export default Select;
