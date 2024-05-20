/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import avatar from 'src/assets/images/avatars/profile-default.jpg'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CContainer,
  CRow,
} from '@coreui/react'
import { NucleoFamiliarForm } from 'src/hooks/useNucleoFamiliarForm'
import { SelectPicker } from 'rsuite';
import '../../../node_modules/rsuite/dist/rsuite.css';
import CIcon from '@coreui/icons-react'
import { cilArrowThickFromRight } from '@coreui/icons'

const TrasladoMiembro = () => {
  const [valueJH, setValueJH] = useState(0)
  const [IDJH, setIDJH] = useState(0)
  const {
    handletrasladamiembro,
    obtenerNucleoFamiliar,
    nucleoFamiliar,
    obtenerJefeHogar,
    setIdJefeHogar,
    setIdNucleoflia,
    JefeHogar,
  } = NucleoFamiliarForm();

  const { id } = useParams();

  const history = useHistory();

  const datos = nucleoFamiliar.filter((N) => N.ID === Number(id));

const handleregresar = () => {
      history.push(`/familias/nucleos/${IDJH}`);
      }

  useEffect(() => {
    // Consultar la api listar parques
    obtenerJefeHogar();
    // eslint-disable-next-line
  }, []);

   useEffect(() => {
    // Consultar la api listar parques
    obtenerNucleoFamiliar();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
     if(valueJH !== 0){
       setIdJefeHogar(valueJH)
     }
    // eslint-disable-next-line
  }, [valueJH]);

   useEffect(() => {
       setIdNucleoflia(id)
    // eslint-disable-next-line
  }, []);

   useEffect(() => {
       setIDJH(datos[0]?.id_jefe_hogar)
    // eslint-disable-next-line
  }, []);


 const  data = JefeHogar?.map(
        item => ({
              label: item.documentos+' '+ item.nombres.toUpperCase() +' '+item.apellidos.toUpperCase(),
              value: item.ID.toString()
        })
     );


  return (
    <CContainer>
      <CCard>
        <CCardHeader>
           <CRow>
             <CCol xs={10}>
              <div className="d-flex align-items-center"   style={{ width: '100%' }}>
                <CAvatar
                  className="m-2"
                  size="md"
                  src={avatar}
                  status={true ? 'success' : 'danger'}
                />
                <div className="ml-2">
                  {
                    <>
                    <strong>Miembro a trasladar:</strong>
                      <div>
                        {datos[0]?.nombres} {datos[0]?.apellidos}
                      </div>
                      <div className="small text-medium-emphasis">
                        <span> Identidad: {datos[0]?.documentos}</span>
                      </div>
                    </>
                  }
                </div>
              </div>
             </CCol>
              <CCol xs={2}>
                <CButton
                  type="button"
                  color={'primary'}
                  variant="outline"
                  className="px-2"
                  style={{ width:'70%',marginTop:'12px', float: 'right' }}
                  onClick={() => handleregresar()}
                >
                   <CIcon icon={cilArrowThickFromRight} size="md" /> {'Regresar'}
                </CButton>
              </CCol>
          </CRow>

        </CCardHeader>
        <CCardHeader>
              <CCardTitle>
                 <div className="ml-2">
                   <SelectPicker
                   data={data}
                   placeholder="SELECCIONAR EL JEFE DE HOGAR"
                   name="datoJefeHogar"
                   value={valueJH}
                   onChange={setValueJH}
                   size="lg"
                   block
                   />
               </div>
          </CCardTitle>
        </CCardHeader>
        <CCardBody>
          <CCardTitle>
            <CButton
                  type="button"
                  color={'primary'}
                  variant="outline"
                  className="px-4"
                  style={{ width: '100%' }}
                  onClick={() => handletrasladamiembro()}
                >
                  {'Trasladar miembro nucleo familiar'}
                </CButton>
            </CCardTitle>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default TrasladoMiembro
