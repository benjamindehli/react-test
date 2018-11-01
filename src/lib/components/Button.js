import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.scss';

class Button extends React.Component {
	render () {
		let colorClass = " " + style[this.props.color];
		let sizeClass = " " + style[this.props.size];
		let className = style.button + colorClass + sizeClass;
		return (
			<button className={className}>{this.props.content}</button>
			)
	}
}

Button.propTypes = {
	/** Text content inside button */
	content: PropTypes.string,
	color: PropTypes.oneOf(['default', 'primary', 'success', 'warning']),
	size: PropTypes.oneOf(['small', 'regular'])
}

Button.defaultProps = {
	content: 'button',
	color: 'default',
	size: 'regular'
}

export default Button;


