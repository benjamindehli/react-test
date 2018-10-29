import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import Button from './components/Button';
import './index.css';


ReactDOM.render(
  <List listItems={['item 1', 'item 2']} />,
  document.getElementById('list')
);

ReactDOM.render(
  <Button content="dummy button"/>,
  document.getElementById('button')
);