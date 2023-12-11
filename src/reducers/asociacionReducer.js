/* eslint-disable prettier/prettier */
import { TYPES } from '../type/AsociacionType'

const {
  ADD_ASOCIACION,
  ADD_ASOCIACION_SUCCESS,
  ADD_ASOCIACION_ERROR,
  OBTENER_ASOCIACION,
  OBTENER_ASOCIACION_SUCCESS,
  OBTENER_ASOCIACION_ERROR,
  OBTENER_ASOCIACION_EDITAR,
  EDITAR_ASOCIACION,
  EDITAR_ASOCIACION_SUCCESS,
  EDITAR_ASOCIACION_ERROR,
  DELETE_ASOCIACION,
  DELETE_ASOCIACION_SUCCESS,
  DELETE_ASOCIACION_ERROR,
} = TYPES;

// cada reducer tiene su propio state
const initialState = {
  asociacionlista: [],
  loading: false,
  loadinglista: false,
  asociacioneliminar: null,
  asociacioneditar: null,
  error: null,
}

export const asociacionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ASOCIACION:
      return {
        ...state,
        loading: action.payload,
      }
    case ADD_ASOCIACION_SUCCESS:
      return {
        ...state,
        loading: false,
        usuariolista: [...state.usuariolista, action.payload]
      }
    case OBTENER_ASOCIACION_EDITAR:
      return {
        ...state,
        usuarioeditar: action.payload
      }
    case EDITAR_ASOCIACION:
      return {
        ...state,
        loading: action.payload,
      }
    case EDITAR_ASOCIACION_SUCCESS:
      return {
        ...state,
        loading: false,
        usuarioeditar: null,
        usuariolista: state.usuariolista.map(U =>
          U.UsuarioId === action.payload.UsuarioId ? U = action.payload : U
        )
      }
    case OBTENER_ASOCIACION:
      return {
        ...state,
        loadinglista: action.payload,
      }
    case OBTENER_ASOCIACION_SUCCESS:
      return {
        ...state,
        loadinglista: false,
        usuariolista: action.payload
      }
    case DELETE_ASOCIACION:
      return {
        ...state,
        usuarioeliminar: action.payload,
      }
    case DELETE_ASOCIACION_SUCCESS:
      return {
        ...state,
        usuariolista: state.usuariolista.filter(U => U.UsuarioId !== state.usuarioeliminar),
        usuarioeliminar: null
      }
    case ADD_ASOCIACION_ERROR:
    case EDITAR_ASOCIACION_ERROR:
    case OBTENER_ASOCIACION_ERROR:
    case DELETE_ASOCIACION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return { ...state }
  }
}
