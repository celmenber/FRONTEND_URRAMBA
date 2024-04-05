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
import { borrarNucleoFamiliarAction, 
    crearNuevoNucleoFamiliarAction, 
    editarNucleoFamiliarAction, 
    obtenerNucleoFamiliarAction } from 'src/action/NucleoFamiliarAction';


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
    const nucleoFamiliar = useSelector(state => state.NucleoFamiliar.listarNucleoFamiliar);
    const escolaridades = useSelector(state => state.Parametros.escolaridad)
    const orientacion_sexuales = useSelector(state => state.Parametros.orientacionSexual)

    const [validated, setValidated] = useState(false);
    const [valedita, setValedita] = useState(false)
    const [selectActivar, setSelectActivar] = useState(false);
    const [visibleM, setVisibleM] = useState(false)
    const [visibleMI, setVisibleMI] = useState(false)
    const [idJefeHogar, setIdJefeHogar] = useState('')
    const [nombreBotoGuardarActulizar, setNombreBotoGuardarActulizar] = useState(('Agregar Nuevo Nucleo Familiar'))
    

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

    const onChangeFormulario = (e) => {
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
        debugger
        event.preventDefault();
        setValidated(true)
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            const formularioDatos = {
                Id_usuario: "1",
                Id_jefe_hogar: idJefeHogar,
                Id_parentesco: datoNucleoFamiliar.Id_parentesco,
                Id_tipo_documento: datoNucleoFamiliar.Id_tipo_documento,
                Id_escolaridad: datoNucleoFamiliar.Id_escolaridad,
                Id_orientacion_sexual: datoNucleoFamiliar.Id_orientacion_sexual,
                Documentos: datoNucleoFamiliar.Documentos,
                Nombres: datoNucleoFamiliar.Nombres,
                Apellidos: datoNucleoFamiliar.Apellidos,
                Estado_escolaridad: datoNucleoFamiliar.Estado_escolaridad,
                Sexo: datoNucleoFamiliar.Sexo,
                Genero: datoNucleoFamiliar.Genero,
                Fecha_nacimiento: datoNucleoFamiliar.Fecha_nacimiento
            }
            if (Object.values(formularioDatos).some(value => !value)) {
                setValidated(true)

            } else{
                    setValidated(false)
                    crearNucleoFamiliar({
                        formularioDatos,
                    }).then(() => {
                        handleReset();
                    })
                    obtenerNucleoFamiliar()
                }
              
            }
        }

    
    const handleActualizarNucleoFamiliar = (event) => {
        debugger
        event.preventDefault();
        const form = event.currentTarget;
    
        // Obtener los campos del formulario
        const formularioDatos = {
            Id_usuario: "1",
            Id_jefe_hogar: idJefeHogar,
            Id_parentesco: datoNucleoFamiliar.Id_parentesco,
            Id_tipo_documento: datoNucleoFamiliar.Id_tipo_documento,
            Id_escolaridad: datoNucleoFamiliar.Id_escolaridad,
            Id_orientacion_sexual: datoNucleoFamiliar.Id_orientacion_sexual,
            Documentos: datoNucleoFamiliar.Documentos,
            Nombres: datoNucleoFamiliar.Nombres,
            Apellidos: datoNucleoFamiliar.Apellidos,
            Estado_escolaridad: datoNucleoFamiliar.Estado_escolaridad,
            Sexo: datoNucleoFamiliar.Sexo,
            Genero: datoNucleoFamiliar.Genero,
            Fecha_nacimiento: datoNucleoFamiliar.Fecha_nacimiento
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
            actualizarNucleoFamiliar({
              formularioDatos,
              Id: datoNucleoFamiliar.ID,
            }).then(() => {
              setNombreBotoGuardarActulizar('Agregar Nuevo Nucleo Familiar');
              dispatch(obtenerNucleoFamiliarAction());
              handleReset();
            });
          }
        }
    
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
        handleActualizarNucleoFamiliar,
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
        cargando,
        setIdJefeHogar,
        setNombreBotoGuardarActulizar,
        nombreBotoGuardarActulizar
    }
}
