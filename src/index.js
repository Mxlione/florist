import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// Ajoutez les imports Redux
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Enveloppez App avec le Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
