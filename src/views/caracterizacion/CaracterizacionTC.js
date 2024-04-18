/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
  CCol,
  CRow,
  CFormCheck,
  CFormInput,
  CButton,
  CAlert
} from '@coreui/react'
import { CForm } from '@coreui/react-pro'
import Swal from 'sweetalert2'

import { CaracterizacionForm } from '../../hooks'

const CaracterizacionTC = () => {
  const [validated, setValidated] = useState(false)
  const [otrosTC, setOtrosTC] = useState("");
  const [otroQEJ, setOtrosQEJE] = useState("");

   const { handleSubmitCaracterizacion } = CaracterizacionForm();


  const [datoradioTC, setDatoradioTC] = useState({
       eviasectorTC: "",
       transporteTC: "",
       dpoblacionTC: "",
       pbeneficiendeTC: "",
       mtradicionalTC: "",
       qejeterritorioTC: "",
       MapaleAF:"",
       SonNegroAF:"",
       LosNegritosAF:"",
       SereseseAF:"",
       FMapaleAF:"",
       FSonNegroAF:"",
       FLosNegritosAF:"",
       FSereseseAF:"",
       UsoDanzas:"",
  });

    const onChangeTC = (e) => {
    setDatoradioTC({
      ...datoradioTC,
      [e.target.name]: e.target.value,
    });
  };

  const [stateQS, setStateQS] = useState({
    eqsocial_1: false,
    eqsocial_2: false,
    eqsocial_3: false,
    eqsocial_4: false,
    eqsocial_5: false,
    eqsocial_6: false,
    eqsocial_7: false,
    eqsocial_8: false,
  });

  const datoQS = {
        eqsocial_1: stateQS.eqsocial_1 === true ? "Instituciones educativas basica primaria" : "",
        eqsocial_2: stateQS.eqsocial_2 === true ? "Instituciones educativas secundaria" : "",
        eqsocial_3: stateQS.eqsocial_3 === true ? "Instituciones educativas ténicas" : "",
        eqsocial_4: stateQS.eqsocial_4 === true ? "Instituciones educativas universitarias" : "",
        eqsocial_5: stateQS.eqsocial_5 === true ? "Instituciones de salud de primer nivel" : "",
        eqsocial_6: stateQS.eqsocial_6 === true ? "Instituciones de salud de segundo nivel" : "",
        eqsocial_7: stateQS.eqsocial_7 === true ? "Instituciones de salud de tercer nivel" : "",
        eqsocial_8: stateQS.eqsocial_8 === true ? "Instituciones de salud de cuarto nivel" : "",

  };

    const handleChangeQS = (event) => {
           setStateQS({ ...stateQS, [event.target.name]: event.target.checked });
     };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true)
  const form = event.currentTarget
  if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    return false;
  }

  const DataForm = {
      datoQS,
      datoradioTC,
      otrosTC,
      otroQEJ,
    };
    // console.log(DataForm);
    localStorage.setItem("DataTC", JSON.stringify(DataForm));
    //console.log(localStorage.getItem("DataTC"));

   Swal.fire({
      title: '¿Estas seguro que desea enviar la caraterizacion del jefe de hogar?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar, enviar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      console.log(result);
      if (result.value) {
         handleSubmitCaracterizacion(result);
      }
    });


}

  return <>
     <CRow>
       <CCol xs={12} style={{marginTop:"-25px"}}>
       <CForm
          className="row g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}>
                        <CRow className="mb-2 mt-0">
                            <CCol className="mb-2" style={{textAlign:"center"}}>
                                    <CAlert color="primary">
                                      <h6>Componente espacial y Territorio</h6>
                                  </CAlert>
                              </CCol>
                          </CRow>
                      <CRow className="mb-2">
                            <CCol sm="auto">Cual es el equipamiento social presente en el sector donde vive?:</CCol>
                            <CCol sm="auto">
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="eqsocial_1"
                                id="equipamientoFormCheck1"
                                label="Instituciones educativas basica primaria"
                                checked={stateQS.eqsocial_1}
                                onChange={handleChangeQS}

                              />
                               <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="eqsocial_2"
                                id="equipamientoFormCheck2"
                                label="Instituciones educativas secundaria"
                                checked={stateQS.eqsocial_2}
                                onChange={handleChangeQS}

                              />
                               <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="eqsocial_3"
                                id="equipamientoFormCheck3"
                                label="Instituciones educativas ténicas"
                                checked={stateQS.eqsocial_3}
                                onChange={handleChangeQS}

                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="eqsocial_4"
                                id="equipamientoFormCheck4"
                                label="Instituciones educativas universitarias"
                                checked={stateQS.eqsocial_4}
                                onChange={handleChangeQS}

                              />
                              </CCol>
                              <CCol sm="auto">
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="eqsocial_5"
                                id="equipamientoFormCheck5"
                                label="Instituciones de salud de primer nivel"
                                checked={stateQS.eqsocial_5}
                                onChange={handleChangeQS}

                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="eqsocial_6"
                                id="equipamientoFormCheck6"
                                label="Instituciones de salud de segundo nivel"
                                checked={stateQS.eqsocial_6}
                                onChange={handleChangeQS}

                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="eqsocial_7"
                                id="equipamientoFormCheck7"
                                label="Instituciones de salud de tercer nivel"
                                checked={stateQS.eqsocial_7}
                                onChange={handleChangeQS}

                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="eqsocial_8"
                                id="equipamientoFormCheck8"
                                label="Instituciones de salud de cuarto nivel"
                                checked={stateQS.eqsocial_8}
                                onChange={handleChangeQS}

                              />
                              </CCol>
                        </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">Estado de la via en el sector donde reside?:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="eviasectorTC"
                                id="eviaFormCheck1"
                                label="Buena"
                                value="Buena"
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="eviasectorTC"
                                id="eviaFormCheck2"
                                label="Regular"
                                value="Regular"
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="eviasectorTC"
                                id="eviaFormCheck3"
                                label="Mala"
                                value="Mala"
                                onChange={onChangeTC}
                                required
                              />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">Existecia de transporte público y frecuencia de rutas?:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="transporteTC"
                                id="transportePFormCheck1"
                                label="Si"
                                value="Si"
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="transporteTC"
                                id="transportePFormCheck2"
                                label="No"
                                value="No"
                                onChange={onChangeTC}
                                required
                              />
                            </CCol>
                        </CRow>
                      <CRow className="mb-2">
                            <CCol sm="auto">En dicho programa como ha sido el acceso y el
                                            desarrollo de la poblacion Afrocolombiana?:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="dpoblacionTC"
                                id="apoblacionFormCheck1"
                                label="Facil"
                                value="Facil"
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="dpoblacionTC"
                                id="apoblacionFormCheck2"
                                label="Complejo"
                                value="Complejo"
                                onChange={onChangeTC}
                                required
                              />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">Existen actualmente proyectos desarollados y que beneficiende a la poblacion Afrocolombiana?:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="pbeneficiendeTC"
                                id="proyectosBFormCheck1"
                                label="Si"
                                value="Si"
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="pbeneficiendeTC"
                                id="proyectosBFormCheck2"
                                label="No"
                                value="No"
                                onChange={onChangeTC}
                                required
                              />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2 mt-0">
                            <CCol className="mb-2" style={{textAlign:"center"}}>
                                    <CAlert color="primary">
                                      <h6>Componente de Medicina Tradicional</h6>
                                  </CAlert>
                              </CCol>
                          </CRow>
                          <CRow className="mb-2">
                            <CCol sm="auto">Usted conoce forma de medicina tradicional diferente a la convencional:?</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="mtradicionalTC"
                                id="medicinaTFormCheck1"
                                label="Si"
                                value="Si"
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="mtradicionalTC"
                                id="medicinaTFormCheck2"
                                label="No"
                                value="No"
                                onChange={onChangeTC}
                                required
                              />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">Quien la ejerce en su territorio?:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="qejeterritorioTC"
                                id="medicinaTEFormCheck1"
                                label="Medico tradicional"
                                value="Medico tradicional"
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="qejeterritorioTC"
                                id="medicinaTEFormCheck2"
                                label="Curandero"
                                value="Curandero"
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="qejeterritorioTC"
                                id="emedicinaTEFormCheck3"
                                label="Llervero"
                                value="Llervero"
                                onChange={onChangeTC}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="qejeterritorioTC"
                                id="medicinaTEFormCheck4"
                                label="Sobador"
                                value="Sobador"
                                onChange={onChangeTC}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="qejeterritorioTC"
                                id="medicinaTEFormCheck5"
                                label="Partera"
                                value="Partera"
                                onChange={onChangeTC}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="qejeterritorioTC"
                                id="medicinaTEFormCheck6"
                                label="Otro"
                                value="Otro"
                                onChange={onChangeTC}
                                required
                              />
                              </CCol>
                               <CCol sm="auto">
                                <CFormInput type="text"
                                size="sm"
                                placeholder="Otro Quien la ejerce"
                                aria-label="sm input example"
                                name="otroQEJ"
                                value={otroQEJ}
                                onChange={(e) => setOtrosQEJE(e.target.value)}
                                />
                                </CCol>
                        </CRow>
                          <CRow className="mb-2 mt-0">
                            <CCol className="mb-2" style={{textAlign:"center"}}>
                                    <CAlert color="primary">
                                      <h6>Aspecto del folclor de su territorio</h6>
                                  </CAlert>
                              </CCol>
                          </CRow>
                        <CRow className="mb-2 mt-0">
                            <CCol className="mb-2">
                                   <h6>Cree o considera que los siguientes bailes son parte de la cultura Afrodescediente
                                    de la region caribe?:
                                   </h6>
                              </CCol>
                          </CRow>
                           <CRow className="mb-2">
                             <CCol sm="auto">Mapale:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="MapaleAF"
                                id="BMapaleFormCheck1"
                                label="Si"
                                value="Si"
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="MapaleAF"
                                id="BMapaleFormCheck2"
                                label="No"
                                value={"No"}
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="MapaleAF"
                                id="BMapaleFormCheck3"
                                label="No Sabe"
                                value={"No Sabe"}
                                onChange={onChangeTC}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="MapaleAF"
                                id="BMapaleFormCheck4"
                                label="No Responde"
                                value={"No Responde"}
                                onChange={onChangeTC}
                                required
                              />
                              </CCol>
                             <CCol sm="auto">Son de Negro:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="SonNegroAF"
                                id="SonNegroFormCheck1"
                                label="Si"
                                value={"Si"}
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="SonNegroAF"
                                id="SonNegroFormCheck2"
                                label="No"
                                value={"No"}
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="SonNegroAF"
                                id="SonNegroFormCheck3"
                                label="No Sabe"
                                value={"No Sabe"}
                                onChange={onChangeTC}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="SonNegroAF"
                                id="SonNegroFormCheck4"
                                label="No Responde"
                                value={"No Responde"}
                                onChange={onChangeTC}
                                required
                              />
                              </CCol>
                            </CRow>
                            <CRow className="mb-2">
                            <CCol sm="auto">Los Negritos:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="LosNegritosAF"
                                id="NegritosFormCheck1"
                                label="Si"
                                value={"Si"}
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="LosNegritosAF"
                                id="NegritosFormCheck2"
                                label="No"
                                value={"No"}
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="LosNegritosAF"
                                id="NegritosFormCheck3"
                                label="No Sabe"
                                value={"No Sabe"}
                                onChange={onChangeTC}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="LosNegritosAF"
                                id="NegritosFormCheck4"
                                label="No Responde"
                                value={"No Responde"}
                                onChange={onChangeTC}
                                required
                              />
                              </CCol>
                             <CCol sm="auto">Seresesé:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="SereseseAF"
                                id="SereseseFormCheck1"
                                label="Si"
                                value={"Si"}
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="SereseseAF"
                                id="SereseseFormCheck2"
                                label="No"
                                value={"No"}
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="SereseseAF"
                                id="SereseseFormCheck3"
                                label="No Sabe"
                                value={"No Sabe"}
                                onChange={onChangeTC}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="SereseseAF"
                                id="SereseseFormCheck4"
                                label="No Responde"
                                value={"No Responde"}
                                onChange={onChangeTC}
                                required
                              />
                              </CCol>
                            </CRow>
                            <CRow className="mb-2 mt-0">
                            <CCol className="mb-2">
                                   <h6>Con que frecuencia lo pratica?:</h6>
                              </CCol>
                          </CRow>
                           <CRow className="mb-2">
                             <CCol sm="auto">Mapale:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FMapaleAF"
                                id="FBMapaleFormCheck1"
                                label="Si"
                                value="Si"
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FMapaleAF"
                                id="FBMapaleFormCheck2"
                                label="No"
                                value={"No"}
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FMapaleAF"
                                id="FBMapaleFormCheck3"
                                label="No Sabe"
                                value={"No Sabe"}
                                onChange={onChangeTC}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FMapaleAF"
                                id="FBMapaleFormCheck4"
                                label="No Responde"
                                value={"No Responde"}
                                onChange={onChangeTC}
                                required
                              />
                              </CCol>
                             <CCol sm="auto">Son de Negro:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FSonNegroAF"
                                id="FSonNegroFormCheck1"
                                label="Si"
                                value={"Si"}
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FSonNegroAF"
                                id="FSonNegroFormCheck2"
                                label="No"
                                value={"No"}
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FSonNegroAF"
                                id="FSonNegroFormCheck3"
                                label="No Sabe"
                                value={"No Sabe"}
                                onChange={onChangeTC}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FSonNegroAF"
                                id="FSonNegroFormCheck4"
                                label="No Responde"
                                value={"No Responde"}
                                onChange={onChangeTC}
                                required
                              />
                              </CCol>
                            </CRow>
                             <CRow className="mb-2">
                            <CCol sm="auto">Los Negritos:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FLosNegritosAF"
                                id="FNegritosFormCheck1"
                                label="Si"
                                value={"Si"}
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FLosNegritosAF"
                                id="FNegritosFormCheck2"
                                label="No"
                                value={"No"}
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FLosNegritosAF"
                                id="FNegritosFormCheck3"
                                label="No Sabe"
                                value={"No Sabe"}
                                onChange={onChangeTC}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FLosNegritosAF"
                                id="FNegritosFormCheck4"
                                label="No Responde"
                                value={"No Responde"}
                                onChange={onChangeTC}
                                required
                              />
                              </CCol>
                             <CCol sm="auto">Seresesé:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FSereseseAF"
                                id="FSereseseFormCheck1"
                                label="Si"
                                value={"Si"}
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FSereseseAF"
                                id="FSereseseFormCheck2"
                                label="No"
                                value={"No"}
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FSereseseAF"
                                id="FSereseseFormCheck3"
                                label="No Sabe"
                                value={"No Sabe"}
                                onChange={onChangeTC}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FSereseseAF"
                                id="FSereseseFormCheck4"
                                label="No Responde"
                                value={"No Responde"}
                                onChange={onChangeTC}
                                required
                              />
                              </CCol>
                            </CRow>
                            <CRow className="mb-2 mt-0">
                            <CCol className="mb-2">
                                   <h6>En que situaciones son usadas las danzas y los cantos tradicionales?:</h6>
                              </CCol>
                          </CRow>
                           <CRow className="mb-2">
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="UsoDanzas"
                                id="danzasTFormCheck1"
                                label="Fiestas"
                                value={"Fiestas"}
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="UsoDanzas"
                                id="danzasTFormCheck2"
                                label="Matrimonios"
                                value={"Matrimonios"}
                                onChange={onChangeTC}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="UsoDanzas"
                                id="danzasTFormCheck3"
                                label="Funerales"
                                value={"Funerales"}
                                onChange={onChangeTC}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="UsoDanzas"
                                id="danzasTFormCheck4"
                                label="Sobador"
                                value={"Sobador"}
                                onChange={onChangeTC}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="UsoDanzas"
                                id="danzasTFormCheck5"
                                label="Nacimientos"
                                value={"Nacimientos"}
                                onChange={onChangeTC}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="UsoDanzas"
                                id="danzasTFormCheck6"
                                label="Otro"
                                value={"Otro"}
                                onChange={onChangeTC}
                                required
                              />
                              </CCol>
                               <CCol sm="auto">
                                <CFormInput
                                type="text"
                                size="sm"
                                placeholder="Otras danzas y cantos"
                                aria-label="sm input example"
                                name="otrosTC"
                                value={otrosTC}
                                onChange={(e) => setOtrosTC(e.target.value)}
                                /></CCol>
                        </CRow>
                         <CRow className="mb-2 mt-4">
                           <CCol xs={12}>
                              <CButton
                                type="submit"
                                color={'primary'}
                                variant="outline"
                                className="px-4"
                                style={{ width: '100%' }}
                              >{' '}
                                {'Aceptar y Terminar Caracterizacón'}
                              </CButton>
                         </CCol>
                         </CRow>
              </CForm>
       </CCol>
  </CRow>
  </>
}
export default CaracterizacionTC
