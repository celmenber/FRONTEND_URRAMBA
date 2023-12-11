/* eslint-disable prettier/prettier */
import { combineReducers } from '@reduxjs/toolkit'
import {
  changeState,
  AuthReducer,
  UsuarioReducer,
  parametrosReducer,
  asociacionReducer
  } from './reducers'


export const rootReducer = combineReducers({
  change: changeState,
  Auth: AuthReducer,
  Usuario: UsuarioReducer,
  Parametros: parametrosReducer,
  Asociacion: asociacionReducer
})
