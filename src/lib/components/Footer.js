import React from 'react';
import style from './Footer.module.scss';

class Footer extends React.Component {
  render() {
    return (<footer className={style.footer}>
      <div className={style.footerContainer}>
        {this.props.children}
      </div>
    </footer>)
  }
}

export default Footer;
