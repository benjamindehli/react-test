"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ContentBoxModule = _interopRequireDefault(require("./ContentBox.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ContentBox = /*#__PURE__*/function (_React$Component) {
  _inherits(ContentBox, _React$Component);

  var _super = _createSuper(ContentBox);

  function ContentBox() {
    _classCallCheck(this, ContentBox);

    return _super.apply(this, arguments);
  }

  _createClass(ContentBox, [{
    key: "renderTitle",
    value: function renderTitle() {
      var className = _ContentBoxModule.default.title + " " + _ContentBoxModule.default[this.props.titleSize];

      if (this.props.title) {
        return /*#__PURE__*/_react.default.createElement("h2", {
          className: className
        }, this.props.title);
      } else {
        return;
      }
    }
  }, {
    key: "render",
    value: function render() {
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
  }]);

  return ContentBox;
}(_react.default.Component);

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