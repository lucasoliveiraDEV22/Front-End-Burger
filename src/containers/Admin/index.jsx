import { useLocation } from 'react-router-dom'
import { SideMenu } from '../../components'
import paths from '../../constants/path'
import AddProduct from './AddProduct/index'
import EditProduct from './EditProduct'
import { Orders } from './Orders'
import ProductList from './ProductList'
import { Container } from './styles'

import PropTypes from 'prop-types'

export function Admin() {
  const { pathname } = useLocation()
  // const path = location.pathname

  return (
    <Container>
      <SideMenu />
      <div style={{ padding: '20px', width: '100%' }}>
        {pathname === paths.Order && <Orders />}
        {pathname === paths.Product && <ProductList />}
        {pathname === paths.AddProduct && <AddProduct />}
        {pathname === paths.EditProduct && <EditProduct />}
      </div>
    </Container>
  )
}

Admin.propTypes = {
  path: PropTypes.string
}
