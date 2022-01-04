import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router, useHistory as history} from 'react-router-dom';
import routes from './Routes';


ReactDOM.render(
  <Router routes={Routes} history={history} />,
  document.getElementById("about")

);
