"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _StepModule = _interopRequireDefault(require("./Step.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Step = /*#__PURE__*/function (_Component) {
  _inherits(Step, _Component);

  var _super = _createSuper(Step);

  function Step() {
    _classCallCheck(this, Step);

    return _super.apply(this, arguments);
  }

  _createClass(Step, [{
    key: "getActiveClass",
    value: function getActiveClass() {
      return this.props.activeStepId === this.props.step.id ? _StepModule.default.active : '';
    }
  }, {
    key: "getFinishedClass",
    value: function getFinishedClass() {
      return this.props.step.finished ? _StepModule.default.finished : '';
    }
  }, {
    key: "getErrorClass",
    value: function getErrorClass() {
      return this.props.step.hasErrors ? _StepModule.default.hasErrors : '';
    }
  }, {
    key: "render",
    value: function render() {
      var step = this.props.step;
      return step.link && Object.keys(step.link).length ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
        to: step.link,
        className: "".concat(_StepModule.default.wizardTopnavItem, " ").concat(this.getActiveClass(), " ").concat(this.getFinishedClass(), " ").concat(this.getErrorClass())
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: _StepModule.default.wizardTopnavItemContent
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: _StepModule.default.stepNumber
      }, this.props.index + 1), /*#__PURE__*/_react.default.createElement("span", {
        className: _StepModule.default.stepName
      }, this.props.step.name))) : /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_StepModule.default.wizardTopnavItem, " ").concat(this.getActiveClass(), " ").concat(this.getFinishedClass(), " ").concat(this.getErrorClass())
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: _StepModule.default.wizardTopnavItemContent
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: _StepModule.default.stepNumber
      }, this.props.index + 1), /*#__PURE__*/_react.default.createElement("span", {
        className: _StepModule.default.stepName
      }, this.props.step.name)));
    }
  }]);

  return Step;
}(_react.Component);

Step.propTypes = {
  step: _propTypes.default.object.isRequired,
  activeStepId: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  index: _propTypes.default.number.isRequired
};
var _default = Step;
exports.default = _default;