/* eslint-disable prettier/prettier */
import { CCard, CCardBody, CCardHeader, CCol, CContainer, CFormSelect, CRow } from '@coreui/react'
import React from 'react'
const Concejos = () => {
  return (
    <>
      <CContainer fluid>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Concejos Comunitarios</strong> <small>Example</small>
          </CCardHeader>
          <CCardBody>
            <CRow className="justify-content-md-center">
              <CCol sm="auto">
                <CFormSelect aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">
                    Consejo Comunitario Ancestral de la Comunidad Afrodescendiente “RioAncho”
                  </option>
                  <option value="2">
                    Consejo Comunitario Ancestral de la Comunidad Negra de Campana“ Antonia Solano”
                  </option>
                  <option value="3">
                    Consejo Comunitario Afro de Santa Rita de la Sierra “COASARITA”
                  </option>
                  <option value="4">
                    Consejo Comunitario de la Comunidad negra “El Negro de Mingueo”
                  </option>
                  <option value="5">
                    Consejo comunitario Ancestral de la comunidad negra de la Punta de Los Remedios
                    “Laureano Moscote Lindo”
                  </option>
                  <option value="6">
                    Consejo Comunitario por la Reivindicación de los Afrodescendientes de Palomino
                    “COREAFROPA”
                  </option>
                  <option value="7">
                    Consejo Comunitario Ancestral Raices Negras del Rio Maria Mina “CCARMM”
                  </option>
                  <option value="8">
                    Consejo Comunitario de Comunidades Negras Nelson Mandela del MAMEY
                  </option>
                </CFormSelect>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CContainer>
    </>
  )
}
export default Concejos
