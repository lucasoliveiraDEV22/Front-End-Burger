import ProductIcon from '../../../assets/product-icon.png'
import Paths from '../../../constants/path'
import OrderIcon from '../../../assets/order-icon.png'
import AddProduct from '../../../assets/AddProduct.png'

export const MenuList=[
    {
        id:1,
        label:'Pedidos',
        link:Paths.Order,
        img:OrderIcon
    },
    {
        id:2,
        label:'Produtos',
        link:Paths.Product,
        img:ProductIcon
    },
    {
        id:3,
        label:'Adicionar Produto',
        link:Paths.AddProduct,
        img:AddProduct
    }

]