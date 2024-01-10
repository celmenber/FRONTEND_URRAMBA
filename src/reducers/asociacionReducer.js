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

export const AsociacionReducer = (state = initialState, action) => {
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
        asociacionlista: [...state.asociacionlista, action.payload]
      }
    case OBTENER_ASOCIACION_EDITAR:
      return {
        ...state,
        asociacioneditar: action.payload
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
        asociacioneditar: null,
        asociacionlista: state.asociacionlista.map(A =>
          A.ID === action.payload.ID ? A = action.payload : A
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
        asociacionlista: action.payload
      }
    case DELETE_ASOCIACION:
      return {
        ...state,
        asociacioneliminar: action.payload,
      }
    case DELETE_ASOCIACION_SUCCESS:
      return {
        ...state,
        asociacionlista: state.asociacionlista.filter(A => A.ID !== state.asociacioneliminar),
        asociacioneliminar: null
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
