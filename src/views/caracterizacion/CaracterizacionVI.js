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
const CaracterizacionVI = () => {
  return <>
  <CRow>
       <CCol xs={12}>
         <CForm validated={true}>
                     <CRow className="mb-4">
                         <CCol sm="auto">Cuantas personas habitan la vivienda:</CCol>
                        <CCol>
                          <CFormInput type="text" sm="auto"
                                size="sm"
                                id="floatingInput"
                                floatingClassName="mb-3"
                                floatingLabel="Cuantas personas habitan la vivienda"
                                placeholder="Cuantas personas habitan la vivienda" />
                           </CCol>
                       </CRow>
                      <CRow className="mb-4">
                        <CCol sm="auto">Tipo de vivienda:</CCol>
                        <CCol sm="auto">
                          <CFormCheck inline
                            className="mb-3"
                              type="radio"
                              name="radio-stacked"
                              id="validationFormCheck2"
                              label="Casa"
                              required
                            />
                            <CFormCheck inline
                              className="mb-3"
                              type="radio"
                              name="radio-stacked"
                              id="validationFormCheck3"
                              label="Apartamento"
                              required
                            /><CFormCheck inline
                              className="mb-3"
                              type="radio"
                              name="radio-stacked"
                              id="validationFormCheck4"
                              label="Pieza"
                              required
                              />
                              <CFormCheck inline
                              className="mb-3"
                              type="radio"
                              name="radio-stacked"
                              id="validationFormCheck5"
                              label="Inquilinato"
                              feedbackInvalid="More example invalid feedback text"
                              required
                              />
                              <CFormCheck inline
                              className="mb-3"
                              type="radio"
                              name="radio-stacked"
                              id="validationFormCheck6"
                              label="Albergue"
                              feedbackInvalid="More example invalid feedback text"
                              required
                              />
                              <CFormCheck inline
                              className="mb-3"
                              type="radio"
                              name="radio-stacked"
                              id="validationFormCheck5"
                              label="Otro"
                              feedbackInvalid="More example invalid feedback text"
                              required
                              />
                              </CCol>
                              <CCol sm="auto" style={{marginLeft:"-25px"}}>
                                <CFormInput type="text" size="sm" placeholder="Ingrese otra " aria-label="sm input example"/>
                              </CCol>
                        </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">Tenencia de la vivienda:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="Tenencia-Form"
                                id="TenenciaFormCheck1"
                                label="Propia"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="Tenencia-Form"
                                id="TenenciaFormCheck2"
                                label="En arriendo"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="Tenencia-Form"
                                id="TenenciaFormCheck3"
                                label="Familiar"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="Tenencia-Form"
                                id="TenenciaFormCheck4"
                                label="Albergue"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="Tenencia-Form"
                                id="TenenciaFormCheck5"
                                label="Asentamiento"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="Tenencia-Form"
                                id="TenenciaFormCheck6"
                                label="Lugar de trabajo"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="Tenencia-Form"
                                id="TenenciaFormCheck7"
                                label="Paga diario"
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
                                    name="materialC-Form"
                                    id="materialCFormCheck1"
                                    label="Material de desecho"
                                    required
                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="materialC-Form"
                                    id="LaminaFormCheck2"
                                    label="Lámina de asbesto o metálica"
                                    required
                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="LaminaC-Form"
                                    id="LaminaCFormCheck2"
                                    label="Lámina de carton"
                                    required
                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="barro-Form"
                                    id="barroFormCheck3"
                                    label="En barro"
                                    required
                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="carrizob-Form"
                                    id="carrizobFormCheck3"
                                    label="Carrizo banbu"
                                    required
                                  />
                                  </CCol>
                                  <CCol>
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="Bareque-Form"
                                    id="BarequeFormCheck3"
                                    label="Bareque"
                                    required
                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="Madera-Form"
                                    id="MaderaFormCheck4"
                                    label="Madera"
                                    required
                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="Tabique-Form"
                                    id="TabiqueFormCheck5"
                                    label="Tabique"
                                    required
                                  />
                                   <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="adobe-Form"
                                    id="adobeFormCheck5"
                                    label="Adobe"
                                    required
                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="Palma-Form"
                                    id="PalmaFormCheck5"
                                    label="Palma"
                                    required
                                  />
                                  </CCol>
                                  <CCol>
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="Ladrillo-Form"
                                    id="LadrilloFormCheck5"
                                    label="Ladrillo"
                                    required
                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="Block-Form"
                                    id="BlockFormCheck5"
                                    label="Block"
                                    required
                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="Piedra-Form"
                                    id="PiedraFormCheck5"
                                    label="Piedra"
                                    required
                                  />
                                  <CFormCheck
                                    className="mb-3"
                                    type="checkbox"
                                    name="Cconcreto-Form"
                                    id="CconcretoFormCheck5"
                                    label="Cemento o concreto"
                                    required
                                  />
                              </CCol>
                          </CRow>
                          <CRow className="mb-2">
                            <CCol sm="auto">En la cubierta del techo?:</CCol>
                            <CCol sm="auto">
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="cubierta-Form"
                                id="cubiertaFormCheck1"
                                label="Material de desecho"
                                required
                              />
                               <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="cubierta-Form"
                                id="cubiertaFormCheck2"
                                label="Lámina metálica"
                                required
                              />
                               <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="cubierta-Form"
                                id="cubiertaFormCheck3"
                                label="Palma o paja"
                                required
                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="cubierta-Form"
                                id="cubiertaFormCheck4"
                                label="Lámina de asbesto"
                                required
                              />
                              </CCol>
                              <CCol sm="auto">
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="Lcarton-Form"
                                id="cubiertaFormCheck5"
                                label="Lámina de carton"
                                required
                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="Lcarton-Form"
                                id="cubiertaFormCheck6"
                                label="Lámina fibrocemente ondulada (Techo Fijo)"
                                required
                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="Lcarton-Form"
                                id="cubiertaFormCheck7"
                                label="Madera o tejamil"
                                required
                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="Lcarton-Form"
                                id="cubiertaFormCheck8"
                                label="Terrado con vigueria"
                                required
                              />
                              </CCol>
                              <CCol sm="auto">
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="Lcarton-Form"
                                id="cubiertaFormCheck9"
                                label="Tejas"
                                required
                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="Lcarton-Form"
                                id="cubiertaFormCheck10"
                                label="Terrado con vigueria"
                                required
                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="Lcarton-Form"
                                id="cubiertaFormCheck11"
                                label="Losa de concreto o viguetas con bovedilla"
                                required
                              />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">En el piso?:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="piso-Form"
                                id="pisoFormCheck1"
                                label="Tierra"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="piso-Form"
                                id="pisoFormCheck2"
                                label="Cemento"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="piso-Form"
                                id="pisoFormCheck3"
                                label="Madera"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="piso-Form"
                                id="pisoFormCheck4"
                                label="mosaico"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="piso-Form"
                                id="pisoFormCheck5"
                                label="Otro recubrimiento"
                                required
                              />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto"> El agua proviene de:?</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="agua-Form"
                                id="aguaFormCheck1"
                                label="Red pública"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="agua-Form"
                                id="aguaFormCheck2"
                                label="Pozo"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="agua-Form"
                                id="aguaFormCheck3"
                                label="Río"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="agua-Form"
                                id="aguaFormCheck4"
                                label="Vertiente"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="agua-Form"
                                id="aguaFormCheck5"
                                label="Carrotanque"
                                required
                              />
                            </CCol>
                        </CRow>
                         <CRow className="mb-2 mt-4">
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
export default CaracterizacionVI
