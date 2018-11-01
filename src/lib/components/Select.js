import React from 'react';
import PropTypes from 'prop-types';
import style from './Select.scss';

class Option extends React.Component {
	render() {
		if (typeof(this.props.option) == 'string'){
			return (
				<option value={this.props.option}>{ this.props.option }</option>
				)
		}else if (typeof(this.props.option) == 'object'){
			return (
				<option value={this.props.option.value}>{ this.props.option.key }</option>
				)
		}else {
			return null;
		}
	}
}

class Select extends React.Component {
	renderList() {
		let options = this.props.options.map(function(option, i){
			return <Option option={option} key={i}/>;
		});
		return <select>{options}</select>;
	}
	render () {
		return (
			<div className={ style.selectContainer }>
				{this.renderList()}
			</div>
			)
	}
}


Select.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.oneOfType([
		PropTypes.string, 
		PropTypes.shape({
				key: PropTypes.string,
				value: PropTypes.string
			})
		])
	),
	multiple: PropTypes.bool
}

Select.defaultProps = {
	options: [],
	multiple: false
}

export default Select;

export {Select, Option};
