/* eslint-disable prettier/prettier */
import { CFormSelect, CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import React, { useState } from 'react'
const Parametros = () => {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <>
      <CNav variant="tabs" role="tablist">
        <CNavItem role="presentation">
          <CNavLink
            active={activeKey === 1}
            component="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected={activeKey === 1}
            onClick={() => setActiveKey(1)}
          >
            Municipio
          </CNavLink>
        </CNavItem>
        <CNavItem role="presentation">
          <CNavLink
            active={activeKey === 2}
            component="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected={activeKey === 2}
            onClick={() => setActiveKey(2)}
          >
            Corregimiento
          </CNavLink>
        </CNavItem>
        <CNavItem role="presentation">
          <CNavLink
            active={activeKey === 3}
            component="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected={activeKey === 3}
            onClick={() => setActiveKey(3)}
          >
            Veredas y Barrios
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane role="tabpanel" aria-labelledby="home-tab-pane" visible={activeKey === 1}>
          <CFormSelect aria-label="Default select example">
            <option>Seleccione un Municipio</option>
            <option value="1">Dibulla</option>
            <option value="2">Two</option>
          </CFormSelect>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="profile-tab-pane" visible={activeKey === 2}>
          <CFormSelect aria-label="Default select example">
            <option>Seleccione un Corregimiento</option>
            <option value="1">Las Flores</option>
            <option value="2">Campana</option>
          </CFormSelect>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="contact-tab-pane" visible={activeKey === 3}>
          <CFormSelect aria-label="Default select example">
            <option>Seleccione una opción</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3" disabled>
              Three
            </option>
          </CFormSelect>
        </CTabPane>
      </CTabContent>
    </>
  )
}
export default Parametros
