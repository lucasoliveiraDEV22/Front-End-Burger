import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Product from '../containers/Products'
import Register from '../containers/Register'
import PrivateRoute from './private-route'
// import paths from '../constants/paths'

function AllRoutes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/produtos" component={Product} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Register} />
      </Switch>
    </Router>
  )
}

export default AllRoutes
