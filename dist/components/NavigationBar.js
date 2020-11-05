"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../functions/theme");

var _dibkLogoMobile = _interopRequireDefault(require("../images/dibk-logo-mobile.svg"));

var _NavigationBarListItem = _interopRequireDefault(require("./NavigationBarListItem"));

var _NavigationBarModule = _interopRequireDefault(require("./NavigationBar.module.scss"));

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

var NavigationBar = /*#__PURE__*/function (_React$Component) {
  _inherits(NavigationBar, _React$Component);

  var _super = _createSuper(NavigationBar);

  function NavigationBar(props) {
    var _this;

    _classCallCheck(this, NavigationBar);

    _this = _super.call(this, props);
    _this.state = {
      active: false
    };
    return _this;
  }

  _createClass(NavigationBar, [{
    key: "handleClickOutside",
    value: function handleClickOutside() {
      this.setState({
        active: false
      });
    }
  }, {
    key: "toggleList",
    value: function toggleList() {
      this.setState(function (prevState) {
        return {
          active: !prevState.active
        };
      });
    }
  }, {
    key: "getNavigationBarThemeStyle",
    value: function getNavigationBarThemeStyle(theme) {
      return {
        backgroundColor: (0, _theme.getThemeNavigationBarBackgroundColor)(theme),
        color: (0, _theme.getThemeNavigationBarTextColor)(theme)
      };
    }
  }, {
    key: "getListItemThemeStyle",
    value: function getListItemThemeStyle(theme) {
      return {
        color: (0, _theme.getThemeNavigationBarTextColor)(theme),
        borderBottomColor: (0, _theme.getThemeNavigationBarTextColor)(theme)
      };
    }
  }, {
    key: "getLogoThemeStyle",
    value: function getLogoThemeStyle(theme) {
      return {
        padding: (0, _theme.getThemeLogoPadding)(theme)
      };
    }
  }, {
    key: "renderPrimaryList",
    value: function renderPrimaryList() {
      var _this2 = this;

      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.primaryListItems;
      var iteration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var listItemThemeStyle = this.getListItemThemeStyle(this.props.theme);
      var listItems = items.map(function (listItem, i) {
        var key = iteration + '-' + i;

        if (listItem.listItems !== undefined) {
          return /*#__PURE__*/_react.default.createElement("li", {
            key: key
          }, /*#__PURE__*/_react.default.createElement("span", {
            style: listItemThemeStyle
          }, listItem.name), _this2.renderPrimaryList(listItem.listItems, iteration + 1));
        } else {
          return /*#__PURE__*/_react.default.createElement(_NavigationBarListItem.default, {
            listItem: listItem,
            key: key,
            theme: _this2.props.theme
          });
        }
      });
      return /*#__PURE__*/_react.default.createElement("ul", {
        className: _NavigationBarModule.default.primaryList
      }, listItems);
    }
  }, {
    key: "renderSecondaryList",
    value: function renderSecondaryList() {
      var _this3 = this;

      var listItems = this.props.secondaryListItems.map(function (listItem, i) {
        return /*#__PURE__*/_react.default.createElement(_NavigationBarListItem.default, {
          listItem: listItem,
          key: i,
          theme: _this3.props.theme
        });
      });
      return /*#__PURE__*/_react.default.createElement("ul", {
        className: _NavigationBarModule.default.secondaryList
      }, listItems);
    }
  }, {
    key: "renderLogo",
    value: function renderLogo(logoLink) {
      var themeLogo = (0, _theme.getThemeLogo)(this.props.theme);
      var themeAppName = (0, _theme.getThemeAppName)(this.props.theme);
      var logoElement = themeLogo && themeAppName ? /*#__PURE__*/_react.default.createElement("img", {
        alt: "".concat(themeAppName, " logo"),
        src: themeLogo,
        style: this.getLogoThemeStyle(this.props.theme)
      }) : /*#__PURE__*/_react.default.createElement("img", {
        alt: "DIBK logo",
        src: _dibkLogoMobile.default
      });
      return logoLink && logoLink.length ? /*#__PURE__*/_react.default.createElement("a", {
        href: logoLink
      }, logoElement) : logoElement;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var navigationBarThemeStyle = this.getNavigationBarThemeStyle(this.props.theme);
      var hamburgerIconLineStyle = {
        backgroundColor: (0, _theme.getThemeNavigationBarTextColor)(this.props.theme)
      };
      return /*#__PURE__*/_react.default.createElement("header", null, /*#__PURE__*/_react.default.createElement("div", {
        className: _NavigationBarModule.default.isPresent
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _NavigationBarModule.default.navigationBar,
        style: navigationBarThemeStyle
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _NavigationBarModule.default.logoContainer
      }, this.renderLogo(this.props.logoLink)), this.props.children ? /*#__PURE__*/_react.default.createElement("div", {
        className: _NavigationBarModule.default.childElements
      }, this.props.children) : '', this.props.primaryListItems && this.props.primaryListItems.length || this.props.secondaryListItems && this.props.secondaryListItems.length ? /*#__PURE__*/_react.default.createElement("button", {
        className: "".concat(_NavigationBarModule.default.menuToggle, " ").concat(this.state.active ? _NavigationBarModule.default.active : ''),
        onClick: function onClick() {
          return _this4.toggleList();
        }
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: _NavigationBarModule.default.hamburgerIcon
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: _NavigationBarModule.default.line,
        style: hamburgerIconLineStyle
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: _NavigationBarModule.default.line,
        style: hamburgerIconLineStyle
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: _NavigationBarModule.default.line,
        style: hamburgerIconLineStyle
      }))) : ''), /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_NavigationBarModule.default.dropdownContainer, " ").concat(this.state.active ? _NavigationBarModule.default.active : '')
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _NavigationBarModule.default.dropdown,
        style: navigationBarThemeStyle
      }, this.renderPrimaryList(), this.renderSecondaryList(), this.props.children)), /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_NavigationBarModule.default.dropdownOverlay, " ").concat(this.state.active ? _NavigationBarModule.default.active : '')
      })));
    }
  }]);

  return NavigationBar;
}(_react.default.Component);

NavigationBar.propTypes = {
  /** Main links in navigation bar */
  primaryListItems: _propTypes.default.array,

  /** Secondary links in navigation bar */
  secondaryListItems: _propTypes.default.array,

  /** Link for logo */
  logoLink: _propTypes.default.string,

  /** Theme for navigation bar */
  theme: _propTypes.default.object
};
NavigationBar.defaultProps = {
  primaryListItems: [],
  secondaryListItems: [],
  logoLink: null
};
var _default = NavigationBar;
exports.default = _default;