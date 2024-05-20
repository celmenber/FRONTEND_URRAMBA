/* eslint-disable prettier/prettier */
import { lazy } from 'react'
const Dashboard = lazy(() => import('./views/dashboard/Dashboard'))
const Usuarios = lazy(() => import('./views/pages/usuarios/AdminUsuarios'))
const Asociaciones = lazy(() => import('./views/form/FormAsociaciones'))
const Empleados = lazy(() => import('./views/form/FormEmpleados'))
const Concejos = lazy(() => import('./views/form/FormConcejo'))
const AutoridadT = lazy(() => import('./views/form/FormAutoridadT'))
const Parametros = lazy(() => import('./views/parametros/Parametros'))
const Reportes = lazy(() => import('./views/parametros/Parametros'))
const JefeHogar = lazy(() => import('./views/familias/JefeHogar'))
const NucleoFamiliar = lazy(() => import('./views/familias/NucleoFamiliar'))
const TrasladoMiembro = lazy(() => import('./views/familias/TrasladoMiembro'))
const Miembros = lazy(() => import('./views/form/FormMiembros'))
const Caracterizacion = lazy(() => import('./views/caracterizacion/Formcaracterizacion'))

const routes = [
  { path: '/', exact: false, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/reportes', name: 'Reportes', component: Reportes },
  { path: '/admin/autoridadT', name: 'AutoridadT', component: AutoridadT },
  { path: '/familias/jefehogar', name: 'JefeHogar', component: JefeHogar },
  { path: '/familias/nucleos/:id?', name: 'Nucleo', component: NucleoFamiliar },
  { path: '/familias/trasladamiembro/:id?', name: 'Nucleo', component: TrasladoMiembro },
  { path: '/familias/nucleo', name: 'Nucleo', component: NucleoFamiliar },
  { path: '/admin/usuarios', name: 'Usuarios', component: Usuarios },
  { path: '/admin/concejos', name: 'Concejos', component: Concejos },
  { path: '/admin/asociaciones', name: 'Asociaciones', component: Asociaciones },
  { path: '/admin/parametros', name: 'Parametros', component: Parametros },
  { path: '/admin/empleados', name: 'Empleados', component: Empleados },
  { path: '/admin/Miembros', name: 'Miembros', component: Miembros },
  { path: '/caracterizacion/caracterizacion', name: 'caracterizacion', component: Caracterizacion },
]

export default routes
