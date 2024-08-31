import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

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
  @media screen and (${breakpoints.sm}){
      margin-left:32px;
    }
`

export const ContainerRight = styled.div`
  display: flex;
  gap: 20px;
  img {
    margin-top: 5px;
  }
  @media screen and (${breakpoints.sm}){
      margin-left:36px;
      gap:10px;

      img{
        width:1.690rem;
      }
    }
`

export const ContainerText = styled.div`
  color: #555555;
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }
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
  color: ${props => (props.isActive ? '#9758A6' : '#555555')};
`

export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #9758a6;
`
