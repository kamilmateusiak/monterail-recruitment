import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import { BrowserRouter as Router } from 'react-router-dom';

const target = document.querySelector('#root')

render(
  <div>
    <Router>
      <App />
    </Router>  
  </div>,
  target
);
