import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router, hashHistory as history} from react-router;
import routes from './Routes';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
