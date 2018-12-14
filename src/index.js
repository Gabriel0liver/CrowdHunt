import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import bulma from 'bulma/css/bulma.css';
import './css/styles.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>
, document.getElementById('root'));