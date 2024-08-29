import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import { useNavigate } from 'react-router-dom'
import Category from '../../assets/category.png'
import apiCodeBurger from '../../services/api'
import { Button, CategoryImg, Container, ContainerItems, Image } from './styles'

export function CategoryCarousel() {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiCodeBurger.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 4 }
  ]
  return (
    <Container>
      <CategoryImg src={Category} alt="Category logo" />

      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map(category => (
            <ContainerItems key={category.id}>
              <Image src={category.url} alt="Image category" />
              <Button
                onClick={() =>
                  navigate('/produtos', {
                    state: { categoryId: category.id }
                  })
                }
              >
                {category.name}
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
