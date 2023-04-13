import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css'
import './index.css';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

