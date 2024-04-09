import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'

import CategoryCarousel from '../../components/CategoryCarousel'
import { Container, HomeImg } from './styles'
import OffersCarousel from '../../components/OffersCarousel'

function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo da home" />

      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}

export default Home
