import React from 'react'
import { Navigate } from 'react-router-dom'
import { Header } from "../components";
import PropTypes from "prop-types";



function PrivateRoute({ children }) {
  const user = localStorage.getItem('codeburger:userData')
  if(!user) {
    return <Navigate to='/login' replace={true}/>
}

if(isAdmin && !JSON.parse(user).admin){
  return <Navigate to='/' replace={true}/>
}

  return (
   
    <React.Fragment>
      {/* <Header />
      {user ? children : <Navigate to="/login" />} */}
       {!isAdmin && <Header/>}
       {children}
    </React.Fragment>
    
  )
}

export default PrivateRoute

PrivateRoute.propTypes={
  children:PropTypes.oneOfType([PropTypes.func,PropTypes.element]),
  isAdmin:PropTypes.bool
}


