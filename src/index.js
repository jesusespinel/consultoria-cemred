import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';
ReactDOM.render(
  
  <React.StrictMode>
    <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!"/>
    <App />
  </React.StrictMode>, 
  document.getElementById('root')
);
