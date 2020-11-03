"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ContentBoxModule = _interopRequireDefault(require("./ContentBox.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ContentBox extends _react.default.Component {
  renderTitle() {
    var className = _ContentBoxModule.default.title + " " + _ContentBoxModule.default[this.props.titleSize];

    if (this.props.title) {
      return /*#__PURE__*/_react.default.createElement("h2", {
        className: className
      }, this.props.title);
    } else {
      return;
    }
  }

  render() {
    var colorClass = " " + _ContentBoxModule.default[this.props.color];
    var linkClass = this.props.href ? " " + _ContentBoxModule.default.link : "";
    var className = _ContentBoxModule.default.contentBox + colorClass + linkClass;

    if (this.props.href) {
      return /*#__PURE__*/_react.default.createElement("a", {
        href: this.props.href,
        className: className
      }, this.renderTitle(), /*#__PURE__*/_react.default.createElement("div", {
        className: _ContentBoxModule.default.content
      }, this.props.content));
    } else {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: className
      }, this.renderTitle(), /*#__PURE__*/_react.default.createElement("div", {
        className: _ContentBoxModule.default.content
      }, this.props.content));
    }
  }

}

ContentBox.propTypes = {
  /** Content title inside box */
  title: _propTypes.default.string,
  titleSize: _propTypes.default.oneOf(['regular', 'large']),

  /** Text content inside box */
  content: _propTypes.default.string,
  color: _propTypes.default.oneOf(['default', 'primary', 'success', 'warning', 'info', 'lightCyan', 'orange', 'lightOrange', 'lime', 'lightLime'])
};
ContentBox.defaultProps = {
  title: null,
  titleSize: 'regular',
  href: null,
  content: '',
  color: 'default'
};
var _default = ContentBox;
exports.default = _default;