/* eslint-disable prettier/prettier */
import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="http://www.afrourramba.com.co" target="_blank" rel="noopener noreferrer">
         URRAMBA
        </a>
        <span className="ms-1">&copy; 2024 Derechos reservados.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          URRAMBA for React
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
