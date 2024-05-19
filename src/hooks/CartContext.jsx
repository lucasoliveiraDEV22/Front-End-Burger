import React, { createContext, useContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const updateLocalStorage = async products => {
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(products))
  }

  const putProductInCart = async product => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProducts

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

  /*const newQuantity = (productId, signal) => {
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
  }*/
  //   const deleteProducts = async productId => {
  //     const newCart = cartProducts.filter(product => product.id !== productId)

  //     setCartProducts(newCart)

  //     await updateLocalStorage(newCart)
  // }

  const increaseProducts = async productId => {
    const newCart = cartProducts.map(product => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const decreaseProducts = async productId => {
    const cartIndex = cartProducts.findIndex(pd => pd.id === productId)

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map(product => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartProducts(newCart)

      await updateLocalStorage(newCart)
    }
  }
  const deleteItem = async productId => {
    const filterItem = cartProducts.findIndex(
      product => product.id === productId
    )

    if (filterItem !== -1) {
      cartProducts.splice(filterItem, 1)

      setCartProducts([...cartProducts])
      await updateLocalStorage(cartProducts)
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
  }, [])

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        increaseProducts,
        decreaseProducts,
        deleteItem
      }}
    >
      {children}
    </CartContext.Provider>
  )
} //ERA ESSA CHAVE QUE ESTAVA ERRADA

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
