import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://www.car.gov.co/" target="_blank" rel="noopener noreferrer">
          C.A.R
        </a>
        <span className="ms-1">&copy; 2022 Derechos reservados.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          C.A.R for React
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
