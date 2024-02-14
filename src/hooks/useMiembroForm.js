/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { obtenerAsociacionAction } from '../action/AsociacionAction'
import { obtenerBarrioVeredaAction } from '../action/ParametrosAction'
import Swal from 'sweetalert2';
import { crearNuevoMiembroAction, obtenerMiembroAction } from 'src/action/MiembroAction';

export const MiembroForm = () => {
    debugger
  const dispatch = useDispatch()
  const obtenerAsociacion = () => dispatch(obtenerAsociacionAction())
  const obtenerBarrioVereda = () => dispatch(obtenerBarrioVeredaAction())
  const obtenerMiembro = () => dispatch(obtenerMiembroAction());
  const crearMiembro = (Dataform) => dispatch(crearNuevoMiembroAction(Dataform));

  const cargando = useSelector(state => state.Miembro.loading);
  const cargandolista = useSelector(state => state.Miembro.loadinglista);
  const barrios = useSelector(state => state.Parametros.barriosveredas);
  const asociacion = useSelector(state => state.Asociacion.asociacionlista);
  const miembro  = useSelector(state => state.Miembro.listaMiembro);

    const [validated, setValidated] = useState(false);
    const [valedita, setValedita] = useState(false)
    const [selectActivar, setSelectActivar] = useState(false);
    const [visibleM, setVisibleM] = useState(false)
    const [visibleMI, setVisibleMI] = useState(false)

    const [datoMiembro, setDatoMiembro] = useState({
          Id_asociacion:'',
          Id_barrio_vereda:'',
          Id_tipo_documento:'',
          Documentos:'',
          Nombres: '',
          Apellidos: '',
          Direccion:'',
          Telefono:'',
          Correo:'',
          Estado: '',
          Fecha_ingreso:'',
    })

    const onChangeFormulario = e => {
      setDatoMiembro({
        ...datoMiembro,
            [e.target.name]: e.target.value
        })
    }
    const handleReset = () => {
      setDatoMiembro({
            Id_asociacion: '',
            Id_barrio_vereda: '',
            Id_tipo_documento: '',
            Documentos: '',
            Nombres: '',
            Apellidos: '',
            Direccion: '',
            Telefono: '',
            Correo: '',
            Estado: '',
            Fecha_ingreso: '',
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
                Id_conncejo_comunitario:"13",
                Id_barrio_vereda: "1",
                Id_corregimiento :"1",
                Id_tipo_documento: "1",
                Documentos :"10855555",
                Nombres :"Pedro",
                Apellidos : "castro",
                Sexo:"Hombre",
                Genero:"Femenino",
                Orientacion_sexual: 1 ,
                Direccion:"calle 55",
                Telefono :"3154454454",
                Estado: "1",
                Fecha_nacimiento:"1987-06-10",
                Fecha_ingreso:"1988-06-10" 
            }

            if (valedita === false) {

              crearMiembro({
                    formularioDatos,
                    handleReset
                })
            }
            setVisibleM(false)
            event.stopPropagation()
        }
   
        setValidated(true)
    }
    const EditaMiembro= id => {
      const datos = miembro.filter(C => C.ID === id)
debugger
            setDatoMiembro({

                Id_conncejo_comunitario:"13",
                Id_barrio_vereda: "1",
                Id_corregimiento :"1",
                Id_tipo_documento: "1",
                Documentos :"10855555",
                Nombres :"Pedro",
                Apellidos : "castro",
                Sexo:"Hombre",
                Genero:"Femenino",
                Orientacion_sexual: 1 ,
                Direccion:"calle 55",
                Telefono :"3154454454",
                Estado: "1",
                Fecha_nacimiento:"1987-06-10",
                Fecha_ingreso:"1988-06-10" 
            //   Id_asociacion: datos[0].id_asociacion === null ? '' : datos[0].id_asociacion,
            //   Id_barrio_vereda: datos[0].id_barrio_vereda === null ? '' : datos[0].id_barrio_vereda,
            //   Documentos: datos[0].documentos === null ? '' : datos[0].documentos,
            //   Nombres: datos[0].nombres === null ? '' : datos[0].nombres,
            //   Apellidos: datos[0].apellidos === null ? '' : datos[0].apellidos,
            //   Direccion: datos[0].direccion === null ? '' : datos[0].direccion,
            //   Telefono: datos[0].telefono === null ? '' : datos[0].telefono,
            //   Correo: datos[0].correo === null ? '' : datos[0].correo,
            //   Estado: datos[0].estado === null ? '' : datos[0].estado,
            })
        setValedita(true)
        setVisibleMI(true)
    }
    const eliminarMiembro = id => {
        Swal.fire({
            title: '¿Estas seguro de eliminar?',
          text: "El Miembro del consejo eliminado no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
               // dispatch(borrarConvenioAction(id));
            }
        });
    }


  return {
      handleSubmit,
      onChangeFormulario,
      handleReset,
      obtenerMiembro,
      obtenerAsociacion,
      obtenerBarrioVereda,
      eliminarMiembro,
      EditaMiembro,
      asociacion,
      miembro,
      barrios,
      validated,
      valedita,
      datoMiembro, setDatoMiembro,
      selectActivar, setSelectActivar,
      visibleM, setVisibleM,
      visibleMI, setVisibleMI,
      cargandolista,
      cargando
  }
}
