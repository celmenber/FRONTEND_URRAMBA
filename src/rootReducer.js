/* eslint-disable prettier/prettier */
import { combineReducers } from '@reduxjs/toolkit'
import {
  changeState,
  AuthReducer,
  UsuarioReducer,
  ParametrosReducer,
  AsociacionReducer,
  EmpleadoReducer,
  AutoridadTReducer,
  ConcejoReducer,
  MiemboReducer,
  } from './reducers'


export const rootReducer = combineReducers({
  change: changeState,
  Auth: AuthReducer,
  Usuario: UsuarioReducer,
  Parametros: ParametrosReducer,
  Asociacion: AsociacionReducer,
  Empleado: EmpleadoReducer,
  AutoridadT: AutoridadTReducer,
  Concejo: ConcejoReducer,
  Miembro: MiemboReducer,
})
