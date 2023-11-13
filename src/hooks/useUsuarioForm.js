/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';

/* import { obtenerParques, obtenerParquesOne } from '../action/ParqueAction';
import { obtenerPerfilAction } from '../action/PerfilAction';
import { obtenerTipoUserAction } from '../action/TipoUserAction'; */

import {
    crearNuevoUsuarioAction,
    editarUsuarioAction,
    editarEstadoUsuarioAction,
    obtenerUsuarioAction,
    obtenerUsuarioEditar,
    borrarUsuarioAction
} from '../action/UsuarioAction';

export const Usuarios = () => {
    // ejecutando los acciones atraves de los dispatch
    const dispatch = useDispatch()
    ///////########//////#####//////#####################///////
  /*   const obtenerPerfil = () => dispatch(obtenerPerfilAction());
    const obtenerTipoUser = () => dispatch(obtenerTipoUserAction());

    const obtenerParque = () => dispatch(obtenerParques());
    const obtenerParqueone = () => dispatch(obtenerParquesOne()); */

    const obtenerUsuario = () => dispatch(obtenerUsuarioAction());
    const crearNuevoUsuario = (Dataform) => dispatch(crearNuevoUsuarioAction(Dataform));
    const editarUsuario = (Dataform) => dispatch(editarUsuarioAction(Dataform));

    // ejecutando los selectores para ontener los estados del store
  const User = useSelector((state) => state.Auth);
  const cargando = useSelector(state => state.Usuario.loading);
  const cargandoLista = useSelector(state => state.Usuario.loadinglista);
  const loadingactivar = useSelector(state => state.Usuario.loadingactivar);
  const usuarioeditar = useSelector(state => state.Usuario.usuarioeditar);
  const { usuariolista } = useSelector(state => state.Usuario);
  const { parques, parquesone } = useSelector(state => state.Parques);
  const { perfil } = useSelector(state => state.Perfil);
  const { tipouser } = useSelector(state => state.TipoUser);


    // ejecutando para ontener los estados locales
  const [activeKey, setActiveKey] = useState(1)
  const [usuariodetalle, setUsuariodetalle] = useState({});
  const [parquesCodigo, setParquesCodigo] = useState(0)
  const [selectActivar, setSelectActivar] = useState(false)
  const [visibleNUS, setVisibleNUS] = useState(false)
  const [visibleUS, setVisibleUS] = useState(false)
  const [visiblePSW, setVisiblePSW] = useState(false)


  // nuevo state de Tenerencuenta
  const [datoUsuario, setDatoUsuario] = useState({
          Codigoparques:0,
          usuario: '',
          claveuno: '',
          estado: '',
          codperfil: '',
          codtipousuario: '',
          documento: '',
          nombres: '',
          apellidos: '',
      })

  // Leer los datos del formulario
  const onChangeFormulario = e => {
    setDatoUsuario({
      ...datoUsuario,
      [e.target.name]: e.target.value
    })
  }


  // función que redirige Editaparques
  const EditaUsuarios = Id => {
    const datos = usuariolista?.filter(U => U.UsuarioId === Id);
    dispatch(obtenerUsuarioEditar(datos));

    setDatoUsuario({
      Codigoparques: datos[0].ParqueId === null ? '' : datos[0].ParqueId,
      usuario: datos[0].Email === null ? '' : datos[0].Email,
      estado: datos[0].Estado === null ? '' : datos[0].Estado,
      codperfil: datos[0].PerfilId === null ? '' : datos[0].PerfilId,
      codtipousuario: datos[0].TipoUsuarioId === null ? '' : datos[0].TipoUsuarioId,
      documento: datos[0].Documento === null ? '' : datos[0].Documento,
      nombres: datos[0].Nombres === null ? '' : datos[0].Nombres,
      apellidos: datos[0].Apellidos === null ? '' : datos[0].Apellidos,
    })
    setVisibleUS(true);
  }


  // función que redirige Editaservicio
  const UpdateUserEstado = Id => {
    const datos = usuariolista?.filter(U => U.UsuarioId === Id);
    dispatch(editarEstadoUsuarioAction({
      Id,
      setSelectActivar,
      estadoDatos: datos[0].Estado === null ? '' : datos[0].Estado,
    }));
  }

  // función que redirige Eliminar Servicioparque
  const EliminarUsuarios = id => {
    Swal.fire({
      title: '¿Estas seguro de eliminar este Usurio?',
      text: "El Usuario eliminado no se podrá recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        dispatch(borrarUsuarioAction(id));
      }
    });
  }


    const handleChangeParque = (Id, I) => {
      const Data = usuariolista?.filter(S => S.ParqueId === Id);
        setActiveKey(I)
        setParquesCodigo(Id)
        setUsuariodetalle({ Data })
    };


  return{
      User,
      onChangeFormulario,
      handleChangeParque,
      crearNuevoUsuario,
      UpdateUserEstado,
      editarUsuario,
      //obtenerParque,
      //obtenerParqueone,
      obtenerUsuario,
     // obtenerPerfil,
    //  obtenerTipoUser,
      EditaUsuarios,
      EliminarUsuarios,
      usuariolista,
      parques,
      parquesone,
      perfil,
      tipouser,
      usuarioeditar,
      selectActivar,setSelectActivar,
      datoUsuario, setDatoUsuario,
      activeKey, setActiveKey,
      parquesCodigo, setParquesCodigo,
      usuariodetalle, setUsuariodetalle,
      visibleNUS, setVisibleNUS,
      visibleUS, setVisibleUS,
      visiblePSW, setVisiblePSW,
      cargando,
      cargandoLista,
      loadingactivar,
   }
}
