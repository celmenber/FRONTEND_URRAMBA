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
import { MiembroForm } from 'src/hooks';



const FormMiembrosActModal = (Props) => {


    const handleClose = () => {
        handleReset()
      setVisibleMI(false)
    }

    const {
      visibleMI,
      setVisibleMI,
      datoMiembro,
      onChangeFormulario,
      handleSubmitAct,
    } = Props

  const {
  
    handleReset,
    validated,
    obtenerConcejo,
    obtenercorregimiento,
    obtenerAsociacion,
    obtenertipodocumento,
    obtenerBarrioVereda,
   
    barrios,
    consejos,
    tipodocumento,
    corregimiento,
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
    Sexo,
    Genero,
    Orientacion_sexual,
    Direccion,
    Telefono,
    Estado,
    Fecha_nacimiento,
    Fecha_ingreso
  } = datoMiembro


    // const handleSubmitAct = (event) => {
    //     event.preventDefault();
    //     const form = event.currentTarget
    //     if (form.checkValidity() === false) {
    //         event.preventDefault()
    //         event.stopPropagation()
    //     } else {
    //         setVisibleMI(false)
    //     }
    //     setValidated(true)
    // }

    useEffect(() => {
      // Consultar la api un asociacion
  
      obtenerAsociacion();
  
  
      // eslint-disable-next-line
    }, []);
    useEffect(() => {
      // Consultar la api un asociacion
  
      obtenerConcejo();
      obtenertipodocumento();
      obtenercorregimiento();
      // eslint-disable-next-line
    }, []);
    useEffect(() => {
      // Consultar la api un barrios
      obtenerBarrioVereda();
      // eslint-disable-next-line
    }, []);

    return (
        <>
        <CModal size="xl" visible={visibleMI} onClose={handleClose}>
          <CModalHeader>
            <CModalTitle> <strong>Editar miembro consejo</strong></CModalTitle>
          </CModalHeader>
          <CForm className="row g-3 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmitAct}
          >
            <CModalBody>
            <CRow className="g-3">
              <CCol md={4} style={{ marginTop: '15px' }}>
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
                          {item.Nombre_concejo_comunitario}
                        </option>
                      ))
                    )}
                </CFormSelect>
                <CFormFeedback invalid>El campo Asociacion es Requerido!</CFormFeedback>
              </CCol>

              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom02">Estado*</CFormLabel>
                <CFormSelect
                  id="validationCustom02"
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
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom04">Tipo Documento*</CFormLabel>
                <CFormSelect
                  id="validationCustom04"
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
                          {item.Nombre}
                        </option>
                      ))
                    )}
                </CFormSelect>
                <CFormFeedback invalid>El campo es Requerido!</CFormFeedback>
              </CCol>
           
            </CRow>

            <CRow className="g-3">
            
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom05">Documento Miembro Consejo*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom05"
                  name='Documentos'
                  value={Documentos}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El campo Documentos es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom03">Nombre Miembro Consejo*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom03"
                  name='Nombres'
                  value={Nombres}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El campo Documentos es Requerido!</CFormFeedback>
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
                <CFormFeedback invalid>El campo Apellidos es Requerido!</CFormFeedback>
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
                  <option value={'Femenino'}>Femenino</option>
                  <option value={'Masculino'}>Masculino</option>
                </CFormSelect>
                <CFormFeedback invalid>El campo Genero es Requerido!</CFormFeedback>
              </CCol>
             
            
            <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom10">Orientación Sexual*</CFormLabel>
                <CFormSelect
                  id="validationCustom10"
                  name='Orientacion_sexual'
                  value={Orientacion_sexual}
                  onChange={onChangeFormulario}
                  type='number'
                  required>
                  <option value={0}>Seleccione...</option>
                  <option value={1}>Fe</option>
                  <option value={2}>Ma</option>
                </CFormSelect>
                <CFormFeedback invalid>El campo Sexo es Requerido!</CFormFeedback>
              </CCol>
               <CCol md={4} style={{ marginTop: '15px' }}>
              
                <CFormLabel htmlFor="validationCustom07">Sexo*</CFormLabel>
                <CFormSelect
                  id="validationCustom07"
                  name='Sexo'
                  value={Sexo}
                  onChange={onChangeFormulario}
                  required>
                  <option value={''}>Seleccione...</option>
                  <option value={'Mujer'}>Mujer</option>
                  <option value={'Hombre'}>Hombre</option>
                </CFormSelect>
                <CFormFeedback invalid>El campo Sexo es Requerido!</CFormFeedback>
              </CCol>

             
            
            </CRow>

            <CRow>
            <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom05">Corregimientos*</CFormLabel>
                <CFormSelect
                  id="validationCustom05"
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
                <CFormFeedback invalid>El campo Corregimientos es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom05">Barrio Vereda*</CFormLabel>
                <CFormSelect
                  id="validationCustom05"
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
                <CFormFeedback invalid>El campo Barrio Vereda es Requerido!</CFormFeedback>
              </CCol>

            <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom08">Direccion Miembro Consejo*</CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom08"
                  name='Direccion'
                  value={Direccion}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El campo Direccion Miembro Consejo es Requerido!</CFormFeedback>
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
            

              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom11">Fecha Nacimiento*</CFormLabel>
                <CFormInput
                  type="date"
                  id="validationCustom11"
                  name='Fecha_nacimiento'
                  value={Fecha_nacimiento}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El campo Fecha Nacimiento es Requerido!</CFormFeedback>
              </CCol>
              <CCol md={4} style={{ marginTop: '15px' }}>
                <CFormLabel htmlFor="validationCustom12">Fecha de Ingreso*</CFormLabel>
                <CFormInput
                  type="date"
                  id="validationCustom12"
                  name='Fecha_ingreso'
                  value={Fecha_ingreso}
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>El campo Fecha Ingresp es Requerido!</CFormFeedback>
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
export default FormMiembrosActModal
