/* eslint-disable no-script-url */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NucleoFamiliarForm, JefeHogarForm } from 'src/hooks'
import DocumentoPdf from './ReporteDocument'
import avatar from 'src/assets/images/avatars/profile-default.jpg'
import {
  CContainer,
  CCardHeader,
  CCard,
  CCardBody,
  CForm,
  CCardTitle,
  CRow,
  CCol,
  CAvatar,
  CButton,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import CIcon from '@coreui/icons-react'
import { cilArrowThickFromRight } from '@coreui/icons'

const Certificados = () => {
  const {
    obtenerNucleoFamiliar,
    obtenerAsociacion,
    nucleoFamiliar,
    asociacion,
    setIdJefeHogar,
    idJefeHogar,
  } = NucleoFamiliarForm()
  const { obtenerJefeHogar, jefeHogar, jefeHogarByID, jefeHogarById } = JefeHogarForm()

  const history = useHistory()

  const [nuevaListaHogar, setNuevaListaHogar] = useState([])
  const [selectServicio, setSelectServicio] = useState(0)

  const { id } = useParams()

  const handleregresar = () => {
    history.push(`/familias/jefehogar`)
  }

  useEffect(() => {
    obtenerJefeHogar()
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    obtenerNucleoFamiliar()
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    obtenerAsociacion()
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // jefeHogarByID(id)
    setIdJefeHogar(id)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setNuevaListaHogar(idJefeHogar)
  }, [idJefeHogar])

  const handleListItem = (ID) => {
    setSelectServicio(ID)
  }

  const DatoJefeHogar = jefeHogar.filter((X) => parseInt(X.ID) === parseInt(id))
  const DatoNucleoFamiliar = nucleoFamiliar?.filter(
    (item) => parseInt(item?.ID_jefehogar) === parseInt(nuevaListaHogar),
  )

  return (
    <CContainer>
      <CCard>
        <CCardHeader>
          <strong>Reportes</strong> <small>Certificados</small>
        </CCardHeader>
        <CCardHeader>
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
                          {DatoJefeHogar[0]?.nombres.toUpperCase()}{' '}
                          {DatoJefeHogar[0]?.apellidos.toUpperCase()}
                        </strong>
                        <div className="small text-medium-emphasis">
                          <span>
                            {' '}
                            <strong> Jefe de Hogar </strong>
                          </span>
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
                  style={{ width: '70%', marginTop: '12px', float: 'right' }}
                  onClick={() => handleregresar()}
                >
                  <CIcon icon={cilArrowThickFromRight} size="md" /> {'Regresar'}
                </CButton>
              </CCol>
            </CRow>
          </CCardTitle>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CListGroup>
              <CListGroupItem
                component="a"
                href="javascript:void(0);"
                active={selectServicio === 0 ? true : false}
                onClick={() => handleListItem(0)}
              >
                {'1 -'} {DatoJefeHogar[0]?.nombres.toUpperCase()}{' '}
                {DatoJefeHogar[0]?.apellidos.toUpperCase()} {'(Jefe de Hogar)'}
              </CListGroupItem>
              {DatoNucleoFamiliar.map((item, index) => (
                <CListGroupItem
                  key={item.ID}
                  component="a"
                  href="javascript:void(0);"
                  active={selectServicio === item.ID ? true : false}
                  onClick={() => handleListItem(item.ID)}
                >
                  {index + 2} - {item.nombres?.toUpperCase()} {item.apellidos.toUpperCase()} {''}
                  {`(${item.Parentesco})`}
                </CListGroupItem>
              ))}
            </CListGroup>
          </CForm>
        </CCardBody>
        <CCardBody>
          <>
            <DocumentoPdf
              DataJH={jefeHogar}
              DataMH={DatoNucleoFamiliar}
              DataAS={asociacion}
              ID={id}
              Item={selectServicio}
            />
          </>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default Certificados
