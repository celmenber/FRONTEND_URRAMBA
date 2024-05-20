/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  borrarEmpleadoAction,
  crearNuevoEmpleadoAction,
  editarEmpleadoAction,
  obtenerEmpleadoAction,
} from '../action/EmpleadoAction';
import { obtenerAsociacionAction } from '../action/AsociacionAction'
import { obtenerBarrioVeredaAction } from '../action/ParametrosAction'
import { obtenerPerfilAction } from '../action/UsuarioAction'
import Swal from 'sweetalert2';

export const EmpleadoForm = () => {

  const dispatch = useDispatch()
  const obtenerPerfil = () => dispatch(obtenerPerfilAction())
  const obtenerAsociacion = () => dispatch(obtenerAsociacionAction())
  const obtenerBarrioVereda = () => dispatch(obtenerBarrioVeredaAction())
  const obtenerEmpleado = () => dispatch(obtenerEmpleadoAction());
  const crearNuevoEmpleado = (Dataform) => dispatch(crearNuevoEmpleadoAction(Dataform));
  const actulizarEmpleado = (Dataform) => dispatch(editarEmpleadoAction(Dataform));


    //selecion del state en el  store
   // const { userDetails } = useSelector((state) => state.Auth);
  const cargando = useSelector(state => state.Empleado.loading);
  const cargandolista = useSelector(state => state.Empleado.loadinglista);
  const perfil = useSelector(state => state.Usuario.Perfil);
  const barrios = useSelector(state => state.Parametros.barriosveredas);
  const asociacion = useSelector(state => state.Asociacion.asociacionlista);
  const empleados  = useSelector(state => state.Empleado.listaempleado);

    const [validated, setValidated] = useState(false);
    const [valedita, setValedita] = useState(false)
    const [selectActivar, setSelectActivar] = useState(false);
    const [visibleE, setVisibleE] = useState(false)
    const [visibleEM, setVisibleEM] = useState(false)

    const ObjEmpleado = {
                  Id_asociacion:'',
                  Id_barrio_vereda:'',
                  Id_perfil:'',
                  Documentos:'',
                  Nombres: '',
                  Apellidos: '',
                  Direccion:'',
                  Telefono:'',
                  Correo:'',
                  Estado: '',
    }
    const [datoEmpleado, setDatoEmpleado] = useState(ObjEmpleado)
    // Leer los datos del formulario
    const onChangeFormulario = e => {
      setDatoEmpleado({
        ...datoEmpleado,
            [e.target.name]: e.target.value
        })
    }
    const handleReset = () => {
        setDatoEmpleado(ObjEmpleado)
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
              Id_perfil:datoEmpleado.Id_perfil,
              Documentos:datoEmpleado.Documentos,
              Nombres: datoEmpleado.Nombres,
              Apellidos: datoEmpleado.Apellidos,
              Direccion: datoEmpleado.Direccion,
              Telefono:datoEmpleado.Telefono,
              Correo:datoEmpleado.Correo,
              Estado: datoEmpleado.Estado,
            }

            if (valedita === false) {
              crearNuevoEmpleado({
                    formularioDatos,
                    handleReset
                })
            }
            setVisibleE(false)
            event.stopPropagation()
        }
       // event.stopPropagation()
        setValidated(true)
    }

    // función que redirige Edita ContactoAsunto
    const EditaEmpleado= id => {
      const datos = empleados.filter(C => C.ID === id)
            setDatoEmpleado({
              ID: datos[0].ID,
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
        setVisibleEM(true)
    }


  const  handleSubmitAct = (event) => {
    event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const formularioDatos = {
              Id_asociacion: datoEmpleado.Id_asociacion,
              Id_barrio_vereda:datoEmpleado.Id_barrio_vereda,
              Documentos:datoEmpleado.Documentos,
              Nombres: datoEmpleado.Nombres,
              Apellidos: datoEmpleado.Apellidos,
              Direccion: datoEmpleado.Direccion,
              Telefono:datoEmpleado.Telefono,
              Correo:datoEmpleado.Correo,
              Estado: datoEmpleado.Estado,
            };
            if (valedita) {
                actulizarEmpleado({
                    formularioDatos,
                    id: datoEmpleado.ID,
                    handleReset,
                });
            }
        }
        setVisibleEM(false);
        event.stopPropagation();
    };

    // función que redirige Eliminar ContactoConvenio
    const eliminarEmpleado = id => {
        Swal.fire({
            title: '¿Estas seguro de eliminar?',
          text: "El Empleado eliminado no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                dispatch(borrarEmpleadoAction(id));
            }
        });
    }

  return {
      /* funciones */
      handleSubmit,
      onChangeFormulario,
      handleReset,
      obtenerEmpleado,
      obtenerAsociacion,
      obtenerBarrioVereda,
      obtenerPerfil,
      eliminarEmpleado,
      EditaEmpleado,
    /* metodos */
      asociacion,
      empleados,
      perfil,
      barrios,
      setValidated,
      validated,
      valedita,
      datoEmpleado, setDatoEmpleado,
      selectActivar, setSelectActivar,
      visibleE, setVisibleE,
      visibleEM, setVisibleEM,
      cargandolista,
      cargando,
      handleSubmitAct
  }
}
