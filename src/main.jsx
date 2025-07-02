import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from '@asgardeo/auth-react';
import './index.css';

const config = {
  signInRedirectURL: import.meta.env.VITE_APP_SIGN_IN_REDIRECT_URL,
  signOutRedirectURL: import.meta.env.VITE_APP_SIGN_OUT_REDIRECT_URL,
  clientID: import.meta.env.VITE_ASGARDEO_CLIENT_ID,
  baseUrl: import.meta.env.VITE_ASGARDEO_BASE_URL,
  scope: [
    "openid", 
    "profile", 
    "email",
    "phone", 
    "groups", 
    "services:write", 
    "admin:read",
    "internal_login",
    "internal_user_mgt_create",
    "internal_user_mgt_update",
    "internal_user_mgt_view",
    "internal_user_mgt_delete",
    "internal_user_mgt_list"] 
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider config={config}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
