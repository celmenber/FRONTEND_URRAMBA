/* eslint-disable prettier/prettier */
import  TYPES  from '../type/ParametrosType'
const {
      OBTENER_MUNICIPIO,
      OBTENER_MUNICIPIO_SUCCESS,
      OBTENER_MUNICIPIO_ERROR,
      OBTENER_BARRIOVEREDA,
      OBTENER_BARRIOVEREDA_SUCCESS,
      OBTENER_BARRIOVEREDA_ERROR,
      OBTENER_CORREGIMIENTO,
      OBTENER_CORREGIMIENTO_SUCCESS,
      OBTENER_CORREGIMIENTO_ERROR,
      OBTENER_TIPODOCUMENTO,
      OBTENER_TIPODOCUMENTO_SUCCESS,
      OBTENER_TIPODOCUMENTO_ERROR,
   } = TYPES

// cada reducer tiene su propio state
const initialState = {
  municipios: [],
  barriosveredas: [],
  corregimientos: [],
  tipodocumentos: [],
  loading: false,
  loadinglista: false,
  error: null,
}

export const ParametrosReducer = (state = initialState, action) => {
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
    case OBTENER_BARRIOVEREDA:
      return {
        ...state,
        loadinglista: action.payload,
      }
    case OBTENER_BARRIOVEREDA_SUCCESS:
      return {
        ...state,
        loadinglista: false,
        barriosveredas: action.payload
      }
    case OBTENER_TIPODOCUMENTO:
      return {
        ...state,
        loadinglista: action.payload,
      }
    case OBTENER_TIPODOCUMENTO_SUCCESS:
      return {
        ...state,
        loadinglista: false,
        tipodocumentos: action.payload
      }
    case OBTENER_CORREGIMIENTO:
      return {
        ...state,
        loadinglista: action.payload,
      }
    case OBTENER_CORREGIMIENTO_SUCCESS:
      return {
        ...state,
        loadinglista: false,
        corregimientos: action.payload
      }

    case OBTENER_MUNICIPIO_ERROR:
    case OBTENER_BARRIOVEREDA_ERROR:
    case OBTENER_TIPODOCUMENTO_ERROR:
    case OBTENER_CORREGIMIENTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return { ...state }
  }
}
