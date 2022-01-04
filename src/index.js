import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import routes from './Routes';


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>),
  document.getElementById("about")

);
