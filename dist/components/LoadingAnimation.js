"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LoadingAnimationModule = _interopRequireDefault(require("./LoadingAnimation.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LoadingAnimation extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: this.props.fixed ? _LoadingAnimationModule.default.loadingAnimation + ' ' + _LoadingAnimationModule.default.fixed : _LoadingAnimationModule.default.loadingAnimation
    }, this.props.message);
  }

}

LoadingAnimation.propTypes = {
  fixed: _propTypes.default.bool,
  active: _propTypes.default.bool,

  /** Text content inside button */
  message: _propTypes.default.string
};
LoadingAnimation.defaultProps = {
  fixed: false,
  active: true,
  message: ''
};
var _default = LoadingAnimation;
exports.default = _default;