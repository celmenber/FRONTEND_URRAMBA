/* eslint-disable react/prop-types */
/* eslint-disable no-script-url */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
  CCol,
  CRow,
  CFormCheck,
  CFormInput,
  CButton,
  CAlert,
} from '@coreui/react'
import { CForm } from '@coreui/react-pro';

const CaracterizacionDG = ({ setActiveKey }) => {
   const [validated, setValidated] = useState(false)
   const [validaChkbox, setValidaChkbox] = useState(false)
   const [otrosV, setOtrosV] = useState("");
   const [datogeneral, setDatogeneral] = useState({
    regimenS: "",
    vinculadoA:"",
    victimaC:"",
    RUV:"",
    discapacidadT:"",
  });

  const onChangeGeneral = (e) => {
    setDatogeneral({
      ...datogeneral,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeDiscap = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
     });
    setValidaChkbox(true);
  };

  const [state, setState] = useState({
    discapacidadA: false,
    discapacidadB: false,
    discapacidadC: false,
    discapacidadD: false,
    discapacidadE: false,
  });

/*   const validareq = {
    validaA: state.discapacidadA === true ?  true : false,
    validaB: state.discapacidadB === true ?  true : false,
    validaC: state.discapacidadC === true ?  true : false,
    validaD: state.discapacidadD === true ?  true : false,
    validaE: state.discapacidadE === true ?  true : false,
  }; */

    const datoD = {
    discapacidadA: state.discapacidadA === true ? "Dificultad física y/o de movilidad" : "",
    discapacidadB: state.discapacidadB === true ? "Mudez o dificultad en el habla" : "",
    discapacidadC: state.discapacidadC === true ? "Sordera o dificultad auditiva incluso usando audífonos" : "",
    discapacidadD: state.discapacidadD === true ? "Ceguera o dificultad para ver incluso usando lentes" : "",
    discapacidadE: state.discapacidadE === true ? "Ninguna de la anteriores" : "",
  };


/*      const [checkedState, setCheckedState] = useState(
    new Array(2).fill(false)
  );

   const handleChangeDiscap = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  }
 */
  //console.log(validareq);

  const handleSubmit = (event) => {
   event.preventDefault();
    setValidated(true)
  const form = event.currentTarget
  if (form.checkValidity() === false) {
      event.stopPropagation()
    return false;
  }

  if (validaChkbox === false) {
      event.stopPropagation()
      setValidated(false)
       return false;
  }

  const DataForm = {
      datoD,
      datogeneral,
      otrosV,
    };
    // console.log(DataForm);
    localStorage.setItem("DataDG", JSON.stringify(DataForm));
    //console.log(localStorage.getItem("DataDG"));
    setActiveKey(2)
    setValidated(false)
    setValidaChkbox(false);
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
                    <CCol sm="auto">Cuál es su régimen de salud:</CCol>
                    <CCol sm="auto">
                     <CFormCheck inline
                         className="mb-3"
                          type="radio"
                          name="regimenS"
                          id="regimenS1"
                          value={"Régimen Contributivo"}
                          label="Régimen Contributivo"
                          checked={datogeneral.regimenS === "Régimen Contributivo" ? true : false}
                          onChange={onChangeGeneral}
                          required
                        />
                        <CFormCheck inline
                          className="mb-3"
                          type="radio"
                          name="regimenS"
                          id="regimenS2"
                          label="Régimen Subsidiado"
                          value={"Régimen Subsidiado"}
                          checked={datogeneral.regimenS === "Régimen Subsidiado" ? true : false}
                          onChange={onChangeGeneral}
                          required
                        /><CFormCheck inline
                          className="mb-3"
                          type="radio"
                          name="regimenS"
                          id="regimenS3"
                          label="Régimen Especial"
                          value={"Régimen Especial"}
                          checked={datogeneral.regimenS === "Régimen Especial" ? true : false}
                          onChange={onChangeGeneral}
                          required
                          />
                          <CFormCheck inline
                          className="mb-3"
                          type="radio"
                          name="regimenS"
                          id="regimenS4"
                          label="No afiliado"
                          value={"No afiliado"}
                          checked={datogeneral.regimenS === "No afiliado" ? true : false}
                          onChange={onChangeGeneral}
                          required
                          />
                          </CCol>
                    </CRow>
                    <CRow className="mb-4">
                         <CCol sm="auto"> Se encuentra vinculado a:</CCol>
                         <CCol sm="auto">
                            <CFormCheck inline
                                type="radio"
                                name="vinculadoA"
                                id="inlineRadioOptions1"
                                value="Subsidio por parte del Estado"
                                label="Subsidio por parte del Estado"
                                checked={datogeneral.vinculadoA === "Subsidio por parte del Estado" ? true : false}
                                onChange={onChangeGeneral}
                                required
                              />
                            <CFormCheck inline
                               type="radio"
                               name="vinculadoA"
                               id="inlineRadioOptions2"
                               value="Ninguno"
                               label="Ninguno"
                               checked={datogeneral.vinculadoA === "Ninguno" ? true : false}
                               onChange={onChangeGeneral}
                               required
                               />
                            <CFormCheck inline
                               type="radio"
                               name="vinculadoA"
                               id="inlineRadioOptions3"
                               value="Otro"
                               label="Otro"
                               checked={datogeneral.vinculadoA === "Otro" ? true : false}
                               onChange={onChangeGeneral}
                               required
                               />
                         </CCol>
                        <CCol sm="auto">
                          <CFormInput
                          type="text"
                          size="sm"
                          placeholder="Otro vinculado"
                          name="otrosV"
                          value={otrosV}
                          onChange={(e) => setOtrosV(e.target.value)}
                          aria-label="vinculado"
                          required = {datogeneral.vinculadoA === "Otro" ? true : false}
                          disabled = {datogeneral.vinculadoA === "Otro" ? false : true}
                          />
                        </CCol>
                    </CRow>
                    <CRow className="mb-4">
                         <CCol sm="auto">Usted es victima del conflicto:</CCol>
                         <CCol sm="auto">
                            <CFormCheck inline
                                type="radio"
                                name="victimaC"
                                id="victimaCheckbox1"
                                value="Si"
                                label="Si"
                                checked={datogeneral.victimaC === "Si" ? true : false}
                                onChange={onChangeGeneral}
                                required
                              />
                            <CFormCheck inline
                                type="radio"
                                name="victimaC"
                                id="victimaCheckbox2"
                                value="No"
                                label="No"
                                checked={datogeneral.victimaC === "No" ? true : false}
                                onChange={onChangeGeneral}
                                required
                            />
                         </CCol>
                         <CCol sm="auto" style={{paddingRight:"-41px"}}>Usted está inscrito en RUV(Registro Único de Victimas):</CCol>
                         <CCol sm="auto">
                            <CFormCheck inline
                                type="radio"
                                name="RUV"
                                id="RUVCheckbox1"
                                value="Si"
                                label="Si"
                                onChange={onChangeGeneral}
                                checked={datogeneral.RUV === "Si" ? true : false}
                                required
                              />
                            <CFormCheck inline
                                type="radio"
                                name="RUV"
                                id="RUVCheckbox2"
                                value="No"
                                label="No"
                                onChange={onChangeGeneral}
                                checked={datogeneral.RUV === "No" ? true : false}
                                required
                                />
                         </CCol>
                        </CRow>
                      <CRow className="mb-4">
                      <CCol sm="auto">Tiene discapacidad:</CCol>
                       <CCol sm="auto">
                       <CFormCheck inline
                           type="radio"
                           name="discapacidadT"
                           id="inlineCheckbox1"
                           value="Si"
                           label="Si"
                           onChange={onChangeGeneral}
                           checked={datogeneral.discapacidadT === "Si" ? true : false}
                           required
                           />
                       <CFormCheck inline
                           type="radio"
                           name="discapacidadT"
                           id="inlineCheckbox2"
                           value="No"
                           label="No"
                           onChange={onChangeGeneral}
                           checked={datogeneral.discapacidadT === "No" ? true : false}
                           required
                          />
                         </CCol>
                         </CRow>
                          <CRow className="mb-2 mt-4">
                            <CCol className="mb-2" style={{textAlign:"left"}}>
                                    <CAlert color="primary">
                                      <h6>Indique cuál es su discapacidad:</h6>
                                  </CAlert>
                              </CCol>
                          </CRow>
                        <CRow className="mb-4">
                         <CCol sm="auto">
                            <CFormCheck
                              text={{ color: 'danger' }}
                              className="mb-3"
                              type="checkbox"
                              name="discapacidadA"
                              id="discapacidadFormCheck1"
                              label="Dificultad física y/o de movilidad"
                              checked={state.discapacidadA}
                              onChange={handleChangeDiscap}
                              //required = {validareq.discapacidadA === false ? true : false}
                            />
                             <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="discapacidadB"
                              id="discapacidadFormCheck2"
                              label="Mudez o dificultad en el habla"
                              checked={state.discapacidadB}
                              onChange={handleChangeDiscap}
                              //required = {validareq.discapacidadB === false ? true : false}
                            />
                           <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="discapacidadC"
                              id="discapacidadFormCheck3"
                              label="Sordera o dificultad auditiva incluso usando audífonos"
                              checked={state.discapacidadC}
                              onChange={handleChangeDiscap}
                             // required = {state.discapacidadC !== true ? true : false}
                            />
                            </CCol>
                            <CCol sm="auto">
                             <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="discapacidadD"
                              id="discapacidadFormCheck4"
                              label="Ceguera o dificultad para ver incluso usando lentes"
                              checked={state.discapacidadD}
                              onChange={handleChangeDiscap}
                              //required = {state.discapacidadD !== true ? true : false}
                            />
                            <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="discapacidadE"
                              id="discapacidadFormCheck5"
                              label="Ninguna de la anteriores"
                              checked={state.discapacidadE}
                              onChange={handleChangeDiscap}
                              //required = {state.discapacidadE !== true ? true : false}
                            />
                            </CCol>
                        </CRow>
                         <CRow className="mb-2 mt-2">
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
export default CaracterizacionDG
