/* eslint-disable prettier/prettier */
import { TYPES } from '../type/UsuarioType'
import { AxiosPrivado } from 'src/config/axios'
import Swal from 'sweetalert2'
const {
  ADD_USUARIO,
  ADD_USUARIO_SUCCESS,
  ADD_USUARIO_ERROR,
  OBTENER_USUARIO,
  OBTENER_USUARIO_SUCCESS,
  OBTENER_USUARIO_ERROR,
  OBTENER_USUARIO_EDITAR,
  EDITAR_USUARIO,
  EDITAR_USUARIO_SUCCESS,
  EDITAR_USUARIO_ERROR,
  ACTIVAR_USUARIO,
  ACTIVAR_USUARIO_SUCCESS,
  DELETE_USUARIO,
  DELETE_USUARIO_SUCCESS,
  DELETE_USUARIO_ERROR,
} = TYPES

// Crear nuevos Usuarios
export const crearNuevoUsuarioAction = (Dataform) => {
  return async (dispatch) => {
    dispatch(agregarUsuario())
    const { formularioDatos, handleReset } = Dataform
    try {
      // insertar en la API
      const { data } = await AxiosPrivado.post('/app/usuario/add', formularioDatos)

      // Si todo sale bien, actualizar el state
      dispatch(agregarUsuarioExito(data.datos))

      if (data.code === 201) {
        handleReset()
        Swal.fire('Correcto', 'El Usuario se agregó correctamente', 'success')
      }
    } catch (error) {
      console.log(error.response)
      // si hay un error cambiar el state
      dispatch(agregarUsuarioError(true))

      const { data } = error.response

      let Message
      if (data.code === 404) {
        Message = data.msg
      } else {
        Message = 'Hubo un error al intenar agregar el registro, intenta nuevamente'
      }

      // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: Message,
      })
    }
  }
}

const agregarUsuario = () => ({
  type: ADD_USUARIO,
  payload: true,
})

// si el producto se guarda en la base de datos
const agregarUsuarioExito = (Dataform) => ({
  type: ADD_USUARIO_SUCCESS,
  payload: Dataform,
})

// si hubo un error
const agregarUsuarioError = (dato) => ({
  type: ADD_USUARIO_ERROR,
  payload: dato,
})

// ***************** Seleccion obtenerregistro editar  //****************/
// Colocar producto en edición
export const obtenerUsuarioEditar = (datos) => {
  return (dispatch) => {
    dispatch(obtenerUsuarioUpdate(datos))
  }
}

const obtenerUsuarioUpdate = (datos) => ({
  type: OBTENER_USUARIO_EDITAR,
  payload: datos,
})

// ***************** Seleccion editar el obtener Usuario //****************/

export const editarUsuarioAction = (formDatos) => {
  return async (dispatch) => {
    dispatch(editarUsuario())
    console.log(formDatos)
    const { formularioDatos, handleReset, Id } = formDatos
    try {
      const { data } = await AxiosPrivado.put(`/users/edit-user/${Id}`, formularioDatos)
      dispatch(editarUsuarioExito(data.datos))

      if (data.code === 200) {
        handleReset()
        Swal.fire('Correcto', 'El Usuario se actualizó correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
      dispatch(editarUsuarioError())
    }
  }
}

const editarUsuario = () => ({
  type: EDITAR_USUARIO,
  payload: true,
})

const editarUsuarioExito = (datos) => ({
  type: EDITAR_USUARIO_SUCCESS,
  payload: datos,
})

const editarUsuarioError = () => ({
  type: EDITAR_USUARIO_ERROR,
  payload: true,
})

// ***************** Seleccion editar el editarEstado Usuario //****************/

export const editarEstadoUsuarioAction = (Datos) => {
  return async (dispatch) => {
    dispatch(editarEstadoUsuario())
    const { setSelectActivar, estadoDatos, Id } = Datos
    try {
      const { data } = await AxiosPrivado.patch(`/app/usuario/estadouser/${Id}`, {
        Estado: estadoDatos,
      })
      dispatch(editarEstadoUsuarioExito(data.datos))
      setSelectActivar(false)
    } catch (error) {
      console.log(error)
    }
  }
}

const editarEstadoUsuario = () => ({
  type: ACTIVAR_USUARIO,
  payload: true,
})

const editarEstadoUsuarioExito = (datos) => ({
  type: ACTIVAR_USUARIO_SUCCESS,
  payload: datos,
})

// procedimiento obtener listado slaiders
export const obtenerUsuarioAction = () => {
  return async (dispatch) => {
    dispatch(ObtenerUsuario())

    try {
      const { data } = await AxiosPrivado.get('/users/view-user')

      if (data.success === true) {
        dispatch(obtenerUsuarioExitosa(data.data))
      }
    } catch (error) {
      console.log(error)
      dispatch(obtenerUsuariosrror())
    }
  }
}

const ObtenerUsuario = () => ({
  type: OBTENER_USUARIO,
  payload: true,
})

const obtenerUsuarioExitosa = (datos) => ({
  type: OBTENER_USUARIO_SUCCESS,
  payload: datos,
})

const obtenerUsuariosrror = () => ({
  type: OBTENER_USUARIO_ERROR,
  payload: true,
})

// ***************** Seleccion y elimina el borrar Usuario //****************/
export const borrarUsuarioAction = (id) => {
  return async (dispatch) => {
    dispatch(eliminaUsuario(id))

    try {
      const { data } = await AxiosPrivado.delete(`/app/usuario/delete/${id}`)

      if (data.code === 200) {
        dispatch(eliminarUsuarioExito(id))
        // Si se elimina, mostrar alerta
        Swal.fire('Eliminado', 'El Usuario eliminó correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
      dispatch(eliminarUsuarioError())

      // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al intenar eliminar el registro.',
      })
    }
  }
}

const eliminaUsuario = (Id) => ({
  type: DELETE_USUARIO,
  payload: Id,
})
const eliminarUsuarioExito = () => ({
  type: DELETE_USUARIO_SUCCESS,
})

const eliminarUsuarioError = () => ({
  type: DELETE_USUARIO_ERROR,
  payload: true,
})
