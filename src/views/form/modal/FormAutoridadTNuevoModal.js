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
  CInputGroup,
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

  const {
    handleSubmit,
    onChangeFormulario,
    handleReset,
    obtenerBarrioVereda,
    obtenerMunicipio,
    obtenertipodocumento,
    obtenercorregimiento,
    setValidated,
    /* metodos */
    municipio,
    barrios,
    corregimiento,
    tipodocumento,
    datoAutoridad,
    validated,
    cargando,

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
    Fechaingreso,
  } = datoAutoridad

  const handleClose = () =>{

    setVisibleAT(false)
    setValidated(false)
    handleReset()
   }

  useEffect(() => {
    // Consultar la api un obtenerMunicipio
      obtenerMunicipio();
      obtenercorregimiento();
      obtenerBarrioVereda();
      obtenertipodocumento();
    // eslint-disable-next-line
  }, []);



  return (
    <>
      <CModal size="xl" visible={visibleAT} onClose={handleClose}>
        <CModalHeader>
          <CModalTitle> <strong>Agregar Autoridad Afrodescediente</strong></CModalTitle>
        </CModalHeader>
        <CForm className="row g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <CModalBody>
            <CRow className="g-3">
              <CCol md={4}>
                <CFormLabel htmlFor="validationCustom01">Documento: </CFormLabel>
                <CInputGroup className="mb-3">
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
                          {item.Codigo}
                        </option>
                      ))
                    )}
                </CFormSelect>
                  {/* divide cajas */}
                 <CFormInput style={{
                  width: '50%',
                  borderTopRightRadius:'5px',
                  borderBottomRightRadius:'5px'
                   }}
                  type="text"
                  id="Documentos"
                  name="Documentos"
                  placeholder="Documento"
                  value={Documentos}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>Numero y tipo documento Requerido!</CFormFeedback>
                </CInputGroup>
              </CCol>
              <CCol md={3} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom02">Nombres*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom002"
                  name='Nombres'
                  value={Nombres}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El Nombre es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={3} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom02">Apellidos*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom002"
                  name='Apellidos'
                  value={Apellidos}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El Apellido es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={2} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom04">Estado*</CFormLabel>
                <CFormSelect
                  id="validationCustom04"
                  name='Estado'
                  value={Estado}
                  onChange={onChangeFormulario}
                  required>
                  <option value={'1'}>Activado</option>
                  <option value={'0'}>Desactivado</option>
                </CFormSelect>
                <CFormFeedback invalid>El Estado Requerido!</CFormFeedback>
              </CCol>
            </CRow>
              <br/>
            <CRow className="g-3">
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom07">Direccion*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom07"
                  name='Direccion'
                  value={Direccion}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>La Dirección es Requerida!</CFormFeedback>
              </CCol>
              <CCol md={3} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom07">Telefono*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom07"
                  name='Telefono'
                  value={Telefono}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El Telefono es Requerido!</CFormFeedback>
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
                <CFormFeedback invalid>El sexo Requerido!</CFormFeedback>
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
                <CFormFeedback invalid>La Fecha Nacimiento es Requerida!</CFormFeedback>
              </CCol>
            </CRow>
              <br/>
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
                <CFormFeedback invalid>El Municipio es Requerido!</CFormFeedback>
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
                <CFormFeedback invalid>El Corregimientos es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom05">Barrio Vereda*</CFormLabel>
                <CFormSelect
                  id="validationCustom05"
                  name='Idbarriovereda'
                  value={Idbarriovereda}
                  onChange={onChangeFormulario}
                  required>
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
                <CFormFeedback invalid>El Barrio o Vereda es Requerido!</CFormFeedback>
              </CCol>
            </CRow>
              <br/>
            <CRow className="g-3">
             <CCol md={5} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom01">Correo Electronico*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom001"
                  name='Correo'
                  value={Correo}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El Correo Electronico es Requerido!</CFormFeedback>
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
                <CFormFeedback invalid>La Fecha Ingreso es Requerida!</CFormFeedback>
              </CCol>
            </CRow>
              <br/>
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
                   {' Enviando Datos...'}
                  </CLoadingButton>
                ) : (
                  <CButton
                    type="submit"
                    color={'success'}
                    className="px-4"
                    style={{ width: '100%' }}
                  >
                    {' '}
                    {'Enviar Datos Autoridad Afrodescediente'}
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
                  {'Nuevo Registro'}
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
