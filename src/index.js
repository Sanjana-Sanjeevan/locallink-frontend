import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from '@asgardeo/auth-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider
      config={{
        signInRedirectURL: "https://8375e0da-b929-4b3a-a6a1-cf62518814c0.e1-eu-north-azure.choreoapps.dev",
        signOutRedirectURL: "https://8375e0da-b929-4b3a-a6a1-cf62518814c0.e1-eu-north-azure.choreoapps.dev",
        clientID: "YAL1gx453cfZ2acg240aCyDmgOEa", 
        baseUrl: "https://api.eu.asgardeo.io/t/locallink1", 
        scope: ["openid", "profile", "groups", "email"] // Add 'groups' to get roles later
      }}
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);