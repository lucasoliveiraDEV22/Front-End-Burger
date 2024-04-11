import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { UserProvider } from './hooks/UserContext.jsx'
import Routes from './routes/routes.jsx'
import GlobalStyles from './styles/globalStyles.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <ToastContainer autoClose={2000} theme="colored" />
      <UserProvider>
        <Routes />
      </UserProvider>
      <GlobalStyles />
    </React.StrictMode>
  </>
)
