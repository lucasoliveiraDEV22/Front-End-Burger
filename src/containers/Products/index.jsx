import React, { useEffect, useState } from 'react'

import ProductsLogo from '../../assets/product-logo.svg'

import api from '../../services/api'

import { CardProduct } from '../../components/CardProduct'
import formatCurrency from '../../utils/formatCurrency'
import {
  CategoryButton,
  CategoryMenu,
  Container,
  ProductImg,
  ProductsContainer
} from './styles'

export function Product() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])
  return (
    <Container>
      <ProductImg src={ProductsLogo} alt="logo de produtos" />
      <CategoryMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              key={category.id}
              activeClick={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
      <ProductsContainer>
        {products &&
          products.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}
