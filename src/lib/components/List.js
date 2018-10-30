import React from 'react';
import PropTypes from 'prop-types';
import './List.scss';

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
		return <ul className="list">{listItems}</ul>;
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
	listItems: PropTypes.array
}

List.defaultProps = {
	listItems: ['testing123']
}

export default List;
