/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {
  crearCaracterizacionAction
/*   obtenerAsociacionAction,
  editarAsociacionAction,
  crearNuevoAsociacionAction,
  borrarAsociacionAction, */
} from '../action/CaracterizacionAction'
//import { obtenerMunicipioAction } from '../action/ParametrosAction'
import Swal from 'sweetalert2'

export const CaracterizacionForm = () => {
      const dispatch = useDispatch()
      const crearNuevoAsociacion = (Dataform) => dispatch(crearCaracterizacionAction(Dataform))


  const handleSubmit = (event) => {
    event.preventDefault();
   // setValidated(true)
    }

    return {
     handleSubmit,

    }
};
