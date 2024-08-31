import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
  width: max-content;
  height: 202px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 30px 60px 0px #3939391a;
  display: flex;
  gap: 12px;
  padding: 12px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Image = styled.img`
  width: 185px;
  border-radius: 10px;
  @media screen and (${breakpoints.sm}) {
    width: 113px;
  }
`

export const ProductName = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  font-weight: normal;
`

export const ProductPrice = styled.p`
  
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
`

export const Button = styled.button``
