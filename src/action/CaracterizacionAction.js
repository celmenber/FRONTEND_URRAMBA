/* eslint-disable prettier/prettier */
import TYPES from '../type/CaracterizacionType'
import { Axios } from '../config/axios'
import Swal from 'sweetalert2'

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

// Crear nuevosServicios
export const crearCaracterizacionAction = (Dataform) => {
     console.log(Dataform);
  return async (dispatch) => {
    dispatch(agregarCaracterizacion())

   // const { formularioDatos } = Dataform

    try {
      // insertar en la API
      const { data } = await Axios.post('caratacterizacion/create-caratacterizacion', Dataform)

      // Si todo sale bien, actualizar el state
      const { datos } = data.data;
      dispatch(agregarCaracterizacionExito(datos))

      if (data.success === true) {
        Swal.fire('Correcto', 'La  caratacterizacion se agrego correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
      // si hay un error cambiar el state
      dispatch(agregarCaracterizacionError(true))
      // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al intenar agregar el registro, intenta nuevamente',
      })
    }
  }
}

const agregarCaracterizacion = () => ({
  type: ADD_CARATERIZACION,
  payload: true,
})

// si se guarda en la base de datos
const agregarCaracterizacionExito = (datos) => ({
  type: ADD_CARATERIZACION_SUCCESS,
  payload: datos,
})

// si hubo un error
const agregarCaracterizacionError = (datos) => ({
  type: ADD_CARATERIZACION_ERROR,
  payload: datos,
})

// ***************** Seleccion obtener registros conveniocodigo//****************/
export const obtenerCaratacterizacionAction = () => {
  return async (dispatch) => {
    dispatch(obtenerCaratacterizacion())

    try {
      const { data } = await Axios.get('/caratacterizacion/view-caratacterizacion')
      if (data.success === true) {
        dispatch(obteneCaratacterizacionExito(data.data))
      }
    } catch (error) {
      console.log(error.response)
      dispatch(obtenerCaratacterizacionError())
    }
  }
}

const obtenerCaratacterizacion = () => ({
  type: OBTENER_CARATERIZACION,
  payload: true,
})

const obteneCaratacterizacionExito = (datos) => ({
  type: OBTENER_CARATERIZACION_SUCCESS,
  payload: datos,
})

const obtenerCaratacterizacionError = () => ({
  type: OBTENER_CARATERIZACION_ERROR,
  payload: true,
})
