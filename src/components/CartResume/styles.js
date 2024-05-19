import styled from 'styled-components'

export const Container = styled.div`
border-radius: 20px;
background: #FFF;
box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 15px;

.container-top{
  display: grid;
  grid-gap: 10px 50px;
  grid-template-areas: 
  'title title'
  'items items-price'
  'delivery-tax delivery-tax-price';
  


.title{
grid-area: title;
margin-bottom: 20px;
}

.items{
  grid-area: items;
  margin-bottom: 15px;
}

.items-price{
  grid-area: items-price;
}

.delivery-tax{
  grid-area: delivery-tax;
}

.delivery-tax-price{
  grid-area: delivery-tax-price;
}
}

.container-bottom{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 50px;
}


`



