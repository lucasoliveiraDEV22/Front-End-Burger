import React from 'react'

import ProductsLogo from '../../assets/product-logo.svg'


import { Container, ProductImg } from './styles'

export function Product() {
  return (
    <Container>
      <ProductImg src={ProductsLogo} alt="logo de produtos" />
    </Container>
  )
}


