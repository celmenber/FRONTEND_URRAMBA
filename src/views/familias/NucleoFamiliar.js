/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { JefeHogarForm } from 'src/hooks/useJefeHogarForm'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import avatar from 'src/assets/images/avatars/profile-default.jpg'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CContainer,
  CForm,
  CFormInput,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CAvatar,
  CFormSelect,
  CSpinner,
  CTooltip,
  CRow,
  CFormFeedback,
  CFormLabel,
  CInputGroup,
  CCol,
  CCollapse,
} from '@coreui/react'
import { NucleoFamiliarForm } from 'src/hooks/useNucleoFamiliarForm'
import CIcon from '@coreui/icons-react'
import { cilPeople, cilTrash,cilArrowThickFromRight, cilHighlighter } from '@coreui/icons'
import { SelectPicker } from 'rsuite';
import '../../../node_modules/rsuite/dist/rsuite.css';
import { CLoadingButton } from '@coreui/react-pro'
const NucleoFamiliar = () => {
  const history = useHistory();
  const [mostrarJefeHByID, setMostrarJefeHByID] = useState(false)
  const [nuevaListaHogar, setNuevaListaHogar] = useState([])
  const [valueJH, setValueJH] = useState(0)
  const [visible, setVisible] = useState(false)
  const [selectServicio, setSelectServicio] = useState(1);
  const {
    jefeHogarByID,
    jefeHogarById
   } = JefeHogarForm()

   const {
    onChangeFormulario,
    handleSubmit,
    handleliminarMiembro,
    obtenerNucleoFamiliar,
    obtenertipodocumento,
    obtenerParentesco,
    obtenerEscolaridad,
    obtenerOrientacionSexual,
    obtenerJefeHogar,
    UpdateMiembroEstado,
    JefeHogar,
    userDetails,
    tipodocumento,
    nucleoFamiliar,
    parentesco,
    escolaridades,
    orientacion_sexuales,
    cargandolista,
    setDatoNucleoFamiliar,
    datoNucleoFamiliar,
    setIdJefeHogar,
    idJefeHogar,
    setNombreBotoGuardarActulizar,
    handleActualizarNucleoFamiliar,
    setSelectActivar,
    selectActivar,
    nombreBotoGuardarActulizar,
    validated,
    getEdad,
  } = NucleoFamiliarForm();

  const { id } = useParams()

  useEffect(() => {
    obtenerNucleoFamiliar()
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    obtenerJefeHogar();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    obtenerParentesco()
    obtenerEscolaridad()
    obtenerOrientacionSexual()
    obtenertipodocumento()
  }, []);


  useEffect(() => {

    if (id) {
      setMostrarJefeHByID(true)
      jefeHogarByID(id)
      setIdJefeHogar(id)
     } else {
      setMostrarJefeHByID(false)
    }
  }, [])

  useEffect(() => {
     if(valueJH !== 0){
       setIdJefeHogar(valueJH)
      setNuevaListaHogar(valueJH)
     }
    // eslint-disable-next-line
  }, [valueJH]);

  useEffect(() => {
     setNuevaListaHogar(idJefeHogar);
  }, [idJefeHogar]);

 const handletrasladamiembro = (id) => {
    history.push(`/familias/trasladamiembro/${id}`);
    }

  const handleregresar = () => {
      history.push(`/familias/jefehogar`);
      }

  const EditarFamiliar = (event, item) => {
    event.preventDefault();
    setNombreBotoGuardarActulizar('Actualizar Concejo Comunitario');
    setDatoNucleoFamiliar({
      ID: item.ID,
      Id_jefe_hogar: item.ID_jefehogar,
      Id_parentesco: item.id_parentesco,
      Id_tipo_documento:item.id_tipo_documento,
      Id_escolaridad:item.id_escolaridad,
      Id_orientacion_sexual: item.id_orientacion_sexual,
      Documentos:item.documentos,
      Nombres:item.nombres,
      Apellidos:item.apellidos,
      Estado_escolaridad:item.estado_escolaridad,
      Sexo:item.sexo,
      Genero:item.genero,
      Fecha_nacimiento: item.fecha_nacimiento === null ? '' : item.fecha_nacimiento
    })
    setVisible(true);
  };

  let data
  if(userDetails.USER_ROL === 'Administrador') {
     data = JefeHogar?.map(
        item => ({
              label: item.documentos+' '+ item.nombres.toUpperCase() +' '+item.apellidos.toUpperCase(),
              value: item.ID.toString()
        })
    );
  }else{
     data = JefeHogar?.filter(U => U.id_usuario === userDetails.ID_USER).map(
        item => ({
            label: item.documentos+' '+ item.nombres.toUpperCase() +' '+item.apellidos.toUpperCase(),
            value: item.ID.toString()
        })
    );
  }

  const handleSelectEst = (id) => {
    setSelectActivar(true)
    setSelectServicio(id)
    UpdateMiembroEstado(id)
  }

  return (
    <CContainer>
      <CCard>
        <CCardHeader>
          <strong>Nucleo Familiar</strong> <small>Miembros</small>
        </CCardHeader>
        <CCardHeader>
          {mostrarJefeHByID ? (
            <CCardTitle>
            <CRow>
             <CCol xs={10}>
              <div className="d-flex align-items-center">
                <CAvatar
                  className="m-2"
                  size="md"
                  src={avatar}
                  status={true ? 'success' : 'danger'}
                />
                <div className="ml-2">
                  {
                    <>
                    <strong>
                        {jefeHogarById?.nombres} {jefeHogarById?.apellidos}
                      </strong>
                      <div className="small text-medium-emphasis">
                        <span> Identidad: {jefeHogarById?.documentos}</span>
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
            </CCardTitle>
          ) : (
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
          )}
        </CCardHeader>
        <CCardBody>
          <CCardTitle>
           {/*  Miembros del núcleo Familiar */}
           <CButton onClick={() => setVisible(!visible)} color="secondary" style={{ width: '100%' }}>
            {visible ? 'Cerrar Formulario' : 'Abrir Formulario'}
            </CButton>
          </CCardTitle>
           <CCollapse visible={visible}>
             <CForm onSubmit={handleSubmit} noValidate  validated={validated}>
             <CRow>
               <CCol md={4}>
                <CFormLabel htmlFor="validationCustom01">Documento: </CFormLabel>
                <CInputGroup className="mb-3">
                  <CFormSelect
                  type='text'
                  id="Id_tipo_documento"
                  name="Id_tipo_documento"
                  placeholder="Tipo Documento"
                  value={datoNucleoFamiliar.Id_tipo_documento}
                  onChange={onChangeFormulario}
                  required>
                  <option key={'0'} value={''}>Seleccione...</option>
                {tipodocumento?.length === 0
                    ? <option key={'0'} value={''}>Seleccione...</option>
                    : (
                      tipodocumento?.filter(item => item.Estado !== null).map(item => (
                        <option
                          key={item.ID}
                          value={item.ID}
                        >
                          {item.Codigo}
                        </option>
                      ))
                    )}
                </CFormSelect>
                  {/* divide cajas */}
                 <CFormInput style={{
                  width: '50%',
                  borderTopRightRadius:'5px',
                  borderBottomRightRadius:'5px'
                   }}
                  type="number"
                  id="Documentos"
                  name="Documentos"
                  placeholder="Documento"
                  value={datoNucleoFamiliar.Documentos}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>Numero y tipo documento Requerido!</CFormFeedback>
                </CInputGroup>
              </CCol>
               <CCol md={3}>
                <CFormLabel htmlFor="validationCustom01">Nombres: </CFormLabel>
                 <CFormInput
                  type="text"
                  id="Nombres"
                  name="Nombres"
                  placeholder="Nombres"
                  value={datoNucleoFamiliar.Nombres}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>Nombres Requerido!</CFormFeedback>
              </CCol>
               <CCol md={3}>
                <CFormLabel htmlFor="validationCustom01">Apellidos: </CFormLabel>
                <CFormInput
                  type="text"
                  id="Apellidos"
                  name="Apellidos"
                  placeholder="Apellidos"
                  value={datoNucleoFamiliar.Apellidos}
                  onChange={onChangeFormulario}
                  required
                />
                <CFormFeedback invalid>Apellidos Requerido!</CFormFeedback>
              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="validationCustom01">Parentesco: </CFormLabel>
                <CFormSelect
                  type="text"
                  id="Id_parentesco"
                  name="Id_parentesco"
                  placeholder="Seleccione..."
                  value={datoNucleoFamiliar.Id_parentesco}
                  onChange={onChangeFormulario}
                  required>
                    <option key={'0'} value={''}>Seleccione...</option>
                {parentesco?.length === 0
                    ? <option key={'0'} value={''}>Seleccione...</option>
                    : (
                      parentesco?.filter(item => item.Estado !== null).map(item => (
                        <option
                          key={item.ID}
                          value={item.ID}
                        >
                          {item.Nombre}
                        </option>
                      ))
                    )}
                </CFormSelect>
                <CFormFeedback invalid>Parentesco Requerido!</CFormFeedback>
              </CCol>
            </CRow>
              <br/>
             <CRow>

               <CCol md={2}>
                <CFormLabel htmlFor="validationCustom01">Escolaridad: </CFormLabel>
                  <CFormSelect
                  type='text'
                  id="Id_escolaridad"
                  name="Id_escolaridad"
                  placeholder="Escolaridad"
                  value={datoNucleoFamiliar.Id_escolaridad}
                  onChange={onChangeFormulario}
                  required>
                  <option key={'0'} value={''}>Seleccione...</option>
                {escolaridades?.length === 0
                    ? <option key={'0'} value={''}>Seleccione...</option>
                    : (
                      escolaridades?.filter(item => item.ID
                        !== null).map(item => (
                        <option
                          key={item.ID}
                          value={item.ID}
                        >
                          {item.Nombre}
                        </option>
                      ))
                    )}
                </CFormSelect>
                <CFormFeedback invalid>Escolaridad Requerida!</CFormFeedback>
              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="validationCustom01">Estado Escolaridad: </CFormLabel>
                  <CFormSelect
                  id="Estado_escolaridad"
                  name='Estado_escolaridad'
                  value={datoNucleoFamiliar.Estado_escolaridad}
                  onChange={onChangeFormulario}
                  required>
                  <option value={''}>Seleccione...</option>
                  <option value={'Terminado'}>Terminado</option>
                  <option value={'Cursando'}>Cursando</option>
                  <option value={'Retirado'}>Retirado</option>
                </CFormSelect>
                <CFormFeedback invalid>Estado Escolaridad Requerido!</CFormFeedback>
              </CCol>
               <CCol md={2}>
                <CFormLabel htmlFor="validationCustom01">Genero: </CFormLabel>
                <CFormSelect
                  id="Genero"
                  name='Genero'
                  value={datoNucleoFamiliar.Genero}
                  onChange={onChangeFormulario}
                  required>
                  <option value={''}>Seleccione...</option>
                  <option value={'Masculino'}>Masculino</option>
                  <option value={'Femenino'}>Femenino</option>
                </CFormSelect>
                <CFormFeedback invalid>Genero Requerido!</CFormFeedback>
              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="validationCustom01">Sexo: </CFormLabel>
                <CFormSelect
                  id="Sexo"
                  name='Sexo'
                  value={datoNucleoFamiliar.Sexo}
                  onChange={onChangeFormulario}
                  required>
                  <option value={''}>Seleccione...</option>
                  <option value={'Hombre'}>Hombre</option>
                  <option value={'Mujer'}>Mujer</option>
                </CFormSelect>
                <CFormFeedback invalid>Sexo Requerido!</CFormFeedback>
              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="validationCustom01">Orientacion Sexual:</CFormLabel>
                <CFormSelect
                  id="Id_orientacion_sexual"
                  name='Id_orientacion_sexual'
                  value={datoNucleoFamiliar.Id_orientacion_sexual}
                  onChange={onChangeFormulario}
                  required>
                  <option key={''} value={''}>Seleccione...</option>
                  {orientacion_sexuales?.length === 0
                    ? <option key={''} value={''}>Seleccione...</option>
                    : (
                      orientacion_sexuales?.map(item => (
                        <option
                          key={item.ID}
                          value={item.ID}
                        >
                          {item.Nombre}
                        </option>
                      ))
                    )}
                </CFormSelect>
                <CFormFeedback invalid>Orientacion Sexual Requerida!</CFormFeedback>
              </CCol>
                <CCol md={2}>
                <CFormLabel htmlFor="validationCustom01">Fecha de Nacimiento: </CFormLabel>
               <CFormInput
                  type="Date"
                  id="Fecha_nacimiento"
                  name='Fecha_nacimiento'
                  value={datoNucleoFamiliar.Fecha_nacimiento}
                  placeholder="Fecha de Nacimiento"
                  onChange={onChangeFormulario}
                  required />
                <CFormFeedback invalid>Fecha Nacimiento Requerida!</CFormFeedback>
              </CCol>
            </CRow>
            <br/>
            <CButton
                  type="button"
                  color={'primary'}
                  variant="outline"
                  className="px-4"
                  style={{ width: '100%' }}
                  onClick={nombreBotoGuardarActulizar === 'Agregar Nuevo Nucleo Familiar'
                  ? handleSubmit
                  : handleActualizarNucleoFamiliar}
                >
                  {nombreBotoGuardarActulizar}
                </CButton>
          </CForm></CCollapse>
          <br/>
          <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} >Datos Nucleo Familiar</CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} className="text-center">Parentesco</CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} className="text-center">Estudios</CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} className="text-center">Genero</CTableHeaderCell>
                    <CTableHeaderCell colSpan={3} className="text-center">Acciones</CTableHeaderCell>
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
                    nucleoFamiliar?.filter(item => item?.ID_jefehogar === parseInt(nuevaListaHogar)).map((item, index) => (
                      <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">
                            <CTooltip
                              content={item.estado === '1' ? 'Desactivar' : 'Activar'}
                              placement="bottom"
                            >
                                {selectServicio === item.ID && selectActivar === true ? (
                                <CLoadingButton
                                  variant="outline"
                                  size="lg"
                                  color={item.estado === '1' ? 'secondary' : 'success'}
                                  style={{ width: '100%' }}
                                  timeout={2000}
                                ></CLoadingButton>
                              ) : (
                                <CButton
                                  size="lg"
                                  color={parseInt(item.estado) === 1 ? 'success' : 'secondary'}
                                  style={{ width: '100%' }}
                                      id={`estadoM${item.ID}`}
                                      key={`M${item.ID}`}
                                      onClick={() => handleSelectEst(item.ID)}
                                >
                                    {parseInt(item.estado) === 1 ? (
                                      <CAvatar size="xs"
                                        key={index}
                                        src={avatar}
                                        status={parseInt(item.estado) === 1 ? 'success' : 'secondary'}
                                      />
                                  ) : (
                                    <CAvatar size="xs"
                                             key={index}
                                             src={avatar}
                                             status={parseInt(item.estado)=== 1 ? 'success' : 'secondary'}
                                  />
                                  )}
                                </CButton>
                              )}
                            </CTooltip>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div>
                            <span> <strong>
                              {item.nombres} {item.apellidos}
                            </strong></span><br></br>
                            <small style={{ marginLeft: '1px' }}>
                              {item.Tipo_documento}: {item.documentos}
                            </small>
                          </div>
                          <div className="small text-medium-emphasis">
                            <span>Edad: {getEdad(item.fecha_nacimiento)} Años</span>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                           <span>
                            <span>{item.Parentesco}</span>
                            </span>
                        </CTableDataCell>
                        <CTableDataCell>
                        <div className="small text-medium-emphasis">Escolaridad/Estado</div>
                          <span>{item.Escolaridad }</span> | <span>{ item.estado_escolaridad }</span>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">Sexo/Genero/Sexualidad</div>
                          <span>
                            {item.sexo}</span> | <span>{item.genero} | <span>{item.Orientacion_sexual}</span>
                          </span>
                        </CTableDataCell>
                        {userDetails.USER_ROL === 'Administrador' && (
                        <CTableDataCell>
                           <div className="small text-medium-emphasis">
                            <CTooltip content="Trasladar miembro." placement="bottom">
                                <CButton
                                     variant="outline"
                                     size="lg"
                                     color="warning"
                                     style={{ width: '100%' }}
                                      id={`Clave${item.ID}`}
                                      key={item.ID}
                                      onClick={() => handletrasladamiembro(item.ID)}
                                >
                                     {'Trasladar'}
                                </CButton>
                            </CTooltip>
                          </div>
                        </CTableDataCell>)}
                          <CTableDataCell>
                          <div className="small text-medium-emphasis">
                            <CTooltip
                              content="Actulizar Miembro"
                              placement="bottom"
                            >
                              <CButton style={{ 'width': '100%' }}
                                color="info"
                                variant="outline"
                                size="lg"
                                onClick={(event) => EditarFamiliar(event, item)}
                              >
                               <CIcon icon={cilHighlighter} size="lg" />
                              </CButton>
                              </CTooltip>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">
                            <CTooltip
                              content="Eliminar Miembro"
                              placement="bottom"
                            >
                              <CButton style={{ 'width': '100%' }}
                                color="danger"
                                variant="outline"
                                size="lg"
                                onClick={() => handleliminarMiembro(item.ID)}
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
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default NucleoFamiliar
