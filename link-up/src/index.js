import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/home.css';
import'./styles/navBar.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


import  { Provider } from "./context/context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
  <App />
  </Provider>
);


