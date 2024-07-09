/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
//import { obtenerTipoUserAction } from '../action/TipoUserAction';
import {
  crearNuevoUsuarioAction,
  editarUsuarioAction,
  editarEstadoUsuarioAction,
  editarClaveUsuarioAction,
  cambiarClaveUsuarioAction,
  obtenerUsuarioAction,
  obtenerPerfilAction,
  borrarUsuarioAction,
} from '../action/UsuarioAction'

export const Usuarios = () => {
  // ejecutando los acciones atraves de los dispatch
  const dispatch = useDispatch()
  ///////########//////#####//////#####################///////
  const obtenerPerfil = () => dispatch(obtenerPerfilAction());
  //const obtenerTipoUser = () => dispatch(obtenerTipoUserAction());

  const obtenerUsuario = () => dispatch(obtenerUsuarioAction())
  const crearNuevoUsuario = (Dataform) => dispatch(crearNuevoUsuarioAction(Dataform))
  const editarUsuario = (Dataform) => dispatch(editarUsuarioAction(Dataform))
  const cambiarClaveUsuario = (Dataform) => dispatch(cambiarClaveUsuarioAction(Dataform))

  // ejecutando los selectores para ontener los estados del store
  const User = useSelector((state) => state.Auth)
  const cargando = useSelector((state) => state.Usuario.loading)
  const cargandoLista = useSelector((state) => state.Usuario.loadinglista)
  const loadingactivar = useSelector((state) => state.Usuario.loadingactivar)
  const usuarioeditar = useSelector((state) => state.Usuario.usuarioeditar)
  const { usuariolista, Perfil } = useSelector((state) => state.Usuario)
  //const { tipouser } = useSelector((state) => state.TipoUser)

  // ejecutando para ontener los estados locales
  const [activeKey, setActiveKey] = useState(1)
  const [usuariodetalle, setUsuariodetalle] = useState({})
  const [selectActivarEST, setSelectActivarEST] = useState(false)
  const [selectActivarREC, setSelectActivarREC] = useState(false)
  const [visibleNUS, setVisibleNUS] = useState(false)
  const [visibleUS, setVisibleUS] = useState(false)
  const [visiblePSW, setVisiblePSW] = useState(false)
  const [validated, setValidated] = useState(false)


  // nuevo state de Tenerencuenta
  const [datoUsuario, setDatoUsuario] = useState({
     USERNAME: '',
     ID_ROLL: '',
     PASS_ACTUAL: '',
     PASS_NUEVO: '',
     PASS_ACTUAL_REPET: '',
  })

  // Leer los datos del formulario
  const onChangeFormulario = (e) => {
    setDatoUsuario({
      ...datoUsuario,
      [e.target.name]: e.target.value,
    })
  }

  const handleReset = () => {
    setDatoUsuario({
       PASS_ACTUAL: '',
       PASS_NUEVO: '',
       PASS_ACTUAL_REPET: '',
    })
  }

   const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true)
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {

         if (datoUsuario.PASS_NUEVO === datoUsuario.PASS_ACTUAL_REPET) {
              const formularioDatos = {
                ID : User.userDetails.ID_USER,
                PASS_ACTUAL:datoUsuario.PASS_ACTUAL,
                PASS_NUEVO:datoUsuario.PASS_NUEVO,
                VALFORM:1
              }

              if (Object.values(formularioDatos).some(value => !value)) {
                setValidated(true)
              }else{
                setValidated(false)
                cambiarClaveUsuario({formularioDatos,handleReset})
              }
            }else {
                 Swal.fire('Atención',
                           'Las contraseñas no coinciden',
                           'warning')
         }
      }
   }

  // función que redirige Editaparques
  const EditaUsuarios = (ID) => {
    const datos = usuariolista?.filter((U) => U.ID_USER === ID)
    //console.log(datos)

   setDatoUsuario({
      USERNAME: datos[0].USERNAME === null ? '' : datos[0].USERNAME,
      ID_USER: datos[0].ID_USER === null ? '' : datos[0].ID_USER,
      ID_ROLL: datos[0].ID_ROLL === null ? '' : datos[0].ID_ROLL,
      ID_EMP: datos[0].ID_EMP === null ? '' : datos[0].ID_EMP,
      ID_AUT: datos[0].ID_AUT === null ? '' : datos[0].ID_AUT,
    })
    setVisibleUS(true)
  }

  // función que redirige Editaservicio
  const UpdateUserEstado = (Id) => {
    const datos = usuariolista?.filter((U) => U.ID_USER === Id)
    dispatch(
      editarEstadoUsuarioAction({
        Id,
        setSelectActivarEST,
        estadoDatos: datos[0].ESTADO === '0' ? '1' : '0',
      }),
    )
  }

    // función que redirige Editaservicio
  const CambioUserClave = (Id) => {
    const datos = usuariolista?.filter((U) => U.ID_USER === Id)
    dispatch(
      editarClaveUsuarioAction({
        Id,
        setSelectActivarREC,
        PASS_NUEVO: datos[0].emp_documento !== null ? datos[0].emp_documento  : datos[0].aut_documentos,
        VALFORM:0
      }),
    )
  }

  // función que redirige Eliminar Servicioparque
  const EliminarUsuarios = (Id) => {
    Swal.fire({
      title: '¿Estas seguro de eliminar este Usurio?',
      text: 'El Usuario eliminado no se podrá recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        dispatch(borrarUsuarioAction(Id))
      }
    })
  }

  return {
    User,
    handleSubmit,
    onChangeFormulario,
    crearNuevoUsuario,
    UpdateUserEstado,
    CambioUserClave,
    editarUsuario,
    obtenerUsuario,
    obtenerPerfil,
    EditaUsuarios,
    EliminarUsuarios,
    usuariolista,
    Perfil,
    usuarioeditar,
    setSelectActivarEST,
    selectActivarEST,
    setSelectActivarREC,
    selectActivarREC,
    datoUsuario,
    setDatoUsuario,
    activeKey,
    setActiveKey,
    usuariodetalle,
    setUsuariodetalle,
    visibleNUS,
    setVisibleNUS,
    visibleUS,
    setVisibleUS,
    visiblePSW,
    setVisiblePSW,
    validated,
    cargando,
    cargandoLista,
    loadingactivar,
  }
}
