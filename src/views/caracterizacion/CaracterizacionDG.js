/* eslint-disable no-script-url */
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
const CaracterizacionDG = () => {
  return <>
  <CRow>
       <CCol xs={12}>
        <CForm validated={true}>
                  <CRow className="mb-4">
                    <CCol sm="auto">Cuál es su régimen de salud:</CCol>
                    <CCol sm="auto">
                      <CFormCheck inline
                         className="mb-3"
                          type="radio"
                          name="radio-stacked"
                          id="validationFormCheck2"
                          label="Régimen Contributivo"
                          required
                        />
                        <CFormCheck inline
                          className="mb-3"
                          type="radio"
                          name="radio-stacked"
                          id="validationFormCheck3"
                          label="Régimen Subsidiado"
                          required
                        /><CFormCheck inline
                          className="mb-3"
                          type="radio"
                          name="radio-stacked"
                          id="validationFormCheck4"
                          label="Régimen Especial"
                          required
                          />
                          <CFormCheck inline
                          className="mb-3"
                          type="radio"
                          name="radio-stacked"
                          id="validationFormCheck5"
                          label="No afiliado"
                          feedbackInvalid="More example invalid feedback text"
                          required
                          /></CCol>
                    </CRow>
                    <CRow className="mb-4">
                         <CCol sm="auto"> Se encuentra vinculado a:</CCol>
                         <CCol sm="auto">
                            <CFormCheck inline
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineCheckbox1"
                                value="Subsidio por parte del Estado"
                                label="Subsidio por parte del Estado"/>
                            <CFormCheck inline
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineCheckbox2"
                                      value="Ninguno"
                                      label="Ninguno"/>
                                <CFormCheck inline
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineCheckbox2"
                                      value="Otro"
                                      label="Otro"/>
                         </CCol>
                        <CCol sm="auto"><CFormInput type="text" size="sm" placeholder="Small input" aria-label="sm input example"/></CCol>
                    </CRow>
                    <CRow className="mb-4">
                         <CCol sm="auto">Usted es victima del conflicto:</CCol>
                         <CCol sm="auto">
                            <CFormCheck inline
                                type="radio"
                                name="Optionsvictima"
                                id="victimaCheckbox1"
                                value="Si"
                                label="Si"/>
                            <CFormCheck inline
                                      type="radio"
                                      name="Optionsvictima"
                                      id="victimaCheckbox2"
                                      value="No"
                                      label="No"/>
                         </CCol>
                         <CCol sm="auto" style={{paddingRight:"-41px"}}>Usted está inscrito en RUV(Registro Único de Victimas):</CCol>
                         <CCol sm="auto">
                            <CFormCheck inline
                                type="radio"
                                name="OptionsRUV"
                                id="RUVCheckbox1"
                                value="Si"
                                label="Si"/>
                            <CFormCheck inline
                                      type="radio"
                                      name="Optionsvictima"
                                      id="RUVCheckbox2"
                                      value="No"
                                      label="No"/>
                         </CCol>
                        </CRow>
                      <CRow className="mb-4">
                      <CCol sm="auto">Tiene discapacidad:</CCol>
                       <CCol sm="auto">
                       <CFormCheck inline
                           type="radio"
                           name="inlineRadioOptions"
                           id="inlineCheckbox1"
                           value="Si"
                           label="Si"/>
                       <CFormCheck inline
                                 type="radio"
                                 name="inlineRadioOptions"
                                 id="inlineCheckbox2"
                                 value="No"
                                 label="No"/>
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
                              className="mb-3"
                              type="checkbox"
                              name="radio-stacked"
                              id="validationFormCheck3"
                              label="Dificultad física y/o de movilidad"
                              required
                            />
                             <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="radio-stacked"
                              id="validationFormCheck3"
                              label="Mudez o dificultad en el habla"
                              required
                            />
                            <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="radio-stacked"
                              id="validationFormCheck3"
                              label="Sordera o dificultad auditiva incluso usando audífonos"
                              required
                            />
                            </CCol>
                            <CCol sm="auto">
                             <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="radio-stacked"
                              id="validationFormCheck3"
                              label="Ceguera o dificultad para ver incluso usando lentes"
                              required
                            />
                            <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="radio-stacked"
                              id="validationFormCheck3"
                              label="Ninguna de la anteriores"
                              required
                            />
                            </CCol>
                        </CRow>
                         <CRow className="mb-2 mt-2">
                           <CCol xs={12}>
                              <CButton
                                type="button"
                                color={'primary'}
                                variant="outline"
                                className="px-4"
                                style={{ width: '100%' }}
                                // onClick={() => setVisibleM(true)}
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
