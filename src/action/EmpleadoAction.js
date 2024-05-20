/* eslint-disable prettier/prettier */
import TYPES from '../type/EmpleadoType'
import { Axios } from '../config/axios';
import Swal from 'sweetalert2';
const {
    ADD_EMPLEADO,
    ADD_EMPLEADO_SUCCESS,
    ADD_EMPLEADO_ERROR,
    EDITAR_EMPLEADO,
    EDITAR_EMPLEADO_SUCCESS,
    EDITAR_EMPLEADO_ERROR,
    OBTENER_EMPLEADO,
    OBTENER_EMPLEADO_SUCCESS,
    OBTENER_EMPLEADO_ERROR,
    DELETE_EMPLEADO,
    DELETE_EMPLEADO_SUCCESS,
    DELETE_EMPLEADO_ERROR,
} = TYPES

// Crear nuevos Empleado

export const crearNuevoEmpleadoAction = (Dataform) => {
  return async (dispatch) => {
    dispatch(agregarEmpleado())

    const { formularioDatos } = Dataform

    try {
      // insertar en la API
      const { data } = await Axios.post('empleados/create-empleado', formularioDatos)
       //console.log(data)
      // Si todo sale bien, actualizar el state
      if (data.code === 203) {
        const valmsg = data.response.split('-')[1]
        const stringMsg = valmsg === '1'
        ? 'El numero de documento digitado aparece como empleado de la asociacion'
        : 'Este correo electronico ya se encuentra registrado en el sistema'
          dispatch(agregarEmpleadoError(true))
         Swal.fire({
              icon: 'error',
              title: 'Error',
              text: stringMsg,
            })
        }

      if (data.success === true) {
           dispatch(agregarEmpleadoExito(data.data))
        Swal.fire('Correcto', 'El Empleado se agregar correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
      // si hay un error cambiar el state
      dispatch(agregarEmpleadoError(true))
      // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al intenar agregar el registro, intenta nuevamente',
      })
    }
  }
}

const agregarEmpleado = () => ({
  type: ADD_EMPLEADO,
  payload: true,
})

// si el producto se guarda en la base de datos
const agregarEmpleadoExito = (datos) => ({
  type: ADD_EMPLEADO_SUCCESS,
  payload: datos,
})

// si hubo un error
const agregarEmpleadoError = (estado) => ({
  type: ADD_EMPLEADO_ERROR,
  payload: estado,
})

// ***************** Seleccion obtener contananos //****************/
export const obtenerEmpleadoAction = () => {

    return async (dispatch) => {

        dispatch(obtenerEmpleado());

        try {
          const { data } = await Axios.get('/empleados/view-empleado');
            if (data.code === 200) {
                dispatch(obtenerEmpleadoExitosa(data.data))
            }
        } catch (error) {
            console.log(error);
            dispatch(obtenerEmpleadoError())
        }
    }
}

const obtenerEmpleado = () => ({
    type: OBTENER_EMPLEADO,
    payload: true
});

const obtenerEmpleadoExitosa = datos => ({
    type: OBTENER_EMPLEADO_SUCCESS,
    payload: datos
})

const obtenerEmpleadoError = () => ({
    type: OBTENER_EMPLEADO_ERROR,
    payload: true
});


// ***************** Seleccion obtener el obtener datos contacatanos parques //****************/
/* export const obtenerContactoParqueAction = (Id) => {

    return async (dispatch) => {
        dispatch(obtenerContactoParque());

        try {
            const { data } = await AxiosPrivado.get(`/contactanos/allparques/${Id}`);
            console.log(data);
            if (data.code === 200) {
                dispatch(obtenerContactoParqueExito(data.datos))
            }
        } catch (error) {
            console.log(error);
            dispatch(obtenerContactoParqueError())
        }
    }
} */


// ***************** Seleccion obtener contananos //****************/
// ***************** Seleccion obtener el obtener datos contacatanos parques //****************/
/* export const obtenerEmpleadoFiltrosAction = (formularioDatos) => {

    return async (dispatch) => {
        dispatch(obtenerEmpleadoFiltro());

        try {
            const { data } = await AxiosPrivado.post(`app/empleados/filterall`, formularioDatos);
            console.log(data);
            if (data.code === 200) {
                dispatch(obtenerEmpleadoFiltroExito(data.datos))
            }
        } catch (error) {
            console.log(error);
            dispatch(obtenerEmpleadoFiltroError())
        }
    }
} */



/* const obtenerEmpleadoFiltro = () => ({
    type: OBTENER_EMPLEADO_FILTRO,
    payload: true
});

const obtenerEmpleadoFiltroExito = datos => ({
    type: OBTENER_EMPLEADO_FILTRO_SUCCESS,
    payload: datos
})

const obtenerEmpleadoFiltroError = () => ({
    type: OBTENER_EMPLEADO_FILTRO_ERROR,
    payload: true
}); */

// ***************** Seleccion editar el Empleado //****************/

export const editarEmpleadoAction = (Datos) => {

    return async (dispatch) => {
        dispatch(editarEmpleado());

        const id  = Number(Datos.id)
        try {

          const {data} = await Axios.put(`/empleados/edit-empleado/${id}`, Datos.formularioDatos);
            dispatch(editarEmpleadoExito(data.data.datos));

            if (data.code === 200) {
                Swal.fire(
                    'Correcto',
                    'El empleado se actualizó correctamente',
                    'success'
                );
            }

        } catch (error) {
            console.log(error);
            dispatch(editarEmpleadoError());
        }
    }
}


const editarEmpleado = () => ({
    type: EDITAR_EMPLEADO,
    payload: true
});

const editarEmpleadoExito = (datos) => ({
    type: EDITAR_EMPLEADO_SUCCESS,
    payload: datos
});

const editarEmpleadoError = () => ({
    type: EDITAR_EMPLEADO_ERROR,
    payload: true
});


// ***************** Seleccion y elimina el registro  Normativida//****************/
export const borrarEmpleadoAction = Id => {
    return async (dispatch) => {

        dispatch(eliminaEmpleado(Id));

        try {
            const { data } = await Axios.delete(`/empleados/delete-empleado/${Id}`);

            if (data.code === 200) {
                dispatch(eliminarEmpleadoExito(Id));
                // Si se elimina, mostrar alerta
                Swal.fire(
                    'Eliminado',
                    'El registro se eliminó correctamente',
                    'success'
                )
            }
        } catch (error) {
            console.log(error);
            dispatch(eliminarEmpleadoError());
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al intenar eliminar el registro.'
            })
        }
    }
}

const eliminaEmpleado = Id => ({
    type: DELETE_EMPLEADO,
    payload: Id
});
const eliminarEmpleadoExito = () => ({
    type: DELETE_EMPLEADO_SUCCESS,
})

const eliminarEmpleadoError = () => ({
    type: DELETE_EMPLEADO_ERROR,
    payload: true
});
