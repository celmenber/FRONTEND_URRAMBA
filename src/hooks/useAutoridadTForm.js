/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  crearNuevoAutoridadTAction,
  editarAutoridadTAction,
  obtenerAutoridadTAction,
  borrarAutoridadTAction
} from '../action/AutoridadTAction';

import {
  obtenerBarrioVeredaAction,
  obtenerMunicipioAction,
  obtenertipodocumentoAction,
  obtenercorregimientoAction,

} from '../action/ParametrosAction'

import Swal from 'sweetalert2';

export const AutoridadTForm = () => {

  const dispatch = useDispatch()
  const obtenerMunicipio = () => dispatch(obtenerMunicipioAction())
  const obtenerBarrioVereda = () => dispatch(obtenerBarrioVeredaAction())
  const obtenertipodocumento = () => dispatch(obtenertipodocumentoAction())
  const obtenercorregimiento = () => dispatch(obtenercorregimientoAction())
  const obtenerAutoridadT = () => dispatch(obtenerAutoridadTAction());
  const crearNuevoAutoridadT = (Dataform) => dispatch(crearNuevoAutoridadTAction(Dataform));
  const actulizarAutoridadT = (Dataform) => dispatch(editarAutoridadTAction(Dataform));

    //selecion del state en el  store
  const { userDetails } = useSelector((state) => state.Auth);
  const cargando = useSelector(state => state.AutoridadT.loading);
  const cargandolista = useSelector(state => state.AutoridadT.loadinglista);
  const municipio = useSelector(state => state.Parametros.municipios);
  //const barrios = useSelector(state => state.Parametros.barriosveredas);
  const corregimiento = useSelector(state => state.Parametros.corregimientos);
  const tipodocumento = useSelector(state => state.Parametros.tipodocumentos);
  const autoridadT = useSelector(state => state.AutoridadT.listautoridad);

    const [validated, setValidated] = useState(false);
    const [valedita, setValedita] = useState(false)
    const [selectActivar, setSelectActivar] = useState(false);
    const [visibleAT, setVisibleAT] = useState(false)
    const [visibleEAT, setVisibleEAT] = useState(false)

    const objAutoridad = {
              Idmunicipio:'',
              Idcorregimiento:'',
              Idtipodocumento:'',
              Documentos:'',
              Nombres:'',
              Apellidos:'',
              Barrio_vereda:'',
              Sexo:'',
              Direccion:'',
              Telefono:'',
              Correo: '',
              Estado:'',
              Fechanacimiento:'',
              Fechaingreso:'',
          }

    const [datoAutoridad, setDatoAutoridad] = useState(objAutoridad)

    // Leer los datos del formulario
    const onChangeFormulario = e => {
      setDatoAutoridad({
        ...datoAutoridad,
            [e.target.name]: e.target.value
        })
    }
    const handleReset = () => {
        setDatoAutoridad(objAutoridad)
        setValedita(false)
    };

/* const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        } else {

            const formularioDatos = {
                    Id_usuario:userDetails.ID_USER,
                    Id_municipio: parseInt(datoAutoridad.Idmunicipio),
                    Id_corregimiento: parseInt(datoAutoridad.Idcorregimiento),
                    Id_tipo_documento: parseInt(datoAutoridad.Idtipodocumento),
                    Documentos:datoAutoridad.Documentos,
                    Nombres:datoAutoridad.Nombres,
                    Apellidos:datoAutoridad.Apellidos,
                    Sexo:datoAutoridad.Sexo,
                    Barrio_vereda: datoAutoridad.Barrio_vereda,
                    Direccion: datoAutoridad.Direccion,
                    Telefono: datoAutoridad.Telefono,
                    Correo: datoAutoridad.Correo,
                    Estado: datoAutoridad.Estado,
                    Fecha_nacimiento: datoAutoridad.Fechanacimiento,
                    Fecha_ingreso: datoAutoridad.Fechaingreso,
            }
                crearNuevoAutoridadT({
                          formularioDatos,
                          handleReset
                      })
             setVisibleAT(false)
             //event.stopPropagation()
           }

    setValidated(true)
} */


    // función que redirige Edita ContactoAsunto
  const EditarAutoridad = (id) => {
    const datos = autoridadT.filter(C => C.ID === id)

    setVisibleEAT(true)
    setDatoAutoridad({
      ID: datos[0].ID,
      Idmunicipio: Number(datos[0].id_municipio),
      Idcorregimiento: Number(datos[0].id_corregimiento),
      Idtipodocumento: Number(datos[0].id_tipo_documento),
      Documentos: datos[0].documentos,
      Nombres: datos[0].nombres,
      Apellidos: datos[0].apellidos,
      Sexo: datos[0].sexo,
      Barrio_vereda: datos[0].barrio_vereda,
      Direccion: datos[0].direccion,
      Telefono: datos[0].telefono,
      Correo: datos[0].correo,
      Estado: datos[0].estado,
      Fechanacimiento: datos[0].fecha_nacimiento,
      Fechaingreso: datos[0].fecha_ingreso,
    });
  }

    // función que redirige Eliminar ContactoConvenio
  const eliminarAutoridadT = (Id) => {
         const datos = autoridadT.filter(C => C.ID === Id)
         const Nombres =  datos[0].nombres +' '+ datos[0].apellidos;
        Swal.fire({
            title: '¿Estas seguro de eliminar a la Autoridad '+ Nombres +'?',
          text: "La autoridad afro eliminada no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
              dispatch(borrarAutoridadTAction(Id));
            }
        });
    }
  return {
      /* funciones */
     // handleSubmit,
      onChangeFormulario,
      handleReset,
      crearNuevoAutoridadT,
      obtenerAutoridadT,
      actulizarAutoridadT,
      obtenerBarrioVereda,
      obtenerMunicipio,
      obtenertipodocumento,
      obtenercorregimiento,
      eliminarAutoridadT,
      EditarAutoridad,
    /* metodos */
      autoridadT,
      userDetails,
      municipio,
      corregimiento,
      tipodocumento,
      validated,
      valedita,
      datoAutoridad,
      setDatoAutoridad,
      selectActivar,
      setSelectActivar,
      visibleAT, setVisibleAT,
      visibleEAT, setVisibleEAT,
      cargandolista,
      cargando,
      setValidated,
  }
}
