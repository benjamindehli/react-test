import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import NavigationBar from './lib/components/NavigationBar';
import List from './lib/components/List';
import Button from './lib/components/Button';
import Colors from './lib/components/Colors';
import Select from './lib/components/Select';

WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif']
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
  <Select options={['option 1', 'option 2', {key: 'option 3', value: 'value 3'}]} />,
  document.getElementById('select')
);
);