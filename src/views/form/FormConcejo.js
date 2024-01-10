/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { ConcejoForm } from '../../hooks'
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

const FormConcejo = () => {
  const {
    handleSubmit,
    onChangeFormulario,
    obtenerConcejo,
    obtenerMunicipio,
    obtenerAutoridadT,
    obtenerAsociacion,
    EliminarConcejo,
    Concejo,
    Municipio,
    Asociaciones,
    Autoridad,
    cargandolista,
    cargando,
    validated,
    datoConcejo
  } = ConcejoForm();


  useEffect(() => {
    // Consultar la api listar detallesparques
    obtenerConcejo();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // Consultar la api listar detallesparques
    setTimeout(() => {
      obtenerAutoridadT();
    }, 500);
    // eslint-disable-next-line
  }, []);


  useEffect(() => {
    // Consultar la api listar Municipio,
    setTimeout(() => {
    obtenerMunicipio();
    }, 600);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // Consultar la api listar detallesparques
    setTimeout(() => {
      obtenerAsociacion();
    }, 700);
    // eslint-disable-next-line
  }, []);


  return (
    <><CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Concejos Comunitarios</strong> <small>Negritudes</small>
          </CCardHeader>
          <CCardBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CCol md={3}>
                <CFormLabel htmlFor="validationCustom01">Nit </CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom01"
                  defaultValue=""
                  name='nitConcejo'
                  value={datoConcejo.nitConcejo}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El campo Nit Requerido!</CFormFeedback>
              </CCol>
              <CCol md={9}>
                <CFormLabel htmlFor="validationCustom02">Nombre Concejo Comunitario </CFormLabel>
                <CFormInput
                  type="text"
                  id="validationCustom02"
                  defaultValue=""
                  name='nombreAsociacion'
                  value={datoConcejo.nombreAsociacion}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>El campo Nombre Concejo Comunitario Requerido!</CFormFeedback>
              </CCol>
              <CRow>
              <CCol xs={4}>
                <CFormLabel htmlFor="validationCustom03" value={''}>Asociacion</CFormLabel>
                <CFormSelect
                  key={'validationCustom03'}
                  name='id_asociacion'
                  id="idAsociacion"
                  value={datoConcejo.id_asociacion}
                  onChange={onChangeFormulario}
                  required
                >
                  <option Key={'validationCustom0010'} value={''}>Seleccione...</option>
                    {Asociaciones?.length === 0
                    ? <option Key={'validationCustom0011'} value={0}>Seleccione...</option>
                    : (
                      Asociaciones?.map(item => (
                        <option
                          Key={item.ID}
                          value={item.ID}
                        >
                          {item.Nombre}
                        </option>
                      ))
                    )}
                </CFormSelect>
                  <CFormFeedback invalid>Seleccione Asociación por favor.</CFormFeedback>
                </CCol>
                <CCol xs={4}>
                  <CFormLabel htmlFor="validationCustom04" value={''}>Autoridad tradicional</CFormLabel>
                  <CFormSelect
                    key={'validationCustom04'}
                    name='id_autoridad_tradicional'
                    id="idAutoridad_tradicional"
                    value={datoConcejo.id_autoridad_tradicional}
                    onChange={onChangeFormulario}
                    required
                  >
                    <option Key={'validationCustom001'} value={''}>Seleccione...</option>
                    {Autoridad?.length === 0
                      ? <option Key={'validationCustom002'} value={0}>Seleccione...</option>
                      : (
                        Autoridad?.filter(item => item.Estado !== '0').map(item => (
                          <option Key={item.ID} value={item.ID}>
                            {item.nombres+" "+item.apellidos}
                          </option>
                        ))
                      )}
                  </CFormSelect>
                  <CFormFeedback invalid>Seleccione Autoridad tradicional por favor.</CFormFeedback>
                </CCol>
                <CCol xs={4}>
                  <CFormLabel htmlFor="validationCustom05" value={''}>Municipio</CFormLabel>
                  <CFormSelect
                    key={'validationCustom05'}
                    name='idMunicipio'
                    id="idMunicipio"
                    value={datoConcejo.idMunicipio}
                    onChange={onChangeFormulario}
                    required
                  >
                    <option Key={'validationCustom001'} value={''}>Seleccione...</option>
                    {Municipio?.length === 0
                      ? <option Key={'validationCustom002'} value={0}>Seleccione...</option>
                      : (
                        Municipio?.filter(item => item.Estado !== null).map(item => (
                          <option
                            Key={item.ID}
                            value={item.ID}
                          >
                            {item.Nombre}
                          </option>
                        ))
                      )}
                  </CFormSelect>
                  <CFormFeedback invalid>Seleccione Municipio por favor.</CFormFeedback>
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
                    Enviando Concejo Comunitario
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
                    {'Agregar Nuevo Concejo Comunitario'}
                  </CButton>
                )}
              </CCol>

              <hr />
              <CCol xs={12}>
                <CRow>
                  <CCol xs={12}>
                    {Concejo.length === 0 ? (
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
                              Concejo.map((item, index) => (
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
                                <CTableDataCell>{item.municipio}</CTableDataCell>
                                <CTableDataCell>
                                  <CButton variant="outline" style={{ width: '100%' }}>Corregir Concejo Comunitario</CButton>
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
export default FormConcejo
