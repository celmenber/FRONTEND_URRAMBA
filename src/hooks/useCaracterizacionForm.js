/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {
  crearCaracterizacionAction,
  obtenerCaratacterizacionAction
} from '../action/CaracterizacionAction'
import { obtenerJefeHogarAction } from '../action/JefeHogarAction'
import Swal from 'sweetalert2'

export const CaracterizacionForm = () => {

      const dispatch = useDispatch()
      const obtenerCaratacterizacion = () => dispatch(obtenerCaratacterizacionAction())
      const obtenerJefeHogar = () => dispatch(obtenerJefeHogarAction())
      const crearCaracterizacion = (Dataform) => dispatch(crearCaracterizacionAction(Dataform))

  //selecion del state en el  store
 const { userDetails } = useSelector((state) => state.Auth);
 const JefeHogar = useSelector((state) => state.JefeHogar.listaJefeHogar)
 const caracterizacion = useSelector((state) => state.Caracterizacion.Caracterizacionlista)

  const handleSubmitCaracterizacion = (result) => {
    const IdJefeHogar = parseInt(localStorage.getItem("IdJefeHogar"))
    const DataDG = JSON.parse(localStorage.getItem("DataDG"));
    const DataOL = JSON.parse(localStorage.getItem("DataOL"));
    const DataVI = JSON.parse(localStorage.getItem("DataVI"));
    const DataAP = JSON.parse(localStorage.getItem("DataAP"));
    const DataTC = JSON.parse(localStorage.getItem("DataTC"));

    const formularioDatos = {
            id_usuario:userDetails.ID_USER,
            id_jefe_hogar:IdJefeHogar,
            regimen_salud:DataDG.datogeneral.regimenS,
            se_encuentra_vinculado_asalud:DataDG.datogeneral.vinculadoA !=='Otro'
            ? DataDG.datogeneral.vinculadoA
            :DataDG.datogeneral.otrosV,
            usted_esvictima_conflicto:DataDG.datogeneral.victimaC,
            ustedesta_inscrito_enRUV:DataDG.datogeneral.RUV,
            tiene_discapacidad:DataDG.datogeneral.discapacidadT,
            indique_sudiscapacidad:handleDiscapacida(DataDG.datoD),
            se_encuentra_afiliado_sistema_previsional:DataOL.datoradio.afiliado,
            mejor_condición_laboral_actual:handleCondicionlaboral(DataOL.datoCL),
            tipo_remuneracion:DataOL.datoradio.remuneracionL,
            ocupacion_uoficio:handleOcupacionOficio(DataOL.datoOU),
            personas_habitan_vivienda:DataVI.personasHV, /// ojo
            tipo_vivienda:DataVI.datoradio.viviendaTI,
            tenencia_vivienda:DataVI.datoradio.viviendaTE,
            material_predominante_murosexteriores:handleMurosExteriores(DataVI.datoMT),
            material_predominante_cubierta_techo:handleCubiertaTecho(DataVI.datoCT),
            material_predominante_piso:handlePiso(DataVI.datoEP),
            elagua_proviene_de:handleAgua(DataVI.datoEA),
            servicio_higienico_vivienda_esta:DataAP.datoradioAP.viviendaSH,
            laelectricidad_proviene_de:DataAP.datoradioAP.electricidaSP,
            medio_eliminacion_basura:DataAP.datoradioAP.basuraSP,
            tiene_sistema_cocina:DataAP.datoradioAP.cocinarSP, /// ojo
            metodo_utilizado_cocinar:handleCocinar(DataAP.datoC),
            acceso_telefono_fijo:DataAP.datoradioAP.tfijoSP, /// ojo
            acceso_telefono_movil:DataAP.datoradioAP.tmovilSP, /// ojo
            acceso_telefono_internet:DataAP.datoradioAP.internetSP,/// ojo
            servicios_sector_vias_acceso:DataAP.datoradioAP.viaccesoSV, /// ojo
            servicios_sector_canchas_deportivas:DataAP.datoradioAP.canchasdSV, /// ojo
            servicios_sector_parques:DataAP.datoradioAP.parquesSV, /// ojo
            servicios_sector_salon_comunal:DataAP.datoradioAP.salonComunalSV, /// ojo
           componente_territorio_equipamiento_social:handleEqsocial(DataTC.datoQS), ///ojo
           componente_territorio_estado_via:DataTC.datoradioTC.eviasectorTC, /// ojo
           componente_territorio_frecuencia_rutas:DataTC.datoradioTC.transporteTC, /// ojo
           componente_territorio_acceso_desarrollo:DataTC.datoradioTC.dpoblacionTC, /// ojo
           componente_territorio_desarrollados_beneficiende:DataTC.datoradioTC.pbeneficiendeTC, /// ojo
           componente_medicina_tradicional :DataTC.datoradioTC.mtradicionalTC, /// ojo
           componente_medicinaT_ejerce_territorio :DataTC.datoradioTC.qejeterritorioTC !=='Otro'
            ? DataTC.datoradioTC.qejeterritorioTC
            : DataTC.datoradioTC.otroQEJ, /// ojo
           aspecto_folclor_bailes_mapale:DataTC.datoradioTC.MapaleAF, /// ojo
           aspecto_folclor_bailes_sondenegro:DataTC.datoradioTC.SonNegroAF, /// ojo
           aspecto_folclor_bailes_losnegritos:DataTC.datoradioTC.LosNegritosAF, /// ojo
           aspecto_folclor_bailes_seresese:DataTC.datoradioTC.SereseseAF, /// ojo
           aspecto_folclor_frecuenciab_mapale:DataTC.datoradioTC.FMapaleAF, /// ojo
           aspecto_folclor_frecuenciab_sondenegro:DataTC.datoradioTC.FSonNegroAF, /// ojo
           aspecto_folclor_frecuenciab_losnegritos:DataTC.datoradioTC.FLosNegritosAF, /// ojo
           aspecto_folclor_frecuenciab_seresese:DataTC.datoradioTC.FSereseseAF, /// ojo
           aspecto_folclor_usadas_danzas_canto:DataTC.datoradioTC.UsoDanzas !=='Otro'
            ? DataTC.datoradioTC.UsoDanzas
            : DataTC.datoradioTC.otrosTC,
      }
       console.log(formularioDatos);
      // if(result.value){
         crearCaracterizacion(formularioDatos);
       //}

  }

const handleDiscapacida = (DATO) => {
let cadena = DATO.discapacidadA+","+
             DATO.discapacidadB+","+
             DATO.discapacidadC+","+
             DATO.discapacidadD+","+
             DATO.discapacidadE;

    var vector = cadena.split(",");
    var lista = "";
    for (var i = 0; i < vector.length; i++) {
      if (vector[i] !== "") {
        lista = lista + vector[i] + ";";
      }
    }
    return true;
  };

const handleCondicionlaboral = (DATO) => {
    let cadena = `${DATO.condicionlaboralA},
                  ${DATO.condicionlaboralB},
                  ${DATO.condicionlaboralC},
                  ${DATO.condicionlaboralD},
                  ${DATO.condicionlaboralE},
                  ${DATO.condicionlaboralF},
                  ${DATO.condicionlaboralG},
                  ${DATO.condicionlaboralH}`;

        var vector = cadena.split(",");
        var lista = "";
        for (var i = 0; i < vector.length; i++) {
          if (vector[i] !== "") {
            lista = lista + vector[i] + ";";
          }
        }
        return lista;
  };

const handleOcupacionOficio = (DATO) => {
        let cadena = `${DATO.ocupacionOficiolA},
                      ${DATO.ocupacionOficiolB},
                      ${DATO.ocupacionOficiolC},
                      ${DATO.ocupacionOficiolD},
                      ${DATO.ocupacionOficiolE},
                      ${DATO.ocupacionOficiolF},
                      ${DATO.ocupacionOficiolG},
                      ${DATO.ocupacionOficiolH},
                      ${DATO.ocupacionOficiolI}`;

        var vector = cadena.split(",");
        var lista = "";
        for (var i = 0; i < vector.length; i++) {
          if (vector[i] !== "") {
            lista = lista + vector[i] + ";";
          }
        }
   return lista;
};

const handleMurosExteriores = (DATO) => {
        let cadena = `${DATO.mexteriores_1},
                      ${DATO.mexteriores_2},
                      ${DATO.mexteriores_3},
                      ${DATO.mexteriores_4},
                      ${DATO.mexteriores_5},
                      ${DATO.mexteriores_6},
                      ${DATO.mexteriores_7},
                      ${DATO.mexteriores_8},
                      ${DATO.mexteriores_9},
                      ${DATO.mexteriores_10},
                      ${DATO.mexteriores_11},
                      ${DATO.mexteriores_12},
                      ${DATO.mexteriores_13},
                      ${DATO.mexteriores_14}`;

        var vector = cadena.split(",");
        var lista = "";
        for (var i = 0; i < vector.length; i++) {
          if (vector[i] !== "") {
            lista = lista + vector[i] + ";";
          }
        }
   return lista;
};

const handleCubiertaTecho = (DATO) => {
        let cadena = `${DATO.ctecho_1},
                      ${DATO.ctecho_2},
                      ${DATO.ctecho_3},
                      ${DATO.ctecho_4},
                      ${DATO.ctecho_5},
                      ${DATO.ctecho_6},
                      ${DATO.ctecho_7},
                      ${DATO.ctecho_8},
                      ${DATO.ctecho_9},
                      ${DATO.ctecho_10},
                      ${DATO.ctecho_11}`;

        var vector = cadena.split(",");
        var lista = "";
        for (var i = 0; i < vector.length; i++) {
          if (vector[i] !== "") {
            lista = lista + vector[i] + ";";
          }
        }
   return lista;
};

const handlePiso = (DATO) => {
        let cadena = `${DATO.episo_1},
                      ${DATO.episo_2},
                      ${DATO.episo_3},
                      ${DATO.episo_4},
                      ${DATO.episo_5}`;

        var vector = cadena.split(",");
        var lista = "";
        for (var i = 0; i < vector.length; i++) {
          if (vector[i] !== "") {
            lista = lista + vector[i] + ";";
          }
        }
   return lista;
};


const handleAgua = (DATO) => {
        let cadena = `${DATO.eagua_1},
                      ${DATO.eagua_2},
                      ${DATO.eagua_3},
                      ${DATO.eagua_4},
                      ${DATO.eagua_5}`;

        var vector = cadena.split(",");
        var lista = "";
        for (var i = 0; i < vector.length; i++) {
          if (vector[i] !== "") {
            lista = lista + vector[i] + ";";
          }
        }
   return lista;
};

const handleCocinar = (DATO) => {
        let cadena = `${DATO.metodococinarA},
                      ${DATO.metodococinarB},
                      ${DATO.metodococinarC},
                      ${DATO.metodococinarD},
                      ${DATO.metodococinarF},
                      ${DATO.metodococinarE}`;

        var vector = cadena.split(",");
        var lista = "";
        for (var i = 0; i < vector.length; i++) {
          if (vector[i] !== "") {
            lista = lista + vector[i] + ";";
          }
        }
   return lista;
};

const handleEqsocial = (DATO) => {
        let cadena = `${DATO.eqsocial_1},
                      ${DATO.eqsocial_2},
                      ${DATO.eqsocial_3},
                      ${DATO.eqsocial_4},
                      ${DATO.eqsocial_5},
                      ${DATO.eqsocial_6},
                      ${DATO.eqsocial_7},
                      ${DATO.eqsocial_8}`;

        var vector = cadena.split(",");
        var lista = "";
        for (var i = 0; i < vector.length; i++) {
          if (vector[i] !== "") {
            lista = lista + vector[i] + ";";
          }
        }
   return lista;
};

return {
     handleSubmitCaracterizacion,
     obtenerCaratacterizacion,
     obtenerJefeHogar,
     caracterizacion,
     JefeHogar,
     userDetails,
    }
};
