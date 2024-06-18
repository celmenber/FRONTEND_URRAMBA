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

import { EmpleadoForm } from 'src/hooks'


const EmpleadoNuevoModal = (Props) => {

  const {
    visibleE,
    setVisibleE,
  } = Props


    const {
        handleSubmit,
        onChangeFormulario,
        setValidated,
        validated,
        datoEmpleado,
        handleReset,
        obtenerAsociacion,
        obtenerBarrioVereda,
        obtenerPerfil,
        perfil,
        asociacion,
        cargando
    } = EmpleadoForm()

  const {
        Id_asociacion,
        Id_perfil,
        Documentos,
        Nombres,
        Apellidos,
        Barrio_vereda,
        Direccion,
        Telefono,
        Correo,
        Estado,
    } = datoEmpleado

    const handleClose = () => {
        handleReset()
        setValidated(false)
        setVisibleE(false)
    }


  useEffect(() => {
        // Consultar la api un asociacion
      obtenerPerfil();
      obtenerAsociacion();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <CModal size="xl" visible={visibleE} onClose={handleClose}>
                <CModalHeader>
                    <CModalTitle> <strong>Agregar empleado asociación</strong></CModalTitle>
                </CModalHeader>
                <CForm className="row g-3 needs-validation"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <CModalBody>
                        <CRow className="g-3">
                          <CCol md={6} style={{ marginTop: '15px' }}>
                            <CFormLabel htmlFor="validationCustom01">Asociacion*</CFormLabel>
                            <CFormSelect
                              id="validationCustom05"
                              name='Id_asociacion'
                              value={Id_asociacion}
                              onChange={onChangeFormulario}
                              required>
                              <option key={'0'} value={''}>Seleccione...</option>
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
                           <CFormFeedback invalid>La Asociacion es Requerida!</CFormFeedback>
                          </CCol>
                          <CCol md={3} style={{ marginTop: '15px' }}>
                            <CFormLabel htmlFor="validationCustom01">Perfil*</CFormLabel>
                            <CFormSelect
                              id="validationCustom05"
                              name='Id_perfil'
                              value={Id_perfil}
                              onChange={onChangeFormulario}
                              required>
                              <option key={'0'} value={''}>Seleccione...</option>
                               {perfil?.length === 0
                                ? <option key={'0'} value={0}>Seleccione...</option>
                                : (
                                 perfil?.filter(p=>p.ID !== 3).map(item => (
                                    <option
                                      key={item.ID}
                                      value={item.ID}
                                    >
                            {         item.NOMBRE}
                                    </option>
                                  ))
                                )}
                            </CFormSelect>
                           <CFormFeedback invalid>El perfil es Requerido!</CFormFeedback>
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
                            <CFormFeedback invalid>El estado es Requerido!</CFormFeedback>
                          </CCol>
                          </CRow>
                          <CRow className="g-6">
                          <CCol md={3} style={{ marginTop: '15px' }}>
                                <CFormLabel htmlFor="validationCustom01">Documento*</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="validationCustom01"
                                    name='Documentos'
                                    value={Documentos}
                                    onChange={onChangeFormulario}
                                    required />
                             <CFormFeedback invalid>El Documento es Requerido!</CFormFeedback>
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
                                   <CFormFeedback invalid>El Nombre es Requerido!</CFormFeedback>
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
                             <CFormFeedback invalid>El Apellido es Requerido!</CFormFeedback>
                            </CCol>
                        </CRow>
                          <CRow className="g-6">
                            <CCol md={7} style={{ marginTop: '15px' }}>
                             <CFormLabel htmlFor="validationCustom05">Barrio Vereda*</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="validationCustom05"
                                    name='Barrio_vereda'
                                    value={Barrio_vereda}
                                    onChange={onChangeFormulario}
                                    required />
                                 <CFormFeedback invalid>El Barrio o Vereda es Requerido!</CFormFeedback>
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
                                  <CFormFeedback invalid>La Direccion es Requerido!</CFormFeedback>
                            </CCol>
                        </CRow>
                        <CRow>
                <CCol md={4} style={{ marginTop: '15px' }}>
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
                            <CCol md={8} style={{ marginTop: '15px' }}>
                                <CFormLabel htmlFor="validationCustom01">Correo electronico*</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="validationCustom001"
                                    name='Correo'
                                    value={Correo}
                                    onChange={onChangeFormulario}
                                    required />
                             <CFormFeedback invalid>El correo electronico es Requerido!</CFormFeedback>
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
                                        Enviando Datos...
                                    </CLoadingButton>
                                ) : (
                                    <CButton
                                        type="submit"
                                        color={'success'}
                                        className="px-4"
                                        style={{ width: '100%' }}
                                    >
                                            {' '}
                                           {'Enviar Datos Empleado'}
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
