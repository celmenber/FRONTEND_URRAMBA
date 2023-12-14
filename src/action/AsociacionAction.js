/* eslint-disable prettier/prettier */
import TYPES from '../type/AsociacionType'
import { AxiosPrivado } from '../config/axios'
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
export const crearNuevoAsociacioncodAction = (Dataform) => {
  return async (dispatch) => {
    dispatch(agregarAsociacioncod())

    const { formularioDatos } = Dataform

    try {
      // insertar en la API
      const { data } = await AxiosPrivado.post('asociacion/create-asociacion', formularioDatos)

      // Si todo sale bien, actualizar el state
      const { datos } = data.data;
      dispatch(agregarAsociacioncodExito(datos))

      if (data.success === true) {
        Swal.fire('Correcto', 'La  asociacion se agregar correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
      // si hay un error cambiar el state
      dispatch(agregarAsociacioncodError(true))
      // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al intenar agregar el registro, intenta nuevamente',
      })
    }
  }
}

const agregarAsociacioncod = () => ({
  type: ADD_ASOCIACION,
  payload: true,
})

// si el producto se guarda en la base de datos
const agregarAsociacioncodExito = (datos) => ({
  type: ADD_ASOCIACION_SUCCESS,
  payload: datos,
})

// si hubo un error
const agregarAsociacioncodError = (estado) => ({
  type: ADD_ASOCIACION_ERROR,
  payload: estado,
})

// ***************** Seleccion obtener registros conveniocodigo//****************/
export const obtenerAsociacioncodAction = () => {
  return async (dispatch) => {
    dispatch(obtenerAsociacioncod())

    try {
      const { data } = await AxiosPrivado.get('asociacion/view-asociacion')
      if (data.success === true) {
        dispatch(obteneAsociacioncodExito(data.data))
      }
    } catch (error) {
      console.log(error.response)
      dispatch(obtenerAsociacioncodError())
    }
  }
}

const obtenerAsociacioncod = () => ({
  type: OBTENER_ASOCIACION,
  payload: true,
})

const obteneAsociacioncodExito = (datos) => ({
  type: OBTENER_ASOCIACION_SUCCESS,
  payload: datos,
})

const obtenerAsociacioncodError = () => ({
  type: OBTENER_ASOCIACION_ERROR,
  payload: true,
})

// ***************** Seleccion editar el obtenerConveniocod //****************/

// Colocar producto en edición
export const obtenerAsociacioncodEditarAction = (datos) => {
  return (dispatch) => {
    dispatch(obtenerAsociacioncodEditar(datos))
  }
}

const obtenerAsociacioncodEditar = (datos) => ({
  type: OBTENER_ASOCIACION_EDITAR,
  payload: datos,
})
// ***************** Seleccion editar editar Conveniocod //****************/
// Edita un registro en la api y state
export const editarAsociacioncodAction = (dataform) => {
  return async (dispatch) => {
    dispatch(editarAsociacioncod())

    const { formularioDatos, setVisibleCHKIO, Id } = dataform

    try {
      const { data } = await AxiosPrivado.put(`/app/conveniocodigo/update/${Id}`, formularioDatos)

      dispatch(editarAsociacioncodExito(data.datos))
      setVisibleCHKIO(false)
      if (data.code === 200) {
        Swal.fire('Correcto', 'El Cheout se ejecuto correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
      dispatch(editarAsociacioncodError())
    }
  }
}

const editarAsociacioncod = () => ({
  type: EDITAR_ASOCIACION,
  payload: true,
})

const editarAsociacioncodExito = (datos) => ({
  type: EDITAR_ASOCIACION_SUCCESS,
  payload: datos,
})

const editarAsociacioncodError = () => ({
  type: EDITAR_ASOCIACION_ERROR,
  payload: true,
})

// ***************** Seleccion y elimina el borrarParques //****************/
export const borrarAsociacioncodAction = (id) => {
  return async (dispatch) => {
    dispatch(eliminarAsociacioncod(id))

    try {
      const { data } = await AxiosPrivado.delete(`/app/conveniocodigo/delete/${id}`)

      if (data.code === 200) {
        dispatch(eliminarAsociacioncodExito(id))
        // Si se elimina, mostrar alerta
        Swal.fire('Eliminado', 'La Reserva se eliminó correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
      //const { data } = error.response
      dispatch(eliminarAsociacioncodError())

      // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al intenar eliminar el registro. ',
      })
    }
  }
}

const eliminarAsociacioncod = (Id) => ({
  type: DELETE_ASOCIACION,
  payload: Id,
})
const eliminarAsociacioncodExito = (Id) => ({
  type: DELETE_ASOCIACION_SUCCESS,
})

const eliminarAsociacioncodError = () => ({
  type: DELETE_ASOCIACION_ERROR,
  payload: true,
})
