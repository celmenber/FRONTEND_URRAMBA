import React, { useEffect, useState } from 'react'
import { JefeHogarForm, NucleoFamiliarForm, CaracterizacionForm, ConcejoForm } from 'src/hooks'

import {
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CProgress,
  CRow,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilBarChart, cilUser, cilUserFemale } from '@coreui/icons'

import {
  Charttodos,
  Nucleofamiliar,
  Caracterizados,
  DistribucionEtaria,
  Consejoscomunitario,
} from './charts'

const DashboardAdmin = () => {
  const { obtenerJefeHogar, jefeHogar } = JefeHogarForm()

  const { obtenerNucleoFamiliar, nucleoFamiliar, getEdad } = NucleoFamiliarForm()

  const { obtenerCaratacterizacion, caracterizacion } = CaracterizacionForm()

  const { obtenerConcejo, Concejo } = ConcejoForm()

  const [activeKey, setActiveKey] = useState(0)

  useEffect(() => {
    obtenerJefeHogar()
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    obtenerNucleoFamiliar()
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    obtenerCaratacterizacion()
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    obtenerConcejo()
    // eslint-disable-next-line
  }, []);

  const TtalCC = Concejo.length

  const lstJefeHogar = jefeHogar
  const TtalJH = lstJefeHogar.length

  const lstCaracterizacion = caracterizacion
  const TtalCTZ = lstCaracterizacion.length

  const NumF = lstJefeHogar?.filter((J) => J.sexo === 'Femenino')
  const NumM = lstJefeHogar?.filter((J) => J.sexo === 'Masculino')

  const GENERO = [
    {
      title: 'Masculino',
      icon: cilUser,
      percent: (TtalJH * NumM.length) / 100,
      value: NumM.length,
    },
    {
      title: 'Femenino',
      icon: cilUserFemale,
      percent: (TtalJH * NumM.length) / 100,
      value: NumF.length,
    },
  ]

  const NumHLG = lstJefeHogar?.filter((J) => J.id_orientacion_sexual === 1)
  const NumH = lstJefeHogar?.filter((J) => J.id_orientacion_sexual === 2)
  const NumB = lstJefeHogar?.filter((J) => J.id_orientacion_sexual === 3)
  const NumT = lstJefeHogar?.filter((J) => J.id_orientacion_sexual === 4)
  const NumSN = lstJefeHogar?.filter((J) => J.id_orientacion_sexual === 5)

  const orientacion_sexual = [
    {
      title: 'Homosexual(lesbiana-gay)',
      icon: cilUser,
      percent: (TtalJH * NumHLG.length) / 100,
      value: NumHLG.length,
    },
    {
      title: 'Heterosexual',
      icon: cilUser,
      percent: (TtalJH * NumH.length) / 100,
      value: NumH.length,
    },
    { title: 'Bisexual', icon: cilUser, percent: (TtalJH * NumB.length) / 100, value: NumB.length },
    { title: 'Trans', icon: cilUser, percent: (TtalJH * NumT.length) / 100, value: NumT.length },
    {
      title: 'No respondio ',
      icon: cilUser,
      percent: (TtalJH * NumSN.length) / 100,
      value: NumSN.length,
    },
  ]

  const handleNumJefe = (idjefe) => {
    return lstJefeHogar?.filter((J) => J.ID === idjefe)
  }

  const dataNucleo = nucleoFamiliar?.map((item) => ({
    NumNucle: handleNumJefe(item.id_jefe_hogar).length,
    Edad: getEdad(item.fecha_nacimiento.toString()),
  }))

  const lstNucleoFamiliar = dataNucleo?.filter((J) => J.NumNucle === 1)
  const TtalNC = lstNucleoFamiliar.length

  const NumNMC = lstNucleoFamiliar?.filter((N) => N.Edad < 5)
  const NumNMYC = lstNucleoFamiliar?.filter((N) => N.Edad >= 5 && N.Edad < 15)
  const NumJV = lstNucleoFamiliar?.filter((N) => N.Edad >= 14 && N.Edad <= 17)
  const NumAD = lstNucleoFamiliar?.filter((N) => N.Edad >= 18 && N.Edad < 65)
  const NumADM = lstNucleoFamiliar?.filter((N) => N.Edad >= 65)

  const progressEdades = [
    { title: 'Menor a 5 años', value1: NumNMC.length, value2: 0 },
    { title: 'Mayor a 5 años', value1: NumNMYC.length, value2: 1 },
    { title: 'Jovenes', value1: NumJV.length, value2: 0 },
    { title: 'Adultos', value1: NumAD.length, value2: 1 },
    { title: 'Adultos Mayor', value1: NumADM.length, value2: 0 },
  ]

  const progressExample = [
    { title: 'Total Familias', value: TtalJH, percent: TtalJH, color: 'success' },
    { title: 'Total Miembros Nucleo Hogar', value: TtalNC, percent: TtalNC, color: 'info' },
    { title: 'Total Concejos Comunitarios', value: TtalCC, percent: TtalCC, color: 'warning' },
    {
      title: 'No Caracterizado',
      value: Math.abs(TtalCTZ - TtalJH),
      percent: (Math.abs(TtalCTZ - TtalJH) * TtalJH) / 100,
      color: 'danger',
    },
    {
      title: 'Caracterizados',
      value: TtalCTZ,
      percent: (TtalCTZ * TtalJH) / 100,
      color: 'primary',
    },
  ]

  const handlecharts = (opt) => {
    setActiveKey(opt)
  }

  return (
    <>
      {/*    <WidgetsDropdown /> */}
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={8}>
              <h4 id="traffic" className="card-title mb-0">
                {activeKey === 0 && 'Grafica por Corregimientos'}
                {activeKey === 1 && 'Nucleo Familiar'}
                {activeKey === 2 && 'Familias caracterizadas'}
                {activeKey === 3 && 'Distribucion Etaria'}
                {activeKey === 4 && 'Consejos comunitarios.'}
              </h4>
            </CCol>
            <CCol sm={4} className="d-none d-md-block">
              <CDropdown className="float-end">
                <CDropdownToggle href="#" color="primary">
                  <CIcon icon={cilBarChart} />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem
                    href="/#/dashboard/dashboard"
                    onClick={() => handlecharts(0)}
                    style={{ textDecoration: 'none' }}
                  >
                    Grafica por corregimientos
                  </CDropdownItem>
                  <CDropdownItem
                    href="/#/dashboard/dashboard"
                    onClick={() => handlecharts(1)}
                    style={{ textDecoration: 'none' }}
                  >
                    Nucleo Familiar
                  </CDropdownItem>
                  <CDropdownItem
                    href="/#/dashboard/dashboard"
                    onClick={() => handlecharts(2)}
                    style={{ textDecoration: 'none' }}
                  >
                    Familias Caracterizadas
                  </CDropdownItem>
                  <CDropdownItem
                    href="/#/dashboard/dashboard"
                    onClick={() => handlecharts(3)}
                    style={{ textDecoration: 'none' }}
                  >
                    Distribucion Etaria
                  </CDropdownItem>
                  <CDropdownItem
                    href="/#/dashboard/dashboard"
                    onClick={() => handlecharts(4)}
                    style={{ textDecoration: 'none' }}
                  >
                    Consejos comunitario.
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CCol>
          </CRow>
          <hr className="mt-2" />
          <CRow>
            <CCol sm={12}></CCol>
            {activeKey === 0 && <Charttodos />}
            {activeKey === 1 && <Nucleofamiliar />}
            {activeKey === 2 && <Caracterizados />}
            {activeKey === 3 && <DistribucionEtaria />}
            {activeKey === 4 && <Consejoscomunitario />}
          </CRow>
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      {/*  <WidgetsBrand withCharts /> */}

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            {/* <CCardHeader>Traffic {' & '} Sales</CCardHeader> */}
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <hr className="mt-0" />
                  {progressEdades.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className=" small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <div className="progress-group-header">
                          <span className="ms-auto fw-semibold">{item.value1}</span>
                        </div>
                        <CProgress
                          thin
                          color={item.value2 === 1 ? 'info' : 'danger'}
                          value={item.value1}
                        />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <hr className="mt-0" />
                  {GENERO.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {orientacion_sexual.map((item, index) => (
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
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>
              <br />
              {/*  <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable> */}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default DashboardAdmin
