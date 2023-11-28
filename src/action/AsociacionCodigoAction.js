/* eslint-disable prettier/prettier */
import TYPES from '../type/AsociacionCodigoType'
import { AxiosPrivado } from '../config/axios'
import Swal from 'sweetalert2'
const {
  ADD_ASOCIACIONESCOD,
  ADD_ASOCIACIONESCOD_SUCCESS,
  ADD_ASOCIACIONESCOD_ERROR,
  OBTENER_ASOCIACIONESCOD,
  OBTENER_ASOCIACIONESCOD_SUCCESS,
  OBTENER_ASOCIACIONESCOD_ERROR,
  OBTENER_ASOCIACIONESCOD_EDITAR,
  EDITAR_ASOCIACIONESCOD,
  EDITAR_ASOCIACIONESCOD_SUCCESS,
  EDITAR_ASOCIACIONESCOD_ERROR,
  DELETE_ASOCIACIONESCOD,
  DELETE_ASOCIACIONESCOD_SUCCESS,
  DELETE_ASOCIACIONESCOD_ERROR,
} = TYPES

// Crear nuevosServicios
export const crearNuevoAsociacioncodAction = (Dataform) => {
  return async (dispatch) => {
    dispatch(agregarAsociacioncod())

    const { formularioDatos } = Dataform

    try {
      // insertar en la API
      const { data } = await AxiosPrivado.post('/app/conveniocodigo/add', formularioDatos)

      // Si todo sale bien, actualizar el state
      dispatch(agregarAsociacioncodExito(data.datos))

      if (data.code === 201) {
        Swal.fire('Correcto', 'El Cheinn se ejecuto correctamente', 'success')
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
  type: ADD_ASOCIACIONESCOD,
  payload: true,
})

// si el producto se guarda en la base de datos
const agregarAsociacioncodExito = (datos) => ({
  type: ADD_ASOCIACIONESCOD_SUCCESS,
  payload: datos,
})

// si hubo un error
const agregarAsociacioncodError = (estado) => ({
  type: ADD_ASOCIACIONESCOD_ERROR,
  payload: estado,
})

// ***************** Seleccion obtener registros conveniocodigo//****************/
export const obtenerAsociacioncodAction = () => {
  return async (dispatch) => {
    dispatch(obtenerAsociacioncod())

    try {
      const { data } = await AxiosPrivado.get('/app/conveniocodigo/all')
      if (data.code === 200) {
        dispatch(obteneAsociacioncodExito(data.datos))
      }
    } catch (error) {
      console.log(error.response)
      dispatch(obtenerAsociacioncodError())
    }
  }
}

const obtenerAsociacioncod = () => ({
  type: OBTENER_ASOCIACIONESCOD,
  payload: true,
})

const obteneAsociacioncodExito = (datos) => ({
  type: OBTENER_ASOCIACIONESCOD_SUCCESS,
  payload: datos,
})

const obtenerAsociacioncodError = () => ({
  type: OBTENER_ASOCIACIONESCOD_ERROR,
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
  type: OBTENER_ASOCIACIONESCOD_EDITAR,
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
  type: EDITAR_ASOCIACIONESCOD,
  payload: true,
})

const editarAsociacioncodExito = (datos) => ({
  type: EDITAR_ASOCIACIONESCOD_SUCCESS,
  payload: datos,
})

const editarAsociacioncodError = () => ({
  type: EDITAR_ASOCIACIONESCOD_ERROR,
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
  type: DELETE_ASOCIACIONESCOD,
  payload: Id,
})
const eliminarAsociacioncodExito = (Id) => ({
  type: DELETE_ASOCIACIONESCOD_SUCCESS,
})

const eliminarAsociacioncodError = () => ({
  type: DELETE_ASOCIACIONESCOD_ERROR,
  payload: true,
})
