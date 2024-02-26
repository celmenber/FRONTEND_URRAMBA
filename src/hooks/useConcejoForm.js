/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {
  obtenerConcejoAction,
  crearNuevoConcejoAction,
  borrarConcejoAction,
  editarConcejoAction,
  } from '../action/ConsejoAction'
import { obtenerMunicipioAction } from '../action/ParametrosAction'
import { obtenerAsociacionAction } from '../action/AsociacionAction'
import { obtenerAutoridadTAction } from '../action/AutoridadTAction'
import Swal from 'sweetalert2'

export const ConcejoForm = () => {

  const dispatch = useDispatch()
  const obtenerMunicipio = () => dispatch(obtenerMunicipioAction())
  const obtenerAsociacion = () => dispatch(obtenerAsociacionAction())
  const obtenerAutoridadT = () => dispatch(obtenerAutoridadTAction())
  const obtenerConcejo = () => dispatch(obtenerConcejoAction())
  const crearNuevoConcejo = (Dataform) => dispatch(crearNuevoConcejoAction(Dataform))
  const actulizarConcejo = (Dataform) => dispatch(editarConcejoAction(Dataform))
  // const updateConcejo = (Dataform) => dispatch(editarConcejoAction(Dataform))

  //selecion del state en el  store
  const cargando = useSelector((state) => state.Asociacion.loading)
  const cargandolista = useSelector((state) => state.Asociacion.loadinglista)
  // const Asociacioneditar = useSelector((state) => state.Asociacion.Asociacioneditar)
  const Concejo = useSelector((state) => state.Concejo.concejolista)
  const Asociaciones = useSelector((state) => state.Asociacion.asociacionlista)
  const Autoridad = useSelector((state) => state.AutoridadT.listautoridad)
  const Municipio = useSelector((state) => state.Parametros.municipios)

  const [validated, setValidated] = useState(false)
  const [valedita, setValedita] = useState(false)
  

  const [datoConcejo, setDatoconcejo] = useState({
    id_asociacion: '',
    id_autoridad_tradicional: '',
    idMunicipio: '',
    nitConcejo: '',
    nombreConcejo: '',
    nombreAsociacion:''
  })

  // Leer los datos del formulario
  const onChangeFormulario = (e) => {
    setDatoconcejo({
      ...datoConcejo,
      [e.target.name]: e.target.value,
    })
  }

 const  handleReset = () => {
  setDatoconcejo({
    id_asociacion: '',
    id_autoridad_tradicional: '',
    idMunicipio: '',
    nitConcejo: '',
    nombreConcejo: '',
    nombreAsociacion:''
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
        Id_asociacion: datoConcejo.id_asociacion,
        Id_autoridad_tradicional: datoConcejo.id_autoridad_tradicional,
        Id_municipio: datoConcejo.idMunicipio,
        Nit: datoConcejo.nitConcejo,
        Nombre_concejo_comunitario: datoConcejo.nitConcejo,
      }


      if (valedita === false) {
        crearNuevoConcejo({
          formularioDatos,
         
        })

        handleReset()
        setValidated(false)
        return
      }

      setValedita(false)
      event.stopPropagation()
    }
    event.stopPropagation()
    setValidated(true)
  }

const handleActualizarConcejo = (event,param)=> {
debugger
  event.preventDefault();
  const form = event.currentTarget;

  if (form.checkValidity() === false) {
    event.stopPropagation();
  } else {
      const formularioDatos = {
        Id_asociacion: datoConcejo.id_asociacion,
        Id_autoridad_tradicional: datoConcejo.id_autoridad_tradicional,
        Id_municipio: datoConcejo.idMunicipio,
        Nit: datoConcejo.nitConcejo,
        Nombre_concejo_comunitario: datoConcejo.nombreAsociacion,
      };

      // Asumo que actulizarMiembro es una función que realiza la actualización
      // No tengo su implementación, así que debes ajustarlo según tu código real
      if (!valedita) {
          actulizarConcejo({
              formularioDatos,
              Id: datoConcejo.ID,
              handleReset,
          });
      }
  }

 
  event.stopPropagation();
  console.log(param)
}

  // función que redirige Eliminar ContactoConvenio
  const EliminarConcejo = (id) => {
    Swal.fire({
      title: '¿Estas seguro de eliminar el Concejo Comunitario?',
      text: 'El Concejo Comunitario eliminado no se podrá recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        dispatch(borrarConcejoAction(id))
      }
    })
  }


  return {
    handleSubmit,
    onChangeFormulario,
    obtenerConcejo,
    obtenerMunicipio,
    obtenerAutoridadT,
    obtenerAsociacion,
    EliminarConcejo,
    Concejo,
    Municipio,
    Asociaciones,
    Autoridad,
    cargandolista,
    cargando,
    validated,
    datoConcejo,
    setDatoconcejo,
    handleActualizarConcejo
    
  }
}
