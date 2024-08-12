/* eslint-disable prettier/prettier */
import TYPES from 'src/type/NucleoFamiliarType';
import { Axios } from '../config/axios';
import Swal from 'sweetalert2';
const {
    ADD_NUCLEO_FAMILIAR,
    ADD_NUCLEO_FAMILIAR_SUCCESS,
    ADD_NUCLEO_FAMILIAR_ERROR,
    EDITAR_NUCLEO_FAMILIAR,
    EDITAR_NUCLEO_FAMILIAR_SUCCESS,
    EDITAR_NUCLEO_FAMILIAR_ERROR,
    ACTIVAR_MIEMBRO_NUCLEO_FAMILIAR,
    ACTIVAR_MIEMBRO_NUCLEO_FAMILIAR_SUCCESS,
    OBTENER_NUCLEO_FAMILIAR,
    OBTENER_NUCLEO_FAMILIAR_SUCCESS,
    OBTENER_NUCLEO_FAMILIAR_ERROR,
    DELETE_NUCLEO_FAMILIAR,
    DELETE_NUCLEO_FAMILIAR_SUCCESS,
    DELETE_NUCLEO_FAMILIAR_ERROR,
    TRASLADO_NUCLEO_FAMILIAR,
    TRASLADO_NUCLEO_FAMILIAR_SUCCESS,
    TRASLADO_NUCLEO_FAMILIAR_ERROR,
} = TYPES

// Crear nuevos miembros de la famimilia
export const crearNuevoNucleoFamiliarAction = (Dataform) => {
  return async (dispatch) => {
    dispatch(agregarNucleoFamiliar())
    const { formularioDatos, handleReset } = Dataform
    try {
      // insertar en la API
      const { data } = await Axios.post('/nucleofamiliar/create-nucleofamiliar', formularioDatos)
      // Si todo sale bien, actualizar el state
      //console.log(data)
      if (data.code === 203) {
        const valmsg = data.response.split('-')[1]
        const stringMsg = valmsg === '1'
        ? 'El numero de documento digitado aparece como jefe de hogar'
        : 'El numero de documento digitado ya aparece como miembro de un nucleo familiar'
         Swal.fire({
              icon: 'error',
              title: 'Error',
              text: stringMsg,
            })
          return false
        }

        dispatch(agregarNucleoFamiliarExito(data.data[0]));

      if (data.code === 201) {
         handleReset();
         Swal.fire('Correcto', 'El miembro al nucleo Familiar se agrego correctamente', 'success');
      }


    } catch (error) {
      console.log(error)

      dispatch(agregarNucleoFamiliarError(true))

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al intenar agregar el registro, intenta nuevamente',
      })
    }
  }
}

const agregarNucleoFamiliar = () => ({
  type: ADD_NUCLEO_FAMILIAR,
  payload: true,
})

// si el producto se guarda en la base de datos
const agregarNucleoFamiliarExito = (datos) => ({
  type: ADD_NUCLEO_FAMILIAR_SUCCESS,
  payload: datos,
})

// si hubo un error
const agregarNucleoFamiliarError = (estado) => ({
  type: ADD_NUCLEO_FAMILIAR_ERROR,
  payload: estado,
})


export const obtenerNucleoFamiliarAction = () => {

    return async (dispatch) => {
        dispatch(obtenerNucleoFamiliar())

        try {
            const { data } = await Axios.get('/nucleofamiliar/view-nucleofamiliar')

            if (data.code === 200) {
                dispatch(obtenerNucleoFamiliarExistosa(data.data))

            }
        } catch (error) {
            console.log(error);
            dispatch(obtenerNucleoFamiliarError())
        }
    }
}

const obtenerNucleoFamiliar = () => ({
    type: OBTENER_NUCLEO_FAMILIAR,
    payload: true
});

const obtenerNucleoFamiliarExistosa = (datos) => ({
    type: OBTENER_NUCLEO_FAMILIAR_SUCCESS,
    payload: datos
})

const obtenerNucleoFamiliarError = () => ({
    type: OBTENER_NUCLEO_FAMILIAR_ERROR,
    payload: true
});

