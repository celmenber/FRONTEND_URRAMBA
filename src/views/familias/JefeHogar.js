/* eslint-disable prettier/prettier */
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
import React from 'react'
const JefeHogar = () => {
  return (
    <>
      <CContainer>
        <CCard className="mb-4 p-4">
          <CCard className="mb-2 p-2">
            <CCard className="mb-1">
              <CNav expand="lg" colorScheme="light" className="bg-light">
                <CCardBody>
                  <div className="d-flex justify-content-between align-items-center">
                    <CCardTitle>Jefe de Hogar</CCardTitle>
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
                        placeholder="Nombre del jefe de Hogar"
                      />
                    </CCol>
                    <CCol xs={12} sm={8} md={4} className="mb-3">
                      <CFormInput
                        type="text"
                        id="exampleFormControlInput1"
                        placeholder="Cédula de Ciudadanía"
                      />
                    </CCol>
                  </CRow>

                  <CRow className="mb-0">
                    <CCol xs={12} sm={10} md={4} className="mb-3">
                      <CRow>
                        <CCol xs={12} className="mb-3">
                          <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Dirección"
                          />
                        </CCol>
                        <CCol xs={12} sm={10} className="mb-3">
                          <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Teléfono"
                          />
                        </CCol>
                        <CCol xs={12} className="mb-3">
                          <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Correo Electrónico"
                          />
                        </CCol>
                      </CRow>
                    </CCol>

                    <CCol xs={12} sm={6}>
                      <CRow>
                        <CCol xs={12} sm={6} className="mb-3">
                          <CFormSelect aria-label="Default select example">
                            <option>Seleccione un Rol</option>
                            <option value="1">Administrador</option>
                            <option value="2">Operador</option>
                            
                          </CFormSelect>
                        </CCol>
                        <CCol xs={12} className="mb-3">
                          <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Sistema de Salud"
                          />
                        </CCol>
                        <CCol xs={12} md={5} className="mb-3">
                          <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Ocupación"
                          />
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
export default JefeHogar
