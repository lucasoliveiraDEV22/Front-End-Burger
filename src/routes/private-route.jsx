import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import PropTypes from 'prop-types'

function PrivateRoute({ component, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} component={component} />
}

export default PrivateRoute

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
