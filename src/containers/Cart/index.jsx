import React from 'react'

import CartLogo from '../../assets/cart-logo.svg'
import { CartItems } from '../../components'
import { CartResume } from '../../components'

// import { CategoryCarousel, OffersCarousel } from '../../components'
import { CartImg, Container, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo do carrinho" />
      <Wrapper>
      <CartItems />
      <CartResume />
      </Wrapper>
    </Container>
  )
}
