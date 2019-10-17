'use strict';
import WebFont from 'webfontloader';
import Button from './components/Button';
import ContentBox from './components/ContentBox';
import Header from './components/Header';
import List from './components/List';
import LoadingAnimation from './components/LoadingAnimation';
import NavigationBar from './components/NavigationBar';
import RadioButtonIcon from './components/RadioButtonIcon';
import Select from './components/Select';

WebFont.load({
  google: {
    families: ['Changa:200,300,400', 'Open Sans:300,400,700', 'sans-serif']
  }
});

export {Button, ContentBox, Header, List, LoadingAnimation, NavigationBar, RadioButtonIcon, Select}
