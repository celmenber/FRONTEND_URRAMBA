/* eslint-disable prettier/prettier */
import {
  CButton,
  CCardBody,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormText,
  CRow,
} from '@coreui/react'
import React from 'react'
const FormJefeHogar = () => {
  return (
    <>
      <CForm sm className="row g-3">
        <CCardBody>
          <CRow>
            <CCol xs={12} md={6}>
              <CFormLabel component="span" id="" className="m-0">
                Nombres
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
                Apellidos
              </CFormLabel>
              <CFormInput
                className="mb-2"
                size="sm"
                type="text"
                id="exampleFormControlInput1"
                placeholder=""
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
          </CRow>

          <CRow>
            <CCol xs={12} md={6}>
              <CFormLabel component="span" id="" className="m-0">
                Nombre de Usuario
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
                Contraseña
              </CFormLabel>
              <CFormInput
                className="mb-2"
                size="sm"
                type="password"
                id="FormControlInputName"
                placeholder=""
                aria-describedby="FormControlInputNameHelpInline"
                required
              />
            </CCol>
          </CRow>

          <CRow>
            <CCol md={5}>
              <CFormLabel component="span" id="" className="m-0">
                Documento
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
            <CCol md={4}>
              <CFormLabel component="span" id="" className="m-0">
                Perfil
              </CFormLabel>
              <CFormSelect size="sm" aria-label="Default select example">
                <option value="operador">Operador</option>
                <option value="admin">Administrador</option>
              </CFormSelect>
              <CFormText component="span" id="exampleFormControlInputHelpInline">
                Seleccione un perfil.
              </CFormText>
            </CCol>
            <CCol xs>
              <CFormLabel component="span" id="" className="m-0">
                Estado
              </CFormLabel>
              <CFormSelect size="sm" aria-label="Default select example">
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
              </CFormSelect>
            </CCol>
          </CRow>

          <CRow className="pt-2">
            <CCol className="d-grid gap-2">
              <CButton variant="outline">Limpiar Formulario</CButton>
            </CCol>
            <CCol className="d-grid gap-2">
              <CButton type="submit" color="success" className="mr-1 align-">
                Guardar
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CForm>
    </>
  )
}
export default FormJefeHogar
