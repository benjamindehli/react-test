import React from 'react';
import PropTypes from 'prop-types';
import style from './List.module.scss';

class ListItem extends React.Component {
  render() {
    return React.createElement("li", null, this.props.listItem);
  }

}

class List extends React.Component {
  renderList() {
    let listItems = this.props.listItems.map(function (listItem, i) {
      return React.createElement(ListItem, {
        listItem: listItem,
        key: i
      });
    });
    let listType = this.props.ordered ? 'ol' : 'ul';
    let listElement = React.createElement(listType, {
      className: style.list
    }, listItems);
    return listElement;
  }

  render() {
    return React.createElement("div", null, this.renderList());
  }

}

List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  ordered: PropTypes.bool
};
List.defaultProps = {
  listItems: [],
  ordered: false
};
export default List;