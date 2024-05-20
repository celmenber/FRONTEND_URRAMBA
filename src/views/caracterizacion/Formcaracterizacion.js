/* eslint-disable no-script-url */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
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
import { SelectPicker } from 'rsuite';
import '../../../node_modules/rsuite/dist/rsuite.css';

import CaracterizacionDG from './CaracterizacionDG'
import CaracterizacionOL from './CaracterizacionOL'
import CaracterizacionVI from './CaracterizacionVI'
import CaracterizacionAP from './CaracterizacionAP'
import CaracterizacionTC from './CaracterizacionTC'

import { CaracterizacionForm } from '../../hooks'

const Caracterizacion = () => {
  const {
         obtenerJefeHogar,
         JefeHogar,
         userDetails
       } = CaracterizacionForm();

  const [activeKey, setActiveKey] = useState(1)
  const [value, setValue] = useState(0)

    useEffect(() => {
    // Consultar la api listar parques
    obtenerJefeHogar();
    // eslint-disable-next-line
  }, []);

    useEffect(() => {
    // Consultar la api listar parques
     localStorage.setItem("IdJefeHogar", value);
    // eslint-disable-next-line
  }, [value]);

  let data
  if(userDetails.USER_ROL === 'Administrador') {
     data = JefeHogar?.map(
        item => ({
              label: item.documentos+' '+ item.nombres.toUpperCase() +' '+item.apellidos.toUpperCase(),
              value: item.ID.toString()
        })
    );
  }else{
     data = JefeHogar?.filter(C => C.id_usuario === userDetails.ID_USER).map(
        item => ({
            label: item.documentos+' '+ item.nombres.toUpperCase() +' '+item.apellidos.toUpperCase(),
            value: item.ID.toString()
        })
    );
  }


  return (
    <>
      <CRow>
         <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
            <strong>Caracterizacion</strong> <small>Negritudes</small>
          </CCardHeader>
          <CCardHeader>
              <div className="ml-2">
                   <SelectPicker
                   data={data}
                   placeholder="JEFE DE HOGAR A CARACTERIZAR"
                   name="datoJefeHogar"
                   value={value}
                   onChange={setValue}
                   size="lg"
                   block
                   />
              </div>
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
                <CaracterizacionDG setActiveKey={setActiveKey} />
              </CContainer>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                 <CContainer>
                    <CaracterizacionOL setActiveKey={setActiveKey} />
                 </CContainer>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                 <CContainer>
                    <CaracterizacionVI setActiveKey={setActiveKey} />
                </CContainer>
              </CTabPane>
             <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 4}>
                     <CaracterizacionAP setActiveKey={setActiveKey} />
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 5}>
                 <CaracterizacionTC setActiveKey={setActiveKey} />
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
