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


import { MiembroForm } from 'src/hooks'

const FormMiembrosModal = (Props) => {


  const {
    visibleM,
    setVisibleM,

  } = Props



  const {
    handleSubmit,
    onChangeFormulario,
    setValidated,
    validated,
    datoMiembro,
    handleReset,
    obtenerConcejo,
    obtenercorregimiento,
    obtenerAsociacion,
    obtenertipodocumento,
    obtenerBarrioVereda,
    obtenerEscolaridad,
    obtenerOrientacionSexual,
    barrios,
    consejos,
    tipodocumento,
    corregimiento,
    escolaridades,
    orientacion_sexuales,
   cargando,
  } = MiembroForm()
  const {
    Id_conncejo_comunitario,
    Id_barrio_vereda,
    Id_corregimiento,
    Id_tipo_documento,
    Documentos,
    Nombres,
    Apellidos,
    Cargo_miembro,
    Id_escolaridad,
    Estado_escolaridad,
    Sexo,
    Genero,
    Id_orientacion_sexual,
    Direccion,
    Telefono,
    Estado,
    Fecha_nacimiento,
    Fecha_ingreso,
    Correo
  } = datoMiembro

  const handleClose = () =>{
    setVisibleM(false)
    setValidated(false)
    handleReset()
  }


  useEffect(() => {
    // Consultar la api un asociacion
    obtenerAsociacion();
    obtenerEscolaridad();
    obtenerOrientacionSexual();
    obtenerConcejo();
    obtenertipodocumento();
    obtenercorregimiento();
    obtenerBarrioVereda();
    // eslint-disable-next-line
  }, []);


  return (
    <>
      <CModal size="xl" visible={visibleM} onClose={handleClose}>
        <CModalHeader>
          <CModalTitle> <strong>Agregar Miembros Asociación</strong></CModalTitle>
        </CModalHeader>
        <CForm className="row g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <CModalBody>
            <CRow className="g-3">
              <CCol md={10}>
                <CFormLabel htmlFor="validationCustom01">Consejo Comunitario*</CFormLabel>
                <CFormSelect
                  id="validationCustom01"
                  name='Id_conncejo_comunitario'
                  value={Id_conncejo_comunitario}
                  onChange={onChangeFormulario}
                  required>
                  <option key={'0'} value={''}>Seleccione...</option>
                  {consejos?.length === 0
                    ? <option key={'0'} value={0}>Seleccione...</option>
                    : (
                      consejos?.map(item => (
                        <option
                          key={item.ID}
                          value={item.ID}
                        >
                          {item.nombre_concejo_comunitario
}
                        </option>
                      ))
                    )}
                </CFormSelect>
                <CFormFeedback invalid>La Asociacion es Requerida!</CFormFeedback>
              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="validationCustom02">Estado*</CFormLabel>
                <CFormSelect
                  id="validationCustom02"
                  name='Estado'
                  value={Estado}
                  type='number'
                  onChange={onChangeFormulario}
                  required>
                  <option value={''}>Seleccione...</option>
                  <option value={'1'}>Activado</option>
                  <option value={'0'}>Desactivado</option>
                </CFormSelect>
                <CFormFeedback invalid>El Estado es Requerido!</CFormFeedback>
              </CCol>
            </CRow>
            <CRow className="mt-3">
               <CCol md={4}>
                <CFormLabel htmlFor="validationCustom01">Documento: </CFormLabel>
                <CInputGroup className="mb-3">
                  <CFormSelect
                  id="validationCustom03"
                  name='Id_tipo_documento'
                  value={Id_tipo_documento}
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
                  value={Documentos}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>Numero y tipo documento Requerido!</CFormFeedback>
                </CInputGroup>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationCustom05">Nombre Miembro Consejo*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom05"
                  name='Nombres'
                  value={Nombres}
                  onChange={onChangeFormulario}
                  required />
               <CFormFeedback invalid>El Nombre es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationCustom06">Apellidos*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom06"
                  name='Apellidos'
                  value={Apellidos}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El Apellido es Requerido!</CFormFeedback>
              </CCol>
            </CRow>
            <CRow className="mt-2">
              <CCol md={3}>
                <CFormLabel htmlFor="validationCustom08">Cargo*</CFormLabel>
                <CFormSelect
                  id="validationCustom099"
                  name='Cargo_miembro'
                  value={Cargo_miembro}
                  onChange={onChangeFormulario}
                  required>
                  <option value={''}>Seleccione...</option>
                  <option value={'Presidente'}>Presidente</option>
                  <option value={'VicePresidente'}>VicePresidente</option>
                  <option value={'Secretario'}>Secretario</option>
                  <option value={'Tesorero'}>Tesorero</option>
                  <option value={'Fiscal'}>Fiscal</option>
                  <option value={'Vocal'}>Vocal</option>
                </CFormSelect>
                <CFormFeedback invalid>El Cargo es Requerido!</CFormFeedback>
              </CCol>
            <CCol md={3}>
                <CFormLabel htmlFor="validationCustom07">Escolaridad*</CFormLabel>
                <CFormSelect
                  id="validationCustom07"
                  name='Id_escolaridad'
                  value={Id_escolaridad}
                  onChange={onChangeFormulario}
                  required>
                  <option key={'0'} value={''}>Seleccione...</option>
                  {escolaridades?.length === 0
                    ? <option key={'0'} value={''}>Seleccione...</option>
                    : (
                      escolaridades?.map(item => (
                        <option
                          key={item.ID}
                          value={item.ID}
                        >
                          {item.Nombre}
                        </option>
                      ))
                    )}
                </CFormSelect>
                <CFormFeedback invalid>La Escolaridad es Requerida!</CFormFeedback>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="validationCustom08">Estado Escolaridad</CFormLabel>
                <CFormSelect
                  id="validationCustom08"
                  name='Estado_escolaridad'
                  value={Estado_escolaridad}
                  onChange={onChangeFormulario}
                  required>
                  <option value={''}>Seleccione...</option>
                  <option value={'Terminado'}>Terminado</option>
                  <option value={'Cursando'}>Cursando</option>
                  <option value={'Retirado'}>Retirado</option>
                </CFormSelect>
                <CFormFeedback invalid>El estado Escolaridad es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="validationCustom16">Fecha Nacimiento*</CFormLabel>
                <CFormInput
                  type="date"
                  id="validationCustom16"
                  name='Fecha_nacimiento'
                  value={Fecha_nacimiento}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>La Fecha Nacimiento es Requerido!</CFormFeedback>
              </CCol>
            </CRow>
            <CRow className="mt-2">
            <CCol md={4}>
                <CFormLabel htmlFor="validationCustom09">Genero*</CFormLabel>
                <CFormSelect
                  id="validationCustom09"
                  name='Genero'
                  value={Genero}
                  onChange={onChangeFormulario}
                  required>
                  <option value={''}>Seleccione...</option>
                  <option value={'Mujer'}>Mujer</option>
                  <option value={'Hombre'}>Hombre</option>
                </CFormSelect>
                <CFormFeedback invalid>El Genero es Requerido!</CFormFeedback>
              </CCol>
            <CCol md={4}>
             <CFormLabel htmlFor="validationCustom11">Sexo*</CFormLabel>
              <CFormSelect
                id="validationCustom11"
                name='Sexo'
                value={Sexo}
                onChange={onChangeFormulario}
                required>
                <option value={''}>Seleccione...</option>
                <option value={'Femenino'}>Femenino</option>
                <option value={'Masculino'}>Masculino</option>
              </CFormSelect>
              <CFormFeedback invalid>El Sexo es Requerido!</CFormFeedback>
            </CCol>
            <CCol md={4}>
                <CFormLabel htmlFor="validationCustom10">Orientación Sexual*</CFormLabel>
                <CFormSelect
                  id="validationCustom10"
                  name='Id_orientacion_sexual'
                  value={Id_orientacion_sexual}
                  onChange={onChangeFormulario}
                  required>
                  <option key={''} value={''}>Seleccione...</option>
                  {orientacion_sexuales?.length === 0
                    ? <option key={''} value={''}>Seleccione...</option>
                    : (
                      orientacion_sexuales?.map(item => (
                        <option
                          key={item.ID}
                          value={item.ID}
                        >
                          {item.Nombre}
                        </option>
                      ))
                    )}
                </CFormSelect>
                <CFormFeedback invalid>La orientación sexual es Requerida!</CFormFeedback>
              </CCol>
            </CRow>
            <CRow className="mt-2">
            <CCol md={3}>
                <CFormLabel htmlFor="validationCustom12">Corregimientos*</CFormLabel>
                <CFormSelect
                  id="validationCustom12"
                  name='Id_corregimiento'
                  value={Id_corregimiento}
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
                <CFormFeedback invalid>El Corregimiento es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={5}>
                <CFormLabel htmlFor="validationCustom13">Barrio Vereda*</CFormLabel>
                <CFormSelect
                  id="validationCustom13"
                  name='Id_barrio_vereda'
                  value={Id_barrio_vereda}
                  onChange={onChangeFormulario}
                  required>
                  <option key={'0'} value={''}>Seleccione...</option>
                  {barrios?.length === 0
                    ? <option key={'0'} value={0}>Seleccione...</option>
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
            <CCol md={4}>
                <CFormLabel htmlFor="validationCustom14">Direccion Miembro Consejo*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom14"
                  name='Direccion'
                  value={Direccion}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>La Direccion es Requerida!</CFormFeedback>
              </CCol>
            </CRow>
            <CRow className="mt-2">
            <CCol md={3}>
                <CFormLabel htmlFor="validationCustom15">Telefono*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom15"
                  name='Telefono'
                  value={Telefono}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El Telefono es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="validationCustom17">Correo electronico*</CFormLabel>
                <CFormInput
                  type="email"
                  id="validationCustom17"
                  name='Correo'
                  value={Correo}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El Correo electronico es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="validationCustom17">Fecha de Ingreso*</CFormLabel>
                <CFormInput
                  type="date"
                  id="validationCustom17"
                  name='Fecha_ingreso'
                  value={Fecha_ingreso}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>La Fecha Ingreso es Requerida!</CFormFeedback>
              </CCol>
             </CRow>
             <CRow className="mt-4">
            <CCol md={10} style={{ marginTop: '20px', marginBottom: '20px' }}>
               {cargando === true ? (
                  <CLoadingButton
                    color="success"
                    variant="outline"
                    style={{ width: '100%' }}
                    timeout={2000}
                  >
                    {' '}
                    {'Enviando datos...'}
                  </CLoadingButton>
                ) : (
                  <CButton
                    type="submit"
                    color={'success'}
                    className="px-4"
                    style={{ width: '100%' }}
                  >
                    {' '}
                    {'Enviar Datos Miembro Consejo'}
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
export default FormMiembrosModal


