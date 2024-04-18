/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
  CCol,
  CRow,
  CFormCheck,
  CButton,
  CAlert
} from '@coreui/react'
import { CForm } from '@coreui/react-pro'
const CaracterizacionOL = ({setActiveKey}) => {
   const [validated, setValidated] = useState(false)
   const [datoradio, setDatoradio] = useState({
    afiliado: "",
    remuneracionL:"",
  });

  const [stateCL, setStateCL] = useState({
        condicionlaboralA: false,
        condicionlaboralB: false,
        condicionlaboralC: false,
        condicionlaboralD: false,
        condicionlaboralE: false,
        condicionlaboralF: false,
        condicionlaboralG: false,
        condicionlaboralH: false,
  });

  const handleChangeCL = (event) => {
    setStateCL({ ...stateCL, [event.target.name]: event.target.checked });
  };

  const datoCL = {
        condicionlaboralA: stateCL.condicionlaboralA === true ? "Dificultad física y/o de movilidad" : "",
        condicionlaboralB: stateCL.condicionlaboralB === true ? "Tiene empleo, pero no está trabajando (vacaciones o licencias)" : "",
        condicionlaboralC: stateCL.condicionlaboralC === true ? "Trabajando para un familiar sin pago" : "",
        condicionlaboralD: stateCL.condicionlaboralD === true ? "Estudiando" : "",
        condicionlaboralE: stateCL.condicionlaboralE === true ? "Sin trabajo, pero buscando" : "",
        condicionlaboralF: stateCL.condicionlaboralF === true ? "En labores del hogar" : "",
        condicionlaboralG: stateCL.condicionlaboralG === true ? "Jubilado, pensionado o rentista" : "",
        condicionlaboralH: stateCL.condicionlaboralH === true ? "Otra situación" : "",
  };

    const [stateOU, setStateOU] = useState({
          ocupacionOficiolA: false,
          ocupacionOficiolB: false,
          ocupacionOficiolC: false,
          ocupacionOficiolD: false,
          ocupacionOficiolE: false,
          ocupacionOficiolF: false,
          ocupacionOficiolG: false,
          ocupacionOficiolH: false,
          ocupacionOficiolI: false,
  });

  const handleChangeOU = (event) => {
    setStateOU({ ...stateOU, [event.target.name]: event.target.checked });
  };

    const datoOU = {
          ocupacionOficiolA: stateOU.ocupacionOficiolA === true ? "Empleado(a) Doméstico" : "",
          ocupacionOficiolB: stateOU.ocupacionOficiolB === true ? "Labores del Hogar" : "",
          ocupacionOficiolC: stateOU.ocupacionOficiolC === true ? "Jornalero o Peón" : "",
          ocupacionOficiolD: stateOU.ocupacionOficiolD === true ? "Obrero(a) o Empleado de empresa Particular" : "",
          ocupacionOficiolE: stateOU.ocupacionOficiolE === true ? "Obrero(a) o empleado del gobierno" : "",
          ocupacionOficiolF: stateOU.ocupacionOficiolF === true ? "Trabajador(a) independiente o por cuenta propia" : "",
          ocupacionOficiolG: stateOU.ocupacionOficiolG === true ? "Jubilado, pensionado o rentista" : "",
          ocupacionOficiolH: stateOU.ocupacionOficiolH === true ? "No sabe no responde/No trabaja" : "",
          ocupacionOficiolI: stateOU.ocupacionOficiolI === true ? "Otra" : "",
    };


 const onChangeOL = (e) => {
    setDatoradio({
      ...datoradio,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true)
  const form = event.currentTarget
  if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    return false;
  }

   const DataForm = {
      datoOU,
      datoCL,
      datoradio,
    };
    // console.log(DataForm);
    localStorage.setItem("DataOL", JSON.stringify(DataForm));
    console.log(localStorage.getItem("DataOL"));
    setActiveKey(3)
}

  return <>
  <CRow>
       <CCol xs={12}>
           <CForm
                  className="row g-3 needs-validation"
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                >
               <CRow className="mb-4">
                          <CCol sm="auto">Se encuentra afiliado a algún sistema previsional (sistema de pensiones)?		:</CCol>
                              <CCol sm="auto">
                            <CFormCheck inline
                              className="mb-3"
                              type="radio"
                              name="afiliado"
                              id="afiliadoCheck1"
                              label="Si"
                              value={"Si"}
                              checked={datoradio.afiliado === "Si" ? true : false}
                              onChange={onChangeOL}
                              required
                            />
                            <CFormCheck inline
                              className="mb-3"
                              type="radio"
                              name="afiliado"
                              id="afiliadoCheck2"
                              label="No"
                              value={"No"}
                              checked={datoradio.afiliado === "No" ? true : false}
                              onChange={onChangeOL}
                              required
                            />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2 mt-4">
                            <CCol className="mb-2" style={{textAlign:"left"}}>
                                    <CAlert color="primary">
                                      <h6>¿Cuál de estas alternativas describe mejor su condición laboral actual:</h6>
                                  </CAlert>
                              </CCol>
                        </CRow>
                         <CRow className="mb-4">
                         <CCol>
                            <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="condicionlaboralA"
                              id="condicilaboralCheck1"
                              label="Dificultad física y/o de movilidad"
                              checked={stateCL.condicionlaboralA}
                              onChange={handleChangeCL}

                            />
                              <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="condicionlaboralB"
                              id="condicilaboralCheck2"
                              label="Tiene empleo, pero no está trabajando (vacaciones o licencias)"
                              checked={stateCL.condicionlaboralB}
                              onChange={handleChangeCL}

                            />
                              <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="condicionlaboralC"
                              id="condicilaboralCheck3"
                              label="Trabajando para un familiar sin pago"
                              checked={stateCL.condicionlaboralC}
                              onChange={handleChangeCL}

                            />
                            </CCol>
                            <CCol>
                            <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="condicionlaboralD"
                              id="condicilaboralCheck4"
                              label="Estudiando"
                              checked={stateCL.condicionlaboralD}
                              onChange={handleChangeCL}

                            />
                              <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="condicionlaboralE"
                              id="condicilaboralCheck5"
                              label="Sin trabajo, pero buscando"
                              checked={stateCL.condicionlaboralE}
                              onChange={handleChangeCL}

                            />
                              <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="condicionlaboralF"
                              id="condicilaboralCheck6"
                              label="En labores del hogar"
                              checked={stateCL.condicionlaboralF}
                              onChange={handleChangeCL}

                            />
                            </CCol>
                            <CCol>
                            <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="condicionlaboralG"
                              id="condicilaboralCheck7"
                              label="Jubilado, pensionado o rentista"
                              checked={stateCL.condicionlaboralG}
                              onChange={handleChangeCL}

                            />
                              <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="condicionlaboralH"
                              id="condicilaboralCheck8"
                              label="Otra situación"
                              checked={stateCL.condicionlaboralH}
                              onChange={handleChangeCL}

                            />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2 mt-4">
                            <CCol className="mb-2" style={{textAlign:"left"}}>
                                    <CAlert color="primary">
                                      <h6>¿Tipo de remuneración laboral actual:</h6>
                                  </CAlert>
                              </CCol>
                        </CRow>
                        <CRow className="mb-4">
                          <CCol>
                            <CFormCheck
                              className="mb-3"
                              type="radio"
                              name="remuneracionL"
                              id="TiporemunCheck1"
                              label="Trabajador(a) asalariado"
                              value={"Trabajador(a) asalariado"}
                              checked={datoradio.remuneracionL === "Trabajador(a) asalariado" ? true : false}
                              onChange={onChangeOL}
                              required
                            />
                            <CFormCheck
                              className="mb-3"
                              type="radio"
                              name="remuneracionL"
                              id="TiporemunCheck2"
                              label="Trabajador(a) de servicio doméstico"
                              value={"Trabajador(a) de servicio doméstico"}
                              checked={datoradio.remuneracionL === "Trabajador(a) de servicio doméstico" ? true : false}
                              onChange={onChangeOL}
                              required
                            />
                            <CFormCheck
                              className="mb-3"
                              type="radio"
                              name="remuneracionL"
                              id="TiporemunCheck3"
                              label="Empleador(a), empresario(a) o patrón"
                              value={"Empleador(a), empresario(a) o patrón"}
                              checked={datoradio.remuneracionL === "Empleador(a), empresario(a) o patrón" ? true : false}
                              onChange={onChangeOL}
                              required
                            />
                            </CCol>
                            <CCol>
                            <CFormCheck
                              className="mb-3"
                              type="radio"
                              name="remuneracionL"
                              id="TiporemunCheck4"
                              label="Trabajador(a) por cuenta propia o independiente"
                              value={"Trabajador(a) por cuenta propia o independiente"}
                              checked={datoradio.remuneracionL === "Trabajador(a) por cuenta propia o independiente" ? true : false}
                              onChange={onChangeOL}
                              required
                            />
                            <CFormCheck
                              className="mb-3"
                              type="radio"
                              name="remuneracionL"
                              id="TiporemunCheck5"
                              label="Familiar no remunerado"
                              value={"Familiar no remunerado"}
                              checked={datoradio.remuneracionL === "Familiar no remunerado" ? true : false}
                              onChange={onChangeOL}
                              required
                            />
                            </CCol>
                       </CRow>
                        <CRow className="mb-2 mt-4">
                            <CCol className="mb-2" style={{textAlign:"left"}}>
                                    <CAlert color="primary">
                                      <h6>Cual es la Ocupación u Oficio del jefe de hogar:</h6>
                                  </CAlert>
                              </CCol>
                          </CRow>
                       <CRow className="mb-4">
                         <CCol>
                            <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="ocupacionOficiolA"
                              id="OcupacionoficioCheck1"
                              label="Empleado(a) Doméstico"
                              checked={stateOU.ocupacionOficiolA}
                              onChange={handleChangeOU}

                            />
                              <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="ocupacionOficiolB"
                              id="OcupacionoficioCheck2"
                              label="Labores del Hogar"
                              checked={stateOU.ocupacionOficiolB}
                              onChange={handleChangeOU}

                            />
                              <CFormCheck
                              className="mb-3"
                              type="checkbox"
                              name="ocupacionOficiolC"
                              id="OcupacionoficioCheck3"
                              label="Jornalero o Peón"
                              checked={stateOU.ocupacionOficiolC}
                              onChange={handleChangeOU}

                            />
                             </CCol>
                             <CCol>
                              <CFormCheck
                                  className="mb-3"
                                  type="checkbox"
                                  name="ocupacionOficiolD"
                                  id="OcupacionoficioCheck4"
                                  label="Obrero(a) o Empleado de empresa Particular"
                                  checked={stateOU.ocupacionOficiolD}
                                  onChange={handleChangeOU}

                                />
                                  <CFormCheck
                                  className="mb-3"
                                  type="checkbox"
                                  name="ocupacionOficiolE"
                                  id="OcupacionoficioCheck5"
                                  label="Obrero(a) o empleado del gobierno"
                                  checked={stateOU.ocupacionOficiolE}
                                  onChange={handleChangeOU}

                                />
                                  <CFormCheck
                                  className="mb-3"
                                  type="checkbox"
                                  name="ocupacionOficiolF"
                                  id="OcupacionoficioCheck6"
                                  label="Trabajador(a) independiente o por cuenta propia"
                                  checked={stateOU.ocupacionOficiolF}
                                  onChange={handleChangeOU}

                                />
                                </CCol>
                                <CCol>
                                <CFormCheck
                                  className="mb-3"
                                  type="checkbox"
                                  name="ocupacionOficiolG"
                                  id="OcupacionoficioCheck7"
                                  label="Jubilado, pensionado o rentista"
                                  checked={stateOU.ocupacionOficiolG}
                                  onChange={handleChangeOU}

                                />
                                <CFormCheck
                                  className="mb-3"
                                  type="checkbox"
                                  name="ocupacionOficiolH"
                                  id="OcupacionoficioCheck8"
                                  label="No sabe no responde/No trabaja"
                                  checked={stateOU.ocupacionOficiolH}
                                  onChange={handleChangeOU}

                                />
                                <CFormCheck
                                  className="mb-3"
                                  type="checkbox"
                                  name="ocupacionOficiolI"
                                  id="OcupacionoficioCheck9"
                                  label="Otra"
                                  checked={stateOU.ocupacionOficiolI}
                                  onChange={handleChangeOU}

                                />
                            </CCol>
                        </CRow>
                         <CRow className="mb-2 mt-2">
                           <CCol xs={12}>
                              <CButton
                                type="submit"
                                color={'primary'}
                                variant="outline"
                                className="px-4"
                                style={{ width: '100%' }}
                              >{' '}
                                {'Aceptar y Continuar Caracterizacón'}
                              </CButton>
                         </CCol>
                         </CRow>
                  </CForm>
       </CCol>
  </CRow>
  </>
}
export default CaracterizacionOL
