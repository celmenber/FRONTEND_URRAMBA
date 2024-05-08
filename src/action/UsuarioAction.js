/* eslint-disable prettier/prettier */
import { TYPES } from '../type/UsuarioType'
import { Axios } from 'src/config/axios'
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
  CAMBIO_CLAVE_USUARIO,
  CAMBIO_CLAVE_USUARIO_SUCCESS,
  DELETE_USUARIO,
  DELETE_USUARIO_SUCCESS,
  DELETE_USUARIO_ERROR,
  OBTENER_PERFIL,
  OBTENER_PERFIL_SUCCESS,
  OBTENER_PERFIL_ERROR,
} = TYPES

// Crear nuevos Usuarios
export const crearNuevoUsuarioAction = (Dataform) => {
  return async (dispatch) => {
    dispatch(agregarUsuario())
    const { formularioDatos, handleReset } = Dataform
    try {
      // insertar en la API
      const { data } = await Axios.post('/app/usuario/add', formularioDatos)

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
    const { formularioDatos, handleReset, Id } = formDatos
    try {
      const { data } = await Axios.put(`/users/edit-user/${Id}`, formularioDatos)
       if (data.code === 203) {
         dispatch(editarUsuarioError())
        Swal.fire('Error', 'El Usuario o correo '+formularioDatos.USERNAME+' ya existe', 'error')
      }

      if (data.code === 200) {
        handleReset()
        dispatch(editarUsuarioExito(data.data))
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
    const { setSelectActivarEST, estadoDatos, Id } = Datos
    try {
      const { data } = await Axios.patch(`/users/edit-userestado/${Id}`, {
        ESTADO: estadoDatos,
      })
      dispatch(editarEstadoUsuarioExito(data.data))
      setSelectActivarEST(false)
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


// ***************** Seleccion editar el editarEstado Usuario //****************/
export const editarClaveUsuarioAction = (Datos) => {
  return async (dispatch) => {
    dispatch(editarClaveUsuario())
    const { setSelectActivarREC, DOCUMENTO, Id } = Datos
    try {
      const { data } = await Axios.patch(`/users/edit-usercambioclave/${Id}`, { DOCUMENTO })
      dispatch(editarClaveUsuarioExito(data.data))
      if (data.code === 200) {
        setSelectActivarREC(false)
        Swal.fire('Correcto', 'La contraseña del Usuario se reinicio correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const editarClaveUsuario = () => ({
  type: CAMBIO_CLAVE_USUARIO,
  payload: true,
})

const editarClaveUsuarioExito = (datos) => ({
  type: CAMBIO_CLAVE_USUARIO_SUCCESS,
  payload: datos,
})

// procedimiento obtener listado slaiders
export const obtenerUsuarioAction = () => {
  return async (dispatch) => {
    dispatch(ObtenerUsuario())

    try {
      const { data } = await Axios.get('/users/view-user')

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

// procedimiento obtener listado slaiders
export const obtenerPerfilAction = () => {
  return async (dispatch) => {
    dispatch(ObtenerPerfil())

    try {
      const { data } = await Axios.get('/users/view-user-roll')

      if (data.success === true) {
        dispatch(obtenerPerfilExitosa(data.data))
      }
    } catch (error) {
      console.log(error)
      dispatch(obtenerPerfilsrror())
    }
  }
}

const ObtenerPerfil = () => ({
  type: OBTENER_PERFIL,
  payload: true,
})

const obtenerPerfilExitosa = (datos) => ({
  type: OBTENER_PERFIL_SUCCESS,
  payload: datos,
})

const obtenerPerfilsrror = () => ({
  type: OBTENER_PERFIL_ERROR,
  payload: true,
})

// ***************** Seleccion y elimina el borrar Usuario //****************/
export const borrarUsuarioAction = (id) => {
  return async (dispatch) => {
    dispatch(eliminaUsuario(id))

    try {
      const { data } = await Axios.delete(`/app/usuario/delete/${id}`)

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
