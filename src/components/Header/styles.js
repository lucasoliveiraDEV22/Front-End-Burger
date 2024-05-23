import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  background-color: #fff;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`
export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const ContainerRight = styled.div`
  display: flex;
  gap: 20px;
  img {
    margin-top: 5px;
  }
`

export const ContainerText = styled.div`
  color: #555555;
`

export const Line = styled.div`
  height: 41px;
  border: 0.5px solid #bababa;
`

export const PageLink = styled.a`
  cursor: pointer;
  font-weight: ${props => (props.isActive ? 700 : 400)};
  font-size: 18px;
  text-decoration: none;
  line-height: normal;
  color: #${props => (props.isActive ? '#9758A6' : '#555555')};
`

export const PageLinkExit = styled.a`
  cursor: pointer;
  text-decoration: none;
  line-height: normal;
  color: ${props => (props.isActive ? '#9758A6' : '#555555')};
  font-weight: ${props => (props.isActive ? 700 : 400)};
  font-size: 16px;

  &:hover {
    opacity: 0.7;
    transition: transform 0.5s ease 0s;
  }

  &:active {
    opacity: 0.8;
    color: #45458b;
    transform: scale(1.15);
  }
`
