/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerConcejoAction } from 'src/action/ConsejoAction';
import { obtenerAsociacionAction } from '../action/AsociacionAction'
import { obtenerBarrioVeredaAction,  obtenercorregimientoAction, obtenertipodocumentoAction } from '../action/ParametrosAction'
import Swal from 'sweetalert2';
import { crearNuevoMiembroAction, obtenerMiembroAction } from 'src/action/MiembroAction';


export const MiembroForm = () => {
    
  const dispatch = useDispatch()
  const obtenerAsociacion = () => dispatch(obtenerAsociacionAction())
  const obtenerBarrioVereda = () => dispatch(obtenerBarrioVeredaAction())
  const obtenertipodocumento = () => dispatch(obtenertipodocumentoAction())
  const obtenerMiembro = () => dispatch(obtenerMiembroAction());
  const obtenercorregimiento = () => dispatch(obtenercorregimientoAction())
  const obtenerConcejo = () => dispatch(obtenerConcejoAction());
  
  const crearMiembro = (Dataform) => dispatch(crearNuevoMiembroAction(Dataform));

  const cargando = useSelector(state => state.Miembro.loading);
  const cargandolista = useSelector(state => state.Miembro.loadinglista);
  const barrios = useSelector(state => state.Parametros.barriosveredas);
  const tipodocumento = useSelector(state => state.Parametros.tipodocumentos);
  const consejos = useSelector((state) => state.Concejo.concejolista)
  const corregimiento = useSelector(state => state.Parametros.corregimientos);
  const asociacion = useSelector(state => state.Asociacion.asociacionlista);
  const miembro  = useSelector(state => state.Miembro.listaMiembro);

    const [validated, setValidated] = useState(false);
    const [valedita, setValedita] = useState(false)
    const [selectActivar, setSelectActivar] = useState(false);
    const [visibleM, setVisibleM] = useState(false)
    const [visibleMI, setVisibleMI] = useState(false)

    const [datoMiembro, setDatoMiembro] = useState({
        Id_barrio_vereda:'',
        Id_corregimiento:'',
        Id_tipo_documento:'',
        Documentos:'',
        Nombres:'',
        Apellidos:'',
        Sexo:'',
        Genero:'',
        Orientacion_sexual: 0,
        Direccion:'',
        Telefono:'',
        Estado:'',
        Fecha_nacimiento:'',
        Fecha_ingreso:''
    })

    const onChangeFormulario = e => {
      setDatoMiembro({
        ...datoMiembro,
            [e.target.name]: e.target.value
        })
    }
    const handleReset = () => {
      setDatoMiembro({
        Id_barrio_vereda:'',
        Id_corregimiento:'',
        Id_tipo_documento:'',
        Documentos:'',
        Nombres:'',
        Apellidos:'',
        Sexo:'',
        Genero:'',
        Orientacion_sexual:0,
        Direccion:'',
        Telefono:'',
        Estado:'',
        Fecha_nacimiento:'',
        Fecha_ingreso:''
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
                Id_conncejo_comunitario:datoMiembro.Id_conncejo_comunitario,
                Id_barrio_vereda:datoMiembro.Id_barrio_vereda,
                Id_corregimiento :datoMiembro.Id_corregimiento,
                Id_tipo_documento: datoMiembro.Id_tipo_documento,
                Documentos : datoMiembro.Documentos,
                Nombres : datoMiembro.Nombres,
                Apellidos : datoMiembro.Apellidos,
                Sexo: datoMiembro.Sexo,
                Genero: datoMiembro.Genero,
                Orientacion_sexual: datoMiembro.Orientacion_sexual ,
                Direccion: datoMiembro.Direccion,
                Telefono : datoMiembro.Telefono,
                Estado: datoMiembro.Estado,
                Fecha_nacimiento: datoMiembro.Fecha_nacimiento,
                Fecha_ingreso: datoMiembro.Fecha_ingreso
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

console.log('datos',datos[0].nombres)
            setDatoMiembro({
                Id_conncejo_comunitario:datos[0].Id_conncejo_comunitario,
                Id_barrio_vereda: datos[0].Id_barrio_vereda,
                Id_corregimiento :datos[0].Id_corregimiento,
                Id_tipo_documento: datos[0].Id_tipo_documento,
                Documentos :datos[0].Documentos,
                Nombres :datos[0].nombres,
                Apellidos : datos[0].Apellidos,
                Sexo:datos[0].Sexo,
                Genero:datos[0].Genero,
                Orientacion_sexual: datos[0].Orientacion_sexual,
                Direccion:datos[0].Direccion,
                Telefono :datos[0].Telefono,
                Estado: datos[0].Estado,
                Fecha_nacimiento:datos[0].Fecha_nacimiento,
                Fecha_ingreso:datos[0].Fecha_ingreso 
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
      obtenerConcejo,
      obtenerBarrioVereda,
      obtenertipodocumento,
      obtenercorregimiento,
      eliminarMiembro,
      EditaMiembro,
      asociacion,
      tipodocumento,
      corregimiento,
      consejos,
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
