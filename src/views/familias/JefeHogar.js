/* eslint-disable prettier/prettier */
/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CButton,
  CSpinner,
  CTooltip,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CAvatar,
  CInputGroup,
  CFormInput,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CFormCheck,
  CButtonGroup,
} from '@coreui/react'
//import { CLoadingButton } from '@coreui/react-pro'

import CIcon from '@coreui/icons-react'
import avatar from 'src/assets/images/avatars/profile-default.jpg'
import {
  cilPeople,
  cilTrash,
  cilArrowThickFromLeft,
  cilHighlighter,
  cilList,
} from '@coreui/icons'
import JefeHogarNuevo from './modal/JefeHogarNuevo'
import JefeHogarAct from './modal/JefeHogarAct'
import { JefeHogarForm } from 'src/hooks/useJefeHogarForm'


const JefeHogar = () => {
   const [check, setCheck] = useState(0)
  const history = useHistory();

  const {
    onChangeFormulario,
    handleSubmitAct,
    handleSubmitBuscar,
    obtenerJefeHogar,
    obtenerConcejo,
    eliminarJefeHogar,
    EditarJefeHogar,
    datoJefeHogar,
    jefeHogar,
    userDetails,
    visibleM,
    setVisibleM,
    visibleMI,
    setVisibleMI,
    setValidated,
    valedaBsq,
    setValedaBsq,
    cargandolista,
    validated,
  } = JefeHogarForm()

  useEffect(() => {
      obtenerJefeHogar();
       // eslint-disable-next-line
  }, []);

  useEffect(() => {
    obtenerConcejo();
      // eslint-disable-next-line
  }, []);


  useEffect(()=>{
    setVisibleM(false)
   // eslint-disable-next-line
  },[])

//console.log(jefeHogar);
 const  JefeHogar = check === 0 ? jefeHogar?.filter(X => parseInt(X.id_concejo_comunitario) !== 0)
                                      : jefeHogar?.filter(U => parseInt(U.id_concejo_comunitario) === 0)

  const lstJefeHogar = userDetails.USER_ROL === 'Administrador'
                      ? JefeHogar
                      : JefeHogar?.filter(U => parseInt(U.id_usuario) === parseInt(userDetails.ID_USER))


const idJefeHogar = (id) => {
    history.push(`/familias/nucleos/${id}`);
  }

  const handleDesafiliarJH = (id) => {
    console.log(id);
    history.push(`/familias/trasladojefehogar/${id}`);
  }

  const handleCertificadoJH = (id) => {
     console.log(id);
    history.push(`/certificados/${id}`);
  }

  const handleBuscarAll = () => {
     setValedaBsq(false);
     obtenerJefeHogar();
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Gestión</strong> <small>Jefe de hogar</small>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CCol xs={12}>
                <CButton
                  type="button"
                  color={'primary'}
                  variant="outline"
                  className="px-4"
                  style={{ width: '100%' }}
                  onClick={() => setVisibleM(true)}
                >{' '}
                  {'Agregar Nuevo Jefe de Hogar'}
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>

           <CCardBody>
            <CRow>
             <CCol xs={7}>
               <CInputGroup className="mb-0">
                 <CFormInput placeholder="Escriba numero documento o nombres "
                 name='Parametros'
                 value={datoJefeHogar.Parametros}
                 onChange={onChangeFormulario}
                 aria-label="Recipient's username"
                 aria-describedby="button-addon2"
                 />
                 {valedaBsq === false
                   ?<CButton type="button" color="primary" variant="outline" id="button-addon2" onClick={handleSubmitBuscar}>Buscar...</CButton>
                   :<CButton type="button" color="success" variant="outline" id="button-addon2" onClick={handleBuscarAll}>Todos...</CButton>
                  }
                 </CInputGroup>
               </CCol>
               <CCol xs={5}>
                {userDetails.USER_ROL === 'Administrador' && (
                  <CButtonGroup role="group" style={{width: '100%'}} aria-label="checkbox toggle button group">
                    <CFormCheck
                      type="radio"
                      defaultChecked={check === 0 ? true : false}
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio11"
                      autoComplete="off"
                      label="Afiliados concejos comunitario"
                      onChange={() => setCheck(0)}
                    />
                    <CFormCheck
                      type="radio"
                      defaultChecked={check === 1 ? true : false}
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio12"
                      autoComplete="off"
                      label="Desafiliados concejos comunitario"
                      onChange={() => setCheck(1)}
                    />
                  </CButtonGroup>
               )}
             </CCol>
          </CRow>
           </CCardBody>
          {/* proceso de listar archovos de las normativas */}
          <CCardBody>
            <CForm key={0}>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} >Datos Jefe de Hogar</CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} className="text-center">Escolaridad</CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} className="text-center">Genero</CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} className="text-center">Ubicación</CTableHeaderCell>
                    <CTableHeaderCell colSpan={4} className="text-center">Acciones</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {cargandolista === true ? (
                    <CTableRow key={0} >
                      <CTableHeaderCell colSpan={8} className="text-center">
                        <CSpinner aria-hidden="true" />
                        <span style={{
                          top: '-10px',
                          position: 'relative'
                        }}> Loading...</span>
                      </CTableHeaderCell>
                    </CTableRow>
                  ) : (
                    lstJefeHogar?.map((item, index) => (
                      <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell className="text-center">
                          <CAvatar size="md"
                            key={index}
                            src={avatar}
                            status={item.estado === '1' ? 'success' : 'secondary'}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <div>
                            <span> <strong>
                              {item.nombres} {item.apellidos}
                            </strong></span><br></br>
                            <small style={{ marginLeft: '0px' }}>
                            {item.Codigo}: {item.documentos}
                            </small>
                          </div>
                          <div className="small text-medium-emphasis">
                            <span>
                              {item.correo}</span> | <span> TEL: {item.telefono}
                            </span>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell>
                        <div className="small text-medium-emphasis">Escolaridad/Estado</div>
                          <span>{
                            item.Escolaridad
                          }</span> | <span>{
                            item.estado_escolaridad
                          }</span>
                        </CTableDataCell>

                        <CTableDataCell>
                          <div className="small text-medium-emphasis">Sexo/Genero/Sexualidad</div>
                          <span>
                            {item.sexo}</span> | <span>{item.genero} | <span> {item.Orientacion_sexual}</span>
                          </span>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">Barrio/Vereda</div>
                          <span>
                            {item.barrio_vereda}</span> | <span> Dir: {item.direccion} | <span>Corrg: {item.Corregimiento}</span>
                          </span>
                        </CTableDataCell>
                        {userDetails.USER_ROL === 'Administrador' && (
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">
                              <CDropdown>
                                <CDropdownToggle href="javascript:void(0);"
                                color="warning"
                                variant="outline"
                                size="lg"
                                style={{ textDecoration: 'none' }}>
                                 <CIcon icon={cilList} className="text-warning" size="lg" />
                                </CDropdownToggle>
                                <CDropdownMenu>
                                  <CDropdownItem href="javascript:void(0);"
                                  style={{ textDecoration: 'none' }}
                                  onClick={() => handleDesafiliarJH(item.ID)}>
                                     Trasladar o Desafiliar
                                    </CDropdownItem>
                                  <CDropdownItem href="javascript:void(0);"
                                     style={{ textDecoration: 'none' }}
                                     onClick={() => handleCertificadoJH(item.ID)}>
                                      Generar Certificado
                                    </CDropdownItem>
                                </CDropdownMenu>
                              </CDropdown>
                          </div>
                        </CTableDataCell>
                        )}
                          <CTableDataCell>
                            <div className="small text-medium-emphasis">
                              <CTooltip
                                content="Ir Nucleo Familia"
                                placement="bottom"
                              >
                                <CButton style={{ 'width': '100%' }}
                                  color="primary"
                                  variant="outline"
                                  size="lg"
                                  onClick={() => idJefeHogar(item.ID)}
                                >
                                  <CIcon icon={cilArrowThickFromLeft} size="lg" />
                                </CButton></CTooltip>
                            </div>
                          </CTableDataCell>
                          <CTableDataCell>
                          <div className="small text-medium-emphasis">
                            <CTooltip
                              content="Actulizar Jefe hogar"
                              placement="bottom"
                            >
                              <CButton style={{ 'width': '100%' }}
                                color="info"
                                variant="outline"
                                size="lg"
                                onClick={() => EditarJefeHogar(item.ID)}
                              >
                              <CIcon icon={cilHighlighter} size="lg" />
                              </CButton>
                              </CTooltip>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">
                            <CTooltip
                              content="Eliminar Jefe hogar"
                              placement="bottom"
                            >
                              <CButton style={{ 'width': '100%' }}
                                color="danger"
                                variant="outline"
                                size="lg"
                                onClick={() => eliminarJefeHogar(item.ID)}
                              >
                                <CIcon icon={cilTrash} size="lg" />
                              </CButton></CTooltip>
                          </div>
                        </CTableDataCell>
                      </CTableRow>
                    ))
                  )}
                </CTableBody>
              </CTable>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <JefeHogarNuevo
        visibleM={visibleM}
        setVisibleM={setVisibleM}

      />
      <JefeHogarAct
       visibleMI={visibleMI}
       setVisibleMI={setVisibleMI}
        datoJefeHogar={datoJefeHogar}
        onChangeFormulario={onChangeFormulario}
        handleSubmitAct = {handleSubmitAct}
        setValidated = {setValidated}
        validated = {validated}
      />
    </CRow>
  )
}
export default JefeHogar
