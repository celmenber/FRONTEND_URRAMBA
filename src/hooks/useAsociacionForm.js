/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  obtenerAsociacionAction,
  crearNuevoAsociacionAction,
  editarAsociacionAction,
  editarEstadoAsociacionAction,
  obtenerAsociacionEditarAction,
  borrarAsociacionAction,
} from '../action/AsociacionAction'
import { obtenerMunicipioAction } from '../action/MunicipioAction'
import Swal from 'sweetalert2'

export const AsociacionForm = () => {
  const dispatch = useDispatch()
  const obtenerMunicipio = () => dispatch(obtenerMunicipioAction())
  const obtenerAsociacion = () => dispatch(obtenerAsociacionAction())
  const crearNuevoAsociacion = (Dataform) => dispatch(crearNuevoAsociacionAction(Dataform))
  const updateAsociacion = (Dataform) => dispatch(editarAsociacionAction(Dataform))

  //selecion del state en el  store
  const { userDetails } = useSelector((state) => state.Auth)
  const cargando = useSelector((state) => state.Asociacion.loading)
  const cargandolista = useSelector((state) => state.Asociacion.loadinglista)
  const asociacioneditar = useSelector((state) => state.Asociacion.asociacioneditar)
  const { municipio } = useSelector((state) => state.Municipio)
  const { asociacion } = useSelector((state) => state.Asociacion)

  const [validated, setValidated] = useState(false)
  const [valedita, setValedita] = useState(false)
  const [selectActivar, setSelectActivar] = useState(false)
  const [visibleNCV, setVisibleNCV] = useState(false)
  const [visibleCV, setVisibleCV] = useState(false)
  const [visibleCODCV, setVisibleCODCV] = useState(false)

  const [datoAsociacion, setDatoAsociacion] = useState({
    idMunicipio: '',
    estado: '',
    nitEmpresa: '',
    nombrEmpresa: '',
    correoEmpresa: '',
    direccionEmpresa: '',
    telefonoEmpresa: '',
    representanteEmpresa: '',
  })

  // Leer los datos del formulario
  const onChangeFormulario = (e) => {
    setDatoAsociacion({
      ...datoAsociacion,
      [e.target.name]: e.target.value,
    })
  }
  const handleReset = () => {
    setDatoAsociacion({
      idMunicipio: '',
      estado: '',
      nitEmpresa: '',
      nombrEmpresa: '',
      correoEmpresa: '',
      direccionEmpresa: '',
      telefonoEmpresa: '',
      representanteEmpresa: '',
    })
    setValedita(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      const formularioDatos = {
        IdMunicipio: datoAsociacion.idMunicipio,
        Estado: datoAsociacion.estado,
        NitEmpresa: datoAsociacion.nitEmpresa,
        NombrEmpresa: datoAsociacion.nombrEmpresa,
        CorreoEmpresa: datoAsociacion.correoEmpresa,
        DireccionEmpresa: datoAsociacion.direccionEmpresa,
        TelefonoEmpresa: datoAsociacion.telefonoEmpresa,
        RepresentanteEmpresa: datoAsociacion.representanteEmpresa,
      }

      if (valedita === false) {
        formularioDatos.UsuarioCreacion = userDetails.Id

        crearNuevoAsociacion({
          formularioDatos,
          handleReset,
        })
      }

      setValedita(false)
      setVisibleNCV(false)
      event.stopPropagation()
    }
    event.stopPropagation()
    setValidated(true)
  }

  // función que redirige Edita ContactoAsunto
  const EditaAsociacion = (id) => {
    const datos = asociacion.filter((C) => C.IdAsociacion === id)
    dispatch(obtenerAsociacionEditarAction(datos))

    setDatoAsociacion({
      idMunicipio: datos[0].IdMunicipio === null ? '' : datos[0].IdMunicipio,
      estado: datos[0].Estado === null ? '' : datos[0].Estado,
      nitEmpresa: datos[0].NitEmpresa === null ? '' : datos[0].NitEmpresa,
      nombrEmpresa: datos[0].NombrEmpresa === null ? '' : datos[0].NombrEmpresa,
      correoEmpresa: datos[0].CorreoEmpresa === null ? '' : datos[0].CorreoEmpresa,
      direccionEmpresa: datos[0].DireccionEmpresa === null ? '' : datos[0].DireccionEmpresa,
      telefonoEmpresa: datos[0].TelefonoEmpresa === null ? '' : datos[0].TelefonoEmpresa,
      representanteEmpresa:
        datos[0].RepresentanteEmpresa === null ? '' : datos[0].RepresentanteEmpresa,
    })

    setValedita(true)
    setVisibleCV(true)
  }

  // función que redirige Editaservicio
  const UpdateAsociacionEstado = (Id) => {
    const datos = asociacion.filter((C) => C.IdAsociacion === Id)
    dispatch(
      editarEstadoAsociacionAction({
        Id,
        setSelectActivar,
        estadoDatos: datos[0].Estado === null ? '' : datos[0].Estado,
      }),
    )
  }

  // función que redirige Eliminar ContactoAsociacion
  const EliminarAsociacion = (id) => {
    Swal.fire({
      title: '¿Estas seguro de eliminar?',
      text: 'El Asociacion eliminado no se podrá recuperar',
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

  // función que redirige EditaservicioImagen
  const GeneraCodigo = (Id) => {
    const datos = asociacion.filter((C) => C.IdAsociacion === Id)
    setDatoAsociacion({
      IdAsociacion: datos[0].IdAsociacion === null ? '' : datos[0].IdAsociacion,
      nitEmpresa: datos[0].NitEmpresa === null ? '' : datos[0].NitEmpresa,
      nombrEmpresa: datos[0].NombrEmpresa === null ? '' : datos[0].NombrEmpresa,
      CorreoEmpresa: datos[0].CorreoEmpresa === null ? '' : datos[0].CorreoEmpresa,
    })
    setVisibleCODCV(true)
  }

  const BuscaMunicipio = (id) => {
    const Arraymunicipio = municipio.filter((P) => P.MunicipioId === parseInt(id))
    const Municipio = Arraymunicipio.length !== 0 ? Arraymunicipio[0].NombreMunicipio : ''
    return Municipio
  }
  return {
    /* funciones */
    handleSubmit,
    onChangeFormulario,
    handleReset,
    obtenerMunicipio,
    obtenerAsociacion,
    crearNuevoAsociacion,
    UpdateAsociacionEstado,
    updateAsociacion,
    EliminarAsociacion,
    EditaAsociacion,
    asociacioneditar,
    BuscaMunicipio,
    GeneraCodigo,
    datoAsociacion,
    /* metodos */
    userDetails,
    setDatoAsociacion,
    municipio,
    asociacion,
    validated,
    valedita,
    selectActivar,
    setSelectActivar,
    visibleNCV,
    setVisibleNCV,
    visibleCV,
    setVisibleCV,
    visibleCODCV,
    setVisibleCODCV,
    cargandolista,
    cargando,
  }
}
