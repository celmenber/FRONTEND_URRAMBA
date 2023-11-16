/* eslint-disable prettier/prettier */
import { lazy } from 'react'

const Dashboard = lazy(() => import('./views/dashboard/Dashboard'))
/* const adminUsuarios = lazy(() => import('./views/pages/usuarios/AdminUsuarios')) */

const routes = [
  { path: '/', exact: false, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
 /*  { path: '/usuarios/AdminUsuarios', name: 'Page adminUsuarios', component: adminUsuarios }, */
]

export default routes
