import styled from 'styled-components'

export const Container = styled.div``

export const ProductImg = styled.img`
  width: 100%;
`

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.375rem;
`

export const CategoryButton = styled.button`
  color: ${props => (props.isActiveCategory ? '#9758A6' : '#9A9A9D')};
  font-size: 17px;
  background: none;
  border:none;
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758A6'};
  line-height: 20px;
  cursor: pointer;
`

export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
padding: 40px;
justify-items: center;
margin-top: 20px;
`
