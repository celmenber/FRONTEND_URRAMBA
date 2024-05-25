/* eslint-disable prettier/prettier */
import { CCard, CCardBody, CCol, CProgress, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import React, { useEffect } from 'react';
import { JefeHogarForm, NucleoFamiliarForm , CaracterizacionForm} from 'src/hooks'
const DashboardEncuestador = () => {
  const {
       userDetails,
       obtenerJefeHogar,
        jefeHogar,
        } = JefeHogarForm()

 const {
         obtenerNucleoFamiliar,
         nucleoFamiliar,
         getEdad
       } = NucleoFamiliarForm();

  const {
         obtenerCaratacterizacion,
         caracterizacion,
       } = CaracterizacionForm();

  useEffect(() => {
      obtenerJefeHogar();
       // eslint-disable-next-line
  }, []);


  useEffect(() => {
      obtenerNucleoFamiliar();
       // eslint-disable-next-line
  }, []);

  useEffect(() => {
      obtenerCaratacterizacion();
       // eslint-disable-next-line
  }, []);

   const lstJefeHogar = jefeHogar?.filter(U => U.id_usuario === userDetails.ID_USER);
   const TtalJH = lstJefeHogar.length;

   const lstCaracterizacion = caracterizacion?.filter(C => C.id_usuario === userDetails.ID_USER);
   const TtalCTZ = lstCaracterizacion.length;

    const NumF = lstJefeHogar?.filter(J => J.sexo === 'Femenino');
    const NumM = lstJefeHogar?.filter(J => J.sexo === 'Masculino');

     const GENERO = [
                    { title: 'Masculino', icon: cilUser, percent: (TtalJH * NumM.length )/100, value: NumM.length },
                    { title: 'Femenino', icon: cilUserFemale, percent: (TtalJH * NumM.length )/100, value: NumF.length },
                  ]

    const NumHLG = lstJefeHogar?.filter(J => J.id_orientacion_sexual === 1);
    const NumH = lstJefeHogar?.filter(J => J.id_orientacion_sexual === 2);
    const NumB = lstJefeHogar?.filter(J => J.id_orientacion_sexual === 3);
    const NumT = lstJefeHogar?.filter(J => J.id_orientacion_sexual === 4);
    const NumSN = lstJefeHogar?.filter(J => J.id_orientacion_sexual === 5);

  const orientacion_sexual = [
                          { title: 'Homosexual(lesbiana-gay)', icon: cilUser,
                            percent: (TtalJH * NumHLG.length )/100,
                            value: NumHLG.length },
                          { title: 'Heterosexual', icon: cilUser,
                            percent: (TtalJH * NumH.length )/100,
                            value: NumH.length},
                          { title: 'Bisexual', icon: cilUser,
                            percent: (TtalJH * NumB.length )/100,
                            value: NumB.length },
                          { title: 'Trans', icon: cilUser,
                            percent: (TtalJH * NumT.length )/100,
                            value: NumT.length},
                          { title: 'No respondio ', icon: cilUser,
                            percent: (TtalJH * NumSN.length )/100,
                            value: NumSN.length },
                        ]

const handleNumJefe = (idjefe) => {
       return lstJefeHogar?.filter(J => J.ID === idjefe)
      }


 const  dataNucleo = nucleoFamiliar?.map(
                  item => ({
                        NumNucle: handleNumJefe(item.id_jefe_hogar).length,
                        Edad: getEdad(item.fecha_nacimiento.toString())
                  })
               );


const lstNucleoFamiliar = dataNucleo?.filter(J => J.NumNucle === 1);
const TtalNC = lstNucleoFamiliar.length;

const NumNMC = lstNucleoFamiliar?.filter(N => N.Edad < 5);
const NumNMYC = lstNucleoFamiliar?.filter(N => N.Edad >= 5 && N.Edad < 15);
const NumJV = lstNucleoFamiliar?.filter(N => N.Edad >= 14 && N.Edad <=17);
const NumAD = lstNucleoFamiliar?.filter(N => N.Edad >= 18 && N.Edad < 65);
const NumADM = lstNucleoFamiliar?.filter(N => N.Edad >= 65);

  const progressEdades = [
                      { title: 'Menor a 5 años', value1: NumNMC.length, value2: 0,},
                      { title: 'Mayor a 5 años', value1: NumNMYC.length, value2: 1 },
                      { title: 'Jovenes', value1: NumJV.length, value2: 0 },
                      { title: 'Adultos', value1: NumAD.length, value2: 1 },
                      { title: 'Adultos Mayor', value1: NumADM.length, value2: 0 },
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
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Total Nucleo Hogar</div>
                        <div className="fs-5 fw-semibold">{TtalJH}</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Total Miembros Nucleo Hogar</div>
                        <div className="fs-5 fw-semibold">{TtalNC}</div>
                      </div>
                    </CCol>
                  </CRow>
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
                        <CProgress thin
                        color={item.value2 === 1 ? 'info' : 'danger'}
                        value={item.value1}
                        />
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
                        <div className="text-medium-emphasis small">No Caracterizado</div>
                        <div className="fs-5 fw-semibold">{Math.abs(TtalCTZ - TtalJH)}</div>
                      </div>
                    </CCol>
                  </CRow>

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
            </CCardBody>
        </CCol>
      </CRow>
      </CCard>
    </>
  )
}
export default DashboardEncuestador
