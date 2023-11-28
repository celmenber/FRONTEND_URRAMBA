/* eslint-disable prettier/prettier */
import { lazy } from 'react'
import Concejos from './views/concejos/Concejos'
import Usuarios from './views/pages/usuarios/AdminUsuarios'
import Asociaciones from './views/asociaciones/Asociaciones'
import Parametros from './views/parametros/Parametros'
import JefeHogar from './views/familias/JefeHogar'
import NucleosFamiliares from './views/familias/NucleosFamiliares'
import NucleoFamiliar from './views/familias/NucleoFamiliar'

const Dashboard = lazy(() => import('./views/dashboard/Dashboard'))
/* const adminUsuarios = lazy(() => import('./views/pages/usuarios/AdminUsuarios')) */

const routes = [
  { path: '/', exact: false, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/concejos', name: 'Concejos', component: Concejos },
  { path: '/familias/jefehogar', name: 'JefeHogar', component: JefeHogar },
  { path: '/familias/nucleos', name: 'Nucleo', component: NucleosFamiliares },
  { path: '/familias/nucleo', name: 'Nucleo', component: NucleoFamiliar },
  { path: '/familias/reportes', name: 'Reportes', component: Concejos },
  { path: '/admin/usuarios', name: 'Usuarios', component: Usuarios },
  { path: '/admin/asociaciones', name: 'Asociaciones', component: Asociaciones },
  { path: '/admin/parametros', name: 'Parametros', component: Parametros },
  /*  { path: '/usuarios/AdminUsuarios', name: 'Page adminUsuarios', component: adminUsuarios }, */
]

export default routes
