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
const CaracterizacionAP = ({setActiveKey}) => {
const [validated, setValidated] = useState(false)
const [datoradioAP, setDatoradioAP] = useState({
    viviendaSH: "",
    electricidaSP:"",
    basuraSP:"",
    cocinarSP:"",
    tfijoSP:"",
    tmovilSP:"",
    internetSP:"",
    viaccesoSV:"",
    canchasdSV:"",
    parquesSV:"",
    salonComunalSV:"",
  });

  const onChangeAP = (e) => {
    setDatoradioAP({
      ...datoradioAP,
      [e.target.name]: e.target.value,
    });
  };

    const [stateC, setStateC] = useState({
            metodococinarA: false,
            metodococinarB: false,
            metodococinarC: false,
            metodococinarD: false,
            metodococinarE: false,
            metodococinarF: false,
  });

  const datoC = {
        metodococinarA: stateC.metodococinarA === true ? "Gas" : "",
        metodococinarB: stateC.metodococinarB === true ? "Petroleo" : "",
        metodococinarC: stateC.metodococinarC === true ? "Leña o derivados" : "",
        metodococinarD: stateC.metodococinarD === true ? "Electricidad" : "",
        metodococinarE: stateC.metodococinarE === true ? "Carbón" : "",
        metodococinarF: stateC.metodococinarF === true ? "Energia solar" : "",
  };

  const handleChangeC = (event) => {
    setStateC({ ...stateC, [event.target.name]: event.target.checked });
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
      datoC,
      datoradioAP,
    };
    // console.log(DataForm);
    localStorage.setItem("DataAP", JSON.stringify(DataForm));
    console.log(localStorage.getItem("DataAP"));
    setActiveKey(5)
}
  return <>
  <CRow>
       <CCol xs={12}>
        <CForm
          className="row g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}>
                        <CRow className="mb-2 mt-0">
                            <CCol className="mb-2" style={{textAlign:"center"}}>
                                    <CAlert color="primary">
                                      <h6>Serviccios Públicos de la Vivienda</h6>
                                  </CAlert>
                              </CCol>
                          </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">El servicio Higiénico de la vivienda es o está:</CCol>
                            <CCol sm="auto">
                              <CFormCheck
                                className="mb-3"
                                type="radio"
                                name="viviendaSH"
                                id="servicioHFormCheck1"
                                label="Conectado al alcantarillado"
                                value={"Conectado al alcantarillado"}
                                checked={datoradioAP.viviendaSH === "Conectado al alcantarillado" ? true : false}
                                onChange={onChangeAP}
                                required
                              />
                               <CFormCheck
                                className="mb-3"
                                type="radio"
                                id="servicioHFormCheck2"
                                label="Conectado a poza séptica"
                                name="viviendaSH"
                                value={"Conectado a poza séptica"}
                                checked={datoradioAP.viviendaSH === "Conectado a poza séptica" ? true : false}
                                onChange={onChangeAP}
                                required
                              /></CCol>
                               <CCol sm="auto">
                               <CFormCheck
                                className="mb-3"
                                type="radio"
                                id="servicioHFormCheck3"
                                label="Sobre pozo ciego"
                                name="viviendaSH"
                                value={"Sobre pozo ciego"}
                                checked={datoradioAP.viviendaSH === "Sobre pozo ciego" ? true : false}
                                onChange={onChangeAP}
                                required
                              />
                              <CFormCheck
                                className="mb-3"
                                type="radio"
                                id="servicioHFormCheck4"
                                label="Baño quimico"
                                name="viviendaSH"
                                value={"Baño quimico"}
                                checked={datoradioAP.viviendaSH === "Baño quimico" ? true : false}
                                onChange={onChangeAP}
                                required
                              /></CCol>
                               <CCol sm="auto">
                              <CFormCheck
                                className="mb-3"
                                type="radio"
                                id="servicioHFormCheck5"
                                label="Sobre acequia o canal"
                                name="viviendaSH"
                                value={"Sobre acequia o canal"}
                                checked={datoradioAP.viviendaSH === "Sobre acequia o canal" ? true : false}
                                onChange={onChangeAP}
                                required
                              />
                              <CFormCheck
                                className="mb-3"
                                type="radio"
                                id="servicioHFormCheck6"
                                label="No tiene servicio"
                                name="viviendaSH"
                                value={"No tiene servicio"}
                                checked={datoradioAP.viviendaSH === "No tiene servicio" ? true : false}
                                onChange={onChangeAP}
                                required
                              />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">La electricidad proviene de:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="electricidadFormCheck1"
                                label="Red pública"
                                name="electricidaSP"
                                value={"Red pública"}
                                checked={datoradioAP.electricidaSP === "Red pública" ? true : false}
                                onChange={onChangeAP}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="electricidadFormCheck2"
                                label="Planta solar"
                                name="electricidaSP"
                                value={"Planta solar"}
                                 checked={datoradioAP.electricidaSP === "Planta solar" ? true : false}
                                onChange={onChangeAP}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="electricidadFormCheck3"
                                label="Generador de combustible"
                                name="electricidaSP"
                                value={"Generador de combustible"}
                                checked={datoradioAP.electricidaSP === "Generador de combustible" ? true : false}
                                onChange={onChangeAP}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="electricidadFormCheck4"
                                label="Eolico (vientos)"
                                name="electricidaSP"
                                value={"Eolico (vientos)"}
                                checked={datoradioAP.electricidaSP === "Eolico (vientos)" ? true : false}
                                onChange={onChangeAP}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="electricidadFormCheck5"
                                label="No tiene servicio"
                                name="electricidaSP"
                                value={"No tiene servicio"}
                                checked={datoradioAP.electricidaSP === "No tiene servicio" ? true : false}
                                onChange={onChangeAP}
                                required
                              />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">Medio de eliminación de basura:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="ebasuraFormCheck1"
                                label="Servicio recolección pública"
                                name="basuraSP"
                                value={"Servicio recolección pública"}
                                checked={datoradioAP.basuraSP === "Servicio recolección pública" ? true : false}
                                onChange={onChangeAP}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="ebasuraFormCheck2"
                                label="La entierra y/o quema"
                                name="basuraSP"
                                value={"La entierra y/o quema"}
                                checked={datoradioAP.basuraSP === "La entierra y/o quema" ? true : false}
                                onChange={onChangeAP}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="ebasuraFormCheck3"
                                label="La deja en terreno"
                                name="basuraSP"
                                value={"La deja en terreno"}
                                checked={datoradioAP.basuraSP === "La deja en terreno" ? true : false}
                                onChange={onChangeAP}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="ebasuraFormCheck4"
                                label="La tira al rio"
                                name="basuraSP"
                                value={"La tira al rio"}
                                checked={datoradioAP.basuraSP === "La tira al rio" ? true : false}
                                onChange={onChangeAP}
                                required
                              />
                            </CCol>
                        </CRow>
                         <CRow className="mb-2">
                            <CCol sm="auto">Tiene sistema de cocina:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="cocinarSPFormRadio1"
                                label="Si"
                                name="cocinarSP"
                                value={"Si"}
                                 checked={datoradioAP.cocinarSP === "Si" ? true : false}
                                onChange={onChangeAP}
                                required
                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="radio"
                                id="cocinarSPFormRadio2"
                                label="No"
                                name="cocinarSP"
                                value={"No"}
                                 checked={datoradioAP.cocinarSP === "No" ? true : false}
                                onChange={onChangeAP}
                                required
                              />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">Método utilizado para cocinar:</CCol>
                            <CCol sm="auto">
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="metodococinarA"
                                id="cocinarFormCheck1"
                                label="Gas"
                                checked={stateC.metodococinarA}
                                onChange={handleChangeC}

                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="metodococinarB"
                                id="cocinarFormCheck2"
                                label="Petroleo"
                                checked={stateC.metodococinarB}
                                onChange={handleChangeC}

                              />
                               <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="metodococinarC"
                                id="cocinarFormCheck3"
                                label="Leña o derivados"
                                checked={stateC.metodococinarC}
                                onChange={handleChangeC}

                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="metodococinarD"
                                id="cocinarFormCheck4"
                                label="Electricidad"
                                checked={stateC.metodococinarD}
                                onChange={handleChangeC}

                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="metodococinarE"
                                id="cocinarFormCheck5"
                                label="Carbón"
                                checked={stateC.metodococinarE}
                                onChange={handleChangeC}

                              />
                              <CFormCheck inline
                                className="mb-3"
                                type="checkbox"
                                name="metodococinarF"
                                id="cocinarFormCheck6"
                                label="Energia solar"
                                checked={stateC.metodococinarF}
                                onChange={handleChangeC}

                              />
                            </CCol>
                        </CRow>
                        <CRow className="mb-2 mt-4">
                            <CCol className="mb-2" style={{textAlign:"center"}}>
                                    <CAlert color="primary">
                                      <h6>Acceso de los servicios en la Vivienda</h6>
                                  </CAlert>
                              </CCol>
                          </CRow>
                        <CRow className="mb-2">
                            <CCol sm="auto">Teléfono fijo:</CCol>
                            <CCol sm="auto">
                            <CFormCheck inline
                                type="radio"
                                id="TfijoCheckbox1"
                                value="Si"
                                label="Si"
                                name="tfijoSP"
                                 checked={datoradioAP.tfijoSP === "Si" ? true : false}
                                onChange={onChangeAP}
                                />
                            <CFormCheck inline
                               type="radio"
                               id="TfijoCheckbox2"
                               value="No"
                               label="No"
                               name="tfijoSP"
                                checked={datoradioAP.tfijoSP === "No" ? true : false}
                               onChange={onChangeAP}
                                required
                              />
                              </CCol>
                              <CCol sm="auto">Teléfono movil:</CCol>
                              <CCol sm="auto">
                                <CFormCheck inline
                                    type="radio"
                                    id="TmovilCheckbox1"
                                    value="Si"
                                    label="Si"
                                    name="tmovilSP"
                                     checked={datoradioAP.tmovilSP === "Si" ? true : false}
                                    onChange={onChangeAP}
                                    required
                                />
                                <CFormCheck inline
                                  type="radio"
                                  id="TmovilCheckbox2"
                                  value="No"
                                  label="No"
                                  name="tmovilSP"
                                  checked={datoradioAP.tmovilSP === "No" ? true : false}
                                  onChange={onChangeAP}
                                  required
                                  />
                              </CCol>
                              <CCol sm="auto">Internet:</CCol>
                              <CCol sm="auto">
                                <CFormCheck inline
                                    type="radio"
                                    id="InternetCheckbox1"
                                    value="Si"
                                    label="Si"
                                    name="internetSP"
                                     checked={datoradioAP.internetSP === "Si" ? true : false}
                                    onChange={onChangeAP}
                                    required
                                    />
                                <CFormCheck inline
                                  type="radio"
                                  id="InternetCheckbox2"
                                  value="No"
                                  label="No"
                                  name="internetSP"
                                  checked={datoradioAP.internetSP === "No" ? true : false}
                                  onChange={onChangeAP}
                                  required
                                  />
                              </CCol>
                        </CRow>
                         <CRow className="mb-2 mt-4">
                            <CCol className="mb-2" style={{textAlign:"center"}}>
                                    <CAlert color="primary">
                                      <h6>Cuenta con estos servicios en el sector de la Vivienda</h6>
                                  </CAlert>
                              </CCol>
                          </CRow>
                         <CRow className="mb-4">
                            <CCol sm="auto">Vías de acceso:</CCol>
                            <CCol sm="auto">
                            <CFormCheck inline
                                type="radio"
                                name="viaccesoSV"
                                id="viasaccesoCheckbox1"
                                value="Si"
                                label="Si"
                                checked={datoradioAP.viaccesoSV === "Si" ? true : false}
                                onChange={onChangeAP}
                                 />
                            <CFormCheck inline
                               type="radio"
                               name="viaccesoSV"
                               id="viasaccesoCheckbox2"
                               value="No"
                               label="No"
                                checked={datoradioAP.viaccesoSV === "No" ? true : false}
                               onChange={onChangeAP}
                               required
                               />
                              </CCol>
                              <CCol sm="auto">Canchas deportivas:</CCol>
                              <CCol sm="auto">
                                <CFormCheck inline
                                    type="radio"
                                    name="canchasdSV"
                                    id="CdeportivasCheckbox1"
                                    value="Si"
                                    label="Si"
                                     checked={datoradioAP.canchasdSV === "Si" ? true : false}
                                    onChange={onChangeAP}
                                    required
                                    />
                                <CFormCheck inline
                                  type="radio"
                                  name="canchasdSV"
                                  id="CdeportivasCheckbox2"
                                  value="No"
                                  label="No"
                                  checked={datoradioAP.canchasdSV === "No" ? true : false}
                                  onChange={onChangeAP}
                                  required
                                  />
                              </CCol>
                              <CCol sm="auto">Parques:</CCol>
                              <CCol sm="auto">
                                <CFormCheck inline
                                    type="radio"
                                    name="parquesSV"
                                    id="ParqueCheckbox1"
                                    value="Si"
                                    label="Si"
                                     checked={datoradioAP.parquesSV === "Si" ? true : false}
                                    onChange={onChangeAP}
                                    required
                                    />
                                <CFormCheck inline
                                  type="radio"
                                  name="parquesSV"
                                  id="ParqueCheckbox2"
                                  value="No"
                                  label="No"
                                  checked={datoradioAP.parquesSV === "No" ? true : false}
                                  onChange={onChangeAP}
                                  required
                                  />
                              </CCol>
                              <CCol sm="auto"> Salón Comunal:</CCol>
                              <CCol sm="auto">
                                <CFormCheck inline
                                    type="radio"
                                    name="salonComunalSV"
                                    id="ScomunalCheckbox1"
                                    value="Si"
                                    label="Si"
                                    checked={datoradioAP.salonComunalSV === "Si" ? true : false}
                                    onChange={onChangeAP}
                                    required
                                    />
                                <CFormCheck inline
                                  type="radio"
                                  name="salonComunalSV"
                                  id="ScomunalCheckbox2"
                                  value="No"
                                  label="No"
                                    checked={datoradioAP.salonComunalSV === "No" ? true : false}
                                  onChange={onChangeAP}
                                  required
                                  />
                              </CCol>
                        </CRow>
                         <CRow className="mb-2 mt-4">
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
export default CaracterizacionAP
