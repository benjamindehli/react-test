'use strict';

import WebFont from 'webfontloader';
import Button from './components/Button';
import Header from './components/Header';
import List from './components/List';
import LoadingAnimation from './components/LoadingAnimation';
import NavigationBar from './components/NavigationBar';
import Select from './components/Select';
WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif']
  }
});
export { Button, Header, List, LoadingAnimation, NavigationBar, Select };