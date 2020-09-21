import React from 'react';
import PropTypes from 'prop-types';
import style from './NavigationBar.module.scss';

class PrimaryListItem extends React.Component {
  render() {
    if (typeof this.props.listItem === 'string') {
      return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, this.props.listItem));
    } else if (typeof this.props.listItem === 'object') {
      return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: this.props.listItem.href
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

  renderPrimaryList(items = this.props.primaryListItems, iteration = 0) {
    let listItems = items.map((listItem, i) => {
      let key = iteration + '-' + i;

      if (listItem.listItems !== undefined) {
        return /*#__PURE__*/React.createElement("li", {
          key: key
        }, /*#__PURE__*/React.createElement("span", null, listItem.name), this.renderPrimaryList(listItem.listItems, iteration + 1));
      } else {
        return /*#__PURE__*/React.createElement(PrimaryListItem, {
          listItem: listItem,
          key: key
        });
      }
    });
    return /*#__PURE__*/React.createElement("ul", {
      className: style.primaryList
    }, listItems);
  }

  renderSecondaryList() {
    let listItems = this.props.secondaryListItems.map(function (listItem, i) {
      return /*#__PURE__*/React.createElement(PrimaryListItem, {
        listItem: listItem,
        key: i
      });
    });
    return /*#__PURE__*/React.createElement("ul", {
      className: style.secondaryList
    }, listItems);
  }

  renderLogo(logoLink) {
    const logoElement = /*#__PURE__*/React.createElement("img", {
      alt: "DIBK logo",
      src: require('../images/dibk-logo-mobile.svg')
    });
    return logoLink && logoLink.length ? /*#__PURE__*/React.createElement("a", {
      href: logoLink
    }, logoElement) : logoElement;
  }

  render() {
    return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
      className: style.isPresent
    }, /*#__PURE__*/React.createElement("div", {
      className: style.navigationBar
    }, /*#__PURE__*/React.createElement("div", {
      className: style.logoContainer
    }, this.renderLogo(this.props.logoLink)), this.props.children ? /*#__PURE__*/React.createElement("div", {
      className: style.childElements
    }, this.props.children) : '', this.props.primaryListItems && this.props.primaryListItems.length || this.props.secondaryListItems && this.props.secondaryListItems.length ? /*#__PURE__*/React.createElement("button", {
      className: `${style.menuToggle} ${this.state.active ? style.active : ''}`,
      onClick: () => this.toggleList()
    }) : ''), /*#__PURE__*/React.createElement("div", {
      className: `${style.dropdownContainer} ${this.state.active ? style.active : ''}`
    }, /*#__PURE__*/React.createElement("div", {
      className: style.dropdown
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
  logoLink: PropTypes.string
};
NavigationBar.defaultProps = {
  primaryListItems: [],
  secondaryListItems: [],
  logoLink: null
};
export default NavigationBar;