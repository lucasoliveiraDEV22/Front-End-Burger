import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home, Login, Products, Register } from '../containers'
import PrivateRoute from './private-route'
// import paths from '../constants/paths'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />

        <Route element={<PrivateRoute />}>
          <Route element={<Home />} path="/" />
          <Route element={<Products />} path="/produtos" />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
