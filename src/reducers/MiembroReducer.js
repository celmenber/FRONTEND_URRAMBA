/* eslint-disable prettier/prettier */

import TYPES from "src/type/MiembroType";


const {
    ADD_MIEMBRO,
    ADD_MIEMBRO_SUCCESS,
    ADD_MIEMBRO_ERROR,
    EDITAR_MIEMBRO,
    EDITAR_MIEMBRO_SUCCESS,
    EDITAR_MIEMBRO_ERROR,
    OBTENER_MIEMBRO,
    OBTENER_MIEMBRO_SUCCESS,
    OBTENER_MIEMBRO_ERROR,
    DELETE_MIEMBRO,
    DELETE_MIEMBRO_SUCCESS,
    DELETE_MIEMBRO_ERROR,
} = TYPES;

// cada reducer tiene su propio state
const initialState = {
    listaMiembro: [],
    loading: false,
    loadinglista: false,
    miembroeditar: null,
    miembroeliminar: null,
    error: null,
}

export const MiemboReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_MIEMBRO:
        return {
          ...state,
          loading: action.payload,
        }
      case ADD_MIEMBRO_SUCCESS:
        return {
          ...state,
          loading: false,
          listaMiembro: [...state.listaMiembro, action.payload]
        }
        case OBTENER_MIEMBRO:
            return {
                ...state,
                loadinglista: true,
            }
        case OBTENER_MIEMBRO_SUCCESS:
            return {
                ...state,
                loadinglista: false,
                listaMiembro: action.payload
            }
    
        case EDITAR_MIEMBRO:
            return {
                ...state,
                loading: action.payload,
            }
        case EDITAR_MIEMBRO_SUCCESS:
            return {
                ...state,
                loading: false,
                miembroeditar: null,
                listaMiembro: state.listaMiembro.map(E =>
                    E.EstadoServicioId === action.payload.EstadoServicioId ? E = action.payload : E
                )
            }
        case DELETE_MIEMBRO:
            return {
                ...state,
                miembroeliminar: action.payload,
            }
        case DELETE_MIEMBRO_SUCCESS:
            return {
                ...state,
                listaMiembro: state.listaMiembro.filter(E => E.Id !== state.miembroeliminar),
                miembroeliminar: null
            }
        case ADD_MIEMBRO_ERROR:
        case OBTENER_MIEMBRO_ERROR:
        case EDITAR_MIEMBRO_ERROR:
        case DELETE_MIEMBRO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return { ...state }
    }
}
