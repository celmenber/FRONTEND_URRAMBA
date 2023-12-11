/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux'

import {
  obtenerAsociacioncodAction,
  editarAsociacioncodAction,
  crearNuevoAsociacioncodAction,
  borrarAsociacioncodAction,
} from '../action/AsociacionAction'

import { obtenerMunicipioAction } from '../action/ParametrosAction'

import Swal from 'sweetalert2'
import { useState } from 'react'

export const AsociacionForm = () => {

  const dispatch = useDispatch()
  const obtenerMunicipio = () => dispatch(obtenerMunicipioAction())
  const obtenerAsociacion = () => dispatch(obtenerAsociacioncodAction())
  const crearNuevoAsociacion = (Dataform) => dispatch(crearNuevoAsociacioncodAction(Dataform))
  const updateAsociacion = (Dataform) => dispatch(editarAsociacioncodAction(Dataform))

  //selecion del state en el  store
  // const { userDetails } = useSelector((state) => state.Auth)
  const cargando = useSelector((state) => state.Asociacion.loading)
  const cargandolista = useSelector((state) => state.Asociacion.loadinglista)
  const asociacioncodeditar = useSelector((state) => state.Asociacion.asociacioncodeditar)
  //const { asociacioncodigo } = useSelector((state) => state.AsociacionCodigo)
  const Municipio = useSelector((state) => state.Parametros.municipios)

  const [validated, setValidated] = useState(false)
  const [valedita, setValedita] = useState(false)

  const [datoAsociacion, setDatoAsociacion] = useState({
    idMunicipio: '',
    nitAsociacion: '',
    nombreAsociacion: '',
    correoAsociacion: '',
    direccionAsociacion: '',
    telefonoAsociacion: '',
  })

  // Leer los datos del formulario
  const onChangeFormulario = (e) => {
    setDatoAsociacion({
      ...datoAsociacion,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      const formularioDatos = {
        Id_municipio: datoAsociacion.idMunicipio,
        Nit: datoAsociacion.nitAsociacion,
        Nombre: datoAsociacion.nombreAsociacion,
        Direccion: datoAsociacion.telefonoAsociacion,
        Telefono: datoAsociacion.direccionAsociacion,
        Correo: datoAsociacion.correoAsociacion
      }

      if (valedita === false) {
        crearNuevoAsociacion({
          formularioDatos,
        //  handleReset,
        })
      }

      setValedita(false)
      event.stopPropagation()
    }
    event.stopPropagation()
    setValidated(true)
  }

  // función que redirige Eliminar ContactoConvenio
  const EliminarAsociacion = (id) => {
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
    handleSubmit,
    onChangeFormulario,
    crearNuevoAsociacion,
    updateAsociacion,
    obtenerAsociacion,
    obtenerMunicipio,
    EliminarAsociacion,
    asociacioncodeditar,
    Municipio,
   // userDetails,
  //  asociacioncodigo,
    cargandolista,
    cargando,
    validated,
    datoAsociacion
  }
}
