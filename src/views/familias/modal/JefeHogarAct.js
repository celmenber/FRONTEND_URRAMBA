/* eslint-disable prettier/prettier */
import React, {useEffect } from 'react'
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


import { JefeHogarForm } from 'src/hooks/useJefeHogarForm';


const JefeHogarAct = (Props) => {
  const handleClose = () => {
    handleReset()
  setVisibleMI(false)
}

const {
  visibleMI,
  setVisibleMI,
  datoJefeHogar,
  onChangeFormulario,
  handleSubmitAct,
  validated,
} = Props
const {
  handleReset,
  obtenerAsociacion,
  obtenerEscolaridad,
  obtenerOrientacionSexual,
  obtenerConcejo,
  obtenertipodocumento,
  obtenercorregimiento,
  obtenerBarrioVereda,
  barrios,
  consejos,
  tipodocumento,
  corregimiento,
  escolaridades,
  orientacion_sexuales,
  } = JefeHogarForm()

const {
  Id_concejo_comunitario,
  Id_orientacion_sexual,
  Id_corregimiento,
  Id_tipo_documento,
  Documentos,
  Nombres,
  Apellidos,
  Id_escolaridad,
  Estado_escolaridad,
  Sexo,
  Genero,
  Barrio_vereda,
  Direccion,
  Telefono,
  Estado,
  Fecha_nacimiento,
  Fecha_ingreso,
  Correo
} = datoJefeHogar

useEffect(() => {
  // Consultar la api un asociacion
  obtenerAsociacion();
  obtenerConcejo();
  obtenertipodocumento();
  obtenercorregimiento();
  obtenerEscolaridad();
  obtenerOrientacionSexual();
  obtenerBarrioVereda();

  // eslint-disable-next-line
}, []);

//console.log({validated})

return (
  <>
  <CModal size="xl" visible={visibleMI} onClose={handleClose}>
    <CModalHeader>
      <CModalTitle> <strong>Editar Jefe de Hogar</strong></CModalTitle>
    </CModalHeader>
    <CForm className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmitAct}
    >
      <CModalBody>
      <CRow className="g-3">
        <CCol md={10} style={{ marginTop: '15px' }}>
          <CFormLabel htmlFor="validationCustom01">Consejo Comunitario*</CFormLabel>
          <CFormSelect
            id="validationCustom01"
            name='Id_concejo_comunitario'
            value={Id_concejo_comunitario}
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
                    {item.nombre_concejo_comunitario}
                  </option>
                ))
              )}
          </CFormSelect>
          <CFormFeedback invalid>El campo Asociacion es Requerido!</CFormFeedback>
        </CCol>

        <CCol md={2} style={{ marginTop: '15px' }}>
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
          <CFormFeedback invalid>El campo Estado es Requerido!</CFormFeedback>
        </CCol>
      </CRow>
      <CRow className="mt-3 g-3">
         <CCol md={4}>
              <CFormLabel htmlFor="validationCustom01">Documento: </CFormLabel>
                                <CInputGroup className="mb-3">
                                  <CFormSelect
                                  type='text'
                                  id="Id_tipo_documento"
                                  name="Id_tipo_documento"
                                  placeholder="Tipo Documento"
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
                                  type="number"
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
        <CCol md={4} style={{ marginTop: '15px' }}>
          <CFormLabel htmlFor="validationCustom05">Nombres*</CFormLabel>
          <CFormInput
            type="text"
            id="validationCustom05"
            name='Nombres'
            value={Nombres}
            onChange={onChangeFormulario}
            required />
          <CFormFeedback invalid>El Nombre es Requerido!</CFormFeedback>
        </CCol>
        <CCol md={4} style={{ marginTop: '15px' }}>
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
      <CRow>
      <CCol md={4} style={{ marginTop: '15px' }}>
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
        <CCol md={4} style={{ marginTop: '15px' }}>
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
          <CFormFeedback invalid>El Estado Escolaridad es Requerido!</CFormFeedback>
        </CCol>
          <CCol md={4} style={{ marginTop: '15px' }}>
          <CFormLabel htmlFor="validationCustom16">Fecha Nacimiento*</CFormLabel>
          <CFormInput
            type="date"
            id="validationCustom16"
            name='Fecha_nacimiento'
            value={Fecha_nacimiento}
            onChange={onChangeFormulario}
            required />
          <CFormFeedback invalid>La Fecha Nacimiento es Requerida!</CFormFeedback>
        </CCol>
      </CRow>

      <CRow>
      <CCol md={4} style={{ marginTop: '15px' }}>
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
      <CCol md={4} style={{ marginTop: '15px' }}>
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
        <CFormFeedback invalid>El sexo es Requerido!</CFormFeedback>
      </CCol>
      <CCol md={4} style={{ marginTop: '15px' }}>
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
          <CFormFeedback invalid>La orientación sexual es Requerido!</CFormFeedback>
        </CCol>
      </CRow>
      <CRow>
      <CCol md={4} style={{ marginTop: '15px' }}>
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
      <CCol md={5} style={{ marginTop: '15px' }}>
          <CFormLabel htmlFor="validationCustom13">Barrio Vereda*</CFormLabel>
          <CFormInput
            type="text"
            id="validationCustom14"
            name='Barrio_vereda'
            value={Barrio_vereda}
            onChange={onChangeFormulario}
            required />
          {/* <CFormSelect
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
          </CFormSelect> */}
          <CFormFeedback invalid>El Barrio o Vereda es Requerido!</CFormFeedback>
        </CCol>
      <CCol md={3} style={{ marginTop: '15px' }}>
          <CFormLabel htmlFor="validationCustom14">Direccion*</CFormLabel>
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

      <CRow>
      <CCol md={3} style={{ marginTop: '15px' }}>
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
        <CCol md={6} style={{ marginTop: '15px' }}>
          <CFormLabel htmlFor="validationCustom17">Correo*</CFormLabel>
          <CFormInput
            type="text"
            id="validationCustom17"
            name='Correo'
            value={Correo}
            onChange={onChangeFormulario}
            required />
          <CFormFeedback invalid>El correo electronico es Requerido!</CFormFeedback>
        </CCol>
        <CCol md={3} style={{ marginTop: '15px' }}>
          <CFormLabel htmlFor="validationCustom17">Fecha de Ingreso*</CFormLabel>
          <CFormInput
            type="date"
            id="validationCustom17"
            name='Fecha_ingreso'
            value={Fecha_ingreso}
            onChange={onChangeFormulario}
            required />
          <CFormFeedback invalid>la Fecha Ingreso es Requerida!</CFormFeedback>
        </CCol>

      </CRow>

        <CRow>
          <CCol md={10} style={{ marginTop: '20px', marginBottom: '20px' }}>

              <CButton
                type="submit"
                color={'primary'}
                className="px-4"
                style={{ width: '100%' }}
              >{' '}
               {'Actualizar Datos Jefe Hogar'}
              </CButton>

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

export default JefeHogarAct;
