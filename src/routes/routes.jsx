import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from '../containers/Login'
import Register from '../containers/Register'
import PrivateRoute from './private-route'
// import paths from '../constants/paths'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/produtos"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default MyRoutes
