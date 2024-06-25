import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure this is the correct path to your App component
import './index.css'; // Or any other global CSS file you have

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);