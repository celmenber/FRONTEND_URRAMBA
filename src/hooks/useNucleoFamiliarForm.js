/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerAsociacionAction } from '../action/AsociacionAction'
import { obtenerJefeHogarAction } from '../action/JefeHogarAction'
import {
    obtenerEscolaridadAction,
    obtenerOrientacionSexualAction,
    obtenerParentescoAction,
    obtenercorregimientoAction,
    obtenertipodocumentoAction
}
    from '../action/ParametrosAction'
import Swal from 'sweetalert2';
import {
    borrarNucleoFamiliarAction,
    crearNuevoNucleoFamiliarAction,
    editarNucleoFamiliarAction,
    editarEstadoMiembroAction,
    obtenerNucleoFamiliarAction,
    trasladoMiembroFamiliarAction
  } from 'src/action/NucleoFamiliarAction';



export const NucleoFamiliarForm = () => {

    const dispatch = useDispatch()

    const obtenerAsociacion = () => dispatch(obtenerAsociacionAction())
    const obtenerJefeHogar = () => dispatch(obtenerJefeHogarAction())
    const obtenertipodocumento = () => dispatch(obtenertipodocumentoAction())
    const obtenerParentesco = () => dispatch(obtenerParentescoAction())
    const obtenercorregimiento = () => dispatch(obtenercorregimientoAction())
    const obtenerEscolaridad = () => dispatch(obtenerEscolaridadAction());
    const obtenerOrientacionSexual = () => dispatch(obtenerOrientacionSexualAction());
    const obtenerNucleoFamiliar = () => dispatch(obtenerNucleoFamiliarAction());
    const crearNucleoFamiliar = (Dataform) => dispatch(crearNuevoNucleoFamiliarAction(Dataform));
    const actualizarNucleoFamiliar = (Dataform) => dispatch(editarNucleoFamiliarAction(Dataform));
    //const trasladoMiembroFamiliar = (Dataform) => dispatch(trasladoMiembroFamiliarAction(Dataform));

    const { userDetails } = useSelector((state) => state.Auth);
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
    const JefeHogar = useSelector((state) => state.JefeHogar.listaJefeHogar)

    const [validated, setValidated] = useState(false);
    const [valedita, setValedita] = useState(false)
    const [selectActivar, setSelectActivar] = useState(false);
    const [visibleTM, setVisibleTM] = useState(false)
    const [idJefeHogar, setIdJefeHogar] = useState(0)
    const [idNucleoflia, setIdNucleoflia] = useState(0)
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
        Fecha_nacimiento: ''
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
            Fecha_nacimiento: ''
        })
        setValedita(false)
    };
    const handleSubmit = (event) => {
     //   debugger
        event.preventDefault();
        setValidated(true)
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            const formularioDatos = {
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
           // console.log(formularioDatos);
            if (Object.values(formularioDatos).some(value => !value)) {
                setValidated(true)
            } else{
                    setValidated(false)
                    crearNucleoFamiliar({
                        formularioDatos,
                        handleReset
                    }).then(() => {
                      // handleReset();
                    })
                    obtenerNucleoFamiliar()
                }

            }
        }


    const handleActualizarNucleoFamiliar = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        // Obtener los campos del formulario
        const formularioDatos = {
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

  const  handletrasladamiembro = (event) => {
        const datos = nucleoFamiliar.filter((C) => C.ID === Number(idNucleoflia));
        const  Nombres =  datos[0]?.nombres + ' '+ datos[0]?.apellidos;
        if(idJefeHogar === 0){
          Swal.fire({
                  icon: 'warning',
                  title: 'warning',
                  text: 'No selecciono el jefe de hogar al intentar trasladar el miembro del nucleo',
                })
        }else{
          Swal.fire({
                  title: '¿Estas seguro de trasladar al miembro del nucleo '+ Nombres +'?',
                  text: 'El miembro del nucleo Familiar eliminado no se podrá recuperar',
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si, trasladar!',
                  cancelButtonText: 'Cancelar',
                }).then((result) => {
                  if (result.value) {
                      dispatch(trasladoMiembroFamiliarAction({
                          Id_jefe_hogar: idJefeHogar,
                          Id: idNucleoflia,
                          }));
                  }
                });
          }
    }

  // función que redirige Editaservicio
  const UpdateMiembroEstado = (Id) => {
    const datos = nucleoFamiliar?.filter((M) => M.ID === Id)
     dispatch(
      editarEstadoMiembroAction({
        Id,
        setSelectActivar,
        obtenerNucleoFamiliar,
        estadoDatos: datos[0].estado === '0' ? '1' : '0',
      }),
    )
  }


    const handleliminarMiembro = (Id) => {
         const datos = nucleoFamiliar.filter((C) => C.ID === Id);
         const  Nombres =  datos[0].nombres + ' '+ datos[0].apellidos;
        Swal.fire({
            title: '¿Estas seguro de eliminar el miembro Familiar '+ Nombres +'?',
            text: 'El miembro del nucleo Familiar eliminado no se podrá recuperar',
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

  function getEdad(dateString) {
      let hoy = new Date()
      let fechaNacimiento = new Date(dateString)
      let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
      let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
      if (
        diferenciaMeses < 0 ||
        (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
      ) {
        edad--
      }
      return edad
}

    return {
        handleSubmit,
        handleActualizarNucleoFamiliar,
        onChangeFormulario,
        handleReset,
        obtenerNucleoFamiliar,
        obtenertipodocumento,
        obtenerParentesco,
        obtenercorregimiento,
        obtenerEscolaridad,
        obtenerOrientacionSexual,
        obtenerJefeHogar,
        obtenerAsociacion,
        handleliminarMiembro,
        handletrasladamiembro,
        UpdateMiembroEstado,
        userDetails,
        JefeHogar,
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
        datoNucleoFamiliar,
        getEdad,
        setDatoNucleoFamiliar,
        selectActivar,
        setSelectActivar,
        visibleTM,
        setVisibleTM,
        cargandolista,
        cargando,
        setIdJefeHogar,idJefeHogar,
        setIdNucleoflia,idNucleoflia,
        setNombreBotoGuardarActulizar,
        nombreBotoGuardarActulizar
    }
}
