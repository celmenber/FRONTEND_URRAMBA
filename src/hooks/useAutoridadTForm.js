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
   // const { userDetails } = useSelector((state) => state.Auth);
  const cargando = useSelector(state => state.AutoridadT.loading);
  const cargandolista = useSelector(state => state.AutoridadT.loadinglista);
  const municipio = useSelector(state => state.Parametros.municipios);
  const barrios = useSelector(state => state.Parametros.barriosveredas);
  const corregimiento = useSelector(state => state.Parametros.corregimientos);
  const tipodocumento = useSelector(state => state.Parametros.tipodocumentos);
  const autoridadT = useSelector(state => state.AutoridadT.listautoridad);




    const [validated, setValidated] = useState(false);
    const [valedita, setValedita] = useState(false)
    const [selectActivar, setSelectActivar] = useState(false);
    const [visibleAT, setVisibleAT] = useState(false)
    const [visibleEAT, setVisibleEAT] = useState(false)

    const [datoAutoridad, setDatoAutoridad] = useState({
          Idmunicipio:'',
          Idbarriovereda:'',
          Idcorregimiento:'',
          Idtipodocumento:'',
          Documentos:'',
          Nombres:'',
          Apellidos:'',
          Sexo:'',
          Direccion:'',
          Telefono:'',
          Correo: '',
          Estado:'',
          Fechanacimiento:'',
          Fechaingreso:'',
          Id_escolaridad: '',
          Estado_escolaridad: '',
    })

    // Leer los datos del formulario
    const onChangeFormulario = e => {
      
      setDatoAutoridad({
        ...datoAutoridad,
            [e.target.name]: e.target.value
        })
    }
    const handleReset = () => {
      setDatoAutoridad({
            Idmunicipio: '',
            Idbarriovereda: '',
            Idcorregimiento: '',
            Idtipodocumento: '',
            Documentos: '',
            Nombres: '',
            Apellidos: '',
            Sexo: '',
            Direccion: '',
            Telefono: '',
            Correo: '',
            Estado: '',
            Fechanacimiento: '',
            Fechaingreso: '',
            Id_escolaridad: '',
            Estado_escolaridad: '',
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

                    Id_usuario:"1",
                    Id_municipio: parseInt(datoAutoridad.Idmunicipio),
                    Id_barrio_vereda: parseInt(datoAutoridad.Idbarriovereda),
                    Id_corregimiento: parseInt(datoAutoridad.Idcorregimiento),
                    Id_tipo_documento: parseInt(datoAutoridad.Idtipodocumento),
                    Documentos:datoAutoridad.Documentos,
                    Nombres:datoAutoridad.Nombres,
                    Apellidos:datoAutoridad.Apellidos,
                    Sexo:datoAutoridad.Sexo,
                    Direccion: datoAutoridad.Direccion,
                    Telefono: datoAutoridad.Telefono,
                    Correo: datoAutoridad.Correo,
                    Estado: datoAutoridad.Estado,
                    Fecha_nacimiento: datoAutoridad.Fechanacimiento,
                    Fecha_ingreso: datoAutoridad.Fechaingreso,
                    Id_escolaridad: 1,
                    Estado_escolaridad: 'Terminado',
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
  const EditarAutoridad = (id) => {
    debugger
    const datos = autoridadT.filter(C => C.ID === id)
    setVisibleEAT(true)
    setDatoAutoridad({
      Id_usuario:"1",
      ID: datos[0].ID,
      Idmunicipio: Number(datos[0].id_municipio),
      Idbarriovereda: Number(datos[0].id_barrio_vereda),
      Idcorregimiento: Number(datos[0].id_corregimiento),
      Idtipodocumento: Number(datos[0].id_tipo_documento),
      Documentos: datos[0].documentos,
      Nombres: datos[0].nombres,
      Apellidos: datos[0].apellidos,
      Sexo: datos[0].sexo,
      Direccion: datos[0].direccion,
      Telefono: datos[0].telefono,
      Correo: datos[0].correo,
      Estado: datos[0].estado,
      Fechanacimiento: datos[0].fecha_nacimiento,
      Fechaingreso: datos[0].fecha_ingreso,
    });
  }

  const handleSubmitAct = (event) => {
    
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
        event.stopPropagation();
       
    } else {
        const formularioDatos = {
          Id_usuario:"1",
          Id_municipio: parseInt(datoAutoridad.Idmunicipio),
          Id_barrio_vereda: parseInt(datoAutoridad.Idbarriovereda),
          Id_corregimiento: parseInt(datoAutoridad.Idcorregimiento),
          Id_tipo_documento: parseInt(datoAutoridad.Idtipodocumento),
          Documentos: datoAutoridad.Documentos,
          Nombres: datoAutoridad.Nombres,
          Apellidos: datoAutoridad.Apellidos,
          Sexo: datoAutoridad.Sexo,
          Direccion: datoAutoridad.Direccion,
          Telefono: datoAutoridad.Telefono,
          Correo: datoAutoridad.Correo,
          Estado: datoAutoridad.Estado,
          Fecha_nacimiento: datoAutoridad.Fechanacimiento,
          Fecha_ingreso: datoAutoridad.Fechaingreso,
          Id_escolaridad: 1,
          Estado_escolaridad: 'Terminado',
     
        };

        // Asumo que actulizarMiembro es una función que realiza la actualización
        // No tengo su implementación, así que debes ajustarlo según tu código real
        if (!valedita) {
          actulizarAutoridadT({
                formularioDatos,
                id: datoAutoridad.ID,
                handleReset,
            });
        }
    }

    setVisibleEAT(false);
    event.stopPropagation();
};

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
  return {
      /* funciones */
      handleSubmit,
      onChangeFormulario,
      handleReset,
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
      barrios,
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
      handleSubmitAct
  }
}
