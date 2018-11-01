import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.scss';

class Button extends React.Component {
	render () {
		let className = style.button + " " + style[this.props.color];
		return (
			<button className={className}>{this.props.content}</button>
			)
	}
}

Button.propTypes = {
	/** Text content inside button */
	content: PropTypes.string,
	color: PropTypes.oneOf(['default', 'primary', 'info', 'warning', 'success'])
}

Button.defaultProps = {
	content: 'button',
	color: 'default'
}

export default Button;


