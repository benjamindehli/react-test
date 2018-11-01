import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.scss';

class Header extends React.Component {
	render () {
		let headerElement = React.createElement('h' + this.props.size, { className: style.header }, this.props.content);
		return (<div className={ style.headerContainer }> { headerElement } </div>);
	}
}

Header.propTypes = {
	/** Text content inside button */
	content: PropTypes.string.isRequired,
	size: PropTypes.oneOf([1, 2, 3, 4, 5])
}

Header.defaultProps = {
	content: '',
	size: 1
}

export default Header;


