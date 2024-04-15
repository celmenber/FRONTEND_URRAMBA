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
const CaracterizacionOL = () => {
  return <>
  <CRow>
       <CCol xs={12}>
            <CForm validated={true}>
                                            <CRow className="mb-4">
                          <CCol sm="auto">Se encuentra afiliado a algún sistema previsional (sistema de pensiones)?		:</CCol>
                              <CCol sm="auto">
                            <CFormCheck inline
                              className="mb-3"
                              type="radio"
                              name="radio-stacked"
                              id="afiliado Check1"
                              label="Si"
                              required
                            />
                            <CFormCheck inline
                              className="mb-3"
                              type="radio"
                              name="radio-stacked"
                              id="afiliado Check2"
                              label="No"
                              required
                            />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2 mt-4">
                            <CCol className="mb-2" style={{textAlign:"left"}}>
                                    <CAlert color="primary">
                                      <h6>¿Cuál de estas alternativas describe mejor su condición laboral actual:</h6>
                                  </CAlert>
                              </CCol>
                        </CRow>
                         <CRow className="mb-4">
                         <CCol>
                            <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="radio-stacked"
                              id="condicilaboralCheck1"
                              label="Dificultad física y/o de movilidad"
                              required
                            />
                              <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="radio-stacked"
                              id="condicilaboralCheck2"
                              label="Tiene empleo, pero no está trabajando (vacaciones o licencias)"
                              required
                            />
                              <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="radio-stacked"
                              id="condicilaboralCheck3"
                              label=" Trabajando para un familiar sin pago"
                              required
                            />
                            </CCol>
                            <CCol>
                            <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="radio-stacked"
                              id="condicilaboralCheck4"
                              label="Estudiando"
                              required
                            />
                              <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="radio-stacked"
                              id="condicilaboralCheck5"
                              label="Sin trabajo, pero buscando"
                              required
                            />
                              <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="radio-stacked"
                              id="condicilaboralCheck6"
                              label="En labores del hogar"
                              required
                            />
                            </CCol>
                            <CCol>
                            <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="radio-stacked"
                              id="condicilaboralCheck7"
                              label="Jubilado, pensionado o rentista"
                              required
                            />
                              <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="radio-stacked"
                              id="condicilaboralCheck8"
                              label="Otra situación"
                              required
                            />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2 mt-4">
                            <CCol className="mb-2" style={{textAlign:"left"}}>
                                    <CAlert color="primary">
                                      <h6>¿Tipo de remuneración laboral actual:</h6>
                                  </CAlert>
                              </CCol>
                        </CRow>
                        <CRow className="mb-4">
                          <CCol sm="auto">
                            <CFormCheck inline
                              className="mb-3"
                              type="radio"
                              name="radio-stacked"
                              id="TiporemunCheck1"
                              label="Trabajador(a) asalariado"
                              required
                            />
                            <CFormCheck inline
                              className="mb-3"
                              type="radio"
                              name="radio-stacked"
                              id="TiporemunCheck2"
                              label="Trabajador(a) de servicio doméstico"
                              required
                            />
                            <CFormCheck inline
                              className="mb-3"
                              type="radio"
                              name="radio-stacked"
                              id="TiporemunCheck3"
                              label="Empleador(a), empresario(a) o patrón"
                              required
                            />
                            <CFormCheck inline
                              className="mb-3"
                              type="radio"
                              name="radio-stacked"
                              id="TiporemunCheck4"
                              label="Trabajador(a) por cuenta propia o independiente"
                              required
                            />
                            <CFormCheck inline
                              className="mb-3"
                              type="radio"
                              name="radio-stacked"
                              id="TiporemunCheck5"
                              label="Familiar no remunerado"
                              required
                            />
                            </CCol>
                       </CRow>
                        <CRow className="mb-2 mt-4">
                            <CCol className="mb-2" style={{textAlign:"left"}}>
                                    <CAlert color="primary">
                                      <h6>Cual es la Ocupación u Oficio del jefe de hogar:</h6>
                                  </CAlert>
                              </CCol>
                          </CRow>
                       <CRow className="mb-4">
                         <CCol>
                            <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="radio-stacked"
                              id="OcupacionoficioCheck1"
                              label="Empleado(a) Doméstico"
                              required
                            />
                              <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="radio-stacked"
                              id="OcupacionoficioCheck2"
                              label="Labores del Hogar"
                              required
                            />
                              <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="radio-stacked"
                              id="OcupacionoficioCheck3"
                              label="Jornalero o Peón"
                              required
                            />
                             </CCol>
                             <CCol>
                              <CFormCheck
                                  className="mb-3"
                                  type="checkbox"
                                  name="radio-stacked"
                                  id="OcupacionoficioCheck4"
                                  label="Obrero(a) o Empleado de empresa Particular"
                                  required
                                />
                                  <CFormCheck
                                  className="mb-3"
                                  type="checkbox"
                                  name="radio-stacked"
                                  id="OcupacionoficioCheck5"
                                  label="Obrero(a) o empleado del gobierno"
                                  required
                                />
                                  <CFormCheck
                                  className="mb-3"
                                  type="checkbox"
                                  name="radio-stacked"
                                  id="OcupacionoficioCheck6"
                                  label=" Trabajador(a) independiente o por cuenta propia"
                                  required
                                />
                                </CCol>
                                <CCol>
                                <CFormCheck
                                  className="mb-3"
                                  type="checkbox"
                                  name="radio-stacked"
                                  id="OcupacionoficioCheck7"
                                  label="Jubilado, pensionado o rentista"
                                  required
                                />
                                <CFormCheck
                                  className="mb-3"
                                  type="checkbox"
                                  name="radio-stacked"
                                  id="OcupacionoficioCheck8"
                                  label="No sabe no responde/No trabaja"
                                  required
                                />
                                <CFormCheck
                                  className="mb-3"
                                  type="checkbox"
                                  name="radio-stacked"
                                  id="OcupacionoficioCheck9"
                                  label="Otra"
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
export default CaracterizacionOL
