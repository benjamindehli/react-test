import React from 'react';
import PropTypes from 'prop-types';
import style from './List.scss';

class ListItem extends React.Component {
	render() {
		return (
			<li>{ this.props.listItem }</li>
		);
	}
}

class List extends React.Component {
	renderList() {
		let listItems = this.props.listItems.map(function(listItem, i){
			return <ListItem listItem={listItem} key={i}/>;
		});
		let listType = this.props.ordered ? 'ol' : 'ul';
		let listElement = React.createElement(listType, { className: style.list }, listItems);
		return listElement;
	}
	render () {
		return (
			<div>
				{this.renderList()}
			</div>
			)
	}
}

List.propTypes = {
	listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
	ordered: PropTypes.bool
}

List.defaultProps = {
	listItems: [],
	ordered: false
}

export default List;
