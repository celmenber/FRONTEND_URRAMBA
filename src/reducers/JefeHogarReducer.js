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
    OBTENER_JEFE_HOGAR_BY_ID,
    OBTENER_JEFE_HOGAR_BY_ID_SUCCESS,
    OBTENER_JEFE_HOGAR_BY_ID_ERROR,
    TRASLADO_JEFE_HOGAR,
    TRASLADO_JEFE_HOGAR_SUCCESS,
    TRASLADO_JEFE_HOGAR_ERROR,
    BUSQUEDA_JEFE_HOGAR,
    BUSQUEDA_JEFE_HOGAR_SUCCESS,
    BUSQUEDA_JEFE_HOGAR_ERROR,
    DELETE_JEFE_HOGAR,
    DELETE_JEFE_HOGAR_SUCCESS,
    DELETE_JEFE_HOGAR_ERROR,
} = TYPES;


const initialState = {
    listaJefeHogar: [],
    jefeHogar:[],
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

        case BUSQUEDA_JEFE_HOGAR:
            return {
                ...state,
                loadinglista: action.payload,
            }
        case BUSQUEDA_JEFE_HOGAR_SUCCESS:
            return {
                ...state,
                loadinglista: false,
                listaJefeHogar: action.payload
            }

         case OBTENER_JEFE_HOGAR_BY_ID:
            return {
                ...state,
                loadinglista: action.payload,
            }
        case OBTENER_JEFE_HOGAR_BY_ID_SUCCESS:
            return {
                ...state,
                loadinglista: false,
                jefeHogar: action.payload
            }

        case EDITAR_JEFE_HOGAR:
            return {
                ...state,
                loading: action.payload,
            }
        case EDITAR_JEFE_HOGAR_SUCCESS:
            return {
                  ...state,
                  loading: false,
                  jefehogareditar: null,
                  listaJefeHogar: state.listaJefeHogar.map(JF =>
                      JF.ID === action.payload.ID ? JF = action.payload : JF
                  )
              };
        case TRASLADO_JEFE_HOGAR:
            return {
                ...state,
                loading: action.payload,
            }
        case TRASLADO_JEFE_HOGAR_SUCCESS:
             return {
                  ...state,
                loadinglista: false,
                listaJefeHogar: action.payload
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
        case OBTENER_JEFE_HOGAR_BY_ID_ERROR:
        case BUSQUEDA_JEFE_HOGAR_ERROR:
        case TRASLADO_JEFE_HOGAR_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return { ...state }
    }
}
