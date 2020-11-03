"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../functions/theme");

var _dibkLogoMobile = _interopRequireDefault(require("../images/dibk-logo-mobile.svg"));

var _hamburger = require("../images/hamburger.svg");

var _NavigationBarModule = _interopRequireDefault(require("./NavigationBar.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PrimaryListItem extends _react.default.Component {
  getListItemThemeStyle(theme) {
    return {
      color: (0, _theme.getThemeNavigationBarTextColor)(theme),
      borderBottomColor: (0, _theme.getThemeNavigationBarTextColor)(theme)
    };
  }

  render() {
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

}

class NavigationBar extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  handleClickOutside() {
    this.setState({
      active: false
    });
  }

  toggleList() {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  getNavigationBarThemeStyle(theme) {
    return {
      backgroundColor: (0, _theme.getThemeNavigationBarBackgroundColor)(theme),
      color: (0, _theme.getThemeNavigationBarTextColor)(theme)
    };
  }

  getListItemThemeStyle(theme) {
    return {
      color: (0, _theme.getThemeNavigationBarTextColor)(theme),
      borderBottomColor: (0, _theme.getThemeNavigationBarTextColor)(theme)
    };
  }

  renderPrimaryList(items = this.props.primaryListItems, iteration = 0) {
    var listItemThemeStyle = this.getListItemThemeStyle(this.props.theme);
    var listItems = items.map((listItem, i) => {
      var key = iteration + '-' + i;

      if (listItem.listItems !== undefined) {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: key
        }, /*#__PURE__*/_react.default.createElement("span", {
          style: listItemThemeStyle
        }, listItem.name), this.renderPrimaryList(listItem.listItems, iteration + 1));
      } else {
        return /*#__PURE__*/_react.default.createElement(PrimaryListItem, {
          listItem: listItem,
          key: key,
          theme: this.props.theme
        });
      }
    });
    return /*#__PURE__*/_react.default.createElement("ul", {
      className: _NavigationBarModule.default.primaryList
    }, listItems);
  }

  renderSecondaryList() {
    var listItems = this.props.secondaryListItems.map((listItem, i) => {
      return /*#__PURE__*/_react.default.createElement(PrimaryListItem, {
        listItem: listItem,
        key: i,
        theme: this.props.theme
      });
    });
    return /*#__PURE__*/_react.default.createElement("ul", {
      className: _NavigationBarModule.default.secondaryList
    }, listItems);
  }

  renderLogo(logoLink) {
    var themeLogo = (0, _theme.getThemeLogo)(this.props.theme);
    var themeAppName = (0, _theme.getThemeAppName)(this.props.theme);
    var logoElement = themeLogo && themeAppName ? /*#__PURE__*/_react.default.createElement("img", {
      alt: "".concat(themeAppName, " logo"),
      src: themeLogo
    }) : /*#__PURE__*/_react.default.createElement("img", {
      alt: "DIBK logo",
      src: _dibkLogoMobile.default
    });
    return logoLink && logoLink.length ? /*#__PURE__*/_react.default.createElement("a", {
      href: logoLink
    }, logoElement) : logoElement;
  }

  render() {
    var navigationBarThemeStyle = this.getNavigationBarThemeStyle(this.props.theme);
    var menuIconThemeStyle = {
      fill: (0, _theme.getThemeNavigationBarTextColor)(this.props.theme)
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
      onClick: () => this.toggleList()
    }, /*#__PURE__*/_react.default.createElement(_hamburger.ReactComponent, {
      style: menuIconThemeStyle
    })) : ''), /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(_NavigationBarModule.default.dropdownContainer, " ").concat(this.state.active ? _NavigationBarModule.default.active : '')
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _NavigationBarModule.default.dropdown,
      style: navigationBarThemeStyle
    }, this.renderPrimaryList(), this.renderSecondaryList(), this.props.children)), /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(_NavigationBarModule.default.dropdownOverlay, " ").concat(this.state.active ? _NavigationBarModule.default.active : '')
    })));
  }

}

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