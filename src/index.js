import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./utils/general.css"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZ8_n-QP4C043maeyTVwyiN0UEn4RgPoc",
  authDomain: "guitargodwebfb.firebaseapp.com",
  projectId: "guitargodwebfb",
  storageBucket: "guitargodwebfb.appspot.com",
  messagingSenderId: "859754983775",
  appId: "1:859754983775:web:d9d1e1253cef561bc6c6ea"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
