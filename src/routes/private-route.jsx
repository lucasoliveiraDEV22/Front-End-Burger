import React from 'react'
import { Navigate } from 'react-router-dom'



function PrivateRoute({ children }) {
  const user = localStorage.getItem('codeburger:userData')

  return (
    <React.Fragment>
      {user ? children : <Navigate to="/login" />}
    </React.Fragment>
  )
}

export default PrivateRoute


