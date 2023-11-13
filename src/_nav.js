import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilHome,
  cilSpa,
  cilNotes,
  cilCog,
  cilPuzzle,
  cilSpeedometer,
  cilBarChart,
} from '@coreui/icons'
import { CNavItem, CNavGroup } from '@coreui/react'

const administrador_nav = [
  {
    component: CNavItem,
    name: 'inicio',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Configuración',
    to: '/Usuarios',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Admin Usuarios',
        to: '/usuarios/adminUsuarios',
      },
    ],
  },
]

const Concejo_nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
]

export { administrador_nav, Concejo_nav }
