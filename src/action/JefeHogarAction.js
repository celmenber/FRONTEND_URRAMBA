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
    DELETE_JEFE_HOGAR,
    DELETE_JEFE_HOGAR_SUCCESS,
    DELETE_JEFE_HOGAR_ERROR,
} = TYPES

// Crear nuevos Empleado

export const crearNuevoJefeHogarAction = (Dataform) => {
  return async (dispatch) => {
    dispatch(agregarJefeHogar())

    const { formularioDatos } = Dataform

    try {
      // insertar en la API
    

      const { data } = await Axios.post('/jefehogar/create-jefehogar', formularioDatos)

      // Si todo sale bien, actualizar el state
      const { datos } = data.data;
      dispatch(agregarJefeHogarExito(datos))

      if (data.success === true) {
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
      

      dispatch(editarJefeHogarExito(data.data.datos[0]));

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
        text: 'Hubo un error al intenar eliminar el registro. ',
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
