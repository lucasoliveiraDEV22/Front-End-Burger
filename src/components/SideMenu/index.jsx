import LogoutIcon from '@mui/icons-material/Logout'
import { useLocation } from 'react-router-dom'
import { MenuList } from './MenuList/menuList.jsx'
import { Container, LinkItem, OrganizeOrders } from './styles'

export function SideMenu() {
  const { pathname } = useLocation()

  const handleLogout = () => {
    localStorage.removeItem('codeburger:userData')
  }

  return (
    <Container>
      <hr></hr>
      {MenuList.map(item => (
        <OrganizeOrders key={item.id} bordaativo={pathname === item.link}>
          <img src={item.img} />
          <LinkItem to={item.link}>{item.label}</LinkItem>
        </OrganizeOrders>
      ))}
      <hr></hr>

      <OrganizeOrders style={{ position: 'fixed', bottom: '25px' }}>
        <LogoutIcon />
        <LinkItem to="/login" onClick={handleLogout}>
          Sair
        </LinkItem>
      </OrganizeOrders>
    </Container>
  )
}
