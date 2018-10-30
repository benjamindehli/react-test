import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import List from './lib/components/List';
import Button from './lib/components/Button';
import Colors from './lib/components/Colors';

WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(
  <List listItems={['item 1', 'item 2']} />,
  document.getElementById('list')
);

ReactDOM.render(
  <Button content="dummy button"/>,
  document.getElementById('button')
);

ReactDOM.render(
  <Colors/>,
  document.getElementById('colors')
);