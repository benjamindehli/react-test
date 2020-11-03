import React from 'react';
import PropTypes from 'prop-types';
import { getThemeAppName, getThemeLogo, getThemeNavigationBarBackgroundColor, getThemeNavigationBarTextColor } from 'lib/functions/theme';
import style from './NavigationBar.module.scss';
import logo from 'lib/images/dibk-logo-mobile.svg';
import { ReactComponent as MenuIcon } from 'lib/images/hamburger.svg';

class PrimaryListItem extends React.Component {
  getListItemThemeStyle(theme) {
    return {
      color: getThemeNavigationBarTextColor(theme),
      borderBottomColor: getThemeNavigationBarTextColor(theme)
    };
  }

  render() {
    const listItemThemeStyle = this.getListItemThemeStyle(this.props.theme);

    if (typeof this.props.listItem === 'string') {
      return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
        style: listItemThemeStyle
      }, this.props.listItem));
    } else if (typeof this.props.listItem === 'object') {
      return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: this.props.listItem.href,
        style: listItemThemeStyle
      }, this.props.listItem.name));
    } else {
      return null;
    }
  }

}

class NavigationBar extends React.Component {
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
      backgroundColor: getThemeNavigationBarBackgroundColor(theme),
      color: getThemeNavigationBarTextColor(theme)
    };
  }

  getListItemThemeStyle(theme) {
    return {
      color: getThemeNavigationBarTextColor(theme),
      borderBottomColor: getThemeNavigationBarTextColor(theme)
    };
  }

  renderPrimaryList(items = this.props.primaryListItems, iteration = 0) {
    const listItemThemeStyle = this.getListItemThemeStyle(this.props.theme);
    let listItems = items.map((listItem, i) => {
      let key = iteration + '-' + i;

      if (listItem.listItems !== undefined) {
        return /*#__PURE__*/React.createElement("li", {
          key: key
        }, /*#__PURE__*/React.createElement("span", {
          style: listItemThemeStyle
        }, listItem.name), this.renderPrimaryList(listItem.listItems, iteration + 1));
      } else {
        return /*#__PURE__*/React.createElement(PrimaryListItem, {
          listItem: listItem,
          key: key,
          theme: this.props.theme
        });
      }
    });
    return /*#__PURE__*/React.createElement("ul", {
      className: style.primaryList
    }, listItems);
  }

  renderSecondaryList() {
    let listItems = this.props.secondaryListItems.map((listItem, i) => {
      return /*#__PURE__*/React.createElement(PrimaryListItem, {
        listItem: listItem,
        key: i,
        theme: this.props.theme
      });
    });
    return /*#__PURE__*/React.createElement("ul", {
      className: style.secondaryList
    }, listItems);
  }

  renderLogo(logoLink) {
    const themeLogo = getThemeLogo(this.props.theme);
    const themeAppName = getThemeAppName(this.props.theme);
    const logoElement = themeLogo && themeAppName ? /*#__PURE__*/React.createElement("img", {
      alt: `${themeAppName} logo`,
      src: themeLogo
    }) : /*#__PURE__*/React.createElement("img", {
      alt: "DIBK logo",
      src: logo
    });
    return logoLink && logoLink.length ? /*#__PURE__*/React.createElement("a", {
      href: logoLink
    }, logoElement) : logoElement;
  }

  render() {
    const navigationBarThemeStyle = this.getNavigationBarThemeStyle(this.props.theme);
    const menuIconThemeStyle = {
      fill: getThemeNavigationBarTextColor(this.props.theme)
    };
    return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
      className: style.isPresent
    }, /*#__PURE__*/React.createElement("div", {
      className: style.navigationBar,
      style: navigationBarThemeStyle
    }, /*#__PURE__*/React.createElement("div", {
      className: style.logoContainer
    }, this.renderLogo(this.props.logoLink)), this.props.children ? /*#__PURE__*/React.createElement("div", {
      className: style.childElements
    }, this.props.children) : '', this.props.primaryListItems && this.props.primaryListItems.length || this.props.secondaryListItems && this.props.secondaryListItems.length ? /*#__PURE__*/React.createElement("button", {
      className: `${style.menuToggle} ${this.state.active ? style.active : ''}`,
      onClick: () => this.toggleList()
    }, /*#__PURE__*/React.createElement(MenuIcon, {
      style: menuIconThemeStyle
    })) : ''), /*#__PURE__*/React.createElement("div", {
      className: `${style.dropdownContainer} ${this.state.active ? style.active : ''}`
    }, /*#__PURE__*/React.createElement("div", {
      className: style.dropdown,
      style: navigationBarThemeStyle
    }, this.renderPrimaryList(), this.renderSecondaryList(), this.props.children)), /*#__PURE__*/React.createElement("div", {
      className: `${style.dropdownOverlay} ${this.state.active ? style.active : ''}`
    })));
  }

}

NavigationBar.propTypes = {
  /** Main links in navigation bar */
  primaryListItems: PropTypes.array,

  /** Secondary links in navigation bar */
  secondaryListItems: PropTypes.array,

  /** Link for logo */
  logoLink: PropTypes.string,

  /** Theme for navigation bar */
  theme: PropTypes.object
};
NavigationBar.defaultProps = {
  primaryListItems: [],
  secondaryListItems: [],
  logoLink: null
};
export default NavigationBar;