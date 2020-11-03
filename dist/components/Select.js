"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SelectModule = _interopRequireDefault(require("./Select.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Select extends _react.default.Component {
  getKeyByValue(value, options) {
    var selectedOption = options && options.length ? options.find(option => {
      if (typeof option === 'object') {
        return option.value === value;
      } else {
        return option === value;
      }
    }) : null;

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
      var optionObject = null;

      if (typeof option === 'object') {
        optionObject = {
          key: option.key ? option.key : '',
          value: option.value ? option.value : ''
        };
      } else {
        optionObject = {
          key: option,
          value: option
        };
      }

      return /*#__PURE__*/_react.default.createElement("option", {
        value: optionObject.value,
        key: key
      }, optionObject.key);
    });
  }

  renderPlaceholderOption(placeholder, placeholderValue) {
    return placeholder ? /*#__PURE__*/_react.default.createElement("option", {
      value: placeholderValue,
      disabled: true
    }, placeholder) : '';
  }

  render() {
    var value = this.props.value ? this.props.value : "";
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _SelectModule.default.select
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id
    }, this.props.label), !this.props.contentOnly ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: _SelectModule.default.selectContainer
    }, /*#__PURE__*/_react.default.createElement("select", {
      name: this.props.name,
      multiple: this.props.multiple,
      value: value,
      onChange: this.props.onChange,
      id: this.props.id,
      className: this.props.hasErrors ? _SelectModule.default.hasErrors : ''
    }, this.renderPlaceholderOption(this.props.placeholder, this.props.placeholderValue), this.renderOptionElements(this.props.options))), /*#__PURE__*/_react.default.createElement("span", {
      className: _SelectModule.default.errorMessage
    }, this.props.errorMessage ? this.props.errorMessage : '')) : /*#__PURE__*/_react.default.createElement("span", null, this.props.value ? this.props.keyAsContent ? this.getKeyByValue(this.props.value, this.props.options) : this.props.value : this.props.defaultContent));
  }

}

Select.propTypes = {
  id: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  options: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
    key: _propTypes.default.string,
    value: _propTypes.default.string
  })])),
  value: _propTypes.default.any,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  contentOnly: _propTypes.default.bool,
  keyAsContent: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  placeholderValue: _propTypes.default.string,
  defaultContent: _propTypes.default.string,
  hasErrors: _propTypes.default.bool,
  errorMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))])
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
  errorMessage: ''
};
var _default = Select;
exports.default = _default;