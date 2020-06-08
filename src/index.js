import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import ContextWrapper from './ContextWrapper'

ReactDOM.render(
  <React.StrictMode>
    <ContextWrapper><Router><App /></Router></ContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

