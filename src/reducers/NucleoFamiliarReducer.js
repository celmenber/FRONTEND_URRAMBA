/* eslint-disable prettier/prettier */
import TYPES from "src/type/NucleoFamiliarType";

const {
    ADD_NUCLEO_FAMILIAR,
    ADD_NUCLEO_FAMILIAR_SUCCESS,
    ADD_NUCLEO_FAMILIAR_ERROR,
    EDITAR_NUCLEO_FAMILIAR,
    EDITAR_NUCLEO_FAMILIAR_SUCCESS,
    EDITAR_NUCLEO_FAMILIAR_ERROR,
    OBTENER_NUCLEO_FAMILIAR,
    OBTENER_NUCLEO_FAMILIAR_SUCCESS,
    OBTENER_NUCLEO_FAMILIAR_ERROR,
    DELETE_NUCLEO_FAMILIAR,
    DELETE_NUCLEO_FAMILIAR_SUCCESS,
    DELETE_NUCLEO_FAMILIAR_ERROR,
} = TYPES;


const initialState = {
    listarNucleoFamiliar: [],
    loading: false,
    loadinglista: false,
    nucleofamiliareditar: null,
    nucleofamiliareliminar: null,
    error: null,
}

export const NucleoFamiliarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUCLEO_FAMILIAR:
            return {
                ...state,
                loading: action.payload,
            }
            case ADD_NUCLEO_FAMILIAR_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    listarNucleoFamiliar: [...state.listarNucleoFamiliar, action.payload]
                }
        case OBTENER_NUCLEO_FAMILIAR:
            return {
                ...state,
                loadinglista: action.payload,

            }
        case OBTENER_NUCLEO_FAMILIAR_SUCCESS:
            return {
                ...state,
                loadinglista: false,
                listarNucleoFamiliar: action.payload
            }



        case EDITAR_NUCLEO_FAMILIAR:
            return {
                ...state,
                loading: action.payload,
            }
        case EDITAR_NUCLEO_FAMILIAR_SUCCESS:
             return {
                ...state,
                loading: false,
                nucleofamiliareditar: null,
                listarNucleoFamiliar: state.listarNucleoFamiliar.map(NF =>
                    NF.ID === action.payload.ID ? NF = action.payload : NF
                )
            };
        case DELETE_NUCLEO_FAMILIAR:
            return {
                ...state,
                nucleofamiliareliminar: action.payload,
            }
        case DELETE_NUCLEO_FAMILIAR_SUCCESS:
            return {
                ...state,
                listarNucleoFamiliar: state.listarNucleoFamiliar.filter(A => A.ID !== state.nucleofamiliareliminar),
                nucleofamiliareliminar: null
            }
        case ADD_NUCLEO_FAMILIAR_ERROR:
        case OBTENER_NUCLEO_FAMILIAR_ERROR:
        case EDITAR_NUCLEO_FAMILIAR_ERROR:
        case DELETE_NUCLEO_FAMILIAR_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return { ...state }
    }
}
