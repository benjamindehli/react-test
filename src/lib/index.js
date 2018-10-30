'use strict';
import WebFont from 'webfontloader';
import Button from './components/Button';
import List from './components/List';
import NavigationBar from './components/NavigationBar';


WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif']
  }
});

export {Button, List, NavigationBar}
