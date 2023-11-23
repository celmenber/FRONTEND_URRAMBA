/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { EmpleadoForm } from '../../../hooks'
import { FormatoFecha } from '../../../helper'

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
  CFormCheck,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CSpinner,
  CTableDataCell,
  CPagination,
  CButtonGroup,
} from '@coreui/react'

const Formulario = () => {
  const {
    handleSubmit,
    onChangeFormulario,
    obtenerEmpleado,
    updateEmpleado,
    EliminarEmpleado,
    listaempleado,
    datoempleado,
    currentPage,
    setCurrentPage,
    validated,
    cargandoLista,
  } = EmpleadoForm()


  useEffect(() => {
    // Consultar la api listar detallesparques
    obtenerEmpleado();
    // eslint-disable-next-line
  }, []);




  const count = listaempleado.length;
  const current = 5

  const filterEmpleado = () => {
    return listaempleado?.slice(currentPage, currentPage + current)
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
  }



  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={3}>
        <CFormLabel htmlFor="validationCustom01">Documento</CFormLabel>
        <CFormInput
          type="text"
          id="validationCustom01"
          defaultValue=""
          name='documento'
          value={datoempleado.documento}
          onChange={onChangeFormulario}
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom03">Nombres - Apellidos Funcionario </CFormLabel>
        <CFormInput
          type="text"
          id="validationCustom03"
          defaultValue=""
          name='nombre'
          value={datoempleado.nombre}
          onChange={onChangeFormulario}
          required
        />
      </CCol>
        <CCol md={2}>
          <CFormLabel htmlFor="validationDesde04">Desde</CFormLabel>
          <CFormInput
            type="date"
            name='fechaInicio'
            id="validationCustom04"
            onChange={onChangeFormulario}
            value={datoempleado.fechaInicio}
            required />
        </CCol>
        <CCol md={2}>
          <CFormLabel htmlFor="validationHasta05">Hasta</CFormLabel>
          <CFormInput
            type="date"
            name='fechaFinal'
            id="validationCustom05"
            onChange={onChangeFormulario}
            min={datoempleado.fechaInicio}
            value={datoempleado.fechaFinal}
            required />
        </CCol>
        <CCol md={12}>
          <div>
            <CFormCheck
              type="radio"
              name="opciones"
              id="flexRadioDefault1"
              key={'flexRadioDefault1_1'}
              label="Todos"
              color="secondary"
              defaultChecked
              inline
              onChange={onChangeFormulario}
              value={0}
            />
            <CFormCheck
              type="radio"
              name="opciones"
              id="flexRadioDefault2"
              key={'flexRadioDefault2_2'}
              label="Por Documento"
              color="secondary"
              inline
              onChange={onChangeFormulario}
              value={1}
            />
            <CFormCheck
              type="radio"
              name="opciones"
              id="flexRadioDefault3"
              key={'flexRadioDefault3_3'}
              label="Por Nombres"
              color="secondary"
              inline
              onChange={onChangeFormulario}
              value={2}
            />
          <CFormCheck
            type="radio"
            name="opciones"
            id="flexRadioDefault4"
            key={'flexRadioDefault4_4'}
            label="Por Apellidos"
            color="secondary"
            inline
            onChange={onChangeFormulario}
            value={3}
          />
            <CFormCheck
              type="radio"
              name="opciones"
              id="flexRadioDefault5"
              key={'flexRadioDefault5_5'}
              label="Por Rango de Fechas"
              color="secondary"
              inline
              onChange={onChangeFormulario}
              value={4}
            />
          </div>
        </CCol>

        <CCol md={12}>
          <div>
            <CButton
              type='submit'
              color="secondary"
              style={{ width: '100%' }}
            >
              Ejecutar Busqueda
            </CButton>
          </div>
        </CCol>
        <hr />
        <CCol xs={12}>
          <CRow>
            <CCol xs={12}>
            {listaempleado.length === 0 ? (
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
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Documento </CTableHeaderCell>
                      <CTableHeaderCell scope="col">Nombres </CTableHeaderCell>
                      <CTableHeaderCell scope="col">Teléfono</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Correo</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Tipo empleado</CTableHeaderCell>
                     {/*  <CTableHeaderCell scope="col">Mensaje</CTableHeaderCell> */}
                      <CTableHeaderCell scope="col">Fecha Terminación</CTableHeaderCell>
                      <CTableHeaderCell scope="col" colSpan={2} style={{ textAlign: 'center' }}>...</CTableHeaderCell>
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
                        filterEmpleado().map((item, index) => (
                        <CTableRow key={'index'}>
                          <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                            <CTableDataCell >{item.TipoDocumento.NombreTipoDocumento}: {item.Documento}</CTableDataCell>
                          <CTableDataCell >{item.Nombres} {item.Apellidos}</CTableDataCell>
                          <CTableDataCell >{item.Telefono}</CTableDataCell>
                          <CTableDataCell >{item.Email}</CTableDataCell>
                          <CTableDataCell >{item.Tipo_empleado}</CTableDataCell>
                          <CTableDataCell >
                              {FormatoFecha(item.Fecha_terminacion)}
                          </CTableDataCell>
                            <CTableDataCell>
                              <CButton
                                style={{ textAlign: 'center' }}
                                color="info"
                                variant="outline"
                                 onClick={() => updateEmpleado(item.Id)}
                              > Sincronizar</CButton>
                            </CTableDataCell>
                          <CTableDataCell>
                            <CButton
                              style={{ textAlign: 'center' }}
                              color="danger"
                              variant="outline"
                              onClick={() => EliminarEmpleado(item.Id)}
                            > Eliminar</CButton>
                          </CTableDataCell>
                        </CTableRow>
                       ))
                    )}
                  </CTableBody>
                </CTable>
              )}
            </CCol>
            <CCol xs={12}>
              <CPagination size="sm" aria-label="Page navigation" style={{ float: 'right' }}>
                <CButtonGroup role="group" aria-label="Basic outlined example">
                  <CButton color="secondary"
                    onClick={prevPage}
                    disabled={
                      currentPage === 0 && (true)
                    }
                  >Anterior</CButton>
                  <CButton color="secondary"
                    onClick={nextPage}
                    disabled={
                      count < (currentPage + current + 1) && (true)
                    }
                  >Siguiente</CButton>
                </CButtonGroup>
              </CPagination>
            </CCol>
          </CRow>
        </CCol>
    </CForm>
  )
}

const FormEmpleado = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Funcionarios</strong> <small>C.A.R</small>
          </CCardHeader>
          <CCardBody>
            {Formulario()}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FormEmpleado