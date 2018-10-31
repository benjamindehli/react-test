import React from 'react';
import PropTypes from 'prop-types';
import style from './NavigationBar.scss';

class PrimaryListItem extends React.Component {
  render() {
    if (typeof this.props.listItem == 'string') {
      return React.createElement("li", null, React.createElement("span", null, this.props.listItem));
    } else if (typeof this.props.listItem == 'object') {
      return React.createElement("li", null, React.createElement("a", {
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
      if (listItem.listItems !== undefined) {
        return React.createElement("li", null, React.createElement("span", null, listItem.name), this.renderPrimaryList(listItem.listItems, iteration + 1));
      } else {
        let key = iteration + "-" + i;
        return React.createElement(PrimaryListItem, {
          listItem: listItem,
          key: key
        });
      }
    });
    return React.createElement("ul", {
      className: style.primaryList
    }, listItems);
  }

  renderSecondaryList() {
    let listItems = this.props.secondaryListItems.map(function (listItem, i) {
      return React.createElement(PrimaryListItem, {
        listItem: listItem,
        key: i
      });
    });
    return React.createElement("ul", {
      className: style.secondaryList
    }, listItems);
  }

  render() {
    return React.createElement("header", null, React.createElement("div", {
      className: style.navigationBarSmall
    }, React.createElement("div", {
      className: style.logoContainer
    }, React.createElement("img", {
      alt: "DIBK logo",
      src: require('../images/dibk-logo-mobile.svg')
    })), React.createElement("button", {
      className: this.state.active ? style.menuToggle + ' active' : style.menuToggle,
      onClick: () => this.toggleList()
    })), React.createElement("div", {
      className: this.state.active ? style.dropdownContainer + ' active' : style.dropdownContainer
    }, React.createElement("div", {
      className: style.dropdown
    }, this.renderPrimaryList(), this.renderSecondaryList())));
  }

}

NavigationBar.propTypes = {
  /** Main links in navigation bar */
  primaryListItems: PropTypes.array,

  /** Secondary links in navigation bar */
  secondaryListItems: PropTypes.array
};
NavigationBar.defaultProps = {
  primaryListItems: [],
  secondaryListItems: []
};
export default NavigationBar;