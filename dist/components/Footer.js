import React from 'react';
import style from './Footer.module.scss';

class Footer extends React.Component {
  render() {
    return React.createElement("footer", {
      className: style.footer
    }, React.createElement("div", {
      className: style.footerContainer
    }, this.props.children));
  }

}

export default Footer;