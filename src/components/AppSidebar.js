import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CCardImage, CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react'
// import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

//import { logoNegative } from 'src/assets/brand/logo-negative'
//import { sygnet } from 'src/assets/brand/sygnet'

import logo from '../assets/images/avatars/logo.png'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import { administrador_nav, operadores_nav, encuestadores_nav } from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.change.sidebarShow)
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  let items
  switch (currentUser.ID_ROLL) {
    case '1':
      items = administrador_nav
      break
    case '2':
      items = operadores_nav
      break
    default:
      items = encuestadores_nav
      break
  }
  return (
    <CSidebar
      position="fixed"
      unfoldable={false}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <CCardImage orientation="top" src={logo} style={{ width: '80%' }} />
        {/* <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} /> */}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={items} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
