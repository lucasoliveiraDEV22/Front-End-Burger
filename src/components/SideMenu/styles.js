import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3c3c3c;
  box-shadow: 0px 0px 14px 0px #00000026;
  min-height: 100vh;
  width: 300px;
  top: 0;
  left: 0;

  hr {
    margin: 85px 18px 70px 18px;
  }

  img {
    color: #ffffff;
    height: 34px;
  }
`

export const OrganizeOrders = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.bordaativo && '#565656'};
  margin-left: 4px;
  width: 95%;
  height: 56px;
  padding-left: 8px;
`

export const LinkItem = styled(Link)`
  font-size: 16px;
  cursor: pointer;
  margin-left: 9px;
  font-weight: 400;
  line-height: 19px;
  text-decoration: none;
  color: #ffffff;
`
