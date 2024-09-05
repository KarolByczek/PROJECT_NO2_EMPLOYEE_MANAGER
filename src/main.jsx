import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'; // Importing the default styles
import App from './App'; // Importing the root component
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// Creating the root element and rendering the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>,
  </React.StrictMode>
);

