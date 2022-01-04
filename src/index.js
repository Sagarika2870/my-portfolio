import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowswerRouter} from 'react-router-dom';
import routes from './Routes';


ReactDOM.render((
  <BrowswerRouter>
    <App />
  </BrowswerRouter>),
  document.getElementById("about")

);
