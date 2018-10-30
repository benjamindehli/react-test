import React from 'react';
import PropTypes from 'prop-types';
import style from './NavigationBar.scss';

class PrimaryListItem extends React.Component {
	render() {
		if (typeof(this.props.listItem) == 'string'){
			return (
				<li><span>{ this.props.listItem }</span></li>
				)
		}else if (typeof(this.props.listItem) == 'object'){
			return (
				<li><a href={this.props.listItem.href}>{ this.props.listItem.name }</a></li>
				)
		}else {
			return null;
		}
	}
}

class NavigationBar extends React.Component {
	renderPrimaryList(items = this.props.primaryListItems, iteration = 0) {
		let listItems = items.map( (listItem, i) => {
			if (listItem.listItems !== undefined){
				return (
					<li><span>{ listItem.name }</span>{ this.renderPrimaryList(listItem.listItems, iteration+1) }</li>
					)
			}else{
				let key = iteration + "-" + i;
				return <PrimaryListItem listItem={listItem} key={key}/>;
			}
		});
		return <ul className={style.primaryList}>{listItems}</ul>;
	}
	renderSecondaryList() {
		let listItems = this.props.secondaryListItems.map(function(listItem, i){
			return <PrimaryListItem listItem={listItem} key={i}/>;
		});
		return <ul className={style.secondaryList}>{listItems}</ul>;
	}
	render () {
		return (
			<header>
			<div className={style.navigationBarSmall}></div>
			<div className={style.dropdown}>{this.renderPrimaryList()}{this.renderSecondaryList()}</div>
			</header>
			)
	}
}

NavigationBar.propTypes = {
	/** Main links in navigation bar */
	primaryListItems: PropTypes.array,
	/** Secondary links in navigation bar */
	secondaryListItems: PropTypes.array
}

NavigationBar.defaultProps = {
	primaryListItems: [],
	secondaryListItems: []
}

export default NavigationBar;
