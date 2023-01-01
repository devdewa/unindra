import React from 'react';
import ReactDOM from 'react-dom/client';

//CSS
import './style.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

//Components
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
import Login from './components/login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);