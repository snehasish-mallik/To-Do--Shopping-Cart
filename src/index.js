// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component
import { AppProvider, useAppContext } from './context/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);
