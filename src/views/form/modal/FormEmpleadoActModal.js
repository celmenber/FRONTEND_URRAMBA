/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
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
    CRow
} from '@coreui/react'
import { EmpleadoForm } from 'src/hooks';


const EmpleadoActModal = (Props) => {

    const handleClose = () => {
        handleReset()
      setVisibleEM(false)
    }

    const {
      visibleEM,
      setVisibleEM,
      datoEmpleado,
      onChangeFormulario,
      handleSubmitAct,
    } = Props

  const {
    validated,
    handleReset,
    obtenerAsociacion,
    asociacion,
    cargando
  } = EmpleadoForm()

  const {
    Id_asociacion,
    Documentos,
    Nombres,
    Apellidos,
    Barrio_vereda,
    Direccion,
    Telefono,
    Correo,
    Estado,
  } = datoEmpleado



    useEffect(() => {
      // Consultar la api un asociacion
      obtenerAsociacion();
      // eslint-disable-next-line
    }, []);


    return (
        <>
        <CModal size="xl" visible={visibleEM} onClose={handleClose}>
          <CModalHeader>
            <CModalTitle> <strong>Editar empleado asociación</strong></CModalTitle>
          </CModalHeader>
          <CForm className="row g-3 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmitAct}
          >
            <CModalBody>
              <CRow className="g-3">
                <CCol md={9} style={{ marginTop: '15px' }}>
                  <CFormLabel htmlFor="validationCustom01">Asociacion*</CFormLabel>
                  <CFormSelect
                    id="validationCustom05"
                    name='Id_asociacion'
                    value={Id_asociacion}
                    onChange={onChangeFormulario}
                    required>
                    <option key={0} value={''}>Seleccione...</option>
                    {asociacion?.length === 0
                      ? <option key={'0'} value={0}>Seleccione...</option>
                      : (
                        asociacion?.map(item => (
                          <option
                            key={item.ID}
                            value={item.ID}
                          >
                            {item.nombre}
                          </option>
                        ))
                      )}
                  </CFormSelect>
                  <CFormFeedback invalid>El campo Asociacion es Requerido!</CFormFeedback>
                </CCol>
                <CCol md={3} style={{ marginTop: '15px' }}>
                  <CFormLabel htmlFor="validationCustom04">Estado*</CFormLabel>
                  <CFormSelect
                    id="validationCustom04"
                    name='Estado'
                    value={Estado}
                    onChange={onChangeFormulario}
                    required>
                    <option value={''}>Seleccione...</option>
                    <option value={1}>Activado</option>
                    <option value={0}>Desactivado</option>
                  </CFormSelect>
                  <CFormFeedback invalid>El campo Estado es Requerido!</CFormFeedback>
                </CCol>
              </CRow>
              <CRow className="g-3">
                <CCol md={3} style={{ marginTop: '15px' }}>
                  <CFormLabel htmlFor="validationCustom01">Documento Empleado*</CFormLabel>
                  <CFormInput
                    type="text"
                    id="validationCustom01"
                    name='Documentos'
                    value={Documentos}
                    onChange={onChangeFormulario}
                    required />
                  <CFormFeedback invalid>El campo Documentos es Requerido!</CFormFeedback>
                </CCol>
                <CCol md={4} style={{ marginTop: '15px' }}>
                  <CFormLabel htmlFor="validationCustom02">Nombres*</CFormLabel>
                  <CFormInput
                    type="text"
                    id="validationCustom002"
                    name='Nombres'
                    value={Nombres}
                    onChange={onChangeFormulario}
                    required />
                  <CFormFeedback invalid>El campo Nombres es Requerido!</CFormFeedback>
                </CCol>
                <CCol md={5} style={{ marginTop: '15px' }}>
                  <CFormLabel htmlFor="validationCustom02">Apellidos*</CFormLabel>
                  <CFormInput
                    type="text"
                    id="validationCustom002"
                    name='Apellidos'
                    value={Apellidos}
                    onChange={onChangeFormulario}
                    required />
                  <CFormFeedback invalid>El campo Apellidos es Requerido!</CFormFeedback>
                </CCol>
              </CRow>
              <CRow>
                <CCol md={7} style={{ marginTop: '15px' }}>
                  <CFormLabel htmlFor="validationCustom05">Barrio Vereda*</CFormLabel>
                  <CFormInput
                     type="text"
                     id="validationCustom05"
                     name='Barrio_vereda'
                     value={Barrio_vereda}
                     onChange={onChangeFormulario}
                    required />
                  <CFormFeedback invalid>El campo Barrio Vereda es Requerido!</CFormFeedback>
                </CCol>
                <CCol md={5} style={{ marginTop: '15px' }}>
                  <CFormLabel htmlFor="validationCustom07">Direccion Empleado*</CFormLabel>
                  <CFormInput
                    type="text"
                    id="validationCustom07"
                    name='Direccion'
                    value={Direccion}
                    onChange={onChangeFormulario}
                    required />
                  <CFormFeedback invalid>El campo Direccion Empleado es Requerido!</CFormFeedback>
                </CCol>
              </CRow>
              <CRow>
                <CCol md={4} style={{ marginTop: '15px' }}>
                  <CFormLabel htmlFor="validationCustom07">Telefono Empleado*</CFormLabel>
                  <CFormInput
                    type="text"
                    id="validationCustom07"
                    name='Telefono'
                    value={Telefono}
                    onChange={onChangeFormulario}
                    required />
                  <CFormFeedback invalid>El campo Telefono Empleado es Requerido!</CFormFeedback>
                </CCol>
                <CCol md={8} style={{ marginTop: '15px' }}>
                  <CFormLabel htmlFor="validationCustom01">Email Empleado*</CFormLabel>
                  <CFormInput
                    type="text"
                    id="validationCustom001"
                    name='Correo'
                    value={Correo}
                    onChange={onChangeFormulario}
                    required />
                  <CFormFeedback invalid>El campo Email Empleado es Requerido!</CFormFeedback>
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
                      Actualizar Datos Empleado
                    </CLoadingButton>
                  ) : (
                    <CButton
                      type="submit"
                      color={'primary'}
                      className="px-4"
                      style={{ width: '100%' }}
                    >
                      {' '}
                        {'Actualizando Datos Empleado'}
                    </CButton>
                  )}
                </CCol>
                <CCol xs={2} style={{ marginTop: '20px', marginBottom: '20px' }}>
                  <CButton
                    type="button"
                    color={'dark'}
                    className="px-4"
                    style={{ width: '100%' }}
                    onClick={() => handleClose()}
                  >
                    {' '}
                    {'Cancelar Edición'}
                  </CButton>
                </CCol>
              </CRow>
            </CModalBody>
          </CForm>
        </CModal>
        </>
    )
}
export default EmpleadoActModal
