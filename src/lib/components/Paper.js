import React from 'react';
import PropTypes from 'prop-types';
import style from './Paper.module.scss';

class Paper extends React.Component {
  render() {
    return (
      <div className={`${style.paper} ${this.props.noMargin ? style.noMargin : ''} ${this.props.noPadding ? style.noPadding : ''}`}>
        {this.props.children}
      </div>
    )
  }
};

Paper.propTypes = {
  noMargin: PropTypes.bool,
  noPadding: PropTypes.bool
};

Paper.defaultProps = {
  noMargin: false,
  noPadding: false
};

export default Paper;
