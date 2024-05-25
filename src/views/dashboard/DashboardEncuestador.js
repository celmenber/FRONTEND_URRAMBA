/* eslint-disable prettier/prettier */
import { CCard, CCardBody, CCol, CProgress, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {
  cilQrCode,
  cilNewspaper,
  cilPeople,
  cilUser,
} from '@coreui/icons'
import React, { useEffect } from 'react';
import { JefeHogarForm ,CaracterizacionForm} from 'src/hooks'
import { FormatoHoy } from 'src/helper'
const DashboardEncuestador = () => {
  const {
       userDetails,
       obtenerJefeHogar,
        jefeHogar,
        } = JefeHogarForm()

  const {
         obtenerCaratacterizacion,
         caracterizacion,
       } = CaracterizacionForm();

  useEffect(() => {
      obtenerJefeHogar();
       // eslint-disable-next-line
  }, []);

  useEffect(() => {
      obtenerCaratacterizacion();
       // eslint-disable-next-line
  }, []);

    const TtalJH = jefeHogar.length;
    const FILTROJefeHogar = jefeHogar?.filter(U => U.fecha_ingreso === FormatoHoy());
    const TtalJHNEW = FILTROJefeHogar.length;


    const lstCaracterizacion = caracterizacion?.filter(C => C.id_usuario === userDetails.ID_USER);
    const TtalCTZ = lstCaracterizacion.length;

    const GRAFICASCTZ = [
                    { title: 'Caracterizados',
                      icon: cilQrCode,
                      percent: (TtalJH * TtalCTZ )/100,
                      value: TtalCTZ,
                      value1: 0
                     },
                    { title: 'Pendiente por Caracterizar',
                      icon: cilNewspaper,
                      percent: (TtalJH * (TtalJH - TtalCTZ))/100,
                      value: (TtalJH - TtalCTZ),
                      value1: 1
                    },
                  ]

    const GRAFICASJH = [
                          { title: 'Jefes de Hogar', icon: cilPeople,
                            percent: (TtalJH * TtalJH )/100,
                            value: TtalJH, value1: 0 },
                          { title: 'Nuevos Jefes de Hogar', icon: cilUser,
                            percent: (TtalJH * TtalJHNEW )/100,
                            value: TtalJHNEW,  value1: 1},
                        ]

  return (
    <>
      <CCard className="mb-4">
        <CRow>
           <CCol xs>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Total Nucleo Hogar</div>
                        <div className="fs-5 fw-semibold">{TtalJH}</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Nuevo Nucleo Hogar</div>
                        <div className="fs-5 fw-semibold">{TtalJHNEW}</div>
                      </div>
                    </CCol>
                  </CRow>
                  <hr className="mt-1" />
                    {GRAFICASJH.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin
                        color={item.value1 === 0 ? "danger" :"info" }
                        value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Caracterizados</div>
                        <div className="fs-5 fw-semibold">{TtalCTZ}</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Por Caracterizar</div>
                        <div className="fs-5 fw-semibold">{Math.abs(TtalCTZ - TtalJH)}</div>
                      </div>
                    </CCol>
                  </CRow>
                  <hr className="mt-1" />
                  {GRAFICASCTZ.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                           {item.value}{' '}
                           <span className="text-medium-emphasis small">({item.percent}%)</span>
                          </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color={item.value1 === 0 ? "success" :"warning" } value={item.value} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>
            </CCardBody>
        </CCol>
      </CRow>
      </CCard>
    </>
  )
}
export default DashboardEncuestador
