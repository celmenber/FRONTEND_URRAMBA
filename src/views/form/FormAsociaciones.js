/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
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
} from '@coreui/react'
import { CLoadingButton } from '@coreui/react-pro';
/* import { cilLockLocked, cilLockUnlocked, cilPeople } from '@coreui/icons'
import CIcon from '@coreui/icons-react' */

 const Contactenos = () => {
   const { handleSubmit,
            onChangeFormulario,
            obtenerAsociacion,
            obtenerMunicipio,
          /*   EliminarAsociacion,
            asociacioncodeditar, */
            Municipio,
            asociaciones,
            cargandolista,
            cargando,
            datoAsociacion,
            validated
     } = AsociacionForm();


  useEffect(() => {
     // Consultar la api listar Municipio,
       obtenerMunicipio();
       // eslint-disable-next-line
     }, []);

   useEffect(() => {
     // Consultar la api listar detallesparques
     obtenerAsociacion();
     // eslint-disable-next-line
   }, []);
 //  console.log(asociaciones)

  return (
    <><CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Asociaciones</strong> <small>Negritudes</small>
          </CCardHeader>
          <CCardBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
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
              <CCol md={6}>
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
                <CFormFeedback invalid>El campo Correo Electronico Requerido!</CFormFeedback>
              </CCol>
              </CRow>
            <CRow>
              <CCol xs={5}>
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
               <CCol md={4}>
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
              <CCol md={3}>
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
                <CFormFeedback invalid>El campo Telefono Requerido!</CFormFeedback>
              </CCol>
              </CRow>
              <CCol xs={12}>
                {cargando === true ? (
                  <CLoadingButton
                    color="success"
                    variant="outline"
                    style={{ width: '100%' }}
                    timeout={2000}
                  >
                    {' '}
                    Enviando Asociación
                  </CLoadingButton>
                ) : (
                  <CButton
                    type="submit"
                    color={'primary'}
                    variant="outline"
                    className="px-4"
                    style={{ width: '100%' }}
                  >
                    {' '}
                    {'Agregar Nueva Asociación'}
                  </CButton>
                )}
              </CCol>
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
                            <CTableHeaderCell></CTableHeaderCell>
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
                                  <div>{item.Nombre}</div>
                                <div className="small text-medium-emphasis">
                                    <span>{item.correo}</span> | Telefono: {' '}
                                    {item.telefono}

                                </div>
                                  <div className="small text-medium-emphasis">
                                    <span>{item.direccion}</span>
                                  </div>
                              </CTableDataCell>
                              <CTableDataCell className="text-center">
                                  <div>{item.Nit}</div>
                              </CTableDataCell>
                                <CTableDataCell className="text-center">{item.municipio}</CTableDataCell>
                              <CTableDataCell>
                                    <CButton variant="outline" style={{ width: '100%' }}>Corregir Asociacion</CButton>
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
            </CForm>

          </CCardBody>

        </CCard>
      </CCol>

    </CRow>
    </>
  )
}
export default Contactenos
