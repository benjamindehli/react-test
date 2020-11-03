"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ListModule = _interopRequireDefault(require("./List.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListItem extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("li", null, this.props.listItem);
  }

}

class List extends _react.default.Component {
  renderList() {
    var listItems = this.props.listItems.map(function (listItem, i) {
      return /*#__PURE__*/_react.default.createElement(ListItem, {
        listItem: listItem,
        key: i
      });
    });
    var listType = this.props.ordered ? 'ol' : 'ul';

    var listElement = /*#__PURE__*/_react.default.createElement(listType, {
      className: _ListModule.default.list
    }, listItems);

    return listElement;
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, this.renderList());
  }

}

List.propTypes = {
  listItems: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  ordered: _propTypes.default.bool
};
List.defaultProps = {
  listItems: [],
  ordered: false
};
var _default = List;
exports.default = _default;