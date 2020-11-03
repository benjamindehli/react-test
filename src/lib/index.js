import WebFont from 'webfontloader';
import Button from './components/Button';
import CheckBoxIcon from './components/CheckBoxIcon';
import CheckBoxInput from './components/CheckBoxInput';
import CheckBoxListItem from './components/CheckBoxListItem';
import ContentBox from './components/ContentBox';
import DragAndDropFileInput from './components/DragAndDropFileInput';
import Header from './components/Header';
import List from './components/List';
import LoadingAnimation from './components/LoadingAnimation';
import NavigationBar from './components/NavigationBar';
import Select from './components/Select';
import Footer from './components/Footer';
import InputField from './components/InputField';
import Paper from './components/Paper';
import RadioButtonIcon from './components/RadioButtonIcon';
import RadiButtonInput from './components/RadioButtonInput';
import RadioButtonListItem from './components/RadioButtonListItem';
import Theme from '.components/Theme';
import './style/base/fonts.css';

WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif']
  }
});

export {
  Button,
  CheckBoxIcon,
  CheckBoxInput,
  CheckBoxListItem,
  ContentBox,
  DragAndDropFileInput,
  Header,
  List,
  LoadingAnimation,
  NavigationBar,
  Select,
  Footer,
  InputField,
  Paper,
  RadioButtonIcon,
  RadiButtonInput,
  RadioButtonListItem,
  Theme
};
