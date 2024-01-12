/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {
  obtenerAsociacionAction,
  editarAsociacionAction,
  crearNuevoAsociacionAction,
  borrarAsociacionAction,
} from '../action/AsociacionAction'
import { obtenerMunicipioAction } from '../action/ParametrosAction'
import Swal from 'sweetalert2'

export const AsociacionForm = () => {

  const dispatch = useDispatch()
  const obtenerMunicipio = () => dispatch(obtenerMunicipioAction())
  const obtenerAsociacion = () => dispatch(obtenerAsociacionAction())
  const crearNuevoAsociacion = (Dataform) => dispatch(crearNuevoAsociacionAction(Dataform))
  const updateAsociacion = (Dataform) => dispatch(editarAsociacionAction(Dataform))

  //selecion del state en el  store
  const cargando = useSelector((state) => state.Asociacion.loading)
  const cargandolista = useSelector((state) => state.Asociacion.loadinglista)
  const Asociacioneditar = useSelector((state) => state.Asociacion.Asociacioneditar)
  const asociaciones = useSelector((state) => state.Asociacion.asociacionlista)
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
//console.log(formularioDatos)
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
        dispatch(borrarAsociacionAction(id))
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
    Asociacioneditar,
    Municipio,
    asociaciones,
   // userDetails,
  //  Asociacionigo,
    cargandolista,
    cargando,
    validated,
    datoAsociacion
  }
}
