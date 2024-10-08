/* eslint-disable prettier/prettier */


import TYPES from 'src/type/JefeHogarType';
import { Axios } from '../config/axios';
import Swal from 'sweetalert2';
const {
    ADD_JEFE_HOGAR,
    ADD_JEFE_HOGAR_SUCCESS,
    ADD_JEFE_HOGAR_ERROR,
    EDITAR_JEFE_HOGAR,
    EDITAR_JEFE_HOGAR_SUCCESS,
    EDITAR_JEFE_HOGAR_ERROR,
    OBTENER_JEFE_HOGAR,
    OBTENER_JEFE_HOGAR_SUCCESS,
    OBTENER_JEFE_HOGAR_ERROR,
    OBTENER_JEFE_HOGAR_BY_ID,
    OBTENER_JEFE_HOGAR_BY_ID_SUCCESS,
    OBTENER_JEFE_HOGAR_BY_ID_ERROR,
    TRASLADO_JEFE_HOGAR,
    TRASLADO_JEFE_HOGAR_SUCCESS,
    TRASLADO_JEFE_HOGAR_ERROR,
    BUSQUEDA_JEFE_HOGAR,
    BUSQUEDA_JEFE_HOGAR_SUCCESS,
    BUSQUEDA_JEFE_HOGAR_ERROR,
    DELETE_JEFE_HOGAR,
    DELETE_JEFE_HOGAR_SUCCESS,
    DELETE_JEFE_HOGAR_ERROR,
} = TYPES

// Crear nuevos JEFE HOGAR

export const crearNuevoJefeHogarAction = (Dataform) => {
  return async (dispatch) => {
    dispatch(agregarJefeHogar())

    const { formularioDatos, handleReset } = Dataform

    try {
      // insertar en la API
      const { data } = await Axios.post('/jefehogar/create-jefehogar', formularioDatos)
      // Si todo sale bien, actualizar el state
       if (data.code === 203) {
        const valmsg = data.response.split('-')[1]
        const stringMsg = valmsg === '1'
        ? 'El numero de documento digitado aparece como jefe de hogar'
        : 'El numero de documento digitado ya aparece como miembro de un nucleo familiar'
          dispatch(agregarJefeHogarError(true))
        Swal.fire({
              icon: 'error',
              title: 'Error',
              text: stringMsg,
            })
            return false;
        }

      dispatch(agregarJefeHogarExito(data.data[0]))

      if (data.code === 201) {
         handleReset()
         Swal.fire('Correcto', 'El JegeHogar se agregar correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
      dispatch(agregarJefeHogarError(true))
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al intenar agregar el registro, intenta nuevamente',
      })
    }
  }
}

const agregarJefeHogar = () => ({
  type: ADD_JEFE_HOGAR,
  payload: true,
})

// si el producto se guarda en la base de datos
const agregarJefeHogarExito = (datos) => ({
  type: ADD_JEFE_HOGAR_SUCCESS,
  payload: datos,
})

// si hubo un error
const agregarJefeHogarError = (estado) => ({
  type: ADD_JEFE_HOGAR_ERROR,
  payload: estado,
})


export const obtenerJefeHogarAction = () => {

    return async (dispatch) => {

        dispatch(obtenerJefeHogar());

        try {
          const { data } = await Axios.get('/jefehogar/view-jefehogar');
            if (data.code === 200) {
                dispatch(obtenerJefeHogarExitosa(data.data))
            }
        } catch (error) {
            console.log(error);
            dispatch(obtenerJefeHogarError())
        }
    }
}

const obtenerJefeHogar = () => ({
    type: OBTENER_JEFE_HOGAR,
    payload: true
});

const obtenerJefeHogarExitosa = datos => ({
    type: OBTENER_JEFE_HOGAR_SUCCESS,
    payload: datos
})

const obtenerJefeHogarError = (estado) => ({
    type: OBTENER_JEFE_HOGAR_ERROR,
    payload: estado
});


export const obtenerJefeHogarByIdAction = (id) => {
  return async (dispatch) => {
      dispatch(obtenerJefeHogarById());
      try {
        const { data } = await Axios.get(`/jefehogar/view-jefehogar/${id}`);
          if (data.code === 200) {
              dispatch(obtenerJefeHogarByIdExitosa(data.data))
          }
      } catch (error) {
          console.log(error);
          dispatch(obtenerJefeHogarByIdError())
      }
  }
}

const obtenerJefeHogarById = () => ({
  type: OBTENER_JEFE_HOGAR_BY_ID,
  payload: true
});

const obtenerJefeHogarByIdExitosa = id => ({
  type: OBTENER_JEFE_HOGAR_BY_ID_SUCCESS,
  payload: id
})

const obtenerJefeHogarByIdError = (estado) => ({
  type: OBTENER_JEFE_HOGAR_BY_ID_ERROR,
  payload: estado
});

