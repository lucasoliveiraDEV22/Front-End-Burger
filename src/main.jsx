import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App.jsx';
import { UserProvider } from './hooks/UserContext.jsx';
import GlobalStyles from './styles/globalStyles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <ToastContainer autoClose = {2000} theme='colored'/>
      <UserProvider>
        <App />
      </UserProvider>
      <GlobalStyles />
    </React.StrictMode>
  </>
);
