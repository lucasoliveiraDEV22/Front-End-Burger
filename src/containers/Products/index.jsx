import React, {useState, useEffect} from 'react'

import ProductsLogo from '../../assets/product-logo.svg'


import { Container, ProductImg } from './styles'
import apiCodeBurger from '../../services/api'

export function Product() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiCodeBurger.get('categories')

      const newCategories = [{id: 0, nome: 'Todas'}, ...data]

      console.log(data)

      setCategories(data)
    }

    loadCategories()
  }, [])
  return (
    <Container>
      <ProductImg src={ProductsLogo} alt="logo de produtos" />
    </Container>
  )
}


