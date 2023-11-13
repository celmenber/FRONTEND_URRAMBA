import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../action/AuthAction'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import avatar from './../../assets/images/avatars/profile-default.jpg'

const AppHeaderDropdown = () => {
  const dispatch = useDispatch()
  const handleLogout = async (event) => {
    logout(dispatch)
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Cuenta</CDropdownHeader>
        <CDropdownItem href="/dashboard">
          <CIcon icon={cilUser} className="me-2" />
          Mi Perfil
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="/#" onClick={handleLogout}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Salir
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
