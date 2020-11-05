import React from 'react';
import PropTypes from 'prop-types';
import { getThemeNavigationBarTextColor } from '../functions/theme';

class NavigationBarListItem extends React.Component {
  getListItemThemeStyle(theme){
    return {
      color: getThemeNavigationBarTextColor(theme),
      borderBottomColor: getThemeNavigationBarTextColor(theme)
    }
  }

  render () {
    const listItemThemeStyle = this.getListItemThemeStyle(this.props.theme);

    if (typeof (this.props.listItem) === 'string') {
      return (
        <li><span style={listItemThemeStyle}>{ this.props.listItem }</span></li>
      )
    } else if (typeof (this.props.listItem) === 'object') {
      return (
        <li><a href={this.props.listItem.href} style={listItemThemeStyle}>{ this.props.listItem.name }</a></li>
      )
    } else {
      return null
    }
  }
}

NavigationBarListItem.propTypes = {
  listItem: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  theme: PropTypes.object
}

export default NavigationBarListItem
