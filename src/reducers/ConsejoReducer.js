/* eslint-disable prettier/prettier */
import TYPES from '../type/ConsejoType'

const {
  ADD_CONCEJO,
  ADD_CONCEJO_SUCCESS,
  ADD_CONCEJO_ERROR,
  OBTENER_CONCEJO,
  OBTENER_CONCEJO_SUCCESS,
  OBTENER_CONCEJO_ERROR,
  OBTENER_CONCEJO_EDITAR,
  EDITAR_CONCEJO,
  EDITAR_CONCEJO_SUCCESS,
  EDITAR_CONCEJO_ERROR,
  DELETE_CONCEJO,
  DELETE_CONCEJO_SUCCESS,
  DELETE_CONCEJO_ERROR,
} = TYPES;

// cada reducer tiene su propio state
const initialState = {
  concejolista: [],
  loading: false,
  loadinglista: false,
  concejoeliminar: null,
  concejoeditar: null,
  error: null,
}

export const ConcejoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONCEJO:
      return {
        ...state,
        loading: action.payload,
      }
    case ADD_CONCEJO_SUCCESS:
      return {
        ...state,
        loading: false,
        concejolista: [...state.concejolista, action.payload]
      }
    case OBTENER_CONCEJO_EDITAR:
      return {
        ...state,
        concejoeditar: action.payload
      }
    case EDITAR_CONCEJO:
      return {
        ...state,
        loading: action.payload,
      }
    case EDITAR_CONCEJO_SUCCESS:
      const updatedConcejo = action.payload;
      const updatedConcejos = state.concejolista.map((concejo)=>
      concejo.ID === updatedConcejo.ID? updatedConcejo: concejo
      );
      return {
      ...state,
      concejolista:updatedConcejos,
      }
    case OBTENER_CONCEJO:
      return {
        ...state,
        loadinglista: action.payload,
      }
    case OBTENER_CONCEJO_SUCCESS:
      return {
        ...state,
        loadinglista: false,
        concejolista: action.payload
      }
    case DELETE_CONCEJO:
      return {
        ...state,
        concejoeliminar: action.payload,
      }
    case DELETE_CONCEJO_SUCCESS:
      return {
        ...state,
        concejolista: state.concejolista.filter(A => A.ID !== state.concejoeliminar),
        concejoeliminar: null
      }
    case ADD_CONCEJO_ERROR:
    case EDITAR_CONCEJO_ERROR:
    case OBTENER_CONCEJO_ERROR:
    case DELETE_CONCEJO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return { ...state }
  }
}
