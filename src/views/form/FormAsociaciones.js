/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { AsociacionForm } from '../../hooks'
// import { FormatoFecha } from '../../helper/index'
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
  CPagination,
  CFormSelect,
  CFormFeedback,
  CSpinner,
  CFormCheck,
  CButtonGroup,
} from '@coreui/react'

 const Contactenos = () => {
   const { handleSubmit,
           onChangeFormulario,
            crearNuevoAsociacion,
            updateAsociacion,
            obtenerAsociacion,
            obtenerMunicipio,
            EliminarAsociacion,
            asociacioncodeditar,
            Municipio,
            userDetails,
            asociacioncodigo,
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
/*
  useEffect(() => {
    // Consultar la api listar detallesparques
    obtenerContacto();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // Consultar la api listar detallesparques
    obtenerContactoAsunto();
    // eslint-disable-next-line
  }, []);

  const count = listacontacto.length;
  const current = 5

  const filterContacts = () => {
    return listacontacto?.slice(currentPage, currentPage + current)
  }
  const nextPage = () => {

    if (count > currentPage + current) {
      setCurrentPage(currentPage + current);
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - current);
    }
  } */
   console.log(Municipio)

  return (
    <><CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Correos</strong> <small>Contactenos</small>
          </CCardHeader>
          <CCardBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CCol xs={12}>
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
              </CCol>

              <CCol md={3}>
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
              <CCol md={9}>
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
              <CCol md={6}>
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
              <CCol xs={12}>
                <CFormLabel htmlFor="validationCustom06" value={''}>Municipio</CFormLabel>
               <CFormSelect
                  key={'validationCustom06'}
                  name='idMunicipio'
                  id="idMunicipio"
                  value={datoAsociacion.idMunicipio}
                  onChange={onChangeFormulario}
                  required
                >
                  <option Key={'validationCustom001'} value={''}>Seleccione...</option>
                  {Municipio?.length === 0
                    ? <option Key={'validationCustom002'} value={0}>Seleccione...</option>
                    : (
                      Municipio?.map(item => (
                        <option
                          Key={item.ID}
                          value={item.ID}
                        >
                          {item.Nombre}
                        </option>
                      ))
                    )}
                </CFormSelect>
                <CFormFeedback invalid>Seleccione un Municipio por favor.</CFormFeedback>
              </CCol>
              <hr />
              <CCol xs={12}>
                <CRow>
                  <CCol xs={12}>
                 {/*    {listacontacto.length === 0 ? (
                      <CTable>
                        <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell colSpan={8} className="text-center">
                              <h3>No hay datos </h3>
                            </CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                      </CTable>
                    ) : ( */}
                      <CTable>
                      {/*  <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Parques </CTableHeaderCell>
                            <CTableHeaderCell scope="col">Nombres </CTableHeaderCell>
                            <CTableHeaderCell scope="col">Teléfono</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Correo</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Asunto</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Mensaje</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Fecha envio</CTableHeaderCell>
                            <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>...</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                      <CTableBody>
                          {cargandoLista === true ? (
                            <CTableRow key={0} >
                              <CTableHeaderCell colSpan={8} className="text-center">
                                <CSpinner aria-hidden="true" />
                                <span style={{
                                  top: '-10px',
                                  position: 'relative'
                                }}> Loading...</span>
                              </CTableHeaderCell>
                            </CTableRow>
                          ) : (
                            filterContacts().map((item, index) => (
                              <CTableRow key={index}>
                                <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                                <CTableDataCell >{BuscaParque(item.Idparques)}</CTableDataCell>
                                <CTableDataCell >{item.Nombres}</CTableDataCell>
                                <CTableDataCell >{item.Telefono}</CTableDataCell>
                                <CTableDataCell >{item.Email}</CTableDataCell>
                                <CTableDataCell >{item.Asuntocontacto.NombreAsunto}</CTableDataCell>
                                <CTableDataCell >{item.Mensaje}</CTableDataCell>
                              {/*   <CTableDataCell >
                                  {FormatoFecha(item.FechaCreacion)}
                                </CTableDataCell> *
                                <CTableDataCell>
                                  <CButton
                                    style={{ textAlign: 'center' }}
                                    color="danger"
                                    variant="outline"
                                    onClick={() => EliminarContactos(item.Id)}
                                  > Eliminar</CButton>
                                </CTableDataCell>
                              </CTableRow>
                            ))
                          )}
                        </CTableBody> */}
                      </CTable>
                  {/*   )} */}
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
