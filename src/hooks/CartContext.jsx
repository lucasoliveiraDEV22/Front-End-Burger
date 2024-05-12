import React, { createContext, useContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const updateLocalStorage = product => {
    localStorage.setItem('codeburger:cartInfo', JSON.stringify(product))
  }

  const putProductInCart = async product => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

    let newCartProducts = []
    if (cartIndex >= 0) {
      const newCartProducts = cartProducts

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1

      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }

    await updateLocalStorage(cartProducts)
  }

  const newQuantity = (productId, signal) => {
    const updateQuantity = cartProducts.map(product => {
      if (product.id === productId) {
        if (signal === 'plus') {
          return { ...product, quantity: product.quantity + 1 }
        } else if (signal === 'minus' && product.quantity > 1) {
          return {
            ...product,
            quantity: product.quantity - 1
          }
        }
      }
      return product
    })

    setCartProducts(updateQuantity)
    updateLocalStorage(newQuantity)
  }

  const deleteItem = productId => {
    const filterItem = cartProducts.findIndex(
      product => product.id === productId
    )

    if (filterItem !== -1) {
      cartProducts.splice(filterItem, 1)

      setCartProducts([...cartProducts])
      updateLocalStorage(cartProducts)
    }
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codeburger:cartInfo')

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }
    loadUserData()
    // const product = localStorage.getItem('codeburger:cartInfo')

    // if(product){
    //   setCartProducts(JSON.parse(clientCartData))
    // }
  }, [])

  return (
    <CartContext.Provider
      value={{ putProductInCart, cartProducts, newQuantity, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with CartContext')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
