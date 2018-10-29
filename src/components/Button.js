import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import style from './Button.scss';

class Button extends React.Component {
	render () {
		let className = style.button;
		return (
			<button className={className}>{this.props.content}</button>
			)
	}
}

Button.propTypes = {
	content: PropTypes.string
}

Button.defaultProps = {
	content: 'knapp'
}

export default Button;


