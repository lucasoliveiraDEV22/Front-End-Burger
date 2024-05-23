import React from 'react'
import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'

import { useLocation, useNavigate } from 'react-router-dom'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerText,
  Line,
  PageLink,
  PageLinkExit
} from './styles'

export function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <Container>
      <ContainerLeft>
        <PageLink
          onClick={() => navigate('/')}
          isActive={pathname === '/'}
        >
          Home
        </PageLink>
        <PageLink onClick={() => navigate('/produtos')} isActive = {pathname.includes('produtos')}>Ver produtos</PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink>
          <img src={Cart} alt="carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="usuário" />
        </PageLink>
        <ContainerText>
          <p>Olá, Lucas</p>
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
