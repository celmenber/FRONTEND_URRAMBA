/* eslint-disable prettier/prettier */
import {
  CCard,
  CCol,
  CFormSelect,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
} from '@coreui/react'
import React, { useState } from 'react'
const Reportes = () => {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <>
      <CCard className="p-2">
        <CCard className="p-2">
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
                reporte uno
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
                reporte dos
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
               reporte tres
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent>
            <CTabPane role="tabpanel" aria-labelledby="home-tab-pane" visible={activeKey === 1}>
              <CCard xs={2} className="p-2">
                <CRow>
                  <CCol xs={4}>
                    reporte dos
                  </CCol>
                </CRow>
              </CCard>
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="profile-tab-pane" visible={activeKey === 2}>
              <CCard className="p-2">
                <CRow>
                  <CCol xs={4}>
                    reporte dos
                  </CCol>
                </CRow>
              </CCard>
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="profile-tab-pane" visible={activeKey === 3}>
              <CCard className="p-2">
                <CRow>
                  <CCol xs={4}>
                    reporte tres
                  </CCol>
                </CRow>
              </CCard>
            </CTabPane>
          </CTabContent>
        </CCard>
      </CCard>
    </>
  )
}
export default Reportes
