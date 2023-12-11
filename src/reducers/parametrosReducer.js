/* eslint-disable prettier/prettier */
import { TYPES } from '../type/ParametrosType'
const {
      OBTENER_MUNICIPIO,
      OBTENER_MUNICIPIO_SUCCESS,
      OBTENER_MUNICIPIO_ERROR,
   } = TYPES

// cada reducer tiene su propio state
const initialState = {
  municipios: [],
  loading: false,
  loadinglista: false,
  error: null,
}

export const parametrosReducer = (state = initialState, action) => {
  switch (action.type) {
    case OBTENER_MUNICIPIO:
      return {
        ...state,
        loadinglista: action.payload,
      }
    case OBTENER_MUNICIPIO_SUCCESS:
      return {
        ...state,
        loadinglista: false,
        municipios: action.payload
      }
   // case ADD_USUARIO_ERROR:
 //   case EDITAR_USUARIO_ERROR:
    case OBTENER_MUNICIPIO_ERROR:
   // case DELETE_USUARIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return { ...state }
  }
}
