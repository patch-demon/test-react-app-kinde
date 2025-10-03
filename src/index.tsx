import React from 'react';
import ReactDOM from 'react-dom/client';
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <KindeProvider
    clientId={process.env.VITE_KINDE_CLIENT_ID || ''}
    domain={process.env.VITE_KINDE_DOMAIN || ''}
    logoutUri={process.env.VITE_KINDE_LOGOUT_URL || ''}
    redirectUri={process.env.VITE_KINDE_REDIRECT_URL || ''}
    // When running local against a custom domain, include the line below
    // useInsecureForRefreshToken={true}
  >
    <App />
  </KindeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
