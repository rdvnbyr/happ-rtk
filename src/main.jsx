import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { store, persistor } from './app/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StyledTheme from './providers/styled-theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StyledTheme>
          <App />
        </StyledTheme>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
