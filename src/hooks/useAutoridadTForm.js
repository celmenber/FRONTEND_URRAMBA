/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  crearNuevoAutoridadTAction,
  editarAutoridadTAction,
  obtenerAutoridadTAction,
  borrarAutoridadTAction
} from '../action/AutoridadTAction';
//import { obtenerAsociacionAction } from '../action/AsociacionAction'
import { obtenerBarrioVeredaAction } from '../action/ParametrosAction'
import Swal from 'sweetalert2';

export const EmpleadoForm = () => {
  const dispatch = useDispatch()
 // const obtenerAsociacion = () => dispatch(obtenerAsociacionAction())
  const obtenerBarrioVereda = () => dispatch(obtenerBarrioVeredaAction())
  const obtenerAutoridadT = () => dispatch(obtenerAutoridadTAction());
  const crearNuevoAutoridadT = (Dataform) => dispatch(crearNuevoAutoridadTAction(Dataform));
  const actulizarAutoridadT = (Dataform) => dispatch(editarAutoridadTAction(Dataform));

    //selecion del state en el  store
   // const { userDetails } = useSelector((state) => state.Auth);
  const cargando = useSelector(state => state.AutoridadT.loading);
  const cargandolista = useSelector(state => state.AutoridadT.loadinglista);
  const barrios = useSelector(state => state.Parametros.barriosveredas);
  // const asociacion = useSelector(state => state.Asociacion.asociacionlista);
  const autoridadT = useSelector(state => state.AutoridadT.listautoridad);

    const [validated, setValidated] = useState(false);
    const [valedita, setValedita] = useState(false)
    const [selectActivar, setSelectActivar] = useState(false);
    const [visibleAT, setVisibleAT] = useState(false)
    const [visibleEAT, setVisibleEAT] = useState(false)

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
              Id_tipo_documento:1,
              Documentos:datoEmpleado.Documentos,
              Nombres: datoEmpleado.Nombres,
              Apellidos: datoEmpleado.Apellidos,
              Direccion: datoEmpleado.Direccion,
              Telefono:datoEmpleado.Telefono,
              Correo:datoEmpleado.Correo,
              Estado: datoEmpleado.Estado,
              Fecha_ingreso: '2023-12-30' //datoEmpleado.Fecha_ingreso
            }

            if (valedita === false) {

              crearNuevoAutoridadT({
                    formularioDatos,
                    handleReset
                })
            }

           // setValedita(false)
            setVisibleAT(false)
            event.stopPropagation()
        }
       // event.stopPropagation()
        setValidated(true)
    }



    // función que redirige Edita ContactoAsunto
  const editarAutoridadT = id => {
    const datos = autoridadT.filter(C => C.ID === id)
      // console.log(datos)
      //  dispatch(obtenerConvenioEditarAction(datos));
            setDatoEmpleado({
              Id_asociacion: datos[0].id_asociacion === null ? '' : datos[0].id_asociacion,
              Id_barrio_vereda: datos[0].id_barrio_vereda === null ? '' : datos[0].id_barrio_vereda,
              Documentos: datos[0].documentos === null ? '' : datos[0].documentos,
              Nombres: datos[0].nombres === null ? '' : datos[0].nombres,
              Apellidos: datos[0].apellidos === null ? '' : datos[0].apellidos,
              Direccion: datos[0].direccion === null ? '' : datos[0].direccion,
              Telefono: datos[0].telefono === null ? '' : datos[0].telefono,
              Correo: datos[0].correo === null ? '' : datos[0].correo,
              Estado: datos[0].estado === null ? '' : datos[0].estado,
            })
        setValedita(true)
        setVisibleEAT(true)
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
  const eliminarAutoridadT = id => {
        Swal.fire({
            title: '¿Estas seguro de eliminar?',
          text: "La autoridad tradicional eliminada no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
              dispatch(borrarAutoridadTAction(id));
            }
        });
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
      obtenerAutoridadT,
      actulizarAutoridadT,
      obtenerBarrioVereda,
       eliminarAutoridadT,
       editarAutoridadT,
    /* metodos */
    //  userDetails,
    //  asociacion,
      autoridadT,
      barrios,
      validated,
      valedita,
      datoEmpleado, setDatoEmpleado,
      selectActivar, setSelectActivar,
      visibleAT, setVisibleAT,
      visibleEAT, setVisibleEAT,
      cargandolista,
      cargando
  }
}
