import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState } from 'react'
import apiCodeBurguer from '../../../services/api'
import { formatDate } from '../../../utils/formatDate'
import status from './order-select'
import { Row } from './row'
import { Container, ContainerStatus, LinkStatus } from './styles'

export function Orders() {
  const [orders, setOrders] = useState([])
  const [filterOrders, setFilterOrders] = useState([])
  const [activeStatus, setActiveStatus] = useState(1)
  const [row, setRow] = useState([])

  useEffect(() => {
    async function loadOrders() {
      const { data } = await apiCodeBurguer.get('orders')
      setOrders(data)
      setFilterOrders(data)
    }
    loadOrders()
  }, [])
  console.log(orders)

  function createData(order) {
    return {
      name: order.user.name,
      id: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      product: order.products
    }
  }

  useEffect(() => {
    const rows = filterOrders.map(order => createData(order))
    setRow(rows)
  }, [filterOrders])
  console.log(row)

  useEffect(() => {
    if (activeStatus === 1) {
      setFilterOrders(orders)
    } else {
      const indexStatus = status.findIndex(status => status.id === activeStatus)

      const newFilterOrder = orders.filter(
        order => order.status === status[indexStatus].value
      )
      setFilterOrders(newFilterOrder)
    }
  }, [orders])

  function filterStatus(status) {
    if (status.id === 1) {
      setFilterOrders(orders)
    } else {
      const newFilter = orders.filter(
        pedidos => pedidos.status === status.value
      )
      setFilterOrders(newFilter)
    }
    setActiveStatus(status.id)
  }

  return (
    <Container>
      <ContainerStatus>
        {status &&
          status.map(valueStatus => (
            <LinkStatus
              key={valueStatus.id}
              ativoStatus={valueStatus.id === activeStatus}
              onClick={() => filterStatus(valueStatus)}
            >
              {valueStatus.label}
            </LinkStatus>
          ))}
      </ContainerStatus>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {row.map(row => (
              <Row
                key={row.id}
                row={row}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
