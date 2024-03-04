/* eslint-disable prettier/prettier */
import TYPES from '../type/EmpleadoType'

const {
    ADD_EMPLEADO,
    ADD_EMPLEADO_SUCCESS,
    ADD_EMPLEADO_ERROR,
    EDITAR_EMPLEADO,
    EDITAR_EMPLEADO_SUCCESS,
    EDITAR_EMPLEADO_ERROR,
    OBTENER_EMPLEADO,
    OBTENER_EMPLEADO_SUCCESS,
    OBTENER_EMPLEADO_ERROR,
    OBTENER_EMPLEADO_EDITAR,
    DELETE_EMPLEADO,
    DELETE_EMPLEADO_SUCCESS,
    DELETE_EMPLEADO_ERROR,
} = TYPES;

// cada reducer tiene su propio state
const initialState = {
    listaempleado: [],
    loading: false,
    loadinglista: false,
    empleadoeditar: null,
    empleadoeliminar: null,
    error: null,
}

export const EmpleadoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_EMPLEADO:
        return {
          ...state,
          loading: action.payload,
        }
      case ADD_EMPLEADO_SUCCESS:
        return {
          ...state,
          loading: false,
          listaempleado: [...state.listaempleado, action.payload]
        }
        case OBTENER_EMPLEADO:
            return {
                ...state,
                loadinglista: action.payload,
            }
        case OBTENER_EMPLEADO_SUCCESS:
            return {
                ...state,
                loadinglista: false,
                listaempleado: action.payload
            }
      case OBTENER_EMPLEADO_EDITAR:
          return {
            ...state,
            empleadoeditar: action.payload
          }
        case EDITAR_EMPLEADO:
            return {
                ...state,
                loading: action.payload,
            }
        case EDITAR_EMPLEADO_SUCCESS:
            const updatedEmpleado = action.payload; // Assuming action.payload is the updated member
            const updatedEmpleados = state.listaempleado.map((empleado) =>
            empleado.ID === updatedEmpleado.ID ? updatedEmpleado : empleado);
            return {
                ...state,
                loading: false,
                empleadoeditar: null,
                listaempleado: updatedEmpleados
            }
        case DELETE_EMPLEADO:
            return {
                ...state,
                empleadoeliminar: action.payload,
            }

        case DELETE_EMPLEADO_SUCCESS:
            return {
                ...state,
                listaempleado: state.listaempleado.filter(E => E.ID !== state.empleadoeliminar),
                empleadoeliminar: null
            }
        case ADD_EMPLEADO_ERROR:
        case OBTENER_EMPLEADO_ERROR:
        case EDITAR_EMPLEADO_ERROR:
        case DELETE_EMPLEADO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return { ...state }
    }
}
