/* eslint-disable prettier/prettier */
import TYPES from '../type/ConsejoType'
import { Axios } from '../config/axios'
import Swal from 'sweetalert2'

const {
  ADD_CONCEJO,
  ADD_CONCEJO_SUCCESS,
  ADD_CONCEJO_ERROR,
  OBTENER_CONCEJO,
  OBTENER_CONCEJO_SUCCESS,
  OBTENER_CONCEJO_ERROR,
  OBTENER_CONCEJO_EDITAR,
  EDITAR_CONCEJO,
  EDITAR_CONCEJO_SUCCESS,
  EDITAR_CONCEJO_ERROR,
  DELETE_CONCEJO,
  DELETE_CONCEJO_SUCCESS,
  DELETE_CONCEJO_ERROR,
} = TYPES

// Crear nuevosServicios
export const crearNuevoConcejoAction = (Dataform) => {
  return async (dispatch) => {
    dispatch(agregarConcejo())

    const { formularioDatos } = Dataform

    try {
      // insertar en la API
      const { data } = await Axios.post('/concejocomunitario/create-concejocomunitario', formularioDatos)

      // Si todo sale bien, actualizar el state
      const { datos } = data.data;
      dispatch(agregarConcejoExito(datos))

      if (data.success === true) {
        Swal.fire('Correcto', 'El  Concejo comunitario se agrego correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
      // si hay un error cambiar el state
      dispatch(agregarConcejoError(true))
      // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al intenar agregar el registro, intenta nuevamente',
      })
    }
  }
}

const agregarConcejo = () => ({
  type: ADD_CONCEJO,
  payload: true,
})

// si el producto se guarda en la base de datos
const agregarConcejoExito = (datos) => ({
  type: ADD_CONCEJO_SUCCESS,
  payload: datos,
})

// si hubo un error
const agregarConcejoError = (estado) => ({
  type: ADD_CONCEJO_ERROR,
  payload: estado,
})

// ***************** Seleccion obtener registros conveniocodigo//****************/
export const obtenerConcejoAction = () => {
  return async (dispatch) => {
    dispatch(obtenerConcejo())

    try {
      const { data } = await Axios.get('/concejocomunitario/view-concejocomunitario')
      if (data.success === true) {
        dispatch(obteneConcejoExito(data.data))
      }
    } catch (error) {
      console.log(error.response)
      dispatch(obtenerConcejoError())
    }
  }
}

const obtenerConcejo = () => ({
  type: OBTENER_CONCEJO,
  payload: true,
})

const obteneConcejoExito = (datos) => ({
  type: OBTENER_CONCEJO_SUCCESS,
  payload: datos,
})

const obtenerConcejoError = () => ({
  type: OBTENER_CONCEJO_ERROR,
  payload: true,
})

// ***************** Seleccion editar el obtenerConveniocod //****************/

// Colocar producto en edición
export const obtenerConcejoEditarAction = (datos) => {
  return (dispatch) => {
    dispatch(obtenerConcejoEditar(datos))
  }
}

const obtenerConcejoEditar = (datos) => ({
  type: OBTENER_CONCEJO_EDITAR,
  payload: datos,
})
// ***************** Seleccion editar editar Conveniocod //****************/
// Edita un registro en la api y state
export const editarConcejoAction = (Dataform) => {
  return async (dispatch) => {
    dispatch(editarConcejo())
     const { formularioDatos, Id} = Dataform
    try {
      const { data } = await Axios.put(`/concejocomunitario/edit-concejocomunitario/${Id}`, formularioDatos)
    dispatch(editarConcejoExito(data.data))
      if (data.code === 200) {
        Swal.fire('Correcto','El concejo se actualizó correctamente','success')
      }
    } catch (error) {
      console.log(error)
      dispatch(editarConcejoError())
    }
  }
}



const editarConcejo = () => ({
  type: EDITAR_CONCEJO,
  payload: true,
})

const editarConcejoExito = (datos) => ({
  type: EDITAR_CONCEJO_SUCCESS,
  payload: datos,
})

const editarConcejoError = () => ({
  type: EDITAR_CONCEJO_ERROR,
  payload: true,
})

// ***************** Seleccion y elimina el borrarParques //****************/
export const borrarConcejoAction = (id) => {
  return async (dispatch) => {
    dispatch(eliminarConcejo(id))

    try {
      const { data } = await Axios.delete(`/concejocomunitario/delete-concejocomunitario/${id}`)

      if (data.code === 200) {
        dispatch(eliminarConcejoExito(id))
        // Si se elimina, mostrar alerta
        Swal.fire('Eliminado', 'El Concejo Comunitario se eliminó correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
      //const { data } = error.response
      dispatch(eliminarConcejoError())

      // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No es posible eliminar el Concejo Comunitario, tiene asignacion de registro.',
      })
    }
  }
}

const eliminarConcejo = (Id) => ({
  type: DELETE_CONCEJO,
  payload: Id,
})
const eliminarConcejoExito = (Id) => ({
  type: DELETE_CONCEJO_SUCCESS,
})

const eliminarConcejoError = () => ({
  type: DELETE_CONCEJO_ERROR,
  payload: true,
})
