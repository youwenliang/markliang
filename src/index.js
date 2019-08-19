import React from 'react';
// import { render } from 'react-snapshot';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { BrowserRouter } from "react-browser-router";
// import * as serviceWorker from './serviceWorker';
// import $ from 'jquery';

ReactDOM.render(
  <BrowserRouter>
	<App />
  </BrowserRouter>,
  document.getElementById('root')  
);

//serviceWorker.unregister();