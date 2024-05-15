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

  //selecion del state en el  store
  const { userDetails } = useSelector((state) => state.Auth);
  const cargando = useSelector((state) => state.Asociacion.loading)
  const cargandolista = useSelector((state) => state.Asociacion.loadinglista)
  // const Asociacioneditar = useSelector((state) => state.Asociacion.Asociacioneditar)
  const Concejo = useSelector((state) => state.Concejo.concejolista)
  const Asociaciones = useSelector((state) => state.Asociacion.asociacionlista)
  const Autoridad = useSelector((state) => state.AutoridadT.listautoridad)
  const Municipio = useSelector((state) => state.Parametros.municipios)

  const [validated, setValidated] = useState(false)
  const [nombreBotoGuardarActulizar, setNombreBotoGuardarActulizar] = useState(('Agregar Nuevo Concejo Comunitario'))
  // const [valedita, setValedita] = useState(false)


  const [datoConcejo, setDatoconcejo] = useState({
    id_asociacion: '',
    id_autoridad_tradicional: '',
    idMunicipio: '',
    nitConcejo: '',
    nombreConcejo: '',
    nombreAsociacion: ''
  })

  // Leer los datos del formulario
  const onChangeFormulario = (e) => {
    setDatoconcejo({
      ...datoConcejo,
      [e.target.name]: e.target.value,
    })
  }

  const handleReset = () => {
    setDatoconcejo({
      id_asociacion: '',
      id_autoridad_tradicional: '',
      idMunicipio: '',
      nitConcejo: '',
      nombreConcejo: '',
      nombreAsociacion: ''
    })


  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true); // Si hay campos inválidos, establecer validated a true
    } else {
      const formularioDatos = {
        Id_usuario: userDetails.ID_USER,
        Id_asociacion: datoConcejo.id_asociacion,
        Id_autoridad_tradicional: datoConcejo.id_autoridad_tradicional,
        Id_municipio: datoConcejo.idMunicipio,
        Nit: datoConcejo.nitConcejo,
        Nombre_concejo_comunitario: datoConcejo.nitConcejo,
      };

      // Verificar si hay campos vacíos antes de intentar guardar
      if (Object.values(formularioDatos).some(value => !value)) {
        setValidated(true); // Hay campos vacíos, establecer validated a true
      } else {
        setValidated(false); // No hay campos vacíos, establecer validated a false
        crearNuevoConcejo({
          formularioDatos,
        }).then(() => {
          handleReset();

        });
      }
    }
  };


  const handleActualizarConcejo = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // Obtener los campos del formulario
    const formularioDatos = {
      Id_asociacion: datoConcejo.id_asociacion,
      Id_autoridad_tradicional: datoConcejo.id_autoridad_tradicional,
      Id_municipio: datoConcejo.idMunicipio,
      Nit: datoConcejo.nitConcejo,
      Nombre_concejo_comunitario: datoConcejo.nombreAsociacion,
    };

    // Verificar si hay campos vacíos o no válidos
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
        actulizarConcejo({
          formularioDatos,
          Id: datoConcejo.ID,
        }).then(() => {
          setNombreBotoGuardarActulizar('Agregar Nuevo Concejo Comunitario');
          dispatch(obtenerConcejoAction());
          handleReset();
        });
      }
    }

    event.stopPropagation();
  };



  // función que redirige Eliminar ContactoConvenio
  const EliminarConcejo = (Id) => {
      const datos = Concejo.filter((C) => C.ID === Id);
    Swal.fire({
      title: '¿Estas seguro de eliminar el Concejo Comunitario '+ datos[0].nombre_concejo_comunitario +'?',
      text: 'El Concejo Comunitario eliminado no se podrá recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        dispatch(borrarConcejoAction(Id))
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
    handleActualizarConcejo,
    nombreBotoGuardarActulizar,
    setNombreBotoGuardarActulizar
  }
}
