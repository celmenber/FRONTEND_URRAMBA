/* eslint-disable prettier/prettier */

import TYPES from "src/type/JefeHogarType";




const {
    ADD_JEFE_HOGAR,
    ADD_JEFE_HOGAR_SUCCESS,
    ADD_JEFE_HOGAR_ERROR,
    EDITAR_JEFE_HOGAR,
    EDITAR_JEFE_HOGAR_SUCCESS,
    EDITAR_JEFE_HOGAR_ERROR,
    OBTENER_JEFE_HOGAR,
    OBTENER_JEFE_HOGAR_SUCCESS,
    OBTENER_JEFE_HOGAR_ERROR,
    DELETE_JEFE_HOGAR,
    DELETE_JEFE_HOGAR_SUCCESS,
    DELETE_JEFE_HOGAR_ERROR,
} = TYPES;


const initialState = {
    listaJefeHogar: [],
    loading: false,
    loadinglista: false,
    jefehogareditar: null,
    jefehogareliminar: null,
    error: null,
}

export const JefeHogarReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_JEFE_HOGAR:
        return {
          ...state,
          loading: action.payload,
        }
      case ADD_JEFE_HOGAR_SUCCESS:
        return {
          ...state,
          loading: false,
          listaJefeHogar: [...state.listaJefeHogar, action.payload]
        }
        case OBTENER_JEFE_HOGAR:
            return {
                ...state,
                loadinglista: action.payload,
            }
        case OBTENER_JEFE_HOGAR_SUCCESS:
            return {
                ...state,
                loadinglista: false,
                listaJefeHogar: action.payload
            }
    
        case EDITAR_JEFE_HOGAR:
            return {
                ...state,
                loading: action.payload,
            }
        case EDITAR_JEFE_HOGAR_SUCCESS:
                const updatedJefeHogar = action.payload; 
                const updatedJefeHogares = state.listaJefeHogar.map((jefeHogar) =>
                jefeHogar.ID === updatedJefeHogar.ID ? updatedJefeHogar : jefeHogar
                );
              
                return {
                  ...state,
                  listaJefeHogar: updatedJefeHogares,
                 
                };
        case DELETE_JEFE_HOGAR:
            return {
                ...state,
                jefehogareliminar: action.payload,
            }
            case DELETE_JEFE_HOGAR_SUCCESS:
           
                return {
                    ...state,
                    listaJefeHogar: state.listaJefeHogar.filter(A => A.ID !== state.jefehogareliminar),
                    jefehogareliminar: null
                  }
        case ADD_JEFE_HOGAR_ERROR:
        case OBTENER_JEFE_HOGAR_ERROR:
        case EDITAR_JEFE_HOGAR_ERROR:
        case DELETE_JEFE_HOGAR_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return { ...state }
    }
}