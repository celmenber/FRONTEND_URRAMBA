/* eslint-disable prettier/prettier */
import React from 'react'
/* import { NavLink } from 'react-router-dom' */
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavItem} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { cilMenu } from '@coreui/icons'

import { AppHeaderDropdown } from './header/index'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.change.sidebarShow)
  const User = useSelector((state) => state.Auth.userDetails)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() =>
            dispatch({
              type: 'SET',
              sidebarShow: !sidebarShow,
            })
          }
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>

        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <strong>Bienvenido </strong>
            {`${User.NOMBRES} - ${User.USER_ROL}`}
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="">
          <CNavItem>
            <strong>Usuario</strong>({User.USERNAME})
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
