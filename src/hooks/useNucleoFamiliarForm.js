/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerConcejoAction } from 'src/action/ConsejoAction';
import { obtenerAsociacionAction } from '../action/AsociacionAction'
import {
    obtenerBarrioVeredaAction,
    obtenerEscolaridadAction,
    obtenerOrientacionSexualAction,
    obtenerParentescoAction,
    obtenercorregimientoAction,
    obtenertipodocumentoAction
}
    from '../action/ParametrosAction'
import Swal from 'sweetalert2';
import { borrarNucleoFamiliarAction, crearNuevoNucleoFamiliarAction, editarNucleoFamiliarAction, obtenerNucleoFamiliarAction } from 'src/action/NucleoFamiliarAction';


export const NucleoFamiliarForm = () => {

    const dispatch = useDispatch()
    const obtenerAsociacion = () => dispatch(obtenerAsociacionAction())
    const obtenerBarrioVereda = () => dispatch(obtenerBarrioVeredaAction())
    const obtenertipodocumento = () => dispatch(obtenertipodocumentoAction())
    const obtenerParentesco = () => dispatch(obtenerParentescoAction())
    const obtenercorregimiento = () => dispatch(obtenercorregimientoAction())
    const obtenerConcejo = () => dispatch(obtenerConcejoAction());
    const obtenerEscolaridad = () => dispatch(obtenerEscolaridadAction());
    const obtenerOrientacionSexual = () => dispatch(obtenerOrientacionSexualAction());
    const obtenerNucleoFamiliar = () => dispatch(obtenerNucleoFamiliarAction());
    const crearNucleoFamiliar = (Dataform) => dispatch(crearNuevoNucleoFamiliarAction(Dataform));
    const actualizarNucleoFamiliar = (Dataform) => dispatch(editarNucleoFamiliarAction(Dataform));


    const cargando = useSelector(state => state.NucleoFamiliar.loading);
    const cargandolista = useSelector(state => state.NucleoFamiliar.loadinglista);
    const barrios = useSelector(state => state.Parametros.barriosveredas);
    const tipodocumento = useSelector(state => state.Parametros.tipodocumentos);
    const consejos = useSelector((state) => state.Concejo.concejolista)
    const parentesco = useSelector((state) => state.Parametros.parentesco)
    const corregimiento = useSelector(state => state.Parametros.corregimientos);
    const asociacion = useSelector(state => state.Asociacion.asociacionlista);
    const nucleoFamiliar = useSelector(state => state.NucleoFamiliar.listaMiembro);
    const escolaridades = useSelector(state => state.Parametros.escolaridad)
    const orientacion_sexuales = useSelector(state => state.Parametros.orientacionSexual)

    const [validated, setValidated] = useState(false);
    const [valedita, setValedita] = useState(false)
    const [selectActivar, setSelectActivar] = useState(false);
    const [visibleM, setVisibleM] = useState(false)
    const [visibleMI, setVisibleMI] = useState(false)

    const [datoNucleoFamiliar, setDatoNucleoFamiliar] = useState({
        Id_jefe_hogar: '',
        Id_parentesco: '',
        Id_tipo_documento:'',
        Id_escolaridad:'',
        Id_orientacion_sexual: '',
        Documentos:'',
        Nombres:'',
        Apellidos:'',
        Estado_escolaridad:'',
        Sexo:'',
        Genero:'',
        Fecha_nacimiento: new Date()
    })

    const onChangeFormulario = e => {
        setDatoNucleoFamiliar({
            ...datoNucleoFamiliar, [e.target.name]: e.target.value
        })
    }
    const handleReset = () => {
        setDatoNucleoFamiliar({
            Id_jefe_hogar: '',
            Id_parentesco: '',
            Id_tipo_documento:'',
            Id_escolaridad:'',
            Id_orientacion_sexual: '',
            Documentos:'',
            Nombres:'',
            Apellidos:'',
            Estado_escolaridad:'',
            Sexo:'',
            Genero:'',
            Fecha_nacimiento: new Date()
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
                Id_jefe_hogar: '',
                Id_parentesco: '',
                Id_tipo_documento:'',
                Id_escolaridad:'',
                Id_orientacion_sexual: '',
                Documentos:'',
                Nombres:'',
                Apellidos:'',
                Estado_escolaridad:'',
                Sexo:'',
                Genero:'',
                Fecha_nacimiento: new Date()
            }

            if (valedita === false) {
                crearNucleoFamiliar({
                    formularioDatos,
                    handleReset
                })
            }
            setVisibleM(false)
            event.stopPropagation()
        }
   
        setValidated(true)
    }
    const EditaMiembro = (id) => {
        
        const datos = nucleoFamiliar.filter((C) => C.ID === id);
        setVisibleMI(true);
        setDatoNucleoFamiliar({
            Id_usuario:'1',
            Id_jefe_hogar: '',
            Id_parentesco: '',
            Id_tipo_documento:'',
            Id_escolaridad:'',
            Id_orientacion_sexual: '',
            Documentos:'',
            Nombres:'',
            Apellidos:'',
            Estado_escolaridad:'',
            Sexo:'',
            Genero:'',
            Fecha_nacimiento: new Date()


            // ID: datos[0].ID,
            // Id_conncejo_comunitario: datos[0].id_conncejo_comunitario,
            // Id_barrio_vereda: datos[0].id_barrio_vereda,
            // Id_corregimiento: datos[0].id_corregimiento,
            // Id_tipo_documento: datos[0].id_tipo_documento,
            // Documentos: datos[0].documentos,
            // Nombres: datos[0].nombres,
            // Apellidos: datos[0].apellidos,
            // Sexo: datos[0].sexo,
            // Id_escolaridad: datos[0].id_escolaridad,
            // Estado_escolaridad: datos[0].estado_escolaridad,
            // Genero: datos[0].genero,
            // Id_orientacion_sexual: Number(datos[0].id_orientacion_sexual),
            // Direccion: datos[0].direccion,
            // Telefono: datos[0].telefono,
            // Correo: datos[0].correo,
            // Estado: datos[0].estado,
            // Fecha_nacimiento: datos[0].fecha_nacimiento,
            // Fecha_ingreso: datos[0].fecha_ingreso,
        });
    };
    
    const handleSubmitAct = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
    
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const formularioDatos = {
                Id_usuario:"1",
                Id_jefe_hogar: '',
                Id_parentesco: '',
                Id_tipo_documento:'',
                Id_escolaridad:'',
                Id_orientacion_sexual: '',
                Documentos:'',
                Nombres:'',
                Apellidos:'',
                Estado_escolaridad:'',
                Sexo:'',
                Genero:'',
                Fecha_nacimiento: new Date()
                // Id_conncejo_comunitario: datoNucleoFamiliar.Id_conncejo_comunitario,
                // Id_barrio_vereda: datoNucleoFamiliar.Id_barrio_vereda,
                // Id_corregimiento: datoNucleoFamiliar.Id_corregimiento,
                // Id_tipo_documento: datoNucleoFamiliar.Id_tipo_documento,
                // Documentos: datoNucleoFamiliar.Documentos,
                // Nombres: datoNucleoFamiliar.Nombres,
                // Apellidos: datoNucleoFamiliar.Apellidos,
                // Sexo: datoNucleoFamiliar.Sexo,
                // Id_escolaridad: datoNucleoFamiliar.Id_escolaridad,
                // Estado_escolaridad: datoNucleoFamiliar.Estado_escolaridad,
                // Genero: datoNucleoFamiliar.Genero,
                // Id_orientacion_sexual: datoNucleoFamiliar.Id_orientacion_sexual,
                // Direccion: datoNucleoFamiliar.Direccion,
                // Telefono: datoNucleoFamiliar.Telefono,
                // Correo: datoNucleoFamiliar.Correo,
                // Estado: Number(datoNucleoFamiliar.Estado),
                // Fecha_nacimiento: datoNucleoFamiliar.Fecha_nacimiento,
                // Fecha_ingreso: datoNucleoFamiliar.Fecha_ingreso,
            };
    
            // Asumo que actualizarNucleoFamiliar es una función que realiza la actualización
            // No tengo su implementación, así que debes ajustarlo según tu código real
            if (!valedita) {
                actualizarNucleoFamiliar({
                    formularioDatos,
                    id: datoNucleoFamiliar.ID,
                    handleReset,
                });
            }
        }
    
        setVisibleMI(false);
        event.stopPropagation();
    };
    const eliminarMiembro = (id) => {
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
                dispatch(borrarNucleoFamiliarAction(Id)); 
            } 
        });
        
    }
    return {
        handleSubmit,
        handleSubmitAct,
        onChangeFormulario,
        handleReset,
        obtenerNucleoFamiliar,
        obtenerAsociacion,
        obtenerConcejo,
        obtenerBarrioVereda,
        obtenertipodocumento,
        obtenerParentesco,
        obtenercorregimiento,
        obtenerEscolaridad,
        obtenerOrientacionSexual,
        eliminarMiembro,
        EditaMiembro,
        asociacion,
        tipodocumento,
        corregimiento,
        consejos,
        nucleoFamiliar,
        barrios,
        parentesco,
        escolaridades,
        orientacion_sexuales,
        validated,
        setValidated,
        valedita,
        datoNucleoFamiliar, setDatoNucleoFamiliar,
        selectActivar, setSelectActivar,
        visibleM, setVisibleM,
        visibleMI, setVisibleMI,
        cargandolista,
        cargando
    }
}
