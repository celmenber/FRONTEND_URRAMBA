/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { obtenerConcejoAction } from 'src/action/ConsejoAction';
import { obtenerAsociacionAction } from '../action/AsociacionAction'
import {
    obtenerBarrioVeredaAction,
    obtenerEscolaridadAction,
    obtenerOrientacionSexualAction,
    obtenercorregimientoAction,
    obtenertipodocumentoAction
}
    from '../action/ParametrosAction'
import Swal from 'sweetalert2';
import { borrarJefeHogarAction,
     crearNuevoJefeHogarAction,
     editarJefeHogarAction,
     obtenerJefeHogarAction,
     obtenerJefeHogarByIdAction} from 'src/action/JefeHogarAction';


export const JefeHogarForm = () => {

    const dispatch = useDispatch()
    const obtenerAsociacion = () => dispatch(obtenerAsociacionAction())
    const obtenerBarrioVereda = () => dispatch(obtenerBarrioVeredaAction())
    const obtenertipodocumento = () => dispatch(obtenertipodocumentoAction())
    const obtenerJefeHogar = () => dispatch(obtenerJefeHogarAction());

    const obtenercorregimiento = () => dispatch(obtenercorregimientoAction())
    const obtenerConcejo = () => dispatch(obtenerConcejoAction());
    const obtenerEscolaridad = () => dispatch(obtenerEscolaridadAction());
    const obtenerOrientacionSexual = () => dispatch(obtenerOrientacionSexualAction());
    const crearJefeHogar = (Dataform) => dispatch(crearNuevoJefeHogarAction(Dataform));
    const actulizarJefeHogar = (Dataform) => dispatch(editarJefeHogarAction(Dataform));

    const { userDetails } = useSelector((state) => state.Auth);
    const cargando = useSelector(state => state.Miembro.loading);
    const cargandolista = useSelector(state => state.Miembro.loadinglista);
    const barrios = useSelector(state => state.Parametros.barriosveredas);
    const tipodocumento = useSelector(state => state.Parametros.tipodocumentos);
    const consejos = useSelector((state) => state.Concejo.concejolista)
    const corregimiento = useSelector(state => state.Parametros.corregimientos);
    const asociacion = useSelector(state => state.Asociacion.asociacionlista);
    const jefeHogar = useSelector(state => state.JefeHogar.listaJefeHogar);
    const jefeHogarById = useSelector(state => state.JefeHogar.jefeHogar);
    const escolaridades = useSelector(state => state.Parametros.escolaridad)
    const orientacion_sexuales = useSelector(state => state.Parametros.orientacionSexual)

    const [validated, setValidated] = useState(false);
    const [valedita, setValedita] = useState(false)
    const [selectActivar, setSelectActivar] = useState(false);
    const [visibleM, setVisibleM] = useState(false)
    const [visibleMI, setVisibleMI] = useState(false)

     const ObjJefeHogar = {
              Id_concejo_comunitario:'',
              Id_barrio_vereda: '',
              Id_corregimiento: '',
              Id_tipo_documento: '',
              Documentos: '',
              Nombres: '',
              Apellidos: '',
              Sexo: '',
              Id_escolaridad: '',
              Estado_escolaridad: '',
              Genero: '',
              Id_orientacion_sexual: '',
              Direccion: '',
              Telefono: '',
              Estado: '',
              Fecha_nacimiento: '',
              Fecha_ingreso: '',
              Correo: ''
          }
    const [datoJefeHogar, setDatoJefeHogar] = useState(ObjJefeHogar)

    const onChangeFormulario = e => {
        setDatoJefeHogar({
            ...datoJefeHogar, [e.target.name]: e.target.value
        })
    }
    const handleReset = () => {
        setDatoJefeHogar(ObjJefeHogar)
        setValedita(false)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget
        setValidated(true)
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        } else {

            const formularioDatos = {
                Id_usuario:userDetails.ID_USER,
                Id_concejo_comunitario: datoJefeHogar.Id_concejo_comunitario,
                Id_barrio_vereda: datoJefeHogar.Id_barrio_vereda,
                Id_corregimiento: datoJefeHogar.Id_corregimiento,
                Id_tipo_documento: datoJefeHogar.Id_tipo_documento,
                Documentos: datoJefeHogar.Documentos,
                Nombres: datoJefeHogar.Nombres,
                Apellidos: datoJefeHogar.Apellidos,
                Sexo: datoJefeHogar.Sexo,
                Id_escolaridad: datoJefeHogar.Id_escolaridad,
                Estado_escolaridad: datoJefeHogar.Estado_escolaridad,
                Genero: datoJefeHogar.Genero,
                Id_orientacion_sexual: datoJefeHogar.Id_orientacion_sexual,
                Direccion: datoJefeHogar.Direccion,
                Telefono: datoJefeHogar.Telefono,
                Correo: datoJefeHogar.Correo,
                Estado: datoJefeHogar.Estado,
                Fecha_nacimiento: datoJefeHogar.Fecha_nacimiento,
                Fecha_ingreso: datoJefeHogar.Fecha_ingreso
            }

            if (valedita === false) {
                crearJefeHogar({
                    formularioDatos,
                    handleReset
                })
            }
            event.stopPropagation()
        }
        setVisibleM(false)
    }

    const handleSubmitAct = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setValidated(true)
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        } else {

            const formularioDatos = {
                Id_concejo_comunitario: datoJefeHogar.Id_concejo_comunitario,
                Id_barrio_vereda: datoJefeHogar.Id_barrio_vereda,
                Id_corregimiento: datoJefeHogar.Id_corregimiento,
                Id_tipo_documento: datoJefeHogar.Id_tipo_documento,
                Id_orientacion_sexual: datoJefeHogar.Id_orientacion_sexual,
                Documentos: datoJefeHogar.Documentos,
                Nombres: datoJefeHogar.Nombres,
                Apellidos: datoJefeHogar.Apellidos,
                Sexo: datoJefeHogar.Sexo,
                Id_escolaridad: datoJefeHogar.Id_escolaridad,
                Estado_escolaridad: datoJefeHogar.Estado_escolaridad,
                Genero: datoJefeHogar.Genero,
                Direccion: datoJefeHogar.Direccion,
                Telefono: datoJefeHogar.Telefono,
                Correo: datoJefeHogar.Correo,
                Estado: datoJefeHogar.Estado,
                Fecha_nacimiento: datoJefeHogar.Fecha_nacimiento,
                Fecha_ingreso: datoJefeHogar.Fecha_ingreso,
            };

            console.log(formularioDatos)

            if (valedita === false) {
                actulizarJefeHogar({
                    formularioDatos,
                    id: datoJefeHogar.ID,
                    handleReset,
                });
            }
            event.stopPropagation()
        }
     setVisibleMI(false)
    };

      const EditarJefeHogar = (id) => {
        const datos = jefeHogar.filter((C) => C.ID === id);

        setVisibleMI(true);

        setDatoJefeHogar({
            ID: datos[0].ID,
            Id_concejo_comunitario: datos[0].id_concejo_comunitario,
            Id_barrio_vereda: datos[0].id_barrio_vereda,
            Id_corregimiento: datos[0].id_corregimiento,
            Id_tipo_documento: datos[0].id_tipo_documento,
            Id_orientacion_sexual: datos[0].id_orientacion_sexual,
            Documentos: datos[0].documentos,
            Nombres: datos[0].nombres,
            Apellidos: datos[0].apellidos,
            Sexo: datos[0].sexo,
            Id_escolaridad: datos[0].id_escolaridad,
            Estado_escolaridad: datos[0].estado_escolaridad,
            Genero: datos[0].genero,
            Direccion: datos[0].direccion,
            Telefono: datos[0].telefono,
            Correo: datos[0].correo,
            Estado: datos[0].estado,
            Fecha_nacimiento: datos[0].fecha_nacimiento,
            Fecha_ingreso: datos[0].fecha_ingreso,
        });

                    console.log(datos[0].genero, datos[0].sexo)
    };

    const jefeHogarByID = (id) => {
        if(id !== null || id !== undefined){
            dispatch(obtenerJefeHogarByIdAction(id))
        }

    }
    const eliminarJefeHogar = (Id) => {
        const datos = jefeHogar.filter((C) => C.ID === Id);
       const  Nombres =  datos[0].nombres + ' '+ datos[0].apellidos;

        Swal.fire({
            title: '¿Estas seguro de eliminar el Jefe de hogar ' + Nombres +'?',
            text: 'El Jefe de hogar eliminado no se podrá recuperar',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            if (result.value) {
                dispatch(borrarJefeHogarAction(Id));
            }
        });

    }
    return {
        handleSubmit,
        handleSubmitAct,
        onChangeFormulario,
        handleReset,
        obtenerJefeHogar,
        obtenerAsociacion,
        obtenerConcejo,
        obtenerBarrioVereda,
        obtenertipodocumento,
        obtenercorregimiento,
        obtenerEscolaridad,
        obtenerOrientacionSexual,
        eliminarJefeHogar,
        EditarJefeHogar,
        asociacion,
        tipodocumento,
        corregimiento,
        consejos,
        jefeHogar,
        userDetails,
        barrios,
        jefeHogarByID,
        escolaridades,
        orientacion_sexuales,
        validated,
        setValidated,
        valedita,
        datoJefeHogar, setDatoJefeHogar,
        selectActivar, setSelectActivar,
        visibleM, setVisibleM,
        visibleMI, setVisibleMI,
        cargandolista,
        jefeHogarById,
        cargando
    }
}
