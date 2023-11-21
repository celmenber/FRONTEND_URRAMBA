/* eslint-disable prettier/prettier */
import React from 'react'
import DashboardAdmin from './DashboardAdmin'
import DashboardConcejos from './DashboardConcejos'
import DashboardOperadores from './DashboardOperadores'


const Dashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  return (
    <>
      {currentUser.ID_ROLL === '1' ? <DashboardAdmin /> : <DashboardOperadores />}
    </>
  )
}

export default Dashboard
