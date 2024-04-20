/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilHome, cilCog, cilGroup, cilQrCode, cilInstitution, cilPrint, cilDescription } from '@coreui/icons'
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
        to: '/admin/empleados',
      },
      {
        component: CNavItem,
        name: 'Admin Asociacion',
        to: '/admin/asociaciones',
      },
     /*  {
        component: CNavItem,
        name: 'Parámetros',
        to: '/admin/parametros',
      }, */
    ],
  },
  {
    component: CNavGroup,
    name: 'CONCEJOS',
    to: '/dashboard/admin',
    icon: <CIcon icon={cilInstitution} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Admin Concejos',
        to: '/admin/concejos',
      },
      {
        component: CNavItem,
        name: 'Autoridad Afro',
        to: '/admin/autoridadT',
      },
      {
        component: CNavItem,
        name: 'Miembros Consejo',
        to: '/admin/Miembros',
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
    name: 'CARACTERIZACION',
    to: '/caracterizacion/caracterizacion',
    icon: <CIcon icon={cilQrCode} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'REPORTES',
    to: '/concejos',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
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
  {
    component: CNavItem,
    name: 'CARACTERIZACION',
    to: '/caracterizacion/caracterizacion',
    icon: <CIcon icon={cilQrCode} customClassName="nav-icon" />,
  },
]


export { administrador_nav, operadores_nav }
