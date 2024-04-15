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
const CaracterizacionTC = () => {
  return <>
  <CRow>
       <CCol xs={12} style={{marginTop:"-25px"}}>
         <CForm validated={true}>
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
                                name="equipamiento-Form"
                                id="equipamientoFormCheck1"
                                label="Instituciones educativas basica primaria"
                                required
                              />
                               <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="equipamiento-Form"
                                id="equipamientoFormCheck2"
                                label="Instituciones educativas secundaria"
                                required
                              />
                               <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="equipamiento-Form"
                                id="equipamientoFormCheck3"
                                label="Instituciones educativas ténicas"
                                required
                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="equipamiento-Form"
                                id="equipamientoFormCheck4"
                                label="Instituciones educativas universitarias"
                                required
                              />
                              </CCol>
                              <CCol sm="auto">
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="Lcarton-Form"
                                id="equipamientoFormCheck5"
                                label="Instituciones de salud de primer nivel"
                                required
                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="equipamiento-Form"
                                id="equipamientoFormCheck6"
                                label="Instituciones de salud de segundo nivel"
                                required
                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="equipamiento-Form"
                                id="equipamientoFormCheck7"
                                label="Instituciones de salud de tercer nivel"
                                required
                              />
                              <CFormCheck
                                className="mb-3"
                                type="checkbox"
                                name="equipamiento-Form"
                                id="equipamientoFormCheck8"
                                label="Instituciones de salud de cuarto nivel"
                                required
                              />
                              </CCol>
                        </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">Estado de la via en el sector donde reside?:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="evia-Form"
                                id="eviaFormCheck1"
                                label="Buena"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="evia-Form"
                                id="eviaFormCheck2"
                                label="Regular"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="evia-Form"
                                id="eviaFormCheck3"
                                label="Mala"
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
                                name="transporteP-Form"
                                id="transportePFormCheck1"
                                label="Si"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="transporteP-Form"
                                id="transportePFormCheck2"
                                label="No"
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
                                name="apoblacion-Form"
                                id="apoblacionFormCheck1"
                                label="Facil"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="apoblacion-Form"
                                id="apoblacionFormCheck2"
                                label="Complejo"
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
                                name="proyectosB-Form"
                                id="proyectosBFormCheck1"
                                label="Si"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="proyectosB-Form"
                                id="proyectosBFormCheck2"
                                label="No"
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
                                name="medicinaT-Form"
                                id="medicinaTFormCheck1"
                                label="Si"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="medicinaT-Form"
                                id="medicinaTFormCheck2"
                                label="No"
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
                                name="medicinaTE-Form"
                                id="medicinaTEFormCheck1"
                                label="Medico tradicional"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="equipamiento-Form"
                                id="medicinaTEFormCheck2"
                                label="Curandero"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="equipamiento-Form"
                                id="emedicinaTEFormCheck3"
                                label="Llervero"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="Lcarton-Form"
                                id="medicinaTEFormCheck4"
                                label="Sobador"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="equipamiento-Form"
                                id="medicinaTEFormCheck5"
                                label="Partera"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="equipamiento-Form"
                                id="medicinaTEFormCheck6"
                                label="Otro"
                                required
                              />
                              </CCol>
                               <CCol sm="auto"><CFormInput type="text" size="sm" placeholder="Small input" aria-label="sm input example"/></CCol>
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
                                name="BMapale-Form"
                                id="BMapaleFormCheck1"
                                label="Si"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="BMapale-Form"
                                id="BMapaleFormCheck2"
                                label="No"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="BMapale-Form"
                                id="BMapaleFormCheck3"
                                label="No Sabe"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="BMapale-Form"
                                id="BMapaleFormCheck4"
                                label="No Responde"
                                required
                              />
                              </CCol>
                             <CCol sm="auto">Son de Negro:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="SonNegro-Form"
                                id="SonNegroFormCheck1"
                                label="Si"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="SonNegro-Form"
                                id="SonNegroFormCheck2"
                                label="No"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="SonNegro-Form"
                                id="SonNegroFormCheck3"
                                label="No Sabe"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="SonNegro-Form"
                                id="SonNegroFormCheck4"
                                label="No Responde"
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
                                name="Negritos-Form"
                                id="NegritosFormCheck1"
                                label="Si"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="Negritos-Form"
                                id="NegritosFormCheck2"
                                label="No"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="Negritos-Form"
                                id="NegritosFormCheck3"
                                label="No Sabe"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="Negritos-Form"
                                id="NegritosFormCheck4"
                                label="No Responde"
                                required
                              />
                              </CCol>
                             <CCol sm="auto">Seresesé:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="Seresese-Form"
                                id="SereseseFormCheck1"
                                label="Si"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="Seresese-Form"
                                id="SereseseFormCheck2"
                                label="No"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="Seresese-Form"
                                id="SereseseFormCheck3"
                                label="No Sabe"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="Seresese-Form"
                                id="SereseseFormCheck4"
                                label="No Responde"
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
                                name="FMapale-Form"
                                id="FMapaleFormCheck1"
                                label="Nunca"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="BMapale-Form"
                                id="BMapaleFormCheck2"
                                label="En Ocaciones"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FMapale-Form"
                                id="FMapaleFormCheck3"
                                label="Habitualmente"
                                required
                              />
                              </CCol>
                             <CCol sm="auto">Son de Negro:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FSonNegro-Form"
                                id="FSonNegroFormCheck1"
                                label="Nunca"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FSonNegro-Form"
                                id="FSonNegroFormCheck2"
                                label="En Ocaciones"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FSonNegro-Form"
                                id="FSonNegroFormCheck3"
                                label="Habitualmente"
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
                                name="Negritos-Form"
                                id="NegritosFormCheck1"
                                label="Nunca"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="Negritos-Form"
                                id="NegritosFormCheck2"
                                label="En Ocaciones"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="Negritos-Form"
                                id="NegritosFormCheck3"
                                label="Habitualmente"
                                required
                              />
                              </CCol>
                             <CCol sm="auto">Seresesé:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="fSeresese-Form"
                                id="fSereseseFormCheck1"
                                label="Nunca"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FSeresese-Form"
                                id="FSereseseFormCheck2"
                                label="En Ocaciones"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="FSeresese-Form"
                                id="FSereseseFormCheck3"
                                label="Habitualmente"
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
                                name="danzasT-Form"
                                id="danzasTFormCheck1"
                                label="Fiestas"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="danzasT-Form"
                                id="danzasTFormCheck2"
                                label="Matrimonios"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="danzasT-Form"
                                id="danzasTFormCheck3"
                                label="Funerales"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="danzasT-Form"
                                id="danzasTFormCheck4"
                                label="Sobador"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="danzasT-Form"
                                id="danzasTFormCheck5"
                                label="Nacimientos"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="danzasT-Form"
                                id="danzasTFormCheck6"
                                label="Otro"
                                required
                              />
                              </CCol>
                               <CCol sm="auto"><CFormInput type="text" size="sm" placeholder="Small input" aria-label="sm input example"/></CCol>
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
