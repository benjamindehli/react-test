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
	constructor(props){
		super(props)
		this.state = {
			active: false
		}
	}
	handleClickOutside(){
		this.setState({
			active: false
		})
	}
	toggleList(){
		this.setState(prevState => ({
			active: !prevState.active
		}))
	}
	renderPrimaryList(items = this.props.primaryListItems, iteration = 0) {
		let listItems = items.map( (listItem, i) => {
			let key = iteration + "-" + i;
			if (listItem.listItems !== undefined){
				return (
					<li key={key}><span>{ listItem.name }</span>{ this.renderPrimaryList(listItem.listItems, iteration+1) }</li>
					)
			}else{
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
				<div className={style.isMobile}>
					<div className={style.navigationBar}>
						<div className={style.logoContainer}>
							<img alt='DIBK logo' src={require('../images/dibk-logo-mobile.svg')} />
						</div>
						<button className={this.state.active ? style.menuToggle + ' active' : style.menuToggle} onClick={ () => this.toggleList() }></button>
					</div>
					<div className={this.state.active ? style.dropdownContainer + ' active' : style.dropdownContainer}>
						<div className={style.dropdown}>{this.renderPrimaryList()}{this.renderSecondaryList()}</div>
					</div>
					<div className={this.state.active ? style.dropdownOverlay + ' active' : style.dropdownOverlay}></div>
				</div>
				<div className={style.isDesktop}>
					<div className={style.desktopBackground}></div>
					<div className={style.topNavigation}>
						{this.renderSecondaryList()}
					</div>
					<div className={style.mainNavigation}>
						<div className={style.logoContainer}>
							<img alt='DIBK logo' src={require('../images/dibk-logo.svg')} />
						</div>
						{this.renderPrimaryList()}
					</div>
				</div>
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
