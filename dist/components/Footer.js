"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FooterModule = _interopRequireDefault(require("./Footer.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Footer extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("footer", {
      className: _FooterModule.default.footer
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _FooterModule.default.footerContainer
    }, this.props.children));
  }

}

var _default = Footer;
exports.default = _default;