'use strict';

import WebFont from 'webfontloader';
import Button from './components/Button';
import CheckBoxIcon from './components/CheckBoxIcon';
import CheckBoxInput from './components/CheckBoxInput';
import CheckBoxListItem from './components/CheckBoxListItem';
import ContentBox from './components/ContentBox';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
import LoadingAnimation from './components/LoadingAnimation';
import NavigationBar from './components/NavigationBar';
import Paper from './components/Paper';
import RadioButtonIcon from './components/RadioButtonIcon';
import RadiButtonInput from './components/RadioButtonInput';
import RadioButtonListItem from './components/RadioButtonListItem';
import Select from './components/Select';
import './style/base/fonts.css';

WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif']
  }
});

export { Button, CheckBoxIcon, CheckBoxInput, CheckBoxListItem, Footer, ContentBox, Header, List, LoadingAnimation, NavigationBar, Paper, RadioButtonIcon, RadiButtonInput, RadioButtonListItem, Select };
