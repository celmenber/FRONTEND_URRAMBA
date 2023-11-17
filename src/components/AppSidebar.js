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
import { administrador_nav, Concejo_nav } from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.change.sidebarShow)
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
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
          <AppSidebarNav items={currentUser.ID_ROLL === '1' ? administrador_nav : Concejo_nav} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
