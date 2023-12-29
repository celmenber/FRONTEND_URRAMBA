/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  crearNuevoEmpleadoAction,
  obtenerEmpleadoAction,
  editarEmpleadoAction,
  borrarEmpleadoAction
} from '../action/EmpleadoAction';
import { obtenerAsociacionAction } from '../action/AsociacionAction'
import { obtenerBarrioVeredaAction } from '../action/ParametrosAction'
import Swal from 'sweetalert2';

export const EmpleadoForm = () => {
  const dispatch = useDispatch()
  const obtenerAsociacion = () => dispatch(obtenerAsociacionAction())
  const obtenerBarrioVereda = () => dispatch(obtenerBarrioVeredaAction())
  const obtenerEmpleado = () => dispatch(obtenerEmpleadoAction());
  const crearNuevoEmpleado = (Dataform) => dispatch(crearNuevoEmpleadoAction(Dataform));
  const editarEmpleado = (Dataform) => dispatch(editarEmpleadoAction(Dataform));

    //selecion del state en el  store
   // const { userDetails } = useSelector((state) => state.Auth);
  const cargando = useSelector(state => state.Empleado.loading);
  const cargandolista = useSelector(state => state.Empleado.loadinglista);
  const barrios = useSelector(state => state.Parametros.barriosveredas);
  const asociacion = useSelector(state => state.Asociacion.asociacionlista);
  const empleados  = useSelector(state => state.Empleado.listaempleado);

    const [validated, setValidated] = useState(false);
    const [valedita, setValedita] = useState(false)
    const [selectActivar, setSelectActivar] = useState(false);
    const [visibleE, setVisibleE] = useState(false)
    const [visibleCV, setVisibleCV] = useState(false)

    const [datoEmpleado, setDatoEmpleado] = useState({
          Id_asociacion:'',
          Id_barrio_vereda:'',
          Id_tipo_documento:'',
          Documentos:'',
          Nombres: '',
          Apellidos: '',
          Direccion:'',
          Telefono:'',
          Correo:'',
          Estado: '',
          Fecha_ingreso:'',
    })

    // Leer los datos del formulario
    const onChangeFormulario = e => {
      setDatoEmpleado({
        ...datoEmpleado,
            [e.target.name]: e.target.value
        })
    }
    const handleReset = () => {
      setDatoEmpleado({
            Id_asociacion: '',
            Id_barrio_vereda: '',
            Id_tipo_documento: '',
            Documentos: '',
            Nombres: '',
            Apellidos: '',
            Direccion: '',
            Telefono: '',
            Correo: '',
            Estado: '',
            Fecha_ingreso: '',
        })
        setValedita(false)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        } else {

            const formularioDatos = {
              Id_asociacion: datoEmpleado.Id_asociacion,
              Id_barrio_vereda:datoEmpleado.Id_barrio_vereda,
              Id_tipo_documento:datoEmpleado.Id_tipo_documento,
              Documentos:datoEmpleado.Documentos,
              Nombres: datoEmpleado.Nombres,
              Apellidos: datoEmpleado.Apellidos,
              Direccion: datoEmpleado.Direccion,
              Telefono:datoEmpleado.Telefono,
              Correo:datoEmpleado.Correo,
              Estado: datoEmpleado.Estado,
              Fecha_ingreso: datoEmpleado.Fecha_ingreso
            }

            if (valedita === false) {

              crearNuevoEmpleado({
                    formularioDatos,
                    handleReset
                })
            }

            setValedita(false)
          setVisibleE(false)
            event.stopPropagation()
        }
        event.stopPropagation()
        setValidated(true)
    }



    // función que redirige Edita ContactoAsunto
    const EditaConvenio= id => {
/*         const datos = convenio.filter(C => C.IdConvenio === id)
        dispatch(obtenerConvenioEditarAction(datos));

        setDatoConvenio({
            idMunicipio: datos[0].IdMunicipio === null ? '' : datos[0].IdMunicipio,
            estado: datos[0].Estado === null ? '' : datos[0].Estado,
            nitEmpresa: datos[0].NitEmpresa === null ? '' : datos[0].NitEmpresa,
            nombrEmpresa: datos[0].NombrEmpresa === null ? '' : datos[0].NombrEmpresa,
            correoEmpresa: datos[0].CorreoEmpresa === null ? '' : datos[0].CorreoEmpresa,
            direccionEmpresa: datos[0].DireccionEmpresa === null ? '' : datos[0].DireccionEmpresa,
            telefonoEmpresa: datos[0].TelefonoEmpresa === null ? '' : datos[0].TelefonoEmpresa,
            representanteEmpresa: datos[0].RepresentanteEmpresa === null ? '' : datos[0].RepresentanteEmpresa,
        })

        setValedita(true)
        setVisibleCV(true) */
    }

    // función que redirige Editaservicio
    const UpdateConvenioEstado = Id => {
      /*   const datos = convenio.filter(C => C.IdConvenio === Id);
        dispatch(editarEstadoConvenioAction({
            Id,
            setSelectActivar,
            estadoDatos: datos[0].Estado === null ? '' : datos[0].Estado,
        })); */
    }


    // función que redirige Eliminar ContactoConvenio
    const EliminarConvenio = id => {
      /*   Swal.fire({
            title: '¿Estas seguro de eliminar?',
            text: "El Convenio eliminado no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                dispatch(borrarConvenioAction(id));
            }
        }); */
    }

  /*   const BuscaMunicipio = id => {
        const Arraymunicipio = municipio.filter(P => P.MunicipioId === parseInt(id))
        const Municipio = Arraymunicipio.length !== 0 ? Arraymunicipio[0].NombreMunicipio : ''
        return Municipio
    } */
  return {
      /* funciones */
      handleSubmit,
      onChangeFormulario,
      handleReset,
      obtenerEmpleado,
      obtenerAsociacion,
      obtenerBarrioVereda,
   /*   obtenerConvenio,
      crearNuevoConvenio,
      UpdateConvenioEstado,
      updateConvenio,
      EliminarConvenio,
      EditaConvenio,
      convenioeditar,*/
    /* metodos */
    //  userDetails,
      asociacion,
      empleados,
      barrios,
      validated,
      valedita,
      datoEmpleado, setDatoEmpleado,
      selectActivar, setSelectActivar,
      visibleE, setVisibleE,
      visibleCV, setVisibleCV,
      cargandolista,
      cargando
  }
}
