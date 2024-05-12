import React from 'react'

import CartLogo from '../../assets/cart-logo.svg'
import { CartItems } from '../../components'

// import { CategoryCarousel, OffersCarousel } from '../../components'
import { CartImg, Container } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo do carrinho" />
      <CartItems />
    </Container>
  )
}
