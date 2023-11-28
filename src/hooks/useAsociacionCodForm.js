/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux'

import {
  obtenerAsociacioncodAction,
  editarAsociacioncodAction,
  crearNuevoAsociacioncodAction,
  borrarAsociacioncodAction,
} from '../action/AsociacionCodigoAction'
import Swal from 'sweetalert2'

export const AsociacionCodForm = () => {
  const dispatch = useDispatch()
  const obtenerAsociacioncod = () => dispatch(obtenerAsociacioncodAction())
  const crearNuevoAsociacioncod = (Dataform) => dispatch(crearNuevoAsociacioncodAction(Dataform))
  const updateAsociacioncod = (Dataform) => dispatch(editarAsociacioncodAction(Dataform))

  //selecion del state en el  store
  const { userDetails } = useSelector((state) => state.Auth)
  const cargando = useSelector((state) => state.AsociacionCodigo.loading)
  const cargandolista = useSelector((state) => state.AsociacionCodigo.loadinglista)
  const asociacioncodeditar = useSelector((state) => state.AsociacionCodigo.asociacioncodeditar)
  const { asociacioncodigo } = useSelector((state) => state.AsociacionCodigo)

  // función que redirige Eliminar ContactoConvenio
  const EliminarAsociacionCod = (id) => {
    Swal.fire({
      title: '¿Estas seguro de eliminar el Codigo?',
      text: 'El Codigo eliminado no se podrá recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        dispatch(borrarAsociacioncodAction(id))
      }
    })
  }

  return {
    crearNuevoAsociacioncod,
    updateAsociacioncod,
    obtenerAsociacioncod,
    EliminarAsociacionCod,
    asociacioncodeditar,
    userDetails,
    asociacioncodigo,
    cargandolista,
    cargando,
  }
}
