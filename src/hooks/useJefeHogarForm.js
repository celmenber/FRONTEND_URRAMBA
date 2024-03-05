/* eslint-disable prettier/prettier */
import { useState } from 'react'
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
import { borrarMiembroAction,  obtenerMiembroAction } from 'src/action/MiembroAction';
import { borrarJefeHogarAction, crearNuevoJefeHogarAction, editarJefeHogarAction, obtenerJefeHogarAction } from 'src/action/JefeHogarAction';

export const JegeHogarForm = () => {

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


    const cargando = useSelector(state => state.Miembro.loading);
    const cargandolista = useSelector(state => state.Miembro.loadinglista);
    const barrios = useSelector(state => state.Parametros.barriosveredas);
    const tipodocumento = useSelector(state => state.Parametros.tipodocumentos);
    const consejos = useSelector((state) => state.Concejo.concejolista)
    const corregimiento = useSelector(state => state.Parametros.corregimientos);
    const asociacion = useSelector(state => state.Asociacion.asociacionlista);
    const jefeHogar = useSelector(state => state.JefeHogar.listaJefeHogar);
    const escolaridades = useSelector(state => state.Parametros.escolaridad)
    const orientacion_sexuales = useSelector(state => state.Parametros.orientacionSexual)

    const [validated, setValidated] = useState(false);
    const [valedita, setValedita] = useState(false)
    const [selectActivar, setSelectActivar] = useState(false);
    const [visibleM, setVisibleM] = useState(false)
    const [visibleMI, setVisibleMI] = useState(false)

    const [datoJefeHogar, setDatoJefeHogar] = useState({
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
    })

    const onChangeFormulario = e => {
        setDatoJefeHogar({
            ...datoJefeHogar, [e.target.name]: e.target.value
        })
    }
    const handleReset = () => {
        setDatoJefeHogar({
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
            Correo: '',
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
                Id_conncejo_comunitario: datoMiembro.Id_conncejo_comunitario,
                Id_barrio_vereda: datoMiembro.Id_barrio_vereda,
                Id_corregimiento: datoMiembro.Id_corregimiento,
                Id_tipo_documento: datoMiembro.Id_tipo_documento,
                Documentos: datoMiembro.Documentos,
                Nombres: datoMiembro.Nombres,
                Apellidos: datoMiembro.Apellidos,
                Sexo: datoMiembro.Sexo,
                Id_escolaridad: datoMiembro.Id_escolaridad,
                Estado_escolaridad: datoMiembro.Estado_escolaridad,
                Genero: datoMiembro.Genero,
                Id_orientacion_sexual: (datoMiembro.Id_orientacion_sexual),
                Direccion: datoMiembro.Direccion,
                Telefono: datoMiembro.Telefono,
                Correo: datoMiembro.Correo,
                Estado: datoMiembro.Estado,
                Fecha_nacimiento: datoMiembro.Fecha_nacimiento,
                Fecha_ingreso: datoMiembro.Fecha_ingreso
            }

            if (valedita === false) {
                crearJefeHogar({
                    formularioDatos,
                    handleReset
                })
            }
            setVisibleM(false)
            event.stopPropagation()
        }
   
        setValidated(true)
    }
    const EditarJefeHogar = (id) => {
        debugger
        const datos = miembro.filter((C) => C.ID === id);
        setVisibleMI(true);
        setDatoJefeHogar({
            ID: datos[0].ID,
            Id_conncejo_comunitario: datos[0].id_conncejo_comunitario,
            Id_barrio_vereda: datos[0].id_barrio_vereda,
            Id_corregimiento: datos[0].id_corregimiento,
            Id_tipo_documento: datos[0].id_tipo_documento,
            Documentos: datos[0].documentos,
            Nombres: datos[0].nombres,
            Apellidos: datos[0].apellidos,
            Sexo: datos[0].sexo,
            Id_escolaridad: datos[0].id_escolaridad,
            Estado_escolaridad: datos[0].estado_escolaridad,
            Genero: datos[0].genero,
            Id_orientacion_sexual: Number(datos[0].id_orientacion_sexual),
            Direccion: datos[0].direccion,
            Telefono: datos[0].telefono,
            Correo: datos[0].correo,
            Estado: datos[0].estado,
            Fecha_nacimiento: datos[0].fecha_nacimiento,
            Fecha_ingreso: datos[0].fecha_ingreso,
        });
    };
    
    const handleSubmitAct = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
    
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const formularioDatos = {
                Id_conncejo_comunitario: datoJefeHogar.Id_conncejo_comunitario,
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
                Estado: Number(datoJefeHogar.Estado),
                Fecha_nacimiento: datoJefeHogar.Fecha_nacimiento,
                Fecha_ingreso: datoJefeHogar.Fecha_ingreso,
            };
    
            // Asumo que actulizarMiembro es una función que realiza la actualización
            // No tengo su implementación, así que debes ajustarlo según tu código real
            if (!valedita) {
                actulizarJefeHogar({
                    formularioDatos,
                    id: datoJefeHogar.ID,
                    handleReset,
                });
            }
        }
    
        setVisibleMI(false);
        event.stopPropagation();
    };
    const eliminarJefeHogar = (id) => {
        const Id = id
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
        barrios,
        escolaridades,
        orientacion_sexuales,
        validated,
        setValidated,
        valedita,
        datoMiembro, setDatoMiembro,
        selectActivar, setSelectActivar,
        visibleM, setVisibleM,
        visibleMI, setVisibleMI,
        cargandolista,
        cargando
    }
}
