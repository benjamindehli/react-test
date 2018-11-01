import React from 'react';
import PropTypes from 'prop-types';
import style from './LoadingAnimation.scss';

class LoadingAnimation extends React.Component {
	render () {
		return (
			<div className={this.props.fixed ? style.loadingAnimation + ' ' + style.fixed : style.loadingAnimation}>{this.props.message}</div>
			)
	}
}

LoadingAnimation.propTypes = {
	fixed: PropTypes.bool,
	active: PropTypes.bool,
	/** Text content inside button */
	message: PropTypes.string
}

LoadingAnimation.defaultProps = {
	fixed: false,
	active: true,
	message: ''
}

export default LoadingAnimation;


