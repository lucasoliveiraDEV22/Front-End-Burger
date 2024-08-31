import React from 'react'
import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'

import { useLocation, useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/UserContext'
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
  const { logout, userData } = useUser()
  const navigate = useNavigate()
  const location = useLocation()

  const logoutUser = () => {
    logout()
    navigate('/login')
  }
  console.log(userData)
  return (
    <Container>
      <ContainerLeft>
        <PageLink
          onClick={() => navigate('/')}
          isActive={location.pathname === '/'}
        >
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate('/produtos')}
          isActive={location.pathname.includes('produtos')}
        >
          Ver produtos
        </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink onClick={() => navigate('/carrinho')}>
          <img src={Cart} alt="carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="usuário" />
        </PageLink>
        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
