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
    OBTENER_NUCLEO_FAMILIAR,
    OBTENER_NUCLEO_FAMILIAR_SUCCESS,
    OBTENER_NUCLEO_FAMILIAR_ERROR,
    DELETE_NUCLEO_FAMILIAR,
    DELETE_NUCLEO_FAMILIAR_SUCCESS,
    DELETE_NUCLEO_FAMILIAR_ERROR,
} = TYPES

// Crear nuevos Empleado

export const crearNuevoNucleoFamiliarAction = (Dataform) => {
  return async (dispatch) => {
    dispatch(agregarNucleoFamiliar())

    const { formularioDatos } = Dataform

    try {
      // insertar en la API
    

      const { data } = await Axios.post('/jefehogar/create-jefehogar', formularioDatos)

      // Si todo sale bien, actualizar el state
      const { datos } = data.data;
      dispatch(agregarNucleoFamiliarExito(datos))

      if (data.success === true) {
        Swal.fire('Correcto', 'El JegeHogar se agregar correctamente', 'success')
        
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

        dispatch(obtenerNucleoFamiliar());

        try {
            // https://urramba.cehim.co/api/nucleofamiiar/view-nucleofamiiar			
          const { data } = await Axios.get('/jefehogar/view-jefehogar');
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

const obtenerNucleoFamiliarExistosa = datos => ({
    type: OBTENER_NUCLEO_FAMILIAR_SUCCESS,
    payload: datos
})

const obtenerNucleoFamiliarError = (estado) => ({
    type: OBTENER_NUCLEO_FAMILIAR_ERROR,
    payload: estado
});





export const editarNucleoFamiliarAction = (Datos) => {
  
  return async (dispatch) => {
    dispatch(editarNucleoFamiliar());

    const id = Number(Datos.id);

    try {
     	
                          
      const {data} = await Axios.put(`/jefehogar/edit-jefehogar/${id}`, Datos.formularioDatos);
      

      dispatch(editarNucleoFamiliarExito(data.data.datos));

      if (data.code === 200) {
        Swal.fire(
          'Correcto',
          'El miembro de consejo se actualizó correctamente',
          'success'
        );
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



export const borrarNucleoFamiliarAction = (id) => {
  
  return async (dispatch) => {
    dispatch(eliminarNucleoFamiliar(id))

    try {
       const { data } = await Axios.delete(`/jefehogar/delete-jefehogar/${id}`)
      if (data.code === 200) {
        dispatch(eliminarNucleoFamiliarExito(id))
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
