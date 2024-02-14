/* eslint-disable prettier/prettier */

import TYPES from 'src/type/MiembroType';
import { Axios } from '../config/axios';
import Swal from 'sweetalert2';
const {
    ADD_MIEMBRO,
    ADD_MIEMBRO_SUCCESS,
    ADD_MIEMBRO_ERROR,
    EDITAR_MIEMBRO,
    EDITAR_MIEMBRO_SUCCESS,
    EDITAR_MIEMBRO_ERROR,
    OBTENER_MIEMBRO,
    OBTENER_MIEMBRO_SUCCESS,
    OBTENER_MIEMBRO_ERROR,
    DELETE_MIEMBRO,
    DELETE_MIEMBRO_SUCCESS,
    DELETE_MIEMBRO_ERROR,
} = TYPES

// Crear nuevos Empleado

export const crearNuevoMiembroAction = (Dataform) => {
  return async (dispatch) => {
    dispatch(agregarMiembro())

    const { formularioDatos } = Dataform

    try {
      // insertar en la API
      const { data } = await Axios.post('miembrosconcejo/create-miembrosconcejo', formularioDatos)

      // Si todo sale bien, actualizar el state
      const { datos } = data.data;
      dispatch(agregarMiembroExito(datos))

      if (data.success === true) {
        Swal.fire('Correcto', 'El Miembro se agregar correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
     
      dispatch(agregarMiembroError(true))
    
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al intenar agregar el registro, intenta nuevamente',
      })
    }
  }
}

const agregarMiembro = () => ({
  type: ADD_MIEMBRO,
  payload: true,
})

// si el producto se guarda en la base de datos
const agregarMiembroExito = (datos) => ({
  type: ADD_MIEMBRO_SUCCESS,
  payload: datos,
})

// si hubo un error
const agregarMiembroError = (estado) => ({
  type: ADD_MIEMBRO_ERROR,
  payload: estado,
})


export const obtenerMiembroAction = () => {

    return async (dispatch) => {

        dispatch(obtenerMiembro());

        try {
            debugger
          const { data } = await Axios.get('/miembrosconcejo/view-miembrosconcejo');
            if (data.code === 200) {
                dispatch(obtenerMiembroExitosa(data.data))
                
            }
        } catch (error) {
            console.log(error);
            dispatch(obtenerMiembroError())
        }
    }
}

const obtenerMiembro = () => ({
    type: OBTENER_MIEMBRO,
    payload: true
});

const obtenerMiembroExitosa = datos => ({
    type: OBTENER_MIEMBRO_SUCCESS,
    payload: datos
})

const obtenerMiembroError = () => ({
    type: OBTENER_MIEMBRO_ERROR,
    payload: true
});

export const editarMiembroAction = (Datos) => {
    return async (dispatch) => {
        dispatch(editarMiembro());
        console.log(Datos)
        const { Id } = Datos
        try {

          const { data } = await Axios.patch(`/miembrosconcejo/edit-miembrosconcejo/${Id}`);
            dispatch(editarMiembroExito(data.datos));

            if (data.code === 200) {
                Swal.fire(
                    'Correcto',
                    'El miembro de consejo se actualizó correctamente',
                    'success'
                );
            }

        } catch (error) {
            console.log(error);
            dispatch(editarMiembroError());
        }
    }
}


const editarMiembro = () => ({
    type: EDITAR_MIEMBRO,
    payload: true
});

const editarMiembroExito = datos => ({
    type: EDITAR_MIEMBRO_SUCCESS,
    payload: datos
});

const editarMiembroError = () => ({
    type: EDITAR_MIEMBRO_ERROR,
    payload: true
});



export const borrarMiembroAction = id => {
    return async (dispatch) => {

        dispatch(eliminaMiembro(id));

        try {
            const { data } = await Axios.delete(`app/miembrosconcejo/delete/${id}`);

            if (data.code === 200) {
                dispatch(eliminarMiembroExito(id));
                // Si se elimina, mostrar alerta
                Swal.fire(
                    'Eliminado',
                    'El registro se eliminó correctamente',
                    'success'
                )
            }
        } catch (error) {
            console.log(error);
            dispatch(eliminarMiembroError());
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al intenar eliminar el registro.'
            })
        }
    }
}

const eliminaMiembro = Id => ({
    type: DELETE_MIEMBRO,
    payload: Id
});
const eliminarMiembroExito = () => ({
    type: DELETE_MIEMBRO_SUCCESS,
})

const eliminarMiembroError = () => ({
    type: DELETE_MIEMBRO_ERROR,
    payload: true
});