import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  filter: drop-shadow(0px 10px 40px rgba(0, 0, 0, 0.03));
  width: max-content;
  border-radius: 20px;
  padding: 20px;
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 20px;
  padding-bottom: 20px;
  margin-bottom: 15px;
  grid-gap: 10px 15px;

  img {
    width: 152px;
    height: 167px;
    border-radius: 10px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }

    p {
      margin-top: 5px;
    }
  }
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 20px;
  border-bottom: 1px solid #b5b5b5;
  padding-bottom: 20px;
  margin-bottom: 15px;

  p {
    color: #9a9a9d;
    font-size: 17px;
  }
`

export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`

export const Bin = styled.button`
  background: transparent;
  cursor: pointer;
  margin-bottom: 75px;
  position: relative;
  bottom: 37px;
  left: -23px;

  img {
    width: 50px;
    height: 50px;
  }
`