export const editarNucleoFamiliarAction = (Dataform) => {

  return async (dispatch) => {
    dispatch(editarNucleoFamiliar());
     const { formularioDatos, Id } = Dataform
    console.log(Dataform);
    try {
      const {data} = await Axios.put(`/nucleofamiliar/edit-nucleofamiliar/${Id}`, formularioDatos);

        if (data.code === 203) {
        const valmsg = data.response.split('-')[1]
        const stringMsg = valmsg === '1'
        ? 'El numero de documento digitado aparece como jefe de hogar'
        : 'El numero de documento digitado ya aparece como miembro de un nucleo familiar'
         Swal.fire({
              icon: 'error',
              title: 'Error',
              text: stringMsg,
            })
          return false
        }

      dispatch(editarNucleoFamiliarExito(data.data[0]));

      if (data.code === 200) {
        Swal.fire('Correcto',
         'El miembro del nucleo Familiar se actualizó correctamente',
         'success')
      }
    } catch (error) {
      console.log(error);
      dispatch(editarNucleoFamiliarError());
    }
  };
};

  const editarNucleoFamiliar = () => ({
    type: EDITAR_NUCLEO_FAMILIAR,
    payload: true,
  });

  const editarNucleoFamiliarExito = (datos) => ({
    type: EDITAR_NUCLEO_FAMILIAR_SUCCESS,
    payload: datos,
  });

  const editarNucleoFamiliarError = () => ({
    type: EDITAR_NUCLEO_FAMILIAR_ERROR,
    payload: true,
  });

  // ***************** Seleccion editar el editarEstado Usuario //****************/
export const editarEstadoMiembroAction = (Datos) => {
  return async (dispatch) => {
    dispatch(editarEstadoMiembro())
    const { obtenerNucleoFamiliar, setSelectActivar, estadoDatos, Id } = Datos
    try {
      const { data } = await Axios.patch(`/nucleofamiliar/estado-nucleofamiliar/${Id}`, {
        ESTADO: estadoDatos,
      })
      dispatch(editarEstadoMiembroExito(data.data))
      console.log(data.data[0].estado)
      const msgestado = data.data[0].estado === '1' ? 'activo' : 'desactivo'
      if (data.code === 200) {
         obtenerNucleoFamiliar()
        Swal.fire('Correcto',
         'El miembro del nucleo familiar se '+msgestado+' correctamente',
         'success')
      }

      setSelectActivar(false)
    } catch (error) {
      console.log(error)
    }
  }
}

const editarEstadoMiembro = () => ({
  type: ACTIVAR_MIEMBRO_NUCLEO_FAMILIAR,
  payload: true,
})

const editarEstadoMiembroExito = (datos) => ({
  type: ACTIVAR_MIEMBRO_NUCLEO_FAMILIAR_SUCCESS,
  payload: datos,
})


  export const trasladoMiembroFamiliarAction = (Dataform) => {
  return async (dispatch) => {
    dispatch(trasladoNucleoFamiliar());
    try {
          console.log(Dataform);
      const {data} = await Axios.put(`/nucleofamiliar/traslado-nucleofamiliar/${Dataform.Id}`, Dataform);
      console.log(data);
      dispatch(trasladoNucleoFamiliarExito(data.data));

      if (data.code === 200) {
        Swal.fire('Correcto',
         'El miembro del nucleo Familiar se traslado correctamente',
         'success')
      }
    } catch (error) {
      console.log(error);
      dispatch(trasladoNucleoFamiliarError());
    }
  };
};

const trasladoNucleoFamiliar = () => ({
    type: TRASLADO_NUCLEO_FAMILIAR,
    payload: true,
  });

  const trasladoNucleoFamiliarExito = (datos) => ({
    type: TRASLADO_NUCLEO_FAMILIAR_SUCCESS,
    payload: datos,
  });

  const trasladoNucleoFamiliarError = () => ({
    type: TRASLADO_NUCLEO_FAMILIAR_ERROR,
    payload: true,
  });



export const borrarNucleoFamiliarAction = (id) => {

  return async (dispatch) => {
    dispatch(eliminarNucleoFamiliar(id))

    try {
       const { data } = await Axios.delete(`/nucleofamiliar/delete-nucleofamiliar/${id}`)
      if (data.code === 200) {
        dispatch(eliminarNucleoFamiliarExito())
        // Si se elimina, mostrar alerta
        Swal.fire('Eliminado', 'Se eliminó correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
      //const { data } = error.response
      dispatch(eliminarNucleoFamiliarError())

      // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al intenar eliminar el registro. ',
      })
    }
  }
}

const eliminarNucleoFamiliar = (Id) => ({
  type: DELETE_NUCLEO_FAMILIAR,
  payload: Id
});

const eliminarNucleoFamiliarExito = () => ({
  type: DELETE_NUCLEO_FAMILIAR_SUCCESS,
});

const eliminarNucleoFamiliarError = () => ({
  type: DELETE_NUCLEO_FAMILIAR_ERROR,
  payload: true
});
