/* eslint-disable prettier/prettier */
import {
  CButton,
  CCardBody,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import React from 'react'
const FormConcejos = () => {
  return (
    <>
      <CCardBody>
        <CForm>
          <CRow className="my-0 g-1">
            <CCol xs={12} md={4}>
              <CFormLabel htmlFor="select-asociacion" component="span" id="" className="m-0">
                Asociación
              </CFormLabel>
              <CFormSelect
                id="select-asociacion"
                size="sm"
                floating-label="true"
                aria-label="Default select example"
                required
              >
                <option>Seleccione...</option>
                <option value="1">Asociación1</option>
                <option value="2">Asociación2</option>
              </CFormSelect>
            </CCol>
            <CCol xs={12} md={4}>
              <CFormLabel component="span" id="select-autoridad" className="m-0 required">
                Autoridad
              </CFormLabel>
              <CFormSelect htmlFor="select-autoridad" size="sm" aria-label="Default select example">
                <option>Seleccione...</option>
                <option value="1">Autoridad1</option>
                <option value="2">Autoridad2</option>
              </CFormSelect>
            </CCol>
            <CCol xs={12} md={4}>
              <CFormLabel component="span" id="" className="m-0">
                Municipio
              </CFormLabel>
              <CFormSelect size="sm" aria-label="Default select example">
                <option>Seleccione...</option>
                <option value="1">Municipio 1</option>
                <option value="2">Municipio 2</option>
              </CFormSelect>
            </CCol>
          </CRow>
          <CRow className="my-0 g-1">
            <CCol md={6}>
              <CFormLabel component="span" id="" className="m-0">
                Nombre del Concejo Comunitario
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
            <CCol>
              <CFormLabel component="span" id="" className="m-0">
                NIT
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
          <CRow className="mt-0 g-1">
            <CCol md>
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
          </CRow>
          <CRow className="my-0 g-1">
            <CCol className="d-grid gap-2">
              <CButton type="submit" color="success" className="mr-1">
                Guardar Concejo Comunitario
              </CButton>
            </CCol>
            <CCol md={3} className="d-grid gap-2">
              <CButton type="reset" variant="outline">
                Nuevo Concejo
              </CButton>
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </>
  )
}
export default FormConcejos
