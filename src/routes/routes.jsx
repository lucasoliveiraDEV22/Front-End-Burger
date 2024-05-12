import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Cart, Home, Login, Product, Register } from '../containers'
import PrivateRoute from './private-route'
// import paths from '../constants/paths'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />
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
        <Route
          path="/carrinho"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default MyRoutes
