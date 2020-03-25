import React from 'react';
import style from './Footer.module.scss';

class Footer extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("footer", {
      className: style.footer
    }, /*#__PURE__*/React.createElement("div", {
      className: style.footerContainer
    }, this.props.children));
  }

}

export default Footer;