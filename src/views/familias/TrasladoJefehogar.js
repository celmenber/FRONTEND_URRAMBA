/* eslint-disable prettier/prettier */
/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import avatar from 'src/assets/images/avatars/profile-default.jpg'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CContainer,
  CFormCheck,
  CRow,
} from '@coreui/react'
import { JefeHogarForm } from 'src/hooks'
import { SelectPicker } from 'rsuite';
import '../../../node_modules/rsuite/dist/rsuite.css';
import CIcon from '@coreui/icons-react'
import { cilArrowThickFromRight } from '@coreui/icons'

const TrasladoJefehohar = () => {
  const [valueCC, setValueCC] = useState(0)
  const {
    handletrasladaJH,
    obtenerConcejo,
    obtenerJefeHogar,
    consejos,
    check,
    setCheck,
    setIdConcejoC,
    setIdConcejoCUser,
    jefeHogar,
  } = JefeHogarForm();

  const { id } = useParams();

  const history = useHistory();

  const datos = jefeHogar.filter((X) => Number(X.ID) === Number(id));


const handleregresar = () => {
      history.push(`/familias/jefehogar`);
      }

  useEffect(() => {
    obtenerConcejo();
    // eslint-disable-next-line
  }, []);

    useEffect(() => {
    obtenerJefeHogar();
    // eslint-disable-next-line
  }, []);


useEffect(() => {
  const data = consejos?.filter((x) => Number(x.ID) === Number(valueCC));
     if(valueCC !== 0){
       setIdConcejoC(valueCC)
       setIdConcejoCUser(data[0].id_usuario)
     }
    // eslint-disable-next-line
  }, [valueCC]);


 const  data = consejos?.map(
        item => ({
              label: item.nit+' '+item.nombre_concejo_comunitario.toUpperCase(),
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
                    <strong> {check === 0 ? 'Jefe de Hogar a Trasladar ':'Jefe de Hogar Desafiliar'}:</strong>
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
           <CRow>
             <CCol xs={8}>
                <CCardTitle>
                 <div className="ml-2">
                   <SelectPicker
                   data={data}
                   placeholder="SELECCIONE CONCEJO COMUNITARIO"
                   name="datoConcejo"
                   value={valueCC}
                   onChange={setValueCC}
                   size="lg"
                   block
                   disabled={check === 0 ? false : true}
                   />
               </div>
            </CCardTitle></CCol>
             <CCol xs={4}>
              <CButtonGroup role="group" style={{width: '100%',marginTop: '3px'}} aria-label="checkbox toggle button group">
                <CFormCheck
                  type="radio"
                  defaultChecked={check === 0 ? true : false}
                  button={{ color: 'primary', variant: 'outline' }}
                  name="btnradio"
                  id="btnradio1"
                  autoComplete="off"
                  label="Trasladar Jefe de Hogar"
                  onChange={() => setCheck(0)}
                />
                <CFormCheck
                  type="radio"
                  defaultChecked={check === 1 ? true : false}
                  button={{ color: 'primary', variant: 'outline' }}
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                  label="Desafiliar Jefe de Hogar"
                  onChange={() => setCheck(1)}
                />
              </CButtonGroup>
             </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody>
          <CCardTitle>
            <CButton
                  type="button"
                  color={'primary'}
                  variant="outline"
                  className="px-4"
                  style={{ width: '100%' }}
                  onClick={() => handletrasladaJH(id)}
                >
                  { check === 0 ? 'Trasladar Jefe de Hogar':'Desafiliar Jefe de Hogar'}
                </CButton>
            </CCardTitle>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default TrasladoJefehohar
