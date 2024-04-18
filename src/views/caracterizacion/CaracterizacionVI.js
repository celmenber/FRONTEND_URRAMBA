/* eslint-disable react/prop-types */
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
const CaracterizacionVI = ({ setActiveKey }) => {
   const [validated, setValidated] = useState(false)
   const [personasHV, setPersonasHV] = useState("");
   const [otrosTV, setOtrosTV] = useState("");
   const [datoradio, setDatoradio] = useState({
    viviendaTI: "",
    viviendaTE: "",
  });

   const onChangeVEI = (e) => {
    setDatoradio({
      ...datoradio,
      [e.target.name]: e.target.value,
    });
  };

  const [stateMT, setStateMT] = useState({
    mexteriores_1: false,
    mexteriores_2: false,
    mexteriores_3: false,
    mexteriores_4: false,
    mexteriores_5: false,
    mexteriores_6: false,
    mexteriores_7: false,
    mexteriores_8: false,
    mexteriores_9: false,
    mexteriores_10: false,
    mexteriores_11: false,
    mexteriores_12: false,
    mexteriores_13: false,
    mexteriores_14: false,
  });

  const datoMT = {
        mexteriores_1: stateMT.mexteriores_1 === true ? "Material de desecho" : "",
        mexteriores_2: stateMT.mexteriores_2 === true ? "Lámina de asbesto o metálica" : "",
        mexteriores_3: stateMT.mexteriores_3 === true ? "Lámina de carton" : "",
        mexteriores_4: stateMT.mexteriores_4 === true ? "En barro" : "",
        mexteriores_5: stateMT.mexteriores_5 === true ? "Carrizo banbu" : "",
        mexteriores_6: stateMT.mexteriores_6 === true ? "Bareque" : "",
        mexteriores_7: stateMT.mexteriores_7 === true ? "Madera" : "",
        mexteriores_8: stateMT.mexteriores_8 === true ? "Tabique" : "",
        mexteriores_9: stateMT.mexteriores_9 === true ? "Adobe" : "",
        mexteriores_10: stateMT.mexteriores_10 === true ? "Palma" : "",
        mexteriores_11: stateMT.mexteriores_11 === true ? "Ladrillo" : "",
        mexteriores_12: stateMT.mexteriores_12 === true ? "Block" : "",
        mexteriores_13: stateMT.mexteriores_13 === true ? "Piedra" : "",
        mexteriores_14: stateMT.mexteriores_14 === true ? "Cemento o concreto" : "",
  };

  const handleChangeMT = (event) => {
    setStateMT({ ...stateMT, [event.target.name]: event.target.checked });
  };

  const [stateCT, setStateCT] = useState({
    ctecho_1: false,
    ctecho_2: false,
    ctecho_3: false,
    ctecho_4: false,
    ctecho_5: false,
    ctecho_6: false,
    ctecho_7: false,
    ctecho_8: false,
    ctecho_9: false,
    ctecho_10: false,
    ctecho_11: false,
  });

const datoCT = {
        ctecho_1: stateCT.ctecho_1 === true ? "Material de desecho" : "",
        ctecho_2: stateCT.ctecho_2 === true ? "Lámina metálica" : "",
        ctecho_3: stateCT.ctecho_3 === true ? "Palma o paja" : "",
        ctecho_4: stateCT.ctecho_4 === true ? "Lámina de asbesto" : "",
        ctecho_5: stateCT.ctecho_5 === true ? "Lámina de carton" : "",
        ctecho_6: stateCT.ctecho_6 === true ? "Lámina fibrocemente ondulada (Techo Fijo)" : "",
        ctecho_7: stateCT.ctecho_7 === true ? "Madera o tejamil" : "",
        ctecho_8: stateCT.ctecho_8 === true ? "Terrado con vigueria" : "",
        ctecho_9: stateCT.ctecho_9 === true ? "Tejas" : "",
        ctecho_10: stateCT.ctecho_10 === true ? "Terrado con vigueria" : "",
        ctecho_11: stateCT.ctecho_11 === true ? "Losa de concreto o viguetas con bovedilla" : "",
  };

  const handleChangeCT = (event) => {
    setStateCT({ ...stateCT, [event.target.name]: event.target.checked });
  };

 const [stateEP, setStateEP] = useState({
    episo_1: false,
    episo_2: false,
    episo_3: false,
    episo_4: false,
    episo_5: false,
  });

const datoEP = {
    episo_1: stateEP.episo_1 === true ? "Tierra" : "",
    episo_2: stateEP.episo_2 === true ? "Cemento" : "",
    episo_3: stateEP.episo_3 === true ? "Madera" : "",
    episo_4: stateEP.episo_4 === true ? "Mosaico" : "",
    episo_5: stateEP.episo_5 === true ? "Otro recubrimiento" : "",

  };

  const handleChangeEP = (event) => {
    setStateEP({ ...stateEP, [event.target.name]: event.target.checked });
  };

   const [stateEA, setStateEA] = useState({
    eagua_1: false,
    eagua_2: false,
    eagua_3: false,
    eagua_4: false,
    eagua_5: false,
  });

  const datoEA = {
    eagua_1: stateEA.eagua_1 === true ? "Red pública" : "",
    eagua_2: stateEA.eagua_2 === true ? "Pozo" : "",
    eagua_3: stateEA.eagua_3 === true ? "Río" : "",
    eagua_4: stateEA.eagua_4 === true ? "Vertiente" : "",
    eagua_5: stateEA.eagua_5 === true ? "Carrotanque" : "",

  };

  const handleChangeEA = (event) => {
    setStateEA({ ...stateEA, [event.target.name]: event.target.checked });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true)
  const form = event.currentTarget
  if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      return false
    }

    const DataForm = {
      datoMT,
      datoCT,
      datoEP,
      datoEA,
      datoradio,
      personasHV,
      otrosTV,
    };
    // console.log(DataForm);
    localStorage.setItem("DataVI", JSON.stringify(DataForm));
    console.log(localStorage.getItem("DataVI"));
    setActiveKey(4)
}


  return <>
  <CRow>
       <CCol xs={12}>
         <CForm
          className="row g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}>
                     <CRow className="mb-4">
                         <CCol sm="auto">Cuantas personas habitan la vivienda:</CCol>
                        <CCol>
                          <CFormInput type="text" sm="auto"
                                size="sm"
                                id="personasHV"
                                placeholder="Escriba numero personas"
                                name="personasHV"
                                value={personasHV}
                                onChange={(e) => setPersonasHV(e.target.value)}
                                required
                                />
                           </CCol>
                       </CRow>
                      <CRow className="mb-4">
                        <CCol sm="auto">Tipo de vivienda:</CCol>
                        <CCol sm="auto">
                          <CFormCheck inline
                            className="mb-3"
                              type="radio"
                              id="viviendaFormCheck1"
                              label="Casa"
                              value="Casa"
                              name="viviendaTI"
                              checked={datoradio.viviendaTI === "Casa" ? true : false}
                              onChange={onChangeVEI}
                              required
                            />
                            <CFormCheck inline
                              className="mb-3"
                              type="radio"
                              id="viviendaFormCheck2"
                              label="Apartamento"
                              value="Apartamento"
                              name="viviendaTI"
                              checked={datoradio.viviendaTI === "Apartamento" ? true : false}
                              onChange={onChangeVEI}
                              required
                            /><CFormCheck inline
                              className="mb-3"
                              type="radio"
                              id="viviendaFormCheck3"
                              label="Pieza"
                              value="Pieza"
                              name="viviendaTI"
                              checked={datoradio.viviendaTI === "Pieza" ? true : false}
                              onChange={onChangeVEI}
                              required
                              />
                              <CFormCheck inline
                              className="mb-3"
                              type="radio"
                              id="viviendaFormCheck4"
                              label="Inquilinato"
                              value="Inquilinato"
                              name="viviendaTI"
                              checked={datoradio.viviendaTI === "Inquilinato" ? true : false}
                              onChange={onChangeVEI}
                              required
                              />
                              <CFormCheck inline
                              className="mb-3"
                              type="radio"
                              id="viviendaFormCheck5"
                              label="Albergue"
                              value="Albergue"
                              name="viviendaTI"
                              checked={datoradio.viviendaTI === "Albergue" ? true : false}
                              onChange={onChangeVEI}
                              required
                              />
                              <CFormCheck inline
                              className="mb-3"
                              type="radio"
                              id="viviendaFormCheck6"
                              label="Otro"
                              value="Otro"
                              name="viviendaTI"
                              checked={datoradio.viviendaTI === "Otro" ? true : false}
                              onChange={onChangeVEI}
                              required
                              />
                              </CCol>
                              <CCol sm="auto" style={{marginLeft:"-25px"}}>
                                <CFormInput type="text" size="sm" placeholder="Otro tipo vivienda"
                                  value={otrosTV}
                                  onChange={(e) => setOtrosTV(e.target.value)}
                                  aria-label="Otro tipo vivienda"/>
                              </CCol>
                        </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">Tenencia de la vivienda:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="TenenciaFormCheck1"
                                label="Propia"
                                value="Propia"
                                name="viviendaTE"
                                checked={datoradio.viviendaTE === "Propia" ? true : false}
                                onChange={onChangeVEI}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="TenenciaFormCheck2"
                                label="En arriendo"
                                value="En arriendo"
                                name="viviendaTE"
                                checked={datoradio.viviendaTE === "En arriendo" ? true : false}
                                onChange={onChangeVEI}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="TenenciaFormCheck3"
                                label="Familiar"
                                value="Familiar"
                                name="viviendaTE"
                                checked={datoradio.viviendaTE === "Familiar" ? true : false}
                                onChange={onChangeVEI}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="TenenciaFormCheck4"
                                label="Albergue"
                                value="Albergue"
                                name="viviendaTE"
                                checked={datoradio.viviendaTE === "Albergue" ? true : false}
                                onChange={onChangeVEI}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="TenenciaFormCheck5"
                                label="Asentamiento"
                                value="Asentamiento"
                                name="viviendaTE"
                                checked={datoradio.viviendaTE === "Asentamiento" ? true : false}
                                onChange={onChangeVEI}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="TenenciaFormCheck6"
                                label="Lugar de trabajo"
                                value="Lugar de trabajo"
                                name="viviendaTE"
                                checked={datoradio.viviendaTE === "Lugar de trabajo" ? true : false}
                                onChange={onChangeVEI}
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="TenenciaFormCheck7"
                                label="Paga diario"
                                value="Paga diario"
                                name="viviendaTE"
                                checked={datoradio.viviendaTE === "Paga diario" ? true : false}
                                onChange={onChangeVEI}
                                required
                              />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2 mt-4">
                            <CCol className="mb-2" style={{textAlign:"center"}}>
                                    <CAlert color="primary">
                                      <h6> Material de construcción predominante en la vivienda</h6>
                                  </CAlert>
                              </CCol>
                          </CRow>
                        {/* <CRow className="mb-2">
                           <CCol sm="auto" className="mb-3">
                             Material de construcción predominante en la vivienda
                          </CCol>
                        </CRow> */}
                         <CRow className="mb-2">
                            <CCol sm="auto" className="mb-3">En los muros exteriores?:</CCol>
                            <CCol>
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="mexteriores_1"
                                    id="materialCFormCheck1"
                                    label="Material de desecho"
                                    checked={stateMT.mexteriores_1}
                                    onChange={handleChangeMT}

                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="mexteriores_2"
                                    id="LaminaFormCheck2"
                                    label="Lámina de asbesto o metálica"
                                    checked={stateMT.mexteriores_2}
                                    onChange={handleChangeMT}

                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="mexteriores_3"
                                    id="LaminaCFormCheck2"
                                    label="Lámina de carton"
                                    checked={stateMT.mexteriores_3}
                                    onChange={handleChangeMT}

                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="mexteriores_4"
                                    id="barroFormCheck3"
                                    label="En barro"
                                    checked={stateMT.mexteriores_4}
                                    onChange={handleChangeMT}

                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="mexteriores_5"
                                    id="carrizobFormCheck3"
                                    label="Carrizo banbu"
                                    checked={stateMT.mexteriores_5}
                                    onChange={handleChangeMT}

                                  />
                                  </CCol>
                                  <CCol>
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="mexteriores_6"
                                    id="BarequeFormCheck3"
                                    label="Bareque"
                                    checked={stateMT.mexteriores_6}
                                    onChange={handleChangeMT}

                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="mexteriores_7"
                                    id="MaderaFormCheck4"
                                    label="Madera"
                                    checked={stateMT.mexteriores_7}
                                    onChange={handleChangeMT}

                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="mexteriores_8"
                                    id="TabiqueFormCheck5"
                                    label="Tabique"
                                    checked={stateMT.mexteriores_8}
                                    onChange={handleChangeMT}

                                  />
                                   <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="mexteriores_9"
                                    id="adobeFormCheck5"
                                    label="Adobe"
                                    checked={stateMT.mexteriores_9}
                                    onChange={handleChangeMT}

                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="mexteriores_10"
                                    id="PalmaFormCheck5"
                                    label="Palma"
                                    checked={stateMT.mexteriores_10}
                                    onChange={handleChangeMT}

                                  />
                                  </CCol>
                                  <CCol>
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="mexteriores_11"
                                    id="LadrilloFormCheck5"
                                    label="Ladrillo"
                                    checked={stateMT.mexteriores_11}
                                    onChange={handleChangeMT}

                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="mexteriores_12"
                                    id="BlockFormCheck5"
                                    label="Block"
                                    checked={stateMT.mexteriores_12}
                                    onChange={handleChangeMT}

                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="mexteriores_13"
                                    id="PiedraFormCheck5"
                                    label="Piedra"
                                    checked={stateMT.mexteriores_13}
                                    onChange={handleChangeMT}

                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="mexteriores_14"
                                    id="CconcretoFormCheck5"
                                    label="Cemento o concreto"
                                    checked={stateMT.mexteriores_14}
                                    onChange={handleChangeMT}

                                  />
                              </CCol>
                          </CRow>
                          <CRow className="mb-2">
                            <CCol sm="auto">En la cubierta del techo?:</CCol>
                            <CCol sm="auto">
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="ctecho_1"
                                id="cubiertaFormCheck1"
                                label="Material de desecho"
                                checked={stateCT.ctecho_1}
                                onChange={handleChangeCT}

                              />
                               <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="ctecho_2"
                                id="cubiertaFormCheck2"
                                label="Lámina metálica"
                                checked={stateCT.ctecho_2}
                                onChange={handleChangeCT}

                              />
                               <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="ctecho_3"
                                id="cubiertaFormCheck3"
                                label="Palma o paja"
                                checked={stateCT.ctecho_3}
                                onChange={handleChangeCT}

                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="ctecho_4"
                                id="cubiertaFormCheck4"
                                label="Lámina de asbesto"
                                checked={stateCT.ctecho_4}
                                onChange={handleChangeCT}

                              />
                              </CCol>
                              <CCol sm="auto">
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="ctecho_5"
                                id="cubiertaFormCheck5"
                                label="Lámina de carton"
                                checked={stateCT.ctecho_5}
                                onChange={handleChangeCT}

                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="ctecho_6"
                                id="cubiertaFormCheck6"
                                label="Lámina fibrocemente ondulada (Techo Fijo)"
                                checked={stateCT.ctecho_6}
                                onChange={handleChangeCT}

                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="ctecho_7"
                                id="cubiertaFormCheck7"
                                label="Madera o tejamil"
                                checked={stateCT.ctecho_7}
                                onChange={handleChangeCT}

                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="ctecho_8"
                                id="cubiertaFormCheck8"
                                label="Terrado con vigueria"
                                checked={stateCT.ctecho_8}
                                onChange={handleChangeCT}

                              />
                              </CCol>
                              <CCol sm="auto">
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="ctecho_9"
                                id="cubiertaFormCheck9"
                                label="Tejas"
                                checked={stateCT.ctecho_9}
                                onChange={handleChangeCT}

                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="ctecho_10"
                                id="cubiertaFormCheck10"
                                label="Terrado con vigueria"
                                checked={stateCT.ctecho_10}
                                onChange={handleChangeCT}

                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="ctecho_11"
                                id="cubiertaFormCheck11"
                                label="Losa de concreto o viguetas con bovedilla"
                                 checked={stateCT.ctecho_11}
                                onChange={handleChangeCT}

                              />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">En el piso?:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="episo_1"
                                id="pisoFormCheck1"
                                label="Tierra"
                                checked={stateEP.episo_1}
                                onChange={handleChangeEP}

                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="episo_2"
                                id="pisoFormCheck2"
                                label="Cemento"
                                checked={stateEP.episo_2}
                                onChange={handleChangeEP}

                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="episo_3"
                                id="pisoFormCheck3"
                                label="Madera"
                                checked={stateEP.episo_3}
                                onChange={handleChangeEP}

                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="episo_4"
                                id="pisoFormCheck4"
                                label="Mosaico"
                                checked={stateEP.episo_4}
                                onChange={handleChangeEP}

                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="episo_5"
                                id="pisoFormCheck5"
                                label="Otro recubrimiento"
                                checked={stateEP.episo_5}
                                onChange={handleChangeEP}

                              />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto"> El agua proviene de:?</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="eagua_1"
                                id="aguaFormCheck1"
                                label="Red pública"
                                checked={stateEA.eagua_1}
                                onChange={handleChangeEA}

                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="eagua_2"
                                id="aguaFormCheck2"
                                label="Pozo"
                                checked={stateEA.eagua_2}
                                onChange={handleChangeEA}

                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="eagua_3"
                                id="aguaFormCheck3"
                                label="Río"
                                checked={stateEA.eagua_3}
                                onChange={handleChangeEA}

                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="eagua_4"
                                id="aguaFormCheck4"
                                label="Vertiente"
                                checked={stateEA.eagua_4}
                                onChange={handleChangeEA}

                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="eagua_5"
                                id="aguaFormCheck5"
                                label="Carrotanque"
                                checked={stateEA.eagua_5}
                                onChange={handleChangeEA}

                              />
                            </CCol>
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
                                {'Aceptar y Continuar Caracterizacón'}
                              </CButton>
                         </CCol>
                         </CRow>
                     </CForm>
       </CCol>
  </CRow>
  </>
}
export default CaracterizacionVI
