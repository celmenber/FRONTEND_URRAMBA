/* eslint-disable prettier/prettier */
import { TYPES } from '../type/CaracterizacionType'

const {
  ADD_CARATERIZACION,
  ADD_CARATERIZACION_SUCCESS,
  ADD_CARATERIZACION_ERROR,
  OBTENER_CARATERIZACION,
  OBTENER_CARATERIZACION_SUCCESS,
  OBTENER_CARATERIZACION_ERROR,
  OBTENER_CARATERIZACION_EDITAR,
  EDITAR_CARATERIZACION,
  EDITAR_CARATERIZACION_SUCCESS,
  EDITAR_CARATERIZACION_ERROR,
  DELETE_CARATERIZACION,
  DELETE_CARATERIZACION_SUCCESS,
  DELETE_CARATERIZACION_ERROR,
} = TYPES;

// cada reducer tiene su propio state
const initialState = {
  Caracterizacionlista: [],
  loading: false,
  loadinglista: false,
  Caracterizacioneliminar: null,
  Caracterizacioneditar: null,
  error: null,
}

export const CaracterizacionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARATERIZACION:
      return {
        ...state,
        loading: action.payload,
      }
    case ADD_CARATERIZACION_SUCCESS:
      return {
        ...state,
        loading: false,
        Caracterizacionlista: [...state.Caracterizacionlista, action.payload]
      }
    case OBTENER_CARATERIZACION_EDITAR:
      return {
        ...state,
        Caracterizacioneditar: action.payload
      }
    case EDITAR_CARATERIZACION:
      return {
        ...state,
        loading: action.payload,
      }


    case EDITAR_CARATERIZACION_SUCCESS:
      const updateCaracterizacion = action.payload;
      const updateCaracterizaciones = state.Caracterizacionlista.map((CARATERIZACION)=>
      CARATERIZACION.ID === updateCaracterizacion.ID? updateCaracterizacion: CARATERIZACION
      );
      return {
        ...state,
        loading: false,
        Caracterizacionlista:updateCaracterizaciones
      }
    case OBTENER_CARATERIZACION:
      return {
        ...state,
        loadinglista: action.payload,
      }
    case OBTENER_CARATERIZACION_SUCCESS:
      return {
        ...state,
        loadinglista: false,
        Caracterizacionlista: action.payload
      }
    case DELETE_CARATERIZACION:
      return {
        ...state,
        Caracterizacioneliminar: action.payload,
      }
    case DELETE_CARATERIZACION_SUCCESS:
      return {
        ...state,
        Caracterizacionlista: state.Caracterizacionlista.filter(C => C.ID !== state.Caracterizacioneliminar),
        Caracterizacioneliminar: null
      }
    case ADD_CARATERIZACION_ERROR:
    case EDITAR_CARATERIZACION_ERROR:
    case OBTENER_CARATERIZACION_ERROR:
    case DELETE_CARATERIZACION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return { ...state }
  }
}
