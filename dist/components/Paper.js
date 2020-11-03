"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PaperModule = _interopRequireDefault(require("./Paper.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Paper extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(_PaperModule.default.paper, " ").concat(this.props.noMargin ? _PaperModule.default.noMargin : '', " ").concat(this.props.noPadding ? _PaperModule.default.noPadding : '')
    }, this.props.children);
  }

}

;
Paper.propTypes = {
  noMargin: _propTypes.default.bool,
  noPadding: _propTypes.default.bool
};
Paper.defaultProps = {
  noMargin: false,
  noPadding: false
};
var _default = Paper;
exports.default = _default;