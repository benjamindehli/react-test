import React from 'react';
import ReactDOM from 'react-dom';
import List from './lib/components/List';
import Button from './lib/components/Button';
import Colors from './lib/components/Colors';


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