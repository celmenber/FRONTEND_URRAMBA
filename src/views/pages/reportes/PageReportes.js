/* eslint-disable prettier/prettier */
import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CFormSelect, CRow } from '@coreui/react'
//import { DocsCallout } from 'src/components'

const Reportes = () => {
  return (
    <CRow>
      <CCol xs={12}>
       {/*  <DocsCallout name="Form Select" href="forms/select" /> */}
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Select</strong> <small>Lista De Reportes</small>
          </CCardHeader>
          <CCardBody>
                      <CFormSelect size="lg" aria-label="Default select example">
                <option>Select Reportes</option>
                          <option value="1">Detalle factura</option>
                          <option value="2">Abonos reservas</option>
                          <option value="3">Remision Parques</option>
                          <option value="4">Facturas por Parque</option>
                          <option value="5">Reservas por Parque</option>
                          <option value="6">Facturas Contabilidad</option>
                          <option value="7">Facturas con descuento</option>
                          <option value="8">Remision Recaudos Parques</option>
              </CFormSelect>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default Reportes
