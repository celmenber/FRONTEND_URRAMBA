/* eslint-disable prettier/prettier */
import React from 'react'
import DashboardAdmin from './DashboardAdmin'
import DashboardConcejos from './DashboardConcejos'

const Dashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  return (
    <>
      {parseInt(currentUser.ID_ROLL) === 1 ? <DashboardAdmin /> : <DashboardConcejos />}
    </>
  )
}

export default Dashboard
