import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import paths from '../constants/path'
import { Admin, Cart, Home, Login, Products, Register } from '../containers'
import PrivateRoute from './private-route'

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
              <Products />
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
        <Route
          path={paths.Order}
          element={
            <PrivateRoute isAdmin>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.Product}
          element={
            <PrivateRoute isAdmin>
              <Admin />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.AddProduct}
          element={
            <PrivateRoute isAdmin>
              <Admin />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.EditProduct}
          element={
            <PrivateRoute isAdmin>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default MyRoutes
