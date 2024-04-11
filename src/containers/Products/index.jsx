import React from 'react'

import ProductsLogo from '../../assets/product-logo.svg'


import { Container, ProductImg } from './styles'

function Product() {
  return (
    <Container>
      <ProductImg src={ProductsLogo} alt="logo de produtos" />
    </Container>
  )
}

export default Product
