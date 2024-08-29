import React, { useEffect, useState } from 'react'

import { useCart } from '../../hooks/CartContext'

import { toast } from 'react-toastify'
import apiCodeBurger from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container } from './styles'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartProducts } = useCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)
    setFinalPrice(sumAllItems)
    // console.log(sumAllItems)
  }, [cartProducts, deliveryTax])
  const submitOrder = async () => {
    try {
      const order = cartProducts.map(product => {
        return { id: product.id, quantity: product.quantity }
      })
      await toast.promise(apiCodeBurger.post('/orders', { products: order }), {
        pending: 'Realizando seu pedido... Aguarde!',
        success: 'Uhull.. Pedido Realizado com sucesso',
        error: 'Ops, aconteceu um erro.. Tente novamente! =('
      })
    } catch {}
  }
  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button style={{ width: '100%', marginTop: 30 }} onClick={submitOrder}>
        Finalizar pedido
      </Button>
    </div>
  )
}
