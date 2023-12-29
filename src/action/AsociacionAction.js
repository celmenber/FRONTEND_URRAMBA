/* eslint-disable prettier/prettier */
import TYPES from '../type/AsociacionType'
import { Axios } from '../config/axios'
import Swal from 'sweetalert2'

const {
  ADD_ASOCIACION,
  ADD_ASOCIACION_SUCCESS,
  ADD_ASOCIACION_ERROR,
  OBTENER_ASOCIACION,
  OBTENER_ASOCIACION_SUCCESS,
  OBTENER_ASOCIACION_ERROR,
  OBTENER_ASOCIACION_EDITAR,
  EDITAR_ASOCIACION,
  EDITAR_ASOCIACION_SUCCESS,
  EDITAR_ASOCIACION_ERROR,
  DELETE_ASOCIACION,
  DELETE_ASOCIACION_SUCCESS,
  DELETE_ASOCIACION_ERROR,
} = TYPES

// Crear nuevosServicios
export const crearNuevoAsociacionAction = (Dataform) => {
  return async (dispatch) => {
    dispatch(agregarAsociacion())

    const { formularioDatos } = Dataform

    try {
      // insertar en la API
      const { data } = await Axios.post('asociacion/create-asociacion', formularioDatos)

      // Si todo sale bien, actualizar el state
      const { datos } = data.data;
      dispatch(agregarAsociacionExito(datos))

      if (data.success === true) {
        Swal.fire('Correcto', 'La  asociacion se agregar correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
      // si hay un error cambiar el state
      dispatch(agregarAsociacionError(true))
      // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al intenar agregar el registro, intenta nuevamente',
      })
    }
  }
}

const agregarAsociacion = () => ({
  type: ADD_ASOCIACION,
  payload: true,
})

// si el producto se guarda en la base de datos
const agregarAsociacionExito = (datos) => ({
  type: ADD_ASOCIACION_SUCCESS,
  payload: datos,
})

// si hubo un error
const agregarAsociacionError = (estado) => ({
  type: ADD_ASOCIACION_ERROR,
  payload: estado,
})

// ***************** Seleccion obtener registros conveniocodigo//****************/
export const obtenerAsociacionAction = () => {
  return async (dispatch) => {
    dispatch(obtenerAsociacion())

    try {
      const { data } = await Axios.get('/asociacion/view-asociacion')
      if (data.success === true) {
        dispatch(obteneAsociacionExito(data.data))
      }
    } catch (error) {
      console.log(error.response)
      dispatch(obtenerAsociacionError())
    }
  }
}

const obtenerAsociacion = () => ({
  type: OBTENER_ASOCIACION,
  payload: true,
})

const obteneAsociacionExito = (datos) => ({
  type: OBTENER_ASOCIACION_SUCCESS,
  payload: datos,
})

const obtenerAsociacionError = () => ({
  type: OBTENER_ASOCIACION_ERROR,
  payload: true,
})

// ***************** Seleccion editar el obtenerConveniocod //****************/

// Colocar producto en edición
export const obtenerAsociacionEditarAction = (datos) => {
  return (dispatch) => {
    dispatch(obtenerAsociacionEditar(datos))
  }
}

const obtenerAsociacionEditar = (datos) => ({
  type: OBTENER_ASOCIACION_EDITAR,
  payload: datos,
})
// ***************** Seleccion editar editar Conveniocod //****************/
// Edita un registro en la api y state
export const editarAsociacionAction = (dataform) => {
  return async (dispatch) => {
    dispatch(editarAsociacion())

    const { formularioDatos, setVisibleCHKIO, Id } = dataform

    try {
      const { data } = await Axios.put(`/app/conveniocodigo/update/${Id}`, formularioDatos)

      dispatch(editarAsociacionExito(data.datos))
      setVisibleCHKIO(false)
      if (data.code === 200) {
        Swal.fire('Correcto', 'El Cheout se ejecuto correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
      dispatch(editarAsociacionError())
    }
  }
}

const editarAsociacion = () => ({
  type: EDITAR_ASOCIACION,
  payload: true,
})

const editarAsociacionExito = (datos) => ({
  type: EDITAR_ASOCIACION_SUCCESS,
  payload: datos,
})

const editarAsociacionError = () => ({
  type: EDITAR_ASOCIACION_ERROR,
  payload: true,
})

// ***************** Seleccion y elimina el borrarParques //****************/
export const borrarAsociacionAction = (id) => {
  return async (dispatch) => {
    dispatch(eliminarAsociacion(id))

    try {
      const { data } = await Axios.delete(`/app/conveniocodigo/delete/${id}`)

      if (data.code === 200) {
        dispatch(eliminarAsociacionExito(id))
        // Si se elimina, mostrar alerta
        Swal.fire('Eliminado', 'La Reserva se eliminó correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
      //const { data } = error.response
      dispatch(eliminarAsociacionError())

      // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al intenar eliminar el registro. ',
      })
    }
  }
}

const eliminarAsociacion = (Id) => ({
  type: DELETE_ASOCIACION,
  payload: Id,
})
const eliminarAsociacionExito = (Id) => ({
  type: DELETE_ASOCIACION_SUCCESS,
})

const eliminarAsociacionError = () => ({
  type: DELETE_ASOCIACION_ERROR,
  payload: true,
})
