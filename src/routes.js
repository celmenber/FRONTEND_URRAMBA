/* eslint-disable prettier/prettier */
import { lazy } from 'react'
import Concejos from './views/concejos/Concejos'
import Usuarios from './views/usuarios/Usuarios'
import Asociaciones from './views/asociaciones/Asociaciones'
import Parametros from './views/parametros/Parametros'

const Dashboard = lazy(() => import('./views/dashboard/Dashboard'))
/* const adminUsuarios = lazy(() => import('./views/pages/usuarios/AdminUsuarios')) */

const routes = [
  { path: '/', exact: false, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/concejos', name: 'Concejos', component: Concejos },
  { path: '/familias/jefe', name: 'JefeHogar', component: Concejos },
  { path: '/familias/nucleos', name: 'Nucleo', component: Concejos },
  { path: '/familias/reportes', name: 'Reportes', component: Concejos },
  { path: '/admin/usuarios', name: 'Usuarios', component: Usuarios },
  { path: '/admin/asociaciones', name: 'Asociaciones', component: Asociaciones },
  { path: '/admin/parametros', name: 'Parámetros', component: Parametros },
 /*  { path: '/usuarios/AdminUsuarios', name: 'Page adminUsuarios', component: adminUsuarios }, */
 
]

export default routes
