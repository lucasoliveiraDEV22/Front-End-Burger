import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { UserProvider } from './hooks/UserContext.jsx'
import MyRoutes from './routes/routes.jsx'
import GlobalStyles from './styles/globalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <ToastContainer autoClose={2000} theme="colored" />
      <UserProvider>
        <MyRoutes />
      </UserProvider>
      <GlobalStyles />
    </React.StrictMode>
  </>
)
