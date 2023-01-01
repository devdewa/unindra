import React from 'react';
import ReactDOM from 'react-dom/client';

//CSS
import './style.css';

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