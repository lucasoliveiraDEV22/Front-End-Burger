import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './hooks/UserContext.jsx';
import Router from './routes/routes.jsx';
import GlobalStyles from './styles/globalStyles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <ToastContainer autoClose = {2000} theme='colored'/>
      <UserProvider>
       <BrowserRouter>
        <Router />
       </BrowserRouter>
      </UserProvider>
      <GlobalStyles />
    </React.StrictMode>
  </>
);
