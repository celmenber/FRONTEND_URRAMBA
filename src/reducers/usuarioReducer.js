/* eslint-disable prettier/prettier */
import { TYPES } from '../type/UsuarioType'

const {
    ADD_USUARIO,
    ADD_USUARIO_SUCCESS,
    ADD_USUARIO_ERROR,
    OBTENER_USUARIO,
    OBTENER_USUARIO_SUCCESS,
    OBTENER_USUARIO_ERROR,
    OBTENER_USUARIO_EDITAR,
    EDITAR_USUARIO,
    EDITAR_USUARIO_SUCCESS,
    EDITAR_USUARIO_ERROR,
    ACTIVAR_USUARIO,
    ACTIVAR_USUARIO_SUCCESS,
    CAMBIO_CLAVE_USUARIO,
    CAMBIO_CLAVE_USUARIO_SUCCESS,
    CAMBIO_CLAVE_USUARIO_ERROR,
    DELETE_USUARIO,
    DELETE_USUARIO_SUCCESS,
    DELETE_USUARIO_ERROR,
    OBTENER_PERFIL,
    OBTENER_PERFIL_SUCCESS,
    OBTENER_PERFIL_ERROR,
} = TYPES;

// cada reducer tiene su propio state
const initialState = {
    usuariolista: [],
    Perfil: [],
    loading: false,
    loadinglista: false,
    loadingactivar: false,
    usuarioeliminar: null,
    usuarioeditar: null,
    error: null,
}

export const UsuarioReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_USUARIO:
      return {
        ...state,
          loading: action.payload,
      }
      case ADD_USUARIO_SUCCESS:
          return {
              ...state,
              loading: false,
              usuariolista: [...state.usuariolista, action.payload]
          }
      case OBTENER_USUARIO_EDITAR:
          return {
              ...state,
              usuarioeditar: action.payload
          }
      case EDITAR_USUARIO:
          return {
              ...state,
              loading: action.payload,
          }
      case EDITAR_USUARIO_SUCCESS:
          return {
              ...state,
              loading: false,
              usuarioeditar: null,
              usuariolista: state.usuariolista.map(U =>
                  U.ID_USER === action.payload.ID_USER ? U = action.payload : U)
          }
      case ACTIVAR_USUARIO:
          return {
              ...state,
              loadingactivar: action.payload,
          }
      case ACTIVAR_USUARIO_SUCCESS:
          return {
              ...state,
               usuariolista: state.usuariolista.map(U =>
                  U.ID_USER === action.payload.ID_USER ? U = action.payload : U)
          }
      case CAMBIO_CLAVE_USUARIO:
          return {
              ...state,
              loading: action.payload,
          }
      case CAMBIO_CLAVE_USUARIO_SUCCESS:
          return {
              ...state,
              loading: action.payload,
              /*  usuariolista: state.usuariolista.map(U =>
                  U.ID_USER === action.payload.ID_USER ? U = action.payload : U) */
          }
      case OBTENER_USUARIO:
          return {
              ...state,
              loadinglista: action.payload,
          }
      case OBTENER_USUARIO_SUCCESS:
          return {
              ...state,
              loadinglista: false,
              usuariolista: action.payload
          }

      case OBTENER_PERFIL:
          return {
              ...state,
              loadinglista: action.payload,
          }
      case OBTENER_PERFIL_SUCCESS:
          return {
              ...state,
              loadinglista: false,
              Perfil: action.payload
          }
      case DELETE_USUARIO:
          return {
              ...state,
              usuarioeliminar: action.payload,
          }
      case DELETE_USUARIO_SUCCESS:
          return {
              ...state,
              usuariolista: state.usuariolista.filter(U => U.UsuarioId !== state.usuarioeliminar),
              usuarioeliminar: null
          }
      case ADD_USUARIO_ERROR:
      case EDITAR_USUARIO_ERROR:
      case CAMBIO_CLAVE_USUARIO_ERROR:
      case OBTENER_USUARIO_ERROR:
      case OBTENER_PERFIL_ERROR:
      case DELETE_USUARIO_ERROR:
          return {
              ...state,
              loading: false,
              error: action.payload
          }
      default:
          return { ...state }
  }
}
