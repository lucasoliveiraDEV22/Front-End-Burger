import React from 'react'

import { useCart } from '../../hooks/CartContext'

import { Bin, Body, Container, EmptyCart, Header } from './styles'

import BinCart from '../../assets/bin.png'
import formatCurrency from '../../utils/formatCurrency'

export function CartItems() {
  const { cartProducts, newQuantity, deleteItem } = useCart()
  console.log(cartProducts)
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
              <button onClick={() => newQuantity(product.id, 'minus')}>
                -
              </button>
              <p>{product.quantity}</p>
              <button onClick={() => newQuantity(product.id, 'plus')}>+</button>
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
