import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import {store, persistor} from './app/store.js';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import StyledTheme from './providers/styled-theme.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <StyledTheme>
        <App />
      </StyledTheme>
    </PersistGate>
  </Provider>,
);
