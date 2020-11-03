"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CheckBoxListItemModule = _interopRequireDefault(require("./CheckBoxListItem.module.scss"));

var _CheckBoxInput = _interopRequireDefault(require("./CheckBoxInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CheckBoxListItem extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(_CheckBoxListItemModule.default.checkBoxListItem, " ").concat(this.props.checked ? _CheckBoxListItemModule.default.checked : '', " ").concat(this.props.contentOnly ? _CheckBoxListItemModule.default.contentOnly : '')
    }, /*#__PURE__*/_react.default.createElement(_CheckBoxInput.default, {
      onChange: this.props.onChange,
      checked: this.props.checked,
      contentOnly: this.props.contentOnly,
      id: this.props.id,
      theme: this.props.theme
    }, this.props.children));
  }

}

CheckBoxListItem.propTypes = {
  /** Text content inside list item */
  checked: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  contentOnly: _propTypes.default.bool,
  theme: _propTypes.default.object
};
CheckBoxListItem.defaultProps = {
  checked: false,
  id: '',
  name: '',
  contentOnly: false
};
var _default = CheckBoxListItem;
exports.default = _default;