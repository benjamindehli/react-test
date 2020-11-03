"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RadioButtonInput = _interopRequireDefault(require("./RadioButtonInput"));

var _RadioButtonListItemModule = _interopRequireDefault(require("./RadioButtonListItem.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RadioButtonListItem extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _RadioButtonListItemModule.default.radioButtonListItem
    }, /*#__PURE__*/_react.default.createElement(_RadioButtonInput.default, {
      onChange: this.props.onChange,
      inputValue: this.props.inputValue,
      checked: this.props.checked,
      contentOnly: this.props.contentOnly,
      id: this.props.id,
      theme: this.props.theme
    }, this.props.children));
  }

}

RadioButtonListItem.propTypes = {
  /** Text content inside list item */
  inputValue: _propTypes.default.string.isRequired,
  checked: _propTypes.default.bool,
  name: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  contentOnly: _propTypes.default.bool,
  theme: _propTypes.default.object
};
RadioButtonListItem.defaultProps = {
  name: '',
  checked: false,
  contentOnly: false
};
var _default = RadioButtonListItem;
exports.default = _default;