export const editarJefeHogarAction = (Datos) => {

  return async (dispatch) => {
    dispatch(editarJefeHogar());

    const id = Number(Datos.id);

    try {

      const {data} = await Axios.put(`/jefehogar/edit-jefehogar/${id}`, Datos.formularioDatos);

 if (data.code === 203) {
        const valmsg = data.response.split('-')[1]
        const stringMsg = valmsg === '1'
        ? 'El numero de documento digitado aparece como jefe de hogar'
        : 'El numero de documento digitado ya aparece como miembro de un nucleo familiar'

          dispatch(agregarJefeHogarError(true))

        Swal.fire({
              icon: 'error',
              title: 'Error',
              text: stringMsg,
            })
            return false;
        }
     // console.log(data.data[0]);
      dispatch(editarJefeHogarExito(data.data[0]));

      if (data.code === 200) {
        Swal.fire(
          'Correcto',
          'El miembro de consejo se actualizó correctamente',
          'success'
        );
      }
    } catch (error) {
      console.log(error);
      dispatch(editarJefeHogarError());
    }
  };
};

  const editarJefeHogar = () => ({
    type: EDITAR_JEFE_HOGAR,
    payload: true,
  });

  const editarJefeHogarExito = (datos) => ({
    type: EDITAR_JEFE_HOGAR_SUCCESS,
    payload: datos,
  });

  const editarJefeHogarError = () => ({
    type: EDITAR_JEFE_HOGAR_ERROR,
    payload: true,
  });

  export const trasladoJefeHogarAction = (Dataform) => {
  return async (dispatch) => {
    dispatch(trasladoJefeHogar());
    try {
      //console.log(Dataform);
      const {data} = await Axios.put(`/jefehogar/traslado-jefehogar/${Dataform.Id}`, Dataform);
      console.log(data);
      dispatch(trasladoJefeHogarExito(data.data));
      const msg = Dataform.check === 0 ?  'Traslado': 'Desafilio'
      if (data.code === 200) {
        Swal.fire('Correcto',
         'El jefe de hogar se '+msg+' correctamente',
         'success')
      }
    } catch (error) {
      console.log(error);
      dispatch(trasladoJefeHogarError());
    }
  };
};

  const trasladoJefeHogar = () => ({
    type: TRASLADO_JEFE_HOGAR,
    payload: true,
  });

  const trasladoJefeHogarExito = (datos) => ({
    type: TRASLADO_JEFE_HOGAR_SUCCESS,
    payload: datos,
  });

  const trasladoJefeHogarError = () => ({
    type: TRASLADO_JEFE_HOGAR_ERROR,
    payload: true,
  });


export const buscarJefeHogarAction = (Dataform) => {
  return async (dispatch) => {
    dispatch(buscarJefeHogar())
   // const { formularioDatos, handleReset } = Dataform
    try {
      // insertar en la API
      console.log(Dataform)
      const { data } = await Axios.post('/jefehogar/view-jefehogar-filtro', Dataform)
      // Si todo sale bien, actualizar el state
        console.log(data)
       if (data.code === 200) {
         dispatch(buscarJefeHogarExito(data.data))
        }
    } catch (error) {
      console.log(error)
      dispatch(buscarJefeHogarError(true))
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al intenar buscar el registro, intenta nuevamente',
      })
    }
  }
}

const buscarJefeHogar = () => ({
  type: BUSQUEDA_JEFE_HOGAR,
  payload: true
});

const buscarJefeHogarExito = (datos) => ({
  type: BUSQUEDA_JEFE_HOGAR_SUCCESS,
   payload: datos
});

const buscarJefeHogarError = () => ({
  type: BUSQUEDA_JEFE_HOGAR_ERROR,
  payload: true
});



export const borrarJefeHogarAction = (id) => {

  return async (dispatch) => {
    dispatch(eliminaJefeHogar(id))

    try {
       const { data } = await Axios.delete(`/jefehogar/delete-jefehogar/${id}`)
      if (data.code === 200) {
        dispatch(eliminarJefeHogarExito(id))
        // Si se elimina, mostrar alerta
        Swal.fire('Eliminado', 'Se eliminó correctamente', 'success')
      }
    } catch (error) {
      console.log(error)
      //const { data } = error.response
      dispatch(eliminarJefeHogarError())

      // alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No es posible eliminar el jefe de hogar, tiene asignacion de registro.',
      })
    }
  }
}

const eliminaJefeHogar = (Id) => ({
  type: DELETE_JEFE_HOGAR,
  payload: Id
});

const eliminarJefeHogarExito = () => ({
  type: DELETE_JEFE_HOGAR_SUCCESS,
});

const eliminarJefeHogarError = () => ({
  type: DELETE_JEFE_HOGAR_ERROR,
  payload: true
});
