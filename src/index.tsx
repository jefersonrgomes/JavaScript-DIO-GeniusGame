import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { AuthProvider } from './components/provider/auth';

ReactDOM.render(
  <AuthProvider>
        <App />
  </AuthProvider>,
  document.getElementById('root')
);
