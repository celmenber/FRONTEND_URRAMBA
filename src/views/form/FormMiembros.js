/* eslint-disable prettier/prettier */
/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react'
import FormMiembrosModal from './modal/FormMiembrosModal'

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
  CCardTitle,
} from '@coreui/react'
//import { CLoadingButton } from '@coreui/react-pro'
import { MiembroForm } from 'src/hooks'
import CIcon from '@coreui/icons-react'
import avatar from 'src/assets/images/avatars/profile-default.jpg'
import {
  cilPeople,
  cilTrash,
} from '@coreui/icons'
import FormMiembrosActModal from './modal/FormMiembrosActModal'
import { SelectPicker } from 'rsuite'
import '../../../node_modules/rsuite/dist/rsuite.css';

const WidgetBarChart = () => {
  //const [selectServicio] = useState(1);
  //const [nombreEscolaridad, setNombreEscolaridad] = useState([]);
   const [valueCC, setValueCC] = useState(0)
   const [idConcejoC, setIdConcejoC] = useState(0)

  const {
    onChangeFormulario,
    handleSubmitAct,
    obtenerMiembro,
    obtenerConcejo,
    obtenerEscolaridad,
    eliminarMiembro,
    EditaMiembro,
    datoMiembro,
    miembro,
    consejos,
    userDetails,
    obtenerOrientacionSexual,
    visibleM,
    setVisibleM,
    visibleMI,
    setVisibleMI,
    setValidated,
    cargandolista,
  } = MiembroForm()


  useEffect(() => {
    obtenerConcejo();
    obtenerMiembro();
    obtenerEscolaridad()
    obtenerOrientacionSexual()

      // eslint-disable-next-line
  }, []);

 useEffect(() => {
     if(valueCC !== 0){
       setIdConcejoC(valueCC)
     }
    // eslint-disable-next-line
  }, [valueCC]);

    const lstMiembro = userDetails?.USER_ROL === 'Administrador'
                      ? miembro?.filter(X => parseInt(X.id_conncejo_comunitario) === parseInt(idConcejoC))
                      : miembro?.filter(U => parseInt(U.id_usuario) === parseInt(userDetails?.ID_USER))




  let data
  if(userDetails.USER_ROL === 'Administrador') {
     data = consejos?.map(
        item => ({
              label: 'CONCEJO COMUNITARIO '+ item.nombre_concejo_comunitario.toUpperCase(),
              value: item.ID.toString()
        })
    );
  }else{
     data = consejos?.filter(U => parseInt(U.id_usuario) === parseInt(userDetails.ID_USER))
  }

  console.log(consejos);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Gestión</strong> <small>Miembros Consejo</small>
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
                  {'Agregar Nuevo Miembros Consejo'}
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
          {/* proceso de listar archovos de las normativas */}
           <CCardBody>
             <CCardTitle>
          {userDetails.USER_ROL === 'Administrador' ? (
                <CCardTitle>
                    <div className="ml-2">
                      <SelectPicker
                          data={data}
                          placeholder="FILTRAR POR CONCEJO COMUNITARIO"
                          name="datoConcejoComunitario"
                          value={valueCC}
                          onChange={setValueCC}
                          size="lg"
                          block
                      />
                  </div>
              </CCardTitle>
          ) : (
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
                              Consejo Comunitario {data[0]?.nombre_concejo_comunitario}
                              </strong>
                              <div className="small text-medium-emphasis">
                                <span> Autoridad Afro  { data[0]?.nombres } { data[0]?.apellidos }</span>
                              </div>
                            </>
                          }
                        </div>
                      </div>
                    </CCol>
                  </CRow>
            </CCardTitle>
          )}
          </CCardTitle>
        </CCardBody>
          <CCardBody>
            <CForm key={0}>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} >Datos Miembro Consejo</CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} className="text-center">Cargo</CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} className="text-center">Estudios</CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} className="text-center">Genero</CTableHeaderCell>
                    <CTableHeaderCell colSpan={1} className="text-center">Ubicación</CTableHeaderCell>
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
                    lstMiembro?.map((item, index) => (
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
                        <CTableDataCell className="text-center">
                          <h6>{item.cargo_miembro}</h6>
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
                            {item.sexo}</span> | <span>{item.genero} | <span>{item.Orientacion_sexual}</span>
                          </span>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">Barrio/Vereda/Corregimiento</div>
                          <span>
                            {item.barrio_vereda}</span> | <span>{item.direccion} | <span>{item.Corregimiento}</span>
                          </span>
                        </CTableDataCell>
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
                                onClick={() => EditaMiembro(item.ID)}
                              >
                                {'Corregir'}
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
                                onClick={() => eliminarMiembro(item.ID)}
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
      <FormMiembrosModal
        visibleM={visibleM}
        setVisibleM={setVisibleM}

      />
      <FormMiembrosActModal
       visibleMI={visibleMI}
       setVisibleMI={setVisibleMI}
        datoMiembro={datoMiembro}
        onChangeFormulario={onChangeFormulario}
        handleSubmitAct = {handleSubmitAct}
        setValidated = {setValidated}
      />
    </CRow>
  )
}
export default WidgetBarChart
