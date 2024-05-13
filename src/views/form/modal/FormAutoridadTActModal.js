/* eslint-disable react-hooks/exhaustive-deps */
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
const FormAutoridadActModal = (Props) => {
  const {
    visibleEAT,
    setVisibleEAT,
    onChangeFormulario,
    datoAutoridad,
  } = Props

   const handleClose = () => {
        handleReset()
        setVisibleEAT(false)
    }

  const {
    actulizarAutoridadT,
    handleReset,
    obtenerBarrioVereda,
    obtenerMunicipio,
    obtenertipodocumento,
    obtenercorregimiento,
    /* metodos */
    setValidated,
    municipio,
    barrios,
    corregimiento,
    tipodocumento,
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

  //console.log(datoAutoridad)

  useEffect(() => {
    // Consultar la api un obtenerMunicipio
      obtenerMunicipio();
      obtenercorregimiento();
      obtenerBarrioVereda();
      obtenertipodocumento();
    // eslint-disable-next-line
  }, []);

    const handleSubmit = (event) => {
    event.preventDefault();
     setValidated(true)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {

        const formularioDatos = {
                    Id_municipio: parseInt(datoAutoridad.Idmunicipio),
                    Id_barrio_vereda: parseInt(datoAutoridad.Idbarriovereda),
                    Id_corregimiento: parseInt(datoAutoridad.Idcorregimiento),
                    Id_tipo_documento: parseInt(datoAutoridad.Idtipodocumento),
                    Documentos:datoAutoridad.Documentos,
                    Nombres:datoAutoridad.Nombres,
                    Apellidos:datoAutoridad.Apellidos,
                    Sexo:datoAutoridad.Sexo,
                    Direccion: datoAutoridad.Direccion,
                    Telefono: datoAutoridad.Telefono,
                    Correo: datoAutoridad.Correo,
                    Estado: datoAutoridad.Estado,
                    Fecha_nacimiento: datoAutoridad.Fechanacimiento,
                    Fecha_ingreso: datoAutoridad.Fechaingreso,
                    Id_escolaridad:  datoAutoridad.Id_escolaridad,
                    Estado_escolaridad:  datoAutoridad.Estado_escolaridad,

        };

          actulizarAutoridadT({
                formularioDatos,
                id: datoAutoridad.ID,
                handleReset,
            });
       setVisibleEAT(false);
    }
};



  return (
    <>
      <CModal size="xl" visible={visibleEAT} onClose={handleClose}>
        <CModalHeader>
          <CModalTitle> <strong>Editar Autoridad Afrodescediente</strong></CModalTitle>
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
                  <option value={''}>Seleccione...</option>
                  <option value={'1'}>Activado</option>
                  <option value={'0'}>Desactivado</option>
                </CFormSelect>
                <CFormFeedback invalid>El campo Requerido!</CFormFeedback>
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
                <CFormFeedback invalid>La Direccion es Requerida!</CFormFeedback>
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
                <CFormFeedback invalid>El campo Requerido!</CFormFeedback>
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
            <br/>
            <CRow className="g-3">
              <CCol md={5} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom01">Correo electronico*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom001"
                  name='Correo'
                  value={Correo}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El Correo electronico es Requerido!</CFormFeedback>
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
                    color={'primary'}
                    className="px-4"
                    style={{ width: '100%' }}
                  >
                    {' '}
                      {'Actualizar Datos Autoridad Tradicional'}
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
export default FormAutoridadActModal
