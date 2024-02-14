/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
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

import { AutoridadTForm } from 'src/hooks'


const EmpleadoNuevoModal = (Props) => {

  const {
    visibleAT,
    setVisibleAT,
  } = Props

  const handleClose = () => setVisibleAT(false)

  const {
    handleSubmit,
    onChangeFormulario,
    handleReset,
    obtenerBarrioVereda,
    obtenerMunicipio,
    obtenertipodocumento,
    obtenercorregimiento,
    /* metodos */
    municipio,
    barrios,
    corregimiento,
    tipodocumento,
    datoAutoridad,
    validated,
    cargando
  } = AutoridadTForm()

  const {
    Idmunicipio,
    Idbarriovereda,
    Idcorregimiento,
    Idtipodocumento,
    Documentos,
    Nombres,
    Apellidos,
    Sexo,
    Direccion,
    Telefono,
    Correo,
    Estado,
    Fechanacimiento,
    Fechaingreso
  } = datoAutoridad

  useEffect(() => {
    // Consultar la api un obtenerMunicipio
    setTimeout(() => {
      obtenerMunicipio();
    }, 500);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // Consultar la api un obtenerMunicipio
    setTimeout(() => {
    obtenercorregimiento();
    }, 600);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    // Consultar la api un barrios
    setTimeout(() => {
    obtenerBarrioVereda();
    }, 700);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    // Consultar la api un barrios
    setTimeout(() => {
    obtenertipodocumento();
    }, 800);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <CModal size="xl" visible={visibleAT} onClose={handleClose}>
        <CModalHeader>
          <CModalTitle> <strong>Agregar Autoridad Tradicional</strong></CModalTitle>
        </CModalHeader>
        <CForm className="row g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <CModalBody>
            <CRow className="g-3">
              <CCol md={2} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom01">Tipo Documento*</CFormLabel>
                <CFormSelect
                  id="validationCustom05"
                  name='Idtipodocumento'
                  value={Idtipodocumento}
                  onChange={onChangeFormulario}
                  required>
                  <option key={'0'} value={''}>Seleccione...</option>
                  {tipodocumento?.length === 0
                    ? <option key={'0'} value={''}>Seleccione...</option>
                    : (
                      tipodocumento?.filter(item => item.Estado !== null).map(item => (
                        <option
                          key={item.ID}
                          value={item.ID}
                        >
                          {item.Nombre}
                        </option>
                      ))
                    )}
                </CFormSelect>
                <CFormFeedback invalid>El campo es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={3} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom01">Documento Autoridad Tradicional*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom01"
                  name='Documentos'
                  value={Documentos}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El campo Documentos Requerido!</CFormFeedback>
              </CCol>
              <CCol md={5} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom01">Email Autoridad Tradicional*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom001"
                  name='Correo'
                  value={Correo}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El campo Email es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={2} style={{ marginTop: '15px' }}>
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
                <CFormFeedback invalid>El campo Requerido!</CFormFeedback>
              </CCol>
            </CRow>
            <CRow className="g-3">
              <CCol md={3} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom02">Nombres Autoridad Tradicional*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom002"
                  name='Nombres'
                  value={Nombres}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El campo Nombres es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom02">Apellidos Autoridad Tradicional*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom002"
                  name='Apellidos'
                  value={Apellidos}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El campo Apellidos Autoridad es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={3} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom02">Fecha Nacimiento*</CFormLabel>
                <CFormInput
                  type="date"
                  id="validationCustom002"
                  name='Fechanacimiento'
                  value={Fechanacimiento}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El campo Fecha Nacimiento es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={2} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom04">Sexo*</CFormLabel>
                <CFormSelect
                  id="validationCustom04"
                  name='Sexo'
                  value={Sexo}
                  onChange={onChangeFormulario}
                  required>
                  <option value={''}>Seleccione...</option>
                  <option value={'Masculino'}>Masculino</option>
                  <option value={'Femenino'}>Femenino</option>
                </CFormSelect>
                <CFormFeedback invalid>El campo Requerido!</CFormFeedback>
              </CCol>
            </CRow>
            <CRow className="g-3">
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom05">Municipio*</CFormLabel>
                <CFormSelect
                  id="validationCustom05"
                  name="Idmunicipio"
                  value={Idmunicipio}
                  onChange={onChangeFormulario}
                  required
                >
                  <option key={'0'} value={''}>
                    Seleccione...
                  </option>
                  {municipio?.length === 0 ? (
                    <option key={'0'} value={''}>
                      Seleccione...
                        </option>
                      ) : (
                          municipio?.filter(item => item.Estado !== null).map((item) => (
                          <option key={item.ID} value={item.ID}>
                            {item.Nombre}
                          </option>
                        ))
                  )}
                </CFormSelect>
                <CFormFeedback invalid>El campo Municipio es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom05">Corregimientos*</CFormLabel>
                <CFormSelect
                  id="validationCustom05"
                  name='Idcorregimiento'
                  value={Idcorregimiento}
                  onChange={onChangeFormulario}
                  required>
                  <option key={'0'} value={''}>Seleccione...</option>
                  {corregimiento?.length === 0
                    ? <option key={'0'} value={''}>Seleccione...</option>
                    : (
                      corregimiento?.map(item => (
                        <option
                          key={item.ID}
                          value={item.ID}
                        >
                          {item.Nombre}
                        </option>
                      ))
                    )}
                </CFormSelect>
                <CFormFeedback invalid>El campo Corregimientos es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom05">Barrio Vereda*</CFormLabel>
                <CFormSelect
                  id="validationCustom05"
                  name='Idbarriovereda'
                  value={Idbarriovereda}
                  onChange={onChangeFormulario}
                  >
                  <option key={'0'} value={''}>Seleccione...</option>
                  {barrios?.length === 0
                    ? <option key={'0'} value={''}>Seleccione...</option>
                    : (
                      barrios?.map(item => (
                        <option
                          key={item.ID}
                          value={item.ID}
                        >
                          {item.Nombre}
                        </option>
                      ))
                    )}
                </CFormSelect>
               {/*  <CFormFeedback invalid>El campo Barrio Vereda es Requerido!</CFormFeedback> */}
              </CCol>
            </CRow>
            <CRow className="g-3">
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom07">Direccion Autoridad Tradicional*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom07"
                  name='Direccion'
                  value={Direccion}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El campo Direccion es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={3} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom07">Telefono Autoridad Tradicional*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom07"
                  name='Telefono'
                  value={Telefono}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El campo Telefono es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={3} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom02">Fecha Ingreso*</CFormLabel>
                <CFormInput
                  type="date"
                  id="validationCustom002"
                  name='Fechaingreso'
                  value={Fechaingreso}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El campo Fecha Nacimiento es Requerido!</CFormFeedback>
              </CCol>
            </CRow>
            <CRow>
              <CCol md={9} style={{ marginTop: '20px', marginBottom: '20px' }}>
                {cargando === true ? (
                  <CLoadingButton
                    color="success"
                    variant="outline"
                    style={{ width: '100%' }}
                    timeout={2000}
                  >
                    {' '}
                    Enviando Datos Autoridad Tradicional
                  </CLoadingButton>
                ) : (
                  <CButton
                    type="submit"
                    color={'success'}
                    className="px-4"
                    style={{ width: '100%' }}
                  >
                    {' '}
                      {'Enviar Datos Autoridad Tradicional'}
                  </CButton>
                )}
              </CCol>
              <CCol xs={3} style={{ marginTop: '20px', marginBottom: '20px' }}>
                <CButton
                  type="button"
                  color={'light'}
                  className="px-4"
                  style={{ width: '100%' }}
                  onClick={() => handleReset()}
                >
                  {' '}
                  {'Nuevo Autoridad Tradicional'}
                </CButton>
              </CCol>
            </CRow>
          </CModalBody>
        </CForm>
      </CModal>
    </>
  )
}
export default EmpleadoNuevoModal
