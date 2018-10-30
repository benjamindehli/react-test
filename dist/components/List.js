import React from 'react';
import PropTypes from 'prop-types';
import './List.scss';

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
    return React.createElement("ul", {
      className: "list"
    }, listItems);
  }

  render() {
    return React.createElement("div", null, this.renderList());
  }

}

List.propTypes = {
  listItems: PropTypes.array
};
List.defaultProps = {
  listItems: ['testing123']
};
export default List;