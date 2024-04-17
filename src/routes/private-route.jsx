import React from 'react'
import { Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'

function PrivateRoute({ children }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to="/login" replace={true} />
  }

  return <>{children}</>
}

export default PrivateRoute

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
