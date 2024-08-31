import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 50px 0;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const CategoryImg = styled.img``

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`

export const NameSnack = styled.p`
  /* Headline 6 Bold */
  color: #424242;
  font-family: 'Source Sans Pro';
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 26.4px */
`

export const Price = styled.p`
color: #212121;
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
`

export const Image = styled.img`
  width: 250px;
  border-radius: 15px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  margin-top: 16px;
  width: 250px;
  height: 66px;
  background: #9758a6;
  border-radius: 8px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
