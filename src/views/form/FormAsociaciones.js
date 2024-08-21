/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { AsociacionForm } from '../../hooks'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormSelect,
  CFormFeedback,
  CSpinner,
  CTooltip,
  CCardTitle,
  CCollapse,
  CInputGroup,
} from '@coreui/react'
import { CLoadingButton } from '@coreui/react-pro';
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons'

 const Asociaciones = () => {
 const [visible, setVisible] = useState(false)

   const { handleSubmit,
            onChangeFormulario,
            obtenerAsociacion,
            obtenerMunicipio,
            EliminarAsociacion,
            Municipio,
            asociaciones,
            cargandolista,
            cargando,
            datoAsociacion,
            setDatoAsociacion,
            validated,
            handleActualizarAsociacion,
            nombreBotoGuardarActulizar,
            setNombreBotoGuardarActulizar
     } = AsociacionForm();


  useEffect(() => {
     // Consultar la api listar Municipio,
       obtenerMunicipio();
       obtenerAsociacion();
       // eslint-disable-next-line
     }, []);



     const EditaAsociacion = (event, item) => {
      event.preventDefault();
      setNombreBotoGuardarActulizar('Actualizar asociación');
       console.log(item);
      setDatoAsociacion({
        ID: item.ID,
        idMunicipio: item.id_municipio,
        nitAsociacion: item.nit,
        nombreAsociacion: item.nombre,
        documento: item.documento,
        nombrereprlegal: item.nom_rep_leg,
        correoAsociacion: item.correo,
        direccionAsociacion:item.direccion,
        telefonoAsociacion: item.telefono,
      });
        setVisible(true);
    };

  return (
    <><CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Asociaciones</strong> <small>Negritudes</small>
          </CCardHeader>
          <CCardBody>
            <CButton onClick={() => setVisible(!visible)} color="secondary" style={{ width: '100%' }}>
              {visible ? 'Cerrar Formulario' : 'Abrir Formulario'}
           </CButton>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
             <CCardTitle></CCardTitle>
             <CCollapse visible={visible}>
              <CRow className="mt-4">
              <CCol md={2}>
                <CFormLabel htmlFor="validationCustom01">Nit </CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom01"
                  defaultValue=""
                  name='nitAsociacion'
                  value={datoAsociacion.nitAsociacion}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El campo Nit Requerido!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationCustom02">Nombre Asociacion </CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom02"
                  defaultValue=""
                  name='nombreAsociacion'
                  value={datoAsociacion.nombreAsociacion}
                   onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El campo Nombre Asociacion Requerido!</CFormFeedback>
              </CCol>
              <CCol md={6}><CFormLabel htmlFor="basic-url">Represente Legal</CFormLabel>
              <CInputGroup className="mb-3">
                  <CFormInput
                  type="text"
                  id="validationCustom011"
                  placeholder="Documento"
                  defaultValue=""
                  name='documento'
                  value={datoAsociacion.documento}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormInput
                  style={{
                  width: '50%',
                  borderTopRightRadius:'5px',
                  borderBottomRightRadius:'5px'
                   }}
                  type="text"
                  id="validationCustom012"
                  defaultValue=""
                  name='nombrereprlegal'
                  placeholder="nombres completos"
                  value={datoAsociacion.nombrereprlegal}
                  onChange={onChangeFormulario}
                  required
                />
              </CInputGroup>
              </CCol>
              </CRow>
            <CRow>
              <CCol xs={3}>
                <CFormLabel htmlFor="validationCustom06" value={''}>Municipio</CFormLabel>
                <CFormSelect
                  key={'validationCustom06'}
                  name='idMunicipio'
                  id="idMunicipio"
                  value={datoAsociacion.idMunicipio}
                  onChange={onChangeFormulario}
                  required
                >
                  <option key={'validationCustom001'} value={''}>Seleccione...</option>
                  {Municipio?.length === 0
                    ? <option key={'validationCustom002'} value={0}>Seleccione...</option>
                    : (
                      Municipio?.filter(item => item.Estado !== null).map(item => (
                        <option
                          key={item.ID}
                          value={item.ID}
                        >
                          {item.Nombre}
                        </option>
                      ))
                    )}
                </CFormSelect>
                <CFormFeedback invalid>Seleccione un Municipio por favor.</CFormFeedback>
              </CCol>
               <CCol md={3}>
                <CFormLabel htmlFor="validationCustom03">Dirección </CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom03"
                  defaultValue=""
                  name='direccionAsociacion'
                  value={datoAsociacion.direccionAsociacion}
                   onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El campo Dirección Requerido!</CFormFeedback>
              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="validationCustom04">Telefono </CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom04"
                  defaultValue=""
                  name='telefonoAsociacion'
                  value={datoAsociacion.telefonoAsociacion}
                   onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El Telefono es Requerido!</CFormFeedback>
              </CCol>
                <CCol md={4}>
                <CFormLabel htmlFor="validationCustom05">Correo Electronico </CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom05"
                  defaultValue=""
                  name='correoAsociacion'
                  value={datoAsociacion.correoAsociacion}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El Correo Electronico Requerido!</CFormFeedback>
              </CCol>
              </CRow>
               <br />
               <CRow>
                  <CCol xs={12}>
                    {cargando === true ? (
                      <CLoadingButton
                        color="success"
                        variant="outline"
                        style={{ width: '100%' }}
                        timeout={2000}
                      >
                        {' '}
                        Enviando Concejo Comunitario
                      </CLoadingButton>
                    ) : (
                      <CButton
                      type="button"
                      color={'primary'}
                      variant="outline"
                      className="px-4"
                      style={{ width: '100%' }}
                      onClick={nombreBotoGuardarActulizar === 'Agregar Nueva Asociación' ? handleSubmit : handleActualizarAsociacion}
                    >
                      {nombreBotoGuardarActulizar}
                    </CButton>
                    )}
                  </CCol>
                 </CRow>
                 </CCollapse>
               </CForm>
              <hr />
              <CCol xs={12}>
                <CRow>
                  <CCol xs={12}>
                    {asociaciones.length === 0 ? (
                      <CTable>
                        <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell colSpan={8} className="text-center">
                              <h3>No hay datos </h3>
                            </CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                      </CTable>
                    ) : (
                       <CTable align="middle" className="mb-0 border" hover responsive>
                        <CTableHead color="light">
                          <CTableRow>
                            <CTableHeaderCell>Asociacion</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Nit</CTableHeaderCell>
                              <CTableHeaderCell className="text-center">Municipio</CTableHeaderCell>
                            <CTableHeaderCell className="text-center" colSpan={2}>...</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {cargandolista === true ? (
                              <CTableRow key={0}>
                                <CTableHeaderCell colSpan={8} className="text-center">
                                  <CSpinner aria-hidden="true" />
                                  <span
                                    style={{
                                      top: '-10px',
                                      position: 'relative',
                                    }}
                                  >
                                    {' '}
                                    Loading...
                                  </span>
                                </CTableHeaderCell>
                              </CTableRow>
                            ) : (
                            asociaciones.map((item, index) => (
                            <CTableRow v-for="item in tableItems" key={index}>
                              <CTableDataCell>
                                    <div><b>{item.nombre}</b></div>
                                     <div className="small text-medium-emphasis">
                                    <span>Representante legal: {'C.C:'}<span>{item.documento} {item.nom_rep_leg}</span></span>
                                  </div>
                                  <div className="small text-medium-emphasis">
                                   Correo:{' '} {item.correo}
                                  </div>
                                  <div className="small text-medium-emphasis">
                                   Telefono: {' '}  {item.telefono} | Dir: {' '} <span>{item.direccion}</span>
                                  </div>
                              </CTableDataCell>
                              <CTableDataCell className="text-center">
                              <div>{item.nit}</div>
                              </CTableDataCell>
                              <CTableDataCell className="text-center">
                              <div>{item.municipio}</div>
                              </CTableDataCell>
                              <CTableDataCell className="text-center">
                                    <div className="small text-medium-emphasis">
                                      <CTooltip
                                        content="Actualizar Asociación"
                                        placement="bottom"
                                      >
                                        <CButton style={{ 'width': '100%' }}
                                          color="info"
                                          variant="outline"
                                          size="lg"
                                          onClick={(event) => EditaAsociacion(event, item)}
                                        >
                                          {'Corregir Asociación'}
                                        </CButton></CTooltip>
                                    </div>
                              </CTableDataCell>
                               <CTableDataCell>
                                 <div className="small text-medium-emphasis">
                                     <CTooltip
                                          content="Eliminar Empleado" placement="bottom">
                                            <CButton style={{ 'width': '100%' }}
                                                 color="danger"
                                                  variant="outline"
                                                  size="lg"
                                                  onClick={() => EliminarAsociacion(item.ID)}
                                                  >
                                                   <CIcon icon={cilTrash} size="lg" />
                                                    </CButton>
                                                  </CTooltip>
                                                 </div>
                                               </CTableDataCell>
                            </CTableRow>
                            ))
                          )}
                        </CTableBody>
                      </CTable>
                     )}
                  </CCol>
                </CRow>
               </CCol>

          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
    </>
  )
}
export default Asociaciones
