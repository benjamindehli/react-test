import React from 'react';
import PropTypes from 'prop-types';
import style from './Footer.module.scss';

class Footer extends React.Component {
  render() {
    return (<div className={style.footer}>
      <div className={style.footerContainer}>
        {this.props.children}
      </div>
    </div>)
  }
}

export default Footer;
