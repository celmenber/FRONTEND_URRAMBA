/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilHome, cilCog, cilGroup, cilQrCode, cilInstitution } from '@coreui/icons'
import { CNavItem, CNavGroup } from '@coreui/react'

const administrador_nav = [
  {
    component: CNavItem,
    name: 'INICIO',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'CONFIGURACIÓN',
    to: '/dashboard/admin',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Admin Usuarios',
        to: '/admin/usuarios',
      },
      {
        component: CNavItem,
        name: 'Empleados',
        to: '/admin/asociaciones',
      },
      {
        component: CNavItem,
        name: 'Admin Asociacion',
        to: '/admin/asociaciones',
      },
      {
        component: CNavItem,
        name: 'Parámetros',
        to: '/admin/parametros',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'CONCEJOS',
    to: '/concejo',
    icon: <CIcon icon={cilInstitution} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Autoridad Tradicional',
        to: '/familias/jefehogar',
      },
      {
        component: CNavItem,
        name: 'Miembros',
        to: '/familias/nucleos',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'FAMILIAS',
    to: '/familias',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Jefe de Hogar',
        to: '/familias/jefehogar',
      },
      {
        component: CNavItem,
        name: 'Nucleo Familiar',
        to: '/familias/nucleos',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'REPORTES',
    to: '/concejos',
    icon: <CIcon icon={cilQrCode} customClassName="nav-icon" />,
  },

]

const operadores_nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'FAMILIAS',
    to: '/familias',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Jefe de Hogar',
        to: '/familias/jefehogar',
      },
      {
        component: CNavItem,
        name: 'Nucleo Familiar',
        to: '/familias/nucleos',
      },
    ],
  },
]


export { administrador_nav, operadores_nav }
