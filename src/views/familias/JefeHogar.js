/* eslint-disable prettier/prettier */
/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react'


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
} from '@coreui/react'
//import { CLoadingButton } from '@coreui/react-pro'

import CIcon from '@coreui/icons-react'
import avatar from 'src/assets/images/avatars/profile-default.jpg'
import {
  cilLockLocked,
  cilLockUnlocked,
  cilPeople,
  cilTrash,
  cilArrowThickFromLeft,
} from '@coreui/icons'
import { CLoadingButton } from '@coreui/react-pro'

import JefeHogarNuevo from './modal/JefeHogarNuevo'
import JefeHogarAct from './modal/JefeHogarAct'
import { JefeHogarForm } from 'src/hooks/useJefeHogarForm'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const JefeHogar = () => {
/*   const [selectServicio] = useState(1);
  const [nombreEscolaridad, setNombreEscolaridad] = useState([]); */
  const history = useHistory();

  const {
    onChangeFormulario,
    handleSubmitAct,
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

  const idJefeHogar = (id) => {
    history.push(`/familias/nucleos/${id}`);
  }

  const lstJefeHogar = userDetails.USER_ROL === 'Administrador'
                      ? jefeHogar
                      : jefeHogar?.filter(U => U.id_usuario === userDetails.ID_USER)

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
                            <small style={{ marginLeft: '5px' }}>
                              {item.Tipo_documento}: {item.documentos}
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
                            {item.Veredas_Barrios}</span> | <span> Dir: {item.direccion} | <span>Corrg: {item.Corregimiento}</span>
                          </span>
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
                                {'Corregir'}
                              </CButton>
                              </CTooltip>
                          </div>
                        </CTableDataCell>
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
