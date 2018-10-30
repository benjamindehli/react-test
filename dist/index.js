'use strict';

import WebFont from 'webfontloader';
import Button from './components/Button';
import List from './components/List';
WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif']
  }
});
export { List, Button };