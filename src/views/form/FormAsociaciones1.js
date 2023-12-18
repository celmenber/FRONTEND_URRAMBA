/* eslint-disable prettier/prettier */
import { CButton, CCardBody, CCol, CForm, CFormInput, CFormLabel, CRow } from '@coreui/react'
import React from 'react'
const FormAsociaciones = () => {
  return (
    <>
      <CForm sm className="row g-3">
        <CCardBody>
          <CRow>
            <CCol xs={12} md={12}>
              <CFormLabel component="span" id="" className="m-0">
                Nombre de la Asociación
              </CFormLabel>
              <CFormInput
                className="mb-2"
                size="sm"
                type="text"
                id="FormControlInputName"
                placeholder=""
                aria-describedby="FormControlInputNameHelpInline"
                required
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol xs={12} md={6}>
              <CFormLabel component="span" id="" className="m-0">
                Nit
              </CFormLabel>
              <CFormInput
                className="mb-2"
                size="sm"
                type="text"
                id="FormControlInputName"
                placeholder=""
                aria-describedby="FormControlInputNameHelpInline"
                required
              />
            </CCol>
            <CCol xs={12} md={6}>
              <CFormLabel component="span" id="" className="m-0">
                Correo Electrónico
              </CFormLabel>
              <CFormInput
                className="mb-2"
                size="sm"
                type="text"
                id="FormControlInputName"
                placeholder=""
                aria-describedby="FormControlInputNameHelpInline"
                required
              />
            </CCol>
          </CRow>
          <CRow className="mb-2">
            <CCol xs={12} md={6}>
              <CFormLabel component="span" id="" className="m-0">
                Dirección
              </CFormLabel>
              <CFormInput
                className="mb-2"
                size="sm"
                type="text"
                id="FormControlInputName"
                placeholder=""
                aria-describedby="FormControlInputNameHelpInline"
                required
              />
            </CCol>
            <CCol xs={12} md={6}>
              <CFormLabel component="span" id="" className="m-0">
                Teléfono
              </CFormLabel>
              <CFormInput
                className="mb-2"
                size="sm"
                type="text"
                id="FormControlInputName"
                placeholder=""
                aria-describedby="FormControlInputNameHelpInline"
                required
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol className="d-grid gap-2">
              <CButton type="submit" color="success" className="mr-1">
                Guardar Asociación
              </CButton>
            </CCol>
            <CCol md={3} className="d-grid gap-2">
              <CButton variant="outline">Nueva Asociación</CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CForm>
    </>
  )
}
export default FormAsociaciones