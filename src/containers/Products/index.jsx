import React, { useEffect, useState } from 'react'

import ProductsLogo from '../../assets/product-logo.svg'

import apiCodeBurger from '../../services/api'

import { useLocation } from 'react-router-dom'

import { CardProduct } from '../../components/CardProduct'
import formatCurrency from '../../utils/formatCurrency'
import {
  CategoryButton,
  CategoryMenu,
  Container,
  ProductImg,
  ProductsContainer
} from './styles'

export function Products() {
  const { state } = useLocation()

  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)
  const [filterProduct, setFilterProduct] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiCodeBurger.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await apiCodeBurger.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilterProduct(products)
    } else {
      const newProduct = products.filter(
        products => products.category_id === activeCategory
      )
      setFilterProduct(newProduct)
    }
  }, [activeCategory, products])
  return (
    <Container>
      <ProductImg src={ProductsLogo} alt="logo de produtos" />
      <CategoryMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
      <ProductsContainer>
        {filterProduct &&
          filterProduct.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}
