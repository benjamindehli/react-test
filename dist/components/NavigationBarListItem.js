"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../functions/theme");

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

var NavigationBarListItem = /*#__PURE__*/function (_React$Component) {
  _inherits(NavigationBarListItem, _React$Component);

  var _super = _createSuper(NavigationBarListItem);

  function NavigationBarListItem() {
    _classCallCheck(this, NavigationBarListItem);

    return _super.apply(this, arguments);
  }

  _createClass(NavigationBarListItem, [{
    key: "getListItemThemeStyle",
    value: function getListItemThemeStyle(theme) {
      return {
        color: (0, _theme.getThemeNavigationBarTextColor)(theme),
        borderBottomColor: (0, _theme.getThemeNavigationBarTextColor)(theme)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var listItemThemeStyle = this.getListItemThemeStyle(this.props.theme);

      if (typeof this.props.listItem === 'string') {
        return /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("span", {
          style: listItemThemeStyle
        }, this.props.listItem));
      } else if (typeof this.props.listItem === 'object') {
        return /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
          href: this.props.listItem.href,
          style: listItemThemeStyle
        }, this.props.listItem.name));
      } else {
        return null;
      }
    }
  }]);

  return NavigationBarListItem;
}(_react.default.Component);

NavigationBarListItem.propTypes = {
  listItem: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  theme: _propTypes.default.object
};
var _default = NavigationBarListItem;
exports.default = _default;