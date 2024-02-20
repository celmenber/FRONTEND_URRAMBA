/* eslint-disable prettier/prettier */
import TYPES from '../type/AutoridadTType'
import { Axios } from '../config/axios';
import Swal from 'sweetalert2';
const {
    ADD_AUTORIDADT,
    ADD_AUTORIDADT_SUCCESS,
    ADD_AUTORIDADT_ERROR,
    EDITAR_AUTORIDADT,
    EDITAR_AUTORIDADT_SUCCESS,
    EDITAR_AUTORIDADT_ERROR,
    OBTENER_AUTORIDADT,
    OBTENER_AUTORIDADT_SUCCESS,
    OBTENER_AUTORIDADT_ERROR,
    // OBTENER_AUTORIDADT_EDITAR,
    DELETE_AUTORIDADT,
    DELETE_AUTORIDADT_SUCCESS,
    DELETE_AUTORIDADT_ERROR,
} = TYPES

// Crear nuevos AutoridadT
export const crearNuevoAutoridadTAction = (Dataform) => {
  
  return async (dispatch) => {
    dispatch(agregarAutoridadT())

    const { formularioDatos } = Dataform

    try {
      // insertar en la API
      const { data } = await Axios.post('/autoridatradicional/create-autoridatradicional', formularioDatos)

      // Si todo sale bien, actualizar el state
      const { datos } = data.data;
      dispatch(agregarAutoridadTExito(datos))

      if (data.success === true) {
        Swal.fire('Correcto', 'La autorida tradicional se agrego correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
      // si hay un error cambiar el state
      dispatch(agregarAutoridadTError(true))
      // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al intenar agregar el registro, intenta nuevamentess',
      })
    }
  }
}

const agregarAutoridadT = () => ({
  type: ADD_AUTORIDADT,
  payload: true,
})

// si el producto se guarda en la base de datos
const agregarAutoridadTExito = (datos) => ({
  type: ADD_AUTORIDADT_SUCCESS,
  payload: datos,
})

// si hubo un error
const agregarAutoridadTError = (estado) => ({
  
  type: ADD_AUTORIDADT_ERROR,
  payload: estado,
})

// ***************** Seleccion obtener contananos //****************/
export const obtenerAutoridadTAction = () => {

    return async (dispatch) => {

        dispatch(obtenerAutoridadT());

        try {
          const { data } = await Axios.get('autoridatradicional/view-autoridatradicional');

            if (data.code === 200) {
              console.log(data.data)
                dispatch(obtenerAutoridadTExitosa(data.data))
           }
        } catch (error) {
            console.log(error);
            dispatch(obtenerAutoridadTError())
        }
    }
}

const obtenerAutoridadT = () => ({
    type: OBTENER_AUTORIDADT,
    payload: true
});

const obtenerAutoridadTExitosa = (datos) => ({
    type: OBTENER_AUTORIDADT_SUCCESS,
    payload: datos
})

const obtenerAutoridadTError = () => ({
    type: OBTENER_AUTORIDADT_ERROR,
    payload: true
});

// ***************** Seleccion editar el AutoridadT //****************/

export const editarAutoridadTAction = (Datos) => {
    return async (dispatch) => {
        dispatch(editarAutoridadT());
        console.log(Datos)
        const { Id } = Datos
        try {

          const { data } = await Axios.patch(`/autoridatradicional/edit-autoridatradicional/${Id}`);
            dispatch(editarAutoridadTExito(data.datos));

            if (data.code === 200) {
                Swal.fire(
                    'Correcto',
                    'El AutoridadT se actualizó correctamente',
                    'success'
                );
            }

        } catch (error) {
            console.log(error);
            dispatch(editarAutoridadTError());
        }
    }
}


const editarAutoridadT = () => ({
    type: EDITAR_AUTORIDADT,
    payload: true
});

const editarAutoridadTExito = datos => ({
    type: EDITAR_AUTORIDADT_SUCCESS,
    payload: datos
});

const editarAutoridadTError = () => ({
    type: EDITAR_AUTORIDADT_ERROR,
    payload: true
});


// ***************** Seleccion y elimina el registro  Normativida//****************/
export const borrarAutoridadTAction = id => {
    return async (dispatch) => {

        dispatch(eliminaAutoridadT(id));

        try {
          const { data } = await Axios.delete(`/autoridatradicional/delete-concejocomunitario/${id}`);

            if (data.code === 200) {
                dispatch(eliminarAutoridadTExito(id));
                // Si se elimina, mostrar alerta
                Swal.fire(
                    'Eliminado',
                    'El registro se eliminó correctamente',
                    'success'
                )
            }
        } catch (error) {
            console.log(error);
            dispatch(eliminarAutoridadTError());
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al intenar eliminar el registro.'
            })
        }
    }
}

const eliminaAutoridadT = Id => ({
    type: DELETE_AUTORIDADT,
    payload: Id
});
const eliminarAutoridadTExito = () => ({
    type: DELETE_AUTORIDADT_SUCCESS,
})

const eliminarAutoridadTError = () => ({
    type: DELETE_AUTORIDADT_ERROR,
    payload: true
});
