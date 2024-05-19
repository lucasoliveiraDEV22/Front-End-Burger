import React from 'react'

import { useCart } from '../../hooks/CartContext'

import { Bin, Body, Container, EmptyCart, Header } from './styles'

import BinCart from '../../assets/bin.png'
import formatCurrency from '../../utils/formatCurrency'

export function CartItems() {
  const { cartProducts, decreaseProducts, increaseProducts, deleteItem } =
    useCart()

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>

      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
            <Bin onClick={() => deleteItem(product.id)}>
              <img src={BinCart} />
            </Bin>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho vazio</EmptyCart>
      )}
    </Container>
  )
}
