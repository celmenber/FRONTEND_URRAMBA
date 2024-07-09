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
  const [nombreBotoGuardarActulizar, setNombreBotoGuardarActulizar] = useState(('Agregar Nueva Asociación'))

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

  const handleReset = () => {
    setDatoAsociacion({
      idMunicipio: '',
      nitAsociacion: '',
      nombreAsociacion: '',
      correoAsociacion: '',
      direccionAsociacion: '',
      telefonoAsociacion: '',
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true)
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
      if (Object.values(formularioDatos).some(value => !value)) {
        setValidated(true)

      }else{
        setValidated(false)
        crearNuevoAsociacion({
          formularioDatos,
        }).then(() => {
          handleReset();
        })
      }
    }
   }

   const handleActualizarAsociacion = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formularioDatos ={
      Id_municipio: datoAsociacion.idMunicipio,
      Nit: datoAsociacion.nitAsociacion,
      Nombre: datoAsociacion.nombreAsociacion,
      Direccion: datoAsociacion.telefonoAsociacion,
      Telefono: datoAsociacion.direccionAsociacion,
      Correo: datoAsociacion.correoAsociacion

    };
    const camposInvalidos = Object.keys(formularioDatos).some((key) => {
      const input = form[key];
      return input && input.required && !input.checkValidity();
    });

    if (camposInvalidos) {
      // Hay campos vacíos o no válidos
      setValidated(true);
    } else {
      // No hay campos vacíos o no válidos
      setValidated(false);

      // Verificar si algún campo está vacío
      const camposVacios = Object.values(formularioDatos).some(value => value === '');

      if (camposVacios) {
        // Hay campos vacíos
        setValidated(true);
      } else {
        // No hay campos vacíos
        setValidated(false);

        // Llamas a la acción de actualizar y esperas a que termine
        updateAsociacion({
          formularioDatos,
          Id: datoAsociacion.ID,
        }).then(() => {
          setNombreBotoGuardarActulizar('Agregar Nueva Asociación');
          dispatch(obtenerAsociacionAction());
          handleReset();
        });
      }
    }

    event.stopPropagation();
  };

  // función que redirige Eliminar ContactoConvenio
  const EliminarAsociacion = (Id) => {
      const datos = asociaciones.filter((C) => C.ID === Id);
      console.log(datos)
    Swal.fire({
      title: '¿Estas seguro de eliminar la Asociacion '+ datos[0].nombre +'?',
      text: 'La Asociacion eliminada no se podrá recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        dispatch(borrarAsociacionAction(Id))
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
    setDatoAsociacion,
    cargandolista,
    cargando,
    validated,
    datoAsociacion,
    handleActualizarAsociacion,
    nombreBotoGuardarActulizar,
    setNombreBotoGuardarActulizar
  }
}
