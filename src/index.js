import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MouseFollower } from 'react-mouse-follower';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MouseFollower />
    <App />
  </React.StrictMode>
);


