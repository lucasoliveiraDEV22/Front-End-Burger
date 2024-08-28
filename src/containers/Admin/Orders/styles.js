import styled from 'styled-components'
import ReactSelect from 'react-select'

export const Container = styled.div`
  background-color: #efefef;
  min-height: 100vh;
`

export const Imagem = styled.img`
  width: 60px;
  border-radius: 10px;
`

export const Select = styled(ReactSelect)`
  width: 250px;

  .css-13cymwt-control {
    cursor: pointer;
  }
`

export const ContainerStatus = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 20px 0;
`

export const LinkStatus = styled.a`
  color: #323d5d;
  cursor: pointer;
  font-size: 15px;
  font-weight: ${props => (props.ativoStatus ? 'bold' : '400px')};
  border-bottom: ${props => props.ativoStatus && '2px solid #9758A6'};
  padding-bottom: 5px;
`