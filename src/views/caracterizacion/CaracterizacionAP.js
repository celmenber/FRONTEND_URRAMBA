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
                        <CRow className="mb-2 mt-0">
                            <CCol className="mb-2" style={{textAlign:"center"}}>
                                    <CAlert color="primary">
                                      <h6>Serviccios Públicos de la Vivienda</h6>
                                  </CAlert>
                              </CCol>
                          </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">El servicio Higiénico de la vivienda es o está:</CCol>
                            <CCol sm="auto">
                              <CFormCheck
                                className="mb-3"
                                type="radio"
                                name="servicioH-Form"
                                id="servicioHFormCheck1"
                                label="Conectado al alcantarillado"
                                required
                              />
                               <CFormCheck
                                className="mb-3"
                                type="radio"
                                name="servicioH-Form"
                                id="servicioHFormCheck2"
                                label="Conectado a poza séptica"
                                required
                              /></CCol>
                               <CCol sm="auto">
                               <CFormCheck
                                className="mb-3"
                                type="radio"
                                name="servicioH-Form"
                                id="servicioHFormCheck3"
                                label="Sobre pozo ciego"
                                required
                              />
                              <CFormCheck
                                className="mb-3"
                                type="radio"
                                name="servicioH-Form"
                                id="servicioHFormCheck4"
                                label="Baño quimico"
                                required
                              /></CCol>
                               <CCol sm="auto">
                              <CFormCheck
                                className="mb-3"
                                type="radio"
                                name="servicioH-Form"
                                id="servicioHFormCheck5"
                                label="Sobre acequia o canal"
                                required
                              />
                              <CFormCheck
                                className="mb-3"
                                type="radio"
                                name="servicioH-Form"
                                id="servicioHFormCheck6"
                                label="No tiene servicio"
                                required
                              />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">La electricidad proviene  de:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="electricidad-Form"
                                id="electricidadFormCheck1"
                                label="Red pública"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="electricidad-Form"
                                id="electricidadFormCheck2"
                                label="Planta solar"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="electricidad-Form"
                                id="electricidadFormCheck3"
                                label="Generador de combustible"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="electricidad-Form"
                                id="electricidadFormCheck4"
                                label="Eolico (vientos)"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="electricidad-Form"
                                id="electricidadFormCheck5"
                                label="No tiene servicio"
                                required
                              />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">Medio de eliminación de basura:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="ebasura-Form"
                                id="ebasuraFormCheck1"
                                label="Servicio recolección pública"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="ebasura-Form"
                                id="ebasuraFormCheck2"
                                label="La entierra y/o quema"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="ebasura-Form"
                                id="ebasuraFormCheck3"
                                label="La deja en terreno"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="ebasura-Form"
                                id="ebasuraFormCheck4"
                                label="La tira al rio"
                                required
                              />
                            </CCol>
                        </CRow>
                         <CRow className="mb-2">
                            <CCol sm="auto">Tiene sistema de cocina:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="electricidad-Form"
                                id="electricidadFormCheck1"
                                label="Si"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                name="electricidad-Form"
                                id="electricidadFormCheck2"
                                label="No"
                                required
                              />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">Método utilizado para cocinar:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="cocinar-Form"
                                id="cocinarFormCheck1"
                                label="Gas"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="cocinar-Form"
                                id="cocinarFormCheck2"
                                label="Petroleo"
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="cocinar-Form"
                                id="cocinarFormCheck3"
                                label="Leña o derivados"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="cocinar-Form"
                                id="cocinarFormCheck4"
                                label="Electricidad"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="cocinar-Form"
                                id="cocinarFormCheck5"
                                label="Carbón"
                                required
                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="cocinar-Form"
                                id="cocinarFormCheck6"
                                label="Energia solar"
                                required
                              />
                            </CCol>
                            {/*  <CCol sm="auto" style={{marginLeft:"-25px"}}>
                                <CFormInput type="text" size="sm" placeholder="Small input" aria-label="sm input example"/>
                              </CCol> */}
                        </CRow>
                        <CRow className="mb-2 mt-4">
                            <CCol className="mb-2" style={{textAlign:"center"}}>
                                    <CAlert color="primary">
                                      <h6>Acceso de los servicios en la Vivienda</h6>
                                  </CAlert>
                              </CCol>
                          </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">Teléfono fijo:</CCol>
                            <CCol sm="auto">
                            <CFormCheck inline
                                type="radio"
                                name="TfijoRadioOptions"
                                id="TfijoCheckbox1"
                                value="Si"
                                label="Si"/>
                            <CFormCheck inline
                               type="radio"
                               name="TfijoRadioOptions"
                               id="TfijoCheckbox2"
                               value="No"
                               label="No"/>
                              </CCol>
                              <CCol sm="auto">Teléfono movil:</CCol>
                              <CCol sm="auto">
                                <CFormCheck inline
                                    type="radio"
                                    name="TmovilRadioOptions"
                                    id="TmovilCheckbox1"
                                    value="Si"
                                    label="Si"/>
                                <CFormCheck inline
                                  type="radio"
                                  name="TmovilRadioOptions"
                                  id="TmovilCheckbox2"
                                  value="No"
                                  label="No"/>
                              </CCol>
                              <CCol sm="auto">Internet:</CCol>
                              <CCol sm="auto">
                                <CFormCheck inline
                                    type="radio"
                                    name="InternetRadioOptions"
                                    id="InternetCheckbox1"
                                    value="Si"
                                    label="Si"/>
                                <CFormCheck inline
                                  type="radio"
                                  name="InternetRadioOptions"
                                  id="InternetCheckbox2"
                                  value="No"
                                  label="No"/>
                              </CCol>
                        </CRow>
                         <CRow className="mb-2 mt-4">
                            <CCol className="mb-2" style={{textAlign:"center"}}>
                                    <CAlert color="primary">
                                      <h6>Cuenta con estos servicios en el sector de la Vivienda</h6>
                                  </CAlert>
                              </CCol>
                          </CRow>
                         <CRow className="mb-4">
                            <CCol sm="auto">Vías de acceso:</CCol>
                            <CCol sm="auto">
                            <CFormCheck inline
                                type="radio"
                                name="viasaccesoRadioOptions"
                                id="viasaccesoCheckbox1"
                                value="Si"
                                label="Si"/>
                            <CFormCheck inline
                               type="radio"
                               name="viasaccesoRadioOptions"
                               id="viasaccesoCheckbox2"
                               value="No"
                               label="No"/>
                              </CCol>
                              <CCol sm="auto">Canchas deportivas:</CCol>
                              <CCol sm="auto">
                                <CFormCheck inline
                                    type="radio"
                                    name="CdeportivasRadioOptions"
                                    id="CdeportivasCheckbox1"
                                    value="Si"
                                    label="Si"/>
                                <CFormCheck inline
                                  type="radio"
                                  name="CdeportivasRadioOptions"
                                  id="CdeportivasCheckbox2"
                                  value="No"
                                  label="No"/>
                              </CCol>
                              <CCol sm="auto">Parques:</CCol>
                              <CCol sm="auto">
                                <CFormCheck inline
                                    type="radio"
                                    name="ParqueRadioOptions"
                                    id="ParqueCheckbox1"
                                    value="Si"
                                    label="Si"/>
                                <CFormCheck inline
                                  type="radio"
                                  name="ParqueRadioOptions"
                                  id="ParqueCheckbox2"
                                  value="No"
                                  label="No"/>
                              </CCol>
                              <CCol sm="auto"> Salón Comunal:</CCol>
                              <CCol sm="auto">
                                <CFormCheck inline
                                    type="radio"
                                    name="ScomunalRadioOptions"
                                    id="ScomunalCheckbox1"
                                    value="Si"
                                    label="Si"/>
                                <CFormCheck inline
                                  type="radio"
                                  name="ScomunalRadioOptions"
                                  id="ScomunalCheckbox2"
                                  value="No"
                                  label="No"/>
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
