/* eslint-disable prettier/prettier */
import TYPES from '../type/AutoridadTType'

const {
    ADD_AUTORIDADT,
    ADD_AUTORIDADT_SUCCESS,
    ADD_AUTORIDADT_ERROR,
    EDITAR_AUTORIDADT,
    EDITAR_AUTORIDADT_SUCCESS,
    EDITAR_AUTORIDADT_ERROR,
    OBTENER_AUTORIDADT,
    OBTENER_AUTORIDADT_SUCCESS,
    OBTENER_AUTORIDADT_ERROR,
    OBTENER_AUTORIDADT_EDITAR,
    DELETE_AUTORIDADT,
    DELETE_AUTORIDADT_SUCCESS,
    DELETE_AUTORIDADT_ERROR,
} = TYPES;

// cada reducer tiene su propio state
const initialState = {
    listautoridad: [],
    loading: false,
    loadinglista: false,
    autoridadeditar: null,
    autoridadeliminar: null,
    error: null,
}

export const AutoridadTReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_AUTORIDADT:
        return {
          ...state,
          loading: action.payload,
        }
      case ADD_AUTORIDADT_SUCCESS:
        return {
          ...state,
          loading: false,
          listaAUTORIDADT: [...state.listaAUTORIDADT, action.payload]
        }
        case OBTENER_AUTORIDADT:
            return {
                ...state,
                loadinglista: true,
            }
        case OBTENER_AUTORIDADT_SUCCESS:
            return {
                ...state,
                loadinglista: false,
                listaAUTORIDADT: action.payload
            }
      case OBTENER_AUTORIDADT_EDITAR:
          return {
            ...state,
            AUTORIDADTeditar: action.payload
          }
        case EDITAR_AUTORIDADT:
            return {
                ...state,
                loading: action.payload,
            }
        case EDITAR_AUTORIDADT_SUCCESS:
            return {
                ...state,
                loading: false,
                AUTORIDADTeditar: null,
                listaAUTORIDADT: state.listaAUTORIDADT.map(E =>
                    E.EstadoServicioId === action.payload.EstadoServicioId ? E = action.payload : E
                )
            }
        case DELETE_AUTORIDADT:
            return {
                ...state,
                AUTORIDADTeliminar: action.payload,
            }
        case DELETE_AUTORIDADT_SUCCESS:
            return {
                ...state,
                listaAUTORIDADT: state.listaAUTORIDADT.filter(E => E.Id !== state.AUTORIDADTeliminar),
                AUTORIDADTeliminar: null
            }
        case ADD_AUTORIDADT_ERROR:
        case OBTENER_AUTORIDADT_ERROR:
        case EDITAR_AUTORIDADT_ERROR:
        case DELETE_AUTORIDADT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return { ...state }
    }
}
