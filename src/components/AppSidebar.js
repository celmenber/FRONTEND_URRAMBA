/* eslint-disable prettier/prettier */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CCardImage, CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react'
import { AppSidebarNav } from './AppSidebarNav'
import logo from '../assets/images/avatars/logo.png'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import { administrador_nav, operadores_nav, autoridades_nav } from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.change.sidebarShow)
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  let _nav;
  if(parseInt(currentUser.ID_ROLL) === 1){
      _nav =administrador_nav
  }else if(parseInt(currentUser.ID_ROLL) === 2){
      _nav = operadores_nav
  }else if(parseInt(currentUser.ID_ROLL) === 3 ){
      _nav = autoridades_nav
  }

 // const _nav = parseInt(currentUser.ID_ROLL) === 1 ? administrador_nav : operadores_nav

  return (
    <CSidebar
      position="fixed"
      unfoldable={false}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/" style={{backgroundColor:'#fff'}}>
        <CCardImage orientation="top" src={logo} style={{ width: '80%' }} />
        {/* <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} /> */}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={_nav} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
