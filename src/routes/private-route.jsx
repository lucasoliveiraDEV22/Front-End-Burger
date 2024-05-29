import React from 'react'
import { Navigate } from 'react-router-dom'
import { Header } from "../components";



function PrivateRoute({ children }) {
  const user = localStorage.getItem('codeburger:userData')

  return (
   
    <React.Fragment>
      <Header />
      {user ? children : <Navigate to="/login" />}
    </React.Fragment>
    
  )
}

export default PrivateRoute


