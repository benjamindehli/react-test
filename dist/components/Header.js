"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _HeaderModule = _interopRequireDefault(require("./Header.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Header extends _react.default.Component {
  render() {
    var headerElement = /*#__PURE__*/_react.default.createElement('h' + this.props.size, {
      className: _HeaderModule.default.header
    }, this.props.content);

    return /*#__PURE__*/_react.default.createElement("div", {
      className: _HeaderModule.default.headerContainer
    }, " ", headerElement, " ");
  }

}

Header.propTypes = {
  /** Text content inside button */
  content: _propTypes.default.string.isRequired,
  size: _propTypes.default.oneOf([1, 2, 3, 4, 5])
};
Header.defaultProps = {
  content: '',
  size: 1
};
var _default = Header;
exports.default = _default;