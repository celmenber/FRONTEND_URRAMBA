/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilHome,
  cilCog,
  cilSpeech,
} from '@coreui/icons'
import { CNavItem, CNavGroup } from '@coreui/react'

const administrador_nav = [
  {
    component: CNavItem,
    name: 'Inicio',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Concejos Comunitarios',
    to: '/concejos',
    icon: <CIcon icon={cilSpeech} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Familias',
    to: '/familias',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
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
      {
        component: CNavItem,
        name: 'Repórtes',
        to: '/familias/reportes',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Configuración',
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
        name: 'Admin Asociaciones',
        to: '/admin/asociaciones',
      },
      {
        component: CNavItem,
        name: 'Parámetros',
        to: '/admin/parametros',
      },
    ],
  },
]

const operadores_nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  
]

const encuestadores_nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  
]

export { administrador_nav, operadores_nav, encuestadores_nav }
