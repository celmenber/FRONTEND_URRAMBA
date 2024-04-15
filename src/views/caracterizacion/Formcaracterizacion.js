/* eslint-disable no-script-url */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CCardHeader,
  CCol,
  CRow,
  CContainer,
  CCardTitle,
} from '@coreui/react'
import CaracterizacionDG from './CaracterizacionDG'
import CaracterizacionOL from './CaracterizacionOL'
import CaracterizacionVI from './CaracterizacionVI'
import CaracterizacionAP from './CaracterizacionAP'
import CaracterizacionTC from './CaracterizacionTC'

const Caracterizacion = () => {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <>
      <CRow>
         <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
            <strong>Caracterizacion</strong> <small>Negritudes</small>
          </CCardHeader>
          <CCardHeader>
               <CCardTitle>
              <div className="ml-2">
                <div>BUSCAR JEFE HOGAR Y CARACERIZAR</div>
              </div>
            </CCardTitle>
          </CCardHeader>
        <CCardBody>
            <>
            <CNav variant="tabs" role="tablist">
              <CNavItem>
                <CNavLink
                  href="javascript:void(0)"
                  active={activeKey === 1}
                  onClick={() => setActiveKey(1)}
                >
                  DATOS GENERALES
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0)"
                  active={activeKey === 2}
                  onClick={() => setActiveKey(2)}
                >
                  OCUPACION Y CONDICION LABORAL
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0)"
                  active={activeKey === 3}
                  onClick={() => setActiveKey(3)}
                >
                  VIVIENDA E INFRAESTRUCTURA
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0)"
                  active={activeKey === 4}
                  onClick={() => setActiveKey(4)}
                >
                  SERVICIOS PUBLICOS
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0)"
                  active={activeKey === 5}
                  onClick={() => setActiveKey(5)}
                >
                  TERRITORIO Y CULTURA
                </CNavLink>
              </CNavItem>
            </CNav>
           {/*   <hr/> */}
            <CTabContent className="mt-5">
              <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                <CContainer>
                <CaracterizacionDG />
              </CContainer>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                 <CContainer>
                    <CaracterizacionOL />
                 </CContainer>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                 <CContainer>
                    <CaracterizacionVI />
                </CContainer>
              </CTabPane>
             <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 4}>
                     <CaracterizacionAP />
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 5}>
                 <CaracterizacionTC />
           </CTabPane>
            </CTabContent>
  </>
           </CCardBody>
          </CCard>
         </CCol>
      </CRow>
    </>
  )
}

export default Caracterizacion
