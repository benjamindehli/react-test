import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import NavigationBar from './lib/components/NavigationBar';
import List from './lib/components/List';
import Button from './lib/components/Button';
import Header from './lib/components/Header';
import Select from './lib/components/Select';
import LoadingAnimation from './lib/components/LoadingAnimation';
import ContentBox from './lib/components/ContentBox';

WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif']
  },
  custom: {
      families: ['Altis-Light'],
      urls: ['/src/lib/style/base/fonts.css']
    }
});


ReactDOM.render(
  <NavigationBar primaryListItems={[{name: 'Primary item 1', listItems:['Sub item 1', 'Sub item 2']}, 'Primary item 2', {name: 'Primary item 3', href: 'test.no'}]} secondaryListItems={['Secondary item 1', 'Secondary item 2']} />,
  document.getElementById('navigation-bar')
);

ReactDOM.render(
  <List listItems={['item 1', 'item 2']} />,
  document.getElementById('list')
);

ReactDOM.render(
  <Button content="dummy button"/>,
  document.getElementById('button')
);

ReactDOM.render(
  <Header content="Title for content" size={2}/>,
  document.getElementById('header')
);

ReactDOM.render(
  <Select options={['option 1', 'option 2', {key: 'option 3', value: 'value 3'}]} />,
  document.getElementById('select')
);

ReactDOM.render(
  <LoadingAnimation />,
  document.getElementById('loading-animation')
);

ReactDOM.render(
  <ContentBox title="Title for box" content="Content for box" />,
  document.getElementById('content-box')
);
