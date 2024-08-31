import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'
import Offers from '../../assets/offers.png'
import { useCart } from '../../hooks/CartContext'
import apiCodeBurger from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button, CategoryImg, Container, ContainerItems, Image, NameSnack, Price } from './styles'

export function OffersCarousel() {
  const [offers, setOffers] = useState([])
  const navigate = useNavigate()
  const { putProductInCart } = useCart()

  useEffect(() => {
    async function loadOffers() {
      const { data } = await apiCodeBurger.get('products')

      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })

      setOffers(onlyOffers)
    }

    loadOffers()
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
      <CategoryImg src={Offers} alt="logo da oferta" />

      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(product => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt="foto do produto" />
              <NameSnack>{product.name}</NameSnack>
              <Price>{product.formatedPrice}</Price>
              <Button
                onClick={() => {
                  putProductInCart(product)
                  navigate('/carrinho')
                }}
              >
                Peça agora
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
