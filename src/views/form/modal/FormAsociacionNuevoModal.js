/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { CLoadingButton, CModalTitle } from '@coreui/react-pro'
import {
  CButton,
  CCol,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalHeader,
  CRow,
} from '@coreui/react'

import { AsociacionForm } from 'src/hooks'
import Swal from 'sweetalert2'
import { useEffect } from 'react'

const AdminUsuariosModal = (Props) => {
  const handleClose = () => setVisibleNCV(false)

  const { visibleNCV, setVisibleNCV } = Props

  const {
    handleSubmit,
    onChangeFormulario,
    handleReset,
    obtenerMunicipio,
    /* metodos */
    municipio,
    datoAsociacion,
    validated,
    valedita,
    cargando,
  } = AsociacionForm()

  const {
    idMunicipio,
    estado,
    nitEmpresa,
    nombrEmpresa,
    correoEmpresa,
    direccionEmpresa,
    telefonoEmpresa,
    representanteEmpresa,
  } = datoAsociacion

  useEffect(() => {
    // Consultar la api un parque
    obtenerMunicipio()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <CModal size="xl" visible={visibleNCV} onClose={handleClose}>
        <CModalHeader>
          <CModalTitle>
            {' '}
            <strong>Agregar nuevo Asociacion</strong>
          </CModalTitle>
        </CModalHeader>
        <CForm
          className="row g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <CModalBody>
            <CRow className="g-3">
              <CCol md={3} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom01">NIT Empresa*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom01"
                  name="nitEmpresa"
                  value={nitEmpresa}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El campo Nit Empresa es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={6} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom02">Nombre Empresa*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom002"
                  name="nombrEmpresa"
                  value={nombrEmpresa}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El campo Nombre Empresa es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={3} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom04">Estado*</CFormLabel>
                <CFormSelect
                  id="validationCustom04"
                  name="estado"
                  value={estado}
                  onChange={onChangeFormulario}
                  required
                >
                  <option value={''}>Seleccione...</option>
                  <option value={true}>Activar</option>
                  <option value={false}>Desactivar</option>
                </CFormSelect>
                <CFormFeedback invalid>El campo Estado es Requerido!</CFormFeedback>
              </CCol>
            </CRow>
            <CRow>
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom05">Municipio*</CFormLabel>
                <CFormSelect
                  id="validationCustom05"
                  name="idMunicipio"
                  value={idMunicipio}
                  onChange={onChangeFormulario}
                  required
                >
                  <option Key={'0'} value={''}>
                    Seleccione...
                  </option>
                  {municipio?.length === 0 ? (
                    <option Key={'0'} value={0}>
                      Seleccione...
                    </option>
                  ) : (
                    municipio?.map((item) => (
                      <option Key={item.MunicipioId} value={item.MunicipioId}>
                        {item.NombreMunicipio}
                      </option>
                    ))
                  )}
                </CFormSelect>
                <CFormFeedback invalid>El campo Municipio es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom07">Direccion Empresa*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom07"
                  name="direccionEmpresa"
                  value={direccionEmpresa}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El campo Direccion Empresa es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom07">Telefono Empresa*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom07"
                  name="telefonoEmpresa"
                  value={telefonoEmpresa}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El campo Telefono Empresa es Requerido!</CFormFeedback>
              </CCol>
            </CRow>
            <CRow>
              <CCol md={6} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom01">Email Empresa*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom001"
                  name="correoEmpresa"
                  value={correoEmpresa}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El campo Email Empresa es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={6} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom01">Representante Empresa*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom002"
                  name="representanteEmpresa"
                  value={representanteEmpresa}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El campo Representante Empresa es Requerido!</CFormFeedback>
              </CCol>
            </CRow>
            <CRow>
              <CCol md={10} style={{ marginTop: '20px', marginBottom: '20px' }}>
                {cargando === true ? (
                  <CLoadingButton
                    color="success"
                    variant="outline"
                    style={{ width: '100%' }}
                    timeout={2000}
                  >
                    {' '}
                    Enviando Datos Asociacion
                  </CLoadingButton>
                ) : (
                  <CButton
                    type="submit"
                    color={'success'}
                    className="px-4"
                    style={{ width: '100%' }}
                  >
                    {' '}
                    {'Enviar Datos Asociacion'}
                  </CButton>
                )}
              </CCol>
              <CCol xs={2} style={{ marginTop: '20px', marginBottom: '20px' }}>
                <CButton
                  type="button"
                  color={'light'}
                  className="px-4"
                  style={{ width: '100%' }}
                  onClick={() => handleReset()}
                >
                  {' '}
                  {'Nuevo Asociacion'}
                </CButton>
              </CCol>
            </CRow>
          </CModalBody>
        </CForm>
      </CModal>
    </>
  )
}
export default AdminUsuariosModal
