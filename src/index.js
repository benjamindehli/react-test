import React from 'react';
import ReactDOM from 'react-dom';
import List from './lib/components/List';
import Button from './lib/components/Button';


ReactDOM.render(
  <List listItems={['item 1', 'item 2']} />,
  document.getElementById('list')
);

ReactDOM.render(
  <Button content="dummy button"/>,
  document.getElementById('button')
);