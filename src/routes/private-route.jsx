import React from 'react'
import {Route, Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'

function PrivateRoute({ component, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to="/login" replace={true} />
  }

  return <Route {...rest} element={element} />
}

export default PrivateRoute

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
