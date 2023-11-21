/* eslint-disable prettier/prettier */
import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardTitle,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CNav,
  CRow,
} from '@coreui/react'

const NucleosFamiliares = () => {
  return (
    <>
      <CContainer>
        <CCard className="mb-4 p-4">
          <CCard className="mb-2 p-2">
            <CCard className="mb-1">
              <CNav expand="lg" colorScheme="light" className="bg-light">
                <CCardBody>
                  <div className="d-flex justify-content-between align-items-center">
                    <CCardTitle>Nucleos Familiares</CCardTitle>
                    <CForm className="d-flex">
                      <CFormInput type="search" className="me-2" placeholder="Buscar Usuarios" />
                      <CButton type="submit" color="success" variant="outline">
                        Buscar
                      </CButton>
                    </CForm>
                  </div>
                </CCardBody>
              </CNav>
              <CForm sm className="row g-3 p-3">
                <CCardBody>
                  <CRow className="mb-0">
                    <CCol xs={12} md={6} className="mb-3">
                      <CFormInput
                        type="text"
                        id="exampleFormControlInput1"
                        placeholder="Número de Identificación Jefe de Hogar"
                      />
                    </CCol>
                    <CCol xs={12} sm={8} md={4} className="mb-3">
                      <CFormSelect aria-label="Default select example">
                        <option>Parentesco</option>
                        <option value="1">Padre</option>
                        <option value="2">Madre</option>
                        <option value="2">Hijo</option>
                        <option value="2">Sobrino</option>
                      </CFormSelect>
                    </CCol>
                  </CRow>

                  <CRow className="mb-0">
                    <CCol xs={12} sm={10} md={4} className="mb-3">
                      <CRow>
                        <CCol xs={12} className="mb-3">
                          <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Fecha de Nacimiento"
                          />
                        </CCol>
                        <CCol xs={12} sm={10} className="mb-3">
                          <CFormSelect aria-label="Default select example">
                            <option>Genero</option>
                            <option value="1">Hombre</option>
                            <option value="2">Mujer</option>
                          </CFormSelect>
                        </CCol>
                        <CCol xs={12} className="mb-3">
                          <CFormSelect aria-label="Default select example">
                            <option>Educación</option>
                            <option value="1">Primaria</option>
                            <option value="2">Bachiller</option>
                            <option value="3">Profesional</option>
                          </CFormSelect>
                        </CCol>
                      </CRow>
                    </CCol>

                    
                  </CRow>

                  <CCol xs={12} sm={12} className="p-0">
                    <CRow className="justify-content-center g-3">
                      <CCol xs className="text-end">
                        <CButton type="reset" className="mr-1 align-">
                          Limpiar
                        </CButton>
                      </CCol>
                      <CCol xs>
                        <CButton type="submit">Guardar</CButton>
                      </CCol>
                    </CRow>
                  </CCol>
                </CCardBody>
              </CForm>
            </CCard>
          </CCard>
        </CCard>
      </CContainer>
    </>
  )
}
export default NucleosFamiliares
